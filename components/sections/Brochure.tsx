"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

const API_BASE = "https://mynapi.onrender.com";

declare global {
  interface Window {
    onTurnstileBrochureSuccess: (token: string) => void;
  }
}

export default function Brochure() {
  const startedAt = useRef(Date.now());

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // anti-spam
  const [company, setCompany] = useState(""); // honeypot
  const [turnstileToken, setTurnstileToken] = useState("");

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  useEffect(() => {
    window.onTurnstileBrochureSuccess = (token: string) => {
      setTurnstileToken(token);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    // honeypot
    if (company) return;

    // fast-submit bot check
    if (Date.now() - startedAt.current < 3000) return;

    if (!turnstileToken) {
      setErrorMsg("Please verify you are human.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${API_BASE}/brochures/request`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          name,
          email,
          company,
          startedAt: startedAt.current,
          turnstileToken,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.detail || "Submission failed");
      }

      setSuccessMsg("Saved successfully!");
      setName("");
      setEmail("");
      setTurnstileToken("");
      startedAt.current = Date.now();

      setTimeout(() => {
        (document.getElementById("leadModalCloseBtn") as any)?.click();
      }, 1000);
    } catch (err: any) {
      setErrorMsg(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Cloudflare Turnstile script */}
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
      />

      {/* Trigger Button */}
      <button
        className="btn btn-gradient mt-5 mx-2"
        data-bs-toggle="modal"
        data-bs-target="#leadModal"
      >
        Download Brochure
      </button>

      {/* Modal */}
      <div
        className="modal fade"
        id="leadModal"
        tabIndex={-1}
        aria-labelledby="leadModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="leadModalLabel">
                Enter Your Details
              </h5>
              <button
                id="leadModalCloseBtn"
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>

            <form onSubmit={handleSubmit}>
              <div className="modal-body">

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

                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    required
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                  />
                </div>

                {/* Turnstile */}
                <div className="mb-3">
                  <div
                    className="cf-turnstile"
                    data-sitekey="0x4AAAAAAAQjbtM06zTUaKPe"
                    data-callback="onTurnstileBrochureSuccess"
                  />
                </div>

                {/* Error / Success Messages */}
                {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}
                {successMsg && <div className="alert alert-success">{successMsg}</div>}
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary"
                >
                  {loading ? "Saving..." : "Submit"}
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </>
  );
}
