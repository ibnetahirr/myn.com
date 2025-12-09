"use client";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (opts: { url: string }) => void;
    };
  }
}

import Brochure from "@/components/sections/Brochure";
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
                      src="/assets/imgs/hotels/hero.webp"
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
                    Create a wellness-focused stay with curated yoga,
                    mindfulness, and rejuvenation activities for guests of all
                    ages.
                  </p>
                  <button
                    onClick={handleClick}
                    className="btn btn-gradient mt-5"
                  >
                    BOOK A CONSULTATION
                  </button>
                  <Brochure/>
                </div>
                <div className="row pt-lg-150 pt-8 text-center d-none d-md-block">
                  <div className="text-center mb-8 mx-auto">
                    <h3 className="my-3 fw-black">
                      Proudly Serving Top-Tier Luxury Hotels and Resorts
                    </h3>
                  </div>
                  <div className="col-lg-10 col mx-lg-auto">
                    <div className="compatible-group bg-white p-5 mt-5">
                      <div className="row row-cols-2 row-cols-md-3 gy-5 gx-4 text-center">
                        <div className="col">
                          <div className="compatible hover-up">
                            <img
                              src="/assets/imgs/clients/hotels/westin.png"
                              alt="Westin"
                              height={60}
                            />
                          </div>
                        </div>

                        <div className="col">
                          <div className="compatible hover-up">
                            <img
                              src="/assets/imgs/clients/hotels/hilton.png"
                              alt="Hilton"
                              height={70}
                            />
                          </div>
                        </div>

                        <div className="col">
                          <div className="compatible hover-up">
                            <img
                              src="/assets/imgs/clients/hotels/aimbridge.png"
                              alt="Aimbridge"
                              height={70}
                            />
                          </div>
                        </div>

                        <div className="col">
                          <div className="compatible hover-up">
                            <img
                              src="/assets/imgs/clients/hotels/hyatt.png"
                              alt="Hyatt"
                              height={50}
                            />
                          </div>
                        </div>

                        <div className="col">
                          <div className="compatible hover-up">
                            <img
                              src="/assets/imgs/clients/hotels/dagny.png"
                              alt="The Dagny"
                              height={50}
                            />
                          </div>
                        </div>

                        <div className="col">
                          <div className="compatible hover-up">
                            <img
                              src="/assets/imgs/clients/hotels/highgate.webp"
                              alt="Highgate"
                              height={50}
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
                Why Wellness Matters for Your Hotel or Resort
              </h3>
              <p className="fs-5 mb-0">
                In today’s competitive hospitality landscape, wellness is more
                than a nice-to-have, it’s a differentiator. Guests expect
                memorable experiences, thoughtful amenities and genuine
                wellbeing. By offering on-site yoga and mindfulness programmes,
                hotels create powerful value:
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
                    <h6 className="my-3">Guest Experience Upgrade</h6>
                    <p className="mb-6">
                      Bespoke wellness offerings turn stays into storied stays,
                      increasing reviews, repeat bookings and word-of-mouth.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="p-2 mt-lg-5 rounded-4 shadow-1 bg-white position-relative z-1 hover-up">
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
                    <h6 className="my-3">Operational advantage</h6>
                    <p className="mb-6">
                      A calmer, healthier team means improved service delivery
                      and fewer stress-related issues among staff.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="p-2 mt-lg-5 rounded-4 shadow-1 bg-white position-relative z-1 hover-up">
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
                    <h6 className="my-3">Revenue diversification</h6>
                    <p className="mb-6">
                      Wellness classes, themed retreats, yoga-branded packages
                      and partner events open up additional income streams.
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
                <h3 className="my-3 fw-black">
                  Our Services for Hotels & Resorts
                </h3>
                <p className="fs-5 mb-0">
                  Deliver meaningful guest experiences with curated, on-site
                  wellness programs that elevate relaxation, engagement, and
                  brand differentiation.
                  <br /> All sessions are led by certified, insured instructors
                  and seamlessly tailored to your property’s ambience.
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
                      Regular Yoga & Wellness Offerings
                    </h4>
                    <p>Perfect for enhancing the guest experience with consistent, high-quality wellness touchpoints.
