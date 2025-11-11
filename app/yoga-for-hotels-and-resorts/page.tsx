"use client";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { useState } from "react";
import CountUp from "react-countup";
export default function HotelPage() {
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
                    <span className="fw-bold">Hotels & Resorts.</span>
                  </h4>
                  <p className="fs-5">
                    Seamlessly integrate professional yoga sessions to enhance
                    relaxation and guest satisfaction.
                  </p>
                  <Link
                    href="https://calendly.com/ram-myyoganetwork/up-to-60min"
                    target="_blank"
                    className="btn btn-outline-secondary hover-up bg-transparent mt-5"
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
                    <span className="fw-bold">
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
                      alt="Make your hotel stand out"
                    />
                    <div className="position-absolute top-50 start-50 translate-middle z-0">
                      <div className="box-gradient-2 position-relative bg-linear-1 rounded-4 z-0"></div>
                    </div>
                    <img
                      className="position-absolute top-100 start-0 d-none d-md-block translate-middle rounded-4 border border-2 border-white position-relative z-1"
                      src="/assets/imgs/features-5/img-3.png"
                      alt="Make your resort stand out"
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
          <div className="container position-relative z-1">
            <div className="text-center mb-8">
              <h3 className="ds-5 my-3 fw-black"> Our Services</h3>
              <p className="fs-5 mb-0">
                Tailored Yoga & Wellness Programs Designed for Hotel Guests.
              </p>
            </div>
          </div>
          <div className="container">
            <div className="row mt-6 position-relative">
              <div className="col-lg-4">
                <div className="p-2 mt-lg-8 rounded-4 shadow-1 bg-white position-relative z-1 hover-up">
                  <div className="card-service bg-white p-6 border rounded-4">
                    <h6 className="my-3">Monthly Program</h6>
                    <p className="mb-6">
                      Consistent monthly yoga and mindfulness sessions,
                      customized for your group, fostering balance, growth, and
                      sustained well-being.
                    </p>
                  </div>
                </div>
                <div className="p-2 mt-5 rounded-4 shadow-1 bg-white position-relative z-1 hover-up">
                  <div className="card-service bg-white p-6 border rounded-3">
                    <h6 className="my-3">On-Demand Special Events</h6>
                    <p className="mb-6">
                      Enhance any occasion with wellness retreats, corporate
                      sessions, and themed yoga workshops that inspire,
                      rejuvenate, and unite communities.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="p-2 mt-5 rounded-4 shadow-1 bg-white position-relative z-1 hover-up">
                  <div className="card-service bg-white p-6 border rounded-3">
                    <h6 className="my-3">Luxury Wellness Offerings</h6>
                    <p className="mb-6">
                      Exclusive one-on-one yoga training to complement spa and
                      concierge services, delivering a premium, tailored
                      wellness experience for guests.
                    </p>
                  </div>
                </div>
                <div className="p-2 mt-5 rounded-4 shadow-1 bg-white position-relative z-1 hover-up">
                  <div className="card-service bg-white p-6 border rounded-3">
                    <h6 className="my-3">Corporate Retreat Program</h6>
                    <p className="mb-6">
                      Half- or full-day retreats tailored to boost team
                      building, reduce stress, and promote workplace harmony.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="p-2 mt-lg-8 mt-5 rounded-4 shadow-1 bg-white position-relative z-1 hover-up hover-up">
                  <div className="card-service bg-white p-6 border rounded-3">
                    <h6 className="my-3">Mind & Body Coaching</h6>
                    <p className="mb-6">
                      Tailored yoga, meditation, and lifestyle coaching to
                      enhance mental clarity, resilience, and well-being for
                      your team.
                    </p>
                  </div>
                </div>
                <div className="p-2 mt-5 rounded-4 shadow-1 bg-white position-relative z-1 hover-up">
                  <div className="card-service bg-white p-6 border rounded-3">
                    <h6 className="my-3">Virtual Wellness Hub</h6>
                    <p className="mb-6">
                      Enjoy live and on-demand yoga sessions, wellness guides,
                      and community support, available anytime for your
                      organization.
                    </p>
                  </div>
                </div>
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
                            Flexible & Scalable Solutions
                          </h5>
                          <p className="text-white mb-0">
                            Adaptable to any hotel or resort’s wellness program,
                            space, and schedule.
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
                            Marketing & Promotion Support
                          </h5>
                          <p className="text-white mb-0">
                            Leverage our expertise to showcase your yoga
                            offerings on your website, social media, and booking
                            platforms.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-faqs-1 section-padding position-relative">
          <div className="container position-relative z-1">
            <div className="text-center mb-8">
              <h3 className="ds-5 my-3 fw-black">Frequently Asked Questions</h3>
              <p className="fs-5 mb-0">
                Find Answers About Bringing Yoga & Wellness to Your Hotel.
              </p>
            </div>
          </div>
          <div className="container position-relative z-2">
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
                        <h6 className="m-0">
                          What equipment is needed for yoga classes at my hotel?
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
                      id="collapse01"
                      className={
                        activeItem == 1
                          ? "accordion-collapse collapse show"
                          : "accordion-collapse collapse"
                      }
                      data-bs-parent=".accordion"
                    >
                      <p className="ps-0 card-body">
                        We recommend providing yoga mats, blocks, straps, and
                        cushions. Depending on the space, additional items like
                        blankets or towels may be useful. We can provide the
                        equipment or help you source it.{" "}
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
                          Are yoga classes suitable for all levels of guests?
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
                        Yes, our yoga programs are designed to accommodate all
                        levels. Whether your guests are beginners or experienced
                        practitioners, we tailor the sessions to ensure everyone
                        has a positive experience.{" "}
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
                          How do I integrate yoga classes into my existing hotel
                          offerings?
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
                        Integrating yoga into your hotel is simple. We’ll help
                        you choose the right spaces, set up a schedule, and
                        create a seamless experience for your guests. We also
                        offer marketing support to promote your new wellness
                        offerings.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
