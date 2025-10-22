"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";

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

  const start = async (): Promise<void> => {
    try {
      setStatus("connecting");
      micStreamRef.current = await navigator.mediaDevices.getUserMedia({ audio: true });

      const pc = new RTCPeerConnection();
      pcRef.current = pc;
      micStreamRef.current.getTracks().forEach((t) => pc.addTrack(t, micStreamRef.current!));

      pc.ontrack = (ev) => {
        if (remoteAudioRef.current) {
          remoteAudioRef.current.srcObject = ev.streams[0];
          remoteAudioRef.current.play().catch(() => {});
        }
      };

      const dc = pc.createDataChannel("oai-events");
      dcRef.current = dc;

      const pendingCalls = new Map<
        string,
        { callId: string; name: string; argsText: string }
      >();

      dc.onmessage = async (e) => {
        let msg: any;
        try {
          msg = JSON.parse(e.data);
        } catch {
          console.warn("Non-JSON DC message:", e.data);
          return;
        }

        if (msg.type === "response.output_item.added" && msg.item?.type === "function_call") {
          const responseId: string = msg.response_id;
          const callId: string = msg.item?.id || msg.item?.call_id || "";
          const name: string = msg.item?.name;
          if (!responseId || !callId) return;
          pendingCalls.set(responseId, { callId, name, argsText: "" });
        }

        if (msg.type === "response.function_call_arguments.delta") {
          const responseId: string = msg.response_id;
          const delta: string = msg.delta || "";
          const entry = pendingCalls.get(responseId);
          if (entry) entry.argsText += delta;
        }

        if (msg.type === "response.done") {
          const responseId: string = msg.response?.id || msg.response_id || msg.id;
          const entry = pendingCalls.get(responseId);
          if (!entry) return;

          let args: Record<string, any> = {};
          try {
            args = entry.argsText ? JSON.parse(entry.argsText) : {};
          } catch {
            console.warn("Could not parse function args JSON:", entry.argsText);
          }

          if (entry.name === "search_knowledge") {
            const query = args.query || "";
            const top_k = args.top_k || 5;
            const ragRes = await fetch(`${API_BASE}/search_knowledge`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ query, top_k }),
            }).then((r) => r.json());

            const context = ragRes?.context_snippet || "No results found.";

            dc.send(
              JSON.stringify({
                type: "conversation.item.create",
                item: { type: "function_call_output", call_id: entry.callId, output: context },
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
          }

          pendingCalls.delete(responseId);
        }
      };

      const offer = await pc.createOffer();
      await pc.setLocalDescription(offer);

      const sess = await fetch(`${API_BASE}/session`, { method: "POST" }).then((r) => r.json());
      const token: string = sess?.client_secret?.value || sess?.client_secret || sess?.id;
      const model = sess?.model || "gpt-4o-realtime-preview-2025-06-03";
      if (!token) {
        setStatus("error");
        return;
      }

      const answerSDP = await fetch(`https://api.openai.com/v1/realtime?model=${model}`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/sdp" },
        body: offer.sdp,
      }).then((r) => r.text());

      await pc.setRemoteDescription({ type: "answer", sdp: answerSDP });
      setStatus("connected"); // active state; waves will remain visible
    } catch {
      setStatus("error");
      stop();
    }
  };

  const stop = (): void => {
    setStatus("idle");
    try {
      dcRef.current?.close();
      pcRef.current?.getSenders()?.forEach((s) => s.track?.stop());
      micStreamRef.current?.getTracks()?.forEach((t) => t.stop());
      pcRef.current?.close();
    } catch {}
    dcRef.current = null;
    pcRef.current = null;
    micStreamRef.current = null;
  };

  const toggleVoice = (): void => {
    if (status === "idle" || status === "error") {
      // show listening immediately for UX, then switch to connected
      setStatus("listening");
      void start();
    } else {
      stop();
    }
  };

  return (

    


  <section id="voice-agent" className="position-relative overflow-hidden text-center py-5">
  <div className="container-fluid position-relative">
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-100 position-relative z-2">
      <h2 className="display-5 fw-bold mb-3">Got questions? Speak with us now.</h2>

      <p className="opacity-75 mb-2 fs-5">
        Your AI wellness guide — ready to talk, listen, and assist you on your yoga and wellness journey.
      </p>

    
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
              backgroundColor: "#ffffff",
              color: "#000000",
              fontSize: "1.05rem",
              zIndex: 3,
              transition: "transform .25s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.06)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
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
            <img src="/assets/imgs/team-1/bg-line.png" alt="infinia" />
          </div>
          <div className="rotate-center ellipse-rotate-success position-absolute z-0" />
          <div className="rotate-center-rev ellipse-rotate-primary position-absolute z-0" />
</section>

  );
}