</p>
                  </div>
                  <ul className="fs-5 ps-3">
                    <li>Yoga, Pilates & Gentle Flow</li>
                    <li>Zumba or Dance Fitness</li>
                    <li>Aqua Yoga / Aqua Aerobics</li>
                    <li>Meditation & Deep Relaxation</li>
                    <li>Chair Yoga & Light Mobility</li>
                  </ul>
                </div>
                {/* IMAGE */}
                <div className="col-lg-6 offset-lg-1 order-1 order-lg-2 text-lg-end text-center mt-5 mt-lg-0 d-flex justify-content-center justify-content-lg-end">
                  <div className="photo-description position-relative rounded-4 d-inline-block">
                    <img
                      className="rounded-4 border border-2 border-white position-relative z-1 img-fluid"
                      src="/assets/imgs/hotels/regular_yoga.png"
                      alt="regular yoga"
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
                      src="/assets/imgs/hotels/private_session.png"
                      alt="regular yoga"
                      style={{ maxWidth: "460px" }}
                    />
                  </div>
                </div>

                {/* TEXT (Right) */}
                <div className="col-lg-5 offset-lg-1 order-2 order-lg-2 mt-lg-0 mt-10">
                  <div className="mb-4">
                    <h4 className="fw-bold">On-Demand Private Sessions</h4>
                    <p>
                      Premium wellness for guests who want a personalized
                      experience.
                    </p>
                  </div>
                  <ul className="fs-5 ps-3">
                    <li>Private Yoga Sessions</li>
                    <li>Personal Training Sessions</li>
                    <li>Yin or Restorative Yoga</li>
                    <li>Sound Healing & Deep Relaxation</li>
                    <li>Meditation Guidance</li>
                  </ul>
                </div>
              </div>

              <div
                className="row align-items-center pb-5 pt-lg-5 pt-0"
                style={{ maxWidth: "1100px", margin: "0 auto" }}
              >
                {/* TEXT */}
                <div className="col-lg-5 order-2 order-lg-1 mt-lg-0 mt-10">
                  <div className="mb-4">
                    <h4 className="fw-bold">Seasonal & Sensory Experiences</h4>
                    <p>
                      Signature offerings aligned with your resort’s natural
                      surroundings.
                    </p>
                  </div>

                  <ul className="fs-5 ps-3">
                    <li>Candlelight Yoga & Aromatherapy Ritual</li>
                    <li>Sound Bath + Custom Aromatherapy Blend</li>
                    <li>Full Moon Yoga + Intention Setting</li>
                    <li>Summer Solstice Ceremony with live music</li>
                    <li>
                      Wellness Brunch: Yoga + Fresh Juices + Nourishing Bites
                    </li>
                  </ul>
                </div>
                {/* IMAGE */}
                <div className="col-lg-6 offset-lg-1 order-1 order-lg-2 text-lg-end text-center mt-5 mt-lg-0 d-flex justify-content-center justify-content-lg-end">
                  <div className="photo-description position-relative rounded-4 d-inline-block">
                    <img
                      className="rounded-4 border border-2 border-white position-relative z-1 img-fluid"
                      src="/assets/imgs/hotels/seasonal.png"
                      alt="regular yoga"
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
                      src="/assets/imgs/hotels/retreats.png"
                      alt="regular yoga"
                      style={{ maxWidth: "460px" }}
                    />
                  </div>
                </div>

                {/* TEXT (Right) */}
                <div className="col-lg-5 offset-lg-1 order-2 order-lg-2 mt-lg-0 mt-10">
                  <div className="mb-4">
                    <h4 className="fw-bold">
                      Retreats & Restorative Experiences
                    </h4>
                    <p>Immersive multi-session programs.</p>
                  </div>

                  <ul className="fs-5 ps-3">
                    <li>Sunrise Salutations & Intention Setting</li>
                    <li>Yin Yoga + Emotional Release</li>
                    <li>Silent Walking Meditation</li>
                    <li>Digital Detox Retreat Concepts</li>
                    <li>Sleep & Recovery Programs</li>
                  </ul>
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
                      Human Performance & Mindful Productivity
                    </h4>
                    <p>
                      Ideal for corporate retreats, incentive travel, and MICE
                      groups.
                    </p>
                  </div>

                  <ul className="fs-5 ps-3">
                    <li>Movement & Mindset Workshops</li>
                    <li>Mindfulness for Innovation</li>
                    <li>Time & Stress Management</li>
                    <li>Positive Thinking & Resilience</li>
                    <li>Functional Mobility for Desk Workers</li>
                  </ul>
                </div>
                {/* IMAGE */}
                <div className="col-lg-6 offset-lg-1 order-1 order-lg-2 text-lg-end text-center mt-5 mt-lg-0 d-flex justify-content-center justify-content-lg-end">
                  <div className="photo-description position-relative rounded-4 d-inline-block">
                    <img
                      className="rounded-4 border border-2 border-white position-relative z-1 img-fluid"
                      src="/assets/imgs/hotels/performance.png"
                      alt="regular yoga"
                      style={{ maxWidth: "460px" }}
                    />
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
                    The Impact: What Hotels Experience With Our Programs
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
                            20–40% increase in pool deck traffic following
                            sunrise yoga sessions
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
                            Boost in bar and cabana sales during/after wellness
                            classes
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
                            Organic social media amplification through guest
                            photos, reels, and stories
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
                            Higher guest satisfaction scores and stronger brand
                            perception
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
                            More direct bookings driven by wellness-focused
                            travel decisions
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
                Find Answers About Bringing Yoga & Wellness to Your Hotel.
              </p>
            </div>
          </div>
          <div className="container position-relative z-2">
            <div className="row align-items-center">
              <div className="col-lg-12 mt-lg-0 mt-8 ">
                <div className="mb-3 card p-3 border bg-white rounded-2 shadow-2">
                  <div className="px-0 border-0">
                    <div className="text-900 fw-bold d-flex align-items-center">
                      <h6 className="m-0">
                        What equipment is needed for yoga classes at my hotel?
                      </h6>
                    </div>
                  </div>
                  <div className="card-body ps-0">
                    <p className="mb-0">
                     We help you chose the best yoga mats or any other required equipment for your classes.
                    </p>
                  </div>
                </div>

                <div className="mb-3 card p-3 border bg-white rounded-2 shadow-2">
                  <div className="px-0 border-0">
                    <div className="text-900 fw-bold d-flex align-items-center">
                      <h6 className="m-0">
                        Are yoga classes suitable for all levels of guests?
                      </h6>
                    </div>
                  </div>
                  <div className="card-body ps-0">
                    <p className="mb-0">
                      Yes, our yoga programs are designed to accommodate all
                      levels. Whether your guests are beginners or experienced
                      practitioners, we tailor the sessions to ensure everyone
                      has a positive experience.
                    </p>
                  </div>
                </div>

                <div className="mb-3 card p-3 border bg-white rounded-2 shadow-2">
                  <div className="px-0 border-0">
                    <div className="text-900 fw-bold d-flex align-items-center">
                      <h6 className="m-0">
                        How do I integrate yoga classes into my existing hotel
                        offerings?
                      </h6>
                    </div>
                  </div>
                  <div className="card-body ps-0">
                    <p className="mb-0">
                      Integrating yoga into your hotel is simple. We’ll help you
                      choose the right spaces, set up a schedule, and create a
                      seamless experience for your guests. We also offer
                      marketing support to promote your new wellness offerings.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Contact1 />
      </>
    </>
  );
}
