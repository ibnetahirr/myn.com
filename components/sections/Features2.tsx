"use client";

import React, { useRef, useState } from "react";

const API_BASE = "https://mynapi.onrender.com/voice-agent";
// const API_BASE = "http://127.0.0.1:8000/voice-agent";

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

  // Response IDs we've already saved (to avoid duplicate assistant messages)
  const savedResponseIdsRef = useRef<Set<string>>(new Set());

  // ----------------- HELPERS -----------------

  const getSessionId = (): string | null => sessionIdRef.current;

  // Generic save helper
  const postMessage = async (body: any) => {
    try {
      const res = await fetch(`${API_BASE}/messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const text = await res.text();
      if (!res.ok) {
        console.error(
          "[VoiceAgent] /messages error:",
          res.status,
          res.statusText,
          text
        );
      } else {
        console.log("[VoiceAgent] /messages ok:", text);
      }
    } catch (err) {
      console.warn("[VoiceAgent] Failed to call /messages:", err);
    }
  };

  // Recursively collect all text-like strings from an event or sub-object
  const extractTextFromEvent = (msg: any): string => {
    const texts: string[] = [];
    const visited = new Set<any>();

    const walk = (node: any) => {
      if (!node || typeof node !== "object") return;
      if (visited.has(node)) return;
      visited.add(node);

      if (typeof (node as any).text === "string") {
        texts.push((node as any).text);
      }
      if (typeof (node as any).transcript === "string") {
        texts.push((node as any).transcript);
      }
      if (typeof (node as any).output_text === "string") {
        texts.push((node as any).output_text);
      }

      if (Array.isArray(node)) {
        for (const v of node) walk(v);
      } else {
        for (const v of Object.values(node)) {
          if (v && typeof v === "object") walk(v);
        }
      }
    };

    walk(msg);
    return texts.join(" ").replace(/\s+/g, " ").trim();
  };

  // ----------------- START / STOP -----------------

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

      dc.onmessage = async (e) => {
        let msg: any;
        try {
          msg = JSON.parse(e.data);
        } catch {
          console.warn("[VoiceAgent] Non-JSON DC message:", e.data);
          return;
        }

        const type: string = msg.type || "";
        console.log("[VoiceAgent] DC message parsed:", type, msg);

        const sessionId = getSessionId();
        if (!sessionId) return;

        // ---------- USER SIDE ----------
        // When Whisper finishes transcribing the user's input
        if (type === "conversation.item.input_audio_transcription.completed") {
          const transcript: string =
            typeof msg.transcript === "string"
              ? msg.transcript
              : extractTextFromEvent(msg);

          console.log("[VoiceAgent] User transcription completed:", transcript);

          if (transcript && transcript.trim()) {
            await postMessage({
              session_id: sessionId,
              role: "user",
              query: transcript.trim(),
              answer: null,
              metadata: { type },
            });
          }
          return;
        }

        // ---------- ASSISTANT SIDE ----------
        if (type === "response.done" || type === "response.completed") {
          const responseId: string =
            msg.response?.id || msg.id || msg.response_id || "";

          if (responseId) {
            if (savedResponseIdsRef.current.has(responseId)) {
              console.log(
                "[VoiceAgent] Skipping duplicate response id:",
                responseId
              );
              return;
            }
            savedResponseIdsRef.current.add(responseId);
          }

          const base = msg.response || msg;
          const assistantText = extractTextFromEvent(base);
          console.log(
            "[VoiceAgent] Assistant text extracted for save:",
            assistantText
          );

          if (assistantText && assistantText.trim()) {
            await postMessage({
              session_id: sessionId,
              role: "assistant",
              query: null,
              answer: assistantText.trim(),
              metadata: { type },
            });
          }
          return;
        }

        // Ignore other events
      };

      const offer = await pc.createOffer();
      await pc.setLocalDescription(offer);
      console.log("[VoiceAgent] Created local offer");

      console.log("[VoiceAgent] Requesting /session…");
      const sess = await fetch(`${API_BASE}/session`, {
        method: "POST",
      }).then((r) => r.json());
      console.log("[VoiceAgent] /session response:", sess);

      // Grab our app-level session id from backend
      const appSessionId: string | undefined = sess.app_session_id;
      if (appSessionId) {
        console.log("[VoiceAgent] Using app_session_id:", appSessionId);
        sessionIdRef.current = appSessionId;
      } else {
        const fallbackId =
          typeof crypto !== "undefined" && "randomUUID" in crypto
            ? crypto.randomUUID()
            : `client-${Date.now()}-${Math.random()
                .toString(36)
                .slice(2)}`;
        sessionIdRef.current = fallbackId;
        console.warn(
          "[VoiceAgent] No app_session_id from server, using client-generated id:",
          sessionIdRef.current
        );
      }

      const token: string =
        sess?.client_secret?.value ||
        sess?.client_secret ||
        sess?.id;
      const model =
        sess?.model || "gpt-4o-realtime-preview-2025-06-03";

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

      setStatus("connected");
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
    savedResponseIdsRef.current.clear();
  };

  const toggleVoice = (): void => {
    if (status === "idle" || status === "error") {
      console.log("[VoiceAgent] Toggle: starting (status was", status, ")");
      setStatus("listening");
      void start();
    } else {
      console.log("[VoiceAgent] Toggle: stopping (status was", status, ")");
      stop();
    }
  };

  // ----------------- UI (unchanged) -----------------

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
                      ? "#0d6efd"
                      : "#ffffff",
                  color:
                    status !== "idle" && status !== "error"
                      ? "#ffffff"
                      : "#000000",
                  fontSize: "1.05rem",
                  zIndex: 3,
                  transition: "transform .25s ease, background-color .25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.06)";
                  if (status !== "idle" && status !== "error") {
                    e.currentTarget.style.backgroundColor = "#dc3545";
                    e.currentTarget.style.color = "#ffffff";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.backgroundColor =
                    status !== "idle" && status !== "error"
                      ? "#0d6efd"
                      : "#ffffff";
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
          margin-top: 0.5rem;
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
