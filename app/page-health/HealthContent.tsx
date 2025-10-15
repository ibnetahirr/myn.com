"use client";

import Link from "next/link";
import React, { useState } from "react";
import CountUp from "react-countup";
import ModalVideo from "react-modal-video";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Hero5() {
  const [isOpen, setOpen] = useState(false);
  // Nav
  const [isNav, setIsNav] = useState(1);

  const handleNav = (i: any) => {
    setIsNav(i);
  };
  return (
    <>
      <section className="section-page-header py-10 fix position-relative">
        <div className="container position-relative z-1">
          <div className="text-start">
            <h3>Health Care</h3>
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
              <p className="text-primary mb-0">Health Care</p>
            </div>
          </div>
        </div>
        <img
          className="position-absolute bottom-0 start-0 end-0 top-0 z-0"
          src="/assets/imgs/page-header/bg-line.png"
          alt="my-yoga-network"
        />
        <div className="bouncing-blobs-container">
          <div className="bouncing-blobs-glass" />
          <div className="bouncing-blobs">
            <div className="position-absolute top-0 start-0 translate-middle-y bouncing-blob--green" />
            <div className="position-absolute top-0 end-0 bouncing-blob--primary" />
          </div>
        </div>
      </section>
      {/*Hero 5*/}
      <div className="section-hero-5 position-relative">
        <div
          className="position-relative py-188 img-pull"
          style={{ backgroundImage: `url(/assets/imgs/hero-5/home-hero.png)` }}
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
                    Empower Your Healthcare Facility
                    <span className="fw-regular">
                      <br />
                      with
                      <img
                        className="alltuchtopdown img-fluid filter-invert"
                        src="/assets/imgs/hero-5/icon-1.svg"
                        alt="Yoga icon"
                      />
                      Personalized Yoga Solutions
                    </span>
                  </h3>
                  <p className="fs-5 text-900">
                    Customized yoga programs to enhance patient recovery, reduce
                    stress, and boost well-being in healthcare facilities.
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
                    <Link
                      href="#"
                      onClick={() => setOpen(true)}
                      scroll={false}
                      className="d-inline-flex align-items-center rounded-4 text-nowrap backdrop-filter align-self-md-stretch px-3 py-2 popup-video hover-up ms-md-3 mt-3 mt-md-0"
                    >
                      <span className="backdrop-filter me-2 icon-shape icon-md rounded-circle">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            className="stroke-dark"
                            d="M5.0978 3.31244L12.0958 6.80342C13.077 7.29449 13.0767 8.69249 12.0954 9.18316L5.09734 12.6927C4.21074 13.136 3.16687 12.4925 3.16687 11.5027L3.16687 4.50219C3.16687 3.51217 4.2112 2.86872 5.0978 3.31244Z"
                            stroke="#111827"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="fw-bold fs-7 text-900">Video Guide</span>
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
        videoId="L8tQvVv4R8o"
        onClose={() => setOpen(false)}
      />
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
      <section className="features-10 py-9 bg-primary-light">
        <div className="container">
          <div className="row">
            {/* prettier-ignore */}
            <div className="col-lg-3 col-md-6">
              <div className="feature-item mb-5 position-relative mb-lg-0 bg-white p-5 rounded-4 hover-up" style={{ minHeight: "350px" }}>
                <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
                  <div className="icon">
                    <img src="/assets/imgs/features-1/icon-1.svg" alt="Weekly wellness icon" />
                  </div>
                </div>
                <h6>Weekly Wellness</h6>
                <p>Provide weekly therapeutic yoga sessions to support patients’ ongoing recovery and well-being. Tailored programs enhance flexibility, reduce stress, and promote holistic healing with expert guidance.</p>
                <Link href="#" className="text-primary fs-7 fw-bold">
                  Learn More
                  <svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={19} height={18} viewBox="0 0 19 18" fill="none">
                    <g clipPath="url(#clip0_399_9647)">
                      <path className="fill-dark" d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z" fill="#111827" />
                    </g>
                    <defs>
                      <clipPath>
                        <rect width={18} height={18} fill="white" transform="translate(0.5)" />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
                <div className="position-absolute end-0 top-0">
                  <img src="/assets/imgs/feature-10/bg-line.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="feature-item mb-5 position-relative mb-lg-0 bg-white p-5 rounded-4 hover-up"
                style={{ minHeight: "350px" }}
              >
                <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
                  <div className="icon">
                    <img
                      src="/assets/imgs/features-1/icon-2.svg"
                      alt="Monthly wellness icon"
                    />
                  </div>
                </div>
                <h6>Monthly Wellness</h6>
                <p>
                  Offer long-term patient wellness and preventative care with
                  monthly yoga sessions. Designed to improve mental clarity,
                  boost resilience, and support sustained health with
                  professional <br /> oversight.
                </p>
                <Link href="#" className="text-primary fs-7 fw-bold">
                  Learn More
                  <svg
                    className="ms-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width={19}
                    height={18}
                    viewBox="0 0 19 18"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_399_9647)">
                      <path
                        className="fill-dark"
                        d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z"
                        fill="#111827"
                      />
                    </g>
                    <defs>
                      <clipPath>
                        <rect
                          width={18}
                          height={18}
                          fill="white"
                          transform="translate(0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
                <div className="position-absolute end-0 top-0">
                  <img src="/assets/imgs/feature-10/bg-line.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="feature-item mb-5 position-relative mb-lg-0 bg-white p-5 rounded-4 hover-up"
                style={{ minHeight: "350px" }}
              >
                <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
                  <div className="icon">
                    <img
                      src="/assets/imgs/features-1/icon-3.svg"
                      alt="One-off sessions icon"
                    />
                  </div>
                </div>
                <h6>One-Off Sessions</h6>
                <p>
                  Perfect for patients needing an immediate wellness boost
                  without commitment. These sessions offer quick relief,
                  improved mobility, and a personalized <br /> touch from
                  certified instructors.
                </p>
                <Link href="#" className="text-primary fs-7 fw-bold">
                  Learn More
                  <svg
                    className="ms-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width={19}
                    height={18}
                    viewBox="0 0 19 18"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_399_9647)">
                      <path
                        className="fill-dark"
                        d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z"
                        fill="#111827"
                      />
                    </g>
                    <defs>
                      <clipPath>
                        <rect
                          width={18}
                          height={18}
                          fill="white"
                          transform="translate(0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
                <div className="position-absolute end-0 top-0">
                  <img src="/assets/imgs/feature-10/bg-line.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="feature-item mb-5 position-relative mb-lg-0 bg-white p-5 rounded-4 hover-up"
                style={{ minHeight: "350px" }}
              >
                <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
                  <div className="icon">
                    <img
                      src="/assets/imgs/features-1/icon-4.svg"
                      alt="Trial plan icon"
                    />
                  </div>
                </div>
                <h6>Trial Plan</h6>
                <p>
                  Experience our premium yoga services with a no-commitment
                  trial. Explore tailored sessions, expert-led practices, and a
                  preview of long-term wellness <br /> benefits in a risk-free
                  setting.
                </p>
                <Link href="#" className="text-primary fs-7 fw-bold">
                  Learn More
                  <svg
                    className="ms-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width={19}
                    height={18}
                    viewBox="0 0 19 18"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_399_9647)">
                      <path
                        className="fill-dark"
                        d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z"
                        fill="#111827"
                      />
                    </g>
                    <defs>
                      <clipPath>
                        <rect
                          width={18}
                          height={18}
                          fill="white"
                          transform="translate(0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
                <div className="position-absolute end-0 top-0">
                  <img src="/assets/imgs/feature-10/bg-line.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-team-1 position-relative fix section-padding">
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
                Benefits of Yoga
              </span>
            </div>
            <h3 className="ds-3 my-3 fw-regular">
              Benefits of Yoga for{" "}
              <span className=" fw-bold">
                Patient Wellness <br className="d-none d-lg-inline" />
              </span>
            </h3>
          </div>
          <div className="row mt-6 position-relative">
            {/* prettier-ignore */}
            <div className="col-lg-4 col-md-6">
                            <div className="p-2 rounded-4 shadow-1 bg-white position-relative z-1 hover-up mb-4">
                                <div className="card-service bg-white p-6 border rounded-4 text-center">
                                    <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
                                        <div className="icon">
                                            <img src="/assets/imgs/service-2/icon-1.svg" alt="My Yoga Network" />
                                        </div>
                                    </div>
                                    <h5 className="my-3">Effective Pain Management</h5>
