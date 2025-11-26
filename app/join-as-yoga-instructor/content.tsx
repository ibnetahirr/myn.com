"use client";

import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ApplyToTeachSection from "./ApplyToTeachSection";

export default function Content() {
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
  };

  return (
    <>
      {/* HERO – TEACH YOGA ON YOUR TERMS */}
      <section className="section-feature-5">
        <div className="container-fluid position-relative section-padding">
          <div className="container">
            <div className="row align-items-center">
              {/* IMAGE – now on LEFT for desktop */}
              <div className="col-lg-5 order-1 order-lg-1">
                <div className="photo-description position-relative rounded-4">
                  <img
                    className="rounded-4 border border-2 border-white position-relative z-1 img-fluid"
                    src="/assets/imgs/instructor/hero.webp"
                    alt="Teach Yoga with My Yoga Network"
                  />
                  <div className="box-gradient-1 ms-lg-8 position-absolute bottom-0 start-0 bg-linear-1 rounded-4 z-0" />
                </div>
              </div>

              {/* TEXT – now on RIGHT */}
              <div className="col-lg-6 offset-lg-1 order-2 order-lg-2 mt-5 mt-lg-0">
                <h4 className="ds-4 fw-regular">
                  Teach Yoga on Your Terms,&nbsp;
                  <span className="fw-bold">Earn What You Deserve.</span>
                </h4>

                <p className="fs-5 mt-3">
                  With My Yoga Network, we connect you with teaching positions
                  at businesses and with individuals, online or in person. You
                  focus on your teaching; we help you find the right
                  opportunities.
                </p>

                <a
                  href="#apply-to-teach"
                  className="btn btn-outline-secondary hover-up bg-transparent mt-5"
                >
                  APPLY TO TEACH
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
                      stroke="#000"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17 7L6.75 17.25"
                      stroke="#000"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW MYN WORKS */}
      <section className="section-padding">
        <div className="row position-relative z-1">
          <div className="text-center">
            <h3 className="my-3">
              Simple steps to success: how MYN connects you with clients.
            </h3>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center mt-5 mt-sm-3 g-4">
            {/* Step 1 */}
            <div className="col-md-4">
              <div className="h-100 text-center">
                <div className="d-flex justify-content-center mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={60}
                    height={60}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    {/* clipboard / form icon */}
                    <rect
                      x="5"
                      y="3"
                      width="14"
                      height="18"
                      rx="2"
                      stroke="#177BCE"
                      strokeWidth="1.8"
                    />
                    <path
                      d="M9 7H15"
                      stroke="#177BCE"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                    <path
                      d="M9 11H15"
                      stroke="#177BCE"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                    <path
                      d="M9 15H13"
                      stroke="#177BCE"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                    <circle
                      cx="12"
                      cy="2.8"
                      r="1.8"
                      fill="#177BCE"
                      stroke="#ffffff"
                      strokeWidth="0.6"
                    />
                  </svg>
                </div>
                <h6 className="my-3">Apply to become a MYN yoga instructor</h6>
                <p className="mb-6">
                  Submit your application with details about your training,
                  experience, and specialties.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="col-md-4">
              <div className="h-100 text-center">
                <div className="d-flex justify-content-center mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={60}
                    height={60}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    {/* magnifier + check */}
                    <circle
                      cx="11"
                      cy="11"
                      r="6"
                      stroke="#177BCE"
                      strokeWidth="1.8"
                    />
                    <path
                      d="M15.5 15.5L20 20"
                      stroke="#177BCE"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <path
                      d="M9 11L10.4 12.4L13 9.8"
                      stroke="#22C55E"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h6 className="my-3">
                  We review your credentials and experience
                </h6>
                <p className="mb-6">
                  Our team reviews your profile and matches you with suitable
                  opportunities.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="col-md-4">
              <div className="h-100 text-center">
                <div className="d-flex justify-content-center mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={60}
                    height={60}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    {/* profile & connections */}
                    <circle
                      cx="12"
                      cy="8"
                      r="3"
                      stroke="#177BCE"
                      strokeWidth="1.8"
                    />
                    <path
                      d="M6.5 19C7.5 16.5 9.5 15.25 12 15.25C14.5 15.25 16.5 16.5 17.5 19"
                      stroke="#177BCE"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <path
                      d="M3 9H6"
                      stroke="#22C55E"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                    <path
                      d="M18 9H21"
                      stroke="#22C55E"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <h6 className="my-3">
                  Set up your profile for client matching
                </h6>
                <p className="mb-6">
                  Once accepted, you’ll receive bookings directly from hotels,
                  corporates, wellness centers, and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY JOIN MYN */}
      <section className="section-padding bg-primary">
        <div className="row position-relative z-1">
          <div className="text-center">
            <h3 className="my-3 text-white"> Why Join My Yoga Network?</h3>
            <p className="fs-5 text-white">
              Thousands of people seek yoga experiences every day on vacation,
              at work, and during recovery. We help you reach them, wherever
              they are.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="row d-flex justify-content-center mt-5 g-4">
            {/* Card 1 */}
            <div className="col-md-3">
              <div className="why-card h-100 text-center p-4 bg-white rounded-4">
                <div className="d-flex justify-content-center mb-3">
                  {/* map / location icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={48}
                    height={48}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 3C8.962 3 6.5 5.462 6.5 8.5C6.5 11.794 10.138 15.828 11.54 17.262C11.795 17.524 12.205 17.524 12.46 17.262C13.862 15.828 17.5 11.794 17.5 8.5C17.5 5.462 15.038 3 12 3Z"
                      stroke="#177BCE"
                      strokeWidth="1.8"
                    />
                    <circle
                      cx="12"
                      cy="8.5"
                      r="2"
                      stroke="#177BCE"
                      strokeWidth="1.6"
                    />
                  </svg>
                </div>
                <h3 className="h5 fw-bold">Teach Across the U.S.</h3>
                <p className="mt-2 mb-0">
                  Access opportunities with hotels, retreats, and organizations
                  in multiple locations.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-3">
              <div className="why-card h-100 text-center p-4 bg-white rounded-4">
                <div className="d-flex justify-content-center mb-3">
                  {/* growth arrow */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={48}
                    height={48}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M5 19L5 11"
                      stroke="#177BCE"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <path
                      d="M10 19V9"
                      stroke="#177BCE"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <path
                      d="M15 19V7"
                      stroke="#177BCE"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <path
                      d="M4 7L10.5 4L14 6L20 3"
                      stroke="#22C55E"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18 5L20 3L20 6.5"
                      stroke="#22C55E"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="h5 fw-bold">Grow Professionally</h3>
                <p className="mt-2 mb-0">
                  Work with diverse clients and environments that expand your
                  skills and confidence.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-3">
              <div className="why-card h-100 text-center p-4 bg-white rounded-4">
                <div className="d-flex justify-content-center mb-3">
                  {/* coin / earnings */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={48}
                    height={48}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="8"
                      stroke="#177BCE"
                      strokeWidth="1.8"
                    />
                    <path
                      d="M12 7V17"
                      stroke="#177BCE"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                    <path
                      d="M9.5 9.5C10 8.8 10.9 8.5 12 8.5C13.2 8.5 14 8.9 14.5 9.5C15 10.1 15 10.9 14.4 11.4C13.8 11.9 13 12.1 12 12.3C11 12.5 10.2 12.7 9.6 13.2C9 13.7 9 14.6 9.5 15.3C10 16 10.9 16.4 12 16.4C13.1 16.4 14 16.1 14.6 15.4"
                      stroke="#22C55E"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="h5 fw-bold">Fair Compensation</h3>
                <p className="mt-2 mb-0">
                  We advocate for fair, transparent pay so your expertise is
                  properly valued.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="col-md-3">
              <div className="why-card h-100 text-center p-4 bg-white rounded-4">
                <div className="d-flex justify-content-center mb-3">
                  {/* community / people icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={48}
                    height={48}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      cx="8"
                      cy="10"
                      r="2.3"
                      stroke="#177BCE"
                      strokeWidth="1.6"
                    />
                    <circle
                      cx="16"
                      cy="10"
                      r="2.3"
                      stroke="#177BCE"
                      strokeWidth="1.6"
                    />
                    <path
                      d="M4.5 17C5.3 15.4 6.5 14.5 8 14.5C9.5 14.5 10.7 15.4 11.5 17"
                      stroke="#177BCE"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                    <path
                      d="M12.5 17C13.3 15.4 14.5 14.5 16 14.5C17.5 14.5 18.7 15.4 19.5 17"
                      stroke="#177BCE"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <h3 className="h5 fw-bold">Supportive Community</h3>
                <p className="mt-2 mb-0">
                  Join a network of like-minded professionals sharing best
                  practices and opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UNLOCK YOUR POTENTIAL */}
      <section className="section-padding">
        <div className="row position-relative z-1">
          <div className="text-center">
            <h3 className="my-3">
              {" "}
              Unlock Your Potential as a My Yoga Network Instructor
            </h3>
            <p className="fs-5">
              Your teaching journey with flexibility, higher earnings, and new
              client connections.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="row d-flex justify-content-center mt-5 g-4">
            {/* Card 1 */}
            <div className="col-md-3">
              <div className="yoga-card h-100 p-4 bg-white rounded-4 text-center">
                <div className="d-flex justify-content-center mb-3">
                  {/* calendar / location icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={44}
                    height={44}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <rect
                      x="3"
                      y="5"
                      width="18"
                      height="16"
                      rx="2"
                      stroke="#177BCE"
                      strokeWidth="1.6"
                    />
                    <path
                      d="M8 3V7"
                      stroke="#177BCE"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                    <path
                      d="M16 3V7"
                      stroke="#177BCE"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                    <path d="M3 10H21" stroke="#177BCE" strokeWidth="1.6" />
                    <circle
                      cx="12"
                      cy="15"
                      r="2"
                      stroke="#22C55E"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <h3 className="h5 hc fw-bold">
                  Flexible Schedules and Locations
                </h3>
                <p className="mt-2 mb-0">
                  Take control of your schedule. With My Yoga Network, you
                  choose when and where you teach yoga.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-3">
              <div className="yoga-card h-100 p-4 bg-white rounded-4 text-center">
                <div className="d-flex justify-content-center mb-3">
                  {/* money / growth icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={44}
                    height={44}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <rect
                      x="3"
                      y="6"
                      width="18"
                      height="12"
                      rx="2"
                      stroke="#177BCE"
                      strokeWidth="1.6"
                    />
                    <path
                      d="M7 12H17"
                      stroke="#22C55E"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="2.2"
                      stroke="#177BCE"
                      strokeWidth="1.6"
                    />
                  </svg>
                </div>
                <h3 className="h5 hc fw-bold">Earning Potential</h3>
                <p className="mt-2 mb-0">
                  Whether you’re teaching part-time or full-time, MYN opens up
                  income opportunities aligned with your availability and
                  expertise.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-3">
              <div className="yoga-card h-100 p-4 bg-white rounded-4 text-center">
                <div className="d-flex justify-content-center mb-3">
                  {/* network / nodes icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={44}
                    height={44}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="2.4"
                      stroke="#177BCE"
                      strokeWidth="1.6"
                    />
                    <circle
                      cx="5"
                      cy="7"
                      r="1.8"
                      stroke="#177BCE"
                      strokeWidth="1.4"
                    />
                    <circle
                      cx="19"
                      cy="7"
                      r="1.8"
                      stroke="#177BCE"
                      strokeWidth="1.4"
                    />
                    <circle
                      cx="6"
                      cy="18"
                      r="1.8"
                      stroke="#177BCE"
                      strokeWidth="1.4"
                    />
                    <circle
                      cx="18"
                      cy="18"
                      r="1.8"
                      stroke="#177BCE"
                      strokeWidth="1.4"
                    />
                    <path
                      d="M6.6 7.7L10.5 10.3"
                      stroke="#22C55E"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                    <path
                      d="M17.4 7.7L13.5 10.3"
                      stroke="#22C55E"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                    <path
                      d="M6.6 17.3L10.5 13.7"
                      stroke="#22C55E"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                    <path
                      d="M17.4 17.3L13.5 13.7"
                      stroke="#22C55E"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <h3 className="h5 hc fw-bold">Exposure to New Clients</h3>
                <p className="mt-2 mb-0">
                  Build your client base with visibility across hospitality,
                  corporate, and wellness-focused organizations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BECOME PART OF A GROWING COMMUNITY */}
      <section className="section-project-2 pt-120 pb-8">
        <div className="row position-relative z-1">
          <div className="text-center">
            <h3 className="my-3">Become a Part of a Growing Community</h3>
            <p className="fs-5">
              Certified professionals creating transformative yoga experiences.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="row mt-6">
            <Swiper
              {...swiperOptions}
              className="swiper slider-1 pt-2 pb-8"
              modules={[Keyboard, Autoplay]}
            >
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="text-center">
                    <div className="zoom-img position-relative d-inline-block z-1">
                      <div className="rounded-3 fix">
                        <img
                          className="img-fluid w-100"
                          src="/assets/imgs/team/teachers/1.webp"
                          alt="Teacher"
                        />
                      </div>
                      {/* <Link href="#" className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-4 hover-up">
													<h6>Teacher</h6>
													<p className="text-900">Streamlining operations and growth strategies for market enhancement.</p>
												</Link> */}
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                  <div className="text-center">
                    <div className="zoom-img position-relative d-inline-block z-1">
                      <div className="rounded-3 fix">
                        <img
                          className="img-fluid w-100"
                          src="/assets/imgs/team/teachers/2.webp"
                          alt="Teacher"
                        />
                      </div>
                      {/* <Link href="#" className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-4 hover-up">
													<h6>Teacher</h6>
													<p className="text-900">Streamlining operations and growth strategies for market enhancement.</p>
												</Link> */}
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                  <div className="text-center">
                    <div className="zoom-img position-relative d-inline-block z-1">
                      <div className="rounded-3 fix">
                        <img
                          className="img-fluid w-100"
                          src="/assets/imgs/team/teachers/3.webp"
                          alt="Teacher"
                        />
                      </div>
                      {/* <Link href="#" className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-4 hover-up">
													<h6>Teacher</h6>
													<p className="text-900">Streamlining operations and growth strategies for market enhancement.</p>
												</Link> */}
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                  <div className="text-center">
                    <div className="zoom-img position-relative d-inline-block z-1">
                      <div className="rounded-3 fix">
                        <img
                          className="img-fluid w-100"
                          src="/assets/imgs/team/teachers/4.webp"
                          alt="Teacher"
                        />
                      </div>
                      {/* <Link href="#" className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-4 hover-up">
													<h6>Teacher</h6>
													<p className="text-900">Streamlining operations and growth strategies for market enhancement.</p>
												</Link> */}
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                  <div className="text-center">
                    <div className="zoom-img position-relative d-inline-block z-1">
                      <div className="rounded-3 fix">
                        <img
                          className="img-fluid w-100"
                          src="/assets/imgs/team/teachers/5.webp"
                          alt="Teacher"
                        />
                      </div>
                      {/* <Link href="#" className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-4 hover-up">
													<h6>Teacher</h6>
													<p className="text-900">Streamlining operations and growth strategies for market enhancement.</p>
												</Link> */}
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                  <div className="text-center">
                    <div className="zoom-img position-relative d-inline-block z-1">
                      <div className="rounded-3 fix">
                        <img
                          className="img-fluid w-100"
                          src="/assets/imgs/team/teachers/6.webp"
                          alt="Teacher"
                        />
                      </div>
                      {/* <Link href="#" className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-4 hover-up">
													<h6>Teacher</h6>
													<p className="text-900">Streamlining operations and growth strategies for market enhancement.</p>
												</Link> */}
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                  <div className="text-center">
                    <div className="zoom-img position-relative d-inline-block z-1">
                      <div className="rounded-3 fix">
                        <img
                          className="img-fluid w-100"
                          src="/assets/imgs/team/teachers/7.webp"
                          alt="Teacher"
                        />
                      </div>
                      {/* <Link href="#" className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-4 hover-up">
													<h6>Teacher</h6>
													<p className="text-900">Streamlining operations and growth strategies for market enhancement.</p>
												</Link> */}
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section className="section-padding">
        <div className="row position-relative z-1">
          <div className="text-center">
            <h3 className="my-3">Real Stories, Real Success</h3>
            <p className="fs-5">Hear from our yoga instructors. </p>
          </div>
        </div>

        <div className="container">
          <div className="row justify-content-center mt-5 g-4">
            {/* Story 1 */}
            <div className="col-md-4">
              <div className="h-100 p-4 border rounded-4 shadow-sm bg-white">
                <div className="mb-3">
                  {/* quote icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={32}
                    height={32}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M6 10C6 7.79086 7.79086 6 10 6V4C7.23858 4 5 6.23858 5 9V11H9V20H6C5.44772 20 5 19.5523 5 19V11"
                      fill="#177BCE"
                    />
                    <path
                      d="M14 10C14 7.79086 15.7909 6 18 6V4C15.2386 4 13 6.23858 13 9V11H17V20H14C13.4477 20 13 19.5523 13 19V11"
                      fill="#177BCE"
                    />
                  </svg>
                </div>
                <p className="mb-3">
                  Working with My Yoga Network for private yoga sessions has
                  been an incredible experience. The platform makes it easy to
                  connect with clients who genuinely want to improve their
                  practice, while I maintain control of my schedule.
                </p>
                <h3 className="h5 fw-bold mb-0">– Oliver Bennett</h3>
              </div>
            </div>

            {/* Story 2 */}
            <div className="col-md-4">
              <div className="h-100 p-4 border rounded-4 shadow-sm bg-white">
                <div className="mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={32}
                    height={32}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M6 10C6 7.79086 7.79086 6 10 6V4C7.23858 4 5 6.23858 5 9V11H9V20H6C5.44772 20 5 19.5523 5 19V11"
                      fill="#177BCE"
                    />
                    <path
                      d="M14 10C14 7.79086 15.7909 6 18 6V4C15.2386 4 13 6.23858 13 9V11H17V20H14C13.4477 20 13 19.5523 13 19V11"
                      fill="#177BCE"
                    />
                  </svg>
                </div>
                <p className="mb-3">
                  I’ve worked with several luxury hotels through MYN, and it’s
                  been an amazing journey. Teaching guests from all over the
                  world has broadened my horizons, while MYN handles logistics
                  and payments seamlessly.
                </p>
                <h3 className="h5 fw-bold mb-0">– Sophia Carter</h3>
              </div>
            </div>

            {/* Story 3 */}
            <div className="col-md-4">
              <div className="h-100 p-4 border rounded-4 shadow-sm bg-white">
                <div className="mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={32}
                    height={32}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M6 10C6 7.79086 7.79086 6 10 6V4C7.23858 4 5 6.23858 5 9V11H9V20H6C5.44772 20 5 19.5523 5 19V11"
                      fill="#177BCE"
                    />
                    <path
                      d="M14 10C14 7.79086 15.7909 6 18 6V4C15.2386 4 13 6.23858 13 9V11H17V20H14C13.4477 20 13 19.5523 13 19V11"
                      fill="#177BCE"
                    />
                  </svg>
                </div>
                <p className="mb-3">
                  My Yoga Network has made it possible for me to teach in
                  beautiful settings with reliable support. From bookings to
                  payouts, everything feels professional – I can focus fully on
                  my students.
                </p>
                <h3 className="h5 fw-bold mb-0">– Liam Mitchell</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APPLY TO TEACH – SIMPLE FORM (UI ONLY) */}
      <ApplyToTeachSection />

      {/* FAQS */}
      <section className="section-faqs-1 section-padding position-relative">
        <div className="row position-relative z-1 mb-3">
          <div className="text-center">
            <h3 className="my-3">Frequently Asked Questions</h3>
            <p className="fs-5">
              Everything you need to know about teaching with My Yoga Network.
            </p>
          </div>
        </div>
        <div className="container position-relative z-2">
          <div className="row align-items-center">
            <div className="col-lg-12 mt-lg-0 mt-8">
              {/* FAQ 1 */}
              <div className="mb-3 card p-3 border bg-white rounded-2 shadow-2">
                <div className="px-0 border-0">
                  <div className="text-900 fw-bold d-flex align-items-center">
                    <h6 className="m-0">
                      Can instructors choose their work locations?
                    </h6>
                  </div>
                </div>
                <div className="card-body ps-0">
                  <p className="mb-0">
                    Yes, instructors have flexibility in choosing where they
                    wish to provide services, whether online, at hotels,
                    corporates, or wellness centers in their region.
                  </p>
                </div>
              </div>

              {/* FAQ 2 */}
              <div className="mb-3 card p-3 border bg-white rounded-2 shadow-2">
                <div className="px-0 border-0">
                  <div className="text-900 fw-bold d-flex align-items-center">
                    <h6 className="m-0">
                      How are yoga instructors matched with clients?
                    </h6>
                  </div>
                </div>
                <div className="card-body ps-0">
                  <p className="mb-0">
                    Instructors are matched based on their expertise,
                    availability, preferred teaching method, and client needs.
                    We work to ensure a strong fit for both sides.
                  </p>
                </div>
              </div>

              {/* FAQ 3 */}
              <div className="mb-3 card p-3 border bg-white rounded-2 shadow-2">
                <div className="px-0 border-0">
                  <div className="text-900 fw-bold d-flex align-items-center">
                    <h6 className="m-0">Is there a membership fee?</h6>
                  </div>
                </div>
                <div className="card-body ps-0">
                  <p className="mb-0">
                    Currently, there is no charge to join. In the future, a
                    subscription or membership fee may apply as we expand our
                    services and support.
                  </p>
                </div>
              </div>

              {/* FAQ 4 */}
              <div className="mb-3 card p-3 border bg-white rounded-2 shadow-2">
                <div className="px-0 border-0">
                  <div className="text-900 fw-bold d-flex align-items-center">
                    <h6 className="m-0">
                      Can instructors set their own pricing?
                    </h6>
                  </div>
                </div>
                <div className="card-body ps-0">
                  <p className="mb-0">
                    Yes, instructors can set their own rates based on
                    experience, session length, and type. We provide guidance on
                    market-aligned pricing where helpful.
                  </p>
                </div>
              </div>

              {/* FAQ 5 */}
              <div className="mb-3 card p-3 border bg-white rounded-2 shadow-2">
                <div className="px-0 border-0">
                  <div className="text-900 fw-bold d-flex align-items-center">
                    <h6 className="m-0">
                      What qualifications are required to join MYN?
                    </h6>
                  </div>
                </div>
                <div className="card-body ps-0">
                  <p className="mb-0">
                    A valid yoga teacher certification and practical teaching
                    experience are required. Additional credentials may be
                    requested for therapeutic or clinical settings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
