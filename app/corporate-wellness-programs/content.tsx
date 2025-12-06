"use client";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (opts: { url: string }) => void;
    };
  }
}

import Contact1 from "@/components/sections/Contact1";

export default function Content() {
  const handleClick = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/ram-myyoganetwork/new-meeting",
      });
    } else {
      console.warn("Calendly script not loaded yet");
    }
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
                    src="/assets/imgs/workplace/hero.webp"
                    alt="Hotels"
                  />
                  <div className="box-gradient-1 ms-lg-8 position-absolute bottom-0 start-0 bg-linear-1 rounded-4 z-0" />
                </div>
              </div>
              <div className="col-lg-6 offset-lg-1 mt-lg-0 mt-5">
                <h4 className="ds-4 fw-regular">
                  Mind–Body Wellness for{" "}
                  <span className="fw-bold">Modern Organizations</span>
                </h4>
                <p className="fs-5">
                  Build a healthier, happier, and more productive workforce with
                  curated yoga, mindfulness, and human performance
                  programs—delivered on-site or virtually. My Yoga Network
                  partners with organizations to reduce stress, improve team
                  morale, and strengthen overall performance.
                </p>
                <button onClick={handleClick} className="btn btn-gradient mt-5">
                  BOOK A CONSULTATION
                </button>
              </div>
              <div className="row pt-lg-150 pt-8 text-center d-none d-md-block">
                <div className="text-center mb-8 mx-auto">
                  <h3 className="my-3 fw-black">
                    Proudly Serving Leading Corporates & Organizations
                  </h3>
                </div>
                <div className="col-lg-10 col mx-lg-auto">
                  <div className="compatible-group bg-white p-5 mt-5">
                    <div className="row row-cols-2 row-cols-md-3 gy-5 gx-4 text-center">
                      <div className="col">
                        <div className="compatible hover-up">
                          <img
                            src="/assets/imgs/clients/california-endowment.png"
                            alt="California Endowment"
                            height={70}
                          />
                        </div>
                      </div>

                      <div className="col">
                        <div className="compatible hover-up">
                          <img
                            src="/assets/imgs/clients/lb-public-library-foundation.png"
                            alt="Long beach Public Library Foundation"
                            height={70}
                          />
                        </div>
                      </div>

                      <div className="col">
                        <div className="compatible hover-up">
                          <img
                            src="/assets/imgs/clients/california-psychological-association.png"
                            alt="California Psychological Association"
                            height={70}
                          />
                        </div>
                      </div>

                      <div className="col">
                        <div className="compatible hover-up">
                          <img
                            src="/assets/imgs/clients/county-of-los-angeles.png"
                            alt="County of Los Angeles"
                            height={100}
                          />
                        </div>
                      </div>

                      <div className="col">
                        <div className="compatible hover-up">
                          <img
                            src="/assets/imgs/clients/intex.png"
                            alt="Intex"
                            height={100}
                          />
                        </div>
                      </div>

                      <div className="col">
                        <div className="compatible hover-up">
                          <img
                            src="/assets/imgs/clients/institutes/osher-life-long-learning-institute.png"
                            alt="Osher"
                            height={100}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Wellness Matters */}
      <section className="section-padding">
        <div className="container position-relative z-1">
          <div className="text-center mb-8">
            <h3 className="my-3 fw-black">
              Why Corporate Wellness Matters Now
            </h3>
            <p className="fs-5 mb-0">
              Burnout, turnover, and mental fatigue are costing companies more
              than ever.
              <br />
              Employees expect employers to support wellbeing, and organizations
              that do see measurable gains in
            </p>
          </div>
        </div>
        <div className="container">
          <div className="row mt-6 position-relative">
            <div className="col-lg-4">
              <div className="p-2 mt-lg-5 rounded-4 shadow-1 bg-white position-relative z-1 hover-up">
                <div className="card-service bg-white p-6 border rounded-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={60}
                    height={60}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    {/* Main big star */}
                    <path
                      d="M12 3L13.8 8H19L14.8 11L16.3 16L12 13L7.7 16L9.2 11L5 8H10.2L12 3Z"
                      fill="#F5C542" /* GOLD */
                      stroke="#F5C542" /* DARKER GOLD OUTLINE */
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    {/* Left small star */}
                    <path
                      d="M4.5 10.5L5.2 12.5H7L5.6 13.6L6.2 15.5L4.5 14.3L2.8 15.5L3.4 13.6L2 12.5H3.8L4.5 10.5Z"
                      fill="#F5C542" /* GOLD */
                      stroke="#F5C542" /* DARKER GOLD OUTLINE */
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    {/* Right small star */}
                    <path
                      d="M19.5 10.5L20.2 12.5H22L20.6 13.6L21.2 15.5L19.5 14.3L17.8 15.5L18.4 13.6L17 12.5H18.8L19.5 10.5Z"
                      fill="#F5C542" /* GOLD */
                      stroke="#F5C542" /* DARKER GOLD OUTLINE */
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <h6 className="my-3">Productivity & Performance Boost</h6>
                  <p className="mb-6">
                    Corporate wellness strengthens employee focus, mental
                    clarity, and emotional balance. Teams perform better, stay
                    more engaged, and collaborate more effectively when their
                    wellbeing is supported.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="p-2 mt-lg-5 shadow-1 bg-white position-relative z-1 hover-up">
                <div className="card-service bg-white p-6 border rounded-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={60}
                    height={60}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    {/* Main big star */}
                    <path
                      d="M12 3L13.8 8H19L14.8 11L16.3 16L12 13L7.7 16L9.2 11L5 8H10.2L12 3Z"
                      fill="#F5C542" /* GOLD */
                      stroke="#F5C542" /* DARKER GOLD OUTLINE */
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    {/* Left small star */}
                    <path
                      d="M4.5 10.5L5.2 12.5H7L5.6 13.6L6.2 15.5L4.5 14.3L2.8 15.5L3.4 13.6L2 12.5H3.8L4.5 10.5Z"
                      fill="#F5C542" /* GOLD */
                      stroke="#F5C542" /* DARKER GOLD OUTLINE */
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    {/* Right small star */}
                    <path
                      d="M19.5 10.5L20.2 12.5H22L20.6 13.6L21.2 15.5L19.5 14.3L17.8 15.5L18.4 13.6L17 12.5H18.8L19.5 10.5Z"
                      fill="#F5C542" /* GOLD */
                      stroke="#F5C542" /* DARKER GOLD OUTLINE */
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <h6 className="my-3">Attendance & Retention Gains</h6>
                  <p className="mb-6">
                    Organizations that invest in wellbeing see improved
                    attendance, reduced stress-related absences, and stronger
                    employee loyalty. This translates into lower turnover and a
                    more stable workforce.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="p-2 mt-lg-5 rounded-4 shadow-1 bg-white position-relative z-1 hover-up hover-up">
                <div className="card-service bg-white p-6 border rounded-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={60}
                    height={60}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    {/* Main big star */}
                    <path
                      d="M12 3L13.8 8H19L14.8 11L16.3 16L12 13L7.7 16L9.2 11L5 8H10.2L12 3Z"
                      fill="#F5C542" /* GOLD */
                      stroke="#F5C542" /* DARKER GOLD OUTLINE */
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    {/* Left small star */}
                    <path
                      d="M4.5 10.5L5.2 12.5H7L5.6 13.6L6.2 15.5L4.5 14.3L2.8 15.5L3.4 13.6L2 12.5H3.8L4.5 10.5Z"
                      fill="#F5C542" /* GOLD */
                      stroke="#F5C542" /* DARKER GOLD OUTLINE */
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    {/* Right small star */}
                    <path
                      d="M19.5 10.5L20.2 12.5H22L20.6 13.6L21.2 15.5L19.5 14.3L17.8 15.5L18.4 13.6L17 12.5H18.8L19.5 10.5Z"
                      fill="#F5C542" /* GOLD */
                      stroke="#F5C542" /* DARKER GOLD OUTLINE */
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <h6 className="my-3">Culture & Team Morale Upgrade</h6>
                  <p className="mb-6">
                    Wellness programs build a calmer, more connected
                    environment. Employees feel valued, team morale increases,
                    and your employer brand becomes stronger—helping you attract
                    and keep top talent.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="section-padding">
          <div className="container position-relative z-1">
            <div className="text-center mb-8 mx-auto">
              <h3 className="my-3 fw-black">Our Corporate Wellness Services</h3>
              <p className="fs-5 mb-0">
                Science-backed, easy to implement, and tailored for teams of all
                sizes.
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
                  <h4 className="fw-bold">Weekly Corporate Wellness Classes</h4>
                  <p>
                    Consistent movement and mindfulness built into the workweek
                    to support mental clarity and physical health.
                  </p>
                </div>
                <p className="fs-5 mb-0 fw-bold">Session formats:</p>

                <ul className="fs-5 ps-3">
                  <li>Yoga (Slow Flow, Vinyasa, Gentle)</li>
                  <li>Desk Yoga & Mobility Breaks</li>
                  <li>Meditation & Breathwork</li>
                  <li>Pilates & Core Strength</li>
                  <li>Stretch & Relax Sessions</li>
                </ul>
                <p>
                  <span className="fw-bold">Outcome:</span>Reduce stiffness and
                  anxiety, improve posture and focus, and counteract screen
                  fatigue; naturally boosting productivity.
                </p>
              </div>
              {/* IMAGE */}
              <div className="col-lg-6 offset-lg-1 order-1 order-lg-2 text-lg-end text-center mt-5 mt-lg-0 d-flex justify-content-center justify-content-lg-end">
                <div className="photo-description position-relative rounded-4 d-inline-block">
                  <img
                    className="rounded-4 border border-2 border-white position-relative z-1 img-fluid"
                    src="/assets/imgs/workplace/1.webp"
                    alt="Weekly Corporate Wellness Classes"
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
                    src="/assets/imgs/workplace/2.webp"
                    alt="Workplace Mindfulness & Mental Wellness Sessions"
                    style={{ maxWidth: "460px" }}
                  />
                </div>
              </div>

              {/* TEXT (Right) */}
              <div className="col-lg-5 offset-lg-1 order-2 order-lg-2 mt-lg-0 mt-10">
                <div className="mb-4">
                  <h4 className="fw-bold">
                    Workplace Mindfulness & Mental Wellness Sessions
                  </h4>
                  <p>
                    Strengthen emotional regulation, cognitive performance, and
                    nervous system balance.
                  </p>
                </div>
                <p className="fs-5 mb-0 fw-bold">Program themes:</p>
                <ul className="fs-5 ps-3">
                  <li>Mindfulness for Focus & Decision-Making</li>
                  <li>Guided Meditation for Stress Relief</li>
                  <li>Breathwork for Energy & Calm</li>
                  <li>Innovation Through Mindfulness</li>
                  <li>Midday Reset Sessions</li>
                </ul>
                <p>
                  <span className="fw-bold">Outcome:</span>Better thinking,
                  better communication, and better leadership across the
                  organization.
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
                    Human Performance & Productivity Workshops
                  </h4>
                  <p>
                    Interactive, high-impact sessions that help employees
                    perform at their best.
                  </p>
                </div>

                <p className="fs-5 mb-0 fw-bold">Workshop themes:</p>
                <ul className="fs-5 ps-3">
                  <li>Movement & Mindset for High Performance</li>
                  <li>Time & Stress Management</li>
                  <li>Positive Thinking & Resilience Training</li>
                  <li>Functional Mobility for Desk Workers</li>
                  <li>Leadership Through Stillness </li>
                  <li>Creativity, Visioning & Goal-Setting </li>
                </ul>
                <p>
                  <span className="fw-bold">Outcome:</span>Equip teams with
                  tools for resilience, productivity, and sustainable high
                  performance.
                </p>
              </div>
              {/* IMAGE */}
              <div className="col-lg-6 offset-lg-1 order-1 order-lg-2 text-lg-end text-center mt-5 mt-lg-0 d-flex justify-content-center justify-content-lg-end">
                <div className="photo-description position-relative rounded-4 d-inline-block">
                  <img
                    className="rounded-4 border border-2 border-white position-relative z-1 img-fluid"
                    src="/assets/imgs/workplace/3.webp"
                    alt="Human Performance & Productivity Workshops"
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
                    src="/assets/imgs/workplace/4.webp"
                    alt="Employee Wellness Events & Off-Sites"
                    style={{ maxWidth: "460px" }}
                  />
                </div>
              </div>

              {/* TEXT (Right) */}
              <div className="col-lg-5 offset-lg-1 order-2 order-lg-2 mt-lg-0 mt-10">
                <div className="mb-4">
                  <h4 className="fw-bold">
                    Employee Wellness Events & Off-Sites
                  </h4>
                  <p>
                    Turn team gatherings into meaningful, restorative
                    experiences that build connection.
                  </p>
                </div>
                <p className="fs-5 mb-0 fw-bold">Event options:</p>

                <ul className="fs-5 ps-3">
                  <li>Yoga + Sound Healing</li>
                  <li>Breathwork Immersion</li>
                  <li>Meditation Circles</li>
                  <li>Mindfulness Retreat-Style Sessions</li>
                  <li>Outdoor Mindfulness Walks</li>
                  <li>Resilience-Building Workshops</li>
                </ul>
                <p>
                  <span className="fw-bold">Outcome:</span>Stronger team
                  cohesion and a more human-centered workplace culture.
                </p>
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
                  The Business Impact of Workplace Wellness
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
                          Higher engagement and job satisfaction
                        </h5>
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
                          Reduced burnout and absenteeism
                        </h5>
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
                          Increased creativity and sharper problem-solving
                        </h5>
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
                          Stronger collaboration and workplace morale
                        </h5>
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
                          Improved retention and employer brand strength
                        </h5>
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
              Find Answers About Bringing Yoga & Wellness to Your Workplace.
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
                      Do we need a special space for on-site yoga?
                    </h6>
                  </div>
                </div>
                <div className="card-body ps-0">
                  <p className="mb-0">
                    Not at all. A conference room or open space is enough. We
                    can also provide chair yoga if space is limited.
                  </p>
                </div>
              </div>

              {/* FAQ 2 */}
              <div className="mb-3 card p-3 border bg-white rounded-2 shadow-2">
                <div className="px-0 border-0">
                  <div className="text-900 fw-bold d-flex align-items-center">
                    <h6 className="m-0">Are instructors certified?</h6>
                  </div>
                </div>
                <div className="card-body ps-0">
                  <p className="mb-0">
                    Absolutely. All our instructors are certified, experienced,
                    and trained in workplace-friendly practices.
                  </p>
                </div>
              </div>

              {/* FAQ 3 */}
              <div className="mb-3 card p-3 border bg-white rounded-2 shadow-2">
                <div className="px-0 border-0">
                  <div className="text-900 fw-bold d-flex align-items-center">
                    <h6 className="m-0">
                      Can we do a one-time session or event?
                    </h6>
                  </div>
                </div>
                <div className="card-body ps-0">
                  <p className="mb-0">
                    Yes! We offer one-time sessions for wellness weeks, events,
                    or retreats.
                  </p>
                </div>
              </div>

              {/* FAQ 4 */}
              <div className="mb-3 card p-3 border bg-white rounded-2 shadow-2">
                <div className="px-0 border-0">
                  <div className="text-900 fw-bold d-flex align-items-center">
                    <h6 className="m-0">How do we get started?</h6>
                  </div>
                </div>
                <div className="card-body ps-0">
                  <p className="mb-0">
                    Simply book a free consultation. We’ll take care of the
                    rest!
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
