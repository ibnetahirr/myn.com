"use client";

import { useState } from "react";

export default function CTAForm() {
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [sector, setSector] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [goal, setGoal] = useState("");

  const [status, setStatus] =
    useState<"idle" | "loading" | "success" | "exists" | "error">("idle");
  const [feedback, setFeedback] = useState<string>("");

  const interestOptions = [
    "Yoga Programs",
    "Corporate Wellness",
    "Hotel Wellness",
    "School Programs",
    "Healthcare Programs",
    "Private Instructors",
    "Partnership Request",
  ];

  function toggleInterest(value: string) {
    setInterests((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!name || !email || !sector || interests.length === 0 || !goal) {
      setStatus("error");
      setFeedback("Please fill in all required fields.");
      return;
    }

    setStatus("loading");
    setFeedback("");

    try {
      const res = await fetch("https://mynapi.onrender.com/contact/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          organization,
          email,
          phone,
          sector,
          interests,
          goal,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setFeedback("✅ Thanks! We’ll be in touch soon.");
        setName("");
        setOrganization("");
        setEmail("");
        setPhone("");
        setSector("");
        setInterests([]);
        setGoal("");
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

     <section className="section-padding bg-primary position-relative">
        <div className="container position-relative fix">
          <div className="row align-items-center text-center position-relative z-1">
            <div className="col-lg-8 mx-auto">
               <form onSubmit={onSubmit} className="mt-5" noValidate>
        <div className="row">

          {/* Full Name */}
          <div className="col-md-6 mb-4">
            <input
              type="text"
              className="form-control"
              placeholder="Full Name *"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Organization */}
          <div className="col-md-6 mb-4">
            <input
              type="text"
              className="form-control"
              placeholder="Organization"
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
            />
          </div>

          {/* Email */}
          <div className="col-md-6 mb-4">
            <input
              type="email"
              className="form-control"
              placeholder="Email *"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Phone */}
          <div className="col-md-6 mb-4">
            <input
              type="text"
              className="form-control"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          {/* Sector */}
          <div className="col-12 mb-4">
            <select
              className="form-control"
              required
              value={sector}
              onChange={(e) => setSector(e.target.value)}
            >
              <option value="">Select Sector *</option>
              <option value="Hotel">Hotel</option>
              <option value="Corporate">Corporate</option>
              <option value="School">School</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Interested In */}
          <div className="col-12 mb-4">
            <label className="fw-bold mb-2 d-block">Interested In *</label>
            {interestOptions.map((option) => (
              <label className="d-block" key={option}>
                <input
                  type="checkbox"
                  className="me-2"
                  checked={interests.includes(option)}
                  onChange={() => toggleInterest(option)}
                />
                {option}
              </label>
            ))}
          </div>

          {/* Goal */}
          <div className="col-12 mb-4">
            <textarea
              className="form-control"
              placeholder="Describe your goals / requirements *"
              rows={5}
              required
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
            />
          </div>

          {/* Submit */}
          <div className="col-12">
            <button
              type="submit"
              className="btn btn-primary hover-up"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Sending..." : "Submit Request"}
            </button>
          </div>

          {/* Feedback */}
          {feedback && (
            <div
              className={`mt-3 small ${
                status === "success"
                  ? "text-success"
                  : status === "error"
                  ? "text-danger"
                  : "text-muted"
              }`}
            >
              {feedback}
            </div>
          )}
        </div>
      </form>
            </div>
          </div>
        </div>
      </section>
  );
}
