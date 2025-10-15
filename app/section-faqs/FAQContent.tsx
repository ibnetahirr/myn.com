"use client";

import Link from "next/link";
import { useState } from "react";
export default function SectionFaqs() {
  // Accordion
  const [activeItem, setActiveItem] = useState(1);

  const handleActiveItem = (index: any) => {
    setActiveItem(index);
  };

  return (
    <>
      <section className="section-page-header py-10 fix position-relative">
        <div className="container position-relative z-1">
          <div className="text-start">
            <h3>Support Center</h3>
            <div className="d-flex">
              <Link href="/">
                <p className="mb-0 text-900">Home</p>
              </Link>
              <svg
                className="mx-3 mt-1"
                xmlns="http://www.w3.org/2000/svg"
                width={8}
                height={13}
                viewBox="0 0 8 13"
                fill="none"
              >
                <path
                  className="stroke-dark"
                  d="M1 1.5L6.5 6.75L1 12"
                  stroke="#111827"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-primary mb-0">Support</p>
            </div>
          </div>
        </div>
        <img
          className="position-absolute bottom-0 start-0 end-0 top-0 z-0"
          src="/assets/imgs/page-header/bg-line.png"
          alt="infinia"
        />
        <div className="bouncing-blobs-container">
          <div className="bouncing-blobs-glass" />
          <div className="bouncing-blobs">
            <div className="position-absolute top-0 start-0 translate-middle-y bouncing-blob--green" />
            <div className="position-absolute top-0 end-0 bouncing-blob--primary" />
          </div>
        </div>
      </section>

      {/* FAQs 2 */}
      <section className="section-faqs-2 section-padding bg-4 position-relative">
        <div className="container position-relative z-2">
          <div className="text-center mb-8">
            <div className="d-flex align-items-center position-relative z-2 justify-content-center bg-primary-soft d-inline-flex rounded-pill border border-2 border-white px-3 py-1">
              <img src="/assets/imgs/features-1/dots.png" alt="infinia" />
              <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
                Frequently Asked Questions
              </span>
            </div>
            <h3 className="ds-3 my-3 fw-bold">Ask us anything</h3>
            <p className="fs-5 mb-0">
              Have any questions? We’re here to assist you.
            </p>
          </div>
          <div className="row align-items-center position-relative z-1">
            <div className="col-lg-6">
              <div className="accordion">
                <div className="mb-3 card p-3 border bg-white rounded-3">
                  <div className="px-0 card-header border-0 bg-gradient-1">
                    <a
                      className={` ${activeItem} == 1 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`}
                      onClick={() => handleActiveItem(1)}
                      data-bs-toggle="collapse"
                    >
                      <h6 className="m-0">
                        What is My{" "}
                        <span className="text-primary">Yoga Network?</span>
                      </h6>
                      <span className="ms-auto arrow me-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={13}
                          height={8}
                          viewBox="0 0 13 8"
                          fill="none"
                        >
                          <path
                            className="stroke-dark"
                            d="M11.5 1L6.25 6.5L1 1"
                            stroke="#111827"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                  <div
                    id="collapse01"
                    className={
                      activeItem == 1
                        ? "accordion-collapse collapse show"
                        : "accordion-collapse collapse"
                    }
                    data-bs-parent=".accordion"
                  >
                    <p className="ps-0 card-body">
                      My Yoga Network is an online platform that connects
                      certified yoga instructors with clients such as hotels,
                      healthcare facilities, and individuals. We provide
                      tailored yoga sessions to meet the needs of various
                      settings, enhancing guest wellness, promoting therapeutic
                      care, and supporting personal fitness goals.
                    </p>
                  </div>
                </div>
                <div className="mb-3 card p-3 border bg-white rounded-3">
                  <div className="px-0 card-header border-0 bg-gradient-1">
                    <a
                      className={` ${activeItem} == 2 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`}
                      onClick={() => handleActiveItem(2)}
                      data-bs-toggle="collapse"
                    >
                      <h6 className="m-0">
                        What services does My Yoga Network offer to{" "}
                        <span className="text-primary">offer to</span> hotels ?
                      </h6>
                      <span className="ms-auto arrow me-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={13}
                          height={8}
                          viewBox="0 0 13 8"
                          fill="none"
                        >
                          <path
                            className="stroke-dark"
                            d="M11.5 1L6.25 6.5L1 1"
                            stroke="#111827"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                  <div
                    id="collapse02"
                    className={
                      activeItem == 2
                        ? "accordion-collapse collapse show"
                        : "accordion-collapse collapse"
                    }
                    data-bs-parent=".accordion"
                  >
                    <p className="ps-0 card-body">
                      MYN partners with hotels to provide Yoga session by
                      certified instructors on the hotel property. Our programs
                      are proven to improve guest satisfaction scores and
                      enhance the guest experience by providing relaxation,
                      fitness, and mindfulness options to travelers.
                    </p>
                  </div>
                </div>
                <div className="mb-3 card p-3 border bg-white rounded-3">
                  <div className="px-0 card-header border-0 bg-gradient-1">
                    <a
                      className={` ${activeItem} == 3 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`}
                      onClick={() => handleActiveItem(3)}
                      data-bs-toggle="collapse"
                    >
                      <h6 className="m-0">
                        Is yoga therapy suitable for individuals with specific
                        medical conditions?
                      </h6>
                      <span className="ms-auto arrow me-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={13}
                          height={8}
                          viewBox="0 0 13 8"
                          fill="none"
                        >
                          <path
                            className="stroke-dark"
                            d="M11.5 1L6.25 6.5L1 1"
                            stroke="#111827"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                  <div
                    id="collapse03"
                    className={
                      activeItem == 3
                        ? "accordion-collapse collapse show"
                        : "accordion-collapse collapse"
                    }
                    data-bs-parent=".accordion"
                  >
                    <p className="ps-0 card-body">
                      Yes, therapeutic yoga is highly customizable to meet the
                      needs of individuals with medical conditions like PTSD,
                      chronic pain, and mobility issues. Instructors are trained
                      to adapt poses and sequences to support recovery and
                      rehabilitation in a safe and effective manner.
                    </p>
                  </div>
                </div>
                <div className="mb-3 card p-3 border bg-white rounded-3">
                  <div className="px-0 card-header border-0 bg-gradient-1">
                    <a
                      className={` ${activeItem} == 4 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`}
                      onClick={() => handleActiveItem(4)}
                      data-bs-toggle="collapse"
                    >
                      <h6 className="m-0">
                        Are online yoga sessions available?
                      </h6>
                      <span className="ms-auto arrow me-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={13}
                          height={8}
                          viewBox="0 0 13 8"
                          fill="none"
                        >
                          <path
                            className="stroke-dark"
                            d="M11.5 1L6.25 6.5L1 1"
                            stroke="#111827"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                  <div
                    id="collapse04"
                    className={
                      activeItem == 4
                        ? "accordion-collapse collapse show"
                        : "accordion-collapse collapse"
                    }
                    data-bs-parent=".accordion"
                  >
                    <p className="ps-0 card-body">
                      Yes, My Yoga Network offers the option of virtual yoga
                      sessions. These are ideal for people who prefer to
                      practice from the comfort of their home or for those in
                      remote locations where in-person sessions are not
                      feasible.
                    </p>
                  </div>
                </div>
                <div className="mb-3 card p-3 border bg-white rounded-3">
                  <div className="px-0 card-header border-0 bg-gradient-1">
                    <a
                      className={` ${activeItem} == 5 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`}
                      onClick={() => handleActiveItem(5)}
                      data-bs-toggle="collapse"
                    >
                      <h6 className="m-0">What types of yoga are available?</h6>
                      <span className="ms-auto arrow me-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={13}
                          height={8}
                          viewBox="0 0 13 8"
                          fill="none"
                        >
                          <path
                            className="stroke-dark"
                            d="M11.5 1L6.25 6.5L1 1"
                            stroke="#111827"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                  <div
                    id="collapse05"
                    className={
                      activeItem == 5
                        ? "accordion-collapse collapse show"
                        : "accordion-collapse collapse"
                    }
                    data-bs-parent=".accordion"
                  >
                    <p className="ps-0 card-body">
                      My Yoga Network offers a variety of yoga styles, including
                      Hatha, Vinyasa, restorative yoga, and specialized
                      therapeutic yoga. The diversity of yoga options allows
                      clients to choose based on their fitness levels,
                      preferences, and goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-lg-0 mt-2">
              <div className="accordion">
                <div className="mb-3 card p-3 border bg-white rounded-3">
                  <div className="px-0 card-header border-0 bg-gradient-1">
                    <a
                      className={` ${activeItem} == 6 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`}
                      onClick={() => handleActiveItem(6)}
                      data-bs-toggle="collapse"
                    >
                      <h6 className="m-0">
                        How much does a yoga session cost?
                      </h6>
                      <span className="ms-auto arrow me-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={13}
                          height={8}
                          viewBox="0 0 13 8"
                          fill="none"
                        >
                          <path
                            className="stroke-dark"
                            d="M11.5 1L6.25 6.5L1 1"
                            stroke="#111827"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                  <div
                    id="collapse06"
                    className={
                      activeItem == 6
                        ? "accordion-collapse collapse show"
                        : "accordion-collapse collapse"
                    }
                    data-bs-parent=".accordion"
                  >
                    <p className="ps-0 card-body">
                      The cost of yoga sessions varies depending on the type of
                      service (private, hotel, or healthcare), the instructor’s
                      qualifications, and session duration. Please contact us
                      directly to receive a tailored quote based on your
                      specific needs.
                    </p>
                  </div>
                </div>
                <div className="mb-3 card p-3 border bg-white rounded-3">
                  <div className="px-0 card-header border-0 bg-gradient-1">
                    <a
                      className={` ${activeItem} == 7 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`}
                      onClick={() => handleActiveItem(7)}
                      data-bs-toggle="collapse"
                    >
                      <h6 className="m-0">
                        Can I reschedule or cancel a session?
                      </h6>
                      <span className="ms-auto arrow me-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={13}
                          height={8}
                          viewBox="0 0 13 8"
                          fill="none"
                        >
                          <path
                            className="stroke-dark"
                            d="M11.5 1L6.25 6.5L1 1"
                            stroke="#111827"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                  <div
                    id="collapse07"
                    className={
                      activeItem == 7
                        ? "accordion-collapse collapse show"
                        : "accordion-collapse collapse"
                    }
                    data-bs-parent=".accordion"
                  >
                    <p className="ps-0 card-body">
                      Yes, please check the rescheduling or cancellation window
                      on the yoga teacher profile as policies may vary depending
                      on the service or instructor.
                    </p>
                  </div>
                </div>
                <div className="mb-3 card p-3 border bg-white rounded-3">
                  <div className="px-0 card-header border-0 bg-gradient-1">
                    <a
                      className={` ${activeItem} == 8 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`}
                      onClick={() => handleActiveItem(8)}
                      data-bs-toggle="collapse"
                    >
                      <h6 className="m-0">
                        How do I join as a yoga instructor?
                      </h6>
                      <span className="ms-auto arrow me-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={13}
                          height={8}
                          viewBox="0 0 13 8"
                          fill="none"
                        >
                          <path
                            className="stroke-dark"
                            d="M11.5 1L6.25 6.5L1 1"
                            stroke="#111827"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                  <div
                    id="collapse08"
                    className={
                      activeItem == 8
                        ? "accordion-collapse collapse show"
                        : "accordion-collapse collapse"
                    }
                    data-bs-parent=".accordion"
                  >
                    <p className="ps-0 card-body">
                      Certified yoga instructors can apply through our website.
                      After applying, MYN will verify your credentials and send
                      you an invitation to create a profile.
                    </p>
                  </div>
                </div>
                <div className="mb-3 card p-3 border bg-white rounded-3">
                  <div className="px-0 card-header border-0 bg-gradient-1">
                    <a
                      className={` ${activeItem} == 9 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`}
                      onClick={() => handleActiveItem(9)}
                      data-bs-toggle="collapse"
                    >
                      <h6 className="m-0">
                        What qualifications are required to join as a yoga
                        instructor at MYN?
                      </h6>
                      <span className="ms-auto arrow me-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={13}
                          height={8}
                          viewBox="0 0 13 8"
                          fill="none"
                        >
                          <path
                            className="stroke-dark"
                            d="M11.5 1L6.25 6.5L1 1"
                            stroke="#111827"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                  <div
                    id="collapse09"
                    className={
                      activeItem == 9
                        ? "accordion-collapse collapse show"
                        : "accordion-collapse collapse"
                    }
                    data-bs-parent=".accordion"
                  >
                    <p className="ps-0 card-body">
                      Instructors must hold valid yoga certification from
                      accredited institutions and demonstrate experience in
                      teaching. My Yoga Network may also require instructors to
                      have specialized training for certain therapeutic or
                      advanced styles of yoga if instructors are providing
                      therapeutic yoga services. We are currently accepting Yoga
                      teacher - RYT-200 / RYT-500, YTT (KYM) Yoga therapist -
                      C-IAYT, MYT, PYT
                    </p>
                  </div>
                </div>
                <div className="mb-3 card p-3 border bg-white rounded-3">
                  <div className="px-0 card-header border-0 bg-gradient-1">
                    <a
                      className={` ${activeItem} == 10 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`}
                      onClick={() => handleActiveItem(10)}
                      data-bs-toggle="collapse"
                    >
                      <h6 className="m-0">
                        Is there a membership fee for yoga instructors?
                      </h6>
                      <span className="ms-auto arrow me-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={13}
                          height={8}
                          viewBox="0 0 13 8"
                          fill="none"
                        >
                          <path
                            className="stroke-dark"
                            d="M11.5 1L6.25 6.5L1 1"
                            stroke="#111827"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                  <div
                    id="collapse10"
                    className={
                      activeItem == 10
                        ? "accordion-collapse collapse show"
                        : "accordion-collapse collapse"
                    }
                    data-bs-parent=".accordion"
                  >
                    <p className="ps-0 card-body">
                      We are currently staffing yoga instructors without any
                      charge. In the future, however, yoga instructors may be
                      required to pay a membership or subscription fee to join
                      the network.
                    </p>
                  </div>
                </div>
                <div className="mb-3 card p-3 border bg-white rounded-3">
                  <div className="px-0 card-header border-0 bg-gradient-1">
                    <a
                      className={` ${activeItem} == 11 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`}
                      onClick={() => handleActiveItem(11)}
                      data-bs-toggle="collapse"
                    >
                      <h6 className="m-0">
                        Who can I contact if I have more questions?
                      </h6>
                      <span className="ms-auto arrow me-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={13}
                          height={8}
                          viewBox="0 0 13 8"
                          fill="none"
                        >
                          <path
                            className="stroke-dark"
                            d="M11.5 1L6.25 6.5L1 1"
                            stroke="#111827"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                  <div
                    id="collapse11"
                    className={
                      activeItem == 11
                        ? "accordion-collapse collapse show"
                        : "accordion-collapse collapse"
                    }
                    data-bs-parent=".accordion"
                  >
                    <p className="ps-0 card-body">
                      Please email Ram@myyoganetwork.com or call (888) 960-9240
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ellipse-center position-absolute top-50 start-50 translate-middle z-0" />
        </div>
      </section>
    </>
  );
}
