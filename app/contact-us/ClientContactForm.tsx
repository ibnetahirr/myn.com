"use client";

import { useState } from "react";

export default function ClientContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [status, setStatus] =
    useState<"idle" | "loading" | "success" | "exists" | "error">("idle");
  const [feedback, setFeedback] = useState<string>("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !email || !subject || !message) {
      setStatus("error");
      setFeedback("Please fill in all fields.");
      return;
    }

    setStatus("loading");
    setFeedback("");

    try {
      const res = await fetch("https://mynapi.onrender.com/contact/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (res.ok) {
        setStatus("success");
        setFeedback("✅ Thanks! Your message has been received. We’ll get back to you soon.");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else if (res.status === 409) {
        setStatus("exists");
        setFeedback("We’ve already received a message from this email with the same subject.");
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
      <h4>Leave a message</h4>

      <form onSubmit={onSubmit} className="mt-5" noValidate>
        <div className="row">
          {/* Name */}
          <div className="col-md-12">
            <div className="input-group d-flex align-items-center">
              <div className="icon-input border border-end-0 rounded-2 rounded-end-0 ps-3">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                  <path d="M12 11.25C13.7949 11.25 15.25 9.79493 15.25 8C15.25 6.20507 13.7949 4.75 12 4.75C10.2051 4.75 8.75 6.20507 8.75 8C8.75 9.79493 10.2051 11.25 12 11.25Z" stroke="black" strokeWidth="1.5" />
                  <path d="M6.84723 19.25H17.1522C18.2941 19.25 19.1737 18.2681 18.6405 17.2584C17.856 15.7731 16.0677 14 11.9997 14C7.93174 14 6.1434 15.7731 5.35897 17.2584C4.8257 18.2681 5.70531 19.25 6.84723 19.25Z" stroke="black" strokeWidth="1.5" />
                </svg>
              </div>
              <input
                type="text"
                className="form-control ms-0 border rounded-2 rounded-start-0 border-start-0"
                name="name"
                placeholder="Your name *"
                aria-label="Name"
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
                name="email"
                placeholder="Your email *"
                aria-label="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          {/* Subject */}
          <div className="col-md-12 mt-4">
            <div className="input-group d-flex align-items-center">
              <div className="icon-input border border-end-0 rounded-2 rounded-end-0 ps-3">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                  <path d="M6.75 19.25H17.25C18.3546 19.25 19.25 18.3546 19.25 17.25V9.75001L12 4.75L4.75 9.75001V17.25C4.75 18.3546 5.64544 19.25 6.75 19.25Z" stroke="black" strokeWidth="1.5" />
                  <path d="M9.75 15.749C9.75 14.6444 10.6455 13.749 11.75 13.749H12.25C13.3546 13.749 14.25 14.6444 14.25 15.749V19.249H9.75V15.749Z" stroke="black" strokeWidth="1.5" />
                </svg>
              </div>
              <input
                type="text"
                className="form-control ms-0 border rounded-2 rounded-start-0 border-start-0"
                name="subject"
                placeholder="Subject *"
                aria-label="Subject"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
          </div>

          {/* Message */}
          <div className="col-12 mt-4">
            <div className="input-group d-flex">
              <div className="icon-input pt-2 ps-3 align-items-start border border-end-0 rounded-1 rounded-end-0">
                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
                  <path d="M5.5 2.14844H3C1.89543 2.14844 1 3.04387 1 4.14844V14.6484C1 15.753 1.89543 16.6484 3 16.6484H13.5C14.6046 16.6484 15.5 15.753 15.5 14.6484V12.1484" stroke="black" strokeWidth="1.5" />
                  <path d="M17.3285 1.20344L16.4448 0.319749C16.0185 -0.106583 15.3248 -0.106583 14.8984 0.319749L7.82915 7.38907C7.76373 7.45449 7.71914 7.53782 7.70096 7.62854L7.2591 9.83772C7.22839 9.99137 7.27647 10.1502 7.38729 10.261C7.47605 10.3498 7.59561 10.3983 7.71864 10.3983C7.74923 10.3983 7.77997 10.3953 7.81053 10.3892L10.0197 9.94732C10.1104 9.92917 10.1938 9.88455 10.2592 9.81913L17.3285 2.74984Z" fill="black" />
                </svg>
              </div>
              <textarea
                className="form-control border border-start-0 ms-0 rounded-start-0 rounded-1 pb-10"
                name="message"
                placeholder="Describe your project in short *"
                aria-label="Message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>

          {/* Submit */}
          <div className="col-12">
            <button
              type="submit"
              className="btn btn-primary hover-up mt-4"
              disabled={status === "loading"}
              aria-busy={status === "loading"}
            >
              {status === "loading" ? "Sending..." : "Send Message"}
              <svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                <path
                  className="stroke-white"
                  d="M21.1059 12.2562H0.5V11.7443H21.1059H22.313L21.4594 10.8907L17.0558 6.48705L17.4177 6.12508L23.2929 12.0002L17.4177 17.8754L17.0558 17.5134L21.4594 13.1098L22.313 12.2562H21.1059Z"
                  fill="black"
                  stroke="white"
                />
              </svg>
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
                  : status === "error"
                  ? "text-danger"
                  : "text-muted"
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
