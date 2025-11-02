"use client";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { useState } from "react";
import CountUp from "react-countup";
export default function Hero5() {
  const [isOpen, setOpen] = useState(false);
  // Accordion
  const [activeItem, setActiveItem] = useState(1);

  const handleActiveItem = (index: any) => {
    setActiveItem(index);
  };

  return (
    <>
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
                      src="/assets/imgs/hotels/page/hotel.webp"
                      alt="Hotels"
                    />
                    <div className="box-gradient-1 ms-lg-8 position-absolute bottom-0 start-0 bg-linear-1 rounded-4 z-0" />
                  </div>
                </div>
                <div className="col-lg-6 offset-lg-1 mt-lg-0 mt-5">
                  <h4 className="ds-4 fw-regular">
                    On-Site Yoga & Wellness Programs for{" "}
                    <span
                      className="fw-bold"
                      data-aos="fade-zoom-in"
                      data-aos-delay={200}
                    >
                      Hotels & Resorts.
                    </span>
                  </h4>
                  <p className="fs-5">
                    Seamlessly integrate professional yoga sessions to enhance
                    relaxation and guest satisfaction.
                  </p>
                  <Link
                    href="https://calendly.com/ram-myyoganetwork/up-to-60min"
                    target="_blank"
                    className="btn btn-outline-secondary hover-up bg-transparent mt-5"
                    data-aos="fade-zoom-in"
                    data-aos-delay={200}
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
              <div className="py-90"></div>
              <div className="row align-items-start pb-5 pt-lg-5 pt-0">
                <div className="col-lg-5 order-2 order-lg-1 mt-lg-0 mt-10 pt-lg-0 pt-5">
                  <h4 className="ds-4 fw-regular">
                    Make Your Hotel
                    <br />{" "}
                    <span
                      className="fw-bold"
                      data-aos="fade-zoom-in"
                      data-aos-delay={200}
                    >
                      Stand Out <br />
                    </span>
                    with a Tailored Yoga & Wellness Program
                  </h4>
                  <p className="fs-5">
                    Travelers today seek more than just a place to stay; they
                    desire relaxation, rejuvenation, and wellness experiences.
                    With My Yoga Network, you can seamlessly integrate certified
                    yoga programs into your hotel’s offerings, ensuring a
                    luxurious and holistic stay for your guests.
                  </p>
                </div>
                <div className="col-lg-6 offset-lg-1 order-1 order-lg-2 mt-5 text-lg-end text-center">
                  <div className="photo-description position-relative rounded-4 d-inline-block">
                    <img
                      className="rounded-4 border border-2 border-white position-relative z-1"
                      src="/assets/imgs/hotels/page/hotel-right.webp"
                      alt="stand out"
                    />
                    <div className="position-absolute top-50 start-50 translate-middle z-0">
                      <div className="box-gradient-2 position-relative bg-linear-1 rounded-4 z-0"></div>
                    </div>
                    <img
                      className="position-absolute top-100 start-0 d-none d-md-block translate-middle rounded-4 border border-2 border-white position-relative z-1"
                      src="/assets/imgs/features-5/img-3.png"
                      alt="infinia"
                      data-aos="zoom-in"
                      data-aos-delay={100}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Clients */}
        <section className="section-logo-cloud section-logo-cloud-5 position-relative">
          <div className="container-fluid pt-110 pb-110 mt-lg-0 border-top border-bottom">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-4 pb-lg-0 pb-8">
                  <h4 className="text-nowrap">
                    Proudly Serving Top-Tier <br /> Luxury Hotels and Resorts{" "}
                  </h4>
                  {/* <Link
                    href="#"
                    className="shadow-1 btn text-start bg-white d-inline-block text-primary hover-up"
                  >
                    View our partners
                    <svg
                      className="ms-3"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={14}
                      viewBox="0 0 24 14"
                      fill="none"
                    >
                      <path
                        className="fill-dark"
                        d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z"
                        fill="black"
                      />
                    </svg>
                  </Link> */}
                </div>
                <div className="col-lg-8 ps-lg-8">
                  <div className="bg-white py-3 px-3 shadow-1 rounded-2 align-self-center icon-shape hover-up me-2 mb-2">
                    <img
                      className="filter-invert"
                      src="/assets/imgs/clients/hotels/westin.png"
                      width={220}
                      height={75}
                      alt="Westin Hotel"
                    />
                  </div>
                  <div className="bg-white py-3 px-3 shadow-1 rounded-2 align-self-center icon-shape hover-up me-2 mb-2">
                    <img
                      src="/assets/imgs/clients/hotels/hilton.png"
                      width={220}
                      height={75}
                      alt="Hilton"
                    />
                  </div>

                  <div className="bg-white py-3 px-3 shadow-1 rounded-2 align-self-center icon-shape hover-up me-2 mb-2">
                    <img
                      src="/assets/imgs/clients/hotels/aimbridge.png"
                      width={200}
                      height={75}
                      alt="Aimbridge Hospitality"
                    />
                  </div>

                  <div className="bg-white py-3 px-3 shadow-1 rounded-2 align-self-center icon-shape hover-up me-2 mb-2">
                    <img
                      src="/assets/imgs/clients/hotels/hyatt.png"
                      width={220}
                      height={60}
                      alt="Hyatt Hotel"
                    />
                  </div>

                  <div className="bg-white py-3 px-3 shadow-1 rounded-2 align-self-center icon-shape hover-up me-2 mb-2">
                    <img
                      src="/assets/imgs/clients/hotels/dagny.png"
                      width={220}
                      height={60}
                      alt="The Dagny"
                    />
                  </div>
                  <div className="bg-white py-3 px-3 shadow-1 rounded-2 align-self-center icon-shape hover-up me-2 mb-2">
                    <img
                      src="/assets/imgs/clients/hotels/highgate.webp"
                      width={220}
                      height={60}
                      alt="Highgate Hotel"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bouncing-blobs-container rounded-4 fix">
              <div className="bouncing-blobs-glass rounded-4" />
              <div className="bouncing-blobs">
                <div className="bouncing-blob bouncing-blob--green" />
                <div className="bouncing-blob bouncing-blob--primary" />
                <div className="bouncing-blob bouncing-blob--infor bouncing-blob--infor-2" />
              </div>
            </div>
          </div>
        </section>

        {/*Hotel Services */}
        <section className="section-padding">
          <div className="container">
            <div className="text-center">
              <h3
                className="ds-3 my-3"
                data-aos="fade-zoom-in"
                data-aos-delay={300}
              >
               Our Services
              </h3>
              <p data-aos="fade-zoom-in" data-aos-delay={100}>
                Unleash the Power of Wellness with Our Customized Yoga Solutions
              </p>
            </div>
            <div className="row mt-6 position-relative">
              <div className="col-lg-4">
                <div
                  className="p-2 mt-lg-8 rounded-4 shadow-1 bg-white position-relative z-1 hover-up"
                  data-aos="fade-zoom-in"
                  data-aos-delay={100}
                >
                  <div className="card-service bg-white p-6 border rounded-4">
                    <img
                      src="/assets/imgs/service-1/icon-1.svg"
                      alt="infinia"
                    />
                    <h6 className="my-3">Monthly Program</h6>
                    <p className="mb-6">
                      Consistent monthly yoga and mindfulness sessions,
                      customized for your group, fostering balance, growth, and
                      sustained well-being.
                    </p>

                    <Link
                      href="#"
                      className="rounded-pill border icon-shape d-inline-flex gap-3 icon-learn-more"
                    >
                      <svg
                        className="plus"
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_226_5470)">
                          <path
                            className="fill-dark"
                            d="M15.375 7.375H8.625V0.625C8.625 0.279813 8.34519 0 8 0C7.65481 0 7.375 0.279813 7.375 0.625V7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H7.375V15.375C7.375 15.7202 7.65481 16 8 16C8.34519 16 8.625 15.7202 8.625 15.375V8.625H15.375C15.7202 8.625 16 8.34519 16 8C16 7.65481 15.7202 7.375 15.375 7.375Z"
                            fill="#111827"
                          />
                        </g>
                        <defs>
                          <clipPath>
                            <rect width={16} height={16} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <svg
                        className="arrow"
                        xmlns="http://www.w3.org/2000/svg"
                        width={18}
                        height={10}
                        viewBox="0 0 18 10"
                        fill="none"
                      >
                        <path
                          className="fill-dark"
                          d="M13.0633 0.0634766L12.2615 0.86529L15.8294 4.43321H0V5.56716H15.8294L12.2615 9.13505L13.0633 9.93686L18 5.00015L13.0633 0.0634766Z"
                          fill="#111827"
                        />
                      </svg>
                      <span className="fw-bold fs-7 text-900">Learm More</span>
                    </Link>
                  </div>
                </div>
                <div
                  className="p-2 mt-5 rounded-4 shadow-1 bg-white position-relative z-1 hover-up"
                  data-aos="fade-zoom-in"
                  data-aos-delay={200}
                >
                  <div className="card-service bg-white p-6 border rounded-3">
                    <img
                      src="/assets/imgs/service-1/icon-2.svg"
                      alt="infinia"
                    />
                    <h6 className="my-3">On-Demand Special Events</h6>
                    <p className="mb-6">
                      Enhance any occasion with wellness retreats, corporate
                      sessions, and themed yoga workshops that inspire,
                      rejuvenate, and unite communities.
                    </p>
                    <Link
                      href="#"
                      className="rounded-pill border icon-shape d-inline-flex gap-3 icon-learn-more"
                    >
                      <svg
                        className="plus"
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_226_5470)">
                          <path
                            className="fill-dark"
                            d="M15.375 7.375H8.625V0.625C8.625 0.279813 8.34519 0 8 0C7.65481 0 7.375 0.279813 7.375 0.625V7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H7.375V15.375C7.375 15.7202 7.65481 16 8 16C8.34519 16 8.625 15.7202 8.625 15.375V8.625H15.375C15.7202 8.625 16 8.34519 16 8C16 7.65481 15.7202 7.375 15.375 7.375Z"
                            fill="#111827"
                          />
                        </g>
                        <defs>
                          <clipPath>
                            <rect width={16} height={16} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <svg
                        className="arrow"
                        xmlns="http://www.w3.org/2000/svg"
                        width={18}
                        height={10}
                        viewBox="0 0 18 10"
                        fill="none"
                      >
                        <path
                          className="fill-dark"
                          d="M13.0633 0.0634766L12.2615 0.86529L15.8294 4.43321H0V5.56716H15.8294L12.2615 9.13505L13.0633 9.93686L18 5.00015L13.0633 0.0634766Z"
                          fill="#111827"
                        />
                      </svg>
                      <span className="fw-bold fs-7 text-900">Learm More</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="p-2 mt-5 rounded-4 shadow-1 bg-white position-relative z-1 hover-up"
                  data-aos="fade-zoom-in"
                  data-aos-delay={300}
                >
                  <div className="card-service bg-white p-6 border rounded-3">
                    <img
                      src="/assets/imgs/service-1/icon-3.svg"
                      alt="infinia"
                    />
                    <h6 className="my-3">Luxury Wellness Offerings</h6>
                    <p className="mb-6">
                      Exclusive one-on-one yoga training to complement spa and
                      concierge services, delivering a premium, tailored
                      wellness experience for guests.
                    </p>
                    <Link
                      href="#"
                      className="rounded-pill border icon-shape d-inline-flex gap-3 icon-learn-more"
                    >
                      <svg
                        className="plus"
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_226_5470)">
                          <path
                            className="fill-dark"
                            d="M15.375 7.375H8.625V0.625C8.625 0.279813 8.34519 0 8 0C7.65481 0 7.375 0.279813 7.375 0.625V7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H7.375V15.375C7.375 15.7202 7.65481 16 8 16C8.34519 16 8.625 15.7202 8.625 15.375V8.625H15.375C15.7202 8.625 16 8.34519 16 8C16 7.65481 15.7202 7.375 15.375 7.375Z"
                            fill="#111827"
                          />
                        </g>
                        <defs>
                          <clipPath>
                            <rect width={16} height={16} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <svg
                        className="arrow"
                        xmlns="http://www.w3.org/2000/svg"
                        width={18}
                        height={10}
                        viewBox="0 0 18 10"
                        fill="none"
                      >
                        <path
                          className="fill-dark"
                          d="M13.0633 0.0634766L12.2615 0.86529L15.8294 4.43321H0V5.56716H15.8294L12.2615 9.13505L13.0633 9.93686L18 5.00015L13.0633 0.0634766Z"
                          fill="#111827"
                        />
                      </svg>
                      <span className="fw-bold fs-7 text-900">Learm More</span>
                    </Link>
                  </div>
                </div>
                <div
                  className="p-2 mt-5 rounded-4 shadow-1 bg-white position-relative z-1 hover-up"
                  data-aos="fade-zoom-in"
                  data-aos-delay={100}
                >
                  <div className="card-service bg-white p-6 border rounded-3">
                    <img
                      src="/assets/imgs/service-1/icon-4.svg"
                      alt="infinia"
                    />
                    <h6 className="my-3">Corporate Retreat Program</h6>
                    <p className="mb-6">
                      Half- or full-day retreats tailored to boost team
                      building, reduce stress, and promote workplace harmony.
                    </p>

                    <Link
                      href="#"
                      className="rounded-pill border icon-shape d-inline-flex gap-3 icon-learn-more"
                    >
                      <svg
                        className="plus"
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_226_5470)">
                          <path
                            className="fill-dark"
                            d="M15.375 7.375H8.625V0.625C8.625 0.279813 8.34519 0 8 0C7.65481 0 7.375 0.279813 7.375 0.625V7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H7.375V15.375C7.375 15.7202 7.65481 16 8 16C8.34519 16 8.625 15.7202 8.625 15.375V8.625H15.375C15.7202 8.625 16 8.34519 16 8C16 7.65481 15.7202 7.375 15.375 7.375Z"
                            fill="#111827"
                          />
                        </g>
                        <defs>
                          <clipPath>
                            <rect width={16} height={16} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <svg
                        className="arrow"
                        xmlns="http://www.w3.org/2000/svg"
                        width={18}
                        height={10}
                        viewBox="0 0 18 10"
                        fill="none"
                      >
                        <path
                          className="fill-dark"
                          d="M13.0633 0.0634766L12.2615 0.86529L15.8294 4.43321H0V5.56716H15.8294L12.2615 9.13505L13.0633 9.93686L18 5.00015L13.0633 0.0634766Z"
                          fill="#111827"
                        />
                      </svg>
                      <span className="fw-bold fs-7 text-900">Learm More</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="p-2 mt-lg-8 mt-5 rounded-4 shadow-1 bg-white position-relative z-1 hover-up hover-up"
                  data-aos="fade-zoom-in"
                  data-aos-delay={200}
                >
                  <div className="card-service bg-white p-6 border rounded-3">
                    <img
                      src="/assets/imgs/service-1/icon-5.svg"
                      alt="infinia"
                    />
                    <h6 className="my-3">Mind & Body Coaching</h6>
                    <p className="mb-6">
                      Tailored yoga, meditation, and lifestyle coaching to
                      enhance mental clarity, resilience, and well-being for
                      your team.
                    </p>
                    <Link
                      href="#"
                      className="rounded-pill border icon-shape d-inline-flex gap-3 icon-learn-more"
                    >
                      <svg
                        className="plus"
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_226_5470)">
                          <path
                            className="fill-dark"
                            d="M15.375 7.375H8.625V0.625C8.625 0.279813 8.34519 0 8 0C7.65481 0 7.375 0.279813 7.375 0.625V7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H7.375V15.375C7.375 15.7202 7.65481 16 8 16C8.34519 16 8.625 15.7202 8.625 15.375V8.625H15.375C15.7202 8.625 16 8.34519 16 8C16 7.65481 15.7202 7.375 15.375 7.375Z"
                            fill="#111827"
                          />
                        </g>
                        <defs>
                          <clipPath>
                            <rect width={16} height={16} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <svg
                        className="arrow"
                        xmlns="http://www.w3.org/2000/svg"
                        width={18}
                        height={10}
                        viewBox="0 0 18 10"
                        fill="none"
                      >
                        <path
                          className="fill-dark"
                          d="M13.0633 0.0634766L12.2615 0.86529L15.8294 4.43321H0V5.56716H15.8294L12.2615 9.13505L13.0633 9.93686L18 5.00015L13.0633 0.0634766Z"
                          fill="#111827"
                        />
                      </svg>
                      <span className="fw-bold fs-7 text-900">Learm More</span>
                    </Link>
                  </div>
                </div>
                <div
                  className="p-2 mt-5 rounded-4 shadow-1 bg-white position-relative z-1 hover-up"
                  data-aos="fade-zoom-in"
                  data-aos-delay={300}
                >
                  <div className="card-service bg-white p-6 border rounded-3">
                    <img
                      src="/assets/imgs/service-1/icon-6.svg"
                      alt="infinia"
                    />
                    <h6 className="my-3">Virtual Wellness Hub</h6>
                    <p className="mb-6">
                      Enjoy live and on-demand yoga sessions, wellness guides,
                      and community support, available anytime for your
                      organization.
                    </p>
                    <Link
                      href="#"
                      className="rounded-pill border icon-shape d-inline-flex gap-3 icon-learn-more"
                    >
                      <svg
                        className="plus"
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_226_5470)">
                          <path
                            className="fill-dark"
                            d="M15.375 7.375H8.625V0.625C8.625 0.279813 8.34519 0 8 0C7.65481 0 7.375 0.279813 7.375 0.625V7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H7.375V15.375C7.375 15.7202 7.65481 16 8 16C8.34519 16 8.625 15.7202 8.625 15.375V8.625H15.375C15.7202 8.625 16 8.34519 16 8C16 7.65481 15.7202 7.375 15.375 7.375Z"
                            fill="#111827"
                          />
                        </g>
                        <defs>
                          <clipPath>
                            <rect width={16} height={16} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <svg
                        className="arrow"
                        xmlns="http://www.w3.org/2000/svg"
                        width={18}
                        height={10}
                        viewBox="0 0 18 10"
                        fill="none"
                      >
                        <path
                          className="fill-dark"
                          d="M13.0633 0.0634766L12.2615 0.86529L15.8294 4.43321H0V5.56716H15.8294L12.2615 9.13505L13.0633 9.93686L18 5.00015L13.0633 0.0634766Z"
                          fill="#111827"
                        />
                      </svg>
                      <span className="fw-bold fs-7 text-900">Learm More</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="position-absolute top-50 start-50 translate-middle z-0">
                <img src="/assets/imgs/service-1/img-bg.png" alt="infinia" />
              </div>
            </div>
          </div>
        </section>

        {/*Yoga Program Features*/}
        <section>
          <div className="container-fluid position-relative bg-primary-light section-padding">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-4 col-md-6 mb-lg-0 mb-8 pe-5 pe-lg-10 position-relative z-1">
                  <h2 className="text-white mt-3 mb-4 fw-black">
                    Our Yoga Program Features
                  </h2>
                  <p className="text-white">
                    Elevate your hotel or resort with our expertly designed yoga
                    and wellness programs, tailored to enhance guest experiences
                    and satisfaction.
                  </p>
                  <div className="col d-flex align-items-center mt-5 min-w-">
                    <span className="h2 count fw-black text-white min-w-70">
                      <span className="odometer" />
                      <CountUp end={90} enableScrollSpy={true} />
                    </span>
                    <span className="fw-medium text-white fs-4 align-self-start">
                      %
                    </span>
                    <p className="ms-3 text-white">
                      Guest satisfaction <br />
                      with yoga programs.
                    </p>
                  </div>
                  <div className="col d-flex align-items-center mt-5">
                    <span className="h2 count fw-black text-white min-w-70">
                      <span className="odometer" />
                      <CountUp end={80} enableScrollSpy={true} />
                    </span>
                    <span className="fs-4 fw-medium text-white align-self-start">
                      %
                    </span>
                    <p className="ms-3 text-white">
                      Increase in repeat <br />
                      bookings.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-lg-0 mb-8 pe-lg-8">
                  <ul className="list-unstyled ">
                    <li>
                      <div className="d-flex align-items-start mb-6">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={60}
                          height={60}
                          viewBox="0 0 23 24"
                          fill="none"
                        >
                          <path
                            d="M22.5 12C22.5 12.96 21.3206 13.7512 21.0844 14.6362C20.8406 15.5512 21.4575 16.8263 20.9944 17.6269C20.5238 18.4406 19.1081 18.5381 18.4481 19.1981C17.7881 19.8581 17.6906 21.2738 16.8769 21.7444C16.0763 22.2075 14.8012 21.5906 13.8862 21.8344C13.0012 22.0706 12.21 23.25 11.25 23.25C10.29 23.25 9.49875 22.0706 8.61375 21.8344C7.69875 21.5906 6.42375 22.2075 5.62313 21.7444C4.80938 21.2738 4.71187 19.8581 4.05188 19.1981C3.39188 18.5381 1.97625 18.4406 1.50563 17.6269C1.0425 16.8263 1.65938 15.5512 1.41563 14.6362C1.17938 13.7512 0 12.96 0 12C0 11.04 1.17938 10.2487 1.41563 9.36375C1.65938 8.44875 1.0425 7.17375 1.50563 6.37313C1.97625 5.55938 3.39188 5.46187 4.05188 4.80188C4.71187 4.14188 4.80938 2.72625 5.62313 2.25563C6.42375 1.7925 7.69875 2.40938 8.61375 2.16563C9.49875 1.92938 10.29 0.75 11.25 0.75C12.21 0.75 13.0012 1.92938 13.8862 2.16563C14.8012 2.40938 16.0763 1.7925 16.8769 2.25563C17.6906 2.72625 17.7881 4.14188 18.4481 4.80188C19.1081 5.46187 20.5238 5.55938 20.9944 6.37313C21.4575 7.17375 20.8406 8.44875 21.0844 9.36375C21.3206 10.2487 22.5 11.04 22.5 12Z"
                            fill="white"
                          />
                          <path
                            d="M14.5013 8.64754L10.2188 12.93L7.99875 10.7119C7.51688 10.23 6.735 10.23 6.25313 10.7119C5.77125 11.1938 5.77125 11.9757 6.25313 12.4575L9.36751 15.5719C9.83626 16.0407 10.5975 16.0407 11.0663 15.5719L16.245 10.3932C16.7269 9.91129 16.7269 9.12941 16.245 8.64754C15.7631 8.16566 14.9831 8.16566 14.5013 8.64754Z"
                            fill="#FFB703"
                          />
                        </svg>
                        <div className="ms-3 pb-4 border-bottom">
                          <h5 className="text-white mb-2">
                            Certified Yoga Instructors
                          </h5>
                          <p className="text-white mb-0">
                            All instructors are vetted, experienced, and
                            certified to deliver high-quality yoga sessions.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-start mb-6">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={60}
                          height={60}
                          viewBox="0 0 23 24"
                          fill="none"
                        >
                          <path
                            d="M22.5 12C22.5 12.96 21.3206 13.7512 21.0844 14.6362C20.8406 15.5512 21.4575 16.8263 20.9944 17.6269C20.5238 18.4406 19.1081 18.5381 18.4481 19.1981C17.7881 19.8581 17.6906 21.2738 16.8769 21.7444C16.0763 22.2075 14.8012 21.5906 13.8862 21.8344C13.0012 22.0706 12.21 23.25 11.25 23.25C10.29 23.25 9.49875 22.0706 8.61375 21.8344C7.69875 21.5906 6.42375 22.2075 5.62313 21.7444C4.80938 21.2738 4.71187 19.8581 4.05188 19.1981C3.39188 18.5381 1.97625 18.4406 1.50563 17.6269C1.0425 16.8263 1.65938 15.5512 1.41563 14.6362C1.17938 13.7512 0 12.96 0 12C0 11.04 1.17938 10.2487 1.41563 9.36375C1.65938 8.44875 1.0425 7.17375 1.50563 6.37313C1.97625 5.55938 3.39188 5.46187 4.05188 4.80188C4.71187 4.14188 4.80938 2.72625 5.62313 2.25563C6.42375 1.7925 7.69875 2.40938 8.61375 2.16563C9.49875 1.92938 10.29 0.75 11.25 0.75C12.21 0.75 13.0012 1.92938 13.8862 2.16563C14.8012 2.40938 16.0763 1.7925 16.8769 2.25563C17.6906 2.72625 17.7881 4.14188 18.4481 4.80188C19.1081 5.46187 20.5238 5.55938 20.9944 6.37313C21.4575 7.17375 20.8406 8.44875 21.0844 9.36375C21.3206 10.2487 22.5 11.04 22.5 12Z"
                            fill="white"
                          />
                          <path
                            d="M14.5013 8.64754L10.2188 12.93L7.99875 10.7119C7.51688 10.23 6.735 10.23 6.25313 10.7119C5.77125 11.1938 5.77125 11.9757 6.25313 12.4575L9.36751 15.5719C9.83626 16.0407 10.5975 16.0407 11.0663 15.5719L16.245 10.3932C16.7269 9.91129 16.7269 9.12941 16.245 8.64754C15.7631 8.16566 14.9831 8.16566 14.5013 8.64754Z"
                            fill="#FFB703"
                          />
                        </svg>
                        <div className="ms-3 pb-4 border-bottom">
                          <h5 className="text-white mb-2">
                            Tailored Yoga Classes
                          </h5>
                          <p className="text-white mb-0">
                            We offer group sessions, private classes,
                            sunrise/sunset yoga, and specialized retreats based
                            on your hotel's needs.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-start mb-6">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={60}
                          height={60}
                          viewBox="0 0 23 24"
                          fill="none"
                        >
                          <path
                            d="M22.5 12C22.5 12.96 21.3206 13.7512 21.0844 14.6362C20.8406 15.5512 21.4575 16.8263 20.9944 17.6269C20.5238 18.4406 19.1081 18.5381 18.4481 19.1981C17.7881 19.8581 17.6906 21.2738 16.8769 21.7444C16.0763 22.2075 14.8012 21.5906 13.8862 21.8344C13.0012 22.0706 12.21 23.25 11.25 23.25C10.29 23.25 9.49875 22.0706 8.61375 21.8344C7.69875 21.5906 6.42375 22.2075 5.62313 21.7444C4.80938 21.2738 4.71187 19.8581 4.05188 19.1981C3.39188 18.5381 1.97625 18.4406 1.50563 17.6269C1.0425 16.8263 1.65938 15.5512 1.41563 14.6362C1.17938 13.7512 0 12.96 0 12C0 11.04 1.17938 10.2487 1.41563 9.36375C1.65938 8.44875 1.0425 7.17375 1.50563 6.37313C1.97625 5.55938 3.39188 5.46187 4.05188 4.80188C4.71187 4.14188 4.80938 2.72625 5.62313 2.25563C6.42375 1.7925 7.69875 2.40938 8.61375 2.16563C9.49875 1.92938 10.29 0.75 11.25 0.75C12.21 0.75 13.0012 1.92938 13.8862 2.16563C14.8012 2.40938 16.0763 1.7925 16.8769 2.25563C17.6906 2.72625 17.7881 4.14188 18.4481 4.80188C19.1081 5.46187 20.5238 5.55938 20.9944 6.37313C21.4575 7.17375 20.8406 8.44875 21.0844 9.36375C21.3206 10.2487 22.5 11.04 22.5 12Z"
                            fill="white"
                          />
                          <path
                            d="M14.5013 8.64754L10.2188 12.93L7.99875 10.7119C7.51688 10.23 6.735 10.23 6.25313 10.7119C5.77125 11.1938 5.77125 11.9757 6.25313 12.4575L9.36751 15.5719C9.83626 16.0407 10.5975 16.0407 11.0663 15.5719L16.245 10.3932C16.7269 9.91129 16.7269 9.12941 16.245 8.64754C15.7631 8.16566 14.9831 8.16566 14.5013 8.64754Z"
                            fill="#FFB703"
                          />
                        </svg>
                        <div className="ms-3 pb-4 border-bottom">
                          <h5 className="text-white mb-2">
                            Wellness Event Integration
                          </h5>
                          <p className="text-white mb-0">
                            Host yoga retreats, detox programs, and corporate
                            wellness events to attract new guests.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-4 mb-lg-0 mb-8 pe-lg-8">
                  <ul className="list-unstyled ">
                    <li>
                      <Link href="#" className="d-flex align-items-start mb-6">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={60}
                          height={60}
                          viewBox="0 0 23 24"
                          fill="none"
                        >
                          <path
                            d="M22.5 12C22.5 12.96 21.3206 13.7512 21.0844 14.6362C20.8406 15.5512 21.4575 16.8263 20.9944 17.6269C20.5238 18.4406 19.1081 18.5381 18.4481 19.1981C17.7881 19.8581 17.6906 21.2738 16.8769 21.7444C16.0763 22.2075 14.8012 21.5906 13.8862 21.8344C13.0012 22.0706 12.21 23.25 11.25 23.25C10.29 23.25 9.49875 22.0706 8.61375 21.8344C7.69875 21.5906 6.42375 22.2075 5.62313 21.7444C4.80938 21.2738 4.71187 19.8581 4.05188 19.1981C3.39188 18.5381 1.97625 18.4406 1.50563 17.6269C1.0425 16.8263 1.65938 15.5512 1.41563 14.6362C1.17938 13.7512 0 12.96 0 12C0 11.04 1.17938 10.2487 1.41563 9.36375C1.65938 8.44875 1.0425 7.17375 1.50563 6.37313C1.97625 5.55938 3.39188 5.46187 4.05188 4.80188C4.71187 4.14188 4.80938 2.72625 5.62313 2.25563C6.42375 1.7925 7.69875 2.40938 8.61375 2.16563C9.49875 1.92938 10.29 0.75 11.25 0.75C12.21 0.75 13.0012 1.92938 13.8862 2.16563C14.8012 2.40938 16.0763 1.7925 16.8769 2.25563C17.6906 2.72625 17.7881 4.14188 18.4481 4.80188C19.1081 5.46187 20.5238 5.55938 20.9944 6.37313C21.4575 7.17375 20.8406 8.44875 21.0844 9.36375C21.3206 10.2487 22.5 11.04 22.5 12Z"
                            fill="white"
                          />
                          <path
                            d="M14.5013 8.64754L10.2188 12.93L7.99875 10.7119C7.51688 10.23 6.735 10.23 6.25313 10.7119C5.77125 11.1938 5.77125 11.9757 6.25313 12.4575L9.36751 15.5719C9.83626 16.0407 10.5975 16.0407 11.0663 15.5719L16.245 10.3932C16.7269 9.91129 16.7269 9.12941 16.245 8.64754C15.7631 8.16566 14.9831 8.16566 14.5013 8.64754Z"
                            fill="#FFB703"
                          />
                        </svg>
                        <div className="ms-3 pb-4 border-bottom">
                          <h5 className="text-white mb-2">
                            Flexible & Scalable Solutions
                          </h5>
                          <p className="text-white mb-0">
                            Adaptable to any hotel or resort’s wellness program,
                            space, and schedule.
                          </p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="d-flex align-items-start mb-6">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={60}
                          height={60}
                          viewBox="0 0 23 24"
                          fill="none"
                        >
                          <path
                            d="M22.5 12C22.5 12.96 21.3206 13.7512 21.0844 14.6362C20.8406 15.5512 21.4575 16.8263 20.9944 17.6269C20.5238 18.4406 19.1081 18.5381 18.4481 19.1981C17.7881 19.8581 17.6906 21.2738 16.8769 21.7444C16.0763 22.2075 14.8012 21.5906 13.8862 21.8344C13.0012 22.0706 12.21 23.25 11.25 23.25C10.29 23.25 9.49875 22.0706 8.61375 21.8344C7.69875 21.5906 6.42375 22.2075 5.62313 21.7444C4.80938 21.2738 4.71187 19.8581 4.05188 19.1981C3.39188 18.5381 1.97625 18.4406 1.50563 17.6269C1.0425 16.8263 1.65938 15.5512 1.41563 14.6362C1.17938 13.7512 0 12.96 0 12C0 11.04 1.17938 10.2487 1.41563 9.36375C1.65938 8.44875 1.0425 7.17375 1.50563 6.37313C1.97625 5.55938 3.39188 5.46187 4.05188 4.80188C4.71187 4.14188 4.80938 2.72625 5.62313 2.25563C6.42375 1.7925 7.69875 2.40938 8.61375 2.16563C9.49875 1.92938 10.29 0.75 11.25 0.75C12.21 0.75 13.0012 1.92938 13.8862 2.16563C14.8012 2.40938 16.0763 1.7925 16.8769 2.25563C17.6906 2.72625 17.7881 4.14188 18.4481 4.80188C19.1081 5.46187 20.5238 5.55938 20.9944 6.37313C21.4575 7.17375 20.8406 8.44875 21.0844 9.36375C21.3206 10.2487 22.5 11.04 22.5 12Z"
                            fill="white"
                          />
                          <path
                            d="M14.5013 8.64754L10.2188 12.93L7.99875 10.7119C7.51688 10.23 6.735 10.23 6.25313 10.7119C5.77125 11.1938 5.77125 11.9757 6.25313 12.4575L9.36751 15.5719C9.83626 16.0407 10.5975 16.0407 11.0663 15.5719L16.245 10.3932C16.7269 9.91129 16.7269 9.12941 16.245 8.64754C15.7631 8.16566 14.9831 8.16566 14.5013 8.64754Z"
                            fill="#FFB703"
                          />
                        </svg>
                        <div className="ms-3 pb-4 border-bottom">
                          <h5 className="text-white mb-2">
                            Marketing & Promotion Support
                          </h5>
                          <p className="text-white mb-0">
                            Leverage our expertise to showcase your yoga
                            offerings on your website, social media, and booking
                            platforms.
                          </p>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="position-absolute bottom-0 start-0 bg-rotate z-0">
              <img
                className="rotate-center"
                src="/assets/imgs/features-8/bg-img-favicon.png"
                alt="my-yoga-network"
              />
            </div>
          </div>
        </section>

        {/* Teachers */}
        <section className="section-team-1 section-padding position-relative overflow-hidden">
          <div className="container">
            <div className="row position-relative z-1">
              <div className="text-center">
                <h3
                  className="ds-3 my-3"
                  data-aos="fade-zoom-in"
                  data-aos-delay={200}
                >
                  Meet Our Teachers
                </h3>
                <p
                  className="fs-5"
                  data-aos="fade-zoom-in"
                  data-aos-delay={300}
                >
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
                  <img className="img-fluid w-100" src="/assets/imgs/team-1/teacher-1.jpg" alt="infinia" />
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
                      alt="infinia"
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
                      alt="infinia"
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
                      alt="infinia"
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
            <img src="/assets/imgs/team-1/bg-line.png" alt="infinia" />
          </div>
          <div className="rotate-center ellipse-rotate-success position-absolute z-0" />
          <div className="rotate-center-rev ellipse-rotate-primary position-absolute z-0" />
        </section>
      </Layout>
    </>
  );
}
