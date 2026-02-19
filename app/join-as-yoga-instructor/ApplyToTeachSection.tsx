"use client";

import { useState, FormEvent } from "react";

 const API_BASE = "https://mynapi.onrender.com";
//const API_BASE = "http://127.0.0.1:8000";

type ApplyStatus = "idle" | "loading" | "success" | "error";

export default function ApplyToTeachSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [experience, setExperience] = useState<string>("");
  const [zip, setZip] = useState("");
  const [mode, setMode] = useState<"online" | "in-person" | "">("");
  const [bio, setBio] = useState("");
  const [certFiles, setCertFiles] = useState<FileList | null>(null);

  const [status, setStatus] = useState<ApplyStatus>("idle");
  const [feedback, setFeedback] = useState<string>("");

  const handleCertChange = (files: FileList | null) => {
    setCertFiles(files);
  };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Basic validation
    if (!name || !email || !experience) {
      setStatus("error");
      setFeedback("Please fill in Name, Email and Years of Experience.");
      return;
    }

    setStatus("loading");
    setFeedback("");

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("experience", experience);
      formData.append("zip", zip);
      formData.append("mode", mode);
      formData.append("bio", bio);

      if (certFiles && certFiles.length > 0) {
        Array.from(certFiles).forEach((file, index) => {
          formData.append("certifications", file, file.name || `cert_${index}`);
        });
      }

      // Change endpoint if needed to match your FastAPI route
      const res = await fetch(`${API_BASE}/instructors/apply`, {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setStatus("success");
        setFeedback(
          "✅ Thank you! We’ve received your application and will be in touch soon."
        );

        setName("");
        setEmail("");
        setPhone("");
        setExperience("");
        setZip("");
        setMode("");
        setBio("");
        setCertFiles(null);
      } else {
        let message = "Something went wrong. Please try again.";
        const j = await res.json().catch(() => ({} as any));

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
    <section
      id="apply-to-teach"
      className="position-relative bg-primary section-padding"
    >
      <div className="container position-relative z-1">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <h2 className="h2 fw-bold text-white">
              Apply to Teach for My Yoga Network
            </h2>
            <p className="fs-5 mt-3 mb-0 text-white">
              Share your details and we&apos;ll be in touch to explore
              opportunities that fit your experience, style, and availability.
            </p>
          </div>
        </div>

        <form onSubmit={onSubmit} noValidate>
          <div className="row mt-4">
            {/* Name */}
            <div className="col-md-6">
              <div className="input-group d-flex align-items-center">
                <div className="icon-input border border-end-0 rounded-2 rounded-end-0 ps-3">
                  {/* user icon */}
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
              <div className="input-group d-flex align-items-center mt-4 mt-md-0">
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
                  type="tel"
                  className="form-control ms-0 border rounded-2 rounded-start-0 border-start-0"
                  name="phone"
                  placeholder="Phone (Optional)"
                  aria-label="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>

            {/* Years of Experience */}
            <div className="col-md-6">
              <div className="input-group d-flex align-items-center mt-4">
                <div className="icon-input border border-end-0 rounded-2 rounded-end-0 ps-3">
                  {/* experience / briefcase icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <rect
                      x="4.75"
                      y="7.75"
                      width="14.5"
                      height="10.5"
                      rx="1.5"
                      stroke="#187bcd"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M9.5 7.75V6.5C9.5 5.67157 10.1716 5 11 5H13C13.8284 5 14.5 5.67157 14.5 6.5V7.75"
                      stroke="#187bcd"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
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
                  type="number"
                  min={0}
                  max={75}
                  className="form-control ms-0 border rounded-2 rounded-start-0 border-start-0"
                  name="experience"
                  placeholder="Years of Experience *"
                  aria-label="Years of Experience"
                  required
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                />
              </div>
            </div>

            {/* Zip / Address */}
            <div className="col-md-6">
              <div className="input-group d-flex align-items-center mt-4">
                <div className="icon-input border border-end-0 rounded-2 rounded-end-0 ps-3">
                  {/* location icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 12.75C13.2426 12.75 14.25 11.7426 14.25 10.5C14.25 9.25736 13.2426 8.25 12 8.25C10.7574 8.25 9.75 9.25736 9.75 10.5C9.75 11.7426 10.7574 12.75 12 12.75Z"
                      stroke="#187bcd"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 21C12 21 5.75 15.9375 5.75 10.5C5.75 7.32436 8.07136 5 12 5C15.9286 5 18.25 7.32436 18.25 10.5C18.25 15.9375 12 21 12 21Z"
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
                  name="zip"
                  placeholder="Address / Zipcode"
                  aria-label="Zipcode"
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                />
              </div>
            </div>

            {/* Preferred Teaching Method (radio) */}
            <div className="col-md-6">
              <div className="mt-4">
                <label className="d-block mb-2 fw-semibold text-white">
                  Preferred Teaching Method
                </label>

                <div className="d-flex gap-4">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="mode"
                      id="mode-online"
                      value="online"
                      checked={mode === "online"}
                      onChange={() => setMode("online")}
                    />
                    <label
                      className="form-check-label text-white"
                      htmlFor="mode-online"
                    >
                      Online
                    </label>
                  </div>

                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="mode"
                      id="mode-inperson"
                      value="in-person"
                      checked={mode === "in-person"}
                      onChange={() => setMode("in-person")}
                    />
                    <label
                      className="form-check-label text-white"
                      htmlFor="mode-inperson"
                    >
                      In-Person
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio */}
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
                      d="M17.3285 1.20344L16.4448 0.319749C16.0185 -0.106583 15.3248 -0.106583 14.8984 0.319749L7.82915 7.38907C7.76373 7.45449 7.71914 7.53782 7.70096 7.62854L7.2591 9.83772C7.22839 9.99137 7.27647 10.1502 7.38729 10.261C7.47605 10.3498 7.59561 10.3983 7.71864 10.3983C7.74923 10.3983 7.77997 10.3953 7.81053 10.3892L10.0197 9.94732C10.1104 9.92917 10.1938 9.88455 10.2592 9.81913L17.3285 2.74984C17.7549 2.32351 17.7549 1.6298 17.3285 1.20344Z"
                      fill="#187bcd"
                    />
                  </svg>
                </div>
                <textarea
                  className="form-control border border-start-0 ms-0 rounded-start-0 rounded-1 pb-10"
                  name="bio"
                  placeholder="Brief Introduction / Bio"
                  aria-label="Brief Introduction / Bio"
                  rows={5}
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                />
              </div>
            </div>

            {/* Certifications upload */}
            <div className="col-12">
              <div className="input-group d-flex align-items-center mt-4">
                <div className="icon-input border border-end-0 rounded-2 rounded-end-0 ps-3">
                  {/* upload / paperclip icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={22}
                    height={22}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M7.5 12.75L13.4697 6.78033C14.1953 6.05475 15.372 6.05475 16.0976 6.78033C16.8232 7.50591 16.8232 8.68262 16.0976 9.4082L9.35355 16.1523C8.799 16.7068 7.99804 17 7.17157 17C6.3451 17 5.54414 16.7068 4.98959 16.1523C3.88047 15.0431 3.88047 13.2434 4.98959 12.1343L11.7322 5.39168"
                      stroke="#187bcd"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <input
                  id="certs"
                  name="certifications"
                  className="form-control ms-0 border rounded-2 rounded-start-0 border-start-0"
                  type="file"
                  multiple
                  onChange={(e) => handleCertChange(e.target.files)}
                />
              </div>
              <small className="text-white-50 d-block mt-1">
                Accepted formats: PDF, JPG, PNG. You can attach multiple files.
              </small>
            </div>

            {/* Submit */}
            <div className="col-12">
              <button
                type="submit"
                className="btn bg-white-keep text-primary hover-up mt-4"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Submitting..." : "Submit Application"}
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
              <div className="mt-3 small text-white">{feedback}</div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
