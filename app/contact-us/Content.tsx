"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

declare global {
  interface Window {
    onTurnstileSuccess: (token: string) => void;
  }
}

export default function Content() {
  const startedAt = useRef(Date.now());

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // anti-spam
  const [company, setCompany] = useState(""); // honeypot
  const [turnstileToken, setTurnstileToken] = useState("");

  const [status, setStatus] =
    useState<"idle" | "loading" | "success" | "exists" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    window.onTurnstileSuccess = (token: string) => {
      setTurnstileToken(token);
    };
  }, []);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!name || !email || !message) {
      setStatus("error");
      setFeedback("Please fill in all fields.");
      return;
    }

    // honeypot → silently ignore
    if (company) return;

    // fast-submit bot check
    if (Date.now() - startedAt.current < 3000) return;

    if (!turnstileToken) {
      setStatus("error");
      setFeedback("Please verify you are human.");
      return;
    }

    setStatus("loading");
    setFeedback("");

    try {
      const res = await fetch("https://mynapi.onrender.com/contact/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          name,
          email,
          message,
          company,
          startedAt: startedAt.current,
          turnstileToken,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setFeedback(
          "✅ Thanks! Your message has been received. We’ll get back to you soon."
        );
        setName("");
        setEmail("");
        setMessage("");
        setTurnstileToken("");
        startedAt.current = Date.now();
      } else if (res.status === 409) {
        setStatus("exists");
        setFeedback(
          "We’ve already received a message from this email with the same subject."
        );
      } else {
        const j = await res.json().catch(() => ({}));
        setStatus("error");
        setFeedback(j?.detail || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setFeedback("Network error. Please try again.");
    }
  }

  return (
    <div className="border rounded-4 shadow-1 p-5">
      {/* Cloudflare Turnstile script */}
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
      />

      <form onSubmit={onSubmit} className="mt-5" noValidate>
        <div className="row">
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

          {/* Name */}
          <div className="col-md-12">
            <div className="input-group d-flex align-items-center">
              <div className="icon-input border border-end-0 rounded-2 rounded-end-0 ps-3">
                {/* icon unchanged */}
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                  <path d="M12 11.25C13.7949 11.25 15.25 9.79493 15.25 8C15.25 6.20507 13.7949 4.75 12 4.75C10.2051 4.75 8.75 6.20507 8.75 8C8.75 9.79493 10.2051 11.25 12 11.25Z" stroke="black" strokeWidth="1.5" />
                  <path d="M6.84723 19.25H17.1522C18.2941 19.25 19.1737 18.2681 18.6405 17.2584C17.856 15.7731 16.0677 14 11.9997 14C7.93174 14 6.1434 15.7731 5.35897 17.2584C4.8257 18.2681 5.70531 19.25 6.84723 19.25Z" stroke="black" strokeWidth="1.5" />
                </svg>
              </div>
              <input
                type="text"
                className="form-control ms-0 border rounded-2 rounded-start-0 border-start-0"
                placeholder="Your name *"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          {/* Email */}
          <div className="col-md-12 mt-4">
            <div className="input-group d-flex align-items-center">
              <div className="icon-input border border-end-0 rounded-2 rounded-end-0 ps-3">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                  <path d="M4.75 7.75C4.75 6.64543 5.64543 5.75 6.75 5.75H17.25C18.3546 5.75 19.25 6.64543 19.25 7.75V16.25C19.25 17.3546 18.3546 18.25 17.25 18.25H6.75C5.64543 18.25 4.75 17.3546 4.75 16.25V7.75Z" stroke="black" strokeWidth="1.5" />
                  <path d="M5.5 6.5L12 12.25L18.5 6.5" stroke="black" strokeWidth="1.5" />
                </svg>
              </div>
              <input
                type="email"
                className="form-control ms-0 border rounded-2 rounded-start-0 border-start-0"
                placeholder="Your email *"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          {/* Message */}
          <div className="col-12 mt-4">
            <div className="input-group d-flex">
              <div className="icon-input pt-2 ps-3 align-items-start border border-end-0 rounded-1 rounded-end-0">
                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
                  <path d="M5.5 2.14844H3C1.89543 2.14844 1 3.04387 1 4.14844V14.6484C1 15.753 1.89543 16.6484 3 16.6484H13.5C14.6046 16.6484 15.5 15.753 15.5 14.6484V12.1484" stroke="black" strokeWidth="1.5" />
                  <path d="M17.3285 1.20344L16.4448 0.319749C16.0185 -0.106583 15.3248 -0.106583 14.8984 0.319749L7.82915 7.38907C7.76373 7.45449 7.71914 7.53782 7.70096 7.62854L7.2591 9.83772C7.22839 9.99137 7.27647 10.1502 7.38729 10.261C7.47605 10.3498 7.59561 10.3983 7.71864 10.3983Z" fill="black" />
                </svg>
              </div>
              <textarea
                className="form-control border border-start-0 ms-0 rounded-start-0 rounded-1 pb-10"
                placeholder="Your Message *"
                rows={5}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>

          {/* Turnstile */}
          <div className="col-12 mt-4">
            <div
              className="cf-turnstile"
              data-sitekey="0x4AAAAAAAQjbtM06zTUaKPe"
              data-callback="onTurnstileSuccess"
            />
          </div>

          {/* Submit */}
          <div className="col-12">
            <button
              type="submit"
              className="btn btn-primary hover-up mt-4"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
          </div>

          {/* Feedback */}
          {feedback && (
            <div
              className={`mt-3 small ${
                status === "success"
                  ? "text-success"
                  : status === "exists"
                  ? "text-primary"
                  : "text-danger"
              }`}
              role="status"
            >
              {feedback}
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
