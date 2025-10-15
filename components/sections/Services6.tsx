"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function Services6() {
  // Nav
  const [isNav, setIsNav] = useState(1);

  const handleNav = (i: any) => {
    setIsNav(i);
  };

  return (
    <>
      <section className="section-services-4 position-relative fix section-padding">
        <div className="container position-relative z-2">
          <div className="text-center">
            <div
              className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2"
              data-aos="zoom-in"
              data-aos-delay={100}
            >
              <img
                src="/assets/imgs/features-1/dots.png"
                alt="My Yoga Network"
              />
              <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
                What We Offer
              </span>
            </div>
            <h3 className="ds-3 my-3 fw-regular">
              Elevating{" "}
              <span className="fw-bold">
                Wellness Excellence <br className="d-none d-md-inline" />{" "}
              </span>
              through <span className="fw-bold">Innovative</span> Yoga
            </h3>
          </div>
          <div className="row pt-8">
            <div className="col-lg-4">
              <div className="d-flex align-items-start">
                <div
                  className="nav w-100 flex-column nav-pills"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <button
                    className={`${
                      isNav == 1 ? "active" : ""
                    } nav-link pe-5 justify-content-between d-flex`}
                    onClick={() => handleNav(1)}
                    id="v-pills-financial-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-financial"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-financial"
                    aria-selected="true"
                  >
                    Transforming Healthcare with Yoga
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        className="fill-white"
                        d="M17.4177 5.41772L16.3487 6.48681L21.1059 11.244H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5822L24 12L17.4177 5.41772Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                  <button
                    className={`${
                      isNav == 2 ? "active" : ""
                    } nav-link pe-5 justify-content-between d-flex`}
                    onClick={() => handleNav(2)}
                    id="v-pills-business-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-business"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-business"
                    aria-selected="false"
                  >
                    Therapeutic Yoga for Specific Conditions
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        className="fill-white"
                        d="M17.4177 5.41772L16.3487 6.48681L21.1059 11.244H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5822L24 12L17.4177 5.41772Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                  <button
                    className={`${
                      isNav == 3 ? "active" : ""
                    } nav-link pe-5 justify-content-between d-flex`}
                    onClick={() => handleNav(3)}
                    id="v-pills-solicitory-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-solicitory"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-solicitory"
                    aria-selected="false"
                  >
                    Mind-Body Healing
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        className="fill-white"
                        d="M17.4177 5.41772L16.3487 6.48681L21.1059 11.244H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5822L24 12L17.4177 5.41772Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                  <button
                    className={`${
                      isNav == 4 ? "active" : ""
                    } nav-link pe-5 justify-content-between d-flex`}
                    onClick={() => handleNav(4)}
                    id="v-pills-hr-consultancy-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-hr-consultancy"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-hr-consultancy"
                    aria-selected="false"
                  >
                    Group and Individual Sessions for Patients
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        className="fill-white"
                        d="M17.4177 5.41772L16.3487 6.48681L21.1059 11.244H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5822L24 12L17.4177 5.41772Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                  <button
                    className={`${
                      isNav == 5 ? "active" : ""
                    } nav-link pe-5 justify-content-between d-flex`}
                    onClick={() => handleNav(5)}
                    id="v-pills-strategy-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-strategy"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-strategy"
                    aria-selected="false"
                  >
                    Yoga for Hotels
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        className="fill-white"
                        d="M17.4177 5.41772L16.3487 6.48681L21.1059 11.244H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5822L24 12L17.4177 5.41772Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                  <button
                    className={`${
                      isNav == 6 ? "active" : ""
                    } nav-link pe-5 justify-content-between d-flex`}
                    onClick={() => handleNav(6)}
                    id="v-pills-start-up-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-start-up"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-start-up"
                    aria-selected="false"
                  >
                    Yoga for Communities
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        className="fill-white"
                        d="M17.4177 5.41772L16.3487 6.48681L21.1059 11.244H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5822L24 12L17.4177 5.41772Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className={`${isNav == 1 ? "show active" : ""} tab-pane fade`}
                  id="v-pills-financial"
                  role="tabpanel"
                  aria-labelledby="v-pills-financial-tab"
                  tabIndex={0}
                >
                  <div className="row align-items-center rounded-3 bg-white p-5">
                    <div className="col-lg-5 mb-lg-0 mb-5">
                      <img
                        className="rounded-3"
                        src="/assets/imgs/service-4/img-1.png"
                        alt="Yoga for Healthcare"
                      />
                    </div>
                    <div className="col-lg-7">
                      <div className="p-lg-3">
                        <h4 className="fw-regular">
                          Transform{" "}
                          <span className="fw-bold">Patient Wellness</span>
                        </h4>
                        <p>
                          In healthcare, patient recovery and well-being are the
                          top priorities. At My Yoga Network, we offer yoga
                          programs specifically designed for patients, helping
                          to enhance recovery, reduce stress, manage pain, and
                          improve overall mental and emotional well-being. Our
                          holistic approach is grounded in therapeutic yoga
                          practices that support the healing process and improve
                          quality of life for patients.
                        </p>
                        <div className="d-flex pt-5">
                          <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
                            <div className="icon">
                              <img
                                src="/assets/imgs/service-4/icon-1.svg"
                                alt="Therapeutic practice"
                              />
                            </div>
                          </div>
                          <div className="ps-5">
                            <h6>Enhanced Recovery</h6>
                            <p>
                              Supports healing with <br /> therapeutic
                              techniques.
                            </p>
                          </div>
                        </div>
                        <div className="d-flex">
                          <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
                            <div className="icon">
                              <img
                                src="/assets/imgs/service-4/icon-2.svg"
                                alt="Stress relief"
                              />
                            </div>
                          </div>
                          <div className="ps-5">
                            <h6>Pain Management</h6>
                            <p>
                              Reduces discomfort with <br /> holistic methods.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`${isNav == 2 ? "show active" : ""} tab-pane fade`}
                  id="v-pills-business"
                  role="tabpanel"
                  aria-labelledby="v-pills-business-tab"
                  tabIndex={0}
                >
                  <div className="row align-items-center rounded-3 bg-white p-5">
                    <div className="col-lg-5 mb-lg-0 mb-5">
                      <img
                        className="rounded-3"
                        src="/assets/imgs/service-4/img-2.png"
                        alt="Yoga for Corporates"
                      />
                    </div>
                    <div className="col-lg-7">
                      <div className="p-lg-3">
                        <h4 className="fw-regular">
                          Elevate{" "}
                          <span className="fw-bold">Patient Wellness</span>
                        </h4>
                        <p>
                          We specialize in creating customized yoga sessions for
                          specific health concerns, such as chronic pain,
                          anxiety and depression, post-trauma recovery
                          (including PTSD), musculoskeletal disorders, and sleep
                          issues. Yoga can complement traditional treatments,
                          offering holistic support to manage symptoms and
                          promote long-term wellness.
                        </p>
                        <div className="d-flex pt-5">
                          <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
                            <div className="icon">
                              <img
                                src="/assets/imgs/service-4/icon-1.svg"
                                alt="Productivity enhancement"
                              />
                            </div>
                          </div>
                          <div className="ps-5">
                            <h6>Customized Sessions</h6>
                            <p>
                              Tailored to address <br /> specific conditions.
                            </p>
                          </div>
                        </div>
                        <div className="d-flex">
                          <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
                            <div className="icon">
                              <img
                                src="/assets/imgs/service-4/icon-2.svg"
                                alt="Team wellness"
                              />
                            </div>
                          </div>
                          <div className="ps-5">
                            <h6>Holistic Support</h6>
                            <p>
                              Complements traditional <br /> treatments
                              effectively.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`${isNav == 3 ? "show active" : ""} tab-pane fade`}
                  id="v-pills-solicitory"
                  role="tabpanel"
                  aria-labelledby="v-pills-solicitory-tab"
                  tabIndex={0}
                >
                  <div className="row align-items-center rounded-3 bg-white p-5">
                    <div className="col-lg-5 mb-lg-0 mb-5">
                      <img
                        className="rounded-3"
                        src="/assets/imgs/service-4/img-3.png"
                        alt="Yoga for Resorts"
                      />
                    </div>
                    <div className="col-lg-7">
                      <div className="p-lg-3">
                        <h4 className="fw-regular">
                          Enhance{" "}
                          <span className="fw-bold">Patient Wellness</span>
                        </h4>
                        <p>
                          We understand the importance of nurturing both the
                          mind and body in the recovery process. Our yoga
                          programs are designed to help patients find balance,
                          ease emotional strain, and reconnect with their
                          physical selves through mindful movement and focused
                          breathing exercises.
                        </p>
                        <div className="d-flex pt-5">
                          <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
                            <div className="icon">
                              <img
                                src="/assets/imgs/service-4/icon-1.svg"
                                alt="Relaxation therapy"
                              />
                            </div>
                          </div>
                          <div className="ps-5">
                            <h6>Stress Relief</h6>
                            <p>
                              Yoga practices help calm the <br /> nervous
                              system, promoting relaxation.
                            </p>
                          </div>
                        </div>
                        <div className="d-flex">
                          <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
                            <div className="icon">
                              <img
                                src="/assets/imgs/service-4/icon-2.svg"
                                alt="Guest relaxation"
                              />
                            </div>
                          </div>
                          <div className="ps-5">
                            <h6>Breathing Techniques</h6>
                            <p>
                              Controlled breathing exercises <br /> improve lung
                              function and vitality.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`${isNav == 4 ? "show active" : ""} tab-pane fade`}
                  id="v-pills-hr-consultancy"
                  role="tabpanel"
                  aria-labelledby="v-pills-hr-consultancy-tab"
                  tabIndex={0}
                >
                  <div className="row align-items-center rounded-3 bg-white p-5">
                    <div className="col-lg-5 mb-lg-0 mb-5">
                      <img
                        className="rounded-3"
                        src="/assets/imgs/service-4/img-4.png"
                        alt="Yoga for Healing Centers"
                      />
                    </div>
                    <div className="col-lg-7">
                      <div className="p-lg-3">
                        <h4 className="fw-regular">
                          Advance{" "}
                          <span className="fw-bold">Healing Wellness</span>
                        </h4>
                        <p>
                          Depending on your facility's needs, we offer both
                          group yoga classes for patient groups and private
                          one-on-one sessions for more personalized attention.
                          Both options focus on promoting healing, alleviating
                          stress, and improving physical function through yoga.
                        </p>
                        <div className="d-flex pt-5">
                          <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
                            <div className="icon">
                              <img
                                src="/assets/imgs/service-4/icon-1.svg"
                                alt="Recovery aid"
                              />
                            </div>
                          </div>
                          <div className="ps-5">
                            <h6>Group Healing</h6>
                            <p>
                              Supports recovery with <br /> community sessions.
                            </p>
                          </div>
                        </div>
                        <div className="d-flex">
                          <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
                            <div className="icon">
                              <img
                                src="/assets/imgs/service-4/icon-2.svg"
                                alt="Mind restoration"
                              />
                            </div>
                          </div>
                          <div className="ps-5">
                            <h6>Personalized Care</h6>
                            <p>
                              Tailors relief with <br /> one-on-one attention.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`${isNav == 5 ? "show active" : ""} tab-pane fade`}
                  id="v-pills-strategy"
                  role="tabpanel"
                  aria-labelledby="v-pills-strategy-tab"
                  tabIndex={0}
                >
                  <div className="row align-items-center rounded-3 bg-white p-5">
                    <div className="col-lg-5 mb-lg-0 mb-5">
                      <img
                        className="rounded-3"
                        src="/assets/imgs/service-4/img-5.png"
                        alt="Yoga for Hotels"
                      />
                    </div>
                    <div className="col-lg-7">
                      <div className="p-lg-3">
                        <h4 className="fw-regular">
                          Elevate{" "}
                          <span className="fw-bold">Hotel Wellness</span>
                        </h4>
                        <p>
                          Our hotel yoga programs offer guests unique wellness
                          experiences with expert-led sessions, serene
                          practices, and personalized options to enhance their
                          stay.
                        </p>
                        <div className="d-flex pt-5">
                          <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
                            <div className="icon">
                              <img
                                src="/assets/imgs/service-4/icon-1.svg"
                                alt="Guest tranquility"
                              />
                            </div>
                          </div>
                          <div className="ps-5">
                            <h6>Guest Tranquility</h6>
                            <p>
                              Promotes relaxation with <br /> morning sessions.
                            </p>
                          </div>
                        </div>
                        <div className="d-flex">
                          <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
                            <div className="icon">
                              <img
                                src="/assets/imgs/service-4/icon-2.svg"
                                alt="Luxury yoga"
                              />
                            </div>
                          </div>
                          <div className="ps-5">
                            <h6>Luxury Yoga</h6>
                            <p>
                              Enhances stays with <br /> premium offerings.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`${isNav == 6 ? "show active" : ""} tab-pane fade`}
                  id="v-pills-start-up"
                  role="tabpanel"
                  aria-labelledby="v-pills-start-up-tab"
                  tabIndex={0}
                >
                  <div className="row align-items-center rounded-3 bg-white p-5">
                    <div className="col-lg-5 mb-lg-0 mb-5">
                      <img
                        className="rounded-3"
                        src="/assets/imgs/service-4/img-6.png"
                        alt="Yoga for Communities"
                      />
                    </div>
                    <div className="col-lg-7">
                      <div className="p-lg-3">
                        <h4 className="fw-regular">
                          Foster{" "}
                          <span className="fw-bold">Community Wellness</span>
                        </h4>
                        <p>
                          Our community yoga programs build connections, promote
                          health, and offer inclusive wellness sessions led by
                          experienced instructors for all ages.
                        </p>
                        <div className="d-flex pt-5">
                          <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
                            <div className="icon">
                              <img
                                src="/assets/imgs/service-4/icon-1.svg"
                                alt="Community fitness"
                              />
                            </div>
                          </div>
                          <div className="ps-5">
                            <h6>Community Fitness</h6>
                            <p>
                              Encourages activity with <br /> group yoga.
                            </p>
                          </div>
                        </div>
                        <div className="d-flex">
                          <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
                            <div className="icon">
                              <img
                                src="/assets/imgs/service-4/icon-2.svg"
                                alt="Inclusive sessions"
                              />
                            </div>
                          </div>
                          <div className="ps-5">
                            <h6>Inclusive Sessions</h6>
                            <p>
                              Welcomes everyone with <br /> adaptable practices.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <div className="position-absolute top-0 start-50 translate-middle-x z-0">
          <img
            src="/assets/imgs/blog-2/img-bg-line.png"
            alt="My Yoga Network"
          />
        </div>
        <div className="bouncing-blobs-container">
          <div className="bouncing-blobs-glass" />
          <div className="bouncing-blobs">
            <div className="bouncing-blob bouncing-blob--green" />
            <div className="bouncing-blob bouncing-blob--primary" />
          </div>
        </div>
      </section>
    </>
  );
}
