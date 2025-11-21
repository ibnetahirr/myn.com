"use client";
import Contact1 from "@/components/sections/Contact1";

export default function Content() {

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
                    src="/assets/imgs/healthcare/hero.webp"
                    alt="HealthCare"
                  />
                  <div className="box-gradient-1 ms-lg-8 position-absolute bottom-0 start-0 bg-linear-1 rounded-4 z-0" />
                </div>
              </div>
              <div className="col-lg-6 offset-lg-1 mt-lg-0 mt-5">
                <h4 className="ds-4 fw-regular">
                  Your Partner in Bringing Therapeutic Yoga to{" "}
                  <span className="fw-bold">Healthcare </span>Settings
                </h4>
                <p className="fs-5">
                  We collaborate with hospitals, clinics, rehabilitation
                  centers, and behavioral health programs to deliver
                  patient-centered yoga and mind–body interventions that support
                  recovery, reduce stress, and improve quality of life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="section-padding">
          <div className="container position-relative z-1">
            <div className="text-center mb-8 mx-auto">
              <h3 className="my-3 fw-black">
                Our Yoga Programs for Patient Wellness
              </h3>
              <p className="fs-5 mb-0">
                Evidence-informed, clinically sensitive programs tailored to
                real healthcare environments.
              </p>
            </div>
          </div>

          <div className="container">
            <div
              className="row align-items-center pb-5 pt-lg-5 pt-0"
              style={{ maxWidth: "1100px", margin: "0 auto" }}
            >
              {/* TEXT */}
              <div className="col-lg-5 order-2 order-lg-1 mt-lg-0 mt-10">
                <div className="mb-4">
                  <h4 className="fw-bold">
                    Therapeutic Yoga for Specific Conditions
                  </h4>
                  <p>
                    We design sessions that align with patient needs, mobility
                    levels, and medical considerations. Programs support
                    patients experiencing:
                  </p>
                </div>
                <ul className="fs-5 ps-3">
                  <li>Chronic pain or limited mobility</li>
                  <li>Anxiety, depression, emotional distress</li>
                  <li>PTSD or trauma-related symptoms</li>
                  <li>Post-surgical recovery</li>
                  <li>Respiratory challenges</li>
                  <li>Sleep disturbances</li>
                </ul>
                <p className="fs-5">
                  Each session is adapted for clinical safety, therapeutic
                  pacing, and accessibility—seated, bed-based, or
                  chair-supported as needed.
                </p>
              </div>
              {/* IMAGE */}
              <div className="col-lg-6 offset-lg-1 order-1 order-lg-2 text-lg-end text-center mt-5 mt-lg-0 d-flex justify-content-center justify-content-lg-end">
                <div className="photo-description position-relative rounded-4 d-inline-block">
                  <img
                    className="rounded-4 border border-2 border-white position-relative z-1 img-fluid"
                    src="/assets/imgs/healthcare/1.webp"
                    alt="Therapeutic Yoga for Specific Conditions"
                    style={{ maxWidth: "460px" }}
                  />
                </div>
              </div>
            </div>

            <div
              className="row align-items-center pb-5 pt-lg-5 pt-0"
              style={{ maxWidth: "1100px", margin: "0 auto" }}
            >
              {/* IMAGE (Left) */}
              <div className="col-lg-6 order-1 order-lg-1 text-center text-lg-start d-flex justify-content-center justify-content-lg-start mt-5 mt-lg-0">
                <div className="photo-description position-relative rounded-4 d-inline-block">
                  <img
                    className="rounded-4 border border-2 border-white position-relative z-1 img-fluid"
                    src="/assets/imgs/healthcare/2.webp"
                    alt="Mind–Body Healing for Emotional & Physical Recovery"
                    style={{ maxWidth: "460px" }}
                  />
                </div>
              </div>

              {/* TEXT (Right) */}
              <div className="col-lg-5 offset-lg-1 order-2 order-lg-2 mt-lg-0 mt-10">
                <div className="mb-4">
                  <h4 className="fw-bold">
                    Mind–Body Healing for Emotional & Physical Recovery
                  </h4>
                  <p>
                    These programs integrate gentle movement, therapeutic
                    breathing, and relaxation techniques to help patients:
                  </p>
                </div>
                <ul className="fs-5 ps-3">
                  <li>Regulate the nervous system</li>
                  <li>Reduce stress and anxiety</li>
                  <li>Improve respiratory function</li>
                  <li>Reconnect with the body</li>
                  <li>Build emotional resilience</li>
                </ul>
                <p className="fs-5">
                  This mind–body approach effectively complements traditional
                  treatment plans.
                </p>
              </div>
            </div>

            <div
              className="row align-items-center pb-5 pt-lg-5 pt-0"
              style={{ maxWidth: "1100px", margin: "0 auto" }}
            >
              {/* TEXT */}
              <div className="col-lg-5 order-2 order-lg-1 mt-lg-0 mt-10">
                <div className="mb-4">
                  <h4 className="fw-bold">
                    Group Classes & Individual Patient Sessions
                  </h4>
                  <p>
                    Flexible delivery formats allow integration into multiple
                    care units.
                  </p>
                </div>

                <ul className="fs-5 ps-3">
                  <li>
                    <span className="fw-bold">Group Sessions</span>
                    <br />
                    Ideal for rehab units, long-term care, wellness programming,
                    and behavioral health groups.
                  </li>
                  <li>
                    <span className="fw-bold">Individual Sessions</span>
                    <br />
                    Perfect for patients needing one-on-one therapeutic
                    attention, mobility support, or trauma-sensitive care.
                  </li>
                </ul>
                <p className="fs-5">
                  All sessions are risk-aware, clinically sensitive, and
                  tailored to patient limitations and recovery goals.{" "}
                </p>
              </div>
              {/* IMAGE */}
              <div className="col-lg-6 offset-lg-1 order-1 order-lg-2 text-lg-end text-center mt-5 mt-lg-0 d-flex justify-content-center justify-content-lg-end">
                <div className="photo-description position-relative rounded-4 d-inline-block">
                  <img
                    className="rounded-4 border border-2 border-white position-relative z-1 img-fluid"
                    src="/assets/imgs/healthcare/3.webp"
                    alt="Group Classes & Individual Patient Sessions"
                    style={{ maxWidth: "460px" }}
                  />
                </div>
              </div>
            </div>

            <div
              className="row align-items-center pb-5 pt-lg-5 pt-0"
              style={{ maxWidth: "1100px", margin: "0 auto" }}
            >
              {/* IMAGE (Left) */}
              <div className="col-lg-6 order-1 order-lg-1 text-center text-lg-start d-flex justify-content-center justify-content-lg-start mt-5 mt-lg-0">
                <div className="photo-description position-relative rounded-4 d-inline-block">
                  <img
                    className="rounded-4 border border-2 border-white position-relative z-1 img-fluid"
                    src="/assets/imgs/healthcare/4.webp"
                    alt="Flexible Program Structures"
                    style={{ maxWidth: "460px" }}
                  />
                </div>
              </div>

              {/* TEXT (Right) */}
              <div className="col-lg-5 offset-lg-1 order-2 order-lg-2 mt-lg-0 mt-10">
                <div className="mb-4">
                  <h4 className="fw-bold">Flexible Program Structures</h4>
                  <p>
                    Programs designed to plug easily into existing healthcare
                    operations:
                  </p>
                </div>

                <ul className="fs-5 ps-3">
                  <li>
                    Weekly Therapeutic Programs – integrated into ongoing
                    patient routines
                  </li>
                  <li>
                    Monthly Wellness Plans – ideal for chronic care and
                    long-term facilities
                  </li>
                  <li>
                    One-Off Therapeutic Sessions – wellness days, patient
                    engagement events
                  </li>
                  <li>
                    Trial / Pilot Programs – evaluate benefits before long-term
                    adoption
                  </li>
                </ul>
                <p className="fs-5">
                  Each includes instructor management, scheduling,
                  documentation, and session reporting—minimizing workload for
                  your staff.
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
            <h3 className="my-3 fw-black">
              Benefits of Therapeutic Yoga for Healthcare Facilities
            </h3>
          </div>
        </div>
        <div className="container">
          <div className="row mt-6 position-relative">
            <div className="col-lg-4">
              <div className="p-2 mt-lg-8 rounded-4 shadow-1 bg-white position-relative z-1 hover-up">
                <div className="card-service bg-white p-6 border rounded-4">
                  <h6 className="my-3">Clinical Outcomes</h6>
                  <p className="mb-6">
                    Reduced pain perception Improved mobility & functional
                    recovery Better sleep & relaxation patterns
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="p-2 mt-5 rounded-4 shadow-1 bg-white position-relative z-1 hover-up">
                <div className="card-service bg-white p-6 border rounded-3">
                  <h6 className="my-3">Emotional & Psychological Support</h6>
                  <p className="mb-6">
                    Reduced anxiety & depressive symptoms Strengthened coping
                    mechanisms Increased emotional regulation
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="p-2 mt-5 rounded-4 shadow-1 bg-white position-relative z-1 hover-up">
                <div className="card-service bg-white p-6 border rounded-3">
                  <h6 className="my-3">Patient Experience Metrics</h6>
                  <p className="mb-6">
                    Higher satisfaction scores Stronger engagement with wellness
                    services Positive feedback on care environment
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
                  Why Healthcare Providers Choose My Yoga Network
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
                          Clinically Sensitive Programming
                        </h5>
                        <p className="text-white mb-0">
                          Designed around safety, accessibility, and
                          trauma-informed care.
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
                          Vetted, Healthcare-Ready Instructors
                        </h5>
                        <p className="text-white mb-0">
                          Certified, insured professionals experienced with
                          chronic conditions, mobility limitations, and
                          emotional-sensitive populations.
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
                          Turnkey Integration With Minimal Administrative
                          Workload
                        </h5>
                        <p className="text-white mb-0">
                          We manage scheduling, staffing, delivery, equipment,
                          and reporting.
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
                          Flexible & Scalable Models
                        </h5>
                        <p className="text-white mb-0">
                          Adaptable to patient volumes, care units, and
                          facility-specific goals.
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
                          Aligned With Modern Healthcare Priorities
                        </h5>
                        <p className="text-white mb-0">
                          Supports whole-person care, patient satisfaction
                          goals, and wellness innovations.
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
            <h3 className="my-3 fw-black">Frequently Asked Questions</h3>
            <p className="fs-5 mb-0">
              Everything You Need to Know About Our Healthcare Wellness
              Programs.
            </p>
          </div>
        </div>

        <div className="container position-relative z-2">
          <div className="row align-items-center">
            <div className="col-lg-12 mt-lg-0 mt-8 ">
              {/* FAQ 1 */}
              <div className="mb-3 card p-3 border bg-white rounded-2 shadow-2">
                <div className="px-0 border-0">
                  <div className="text-900 fw-bold d-flex align-items-center">
                    <h6 className="m-0">
                      Are the yoga sessions safe for all patients?
                    </h6>
                  </div>
                </div>
                <div className="card-body ps-0">
                  <p className="mb-0">
                    Our instructors are highly trained to provide safe and
                    gentle yoga practices, and we tailor each session to the
                    specific health conditions and recovery stages of your
                    patients.
                  </p>
                </div>
              </div>

              {/* FAQ 2 */}
              <div className="mb-3 card p-3 border bg-white rounded-2 shadow-2">
                <div className="px-0 border-0">
                  <div className="text-900 fw-bold d-flex align-items-center">
                    <h6 className="m-0">How long are the yoga sessions?</h6>
                  </div>
                </div>
                <div className="card-body ps-0">
                  <p className="mb-0">
                    Sessions typically range from 30 to 60 minutes, depending on
                    the patients’ needs and the program's goals.
                  </p>
                </div>
              </div>

              {/* FAQ 3 */}
              <div className="mb-3 card p-3 border bg-white rounded-2 shadow-2">
                <div className="px-0 border-0">
                  <div className="text-900 fw-bold d-flex align-items-center">
                    <h6 className="m-0">
                      Can yoga help patients with chronic pain?
                    </h6>
                  </div>
                </div>
                <div className="card-body ps-0">
                  <p className="mb-0">
                    Yes! Therapeutic yoga can significantly reduce pain by
                    improving flexibility, promoting muscle relaxation, and
                    helping patients cope with discomfort.
                  </p>
                </div>
              </div>

              {/* FAQ 4 */}
              <div className="mb-3 card p-3 border bg-white rounded-2 shadow-2">
                <div className="px-0 border-0">
                  <div className="text-900 fw-bold d-flex align-items-center">
                    <h6 className="m-0">
                      Do we need any special equipment for patient yoga
                      sessions?
                    </h6>
                  </div>
                </div>
                <div className="card-body ps-0">
                  <p className="mb-0">
                    No special equipment is required. Our instructors adapt
                    sessions based on the facility's resources.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact1 />
    </>
  );
}
