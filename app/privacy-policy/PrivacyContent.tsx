"use client";
import Link from "next/link";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
export default function PagePrivacyPolicy() {
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
      {/* Section Privacy Policy */}
      <section className="section-privacy-policy section-padding">
        <div className="container">
          <div className="text-center">
            <div
              className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2"
              data-aos="zoom-in"
              data-aos-delay={100}
            >
              <img src="/assets/imgs/features-1/dots.png" alt="myyoganetwork" />
              <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
                Privacy Policy
              </span>
            </div>
            <h3 className="ds-3 my-3">My Yoga Network Privacy Policy</h3>
            <p className="fs-5">
              Effective Date: March 12, 2024
              <br />
              At My Yoga Network, we prioritize the privacy and security of our
              users. This Privacy Policy outlines how we collect, use, protect,
              and share information gathered through our platform.
            </p>
          </div>
          <div className="row pt-110">
            <div className="col-lg-8 col-md-10 mx-md-auto">
              <h5 className="mb-3 mt-4">1. Information Collection</h5>
              <p>
                We collect information that you provide directly to us when you
                register an account, use our services, or communicate with us.
                This may include:
              </p>
              <ul>
                <li>
                  Personal identification information (e.g., name, email
                  address, phone number)
                </li>
                <li>Professional credentials and experience</li>
                <li>Payment information for processing transactions</li>
                <li>Feedback and correspondence through our platform</li>
              </ul>
              <p>
                Additionally, we automatically collect certain information via
                cookies and similar technologies when you use our platform, such
                as usage details, IP addresses, and information collected
                through cookies and other tracking technologies.
              </p>

              <h5 className="mb-3 mt-4">2. Use of Information</h5>
              <p>The information we collect is used to:</p>
              <ul>
                <li>
                  Facilitate the connection between Yoga therapists and our
                  clients (healthcare professionals, hotels, and corporate
                  entities)
                </li>
                <li>Process transactions and provide our services</li>
                <li>Improve and personalize user experiences</li>
                <li>
                  Communicate with users regarding their accounts and our
                  services
                </li>
                <li>
                  Comply with legal obligations and enforce our terms of service
                </li>
              </ul>

              <h5 className="mb-3 mt-4">
                3. Information Sharing and Disclosure
              </h5>
              <p>We may share information with:</p>
              <ul>
                <li>
                  Healthcare professionals, hotels, and corporate clients in the
                  course of providing our services
                </li>
                <li>
                  Service providers and partners who assist in the operation of
                  our platform and services
                </li>
                <li>Law enforcement or legal requests when required by law</li>
              </ul>
              <p>
                We require all third parties to respect the security of your
                personal data and to treat it in accordance with the law. We do
                not allow our third-party service providers to use your personal
                data for their own purposes and only permit them to process your
                personal data for specified purposes and in accordance with our
                instructions.
              </p>

              <h5 className="mb-3 mt-4">4. Data Retention and Security</h5>
              <p>
                We retain personal information for as long as necessary to
                provide our services, comply with legal obligations, resolve
                disputes, and enforce our policies. We employ a variety of
                security measures designed to protect your information from
                unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h5 className="mb-3 mt-4">
                5. Cookies and Tracking Technologies
              </h5>
              <p>
                We use cookies and similar tracking technologies to track
                activity on our platform and hold certain information. You can
                instruct your browser to refuse all cookies or to indicate when
                a cookie is being sent. However, if you do not accept cookies,
                you may not be able to use some portions of our service.
              </p>

              <h5 className="mb-3 mt-4">6. User Rights</h5>
              <p>
                You have the right to access, correct, delete, or limit the use
                of your personal information. If you wish to exercise these
                rights, please contact us at the details provided below.
              </p>

              <h5 className="mb-3 mt-4">7. Changes to the Privacy Policy</h5>
              <p>
                We may update our Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page. You are advised to review this Privacy Policy
                periodically for any changes.
              </p>

              <h5 className="mb-3 mt-4">8. Contact Information</h5>
              <p>
                If you have any questions about this Privacy Policy, please
                contact us:
              </p>
              <ul>
                <li>
                  By email:{" "}
                  <a href="mailto:info@myyoganetwork.com">
                    info@myyoganetwork.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* prettier-ignore */}
      {/*Testimonial 3*/}
      <section className="section-testimonial-3 position-relative section-padding fix">
        <div className="container position-relative z-1">
          <div className="row pb-9">
            <div className="col-lg-7 mx-lg-auto">
              <div className="text-center mb-lg-0 mb-5">
                <div className="d-flex align-items-center position-relative z-2 justify-content-center bg-primary-soft d-inline-flex rounded-pill border border-2 border-white px-3 py-1">
                  <img src="/assets/imgs/features-1/dots.png" alt="infinia" />
                  <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
                    Testimonials
                  </span>
                </div>
                <h5 className="ds-5 my-3 fw-regular">
                  What <span className="fw-bold">People Say</span> About <br />
                  <span className="fw-bold"> Our Company</span>
                </h5>
                <p className="fs-5 mb-0 text-900">
                  Access top-tier group mentoring plans and exclusive
                  professional <br className="d-none d-md-block" />
                  benefits for your team. 🔥
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <Swiper
              {...swiperOptions}
              className="swiper slider-1 pt-2 pb-3"
              modules={[Keyboard, Autoplay, Pagination, Navigation]}
            >
              <div className="swiper-wrapper">
                {/* prettier-ignore */}
                <SwiperSlide className="swiper-slide">
									<div className="bg-neutral-100 card-testimonial-3 p-5 rounded-3 position-relative">
										<div className="d-flex align-items-center mb-5">
											<img className="avatar-lg" src="/assets/imgs/testimonial-1/avatar-1.png" alt="infinia" />
											<div className="d-flex flex-column">
												<h6 className="ms-3 fs-6 mb-0">John Anderson</h6>
												<div className="flag ms-3">
													<img src="/assets/imgs/testimonial-1/flag-1.png" alt="infinia" />
													<span className="fs-8">CEO of Tech Innovators Inc</span>
												</div>
											</div>
										</div>
										<p className="text-900 border-bottom pb-4 mb-4"> The team at <span className="fw-bold">My Yoga Network</span> has helped us elevate our wellness journey, connecting us with expert instructors, tailored programs, and a supportive community. Their guidance and resources have improved our daily practice, mindfulness, and overall well-being, allowing us to focus on living a healthier, balanced lifestyle. Thank you.</p>
										<div className="d-flex">
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<span className="fs-8 text-600 ms-2">(For services and support)</span>
										</div>
										<div className="position-absolute top-0 end-0 m-4">
											<svg xmlns="http://www.w3.org/2000/svg" width={52} height={52} viewBox="0 0 52 52" fill="none">
												<g clipPath="url(#clip0_551_13914)">
													<path d="M0 29.7144H11.1428L3.71422 44.5715H14.8571L22.2857 29.7144V7.42871H0V29.7144Z" fill="#D1D5DB" />
													<path d="M29.7148 7.42871V29.7144H40.8577L33.4291 44.5715H44.5719L52.0005 29.7144V7.42871H29.7148Z" fill="#D1D5DB" />
												</g>
												<defs>
													<clipPath>
														<rect width={52} height={52} fill="white" />
													</clipPath>
												</defs>
											</svg>
										</div>
									</div>
								</SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="bg-neutral-100 card-testimonial-3 p-5 rounded-3 position-relative">
                    <div className="d-flex align-items-center mb-5">
                      <img
                        className="avatar-lg"
                        src="/assets/imgs/testimonial-1/avatar-3.png"
                        alt="infinia"
                      />
                      <div className="d-flex flex-column">
                        <h6 className="ms-3 fs-6 mb-0">Sarah Thompson</h6>
                        <div className="flag ms-3">
                          <img
                            src="/assets/imgs/testimonial-1/flag-2.png"
                            alt="infinia"
                          />
                          <span className="fs-8">
                            CEO of Tech Innovators Inc
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-900 border-bottom pb-4 mb-4">
                      The dedication and guidance of{" "}
                      <span className="fw-bold">My Yoga Network</span> have
                      transformed our wellness journey. Their expert
                      instructors, personalized programs, and supportive
                      community have helped us enhance our practice, deepen
                      mindfulness, and focus on holistic well-being.
                    </p>
                    <div className="d-flex">
                      <img
                        src="/assets/imgs/hero-4/star-yellow.svg"
                        alt="infinia"
                      />
                      <img
                        src="/assets/imgs/hero-4/star-yellow.svg"
                        alt="infinia"
                      />
                      <img
                        src="/assets/imgs/hero-4/star-yellow.svg"
                        alt="infinia"
                      />
                      <img
                        src="/assets/imgs/hero-4/star-yellow.svg"
                        alt="infinia"
                      />
                      <img
                        src="/assets/imgs/hero-4/star-yellow.svg"
                        alt="infinia"
                      />
                      <span className="fs-8 text-600 ms-2">
                        (For services and support)
                      </span>
                    </div>
                    <div className="position-absolute top-0 end-0 m-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={52}
                        height={52}
                        viewBox="0 0 52 52"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_551_13914)">
                          <path
                            d="M0 29.7144H11.1428L3.71422 44.5715H14.8571L22.2857 29.7144V7.42871H0V29.7144Z"
                            fill="#D1D5DB"
                          />
                          <path
                            d="M29.7148 7.42871V29.7144H40.8577L33.4291 44.5715H44.5719L52.0005 29.7144V7.42871H29.7148Z"
                            fill="#D1D5DB"
                          />
                        </g>
                        <defs>
                          <clipPath>
                            <rect width={52} height={52} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="bg-neutral-100 card-testimonial-3 p-5 rounded-3 position-relative">
                    <div className="d-flex align-items-center mb-5">
                      <img
                        className="avatar-lg"
                        src="/assets/imgs/testimonial-1/avatar-4.png"
                        alt="infinia"
                      />
                      <div className="d-flex flex-column">
                        <h6 className="ms-3 fs-6 mb-0">Emily Adams</h6>
                        <div className="flag ms-3">
                          <img
                            src="/assets/imgs/testimonial-1/flag-3.png"
                            alt="infinia"
                          />
                          <span className="fs-8">
                            CEO of Tech Innovators Inc
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-900 border-bottom pb-4 mb-4">
                      The dedication and guidance of{" "}
                      <span className="fw-bold">My Yoga Network</span> have
                      transformed our wellness journey. Their expert instructors
                      and tailored programs have significantly improved our
                      practice, enhanced mindfulness, and empowered us to focus
                      on holistic well-being.
                    </p>
                    <div className="d-flex">
                      <img
                        src="/assets/imgs/hero-4/star-yellow.svg"
                        alt="infinia"
                      />
                      <img
                        src="/assets/imgs/hero-4/star-yellow.svg"
                        alt="infinia"
                      />
                      <img
                        src="/assets/imgs/hero-4/star-yellow.svg"
                        alt="infinia"
                      />
                      <img
                        src="/assets/imgs/hero-4/star-yellow.svg"
                        alt="infinia"
                      />
                      <img
                        src="/assets/imgs/hero-4/star-yellow.svg"
                        alt="infinia"
                      />
                      <span className="fs-8 text-600 ms-2">
                        (For services and support)
                      </span>
                    </div>
                    <div className="position-absolute top-0 end-0 m-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={52}
                        height={52}
                        viewBox="0 0 52 52"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_551_13914)">
                          <path
                            d="M0 29.7144H11.1428L3.71422 44.5715H14.8571L22.2857 29.7144V7.42871H0V29.7144Z"
                            fill="#D1D5DB"
                          />
                          <path
                            d="M29.7148 7.42871V29.7144H40.8577L33.4291 44.5715H44.5719L52.0005 29.7144V7.42871H29.7148Z"
                            fill="#D1D5DB"
                          />
                        </g>
                        <defs>
                          <clipPath>
                            <rect width={52} height={52} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="bg-neutral-100 card-testimonial-3 p-5 rounded-3 position-relative">
                    <div className="d-flex align-items-center mb-5">
                      <img
                        className="avatar-lg"
                        src="/assets/imgs/testimonial-1/avatar-2.png"
                        alt="infinia"
                      />
                      <div className="d-flex flex-column">
                        <h6 className="ms-3 fs-6 mb-0">Automated reports</h6>
                        <div className="flag ms-3">
                          <img
                            src="/assets/imgs/testimonial-1/flag-4.png"
                            alt="infinia"
                          />
                          <span className="fs-8">
                            CEO of Tech Innovators Inc
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-900 border-bottom pb-4 mb-4">
                      The dedication and guidance of our{" "}
                      <span className="fw-bold">
                        My Yoga Network instructors
                      </span>{" "}
                      have transformed our wellness journey. Their personalized
                      programs and supportive approach have significantly
                      improved our practice, enhanced mindfulness, and helped us
                      focus on holistic well-being.
                    </p>
                    <div className="d-flex">
                      <img
                        src="/assets/imgs/hero-4/star-yellow.svg"
                        alt="infinia"
                      />
                      <img
                        src="/assets/imgs/hero-4/star-yellow.svg"
                        alt="infinia"
                      />
                      <img
                        src="/assets/imgs/hero-4/star-yellow.svg"
                        alt="infinia"
                      />
                      <img
                        src="/assets/imgs/hero-4/star-yellow.svg"
                        alt="infinia"
                      />
                      <img
                        src="/assets/imgs/hero-4/star-yellow.svg"
                        alt="infinia"
                      />
                      <span className="fs-8 text-600 ms-2">
                        (For services and support)
                      </span>
                    </div>
                    <div className="position-absolute top-0 end-0 m-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={52}
                        height={52}
                        viewBox="0 0 52 52"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_551_13914)">
                          <path
                            d="M0 29.7144H11.1428L3.71422 44.5715H14.8571L22.2857 29.7144V7.42871H0V29.7144Z"
                            fill="#D1D5DB"
                          />
                          <path
                            d="M29.7148 7.42871V29.7144H40.8577L33.4291 44.5715H44.5719L52.0005 29.7144V7.42871H29.7148Z"
                            fill="#D1D5DB"
                          />
                        </g>
                        <defs>
                          <clipPath>
                            <rect width={52} height={52} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="bg-neutral-100 card-testimonial-3 p-5 rounded-3 position-relative">
                    <div className="d-flex align-items-center mb-5">
                      <img
                        className="avatar-lg"
                        src="/assets/imgs/testimonial-1/avatar-1.png"
                        alt="infinia"
                      />
                      <div className="d-flex flex-column">
                        <h6 className="ms-3 fs-6 mb-0">Funnel optimization</h6>
                        <div className="flag ms-3">
                          <img
                            src="/assets/imgs/testimonial-1/flag-1.png"
                            alt="infinia"
                          />
                          <span className="fs-8">
                            CEO of Tech Innovators Inc
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-900 border-bottom pb-4 mb-4">
                      The dedication and expertise of our My Yoga Network team
                      have transformed our wellness practices.{" "}
                      <span className="fw-bold">
                        Their personalized guidance and holistic programs
                      </span>{" "}
                      have significantly improved our mindfulness, flexibility,
                      and overall well-being, helping us stay focused on
                      achieving a balanced and healthy lifestyle.
                    </p>
                    <div className="d-flex">
                      <img
                        src="/assets/imgs/hero-4/star-yellow.svg"
                        alt="infinia"
                      />
                      <img
                        src="/assets/imgs/hero-4/star-yellow.svg"
                        alt="infinia"
                      />
                      <img
                        src="/assets/imgs/hero-4/star-yellow.svg"
                        alt="infinia"
                      />
                      <img
                        src="/assets/imgs/hero-4/star-yellow.svg"
                        alt="infinia"
                      />
                      <img
                        src="/assets/imgs/hero-4/star-yellow.svg"
                        alt="infinia"
                      />
                      <span className="fs-8 text-600 ms-2">
                        (For services and support)
                      </span>
                    </div>
                    <div className="position-absolute top-0 end-0 m-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={52}
                        height={52}
                        viewBox="0 0 52 52"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_551_13914)">
                          <path
                            d="M0 29.7144H11.1428L3.71422 44.5715H14.8571L22.2857 29.7144V7.42871H0V29.7144Z"
                            fill="#D1D5DB"
                          />
                          <path
                            d="M29.7148 7.42871V29.7144H40.8577L33.4291 44.5715H44.5719L52.0005 29.7144V7.42871H29.7148Z"
                            fill="#D1D5DB"
                          />
                        </g>
                        <defs>
                          <clipPath>
                            <rect width={52} height={52} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="bg-neutral-100 card-testimonial-3 p-5 rounded-3 position-relative">
                    <div className="d-flex align-items-center mb-5">
                      <img
                        className="avatar-lg"
                        src="/assets/imgs/testimonial-1/avatar-3.png"
                        alt="infinia"
                      />
                      <div className="d-flex flex-column">
                        <h6 className="ms-3 fs-6 mb-0">Integrations</h6>
                        <div className="flag ms-3">
                          <img
                            src="/assets/imgs/testimonial-1/flag-2.png"
                            alt="infinia"
                          />
                          <span className="fs-8">
                            CEO of Tech Innovators Inc
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-900 border-bottom pb-4 mb-4">
                      The dedication and expertise of our My Yoga Network team
                      have transformed our wellness journey.{" "}
                      <span className="fw-bold">
                        Their personalized guidance and holistic yoga programs
                      </span>{" "}
                      have significantly enhanced our well-being, mindfulness,
                      and balance, helping us focus on living a healthier, more
                      centered life.
                    </p>
                    <div className="d-flex">
                      <img
                        src="/assets/imgs/hero-4/star-yellow.svg"
                        alt="infinia"
                      />
                      <img
                        src="/assets/imgs/hero-4/star-yellow.svg"
                        alt="infinia"
                      />
                      <img
                        src="/assets/imgs/hero-4/star-yellow.svg"
                        alt="infinia"
                      />
                      <img
                        src="/assets/imgs/hero-4/star-yellow.svg"
                        alt="infinia"
                      />
                      <img
                        src="/assets/imgs/hero-4/star-yellow.svg"
                        alt="infinia"
                      />
                      <span className="fs-8 text-600 ms-2">
                        (For services and support)
                      </span>
                    </div>
                    <div className="position-absolute top-0 end-0 m-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={52}
                        height={52}
                        viewBox="0 0 52 52"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_551_13914)">
                          <path
                            d="M0 29.7144H11.1428L3.71422 44.5715H14.8571L22.2857 29.7144V7.42871H0V29.7144Z"
                            fill="#D1D5DB"
                          />
                          <path
                            d="M29.7148 7.42871V29.7144H40.8577L33.4291 44.5715H44.5719L52.0005 29.7144V7.42871H29.7148Z"
                            fill="#D1D5DB"
                          />
                        </g>
                        <defs>
                          <clipPath>
                            <rect width={52} height={52} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
              <div className="swiper-pagination" />
              <div className="text-center mt-8 position-relative z-3" />
            </Swiper>
          </div>
        </div>
        <div className="position-absolute top-0 start-50 translate-middle-x z-0">
          <img src="/assets/imgs/service-2/bg-line.png" alt="infinia" />
        </div>
        <div className="rotate-center ellipse-rotate-success position-absolute z-0" />
        <div className="rotate-center-rev ellipse-rotate-primary position-absolute z-1" />
      </section>
    </>
  );
}
