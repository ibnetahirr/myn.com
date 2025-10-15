"use client";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { useState } from "react";
import CountUp from "react-countup";
import Marquee from "react-fast-marquee";
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
        <section className="section-page-header py-10 fix position-relative">
          <div className="container position-relative z-1">
            <div className="text-start">
              <h3>Hotels and Resorts</h3>
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
                <p className="text-primary mb-0">Hotels and Resorts</p>
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
        {/* Hero 5 */}
        <div className="section-hero-5 position-relative">
          <div
            className="position-relative py-188 img-pull"
            style={{ backgroundImage: `url(/assets/imgs/hero-5/img-bg-1.png)` }}
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
                      On-Site Yoga & Wellness Programs for Hotels & Resorts
                      <span className="fw-regular">
                        <br />
                        with
                        <img
                          className="alltuchtopdown img-fluid filter-invert"
                          src="/assets/imgs/hero-5/icon-1.svg"
                          alt="Yoga icon"
                        />
                        Seamlessly Integrate Professional Yoga Sessions
                      </span>
                    </h3>
                    <p className="fs-5 text-900">
                      Enhance relaxation and guest satisfaction with tailored
                      yoga programs designed for hotels and resorts.
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
        {/* CTA 6 */}
        <section className="section-cta-6 position-relative section-padding fix">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 pe-lg-0">
                <div className="zoom-img rounded-end-lg-0 rounded-4">
                  <img
                    className="rounded-end-lg-0 rounded-4"
                    src="/assets/imgs/cta-6/img-3.png"
                    alt="my-yoga-network"
                  />
                </div>
              </div>
              <div className="col-12 col-lg-6 ps-lg-0 align-self-stretch">
                <div className="bg-white p-md-8 p-5 rounded-start-lg-0 h-100 rounded-4 mt-lg-0 mt-5 border border-start-lg-0 shadow-1">
                  <h1 className="fs-1">
                    Make Your Hotel Stand Out with a Tailored Yoga & Wellness
                    Program
                  </h1>
                  <p className="mb-3">
                    Travelers today seek more than just a place to stay – they
                    desire relaxation, rejuvenation, and wellness experiences.
                    With My Yoga Network, you can seamlessly integrate certified
                    yoga programs into your hotel's offerings, ensuring a
                    luxurious and holistic stay for your guests.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* LogoCloud 1 */}
        <div className="section-logo-cloud container-fluid mt-8 mt-lg-0 border-top border-bottom">
          <div className="container">
            <div className="row mask-image">
              {/* Carausel Scroll */}
              <div className="carouselTicker carouselTicker-right my-7 position-relative z-1">
                <ul className="carouselTicker__list">
                  <Marquee>
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
                          fill="#111827"
                        />
                      </svg>
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
                        src="/assets/imgs/logo-cloud/logo4.png"
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
                  </Marquee>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/*Services 1 */}
        <section className="section-padding">
          <div className="container">
            <div className="text-center">
              <div
                className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2"
                data-aos="zoom-in"
                data-aos-delay={100}
              >
                <img src="/assets/imgs/features-1/dots.png" alt="infinia" />
                <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
                  What we offers
                </span>
              </div>
              <h3
                className="ds-3 my-3"
                data-aos="fade-zoom-in"
                data-aos-delay={300}
              >
                Explore Our Services
              </h3>
              <p data-aos="fade-zoom-in" data-aos-delay={100}>
                Unlock Wellness Potential with Tailored Yoga Solutions.
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
        {/*Features-8*/}
        <section>
          <div className="container-fluid position-relative bg-primary-light section-padding">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-4 col-md-6 mb-lg-0 mb-8 pe-5 pe-lg-10 position-relative z-1">
                  <img
                    src="/assets/imgs/features-8/icon-star.svg"
                    alt="my-yoga-network"
                  />
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
                      <Link href="#" className="d-flex align-items-start mb-6">
                        <img
                          className="mt-2"
                          src="/assets/imgs/features-2/tick.svg"
                          alt="my-yoga-network"
                        />
                        <div className="ms-3 pb-4 border-bottom">
                          <h5 className="text-white mb-2">
                            Certified Yoga Instructors
                          </h5>
                          <p className="text-white mb-0">
                            All instructors are vetted, experienced, and
                            certified to deliver high-quality yoga sessions.
                          </p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="d-flex align-items-start mb-6">
                        <img
                          className="mt-2"
                          src="/assets/imgs/features-2/tick.svg"
                          alt="my-yoga-network"
                        />
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
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="d-flex align-items-start mb-6">
                        <img
                          className="mt-2"
                          src="/assets/imgs/features-2/tick.svg"
                          alt="my-yoga-network"
                        />
                        <div className="ms-3 pb-4 border-bottom">
                          <h5 className="text-white mb-2">
                            Wellness Event Integration
                          </h5>
                          <p className="text-white mb-0">
                            Host yoga retreats, detox programs, and corporate
                            wellness events to attract new guests.
                          </p>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-4 mb-lg-0 mb-8 pe-lg-8">
                  <ul className="list-unstyled ">
                    <li>
                      <Link href="#" className="d-flex align-items-start mb-6">
                        <img
                          className="mt-2"
                          src="/assets/imgs/features-2/tick.svg"
                          alt="my-yoga-network"
                        />
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
                        <img
                          className="mt-2"
                          src="/assets/imgs/features-2/tick.svg"
                          alt="my-yoga-network"
                        />
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
                    <li>
                      <Link href="#" className="d-flex align-items-start mb-6">
                        <img
                          className="mt-2"
                          src="/assets/imgs/features-2/tick.svg"
                          alt="my-yoga-network"
                        />
                        <div className="ms-3 pb-4 border-bottom">
                          <h5 className="text-white mb-2">&nbsp;</h5>
                          <p className="text-white mb-0">&nbsp;</p>
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
            <div className="position-absolute top-0 end-0 z-1 p-8">
              <div className="bloom" />
            </div>
          </div>
        </section>
        {/*How It Work 2*/}
        <section className="howitwork-2 section-padding position-relative fix">
          <div className="container position-relative z-1">
            <div className="text-center mb-8">
              <h3 className="ds-5 my-3 fw-black">How it Works ?</h3>
              <p className="fs-5 mb-0">
                Get yoga when you want, where you want.
              </p>
            </div>
          </div>
          <div className="position-absolute top-0 start-50 translate-middle-x z-0">
            <img
              src="/assets/imgs/howitwork-2/img-bg-line.png"
              alt="My Yoga Network"
            />
          </div>
          <div className="container">
            <div className="row position-relative justify-content-center">
              <div className="col-lg-4 text-center px-md-10">
                <div className="card-service-4 text-center mt-2">
                  <div className="bg-white icon-flip position-relative icon-shape icon-xxl rounded-3">
                    <div className="icon">
                      <img
                        src="/assets/imgs/howitwork-2/icon-1.svg"
                        alt="My Yoga Network"
                      />
                    </div>
                  </div>
                  <h5 className="my-3">Consultation </h5>
                  <p className="mb-6">
                    We assess your needs and space to design the perfect
                    program.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 text-center px-md-10">
                <div className="card-service-4 text-center mt-2">
                  <div className="bg-white icon-flip position-relative icon-shape icon-xxl rounded-3">
                    <div className="icon">
                      <img
                        src="/assets/imgs/howitwork-2/icon-2.svg"
                        alt="My Yoga Network"
                      />
                    </div>
                  </div>
                  <h5 className="my-3">Customized Plan</h5>
                  <p className="mb-6">
                    Choose from flexible session formats—monthly, on-demand
                    events, or luxury wellness retreats.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 text-center px-md-10">
                <div className="card-service-4 text-center mt-2">
                  <div className="bg-white icon-flip position-relative icon-shape icon-xxl rounded-3">
                    <div className="icon">
                      <img
                        src="/assets/imgs/howitwork-2/icon-3.svg"
                        alt="My Yoga Network"
                      />
                    </div>
                  </div>
                  <h5 className="my-3">Execution & Support</h5>
                  <p className="mb-6">
                    We handle session delivery, feedback, and ongoing program
                    enhancement.
                  </p>
                </div>
              </div>
            </div>
            <div className="navigation-arrow-1 d-none d-lg-block position-absolute top-50">
              <img
                src="/assets/imgs/howitwork-2/arrow-1.png"
                alt="My Yoga Network"
              />
            </div>
            <div className="navigation-arrow-2 d-none d-lg-block position-absolute">
              <img
                src="/assets/imgs/howitwork-2/arrow-2.png"
                alt="My Yoga Network"
              />
            </div>
            <div className="row"></div>
            <div className="bouncing-blobs-container">
              <div className="bouncing-blobs-glass" />
              <div className="bouncing-blobs">
                <div className="bouncing-blob bouncing-blob--green" />
                <div className="bouncing-blob bouncing-blob--primary" />
              </div>
            </div>
          </div>
        </section>
        {/*service 1*/}
        <section className="section-padding">
          <div className="container">
            <div className="text-center">
              <h6
                className="ds-6 my-3"
                data-aos="fade-zoom-in"
                data-aos-delay={300}
              >
                Why Choose My Yoga Network?
              </h6>
              <p data-aos="fade-zoom-in" data-aos-delay={100}>
                Partner with My Yoga Network and benefit from our team of
                instructors and decades of experience.
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
                      src="/assets/imgs/service-1/icon-1.png"
                      alt="infinia"
                    />
                    <h6 className="my-3">Industry-Specific Programs</h6>
                    <p className="mb-6">
                      Designed for hotels, corporates, schools & healthcare
                      providers.
                    </p>
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
                      src="/assets/imgs/service-1/icon-2.png"
                      alt="infinia"
                    />
                    <h6 className="my-3">
                      Certified & Vetted Yoga Instructors
                    </h6>
                    <p className="mb-6">
                      Get reliable, professional, insured yoga instructors.
                    </p>
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
                      src="/assets/imgs/service-1/icon-3.png"
                      alt="infinia"
                    />
                    <h6 className="my-3">Flexible Offerings</h6>
                    <p className="mb-6">
                      Monthly sessions, on-demand events, luxury retreats, or
                      trial plans.
                    </p>
                  </div>
                </div>
              </div>
              <div className="position-absolute top-50 start-50 translate-middle z-0">
                <img src="/assets/imgs/service-1/img-bg.png" alt="infinia" />
              </div>
            </div>
          </div>
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