<p className="mb-6">Yoga assists patients in reducing the intensity of pain, providing relief from chronic pain conditions and post-surgical discomfort with a targeted therapeutic approach.</p>
                                    <Link href="#" className="text-primary fs-7 fw-bold">
                                        Learn More
                                        <svg className=" ms-2 " xmlns="http://www.w3.org/2000/svg" width={19} height={18} viewBox="0 0 19 18" fill="none">
                                            <g clipPath="url(#clip0_399_9647)">
                                                <path d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z" fill="#111827" />
                                            </g>
                                            <defs>
                                                <clipPath>
                                                    <rect width={18} height={18} fill="white" transform="translate(0.5)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
            <div className="col-lg-4 col-md-6">
              <div className="p-2 rounded-4 shadow-1 bg-white position-relative z-1 hover-up mb-4">
                <div className="card-service bg-white p-6 border rounded-4 text-center">
                  <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
                    <div className="icon">
                      <img
                        src="/assets/imgs/service-2/icon-2.svg"
                        alt="My Yoga Network"
                      />
                    </div>
                  </div>
                  <h5 className="my-3">Optimized Recovery Enhancement</h5>
                  <p className="mb-6">
                    Therapeutic yoga facilitates the healing process by
                    enhancing strength, flexibility, and mobility, delivering a
                    comprehensive approach to patient recovery.
                  </p>
                  <Link href="#" className="text-primary fs-7 fw-bold">
                    Learn More
                    <svg
                      className=" ms-2 "
                      xmlns="http://www.w3.org/2000/svg"
                      width={19}
                      height={18}
                      viewBox="0 0 19 18"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_399_9647)">
                        <path
                          d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z"
                          fill="#111827"
                        />
                      </g>
                      <defs>
                        <clipPath>
                          <rect
                            width={18}
                            height={18}
                            fill="white"
                            transform="translate(0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="p-2 rounded-4 shadow-1 bg-white position-relative z-1 hover-up mb-4">
                <div className="card-service bg-white p-6 border rounded-4 text-center">
                  <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
                    <div className="icon">
                      <img
                        src="/assets/imgs/service-2/icon-3.svg"
                        alt="My Yoga Network"
                      />
                    </div>
                  </div>
                  <h5 className="my-3">Comprehensive Mental Health Support</h5>
                  <p className="mb-6">
                    Yoga effectively mitigates symptoms of anxiety, depression,
                    and stress, empowering patients to address the emotional
                    dimensions of their recovery journey with greater
                    resilience.
                  </p>
                  <Link href="#" className="text-primary fs-7 fw-bold">
                    Learn More
                    <svg
                      className=" ms-2 "
                      xmlns="http://www.w3.org/2000/svg"
                      width={19}
                      height={18}
                      viewBox="0 0 19 18"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_399_9647)">
                        <path
                          d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z"
                          fill="#111827"
                        />
                      </g>
                      <defs>
                        <clipPath>
                          <rect
                            width={18}
                            height={18}
                            fill="white"
                            transform="translate(0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="p-2 rounded-4 shadow-1 bg-white position-relative z-1 hover-up mb-4">
                <div className="card-service bg-white p-6 border rounded-4 text-center">
                  <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
                    <div className="icon">
                      <img
                        src="/assets/imgs/service-2/icon-4.svg"
                        alt="My Yoga Network"
                      />
                    </div>
                  </div>
                  <h5 className="my-3">Enhanced Sleep Quality</h5>
                  <p className="mb-6">
                    Relaxing yoga practices promote improved sleep quality, a
                    critical factor in supporting patients' overall healing and
                    recovery process.
                  </p>
                  <Link href="#" className="text-primary fs-7 fw-bold">
                    Learn More
                    <svg
                      className=" ms-2 "
                      xmlns="http://www.w3.org/2000/svg"
                      width={19}
                      height={18}
                      viewBox="0 0 19 18"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_399_9647)">
                        <path
                          d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z"
                          fill="#111827"
                        />
                      </g>
                      <defs>
                        <clipPath>
                          <rect
                            width={18}
                            height={18}
                            fill="white"
                            transform="translate(0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="p-2 rounded-4 shadow-1 bg-white position-relative z-1 hover-up mb-4">
                <div className="card-service bg-white p-6 border rounded-4 text-center">
                  <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
                    <div className="icon">
                      <img
                        src="/assets/imgs/service-2/icon-5.svg"
                        alt="My Yoga Network"
                      />
                    </div>
                  </div>
                  <h5 className="my-3">Improved Mobility</h5>
                  <p className="mb-6">
                    Gentle stretching and controlled movements facilitate the
                    restoration of mobility, assisting patients in regaining
                    functional movement with enhanced efficacy.
                  </p>
                  <Link href="#" className="text-primary fs-7 fw-bold">
                    Learn More
                    <svg
                      className=" ms-2 "
                      xmlns="http://www.w3.org/2000/svg"
                      width={19}
                      height={18}
                      viewBox="0 0 19 18"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_399_9647)">
                        <path
                          d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z"
                          fill="#111827"
                        />
                      </g>
                      <defs>
                        <clipPath>
                          <rect
                            width={18}
                            height={18}
                            fill="white"
                            transform="translate(0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="p-2 rounded-4 shadow-1 bg-white position-relative z-1 hover-up mb-4">
                <div className="card-service bg-white p-6 border rounded-4 text-center">
                  <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
                    <div className="icon">
                      <img
                        src="/assets/imgs/service-2/icon-6.svg"
                        alt="My Yoga Network"
                      />
                    </div>
                  </div>
                  <h5 className="my-3">Enhanced Immune Function</h5>
                  <p className="mb-6">
                    Yoga practice is proven to bolster the immune system,
                    providing critical support for patients in fortifying
                    resilience throughout their recovery journey.
                  </p>
                  <Link href="#" className="text-primary fs-7 fw-bold">
                    Learn More
                    <svg
                      className=" ms-2 "
                      xmlns="http://www.w3.org/2000/svg"
                      width={19}
                      height={18}
                      viewBox="0 0 19 18"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_399_9647)">
                        <path
                          d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z"
                          fill="#111827"
                        />
                      </g>
                      <defs>
                        <clipPath>
                          <rect
                            width={18}
                            height={18}
                            fill="white"
                            transform="translate(0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <svg
              className="position-absolute top-50 start-50 translate-middle z-0"
              xmlns="http://www.w3.org/2000/svg"
              width={828}
              height={699}
              viewBox="0 0 828 699"
              fill="none"
            >
              <path
                className="fill-primary-soft"
                d="M0 130.481C0 110.236 15.1267 93.1822 35.2276 90.7667L783.228 0.880261C807.04 -1.98124 828 16.611 828 40.5945V533.155C828 552.691 813.888 569.369 794.622 572.603L46.6224 698.173C22.2271 702.269 0 683.462 0 658.725V130.481Z"
                fill="#F5EEFF"
              />
            </svg>
          </div>
        </div>
        <div className="position-absolute top-0 start-50 translate-middle-x z-0">
          <img src="/assets/imgs/service-2/bg-line.png" alt="My Yoga Network" />
        </div>
        <div className="rotate-center ellipse-rotate-success position-absolute z-1" />
        <div className="rotate-center-rev ellipse-rotate-primary position-absolute z-1" />
      </section>
      <section className="section-cta-8 bg-4">
        <div className="container-fluid position-relative section-padding">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div
                  className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2"
                  data-aos="zoom-in"
                  data-aos-delay={100}
                >
                  <img src="/assets/imgs/features-1/dots.png" alt="infinia" />
                  <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
                    How it Works?
                  </span>
                </div>
                <h5 className="ds-5 mt-2">
                  Get yoga when you want, where you want.
                </h5>
                <p>
                  We strive to build long-lasting partnerships with our clients,
                  understanding their unique challenges and opportunities, and
                  providing tailored strategies that lead to measurable success.
                </p>
                <div className="d-flex pt-3 align-items-center">
                  <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
                    <div className="icon">
                      <img
                        src="/assets/imgs/service-4/icon-1.svg"
                        alt="infinia"
                      />
                    </div>
                  </div>
                  <div className="ps-5">
                    <h6>Consultation</h6>
                    <p>
                      We assess your needs and space to design <br /> the
                      perfect program.
                    </p>
                  </div>
                </div>
                <div className="d-flex pt-3 align-items-center">
                  <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
                    <div className="icon">
                      <img
                        src="/assets/imgs/service-4/icon-2.svg"
                        alt="infinia"
                      />
                    </div>
                  </div>
                  <div className="ps-5">
                    <h6>Customized Plan</h6>
                    <p>
                      Choose from flexible session formats—monthly, <br />{" "}
                      on-demand events, or luxury wellness retreats.
                    </p>
                  </div>
                </div>
                <div className="d-flex pt-3 align-items-center">
                  <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
                    <div className="icon">
                      <img
                        src="/assets/imgs/service-4/icon-2.svg"
                        alt="infinia"
                      />
                    </div>
                  </div>
                  <div className="ps-5">
                    <h6>Execution & Support</h6>
                    <p>
                      We handle session delivery, feedback, and <br /> ongoing
                      program enhancement.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 offset-lg-1 text-center mt-lg-0 mt-8">
                <div className="position-relative z-1 d-inline-block mb-lg-0 mb-8">
                  <img
                    className="rounded-4 position-relative z-1"
                    src="/assets/imgs/cta-5/img-1.png"
                    alt="infinia"
                  />
                  <div className="alltuchtopdown tag-year position-absolute backdrop-filter bg-primary rounded-4 px-4 py-5 text-center z-1">
                    <span className="h2 count fw-black my-0 lh-1 text-white text-nowrap">
                      <span className="odometer" />{" "}
                      <CountUp end={25} enableScrollSpy={true} />+
                    </span>
                    <p className="text-white text-nowrap mb-0">
                      Years of Experience
                    </p>
                  </div>
                  <div className="position-absolute tag-dots z-0 pt-5">
                    <img
                      className="alltuchtopdown"
                      src="/assets/imgs/cta-4/vector.svg"
                      alt="infinia"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-cta-9 bg-3 pt-120 pb-lg-250 pb-120">
        <div className="container-fluid position-relative">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 text-start">
                <div className="position-relative d-inline-block">
                  <div className="zoom-img rounded-3 mb-lg-0  mb-5">
                    <img
                      className="rounded-3"
                      src="/assets/imgs/cta-9/img-1.png"
                      alt=""
                    />
                  </div>
                  <div className="position-lg-absolute position-relative end-0 play-video">
                    <div className="zoom-img rounded-3 d-inline-block position-relative z-1 mb-lg-0 mb-5">
                      <img
                        className="rounded-3"
                        src="/assets/imgs/cta-9/img-2.png"
                        alt=""
                      />
                      <div className="position-absolute z-2 top-50 start-50 translate-middle">
                        <Link
                          href="#"
                          onClick={() => setOpen(true)}
                          scroll={false}
                          className="d-inline-flex align-items-center rounded-4 text-nowrap backdrop-filter px-3 py-2 popup-video hover-up me-3 shadow-1"
                        >
                          <span className="backdrop-filter me-2 icon-shape icon-md rounded-circle">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                className="stroke-dark"
                                d="M5.0978 3.31244L12.0958 6.80342C13.077 7.29449 13.0767 8.69249 12.0954 9.18316L5.09734 12.6927C4.21074 13.136 3.16687 12.4925 3.16687 11.5027L3.16687 4.50219C3.16687 3.51217 4.2112 2.86872 5.0978 3.31244Z"
                                stroke="#111827"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                          <span className="fw-bold fs-7 text-900">
                            Video Guide
                          </span>
                        </Link>
                        <ModalVideo
                          channel="youtube"
                          isOpen={isOpen}
                          videoId="gXFATcwrO-U"
                          onClose={() => setOpen(false)}
                        />
                      </div>
                    </div>
                    <div className="box-gradient position-absolute d-none d-lg-block z-0"></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 px-lg-7">
                <div
                  className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2"
                  data-aos="zoom-in"
                  data-aos-delay={100}
                >
                  <img
                    src="/assets/imgs/features-1/dots.png"
                    alt="my-yoga-network"
                  />
                  <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
                    Why Choose My Yoga Network?
                  </span>
                </div>
                <h5 className="ds-5 mt-3 mb-5">
                  Partner with My Yoga Network <br /> and Benefit from Our
                  Expertise
                </h5>
                <p className="mb-5">
                  We foster enduring partnerships with our clients, leveraging
                  our team of instructors and decades of experience to deliver
                  tailored yoga programs that enhance measurable well-being.
                </p>
                <div className="mb-5">
                  <p className="text-900 mb-1">Industry-Specific Programs</p>
                  <div
                    className="progress position-relative"
                    role="progressbar"
                    aria-label="Example 4px high"
                    style={{ height: 8 }}
                    aria-valuenow={85}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div className="progress-bar" style={{ width: "85%" }} />
                    <p className="progress-number" style={{ left: "85%" }}>
                      85%
                    </p>
                  </div>
                </div>
                <div className="mb-5">
                  <p className="text-900 mb-1">
                    Certified & Vetted Yoga Instructors
                  </p>
                  <div
                    className="progress position-relative"
                    role="progressbar"
                    aria-label="Example 4px high"
                    style={{ height: 8 }}
                    aria-valuenow={92}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div className="progress-bar" style={{ width: "92%" }} />
                    <span className="progress-number" style={{ left: "92%" }}>
                      92%
                    </span>
                  </div>
                </div>
                <div className="mb-5">
                  <p className="text-900 mb-1">Flexible Offerings</p>
                  <div
                    className="progress position-relative"
                    role="progressbar"
                    aria-label="Example 4px high"
                    style={{ height: 8 }}
                    aria-valuenow={81}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div className="progress-bar" style={{ width: "81%" }} />
                    <span className="progress-number" style={{ left: "81%" }}>
                      81%
                    </span>
                  </div>
                </div>
                <ul className="mb-5 list-unstyled">
                  <li className="mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-check-circle text-warning me-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                    </svg>
                    Designed for hotels, corporates, schools & healthcare
                    providers
                  </li>
                  <li className="mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-check-circle text-warning me-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                    </svg>
                    Get reliable, professional, insured yoga instructors
                  </li>
                  <li className="mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-check-circle text-warning me-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                    </svg>
                    Monthly sessions, on-demand events, luxury retreats, or
                    trial plans
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-team-1 section-padding position-relative overflow-hidden">
        <div className="container">
          <div className="row position-relative z-1">
            <div className="text-center">
              <div
                className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2"
                data-aos="zoom-in"
                data-aos-delay={100}
              ></div>
              <h3
                className="ds-3 my-3"
                data-aos="fade-zoom-in"
                data-aos-delay={200}
              >
                Meet Our Teachers
              </h3>
              <p className="fs-5" data-aos="fade-zoom-in" data-aos-delay={300}>
                Our certified instructors deliver tailored, expert-led yoga
                sessions with dedication and precision.{" "}
              </p>
            </div>
          </div>
          <div className="row mt-6">
            {/* prettier-ignore */}
            <div className="col-lg-3 col-md-6 mb-lg-4 mb-7 text-center" data-aos="fade-zoom-in" data-aos-delay={100}>
              <div className="position-relative d-inline-block z-1">
                <div className="zoom-img rounded-3">
                  <img className="img-fluid w-100" src="/assets/imgs/team-1/teacher-1.jpg" alt="my-yoga-network" />
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 mb-lg-4 mb-7 text-center"
              data-aos="fade-zoom-in"
              data-aos-delay={200}
            >
              <div className="position-relative d-inline-block z-1">
                <div className="zoom-img rounded-3">
                  <img
                    className="img-fluid w-100"
                    src="/assets/imgs/team-1/teacher-2.jpg"
                    alt="my-yoga-network"
                  />
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 mb-lg-4 mb-7 text-center"
              data-aos="fade-zoom-in"
              data-aos-delay={300}
            >
              <div className="position-relative d-inline-block z-1">
                <div className="zoom-img rounded-3">
                  <img
                    className="img-fluid w-100"
                    src="/assets/imgs/team-1/teacher-3.jpg"
                    alt="my-yoga-network"
                  />
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 mb-lg-4 mb-7 text-center"
              data-aos="fade-zoom-in"
              data-aos-delay={400}
            >
              <div className="position-relative d-inline-block z-1">
                <div className="zoom-img rounded-3">
                  <img
                    className="img-fluid w-100"
                    src="/assets/imgs/team-1/teacher-4.jpg"
                    alt="my-yoga-network"
                  />
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 mb-lg-4 mb-7 text-center"
              data-aos="fade-zoom-in"
              data-aos-delay={100}
            ></div>
            <div
              className="col-lg-3 col-md-6 mb-lg-4 mb-7 text-center"
              data-aos="fade-zoom-in"
              data-aos-delay={200}
            ></div>
            <div
              className="col-lg-3 col-md-6 mb-lg-4 mb-7 text-center"
              data-aos="fade-zoom-in"
              data-aos-delay={300}
            ></div>
            <div
              className="col-lg-3 col-md-6 mb-lg-4 mb-7 text-center"
              data-aos="fade-zoom-in"
              data-aos-delay={400}
            ></div>
          </div>
        </div>
        <div className="position-absolute top-0 start-50 translate-middle-x z-0">
          <img src="/assets/imgs/team-1/bg-line.png" alt="my-yoga-network" />
        </div>
        <div className="rotate-center ellipse-rotate-success position-absolute z-0" />
        <div className="rotate-center-rev ellipse-rotate-primary position-absolute z-0" />
      </section>
    </>
  );
}
