"use client";
import { useState } from "react";
export default function Content() {
  // Accordion
  const [activeItem, setActiveItem] = useState(1);

  const handleActiveItem = (index: any) => {
    setActiveItem(index);
  };

  return (
    <>
      <>
        <section className="section-faqs-1 section-padding position-relative">
          <div className="container position-relative z-2">
            <div className="text-center mb-5">
              <h3 className="mt-3 mb-3">Frequently Asked Questions</h3>
              <p className="fs-5">
                Share your details and questions below, and we'll get back to
                you.
              </p>
            </div>

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
                        <h6 className="m-0">What is My Yoga Network?</h6>
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
                        settings, enhancing guest wellness, promoting
                        therapeutic care, and supporting personal fitness goals.
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
                        <h6 className="m-0">
                          What services does My Yoga Network offer to hotels?
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
                        certified instructors on the hotel property. Our
                        programs are proven to improve guest satisfaction scores
                        and enhance the guest experience by providing
                        relaxation, fitness, and mindfulness options to
                        travelers.
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
                        chronic pain, and mobility issues. Instructors are
                        trained to adapt poses and sequences to support recovery
                        and rehabilitation in a safe and effective manner.
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
                  <div className="mb-3 card p-3 border  bg-white rounded-2 shadow-2">
                    <div className="px-0 card-header border-0 bg-gradient-1">
                      <a
                        className={` ${activeItem} == 5 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`}
                        onClick={() => handleActiveItem(5)}
                        data-bs-toggle="collapse"
                      >
                        <h6 className="m-0">
                          What types of yoga are available?
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
                      id="collapse05"
                      className={
                        activeItem == 5
                          ? "accordion-collapse collapse show"
                          : "accordion-collapse collapse"
                      }
                      data-bs-parent=".accordion"
                    >
                      <p className="ps-0 card-body">
                        My Yoga Network offers a variety of yoga styles,
                        including Hatha, Vinyasa, restorative yoga, and
                        specialized therapeutic yoga. The diversity of yoga
                        options allows clients to choose based on their fitness
                        levels, preferences, and goals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
}
