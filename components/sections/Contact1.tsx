"use client";

import { useState } from "react";

const API_BASE = "https://mynapi.onrender.com";

export default function Contact1() {
  const [name, setName] = useState("");
  const [org, setOrg] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [preferredDelivery, setPreferredDelivery] = useState<string[]>([]);
  const [goal, setGoal] = useState("");

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [feedback, setFeedback] = useState<string>("");

  const toggleDelivery = (value: string) => {
    setPreferredDelivery((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!name || !email || !goal) {
      setStatus("error");
      setFeedback("Please fill in Full Name, Work Email and Goals.");
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
          // IMPORTANT: FastAPI expects string, not array
          interested_in: preferredDelivery.join(", "),
          goal,
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
      } else {
        const j = await res.json().catch(() => ({} as any));

        let message = "Something went wrong. Please try again.";

        // FastAPI validation error: detail is an array
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
      <section className="position-relative bg-primary section-padding">
        <div className="container position-relative z-1">
          <h3 className="text-white fw-black">
            Let’s Create Your Wellness Program
          </h3>
          <p className="text-white">
            Share a few details below, and a one of our specialist will reach out with tailored recommendations.

          </p>

          <form onSubmit={onSubmit} noValidate>
            <div className="row mt-5">
              {/* Full Name */}
              <div className="col-md-6">
                <div className="input-group d-flex align-items-center">
                  <div className="icon-input border border-end-0 rounded-2 rounded-end-0 ps-3">
                    {/* icon svg */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 11.25C13.7949 11.25 15.25 9.79493 15.25 8C15.25 6.20507 13.7949 4.75 12 4.75C10.2051 4.75 8.75 6.20507 8.75 8C8.75 9.79493 10.2051 11.25 12 11.25Z"
                        stroke="#187bcd"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.84723 19.25H17.1522C18.2941 19.25 19.1737 18.2681 18.6405 17.2584C17.856 15.7731 16.0677 14 11.9997 14C7.93174 14 6.1434 15.7731 5.35897 17.2584C4.8257 18.2681 5.70531 19.25 6.84723 19.25Z"
                        stroke="#187bcd"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    className="form-control ms-0 border rounded-2 rounded-start-0 border-start-0"
                    name="name"
                    placeholder="Name *"
                    aria-label="Name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>

              {/* Email */}
              <div className="col-md-6">
                <div className="input-group d-flex align-items-center">
                  <div className="icon-input border border-end-0 rounded-2 rounded-end-0 ps-3">
                    {/* email icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M4.75 7.75C4.75 6.64543 5.64543 5.75 6.75 5.75H17.25C18.3546 5.75 19.25 6.64543 19.25 7.75V16.25C19.25 17.3546 18.3546 18.25 17.25 18.25H6.75C5.64543 18.25 4.75 17.3546 4.75 16.25V7.75Z"
                        stroke="#187bcd"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5.5 6.5L12 12.25L18.5 6.5"
                        stroke="#187bcd"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <input
                    type="email"
                    className="form-control ms-0 border rounded-2 rounded-start-0 border-start-0"
                    name="email"
                    placeholder="Email *"
                    aria-label="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="col-md-6">
                <div className="input-group d-flex align-items-center mt-4">
                  <div className="icon-input border border-end-0 rounded-2 rounded-end-0 ps-3">
                    {/* phone icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M8.89286 4.75H6.06818C5.34017 4.75 4.75 5.34017 4.75 6.06818C4.75 13.3483 10.6517 19.25 17.9318 19.25C18.6598 19.25 19.25 18.6598 19.25 17.9318V15.1071L16.1429 13.0357L14.5317 14.6468C14.2519 14.9267 13.8337 15.0137 13.4821 14.8321C12.8858 14.524 11.9181 13.9452 10.9643 13.0357C9.98768 12.1045 9.41548 11.1011 9.12829 10.494C8.96734 10.1537 9.06052 9.76091 9.32669 9.49474L10.9643 7.85714L8.89286 4.75Z"
                        stroke="#187bcd"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    className="form-control ms-0 border rounded-2 rounded-start-0 border-start-0"
                    name="phone"
                    placeholder="Phone"
                    aria-label="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>

               {/* Organization */}
              <div className="col-md-6">
                <div className="input-group d-flex align-items-center mt-4">
                  <div className="icon-input border border-end-0 rounded-2 rounded-end-0 ps-3">
                    {/* icon svg (same as before) */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      {/* Briefcase body */}
                      <rect
                        x="4.75"
                        y="7.75"
                        width="14.5"
                        height="10.5"
                        rx="1.5"
                        stroke="#187bcd"
                        strokeWidth="1.5"
                      />
                      {/* Handle */}
                      <path
                        d="M9.5 7.75V6.5C9.5 5.67157 10.1716 5 11 5H13C13.8284 5 14.5 5.67157 14.5 6.5V7.75"
                        stroke="#187bcd"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      {/* Middle divider & lock detail */}
                      <path
                        d="M4.75 11.5H19.25"
                        stroke="#187bcd"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.25 12.75H12.75"
                        stroke="#187bcd"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    className="form-control ms-0 border rounded-2 rounded-start-0 border-start-0"
                    name="org"
                    placeholder="Organization"
                    aria-label="Organization"
                    value={org}
                    onChange={(e) => setOrg(e.target.value)}
                  />
                </div>
              </div>

              {/* Preferred Delivery (Inline Checkboxes) */}
              <div className="col-md-6">
                <div className="mt-4">
                  <label className="d-block mb-2 fw-semibold text-white">
                    Preferred Delivery
                  </label>

                  <div className="d-flex gap-4">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="interested_in"
                        value="On-site"
                        id="onsite"
                        checked={preferredDelivery.includes("On-site")}
                        onChange={() => toggleDelivery("On-site")}
                      />
                      <label
                        className="form-check-label text-white"
                        htmlFor="onsite"
                      >
                        On-site
                      </label>
                    </div>

                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="interested_in"
                        value="Virtual"
                        id="virtual"
                        checked={preferredDelivery.includes("Virtual")}
                        onChange={() => toggleDelivery("Virtual")}
                      />
                      <label
                        className="form-check-label text-white"
                        htmlFor="virtual"
                      >
                        Virtual
                      </label>
                    </div>

                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="interested_in"
                        value="Hybrid"
                        id="hybrid"
                        checked={preferredDelivery.includes("Hybrid")}
                        onChange={() => toggleDelivery("Hybrid")}
                      />
                      <label
                        className="form-check-label text-white"
                        htmlFor="hybrid"
                      >
                        Hybrid
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Goal / Message */}
              <div className="col-12">
                <div className="input-group d-flex mt-4">
                  <div className="icon-input pt-2 ps-3 align-items-start border border-end-0 rounded-1 rounded-end-0">
                    {/* text icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={18}
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <path
                        d="M5.5 2.14844H3C1.89543 2.14844 1 3.04387 1 4.14844V14.6484C1 15.753 1.89543 16.6484 3 16.6484H13.5C14.6046 16.6484 15.5 15.753 15.5 14.6484V12.1484"
                        stroke="#187bcd"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17.3285 1.20344L16.4448 0.319749C16.0185 -0.106583 15.3248 -0.106583 14.8984 0.319749L7.82915 7.38907C7.76373 7.45449 7.71914 7.53782 7.70096 7.62854L7.2591 9.83772C7.22839 9.99137 7.27647 10.1502 7.38729 10.261C7.47605 10.3498 7.59561 10.3983 7.71864 10.3983C7.74923 10.3983 7.77997 10.3953 7.81053 10.3892L10.0197 9.94732C10.1104 9.92917 10.1938 9.88455 10.2592 9.81913L17.3285 2.74984C17.3285 2.74984 17.3286 2.74984 17.3286 2.74981C17.7549 2.32351 17.7549 1.6298 17.3285 1.20344ZM9.69678 9.05607L8.31606 9.33225L8.59224 7.95153L14.3461 2.19754L15.4507 3.30214L9.69678 9.05607ZM16.6658 2.0871L16.1135 2.6394L15.0089 1.53479L15.5612 0.982524C15.6221 0.921601 15.7212 0.92157 15.7821 0.982493L16.6658 1.86618C16.7267 1.92707 16.7267 2.0262 16.6658 2.0871Z"
                        fill="#187bcd"
                      />
                    </svg>
                  </div>
                  <textarea
                    className="form-control border border-start-0 ms-0 rounded-start-0 rounded-1 pb-10"
                    name="goal"
                    placeholder="Tell us about your goals"
                    aria-label="Goals"
                    required
                    rows={4}
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                  />
                </div>
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
                <div
                  className={`mt-3 small ${
                    status === "success"
                      ? "text-white"
                      : status === "error"
                      ? "text-white"
                      : "text-white"
                  }`}
                >
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
