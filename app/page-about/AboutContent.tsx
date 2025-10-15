"use client";

import Link from "next/link";
import CountUp from "react-countup";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Marquee from "react-fast-marquee";

export default function PageAbout() {
  const swiperOptions = {
    slidesPerView: 3,
    spaceBetween: 20,
    slidesPerGroup: 1,
    centeredSlides: false,
    loop: true,
    autoplay: {
      delay: 4000,
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
  };

  return (
    <>
      <section className="section-page-header py-10 fix position-relative">
        <div className="container position-relative z-1">
          <div className="text-start">
            <h3>About Us</h3>
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
              <p className="text-primary mb-0">About Us</p>
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
      {/*Hero 3 */}
      <section className="section-hero-3 position-relative fix section-padding">
        <div className="container">
          <div className="row align-items-center position-relative">
            <div className="col-lg-7 position-relative z-1 mb-lg-0 pb-10 mb-">
              <div className="text-start mb-lg-0 mb-5">
                <div className="border-linear-1 rounded-pill d-inline-block mb-3"></div>
                <div className="d-flex align-items-center">
                  <h1 className="ds-1 my-3 me-4 lh-1">Wellness</h1>
                </div>
                <h1 className="ds-1 lh-1 m-0">
                  Elevated with Customized Yoga.
                </h1>
                <p className="fs-5 text-900 my-6">
                  <span>
                    Explore tailored yoga programs and <br /> wellness benefits
                    for your organization
                  </span>
                </p>
                <Link href="#" className="btn btn-gradient">
                  Get Free Quote
                  <svg
                    className="ms-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      className="stroke-white"
                      d="M17.25 15.25V6.75H8.75"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      className="stroke-white"
                      d="M17 7L6.75 17.25"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
                <div className="mt-6 pt-4 max-w-300px">
                  <p className="text-uppercase mb-2">Trusted by the best</p>
                  <div className="carouselTicker carouselTicker-right">
                    <ul className="carouselTicker__list">
                      <Marquee direction="right">
                        <li className="carouselTicker__item mx-2">
                          <img
                            className="filter-invert rounded-4"
                            src="/assets/imgs/hero-3/logo15.png"
                            alt="infinia"
                          />
                        </li>
                        <li className="carouselTicker__item mx-2">
                          <img
                            className="rounded-4"
                            src="/assets/imgs/hero-3/logo7.png"
                            alt="infinia"
                          />
                        </li>
                        <li className="carouselTicker__item mx-2">
                          <img
                            className="rounded-4"
                            src="/assets/imgs/hero-3/logo14.png"
                            alt="infinia"
                          />
                        </li>
                      </Marquee>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 position-xl-absolute mb-lg-10 top-50 end-0 translate-middle-lg-y z-0">
              <div className="row">
                <div className="col-6 align-self-end">
                  <div className="border-5 border-white border rounded-4  mb-4 d-block d-xl-none">
                    <img
                      className="rounded-4"
                      src="/assets/imgs/hero-3/img-4.png"
                      alt="infinia"
                    />
                  </div>
                  <div className="border-5 border-white border rounded-4">
                    <img
                      className="rounded-4"
                      src="/assets/imgs/hero-3/img-3.png"
                      alt="infinia"
                    />
                  </div>
                </div>
                <div className="col-6 align-self-end">
                  <div className="border-5 border-white border rounded-4 mb-4">
                    <img
                      className="rounded-4"
                      src="/assets/imgs/hero-3/img-1.png"
                      alt="infinia"
                    />
                  </div>
                  <div className="border-5 border-white border rounded-4">
                    <img
                      className="rounded-4"
                      src="/assets/imgs/hero-3/img-2.png"
                      alt="infinia"
                    />
                  </div>
                </div>
              </div>
              <div className="position-absolute top-50 start-50 translate-middle pb-10 pe-10">
                <img
                  className="rotateme"
                  src="/assets/imgs/hero-3/star-rotate.png"
                  alt="infinia"
                />
              </div>
              <div className="position-absolute top-50 start-50 translate-middle">
                <div className="ellipse-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*cta 11 */}
      <section className="section-cta-11 position-relative section-padding fix">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="d-flex justify-content-md-between justify-content-center position-relative">
                <div className="d-flex flex-column align-items-end d-none d-md-flex">
                  <div className="zoom-img rounded-3">
                    <img
                      className="rounded-3"
                      src="/assets/imgs/cta-11/img-1.png"
                      alt=""
                    />
                  </div>
                  <div className="zoom-img rounded-3 mt-2">
                    <img
                      className="rounded-3"
                      src="/assets/imgs/cta-11/img-2.png"
                      alt=""
                    />
                  </div>
                </div>
                <div>
                  <div className="d-flex justify-content-between mt-5">
                    <div className="alltuchtopdown tag-year backdrop-filter bg-success rounded-4 px-5 py-4 text-center z-1">
                      <h5 className="count fw-bold mb-2 text-900 text-nowrap">
                        <span className="odometer" />
                        <CountUp enableScrollSpy={true} end={25} />
                        M+
                      </h5>
                      <p className="text-600-keep text-nowrap mb-0">
                        Wellness Sessions <br />
                        Delivered
                      </p>
                    </div>
                    <div className="alltuchtopdown tag-year backdrop-filter bg-primary rounded-4 px-5 py-4 text-center z-1">
                      <h5 className="count fw-bold mb-2 text-white text-nowrap">
                        <span className="odometer" />
                        <CountUp enableScrollSpy={true} end={12} />
                        k+
                      </h5>
                      <p className="text-white text-nowrap mb-0">
                        Partners <br />
                        Served
                      </p>
                    </div>
                  </div>
                  <div className="zoom-img rounded-3">
                    <img
                      className="rounded-3 mw-lg-310"
                      src="/assets/imgs/cta-11/img-2.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="position-absolute bottom-0 start-0 flickering ms-6 mb-4 z-0 d-none d-md-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={86}
                    height={86}
                    viewBox="0 0 86 86"
                    fill="none"
                  >
                    <path
                      d="M0.235352 64.6171C23.6511 58.8609 27.3738 62.5843 21.6183 86C31.9666 62.5843 45.1375 62.5843 55.4859 86C49.7296 62.5843 53.4531 58.8615 76.8688 64.6171C53.4531 54.2688 53.4531 41.0978 76.8688 30.7495C53.4531 36.5057 49.7303 32.7823 55.4859 9.36658C45.1375 32.7823 31.9666 32.7823 21.6183 9.36658C27.3745 32.7823 23.6511 36.5051 0.235352 30.7495C23.6511 41.0978 23.6511 54.2688 0.235352 64.6171Z"
                      fill="#ffb703"
                    />
                    <path
                      d="M85.7917 4.74567C80.5949 6.02293 79.7687 5.19679 81.046 0C78.7493 5.19679 75.8266 5.19679 73.5298 0C74.8071 5.19679 73.981 6.02293 68.7842 4.74567C73.981 7.0424 73.981 9.96508 68.7842 12.2618C73.981 10.9846 74.8071 11.8107 73.5298 17.0075C75.8266 11.8107 78.7493 11.8107 81.046 17.0075C79.7687 11.8107 80.5949 10.9846 85.7917 12.2618C80.5949 9.96508 80.5949 7.0424 85.7917 4.74567Z"
                      fill="#ffb703"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="col-lg-6 ps-lg-8 mt-lg-0 mt-5">
              <div
                className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2"
                data-aos="zoom-in"
                data-aos-delay={100}
              >
                <img src="/assets/imgs/features-1/dots.png" alt="infinia" />
                <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
                  Our Mission
                </span>
              </div>
              <h5 className="ds-5 my-3">
                Empowering Wellness Through Customized Yoga
              </h5>
              <p className="fs-5 text-500 mb-8">
                We connect certified yoga instructors with hotels, corporates,
                schools, and healthcare facilities to deliver premium, tailored
                wellness programs that enhance relaxation, productivity, and
                overall well-being in every space.
              </p>
              <div className="d-flex flex-column flex-md-row">
                <div className="evaluate-1 me-2">
                  <div className="d-flex align-items-center">
                    <img
                      className="rounded-circle"
                      src="/assets/imgs/cta-11/avatar-1.png"
                      alt=""
                    />
                    <div className="d-flex flex-column ps-3">
                      <div className="d-flex">
                        <img
                          src="/assets/imgs/hero-4/star-yellow.svg"
                          alt="infinia"
                        />
                        <img
                          src="/assets/imgs/hero-4/star-yellow.svg"
                          alt="infinia"
                        />
                        <img
                          src="/assets/imgs/hero-4/star-yellow.svg"
                          alt="infinia"
                        />
                        <img
                          src="/assets/imgs/hero-4/star-yellow.svg"
                          alt="infinia"
                        />
                        <img
                          src="/assets/imgs/hero-4/star-yellow.svg"
                          alt="infinia"
                        />
                      </div>
                      <h6 className="mt-2 mb-0 fs-6">John Smith</h6>
                    </div>
                  </div>
                  <p className="text-500 mt-3">
                    “I highly recommend My Yoga Network for enhancing wellness
                    at our facility. The certified instructors are professional
                    and supportive, delivering customized sessions that boost
                    relaxation and productivity—truly exceptional!”
                  </p>
                </div>
                <div className="evaluate-2 ms-2 mt-md-0 mt-5">
                  <div className="d-flex align-items-center">
                    <img
                      className="rounded-circle"
                      src="/assets/imgs/cta-11/avatar-2.png"
                      alt=""
                    />
                    <div className="d-flex flex-column ps-3">
                      <div className="d-flex">
                        <img
                          src="/assets/imgs/hero-4/star-yellow.svg"
                          alt="infinia"
                        />
                        <img
                          src="/assets/imgs/hero-4/star-yellow.svg"
                          alt="infinia"
                        />
                        <img
                          src="/assets/imgs/hero-4/star-yellow.svg"
                          alt="infinia"
                        />
                        <img
                          src="/assets/imgs/hero-4/star-yellow.svg"
                          alt="infinia"
                        />
                        <img
                          src="/assets/imgs/hero-4/star-yellow.svg"
                          alt="infinia"
                        />
                      </div>
                      <h6 className="mt-2 mb-0 fs-6">Azumi Rose</h6>
                    </div>
                  </div>
                  <p className="text-500 mt-3">
                    “I was unsure about yoga, but My Yoga Network transformed my
                    approach to wellness. The tailored sessions are challenging
                    yet rewarding, with supportive instructors—truly a
                    life-changing experience!”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Team 2*/}
      <section className="section-team-2 section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="text-start mb-lg-0 mb-lg-5 mb-10">
                <div
                  className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2"
                  data-aos="zoom-in"
                  data-aos-delay={100}
                >
                  <img src="/assets/imgs/features-1/dots.png" alt="infinia" />
                  <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
                    OUR TEAM MEMBERS
                  </span>
                </div>
                <h3 className="ds-3 my-3">Meet Our Team</h3>
                <p className="fs-5 mb-0">
                  Meet the talented and passionate team members who drive our{" "}
                  <br />
                  company forward every day.
                </p>
                <div className="d-flex align-items-center mt-8">
                  <img src="/assets/imgs/team-2/contact.svg" alt="infinia" />
                  <div className="ms-3">
                    <p className="text-uppercase fs-7">Contact Us</p>
                    <h5>+1 (888)-960-9240</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div
                  className="col-md-6 mb-lg-4 mb-7 text-center"
                  data-aos="fade-zoom-in"
                  data-aos-delay={100}
                >
                  <div className="position-relative d-inline-block z-1">
                    <div className="zoom-img rounded-3">
                      <img
                        className="img-fluid w-100"
                        src="/assets/imgs/team-2/ram-bhakt.jpg"
                        alt="infinia"
                      />
                    </div>
                    <Link
                      href="#"
                      className="card-team rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-3 m-3 hover-up"
                    >
                      <h6>Ram Bhakt</h6>
                      <div className="d-flex">
                        <span className="fs-6 text-600 me-auto">
                          Founder & CEO
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={14}
                          viewBox="0 0 24 14"
                          fill="#ebd85eff"
                        >
                          <path
                            className="fill-primary"
                            d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    </Link>
                  </div>
                </div>
                <div
                  className="col-md-6 mb-lg-4 mb-7 text-center"
                  data-aos="fade-zoom-in"
                  data-aos-delay={300}
                >
                  <div className="position-relative d-inline-block z-1">
                    <div className="zoom-img rounded-3">
                      <img
                        className="img-fluid w-100"
                        src="/assets/imgs/team-2/jaime-lewis.jpg"
                        alt="infinia"
                      />
                    </div>
                    <Link
                      href="#"
                      className="card-team rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-3 m-3 hover-up"
                    >
                      <h6>Jaime K. Lewis, MD, DipABLM</h6>
                      <div className="d-flex">
                        <span className="fs-6 text-600 me-auto">
                          Advisory Board
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={14}
                          viewBox="0 0 24 14"
                          fill="#ebd85eff"
                        >
                          <path
                            className="fill-primary"
                            d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-3 col-md-6 mb-lg-4 mb-7 text-center"
              data-aos="fade-zoom-in"
              data-aos-delay={0}
            >
              <div className="position-relative d-inline-block z-1">
                <div className="zoom-img rounded-3">
                  <img
                    className="img-fluid w-100"
                    src="/assets/imgs/team-2/anita-schill.jpg"
                    alt="infinia"
                  />
                </div>
                <Link
                  href="#"
                  className="card-team rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-3 m-3 hover-up"
                >
                  <h6>Anita Schill, PhD, MPH</h6>
                  <div className="d-flex">
                    <span className="fs-6 text-600 me-auto">
                      Advisory Board
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={14}
                      viewBox="0 0 24 14"
                      fill="#ebd85eff"
                    >
                      <path
                        className="fill-primary"
                        d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 mb-lg-4 mb-7 text-center"
              data-aos="fade-zoom-in"
              data-aos-delay={100}
            >
              <div className="position-relative d-inline-block z-1">
                <div className="zoom-img rounded-3">
                  <img
                    className="img-fluid w-100"
                    src="/assets/imgs/team-2/michelle-carty.jpg"
                    alt="infinia"
                  />
                </div>
                <Link
                  href="#"
                  className="card-team rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-3 m-3 hover-up"
                >
                  <h6>Adhana McCarthy, PA-C</h6>
                  <div className="d-flex">
                    <span className="fs-6 text-600 me-auto">
                      Advisory Board
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={14}
                      viewBox="0 0 24 14"
                      fill="#ebd85eff"
                    >
                      <path
                        className="fill-primary"
                        d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </Link>
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
                    src="/assets/imgs/team-2/claudia-cardin-kleffner.jpg"
                    alt="infinia"
                  />
                </div>
                <Link
                  href="#"
                  className="card-team rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-3 m-3 hover-up"
                >
                  <h6>Claudia Cardin-Kleffner, OT, CYT</h6>
                  <div className="d-flex">
                    <span className="fs-6 text-600 me-auto">
                      Advisory Board
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={14}
                      viewBox="0 0 24 14"
                      fill="#ebd85eff"
                    >
                      <path
                        className="fill-primary"
                        d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Static 2*/}
      <section className="section-static-1 position-relative fix z-0 py-8">
        <div className="container">
          <div className="inner">
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-auto col-md-12 text-center text-lg-start mb-5 mb-lg-0">
                <h4 className="mb-0">
                  See why we are <br /> trusted the world over
                </h4>
              </div>
              <div className="col-lg-auto col-md-6">
                <div className="counter-item-cover counter-item">
                  <div className="content text-center mx-auto">
                    <span className="h1 count fw-black text-primary my-0">
                      <span className="odometer" />
                      <CountUp enableScrollSpy={true} end={469} />
                      <span>k</span>
                    </span>
                    <p>Wellness Sessions</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-auto col-md-6">
                <div className="counter-item-cover counter-item">
                  <div className="content text-center mx-auto">
                    <span className="h1 count fw-black text-primary my-0">
                      +<span className="odometer" />
                      <CountUp enableScrollSpy={true} end={92} />
                    </span>
                    <p>Partners Served</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-auto col-md-6">
                <div className="counter-item-cover counter-item">
                  <div className="content text-center mx-auto">
                    <span className="h1 count fw-black text-primary my-0">
                      +<span className="odometer" />
                      <CountUp enableScrollSpy={true} end={756} />
                    </span>
                    <p>Certified Instructors</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-auto col-md-6">
                <div className="counter-item-cover counter-item">
                  <div className="content text-center mx-auto">
                    <span className="h1 count fw-black text-primary my-0">
                      +<span className="odometer" />
                      <CountUp enableScrollSpy={true} end={25} />
                      <span>k</span>
                    </span>
                    <p>Community Members</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bouncing-blobs-container">
          <div className="bouncing-blobs-glass fix" />
          <div className="bouncing-blobs">
            <div className="bouncing-blob bouncing-blob--green" />
            <div className="bouncing-blob bouncing-blob--primary" />
            <div className="bouncing-blob bouncing-blob--infor bouncing-blob--infor-2" />
          </div>
        </div>
      </section>

      {/*Testimonial 3*/}
      <section className="section-testimonial-3 position-relative section-padding fix">
        <div className="container position-relative z-1">
          <div className="row pb-9">
            <div className="col-lg-7 mx-lg-auto">
              <div className="text-center mb-lg-0 mb-5">
                <div className="d-flex align-items-center position-relative z-2 justify-content-center bg-primary-soft d-inline-flex rounded-pill border border-2 border-white px-3 py-1">
                  <img src="/assets/imgs/features-1/dots.png" alt="infinia" />
                  <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
                    Testimonials
                  </span>
                </div>
                <h5 className="ds-5 my-3 fw-regular">
                  What <span className="fw-bold">People Say</span> About <br />
                  <span className="fw-bold">My Yoga Network</span>
                </h5>
                <p className="fs-5 mb-0 text-900">
                  Discover transformative feedback on our tailored yoga programs
                  and exclusive
                  <br className="d-none d-md-block" />
                  wellness benefits for your organization. 🔥
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <Swiper
              {...swiperOptions}
              className="swiper slider-1 pt-2 pb-3"
              modules={[Keyboard, Autoplay, Pagination, Navigation]}
            >
              <div className="swiper-wrapper">
                {/* prettier-ignore */}
                <SwiperSlide className="swiper-slide">
                  <div className="bg-neutral-100 card-testimonial-3 p-5 rounded-3 position-relative">
                    <div className="d-flex align-items-center mb-5">
                      <img className="avatar-lg" src="/assets/imgs/testimonial-1/avatar-1.png" alt="infinia" />
                      <div className="d-flex flex-column">
                        <h6 className="ms-3 fs-6 mb-0">John Anderson</h6>
                        <div className="flag ms-3">
                          <img src="/assets/imgs/testimonial-1/flag-1.png" alt="infinia" />
                          <span className="fs-8">Hotel Manager, Serenity Resorts</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-900 border-bottom pb-4 mb-4"> The team at <span className="fw-bold">My Yoga Network</span> has enhanced our wellness initiatives, linking us with certified instructors and customized programs. Their expertise and support have boosted our mindfulness and well-being, enabling a healthier, balanced lifestyle. Thank you.</p>
                    <div className="d-flex">
                      <img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
                      <img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
                      <img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
                      <img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
                      <img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
                      <span className="fs-8 text-600 ms-2">(For services and support)</span>
                    </div>
                    <div className="position-absolute top-0 end-0 m-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width={52} height={52} viewBox="0 0 52 52" fill="none">
                        <g clipPath="url(#clip0_551_13914)">
                          <path d="M0 29.7144H11.1428L3.71422 44.5715H14.8571L22.2857 29.7144V7.42871H0V29.7144Z" fill="#D1D5DB" />
                          <path d="M29.7148 7.42871V29.7144H40.8577L33.4291 44.5715H44.5719L52.0005 29.7144V7.42871H29.7148Z" fill="#D1D5DB" />
                        </g>
                        <defs>
                          <clipPath>
                            <rect width={52} height={52} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="bg-neutral-100 card-testimonial-3 p-5 rounded-3 position-relative">
                    <div className="d-flex align-items-center mb-5">
                      <img
                        className="avatar-lg"
                        src="/assets/imgs/testimonial-1/avatar-3.png"
                        alt="infinia"
                      />
                      <div className="d-flex flex-column">
                        <h6 className="ms-3 fs-6 mb-0">Sarah Thompson</h6>
                        <div className="flag ms-3">
                          <img
                            src="/assets/imgs/testimonial-1/flag-2.png"
                            alt="infinia"
                          />
                          <span className="fs-8">HR Manager, Horizon Corp</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-900 border-bottom pb-4 mb-4">
                      The dedication and expertise of{" "}
                      <span className="fw-bold">My Yoga Network</span> have
                      elevated our wellness efforts. Their certified
                      instructors, tailored programs, and supportive approach
                      have strengthened our mindfulness and holistic well-being.
                    </p>
                    <div className="d-flex">
                      <img
                        src="/assets/imgs/hero-4/star-yellow.svg"
                        alt="infinia"
                      />
                      <img
                        src="/assets/imgs/hero-4/star-yellow.svg"
                        alt="infinia"
                      />
                      <img
                        src="/assets/imgs/hero-4/star-yellow.svg"
                        alt="infinia"
                      />
                      <img
                        src="/assets/imgs/hero-4/star-yellow.svg"
                        alt="infinia"
                      />
                      <img
                        src="/assets/imgs/hero-4/star-yellow.svg"
                        alt="infinia"
                      />
                      <span className="fs-8 text-600 ms-2">
                        (For services and support)
                      </span>
                    </div>
                    <div className="position-absolute top-0 end-0 m-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={52}
                        height={52}
                        viewBox="0 0 52 52"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_551_13914)">
                          <path
                            d="M0 29.7144H11.1428L3.71422 44.5715H14.8571L22.2857 29.7144V7.42871H0V29.7144Z"
                            fill="#D1D5DB"
                          />
                          <path
                            d="M29.7148 7.42871V29.7144H40.8577L33.4291 44.5715H44.5719L52.0005 29.7144V7.42871H29.7148Z"
                            fill="#D1D5DB"
                          />
                        </g>
                        <defs>
                          <clipPath>
                            <rect width={52} height={52} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="bg-neutral-100 card-testimonial-3 p-5 rounded-3 position-relative">
                    <div className="d-flex align-items-center mb-5">
                      <img
                        className="avatar-lg"
                        src="/assets/imgs/testimonial-1/avatar-4.png"
                        alt="infinia"
                      />
                      <div className="d-flex flex-column">
                        <h6 className="ms-3 fs-6 mb-0">Emily Adams</h6>
                        <div className="flag ms-3">
                          <img
                            src="/assets/imgs/testimonial-1/flag-3.png"
                            alt="infinia"
                          />
                          <span className="fs-8">
                            Principal, Harmony School
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-900 border-bottom pb-4 mb-4">
                      The dedication of{" "}
                      <span className="fw-bold">My Yoga Network</span> has
                      transformed our wellness initiatives. Their certified
                      instructors and customized programs have greatly enhanced
                      our mindfulness and holistic well-being.
                    </p>
                    <div className="d-flex">
                      <img
                        src="/assets/imgs/hero-4/star-yellow.svg"
                        alt="infinia"
                      />
                      <img
                        src="/assets/imgs/hero-4/star-yellow.svg"
                        alt="infinia"
                      />
                      <img
                        src="/assets/imgs/hero-4/star-yellow.svg"
                        alt="infinia"
                      />
                      <img
                        src="/assets/imgs/hero-4/star-yellow.svg"
                        alt="infinia"
                      />
                      <img
                        src="/assets/imgs/hero-4/star-yellow.svg"
                        alt="infinia"
                      />
                      <span className="fs-8 text-600 ms-2">
                        (For services and support)
                      </span>
                    </div>
                    <div className="position-absolute top-0 end-0 m-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={52}
                        height={52}
                        viewBox="0 0 52 52"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_551_13914)">
                          <path
                            d="M0 29.7144H11.1428L3.71422 44.5715H14.8571L22.2857 29.7144V7.42871H0V29.7144Z"
                            fill="#D1D5DB"
                          />
                          <path
                            d="M29.7148 7.42871V29.7144H40.8577L33.4291 44.5715H44.5719L52.0005 29.7144V7.42871H29.7148Z"
                            fill="#D1D5DB"
                          />
                        </g>
                        <defs>
                          <clipPath>
                            <rect width={52} height={52} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="bg-neutral-100 card-testimonial-3 p-5 rounded-3 position-relative">
                    <div className="d-flex align-items-center mb-5">
                      <img
                        className="avatar-lg"
                        src="/assets/imgs/testimonial-1/avatar-2.png"
                        alt="infinia"
                      />
                      <div className="d-flex flex-column">
                        <h6 className="ms-3 fs-6 mb-0">Michael Chen</h6>
                        <div className="flag ms-3">
                          <img
                            src="/assets/imgs/testimonial-1/flag-4.png"
                            alt="infinia"
                          />
                          <span className="fs-8">
                            Healthcare Director, Wellness Clinic
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-900 border-bottom pb-4 mb-4">
                      The dedication of our{" "}
                      <span className="fw-bold">
                        My Yoga Network instructors
                      </span>{" "}
                      has transformed our wellness efforts. Their tailored
                      programs and supportive guidance have greatly enhanced our
                      mindfulness and holistic well-being.
                    </p>
                    <div className="d-flex">
                      <img
                        src="/assets/imgs/hero-4/star-yellow.svg"
                        alt="infinia"
                      />
                      <img
                        src="/assets/imgs/hero-4/star-yellow.svg"
                        alt="infinia"
                      />
                      <img
                        src="/assets/imgs/hero-4/star-yellow.svg"
                        alt="infinia"
                      />
                      <img
                        src="/assets/imgs/hero-4/star-yellow.svg"
                        alt="infinia"
                      />
                      <img
                        src="/assets/imgs/hero-4/star-yellow.svg"
                        alt="infinia"
                      />
                      <span className="fs-8 text-600 ms-2">
                        (For services and support)
                      </span>
                    </div>
                    <div className="position-absolute top-0 end-0 m-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={52}
                        height={52}
                        viewBox="0 0 52 52"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_551_13914)">
                          <path
                            d="M0 29.7144H11.1428L3.71422 44.5715H14.8571L22.2857 29.7144V7.42871H0V29.7144Z"
                            fill="#D1D5DB"
                          />
                          <path
                            d="M29.7148 7.42871V29.7144H40.8577L33.4291 44.5715H44.5719L52.0005 29.7144V7.42871H29.7148Z"
                            fill="#D1D5DB"
                          />
                        </g>
                        <defs>
                          <clipPath>
                            <rect width={52} height={52} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="bg-neutral-100 card-testimonial-3 p-5 rounded-3 position-relative">
                    <div className="d-flex align-items-center mb-5">
                      <img
                        className="avatar-lg"
                        src="/assets/imgs/testimonial-1/avatar-1.png"
                        alt="infinia"
                      />
                      <div className="d-flex flex-column">
                        <h6 className="ms-3 fs-6 mb-0">Funnel optimization</h6>
                        <div className="flag ms-3">
                          <img
                            src="/assets/imgs/testimonial-1/flag-1.png"
                            alt="infinia"
                          />
                          <span className="fs-8">
                            CEO of Tech Innovators Inc
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-900 border-bottom pb-4 mb-4">
                      The dedication of our My Yoga Network team has transformed
                      our wellness practices.{" "}
                      <span className="fw-bold">
                        Their personalized guidance and holistic programs
                      </span>{" "}
                      have greatly enhanced our mindfulness, flexibility, and
                      overall well-being, supporting a balanced lifestyle.
                    </p>
                    <div className="d-flex">
                      <img
                        src="/assets/imgs/hero-4/star-yellow.svg"
                        alt="infinia"
                      />
                      <img
                        src="/assets/imgs/hero-4/star-yellow.svg"
                        alt="infinia"
                      />
                      <img
                        src="/assets/imgs/hero-4/star-yellow.svg"
                        alt="infinia"
                      />
                      <img
                        src="/assets/imgs/hero-4/star-yellow.svg"
                        alt="infinia"
                      />
                      <img
                        src="/assets/imgs/hero-4/star-yellow.svg"
                        alt="infinia"
                      />
                      <span className="fs-8 text-600 ms-2">
                        (For services and support)
                      </span>
                    </div>
                    <div className="position-absolute top-0 end-0 m-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={52}
                        height={52}
                        viewBox="0 0 52 52"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_551_13914)">
                          <path
                            d="M0 29.7144H11.1428L3.71422 44.5715H14.8571L22.2857 29.7144V7.42871H0V29.7144Z"
                            fill="#D1D5DB"
                          />
                          <path
                            d="M29.7148 7.42871V29.7144H40.8577L33.4291 44.5715H44.5719L52.0005 29.7144V7.42871H29.7148Z"
                            fill="#D1D5DB"
                          />
                        </g>
                        <defs>
                          <clipPath>
                            <rect width={52} height={52} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="bg-neutral-100 card-testimonial-3 p-5 rounded-3 position-relative">
                    <div className="d-flex align-items-center mb-5">
                      <img
                        className="avatar-lg"
                        src="/assets/imgs/testimonial-1/avatar-3.png"
                        alt="infinia"
                      />
                      <div className="d-flex flex-column">
                        <h6 className="ms-3 fs-6 mb-0">Integrations</h6>
                        <div className="flag ms-3">
                          <img
                            src="/assets/imgs/testimonial-1/flag-2.png"
                            alt="infinia"
                          />
                          <span className="fs-8">
                            CEO of Tech Innovators Inc
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-900 border-bottom pb-4 mb-4">
                      The dedication of our My Yoga Network team has transformed
                      our wellness journey.{" "}
                      <span className="fw-bold">
                        Their personalized guidance and holistic yoga programs
                      </span>{" "}
                      have greatly enhanced our well-being, mindfulness, and
                      balance, supporting a healthier, centered lifestyle.
                    </p>
                    <div className="d-flex">
                      <img
                        src="/assets/imgs/hero-4/star-yellow.svg"
                        alt="infinia"
                      />
                      <img
                        src="/assets/imgs/hero-4/star-yellow.svg"
                        alt="infinia"
                      />
                      <img
                        src="/assets/imgs/hero-4/star-yellow.svg"
                        alt="infinia"
                      />
                      <img
                        src="/assets/imgs/hero-4/star-yellow.svg"
                        alt="infinia"
                      />
                      <img
                        src="/assets/imgs/hero-4/star-yellow.svg"
                        alt="infinia"
                      />
                      <span className="fs-8 text-600 ms-2">
                        (For services and support)
                      </span>
                    </div>
                    <div className="position-absolute top-0 end-0 m-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={52}
                        height={52}
                        viewBox="0 0 52 52"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_551_13914)">
                          <path
                            d="M0 29.7144H11.1428L3.71422 44.5715H14.8571L22.2857 29.7144V7.42871H0V29.7144Z"
                            fill="#D1D5DB"
                          />
                          <path
                            d="M29.7148 7.42871V29.7144H40.8577L33.4291 44.5715H44.5719L52.0005 29.7144V7.42871H29.7148Z"
                            fill="#D1D5DB"
                          />
                        </g>
                        <defs>
                          <clipPath>
                            <rect width={52} height={52} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
              <div className="swiper-pagination" />
              <div className="text-center mt-8 position-relative z-3" />
            </Swiper>
          </div>
        </div>
        <div className="position-absolute top-0 start-50 translate-middle-x z-0">
          <img src="/assets/imgs/service-2/bg-line.png" alt="infinia" />
        </div>
        <div className="rotate-center ellipse-rotate-success position-absolute z-0" />
        <div className="rotate-center-rev ellipse-rotate-primary position-absolute z-1" />
      </section>
      {/*Team 1*/}
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
      {/*Logo Cloud 5*/}

      <div className="section-logo-cloud container-fluid mt-8 mt-lg-0 border-top border-bottom">
        <div className="container">
          <div className="row mask-image">
            {/* Carausel Scroll */}
            <div className="carouselTicker carouselTicker-right my-7 position-relative z-1">
              <ul className="carouselTicker__list">
                <Marquee direction="right">
                  <li className="carouselTicker__item">
                    <svg
                      className="mt-1"
                      xmlns="http://www.w3.org/2000/svg"
                      width={101}
                      height={34}
                      viewBox="0 0 101 34"
                      fill="none"
                    >
                      <path
                        className="fill-dark"
                        d="M0.0283813 0.59375H21.9034V11.5312H10.9659L0.0283813 0.59375ZM0.0283813 11.5312H10.9659L21.9034 22.4688H0.0283813V11.5312ZM0.0283813 22.4688H10.9659V33.4062L0.0283813 22.4688Z"
                        fill="#111827"
                      />
                      <path
                        className="fill-dark"
                        d="M34.246 9.22237H43.0883V12.0322H37.5927V15.9369H43.0883V18.6847H37.5927V23.6843H34.246V9.22237ZM44.9063 13.7261H48.0674V15.8128C48.2325 15.0957 48.5703 14.5453 49.0797 14.1599C49.6021 13.7601 50.1821 13.5609 50.8151 13.5609C51.1459 13.5609 51.4216 13.589 51.6413 13.6435V16.5774C51.326 16.5394 51.0088 16.5189 50.691 16.5154C49.8233 16.5154 49.1698 16.7971 48.7284 17.3621C48.2885 17.913 48.0674 18.7392 48.0674 19.8416V23.6843H44.9078V13.7261H44.9063ZM56.6314 23.953C55.6676 23.953 54.8269 23.7253 54.1108 23.2709C53.4083 22.8166 52.8498 22.1715 52.4995 21.4114C52.1277 20.6132 51.9405 19.71 51.9405 18.7052C51.9405 17.7134 52.1347 16.8176 52.52 16.0195C52.8813 15.2483 53.4548 14.5963 54.1729 14.1394C54.902 13.685 55.7357 13.4574 56.6729 13.4574C57.375 13.4574 58.0025 13.6095 58.553 13.9122C59.1034 14.216 59.5168 14.6293 59.7925 15.1517V13.7261H62.9326V23.6843H59.7925V22.2791C59.5168 22.775 59.0899 23.1809 58.5115 23.4981C57.933 23.8049 57.2864 23.961 56.6314 23.953ZM57.5407 21.3288C58.2978 21.3288 58.8833 21.0811 59.2966 20.5852C59.7099 20.0893 59.9166 19.4623 59.9166 18.7052C59.9166 17.9616 59.7099 17.3416 59.2966 16.8456C58.8833 16.3497 58.2978 16.102 57.5407 16.102C56.8236 16.102 56.2461 16.3427 55.8052 16.8251C55.3784 17.3075 55.1647 17.9335 55.1647 18.7052C55.1647 19.4768 55.3784 20.1098 55.8052 20.6057C56.2461 21.0881 56.8246 21.3288 57.5407 21.3288ZM65.1434 13.7261H68.3045V15.1723C68.5257 14.6618 68.883 14.2485 69.3784 13.9327C69.8888 13.617 70.4808 13.4574 71.1553 13.4574C72.7256 13.4574 73.766 14.0699 74.2749 15.2964C74.5552 14.7404 74.9935 14.2805 75.5355 13.9743C76.1149 13.6255 76.7805 13.4468 77.4565 13.4574C79.812 13.4574 80.9894 14.8065 80.9894 17.5067V23.6843H77.8078V18.0852C77.8078 17.4111 77.6837 16.9152 77.436 16.5979C77.1878 16.2817 76.816 16.1225 76.3201 16.1225C75.7832 16.1225 75.3698 16.3087 75.0806 16.6805C74.7914 17.0388 74.6467 17.6648 74.6467 18.5606V23.6843H71.4651V18.0646C71.4651 17.3901 71.3415 16.9007 71.0933 16.5979C70.8601 16.2817 70.4943 16.1225 69.9994 16.1225C69.4479 16.1225 69.0276 16.3087 68.7384 16.6805C68.4491 17.0388 68.3045 17.6648 68.3045 18.5606V23.6843H65.1444V13.7261H65.1434ZM92.8642 18.1887C92.8642 18.6151 92.8362 19.077 92.7801 19.5729H85.4266C85.4546 20.2204 85.6743 20.7153 86.0876 21.0606C86.501 21.4044 87.0599 21.577 87.761 21.577C88.7393 21.577 89.3593 21.2803 89.6206 20.6883H92.7196C92.5675 21.6666 92.0305 22.4578 91.1078 23.0643C90.199 23.6562 89.0831 23.953 87.761 23.953C86.0536 23.953 84.7105 23.4911 83.7322 22.5684C82.7684 21.6451 82.286 20.358 82.286 18.7052C82.286 17.6308 82.5062 16.701 82.9471 15.9159C83.3729 15.1317 84.0294 14.4972 84.8271 14.0979C85.6403 13.6715 86.5835 13.4574 87.6589 13.4574C88.6773 13.4574 89.579 13.657 90.3642 14.0568C91.1628 14.4567 91.7763 15.0141 92.2027 15.7302C92.644 16.4473 92.8642 17.2665 92.8642 18.1887ZM89.7431 17.6103C89.7296 16.9492 89.544 16.4458 89.1852 16.102C88.8279 15.7582 88.3105 15.5856 87.6359 15.5856C86.9614 15.5856 86.4244 15.7713 86.0246 16.1436C85.6393 16.5019 85.4396 16.9903 85.4251 17.6103H89.7431ZM94.2579 13.7261H97.419V15.8128C97.5841 15.0957 97.9219 14.5453 98.4313 14.1599C98.9257 13.7706 99.5372 13.5594 100.167 13.5609C100.497 13.5609 100.773 13.589 100.993 13.6435V16.5774C100.678 16.5394 100.36 16.5189 100.043 16.5154C99.1749 16.5154 98.5214 16.7971 98.08 17.3621C97.6386 17.913 97.419 18.7392 97.419 19.8416V23.6843H94.2579V13.7261Z"
                        fill="black"
                      />
                      <defs>
                        <linearGradient
                          x1="45.373"
                          y1="1.60057"
                          x2="56.1885"
                          y2="13.0236"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset={1} stopColor="#F34F26" />
                          <stop offset={1} stopColor="#F69E35" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </li>
                  <li className="carouselTicker__item">
                    <img
                      src="/assets/imgs/logo-cloud/logo1.png"
                      alt="infinia"
                    />
                  </li>
                  <li className="carouselTicker__item">
                    <img
                      src="/assets/imgs/logo-cloud/logo2.png"
                      alt="infinia"
                    />
                  </li>
                  <li className="carouselTicker__item">
                    <img
                      src="/assets/imgs/logo-cloud/logo3.png"
                      alt="infinia"
                    />
                  </li>
                  <li className="carouselTicker__item">
                    {/* <img src="/assets/imgs/logo-cloud/logo5.png" alt="infinia"> */}
                    <svg
                      className="mt-3"
                      xmlns="http://www.w3.org/2000/svg"
                      width={95}
                      height={16}
                      viewBox="0 0 95 16"
                      fill="none"
                    >
                      <path
                        d="M50.2795 0.182373C45.8551 0.182373 42.2654 3.63876 42.2654 7.90461C42.2654 12.4399 45.6991 15.8302 50.2795 15.8302C54.7456 15.8302 58.2718 12.3951 58.2718 7.99365C58.2718 3.61839 54.7691 0.182373 50.2795 0.182373Z"
                        fill="url(#paint0_linear_815_25436)"
                      />
                      <path
                        className="fill-dark"
                        d="M4.7827 0.463976H0.474365V15.4912H4.7603C7.0342 15.4912 8.67874 14.9523 10.1213 13.7573C11.8331 12.3377 12.8483 10.1971 12.8483 7.98487C12.8483 3.54822 9.53389 0.463976 4.7827 0.463976ZM8.20912 11.7503C7.28268 12.5862 6.09001 12.9473 4.19466 12.9473H3.4073V3.00848H4.19466C6.09001 3.00848 7.237 3.34687 8.20912 4.22471C9.22285 5.12613 9.82747 6.52189 9.82747 7.96334C9.82747 9.40769 9.22285 10.8523 8.20912 11.7503ZM14.2013 15.4912H17.1293V0.463976H14.2013V15.4912ZM24.2978 6.22831C22.538 5.57625 22.0201 5.1462 22.0201 4.3379C22.0201 3.3908 22.9422 2.67037 24.2061 2.67037C25.0849 2.67037 25.8059 3.03059 26.5743 3.88428L28.1045 1.88214C26.8429 0.7756 25.3334 0.213163 23.6868 0.213163C21.0305 0.213163 19.0011 2.06167 19.0011 4.51539C19.0011 6.59027 19.9467 7.64822 22.6966 8.64216C23.8465 9.04573 24.4311 9.31488 24.7246 9.49877C25.3104 9.88197 25.6045 10.4208 25.6045 11.0514C25.6045 12.2699 24.6347 13.1699 23.326 13.1699C21.9288 13.1699 20.8033 12.4722 20.1268 11.1654L18.2364 12.9927C19.5856 14.9727 21.2083 15.8543 23.4415 15.8543C26.4832 15.8543 28.6227 13.8237 28.6227 10.9178C28.6227 8.52898 27.6337 7.44658 24.2978 6.22831ZM29.5462 7.98487C29.5462 12.4061 33.0175 15.8302 37.4803 15.8302C38.7419 15.8302 39.8235 15.5808 41.1543 14.9523V11.5029C39.9809 12.6758 38.9442 13.1478 37.6142 13.1478C34.6629 13.1478 32.5659 11.0066 32.5659 7.96334C32.5659 5.08045 34.7284 2.80422 37.4803 2.80422C38.8752 2.80422 39.9361 3.29973 41.1543 4.49386V1.04474C39.87 0.393271 38.8092 0.125 37.5472 0.125C33.1071 0.125 29.5462 3.61834 29.5462 7.98487ZM64.9036 10.5582L60.8923 0.463976H57.6923L64.0717 15.875H65.6479L72.1387 0.463976H68.9623L64.9036 10.5582ZM73.4711 15.4912H81.7852V12.9473H76.4002V8.88832H81.5791V6.34382H76.4002V3.00848H81.7852V0.463976H73.4711V15.4912ZM93.3874 4.89888C93.3874 2.08378 91.4522 0.463976 88.07 0.463976H83.7204V15.4912H86.6527V9.45163H87.0365L91.0905 15.4912H94.6962L89.961 9.16125C92.1726 8.70908 93.3874 7.19868 93.3874 4.89888ZM87.5055 7.38053H86.6527V2.82691H87.5524C89.3817 2.82691 90.3727 3.59535 90.3727 5.05775C90.3727 6.56641 89.3817 7.38053 87.5055 7.38053Z"
                        fill="black"
                      />
                      <defs>
                        <linearGradient
                          x1="45.373"
                          y1="1.60057"
                          x2="56.1885"
                          y2="13.0236"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset={1} stopColor="#F34F26" />
                          <stop offset={1} stopColor="#F69E35" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </li>
                  <li className="carouselTicker__item">
                    <img
                      src="/assets/imgs/logo-cloud/logo4.png"
                      alt="infinia"
                    />
                  </li>
                  <li className="carouselTicker__item">
                    <img
                      src="/assets/imgs/logo-cloud/logo6.png"
                      alt="infinia"
                    />
                  </li>
                  <li className="carouselTicker__item">
                    <img
                      src="/assets/imgs/logo-cloud/logo7.png"
                      alt="infinia"
                    />
                  </li>
                  <li className="carouselTicker__item">
                    <img
                      src="/assets/imgs/logo-cloud/logo8.png"
                      alt="infinia"
                    />
                  </li>
                  <li className="carouselTicker__item">
                    <img
                      src="/assets/imgs/logo-cloud/logo9.png"
                      alt="infinia"
                    />
                  </li>
                  <li className="carouselTicker__item">
                    <img
                      src="/assets/imgs/logo-cloud/logo10.png"
                      alt="infinia"
                    />
                  </li>
                  <li className="carouselTicker__item">
                    <img
                      src="/assets/imgs/logo-cloud/logo11.png"
                      alt="infinia"
                    />
                  </li>
                  <li className="carouselTicker__item">
                    <img
                      src="/assets/imgs/logo-cloud/logo12.png"
                      alt="infinia"
                    />
                  </li>
                  <li className="carouselTicker__item">
                    <img
                      src="/assets/imgs/logo-cloud/logo13.png"
                      alt="infinia"
                    />
                  </li>
                  <li className="carouselTicker__item">
                    <img
                      src="/assets/imgs/logo-cloud/logo14.png"
                      alt="infinia"
                    />
                  </li>
                  <li className="carouselTicker__item">
                    <img
                      src="/assets/imgs/logo-cloud/logo15.png"
                      alt="infinia"
                    />
                  </li>
                  <li className="carouselTicker__item">
                    <img
                      src="/assets/imgs/logo-cloud/logo16.png"
                      alt="infinia"
                    />
                  </li>
                  <li className="carouselTicker__item">
                    <img
                      src="/assets/imgs/logo-cloud/logo17.png"
                      alt="infinia"
                    />
                  </li>
                  <li className="carouselTicker__item">
                    <img
                      src="/assets/imgs/logo-cloud/logo18.png"
                      alt="infinia"
                    />
                  </li>
                  <li className="carouselTicker__item">
                    <img
                      src="/assets/imgs/logo-cloud/logo19.png"
                      alt="infinia"
                    />
                  </li>
                  <li className="carouselTicker__item">
                    <img
                      src="/assets/imgs/logo-cloud/logo20.png"
                      alt="infinia"
                    />
                  </li>
                </Marquee>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
