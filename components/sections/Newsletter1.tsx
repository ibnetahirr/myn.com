"use client";
import { useState } from "react";

export default function Newsletter1() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "exists" | "error">("idle");
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
      <section className="section-newsletter-1 pb-120 pt-120 fix position-relative">
        <div className="container position-relative fix">
          <div className="row align-items-center fix text-center border rounded-4 position-relative z-1">
            <div className="col-lg-6 my-4">
              <div className="row">
                <div className="ms-lg-4">
                  <img
                    className="rounded-4 border border-3 border-white me-3 mb-3"
                    src="/assets/imgs/newsletter-1/img-1.png"
                    alt="infinia"
                  />
                  <img
                    className="rounded-4 border border-3 border-white me-3 mb-3"
                    src="/assets/imgs/newsletter-1/img-2.png"
                    alt="infinia"
                    data-aos="fade-zoom-in"
                    data-aos-delay={50}
                  />
                  <img
                    className="rounded-4 border border-3 border-white me-3 mb-3 d-none d-md-inline"
                    src="/assets/imgs/newsletter-1/img-3.png"
                    alt="infinia"
                  />
                </div>
              </div>
              <div className="row">
                <div>
                  <img
                    className="rounded-4 border border-3 border-white me-3 mb-3"
                    src="/assets/imgs/newsletter-1/img-4.png"
                    alt="infinia"
                  />
                  <img
                    className="rounded-4 border border-3 border-white me-3 mb-3"
                    src="/assets/imgs/newsletter-1/img-5.png"
                    alt="infinia"
                    data-aos="fade-zoom-in"
                    data-aos-delay={100}
                  />
                  <img
                    className="rounded-4 border border-3 border-white me-3 mb-3"
                    src="/assets/imgs/newsletter-1/img-6.png"
                    alt="infinia"
                  />
                  <img
                    className="rounded-4 border border-3 border-white me-3 mb-3"
                    src="/assets/imgs/newsletter-1/img-7.png"
                    alt="infinia"
                    data-aos="fade-zoom-in"
                    data-aos-delay={100}
                  />
                </div>
              </div>
              <div className="row d-none d-lg-flex">
                <div className="me-lg-0">
                  <img
                    className="rounded-4 border border-3 border-white me-3 mb-3"
                    src="/assets/imgs/newsletter-1/img-8.png"
                    alt="infinia"
                    data-aos="fade-zoom-in"
                    data-aos-delay={50}
                  />
                  <img
                    className="rounded-4 border border-3 border-white me-3 mb-3"
                    src="/assets/imgs/newsletter-1/img-9.png"
                    alt="infinia"
                    data-aos="fade-zoom-in"
                    data-aos-delay={100}
                  />
                  <img
                    className="rounded-4 border border-3 border-white me-3 mb-3 d-none d-md-inline"
                    src="/assets/imgs/newsletter-1/img-10.png"
                    alt="infinia"
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-6 mt-lg-0 mt-5">
              <div className="px-lg-5 text-lg-start text-center">
                <div
                  className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2"
                  data-aos="zoom-in"
                  data-aos-delay={100}
                >
                  <img src="/assets/imgs/features-1/dots.png" alt="infinia" />
                  <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
                    Stay Updated
                  </span>
                </div>

                <h4
                  className="mt-3 mb-3"
                  data-aos="fade-zoom-in"
                  data-aos-delay={100}
                >
                  Subscribe to Our Wellness Newsletter!
                </h4>
                <span
                  className="fs-6 fw-medium"
                  data-aos="fade-zoom-in"
                  data-aos-delay={200}
                >
                  Join 52,000+ people on our wellness journey
                </span>

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

          <div className="position-absolute top-50 start-50 translate-middle z-0">
            <img src="/assets/imgs/newsletter-1/bg-line.png" alt="infinia" />
          </div>
          <div className="bouncing-blobs-container rounded-4 fix">
            <div className="bouncing-blobs-glass rounded-4" />
            <div className="bouncing-blobs">
              <div className="bouncing-blob bouncing-blob--green" />
              <div className="bouncing-blob bouncing-blob--primary" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
