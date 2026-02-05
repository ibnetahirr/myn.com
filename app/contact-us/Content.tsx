"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    turnstile: any;
    onTurnstileSuccess: (token: string) => void;
  }
}

export default function ContactForm() {
  const startedAt = useRef(Date.now());

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState(""); // honeypot
  const [turnstileToken, setTurnstileToken] = useState("");

  const [status, setStatus] =
    useState<"idle" | "loading" | "success" | "exists" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  // Turnstile callback
  useEffect(() => {
    window.onTurnstileSuccess = (token: string) => {
      setTurnstileToken(token);
    };
  }, []);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    // basic validation
    if (!name || !email || !message) {
      setStatus("error");
      setFeedback("Please fill in all fields.");
      return;
    }

    // honeypot (bots)
    if (company) return;

    // fast submit (bots)
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
          startedAt: startedAt.current,
          turnstileToken,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setFeedback("✅ Thanks! We’ll get back to you soon.");
        setName("");
        setEmail("");
        setMessage("");
        setTurnstileToken("");
        startedAt.current = Date.now();
      } else if (res.status === 409) {
        setStatus("exists");
        setFeedback("We already received a similar message.");
      } else {
        const j = await res.json().catch(() => ({}));
        setStatus("error");
        setFeedback(j?.detail || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setFeedback("Network error. Please try again.");
    }
  }

  return (
    <>
      {/* Cloudflare Turnstile */}
      <script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        async
        defer
      ></script>

      <form onSubmit={onSubmit} noValidate>
        {/* Honeypot */}
        <input
          type="text"
          name="company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
          style={{ display: "none" }}
        />

        <input
          type="text"
          placeholder="Your name *"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Your email *"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <textarea
          placeholder="Your message *"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          required
        />

        {/* Turnstile */}
        <div
          className="cf-turnstile mt-3"
          data-sitekey="0x4AAAAAAAQjbtM06zTUaKPe"
          data-callback="onTurnstileSuccess"
        ></div>

        <button
          type="submit"
          disabled={status === "loading"}
          aria-busy={status === "loading"}
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>

        {feedback && (
          <div
            className={`mt-2 ${
              status === "success"
                ? "text-success"
                : status === "exists"
                ? "text-primary"
                : "text-danger"
            }`}
          >
            {feedback}
          </div>
        )}
      </form>
    </>
  );
}
