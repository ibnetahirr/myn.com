"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";

const API_BASE = "https://mynapi.onrender.com/voice-agent";
//const API_BASE = "http://127.0.0.1:8000/voice-agent";

export default function Features2(): JSX.Element {
  const [status, setStatus] = useState<
    "idle" | "connecting" | "listening" | "connected" | "error"
  >("idle");

  const pcRef = useRef<RTCPeerConnection | null>(null);
  const dcRef = useRef<RTCDataChannel | null>(null);
  const remoteAudioRef = useRef<HTMLAudioElement | null>(null);
  const micStreamRef = useRef<MediaStream | null>(null);

  // Our app-level session id (UUID from backend)
  const sessionIdRef = useRef<string | null>(null);

  const start = async (): Promise<void> => {
    try {
      console.log("[VoiceAgent] Starting session…");
      setStatus("connecting");

      micStreamRef.current = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });
      console.log("[VoiceAgent] Got user media (mic)");

      const pc = new RTCPeerConnection();
      pcRef.current = pc;

      micStreamRef.current
        .getTracks()
        .forEach((t) => pc.addTrack(t, micStreamRef.current!));

      pc.ontrack = (ev) => {
        console.log("[VoiceAgent] Received remote audio track", ev.streams);
        if (remoteAudioRef.current) {
          remoteAudioRef.current.srcObject = ev.streams[0];
          remoteAudioRef.current
            .play()
            .then(() => {
              console.log("[VoiceAgent] Remote audio playing");
            })
            .catch((err) => {
              console.warn("[VoiceAgent] Error playing remote audio:", err);
            });
        }
      };

      pc.onconnectionstatechange = () => {
        console.log("[VoiceAgent] PeerConnection state:", pc.connectionState);
      };

      pc.oniceconnectionstatechange = () => {
        console.log(
          "[VoiceAgent] ICE connection state:",
          pc.iceConnectionState
        );
      };

      const dc = pc.createDataChannel("oai-events");
      dcRef.current = dc;

      dc.onopen = () => {
        console.log("[VoiceAgent] DataChannel opened");
      };

      dc.onclose = () => {
        console.log("[VoiceAgent] DataChannel closed");
      };

      dc.onerror = (err) => {
        console.error("[VoiceAgent] DataChannel error:", err);
      };

      const pendingCalls = new Map<
        string,
        { callId: string; name: string; argsText: string }
      >();

      dc.onmessage = async (e) => {
        let msg: any;
        try {
          msg = JSON.parse(e.data);
        } catch {
          console.warn("[VoiceAgent] Non-JSON DC message:", e.data);
          return;
        }

        console.log("[VoiceAgent] DC message parsed:", msg.type, msg);

        // 1) Track when a function_call is created
        if (
          msg.type === "response.output_item.added" &&
          msg.item?.type === "function_call"
        ) {
          const responseId: string = msg.response_id;
          const callId: string = msg.item?.id || msg.item?.call_id || "";
          const name: string = msg.item?.name;

          console.log("[VoiceAgent] Function call added:", {
            responseId,
            callId,
            name,
          });

          if (!responseId || !callId) return;
          pendingCalls.set(responseId, { callId, name, argsText: "" });
        }

        // 2) Accumulate function_call arguments
        if (msg.type === "response.function_call_arguments.delta") {
          const responseId: string = msg.response_id;
          const delta: string = msg.delta || "";
          const entry = pendingCalls.get(responseId);

          console.log(
            "[VoiceAgent] Function args delta:",
            responseId,
            "delta:",
            delta
          );

          if (entry) entry.argsText += delta;
        }

        // 3) When the response is done, we have full args and can call our backend
        if (msg.type === "response.done") {
          const responseId: string =
            msg.response?.id || msg.response_id || msg.id;
          const entry = pendingCalls.get(responseId);

          console.log("[VoiceAgent] response.done for:", responseId, entry);

          if (!entry) return;

          let args: Record<string, any> = {};
          try {
            args = entry.argsText ? JSON.parse(entry.argsText) : {};
          } catch {
            console.warn(
              "[VoiceAgent] Could not parse function args JSON:",
              entry.argsText
            );
          }

          console.log("[VoiceAgent] Parsed function args:", args);

          // --- Our tool: search_knowledge ---
          if (entry.name === "search_knowledge") {
            const query = args.query || "";
            const top_k = args.top_k || 5;

            console.log("[VoiceAgent] Calling /search_knowledge with:", {
              query,
              top_k,
              session_id: sessionIdRef.current,
            });

            try {
              const ragRes = await fetch(`${API_BASE}/search_knowledge`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  query,
                  top_k,
                  session_id: sessionIdRef.current, // tie to this chat
                }),
              }).then((r) => r.json());

              console.log("[VoiceAgent] /search_knowledge response:", ragRes);

              const context = ragRes?.context_snippet || "No results found.";
              const results = ragRes?.results || [];

              console.log(
                "[VoiceAgent] Context snippet length:",
                context.length
              );
              console.log(
                "[VoiceAgent] Number of Qdrant results:",
                Array.isArray(results) ? results.length : "N/A"
              );

              if (Array.isArray(results)) {
                results.slice(0, 3).forEach((r: any, idx: number) => {
                  console.log(
                    `[VoiceAgent] Result #${idx + 1}: score=`,
                    r.score,
                    "payloadKeys=",
                    r.payload ? Object.keys(r.payload) : []
                  );
                });
              }

              // Send tool output back into the realtime session
              dc.send(
                JSON.stringify({
                  type: "conversation.item.create",
                  item: {
                    type: "function_call_output",
                    call_id: entry.callId,
                    output: context,
                  },
                })
              );

              dc.send(
                JSON.stringify({
                  type: "response.create",
                  response: {
                    modalities: ["audio", "text"],
                    instructions: `Answer ONLY using this context:\n${context}\nIf nothing relevant, say "I couldn't find anything about that."`,
                  },
                })
              );
            } catch (err) {
              console.error(
                "[VoiceAgent] Error calling /search_knowledge:",
                err
              );
            }
          }

          pendingCalls.delete(responseId);
        }
      };

      const offer = await pc.createOffer();
      await pc.setLocalDescription(offer);
      console.log("[VoiceAgent] Created local offer");

      console.log("[VoiceAgent] Requesting /session…");
      const sess = await fetch(`${API_BASE}/session`, { method: "POST" }).then(
        (r) => r.json()
      );
      console.log("[VoiceAgent] /session response:", sess);

      // Grab our app-level session id from backend
      const appSessionId: string | undefined = sess.app_session_id;
      if (appSessionId) {
        console.log("[VoiceAgent] Using app_session_id:", appSessionId);
        sessionIdRef.current = appSessionId;
      } else {
        // Fallback: generate client-side id if backend not updated yet
        const fallbackId =
          typeof crypto !== "undefined" && "randomUUID" in crypto
            ? crypto.randomUUID()
            : `client-${Date.now()}-${Math.random().toString(36).slice(2)}`;
        sessionIdRef.current = fallbackId;
        console.warn(
          "[VoiceAgent] No app_session_id from server, using client-generated id:",
          sessionIdRef.current
        );
      }

      const token: string =
        sess?.client_secret?.value || sess?.client_secret || sess?.id;
      const model = sess?.model || "gpt-4o-realtime-preview-2025-06-03";

      if (!token) {
        console.error("[VoiceAgent] No token from /session");
        setStatus("error");
        return;
      }

      console.log(
        "[VoiceAgent] Connecting to OpenAI Realtime with model:",
        model
      );

      const answerSDP = await fetch(
        `https://api.openai.com/v1/realtime?model=${model}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/sdp",
          },
          body: offer.sdp,
        }
      ).then((r) => r.text());

      console.log("[VoiceAgent] Received SDP answer from OpenAI");

      await pc.setRemoteDescription({ type: "answer", sdp: answerSDP });
      console.log("[VoiceAgent] Set remote description, WebRTC connected");

      setStatus("connected"); // active state; waves will remain visible
    } catch (err) {
      console.error("[VoiceAgent] Error in start():", err);
      setStatus("error");
      stop();
    }
  };

  const stop = (): void => {
    console.log("[VoiceAgent] Stopping session");
    setStatus("idle");
    try {
      dcRef.current?.close();
      pcRef.current?.getSenders()?.forEach((s) => s.track?.stop());
      micStreamRef.current?.getTracks()?.forEach((t) => t.stop());
      pcRef.current?.close();
    } catch (err) {
      console.warn("[VoiceAgent] Error while stopping:", err);
    }
    dcRef.current = null;
    pcRef.current = null;
    micStreamRef.current = null;
    sessionIdRef.current = null;
  };

  const toggleVoice = (): void => {
    if (status === "idle" || status === "error") {
      console.log("[VoiceAgent] Toggle: starting (status was", status, ")");
      setStatus("listening"); // for UX
      void start();
    } else {
      console.log("[VoiceAgent] Toggle: stopping (status was", status, ")");
      stop();
    }
  };

  return (
    <section
      id="voice-agent"
      className="position-relative overflow-hidden text-center py-5"
    >
      <div className="container-fluid position-relative">
        <div className="d-flex flex-column justify-content-center align-items-center min-vh-100 position-relative z-2">
          <div className="container position-relative z-1">
            <div className="text-center mb-8">
              <h3 className="my-3 fw-black">
                Got questions? Speak with us now.
              </h3>
              <p className="opacity-75 mb-2 fs-5">
                Your AI wellness guide — ready to talk, listen, and assist you
                on your yoga and wellness journey.
              </p>
            </div>
          </div>

          {/* Voice Button + Waves */}
          <div className="d-flex justify-content-center position-relative overflow-visible">
            <div className="wave-wrap position-relative">
              {/* Waves visible during active states */}
              {status !== "idle" && status !== "error" && (
                <>
                  <span className="wave ring ring1" />
                  <span className="wave ring ring2" />
                  <span className="wave ring ring3" />
                </>
              )}

              <button
                onClick={toggleVoice}
                aria-label={status === "idle" ? "Start Talking" : "Stop"}
                className="btn rounded-circle fw-semibold d-flex align-items-center justify-content-center shadow-lg position-absolute top-50 start-50 translate-middle"
                style={{
                  width: "160px",
                  height: "160px",
                  backgroundColor:
                    status !== "idle" && status !== "error"
                      ? "#0d6efd" // BLUE when talking
                      : "#ffffff", // WHITE when idle
                  color:
                    status !== "idle" && status !== "error"
                      ? "#ffffff" // white text on blue
                      : "#000000", // black on white
                  fontSize: "1.05rem",
                  zIndex: 3,
                  transition: "transform .25s ease, background-color .25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.06)";
                  if (status !== "idle" && status !== "error") {
                    e.currentTarget.style.backgroundColor = "#dc3545"; // RED on hover while talking
                    e.currentTarget.style.color = "#ffffff";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.backgroundColor =
                    status !== "idle" && status !== "error"
                      ? "#0d6efd" // back to BLUE
                      : "#ffffff"; // idle = WHITE
                  e.currentTarget.style.color =
                    status !== "idle" && status !== "error"
                      ? "#ffffff"
                      : "#000000";
                }}
              >
                {status === "idle" ? "Start Talking" : "Stop"}
              </button>
            </div>
          </div>

          <audio ref={remoteAudioRef} autoPlay playsInline />
        </div>

        {/* Background Decoration */}
        <div className="position-absolute start-0 bottom-0 z-0 opacity-25">
          <img
            src="/assets/imgs/features-2/bg-img-favicon.png"
            alt="background pattern"
            className="img-fluid rotate-center"
            style={{ maxWidth: "400px" }}
          />
        </div>
      </div>

      <style jsx>{`
        .wave-wrap {
          width: 400px;
          height: 400px;
          overflow: visible;
          margin-top: 0.5rem; /* slight space under status */
        }

        .wave {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 160px;
          height: 160px;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
          z-index: 1;
        }

        .ring {
          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.9) 0%,
            rgba(255, 224, 130, 0.4) 40%,
            rgba(255, 193, 7, 0.15) 70%,
            rgba(255, 193, 7, 0) 100%
          );
          box-shadow: 0 0 40px rgba(255, 255, 255, 0.5),
            0 0 60px rgba(255, 193, 7, 0.25);
          animation: ripple 2.8s ease-out infinite;
          mix-blend-mode: screen;
        }

        .ring1 {
          animation-delay: 0s;
        }
        .ring2 {
          animation-delay: 0.9s;
        }
        .ring3 {
          animation-delay: 1.8s;
        }

        @keyframes ripple {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
          70% {
            opacity: 0.4;
          }
          100% {
            transform: translate(-50%, -50%) scale(3);
            opacity: 0;
          }
        }

        .rotate-center {
          animation: rotate-center 60s linear infinite;
        }

        @keyframes rotate-center {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>

      <div className="position-absolute top-0 start-50 translate-middle-x z-0">
        <img src="/assets/imgs/template/bg-line.png" alt="infinia" />
      </div>
      <div className="rotate-center ellipse-rotate-success position-absolute z-0" />
      <div className="rotate-center-rev ellipse-rotate-primary position-absolute z-0" />
    </section>
  );
}
