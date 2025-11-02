"use client";
import Link from "next/link";

import { useState } from "react";
import ModalVideo from "react-modal-video";

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
                <h4 className="ds-4 fw-regular">Kids Yoga in Long Beach, CA</h4>
                <p className="fs-5">
                  Nurturing Young Minds Through the Power of Yoga.
                </p>
                <Link
                  href="#"
                  className="btn btn-outline-secondary hover-up bg-transparent mt-5"
                  data-aos="fade-zoom-in"
                  data-aos-delay={200}
                >
                  Enroll Now
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

      {/*Features 2*/}
      <section>
        <div className="container-fluid position-relative bg-primary-light section-padding">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-6 mb-lg-0 mb-8 position-relative z-1">
                <p className="text-white mb-0">
                  Looking for a way to help your child improve focus,
                  flexibility, and confidence? My Yoga Network offers expert-led
                  kids yoga classes in Long Beach, designed to cultivate
                  mindfulness, physical strength, and emotional balance in a fun
                  and engaging environment.
                </p>
                <h2 className="text-white mt-3 mb-4 fw-medium hover-up">
                  Why Choose Kids Yoga?
                </h2>
                <ul className="list-unstyled phase-items">
                  <li>
                    <Link
                      href="#"
                      className="phase-item d-flex align-items-center mb-3"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={23}
                        height={24}
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
                      <p className="text-white mb-0 ms-3">
                        Improved Concentration & Focus
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="phase-item d-flex align-items-center mb-3"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={23}
                        height={24}
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
                      <p className="text-white mb-0 ms-3">
                        Enhanced Flexibility & Strength
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="phase-item d-flex align-items-center mb-3"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={23}
                        height={24}
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
                      <p className="text-white mb-0 ms-3">
                        Reduced Stress & Anxiety
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="phase-item d-flex align-items-center mb-3"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={23}
                        height={24}
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
                      <p className="text-white mb-0 ms-3">
                        Boosted Confidence & Self-Esteem
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="phase-item d-flex align-items-center mb-3"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={23}
                        height={24}
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
                      <p className="text-white mb-0 ms-3">
                        Better emotional regulation & social skills
                      </p>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6 mb-lg-0 mb-8">
                <div className="position-relative d-inline-block z-2 hover-up">
                  <img
                    className="rounded-3 border border-3 border-white"
                    src="/assets/imgs/features-2/img-2.png"
                    alt="infinia"
                  />
                </div>
              </div>
              <div className="col-lg-4 mb-lg-0 mb-8">
                <div>
                  <h2 className="text-white mt-3 mb-4 fw-medium hover-up">
                    What To Expect?
                  </h2>
                  <div data-aos="fade-zoom-in" data-aos-delay={4200}>
                    <h5 className="text-white mt-8 mb-3">Fun Yoga Poses</h5>
                    <p className="text-white">
                      Designed for kids to build strength & coordination
                    </p>
                  </div>
                  <div data-aos="fade-zoom-in" data-aos-delay={4200}>
                    <h5 className="text-white mt-8 mb-3">
                      Breathing Exercises
                    </h5>
                    <p className="text-white">
                      Helps calm the mind and improve focus, fostering emotional
                      balance in children.
                    </p>
                  </div>
                  <div data-aos="fade-zoom-in" data-aos-delay={4200}>
                    <h5 className="text-white mt-8 mb-3">
                      Safe & Supportive Environment
                    </h5>
                    <p className="text-white">
                      Designed for kids to build strength & coordination.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="position-absolute bg-rotate z-0">
            <img
              className="rotate-center"
              src="/assets/imgs/features-2/bg-img-favicon.png"
              alt="infinia"
            />
          </div>
        </div>
      </section>

      {/*Blog-4*/}
      <section className="section-blog-4 pb-120 @@classList">
        <div className="container">
          <div className="row align-items-end justify-content-center">
            <div className="col-12 col-md-6 text-center py-4">
              <h3 className="ds-4 mt-6 mb-2">Who Can Join?</h3>
            </div>
          </div>
          <div className="row mt-8">
            <div className="col-12 col-md-4">
              <div className="card border-0 position-relative rounded-3 d-inline-flex card-hover shadow-2">
                <img
                  className="rounded-top-3"
                  src="/assets/imgs/blog-4/img-1.png"
                  alt="Toddlers Yoga"
                />

                <div className="card-body bg-white border border-top-0 rounded-bottom-3 p-6">
                  <h6 className="mb-3">Toddlers</h6>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card border-0 position-relative rounded-3 d-inline-flex card-hover shadow-2">
                <img
                  className="rounded-top-3"
                  src="/assets/imgs/blog-4/img-2.png"
                  alt="Young Kids Yoga"
                />

                <div className="card-body bg-white border border-top-0 rounded-bottom-3 p-6">
                  <h6 className="mb-3">Young Kids</h6>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card border-0 position-relative rounded-3 d-inline-flex card-hover shadow-2">
                <img
                  className="rounded-top-3"
                  src="/assets/imgs/blog-4/img-3.png"
                  alt="Older Kids Yoga"
                />

                <div className="card-body bg-white border border-top-0 rounded-bottom-3 p-6">
                  <h6 className="mb-3">Older Kids</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*feature-5*/}
      <section className="section-feature-5">
        <div className="container-fluid position-relative section-padding bg-1">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="photo-description position-relative  rounded-4">
                  <img
                    className="rounded-4 border border-2 border-white position-relative z-1"
                    src="/assets/imgs/features-5/img-4.png"
                    alt="my-yoga-network"
                  />
                  <div className="box-gradient-1 ms-lg-8 position-absolute bottom-0 start-0 bg-linear-1 rounded-4 z-0" />
                </div>
              </div>
              <div className="col-lg-6 offset-lg-1 mt-lg-0 mt-5">
                <h4 className="ds-4 fw-regular">
                  Program Prerequisites & <br /> Parent Involvement{" "}
                </h4>
                <ul className="fs-5">
                  <p>
                    We believe in creating a collaborative environment between
                    schools, parents, and children to ensure the best
                    experience.
                  </p>

                  <strong>Pre-Program Surveys & Parent Interviews:</strong>
                  <ul>
                    <li>
                      <strong> Parent Interviews:</strong>
                      <br />
                      Before enrolling, we conduct brief parent interviews to
                      understand the child's needs, preferences, and any health
                      concerns.
                    </li>
                    <li>
                      <strong> Pre- & Post-Program Surveys:</strong>
                      <br />
                      We assess student progress & parent satisfaction to
                      continuously improve our program.
                    </li>
                    <li>
                      <strong>Parent Communication Policy:</strong>
                      <br />
                      Regular updates on student engagement, progress, and
                      activities through emails and newsletters.
                    </li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* feature-12 */}
      <section className="section-feature-12 border-bottom pb-120 pt-110">
        <div className="container">
          <div className="text-center">
            <h5 className="ds-5">Key Benefits & Features</h5>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="feature-item mb-5 bg-neutral-100 p-7 rounded-4 hover-up">
                <div className="icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
                  <div className="icon">
                    <img
                      className="filter-invert"
                      src="/assets/imgs/service-1/icon-6.svg"
                      alt="infinia"
                    />
                  </div>
                </div>
                <h4>Holistic Development</h4>
                <p>
                  Yoga nurtures both the body and mind, helping kids improve
                  flexibility, coordination, and balance while enhancing focus
                  and mindfulness for overall well-being.
                </p>
              </div>
              <div className="feature-item mb-5 bg-neutral-100 p-7 rounded-4 hover-up">
                <div className="icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
                  <div className="icon">
                    <img
                      className="filter-invert"
                      src="/assets/imgs/service-1/icon-5.svg"
                      alt="infinia"
                    />
                  </div>
                </div>
                <h4>Academic Support</h4>
                <p>
                  Movement-based learning through yoga improves memory,
                  concentration, and cognitive skills, making it easier for kids
                  to stay focused and engaged in schoolwork.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="feature-item mb-5 bg-neutral-100 p-7 rounded-4 hover-up">
                <div className="icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
                  <div className="icon">
                    <img
                      className="filter-invert"
                      src="/assets/imgs/service-1/icon-4.svg"
                      alt="infinia"
                    />
                  </div>
                </div>
                <h4>Physical Fitness</h4>
                <p>
                  Age-appropriate yoga postures and breathing exercises build
                  strength, improve posture, and enhance motor skills, promoting
                  a healthy lifestyle.
                </p>
              </div>
              <div className="feature-item mb-5 bg-neutral-100 p-7 rounded-4 hover-up">
                <div className="icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
                  <div className="icon">
                    <img
                      className="filter-invert"
                      src="/assets/imgs/service-1/icon-3.svg"
                      alt="infinia"
                    />
                  </div>
                </div>
                <h4>Stress Relief</h4>
                <p>
                  Guided breathing exercises and mindfulness techniques teach
                  kids how to manage emotions, reduce anxiety, and handle
                  school-related stress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA 6 */}
      <section className="section-cta-6 position-relative section-padding fix">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 pe-lg-0">
              <div className="zoom-img rounded-end-lg-0 rounded-4">
                <img
                  className="rounded-end-lg-0 rounded-4"
                  src="/assets/imgs/cta-6/img-2.png"
                  alt="my-yoga-network"
                />
              </div>
            </div>
            <div className="col-12 col-lg-6 ps-lg-0 align-self-stretch">
              <div className="bg-white p-md-8 p-5 rounded-start-lg-0 h-100 rounded-4 mt-lg-0 mt-5 border border-start-lg-0 shadow-1">
                <div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill mb-2 px-4 py-2">
                  <img
                    src="/assets/imgs/features-1/dots.png"
                    alt="my-yoga-network"
                  />
                  <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
                    Meet The Teacher
                  </span>
                </div>
                <h1 className="fs-1">
                  Discover Yoga with Claudia, Your Dedicated Instructor!
                </h1>
                <p className="mb-9">
                  I started my yoga journey seeking a coping tool and a good
                  stretch, but I fell in love with sharing this practice with
                  those who thought yoga wasn’t for them—especially
                  preschoolers, laying the foundation for future yogis! My
                  classes, including Family Yoga, Baby & Me, and Little Yogis
                  (ages 3-5), foster mind-body connection and social bonding.
                  With a background in children’s mental health, I offer a
                  sensitive approach to handle big emotions, adapting to your
                  style and needs. Classes are available in Spanish, and I also
                  cater to adults alongside my school-aged clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial-1 */}
      <section className="section-testimonial-1 pb-120 @@classList position-relative">
        <div className="container position-relative z-1">
          <div className="row">
            <div className="col-lg-4">
              <div className="pe-8 mt-10">
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
                    Testimonials
                  </span>
                </div>
                <h3
                  className="ds-3 mt-3 mb-3"
                  data-aos="fade-zoom-in"
                  data-aos-delay={100}
                >
                  Feedback From Our Clients
                </h3>
                <span
                  className="fs-5 fw-medium"
                  data-aos="fade-zoom-in"
                  data-aos-delay={300}
                >
                  Hear what parents in Long Beach, CA say about our kids' yoga
                  programs! 🔥
                </span>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="bg-neutral-100 p-5 mt-8 rounded-3 position-relative card-hover"
                data-aos="fade-zoom-in"
                data-aos-delay={100}
              >
                <p className="text-900">
                  "My 6-year-old daughter absolutely loves her yoga classes! She
                  used to struggle with focus, but after just a few weeks, I’ve
                  noticed a huge improvement in her concentration and
                  confidence. The instructors are amazing, and the classes are
                  so much fun!"
                </p>
                <div className="d-flex align-items-center mt-5">
                  <img
                    className="avatar-lg"
                    src="/assets/imgs/testimonial-1/avatar-2.png"
                    alt="my-yoga-network"
                  />
                  <div className="d-flex flex-column">
                    <h6 className="ms-3 fs-6 mb-0">Jessica R.</h6>
                    <div className="flag ms-3">
                      <span className="fs-8">Long Beach, CA</span>
                    </div>
                  </div>
                </div>
                <Link
                  href="#"
                  className="position-absolute top-0 start-0 end-0 bottom-0"
                />
              </div>
              <div
                className="bg-neutral-100 p-5 mt-5 rounded-3 position-relative card-hover"
                data-aos="fade-zoom-in"
                data-aos-delay={200}
              >
                <p className="text-900">
                  "We were looking for an activity that would help our son relax
                  and manage his emotions better. Kids yoga at My Yoga Network
                  has been a game-changer! He’s learned breathing exercises that
                  help him calm down, and he actually looks forward to every
                  session."
                </p>
                <div className="d-flex align-items-center mt-5">
                  <img
                    className="avatar-lg"
                    src="/assets/imgs/testimonial-1/avatar-1.png"
                    alt="my-yoga-network"
                  />
                  <div className="d-flex flex-column">
                    <h6 className="ms-3 fs-6 mb-0">David M.</h6>
                    <div className="flag ms-3">
                      <span className="fs-8">Long Beach, CA</span>
                    </div>
                  </div>
                </div>
                <Link
                  href="#"
                  className="position-absolute top-0 start-0 end-0 bottom-0"
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="bg-neutral-100 p-5 mt-5 mt-lg-0 rounded-3 position-relative card-hover"
                data-aos="fade-zoom-in"
                data-aos-delay={300}
              >
                <p className="text-900">
                  "I love that the classes are engaging, interactive, and
                  age-appropriate. My 4-year-old enjoys the storytelling and
                  playful poses, while my 9-year-old is learning real
                  mindfulness techniques. It’s been such a positive experience
                  for both of them!"
                </p>
                <div className="d-flex align-items-center mt-5">
                  <img
                    className="avatar-lg"
                    src="/assets/imgs/testimonial-1/avatar-3.png"
                    alt="my-yoga-network"
                  />
                  <div className="d-flex flex-column">
                    <h6 className="ms-3 fs-6 mb-0">Sarah L.</h6>
                    <div className="flag ms-3">
                      <span className="fs-8">Long Beach, CA</span>
                    </div>
                  </div>
                </div>
                <Link
                  href="#"
                  className="position-absolute top-0 start-0 end-0 bottom-0"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="position-absolute top-0 start-0 z-0">
          <img
            src="/assets/imgs/testimonial-1/bg-line.png"
            alt="my-yoga-network"
          />
        </div>
      </section>
    </>
  );
}
