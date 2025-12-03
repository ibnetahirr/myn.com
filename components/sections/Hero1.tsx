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
Professional Wellness Solutions for Organizations and Communities
                </h1>
                <p
                  className="pe-10 mb-5"
                >
              We specialise in delivering enterprise-grade wellness solutions for companies and institutions. 
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

            {/* Right Image */}
            <div className="col-lg-6 position-relative justify-content-center">
              <img
                className="hero-img"
                src="/assets/imgs/home/hero.webp"
                alt="My Yoga Network"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
