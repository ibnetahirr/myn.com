"use client";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";

export default function Hero5() {
  const [isOpen, setOpen] = useState(false);
  // Accordion
  const [activeItem, setActiveItem] = useState(1);

  const handleActiveItem = (index: any) => {
    setActiveItem(index);
  };

  return (
    <>
      
        {/*Hero 5*/}
        <div className="section-hero-5 position-relative">
          <div
            className="position-relative py-188 img-pull"
            style={{ backgroundImage: `url(/assets/imgs/hero-5/img-bg-4.png)` }}
          >
            <div className="container position-relative z-2">
              <div className="row">
                <div className="col-lg-6">
                  <div className="backdrop-filter p-8 position-relative rounded-3">
                    <div className="bg-white bg-opacity-50 border border-primary-soft d-inline-flex rounded-pill px-4 py-1">
                      <span className="tag-spacing fs-6 text-primary">
                        🚀 My Yoga Network
                      </span>
                    </div>
                    <h3 className="ds-3 my-3">
                      Corporate Yoga Program
                      <span className="fw-regular">
                        <br />
                        with
                        <img
                          className="alltuchtopdown img-fluid filter-invert"
                          src="/assets/imgs/hero-5/icon-1.svg"
                          alt="Yoga icon"
                        />
                        Tailored Wellness Programs
                      </span>
                    </h3>
                    <p className="fs-5 text-900">
                      Designed for businesses that offer wellness programs for
                      their employees.
                    </p>
                    <div className="d-flex flex-column flex-md-row align-items-center">
                      <Link href="#" className="btn btn-gradient rounded-4">
                        Book a Consultation
                        <svg
                          className="ms-2"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M17.25 15.25V6.75H8.75"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M17 7L6.75 17.25"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                    <div className="position-absolute top-50 start-0 translate-middle d-none d-md-block z-2">
                      <div className="tag-home-5 rotate-90 backdrop-filter px-6 py-3 rounded-pill d-inline-flex d-flex align-items-center justify-content-center">
                        <p className="text-900 mb-0 fs-18px fw-bold">
                          20+ Years of Experience
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="position-absolute top-0 start-0 z-0">
              <img
                src="/assets/imgs/hero-5/img-bg-line.png"
                alt="Decorative line"
              />
            </div>
          </div>
        </div>

        <ModalVideo
          channel="youtube"
          isOpen={isOpen}
          videoId="Xq2Xj_8tL1o"
          onClose={() => setOpen(false)}
        />
    </>
  );
}
