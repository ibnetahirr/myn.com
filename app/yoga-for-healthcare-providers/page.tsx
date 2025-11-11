"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";


export default function HealthPage() {
// Accordion
  const [activeItem, setActiveItem] = useState(1);

  const handleActiveItem = (index: any) => {
    setActiveItem(index);
  };

  return (
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
                    src="/assets/imgs/healthcare/hero.webp"
                    alt="HealthCare"
                  />
                  <div className="box-gradient-1 ms-lg-8 position-absolute bottom-0 start-0 bg-linear-1 rounded-4 z-0" />
                </div>
              </div>
              <div className="col-lg-6 offset-lg-1 mt-lg-0 mt-5">
                <h4 className="ds-4 fw-regular">
                  Empower Your{" "}
                  <span
                    className="fw-bold"
                  >
                    Healthcare Facility
                  </span>{" "}
                  with Personalized Yoga Solutions
                </h4>
                <p className="fs-5">
                  Holistic Healing Through Yoga for Patients in Healthcare
                  Facilities.
                </p>
              </div>
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
                   Benefits of Yoga for Patient Wellness
                  </h2>
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
                           Pain Relief
                          </h5>
                          <p className="text-white mb-0">
                           Yoga helps patients reduce the intensity of pain, offering relief from chronic pain conditions and post- surgery discomfort.
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
                           Accelerated Recovery
                          </h5>
                          <p className="text-white mb-0">
                           Therapeutic yoga supports the healing process, improving strength, flexibility, and mobility.
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
                           Mental Health Support
                          </h5>
                          <p className="text-white mb-0">
                           Yoga can alleviate feelings of anxiety, depression, and stress, helping patients navigate the emotional aspects of recovery.
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
                           Improved Sleep
                          </h5>
                          <p className="text-white mb-0">
                           Relaxing yoga practices help patients sleep better, which is crucial for overall healing.
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
                            Increased Mobility
                          </h5>
                          <p className="text-white mb-0">
                           Gentle stretches and movements help restore flexibility and joint health.
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
                Everything You Need to Know About Our Healthcare Wellness Programs.
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
Are the yoga sessions safe for all patients?
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
                       Our instructors are highly trained to provide safe and gentle yoga practices, and we tailor each session to the specific health conditions and recovery stages of your patients.


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
How long are the yoga sessions?

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
                       Sessions typically range from 30 to 60 minutes, depending on the patients’ needs and the program's goals.


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
                         Can yoga help patients with chronic pain?


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
                      Yes! Therapeutic yoga can significantly reduce pain by improving flexibility, promoting muscle relaxation, and helping patients cope with discomfort.


                      </p>
                    </div>
                  </div>
                   <div className="mb-3 card p-3 border  bg-white rounded-2 shadow-2">
                  <div className="px-0 card-header border-0 bg-gradient-1">
                    <a
                      className={` ${activeItem} == 4 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`}
                      onClick={() => handleActiveItem(4)}
                      data-bs-toggle="collapse"
                    >
                      <h6 className="m-0">Do we need any special equipment for patient yoga sessions?</h6>
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
                    id="collapse04"
                    className={
                      activeItem == 4
                        ? "accordion-collapse collapse show"
                        : "accordion-collapse collapse"
                    }
                    data-bs-parent=".accordion"
                  >
                    <p className="ps-0 card-body">
                     No special equipment is required. Our instructors adapt sessions based on the facility's resources.


                    </p>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </section>

     
    </Layout>
  );
}
