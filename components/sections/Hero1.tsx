"use client";
import Link from "next/link";
import Image from "next/image";


export default function Hero1() {
  const scrollToVoiceAgent = () => {
    const section = document.getElementById("voice-agent");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="position-relative overflow-hidden section-padding">
        <div className="container">
          <div className="row content align-items-start">
            {/* Left Content */}
            <div className="col-lg-6 col-md-12 mb-lg-0 mb-5">
              <div className="pe-2">
                <h1
                  className="ds-3 mb-5"
                >
                  Professional Wellness Solutions for Organizations and
                  Communities
                </h1>
                <p
                  className="pe-10 mb-5"
                >
                 We empower schools, hotels, corporations, healthcare providers, and community groups with safe, certified, and impactful yoga and wellness programs, now enhanced with AI innovation.
                </p>

                {/* Scroll Button */}
                <button
                  className="btn btn-gradient d-inline-flex align-items-center"
                  onClick={scrollToVoiceAgent}
                >
                  Experience Our AI Voice Agent
                <svg
                      className="ms-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 5.75V18.25"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18.25 12L12 18.25L5.75 12"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                </button>
              </div>
            </div>

            {/* Right Image + Discovery Card */}
            <div className="col-lg-6 position-relative justify-content-center">
              <img
                className="hero-img"
                src="/assets/imgs/hero-1/background.png"
                alt="My Yoga Network"
              />

              <div className="shape-1 position-absolute">
                <img
                  className="rightToLeft"
                  src="/assets/imgs/hero-1/shape-1.png"
                  alt="shape"
                />
              </div>

              <div className="shape-2 position-absolute d-none d-md-block">
                <img
                  src="/assets/imgs/hero-1/shape-2.png"
                  alt="shape"
                />
              </div>

              <div className="shape-3 position-absolute d-none d-md-block">
                <img
                  src="/assets/imgs/hero-1/shape-3.png"
                  alt="shape"
                />
              </div>

              {/* Discovery Call Card */}
              <div className="alltuchtopdown card-hero backdrop-filter rounded-3 text-center d-inline-block p-3 position-absolute">
                <Image
                  className="rounded-3"
                  src="/assets/imgs/team/ram-bhakt.jpg"
                  alt="discovery-call"
                  width={150}
                  height={150}
                />
                <h6 className="mt-3">Book a Discovery Call</h6>
                <p className="fs-7 text-700 mb-3">
                  Discover how AI can personalize wellness <br />
                  for your guests, employees, or students.
                </p>
                <Link
                  href="https://calendly.com/ram-myyoganetwork/up-to-60min"
                  target="_blank" className="shadow-sm d-flex align-items-center bg-white d-inline-flex rounded-pill px-2 py-1 mb-3"
                >
                  <span className="fs-7 fw-medium text-primary mx-2">
                    Free Consultation
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={18}
                    height={19}
                    viewBox="0 0 18 19"
                    fill="none"
                  >
                    <path
                      d="M10.3125 5.5625L14.4375 9.5L10.3125 13.4375"
                      stroke="#0d6efd"
                      strokeWidth="1.125"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.25 9.5H3.5625"
                      stroke="#0d6efd"
                      strokeWidth="1.125"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
