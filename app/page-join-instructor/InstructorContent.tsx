"use client";
import Link from "next/link";

import { useState } from "react";
import ModalVideo from "react-modal-video";
import Marquee from "react-fast-marquee";
import CountUp from "react-countup";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Hero5() {
  const [isOpen, setOpen] = useState(false);
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
            <h3>Join Instructor</h3>
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
              <p className="text-primary mb-0">Join  Instructor</p>
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
                    Teach Yoga on Your Terms, Earn What You Deserve
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
                    We connect you with teaching positions for businesses and
                    individuals, online or in person.
                  </p>
                  <div className="d-flex flex-column flex-md-row align-items-center">
                    <Link href="page-Find-Yoga-Therapist" className="btn btn-gradient rounded-4">
                      Apply Now
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
      {/*Cta-6*/}
      <section className="section-cta-6 position-relative section-padding fix">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 pe-lg-0">
              <div className="zoom-img rounded-end-lg-0 rounded-4">
                <img
                  className="rounded-end-lg-0 rounded-4"
                  src="/assets/imgs/cta-9/img-1.png"
                  alt="infinia"
                />
              </div>
            </div>
            <div className="col-12 col-lg-6 ps-lg-0 align-self-stretch">
              <div className="bg-white p-md-8 p-5 rounded-start-lg-0 h-100 rounded-4 mt-lg-0 mt-5 border border-start-lg-0 shadow-1">
                <h1 className="fs-1">Elevate Your Yoga Career</h1>
                <p className="mb-9">
                  Are you a passionate yoga teacher looking to expand your reach
                  and work with high-end wellness destinations, corporate
                  clients, and healing centers? At My Yoga Network, we connect
                  certified yoga professionals like you with exciting teaching
                  opportunities at hotels, resorts, wellness retreats,
                  corporates, and healthcare organizations around the world.
                  <br />
                  <br />
                  Whether you dream of guiding sunrise sessions by the beach,
                  leading stress-relief classes in boardrooms, or supporting
                  patients through therapeutic yoga, we’re here to help you make
                  it happen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*How It Work 2*/}
      <section className="howitwork-2 section-padding position-relative fix">
        <div className="container position-relative z-1">
          <div className="text-center mb-8">
            <h3 className="ds-5 my-3 fw-black">How My Yoga Network Works</h3>
            <p className="fs-5 mb-0">
              Simple Steps to Success: How MYN Connects You with Clients.
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
                <h5 className="my-3">Consultation Icon</h5>
                <p className="mb-6">
                  Apply to become a MYN yoga instructor. Submit your application
                  with details about your training, experience, and specialties.
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
                <h5 className="my-3">Plan Icon</h5>
                <p className="mb-6">
                  We review your credentials and experience. Our team will
                  review your profile and match you with suitable opportunities.
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
                <h5 className="my-3">Execution Icon</h5>
                <p className="mb-6">
                  Set up your profile for client matching. Once accepted, you’ll
                  receive bookings directly from clients – hotels, corporates,
                  wellness centers, and more.
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
      {/*Features-1*/}
      <section className="features-1 section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <h2 className="fw-medium mt-4 lh-sm">
                Why
                <span className="fw-black"> Join My</span>
                <span
                  className="text-primary fst-italic"
                  data-aos="fade-zoom-in"
                  data-aos-delay={400}
                >
                  {" "}
                  Yoga Network ?
                </span>
              </h2>
            </div>
            <div className="col-lg-8">
              <div className="d-flex flex-md-row flex-column align-items-center position-relative ps-lg-8 pt-lg-0 pt-10">
                <div
                  className="pe-md-3 pb-3 pb-md-0 position-relative z-1"
                  data-aos="fade-zoom-in"
                  data-aos-delay={100}
                ></div>

                <div
                  className="pe-md-3 pb-3 pb-md-0 position-relative z-1"
                  data-aos="fade-zoom-in"
                  data-aos-delay={300}
                >
                  <img
                    className="rounded-3 border border-3 border-white"
                    src="/assets/imgs/features-1/img-4.png"
                    alt="my-yoga-network"
                  />
                </div>
                <img
                  className="position-absolute top-50 start-0 translate-middle-y z-0"
                  src="/assets/imgs/features-1/bg-ellipse.png"
                  alt="my-yoga-network"
                />
                <img
                  className="position-absolute z-2 star-lg"
                  src="/assets/imgs/features-1/star-lg.png"
                  alt="my-yoga-network"
                />
                <img
                  className="position-absolute z-2 star-md"
                  src="/assets/imgs/features-1/star-md.png"
                  alt="my-yoga-network"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row mt-10">
            {/* prettier-ignore */}
            <div className="col-lg-3 col-md-6" data-aos="fade-zoom-in" data-aos-delay={50}>
							<div className="feature-item mb-5 mb-lg-0">
								<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
									<div className="icon">
										<img src="/assets/imgs/features-1/icon-1.png" alt="my-yoga-network" />
									</div>
								</div>
								<h6>Teach Across the U.S.</h6>
								<p>Expand your reach and teach yoga nationwide through our network, connecting with diverse clients across the country.</p>
							</div>
						</div>
            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-zoom-in"
              data-aos-delay={100}
            >
              <div className="feature-item mb-5 mb-lg-0">
                <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
                  <div className="icon">
                    <img
                      src="/assets/imgs/features-1/icon-2.png"
                      alt="my-yoga-network"
                    />
                  </div>
                </div>
                <h6>Grow Professionally</h6>
                <p>
                  Enhance your skills and career with opportunities for
                  professional development and diverse teaching experiences.
                </p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-zoom-in"
              data-aos-delay={200}
            >
              <div className="feature-item mb-5 mb-lg-0">
                <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
                  <div className="icon">
                    <img
                      src="/assets/imgs/features-1/icon-3.png"
                      alt="my-yoga-network"
                    />
                  </div>
                </div>
                <h6>Fair Compensation</h6>
                <p>
                  Enjoy competitive pay and transparent compensation for your
                  yoga teaching services.
                </p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-zoom-in"
              data-aos-delay={300}
            >
              <div className="feature-item mb-5 mb-lg-0">
                <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
                  <div className="icon">
                    <img
                      src="/assets/imgs/features-1/icon-4.png"
                      alt="my-yoga-network"
                    />
                  </div>
                </div>
                <h6>Supportive Community</h6>
                <p>
                  Join a network of dedicated yoga professionals offering
                  support, collaboration, and growth opportunities..
                </p>
              </div>
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
              Unlock Your Potential as a My Yoga Network Instructor
            </h6>
            <p data-aos="fade-zoom-in" data-aos-delay={100}>
              Your teaching journey with flexibility, higher earnings, and new
              client connections.
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
                  <img src="/assets/imgs/service-1/icon-1.png" alt="infinia" />
                  <h6 className="my-3">Flexible Schedules and Locations</h6>
                  <p className="mb-6">
                    Take control of your schedule. With My Yoga Network, you
                    choose when and where you teach yoga.
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
                  <img src="/assets/imgs/service-1/icon-2.png" alt="infinia" />
                  <h6 className="my-3">Earning Potential</h6>
                  <p className="mb-6">
                    Whether you're teaching part-time or full-time, My Yoga
                    Network opens up opportunities to grow your income based on
                    your availability and expertise.
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
                  <img src="/assets/imgs/service-1/icon-3.png" alt="infinia" />
                  <h6 className="my-3">Exposure to New Clients</h6>
                  <p className="mb-6">
                    My Yoga Network is designed to help you build your client
                    base, offering you the visibility and tools you need to grow
                    your practice.
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
              <h6
                className="ds-5 my-3"
                data-aos="fade-zoom-in"
                data-aos-delay={200}
              >
                Become a Part of a Growing Community
              </h6>
              <p className="fs-5" data-aos="fade-zoom-in" data-aos-delay={300}>
                Certified Professionals Creating Transformative Yoga
                Experiences.{" "}
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
      {/*Testominal 2*/}
      <section className="section-testimonial-2 position-relative bg-white section-padding">
        <div className="container position-relative z-1">
          <div className="row pb-9">
            <div className="col-lg-7 mx-lg-auto">
              <div className="text-center mb-lg-0 mb-5">
                <h4 className="ds-4 my-3">
                  Real Stories, Real Success
                  <br />
                </h4>
                <p className="fs-5 mb-0">Hear from our yoga instructors </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div
                className="bg-neutral-100 p-5 rounded-3"
                data-aos="fade-zoom-in"
                data-aos-delay={0}
              >
                <p className="text-900">
                  Working with My Yoga Network for private yoga sessions has
                  been an incredible experience. The platform makes it so easy
                  to connect with clients who are genuinely passionate about
                  improving their practice. I love the flexibility MYN offers,
                  allowing me to manage my schedule while still building
                  meaningful connections with my students.
                </p>
                <div className="d-flex align-items-center mt-5">
                  <img
                    className="avatar-lg"
                    src="/assets/imgs/testimonial-1/icon-1.png"
                    alt="infinia"
                  />
                  <div className="d-flex flex-column">
                    <h6 className="ms-3 fs-6 mb-0">- Oliver Bennett</h6>
                    <div className="flag ms-3"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="bg-neutral-100 p-5 mt-5 mt-lg-0 rounded-3"
                data-aos="fade-zoom-in"
                data-aos-delay={200}
              >
                <p className="text-900">
                  I worked with several luxury hotels through My Yoga Network,
                  and it's been an amazing journey. Teaching yoga to hotel
                  guests from all over the world has broadened my horizons and
                  brought much joy into my practice. The platform handles all
                  the logistics, making it seamless for me to focus on
                  delivering exceptional classes.
                </p>
                <div className="d-flex align-items-center mt-5">
                  <img
                    className="avatar-lg"
                    src="/assets/imgs/testimonial-1/icon-2.png"
                    alt="infinia"
                  />
                  <div className="d-flex flex-column">
                    <h6 className="ms-3 fs-6 mb-0">- Sophia Carter</h6>
                    <div className="flag ms-3"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="bg-neutral-100 p-5 mt-5 mt-lg-0 rounded-3"
                data-aos="fade-zoom-in"
                data-aos-delay={100}
              >
                <p className="text-900">
                  My Yoga Network has made it possible for me to teach in
                  stunning locations, with everything from bookings to payments
                  taken care of efficiently. For any yoga teacher looking to
                  step into the hospitality sector, My Yoga Network is the
                  perfect partner.
                </p>
                <div className="d-flex align-items-center mt-5">
                  <img
                    className="avatar-lg"
                    src="/assets/imgs/testimonial-1/icon-3.png"
                    alt="infinia"
                  />
                  <div className="d-flex flex-column">
                    <h6 className="ms-3 fs-6 mb-0">- Liam Mitchell</h6>
                    <div className="flag ms-3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 position-relative z-3"></div>
        <div className="mask-image-2 position-absolute top-50 bottom-0 start-0 end-0 z-1" />
      </section>
    </>
  );
}
