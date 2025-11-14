"use client";
import { useState } from "react";

export default function Newsletter2() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "exists" | "error"
  >("idle");
  const [message, setMessage] = useState<string>("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch(
        "https://mynapi.onrender.com/newsletter/subscribe",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      if (res.ok) {
        setStatus("success");
        setMessage("You're subscribed. Thanks!");
        setEmail("");
      } else if (res.status === 409) {
        setStatus("exists");
        setMessage("You're already on the list.");
      } else {
        const j = await res.json().catch(() => ({}));
        setStatus("error");
        setMessage(j?.detail || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <>
      <section className="section-newsletter-2 section-padding bg-primary position-relative">
        <div className="container position-relative fix">
          <div className="row align-items-center text-center position-relative z-1">
            <div className="col-lg-8 mx-auto">
              <div className="px-lg-3 text-center">
                <h4 className="my-5 text-white">
                  Trusted by thousands of individuals and organisations
                  <br />
                  Join our community and elevate your wellness journey.
                </h4>
                {/* FORM */}
                <form onSubmit={onSubmit} className="mt-4">
                  <div className="input-group mb-2 position-relative">
                    <input
                      type="email"
                      className="ps-5 py-3 form-control bg-neutral-100 rounded-start-pill border-2 border-end-0 border-white"
                      name="email"
                      placeholder="Enter your email…"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      aria-label="Email address"
                    />
                    <div className="bg-neutral-100 border-2 border border-start-0 border-white rounded-end-pill">
                      <button
                        className="btn btn-gradient px-3 py-3 m-3 fs-7 fw-bold border-0 rounded-pill"
                        type="submit"
                        disabled={status === "loading"}
                        aria-busy={status === "loading"}
                      >
                        {status === "loading" ? "Joining…" : "Join Now"}
                      </button>
                    </div>
                  </div>

                  {/* Feedback message */}
                  {message && (
                    <div
                      className={`mt-2 small ${
                        status === "success"
                          ? "text-success"
                          : status === "exists"
                          ? "text-primary"
                          : status === "error"
                          ? "text-danger"
                          : "text-muted"
                      }`}
                      role="status"
                    >
                      {message}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
