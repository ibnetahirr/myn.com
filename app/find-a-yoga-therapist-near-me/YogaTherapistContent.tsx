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
            <h3 >Find Yoga Therapist</h3>
            <div className="d-flex align-items-center">
              <Link href="/">
                <p className="mb-0 text-900 text-decoration-none">Home</p>
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
              <p className="text-primary mb-0 fw-medium">Find Yoga Therapist</p>
            </div>
          </div>
        </div>
        <img
          className="position-absolute bottom-0 start-0 end-0 top-0 z-0"
          src="/assets/imgs/page-header/bg-line.png"
          alt="My Yoga Network Background"
          loading="lazy"
        />
        <div className="bouncing-blobs-container">
          <div className="bouncing-blobs-glass" />
          <div className="bouncing-blobs">
            <div className="position-absolute top-0 start-0 translate-middle-y bouncing-blob--green" />
            <div className="position-absolute top-0 end-0 bouncing-blob--primary" />
          </div>
        </div>
      </section>
      {/* Contact-Form */}
      <section className="section-feature-12 border-bottom pb-120 pt-110">
        <div className="container">
          <div className="text-center">
            <h5 className="ds-5 text-linear-1">Contact Us</h5>
            <p className="fs-5 pb-4 text-900">
              Complete the form below, and My Yoga Network will connect you with
              yoga instructors tailored to your personal needs.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="feature-item mb-5 bg-neutral-100 p-7 rounded-4 hover-up shadow-sm">
                <div className="icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
                  <div className="icon">
                    <img
                      className="filter-invert"
                      src="/assets/imgs/service-1/icon-6.svg"
                      alt="Contact Icon"
                      loading="lazy"
                    />
                  </div>
                </div>
                <h4 className="text-primary">Contact Information</h4>
                <p className="mb-3">
                  <strong>Phone:</strong> (888) 960-9240
                  <br />
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:contact@myyoganetwork.com"
                    className="text-primary text-decoration-none"
                  >
                    contact@myyoganetwork.com
                  </a>
                </p>
                <p className="text-muted small">
                  Available Monday–Friday, 9 AM–6 PM PKT 
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="feature-item mb-5 bg-neutral-100 p-7 rounded-4 hover-up shadow-sm">
                <div className="icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
                  <div className="icon">
                    <img
                      className="filter-invert"
                      src="/assets/imgs/service-1/icon-4.svg"
                      alt="Application Form Icon"
                      loading="lazy"
                    />
                  </div>
                </div>
                <h4 className="text-primary">Apply To Teach for My Yoga Network</h4>
                <form id="contactForm" className="needs-validation" noValidate>
                  <div className="mb-4">
                    <label htmlFor="name" className="form-label fs-6 text-900">
                      Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control rounded-3"
                      id="name"
                      required
                      placeholder="Enter your full name"
                    />
                    <div className="invalid-feedback">
                      Please provide your name.
                    </div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="form-label fs-6 text-900">
                      Email <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control rounded-3"
                      id="email"
                      required
                      placeholder="Enter your email"
                    />
                    <div className="invalid-feedback">
                      Please enter a valid email address.
                    </div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="phone" className="form-label fs-6 text-900">
                      Phone <span className="text-muted">(Optional)</span>
                    </label>
                    <input
                      type="tel"
                      className="form-control rounded-3"
                      id="phone"
                      placeholder="Enter your phone number (e.g., +1-XXX-XXX-XXXX)"
                    />
                    <div className="invalid-feedback">
                      Please enter a valid phone number.
                    </div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="experience" className="form-label fs-6 text-900">
                      Years of Experience <span className="text-danger">*</span>
                    </label>
                    <input
                      type="number"
                      className="form-control rounded-3"
                      id="experience"
                      required
                      placeholder="Enter years of experience"
                      min="0"
                    />
                    <div className="invalid-feedback">
                      Please enter your years of experience.
                    </div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="address" className="form-label fs-6 text-900">
                      Address (Zipcode)
                    </label>
                    <input
                      type="text"
                      className="form-control rounded-3"
                      id="address"
                      placeholder="Enter your zipcode"
                    />
                    <div className="invalid-feedback">
                      Please enter a valid zipcode.
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="form-label fs-6 text-900">
                      Preferred Teaching Method
                    </label>
                    <div className="d-flex gap-3">
                      <div className="form-check">
                        <input
                          type="radio"
                          className="form-check-input"
                          id="online"
                          name="teachingMethod"
                          value="online"
                          required
                        />
                        <label className="form-check-label text-900" htmlFor="online">
                          Online
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="radio"
                          className="form-check-input"
                          id="inPerson"
                          name="teachingMethod"
                          value="inPerson"
                          required
                        />
                        <label className="form-check-label text-900" htmlFor="inPerson">
                          In-Person
                        </label>
                      </div>
                    </div>
                    <div className="invalid-feedback">
                      Please select a teaching method.
                    </div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="bio" className="form-label fs-6 text-900">
                      Brief Introduction/Bio
                    </label>
                    <textarea
                      className="form-control rounded-3"
                      id="bio"
                      rows={3}
                      placeholder="Write a brief introduction about yourself"
                    ></textarea>
                    <div className="invalid-feedback">
                      Please provide a brief introduction.
                    </div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="certifications" className="form-label fs-6 text-900">
                      Yoga Certifications <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control rounded-3"
                      id="certifications"
                      required
                      placeholder="List your yoga certifications"
                    />
                    <div className="invalid-feedback">
                      Please list your yoga certifications.
                    </div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="fileUpload" className="form-label fs-6 text-900">
                      Drop files here to upload
                    </label>
                    <input
                      type="file"
                      className="form-control rounded-3"
                      id="fileUpload"
                      multiple
                      accept=".pdf,.doc,.docx,.jpg,.png"
                    />
                    <div className="form-text text-muted">
                      Max file size: 10MB. Supported formats: PDF, DOC, DOCX, JPG, PNG.
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary rounded-4"
                    id="submitBtn"
                  >
                    Submit
                    <svg
                      className="ms-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M5.0978 3.31244L12.0958 6.80342C13.077 7.29449 13.0767 8.69249 12.0954 9.18316L5.09734 12.6927C4.21074 13.136 3.16687 12.4925 3.16687 11.5027L3.16687 4.50219C3.16687 3.51217 4.2112 2.86872 5.0978 3.31244Z"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <div id="successMessage" className="mt-3 text-success d-none">
                    Thank you! Your request has been submitted. We’ll contact
                    you soon.
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}