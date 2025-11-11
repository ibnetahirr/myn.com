"use client";
import Layout from "@/components/layout/Layout";
import { useState } from "react";
import Link from "next/link";

export default function WorkPlacePage() {
  // Accordion
  const [activeItem, setActiveItem] = useState(1);

  const handleActiveItem = (index: any) => {
    setActiveItem(index);
  };

  return (
    <Layout>
      {/* HERO */}
      <section className="section-feature-5">
        <div className="container-fluid position-relative section-padding">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="photo-description position-relative  rounded-4">
                  <img
                    className="rounded-4 border border-2 border-white position-relative z-1"
                    src="/assets/imgs/workplace/hero.webp"
                    alt="Hotels"
                  />
                  <div className="box-gradient-1 ms-lg-8 position-absolute bottom-0 start-0 bg-linear-1 rounded-4 z-0" />
                </div>
              </div>
              <div className="col-lg-6 offset-lg-1 mt-lg-0 mt-5">
                <h4 className="ds-4 fw-regular">
                  Corporate Yoga Programs to Energize Your{" "}
                  <span className="fw-bold">Workplace</span>
                </h4>
                <p className="fs-5">
                  Support your employees’ physical and mental well-being with
                  yoga sessions designed specifically for the modern workplace.
                  Whether your team works from the office, remotely, or in a
                  hybrid setup, our certified instructors bring wellness
                  directly to them.
                </p>
                <Link
                  href="https://calendly.com/ram-myyoganetwork/up-to-60min"
                  target="_blank"
                  className="btn btn-outline-secondary hover-up bg-transparent mt-5"
                >
                  BOOK A CONSULTATION
                  <svg
                    className="ms-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      className="stroke-dark"
                      d="M17.25 15.25V6.75H8.75"
                      stroke="#000"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      className="stroke-dark"
                      d="M17 7L6.75 17.25"
                      stroke="#000"
                      strokeWidth="1.5"
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

      {/* Services */}
      <section className="section-padding">
        <div className="container position-relative z-1">
          <div className="text-center mb-8">
            <h3 className="ds-5 my-3 fw-black"> Our Services</h3>
            <p className="fs-5 mb-0">
              Enhancing Productivity and Well-Being with Corporate Yoga
              Programs.
            </p>
          </div>
        </div>

        <div className="container">
          <div className="row mt-6 position-relative">
            <div className="col-lg-4">
              <div className="p-2 mt-lg-8 rounded-4 shadow-1 bg-white position-relative z-1 hover-up">
                <div className="card-service bg-white p-6 border rounded-4">
                  <h6 className="my-3">Monthly Program</h6>
                  <p className="mb-6">
                    Consistent monthly yoga and mindfulness sessions, customized
                    for your group, fostering balance, growth, and sustained
                    well-being.
                  </p>
                </div>
              </div>
              <div className="p-2 mt-5 rounded-4 shadow-1 bg-white position-relative z-1 hover-up">
                <div className="card-service bg-white p-6 border rounded-3">
                  <h6 className="my-3">On-Demand Special Events</h6>
                  <p className="mb-6">
                    Enhance any occasion with wellness retreats, corporate
                    sessions, and themed yoga workshops that inspire,
                    rejuvenate, and unite communities.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="p-2 mt-5 rounded-4 shadow-1 bg-white position-relative z-1 hover-up">
                <div className="card-service bg-white p-6 border rounded-3">
                  <h6 className="my-3">Luxury Wellness Offerings</h6>
                  <p className="mb-6">
                    Exclusive one-on-one yoga training to complement spa and
                    concierge services, delivering a premium, tailored wellness
                    experience for guests.
                  </p>
                </div>
              </div>
              <div className="p-2 mt-5 rounded-4 shadow-1 bg-white position-relative z-1 hover-up">
                <div className="card-service bg-white p-6 border rounded-3">
                  <img src="/assets/imgs/service-1/icon-4.svg" alt="infinia" />
                  <h6 className="my-3">Corporate Retreat Program</h6>
                  <p className="mb-6">
                    Half- or full-day retreats tailored to boost team building,
                    reduce stress, and promote workplace harmony.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="p-2 mt-lg-8 mt-5 rounded-4 shadow-1 bg-white position-relative z-1 hover-up hover-up">
                <div className="card-service bg-white p-6 border rounded-3">
                  <h6 className="my-3">Mind & Body Coaching</h6>
                  <p className="mb-6">
                    Tailored yoga, meditation, and lifestyle coaching to enhance
                    mental clarity, resilience, and well-being for your team.
                  </p>
                </div>
              </div>
              <div className="p-2 mt-5 rounded-4 shadow-1 bg-white position-relative z-1 hover-up">
                <div className="card-service bg-white p-6 border rounded-3">
                  <h6 className="my-3">Virtual Wellness Hub</h6>
                  <p className="mb-6">
                    Enjoy live and on-demand yoga sessions, wellness guides, and
                    community support, available anytime for your organization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-faqs-1 section-padding position-relative">
        <div className="container position-relative z-1">
          <div className="text-center mb-8">
            <h3 className="ds-5 my-3 fw-black">Frequently Asked Questions</h3>
            <p className="fs-5 mb-0">
              Find Answers About Bringing Yoga & Wellness to Your Workplace.
            </p>
          </div>
        </div>
        <div className="container position-relative z-2">
          <div className="row align-items-center">
            <div className="col-lg-12 mt-lg-0 mt-8 ">
              <div className="accordion">
                <div className="mb-3 card p-3 border  bg-white rounded-2 shadow-2">
                  <div className="px-0 card-header border-0 bg-gradient-1">
                    <a
                      className={` ${activeItem} == 1 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`}
                      onClick={() => handleActiveItem(1)}
                      data-bs-toggle="collapse"
                    >
                      <h6 className="m-0">
                        Do we need a special space for on-site yoga?
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
                      Not at all. A conference room or open space is enough. We
                      can also provide chair yoga if space is limited.
                    </p>
                  </div>
                </div>
                <div className="mb-3 card p-3 border  bg-white rounded-2 shadow-2">
                  <div className="px-0 card-header border-0 bg-gradient-1">
                    <a
                      className={` ${activeItem} == 2 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`}
                      onClick={() => handleActiveItem(2)}
                      data-bs-toggle="collapse"
                    >
                      <h6 className="m-0">Are instructors certified?</h6>
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
                      Absolutely. All our instructors are certified,
                      experienced, and trained in workplace-friendly practices.
                    </p>
                  </div>
                </div>
                <div className="mb-3 card p-3 border  bg-white rounded-2 shadow-2">
                  <div className="px-0 card-header border-0 bg-gradient-1">
                    <a
                      className={` ${activeItem} == 3 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`}
                      onClick={() => handleActiveItem(3)}
                      data-bs-toggle="collapse"
                    >
                      <h6 className="m-0">
                        Can we do a one-time session or event?
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
                      Yes! We offer one-time sessions for wellness weeks,
                      events, or retreats.
                    </p>
                  </div>
                </div>
                <div className="mb-3 card p-3 border  bg-white rounded-2 shadow-2">
                  <div className="px-0 card-header border-0 bg-gradient-1">
                    <a
                      className={` ${activeItem} == 4 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`}
                      onClick={() => handleActiveItem(4)}
                      data-bs-toggle="collapse"
                    >
                      <h6 className="m-0">How do we get started?</h6>
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
                      Simply book a free consultation. We’ll take care of the
                      rest!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
