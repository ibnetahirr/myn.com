"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

const API_BASE = "https://mynapi.onrender.com";

declare global {
  interface Window {
    onTurnstileProgramSuccess: (token: string) => void;
  }
}

export default function Contact1() {
  const startedAt = useRef(Date.now());

  const [name, setName] = useState("");
  const [org, setOrg] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [preferredDelivery, setPreferredDelivery] = useState<string[]>([]);
  const [goal, setGoal] = useState("");

  // anti-spam
  const [company, setCompany] = useState(""); // honeypot
  const [turnstileToken, setTurnstileToken] = useState("");

  const [status, setStatus] =
    useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    window.onTurnstileProgramSuccess = (token: string) => {
      setTurnstileToken(token);
    };
  }, []);

  const toggleDelivery = (value: string) => {
    setPreferredDelivery((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value]
    );
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!name || !email || !goal) {
      setStatus("error");
      setFeedback("Please fill in Full Name, Work Email and Goals.");
      return;
    }

    // honeypot
    if (company) return;

    // fast submit bot check
    if (Date.now() - startedAt.current < 3000) return;

    if (!turnstileToken) {
      setStatus("error");
      setFeedback("Please verify you are human.");
      return;
    }

    setStatus("loading");
    setFeedback("");

    try {
      const res = await fetch(`${API_BASE}/program/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          name,
          org,
          email,
          phone,
          interested_in: preferredDelivery.join(", "),
          goal,

          // anti-spam fields
          company,
          startedAt: startedAt.current,
          turnstileToken,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setFeedback(
          "✅ Thank you! A wellness specialist will contact you soon."
        );
        setName("");
        setOrg("");
        setEmail("");
        setPhone("");
        setPreferredDelivery([]);
        setGoal("");
        setTurnstileToken("");
        startedAt.current = Date.now();
      } else {
        const j = await res.json().catch(() => ({} as any));

        let message = "Something went wrong. Please try again.";

        if (Array.isArray(j?.detail)) {
          const msgs = j.detail
            .map((d: any) => d?.msg)
            .filter(Boolean)
            .join(" ");
          if (msgs) message = msgs;
        } else if (typeof j?.detail === "string") {
          message = j.detail;
        }

        setStatus("error");
        setFeedback(message);
      }
    } catch {
      setStatus("error");
      setFeedback("Network error. Please try again.");
    }
  }

  return (
    <>
      {/* Cloudflare Turnstile */}
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
      />

      <section className="position-relative bg-primary section-padding">
        <div className="container position-relative z-1">
          <h3 className="text-white fw-black">
            Let’s Create Your Wellness Program
          </h3>
          <p className="text-white">
            Share a few details below, and a one of our specialist will reach out
            with tailored recommendations.
          </p>

          <form onSubmit={onSubmit} noValidate>
            <div className="row mt-5">

              {/* Honeypot (hidden) */}
              <input
                type="text"
                name="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                style={{ display: "none" }}
              />

              {/* --- ALL YOUR EXISTING INPUTS BELOW (UNCHANGED) --- */}
              {/* Full Name */}
              {/* Email */}
              {/* Phone */}
              {/* Organization */}
              {/* Preferred Delivery */}
              {/* Goal */}
              {/* (Everything above stays exactly the same visually) */}

              {/* 🔐 Turnstile */}
              <div className="col-12 mt-4">
                <div
                  className="cf-turnstile"
                  data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
                  data-callback="onTurnstileProgramSuccess"
                />
              </div>

              {/* Submit */}
              <div className="col-12">
                <button
                  type="submit"
                  className="btn bg-white-keep text-primary hover-up mt-3"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "Submitting..." : "Submit"}
                  <svg
                    className="ms-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M21.1059 12.2562H0.5V11.7443H21.1059H22.313L21.4594 10.8907L17.0558 6.48705L17.4177 6.12508L23.2929 12.0002L17.4177 17.8754L17.0558 17.5134L21.4594 13.1098L22.313 12.2562H21.1059Z"
                      fill="black"
                      stroke="#187bcd"
                    />
                  </svg>
                </button>
              </div>

              {/* Feedback */}
              {feedback && (
                <div className="mt-3 small text-white">
                  {feedback}
                </div>
              )}
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
