"use client";
import Link from "next/link";
import { useState } from "react";

export default function KidsProgramSection() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <section className="section-page-header py-10 fix position-relative">
        <div className="container position-relative z-1">
          <div className="text-start">
            <h3>Kids Program</h3>
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
              <p className="text-primary mb-0">Kids Program</p>
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
          style={{ backgroundImage: `url(/assets/imgs/hero-5/img-bg.png)` }}
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
                    Elevating Student Wellness with Yoga
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
                    Your trusted partner for enhancing LBUSD after-school
                    programs with evidence-based, engaging wellness activities.
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

      {/*Blog-4*/}
      <section className="section-blog-4 pb-120 @@classList">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-12 col-md-4 me-auto">
              <h3 className="ds-4 mt-6 mb-2">Our Services</h3>
              <span className="fs-5 fw-medium">
                Supporting Every Stage of Your Child’s Journey with Care
              </span>
            </div>
            <div className="col-12 col-md-4 col-auto mt-5 mt-md-0"></div>
          </div>
          <div className="row mt-8">
            <div className="col-12 col-md-4">
              <div className="card border-0 position-relative rounded-3 d-inline-flex card-hover shadow-2">
                <img
                  className="rounded-top-3"
                  src="/assets/imgs/blog-4/card-img-1.png"
                  alt="After-School Yoga"
                />
                <Link
                  href="page-after-school"
                  className="position-absolute z-1 m-3 bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-3 py-1"
                >
                  <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
                    After-School Yoga
                  </span>
                </Link>
                <div className="card-body bg-white border border-top-0 rounded-bottom-3 p-6">
                  <h6 className="mb-3">After-School Yoga</h6>
                  <p>
                    A fun and enriching after-school program where kids build
                    strength, flexibility, focus, and confidence through playful
                    yoga and mindfulness activities.
                  </p>
                  <div className="d-flex align-items-center justify-content-between mt-5 pt-5 border-top "></div>
                </div>
                <Link
                  href="page-after-school"
                  className="position-absolute bottom-0 start-0 end-0 top-0 z-0"
                />
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card border-0 position-relative rounded-3 d-inline-flex card-hover shadow-2">
                <img
                  className="rounded-top-3"
                  src="/assets/imgs/blog-4/card-img-2.png"
                  alt="Kids Yoga at Studio"
                />
                <Link
                  href="page-yoga-studio"
                  className="position-absolute z-1 m-3 bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-3 py-1"
                >
                  <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
                    Kids Yoga at Studio
                  </span>
                </Link>
                <div className="card-body bg-white border border-top-0 rounded-bottom-3 p-6">
                  <h6 className="mb-3">Kids Yoga at Studio</h6>
                  <p>
                    Engaging studio classes designed to help children improve
                    their balance, coordination, and emotional well-being in a
                    supportive and creative environment.
                  </p>
                  <div className="d-flex align-items-center justify-content-between mt-5 pt-5 border-top "></div>
                </div>
                <Link
                  href="page-yoga-studio"
                  className="position-absolute bottom-0 start-0 end-0 top-0 z-0"
                />
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card border-0 position-relative rounded-3 d-inline-flex card-hover shadow-2">
                <img
                  className="rounded-top-3"
                  src="/assets/imgs/blog-4/card-img-3.png"
                  alt="Infant Massage"
                />
                <Link
                  href="page-Infant-Massage"
                  className="position-absolute z-1 m-3 bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-3 py-1"
                >
                  <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
                    Infant Massage
                  </span>
                </Link>
                <div className="card-body bg-white border border-top-0 rounded-bottom-3 p-6">
                  <h6 className="mb-3">Infant Massage</h6>
                  <p>
                    Learn the techniques and benefits that gentle, intentional
                    touch can have on your baby’s health and well-being?
                  </p>
                  <div className="d-flex align-items-center justify-content-between mt-5 pt-5 border-top "></div>
                </div>
                <Link
                  href="page-Infant-Massage"
                  className="position-absolute bottom-0 start-0 end-0 top-0 z-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Team 1 */}
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
                Our certified yoga instructors bring expertise and passion to
                every class, tailored for kids and families in Long Beach.
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
      {/* Newsletter-3 */}
      <section className="section-newsletter-3 position-relative pb-120">
        <div className="container">
          <div className="pt-120 pb-120 bg-4 rounded-5 position-relative">
            <div className="row align-items-center text-center position-relative z-1">
              <div className="col-lg-6 mx-auto">
                <div className="px-lg-3 text-center">
                  <div
                    className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2"
                    data-aos="zoom-in"
                    data-aos-delay={100}
                  >
                    <img
                      src="/assets/imgs/features-1/dots.png"
                      alt="infinia"
                    />
                    <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
                      Stay Connected
                    </span>
                  </div>
                  <h4 className="my-5">
                    Join Our Yoga Community with{" "}
                    <span className="text-primary">10,000+ Families.</span>{" "}
                    <br className="d-none d-lg-block" /> Receive Updates and
                    Offers.
                  </h4>
                  <p className="fs-6 fw-medium text-900">
                    By clicking the button, you are agreeing with our{" "}
                    <Link
                      href="#"
                      className="text-decoration-underline link-hover-primary-light"
                    >
                      Term & Conditions
                    </Link>
                  </p>
                  <form className="input-group mt-5 position-relative px-2">
                    <input
                      type="text"
                      className="ps-5 py-3 form-control bg-white rounded-start-pill border-2 border-end-0 border-white"
                      name="name"
                      placeholder="Enter your email .."
                    />
                    <div className="bg-white border-2 border border-start-0 border-white rounded-end-pill">
                      <button
                        type="submit"
                        className="bg-linear-2 px-3 py-3 m-3 fs-7 fw-bold border-0 text-white rounded-pill"
                      >
                        Subscribe Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="position-absolute bottom-0 start-0 m-10 pb-5 ps-4">
              <img
                className=" "
                src="/assets/imgs/newsletter-3/icon-1.png"
                alt="my-yoga-network"
              />
            </div>
            <div className="position-absolute top-0 end-0 m-10 pb-5 ps-4">
              <img
                className=" "
                src="/assets/imgs/newsletter-3/icon-2.png"
                alt="my-yoga-network"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}