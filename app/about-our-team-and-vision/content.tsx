"use client";

import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Link from "next/link";
import CountUp from "react-countup";
import Contact1 from "@/components/sections/Contact1";

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
  };

  return (
    <>
      {/* Hero */}
      <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="pe-lg-8 me-lg-auto mb-5 mb-lg-0">
                <h6 className="text-primary">
                  Delivering Yoga & Wellness Since 2012
                </h6>
                <h3 className="ds-3">
                  We believe Yoga is for everyone and everywhere.
                </h3>
                <p className="fs-5">
                  We provide customized yoga and wellness programs for hotels &
                  resorts, corporates, schools, and healthcare facilities. Our
                  certified instructors seamlessly integrate into your
                  environment, delivering premium wellness experiences that
                  enhance relaxation, productivity, and overall well-being.
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-lg-6">
              <div className="rounded-4 border border-5 border-white zoom-img mb-5 mb-lg-0">
                <img
                  className="rounded-4 w-100"
                  src="/assets/imgs/about/hero-group-1.webp"
                  alt="Team image"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="rounded-4 border border-5 border-white zoom-img mt-5 mt-lg-0">
                <img
                  className="rounded-4 w-100"
                  src="/assets/imgs/about/hero-group-2.webp"
                  alt="Additional image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Team */}
      <section className="section-team-1 section-padding position-relative overflow-hidden">
        <div className="container">
          <div className="row position-relative z-1">
            <div className="text-center">
              <h3 className="my-3">Meet Our Team</h3>
              <p className="fs-5">
                Meet the talented and passionate team members who drive our
                company forward every day. <br className="d-none d-lg-block" />{" "}
                company forward every day.
              </p>
            </div>
          </div>
          <div className="row mt-6">
            <div className="col-lg-12 col-md-12 mb-lg-12 mb-7 text-center">
              <div className="position-relative d-inline-block z-1">
                <div className="zoom-img rounded-3">
                  <img
                    className="img-fluid w-100"
                    src="/assets/imgs/team/ram-bhakt.jpg"
                    alt="Ram Bhakt"
                  />
                </div>
                <Link
                  href="https://www.linkedin.com/in/myyoganetwork/"
                  target="_blank"
                  className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-3 hover-up"
                >
                  <h6>Ram Bhakt</h6>
                  <div className="d-flex">
                    <span className="fs-6 text-600 me-auto">Founder & CEO</span>
                    <i className="bi bi-linkedin" />
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-lg-4 mb-7 text-center">
              <div className="position-relative d-inline-block z-1">
                <div className="zoom-img rounded-3">
                  <img
                    className="img-fluid w-100"
                    src="/assets/imgs/team/jaime-lewis.jpg"
                    alt="Jaime K. Lewis, MD, DipABLM"
                  />
                </div>
                <Link
                  href="https://www.linkedin.com/in/jaime-k-lewis-md-dipablm-c-iayt-304497b4/"
                  target="_blank"
                  className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-3 hover-up"
                >
                  <h6>Jaime K. Lewis, MD, DipABLM</h6>
                  <div className="d-flex">
                    <span className="fs-6 text-600 me-auto">
                      Advisory Board
                    </span>
                    <i className="bi bi-linkedin" />
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-lg-4 mb-7 text-center">
              <div className="position-relative d-inline-block z-1">
                <div className="zoom-img rounded-3">
                  <img
                    className="img-fluid w-100"
                    src="/assets/imgs/team/anita-schill.jpg"
                    alt="Anita Schill, PhD, MPH"
                  />
                </div>
                <Link
                  href="https://www.linkedin.com/in/anita-schill-9a891256/"
                  className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-3 hover-up"
                >
                  <h6>Anita Schill, PhD, MPH</h6>
                  <div className="d-flex">
                    <span className="fs-6 text-600 me-auto">
                      Advisory Board
                    </span>
                    <i className="bi bi-linkedin" />
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-lg-4 mb-7 text-center">
              <div className="position-relative d-inline-block z-1">
                <div className="zoom-img rounded-3">
                  <img
                    className="img-fluid w-100"
                    src="/assets/imgs/team/michelle-carty.jpg"
                    alt="Adhana McCarthy, PA-C"
                  />
                </div>
                <Link
                  href="https://www.linkedin.com/in/adhanamccarthy/"
                  className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-3 hover-up"
                >
                  <h6>Adhana McCarthy, PA-C</h6>
                  <div className="d-flex">
                    <span className="fs-6 text-600 me-auto">
                      Advisory Board
                    </span>
                    <i className="bi bi-linkedin" />
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-lg-4 mb-7 text-center">
              <div className="position-relative d-inline-block z-1">
                <div className="zoom-img rounded-3">
                  <img
                    className="img-fluid w-100"
                    src="/assets/imgs/team/claudia-cardin-kleffner.jpg"
                    alt="Claudia Cardin-Kleffner, OT, CYT"
                  />
                </div>
                <Link
                  href="https://www.linkedin.com/in/myyoganetwork/"
                  className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-3 hover-up"
                >
                  <h6>Claudia Cardin-Kleffner, OT, CYT</h6>
                  <div className="d-flex">
                    <span className="fs-6 text-600 me-auto">
                      Advisory Board
                    </span>
                    <i className="bi bi-linkedin" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="position-absolute top-0 start-50 translate-middle-x z-0">
          <img src="/assets/imgs/template/bg-line.png" alt="Team Background" />
        </div>
        <div className="rotate-center ellipse-rotate-success position-absolute z-0" />
        <div className="rotate-center-rev ellipse-rotate-primary position-absolute z-0" />
      </section>

   
      <section className="section-project-2 pt-120 pb-8">
        <div className="container">
          <div className="row position-relative z-1">
            <div className="text-center">
              <h3 className="my-3">Meet Our Teachers</h3>
              <p className="fs-5">
                Our certified instructors deliver tailored, expert-led yoga
                sessions with dedication and precision.
              </p>
            </div>
          </div>

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
													<img className="img-fluid w-100" src="/assets/imgs/team/teachers/1.webp" alt="Teacher" />
												</div>
												<Link href="#" className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-4 hover-up">
													<h6>Teacher</h6>
													{/* <p className="text-900">Streamlining operations and growth strategies for market enhancement.</p> */}
												</Link>
											</div>
										</div>
									</SwiperSlide>

                  <SwiperSlide className="swiper-slide">
										<div className="text-center">
											<div className="zoom-img position-relative d-inline-block z-1">
												<div className="rounded-3 fix">
													<img className="img-fluid w-100" src="/assets/imgs/team/teachers/2.webp" alt="Teacher" />
												</div>
												<Link href="#" className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-4 hover-up">
													<h6>Teacher</h6>
													{/* <p className="text-900">Streamlining operations and growth strategies for market enhancement.</p> */}
												</Link>
											</div>
										</div>
									</SwiperSlide>

                  <SwiperSlide className="swiper-slide">
										<div className="text-center">
											<div className="zoom-img position-relative d-inline-block z-1">
												<div className="rounded-3 fix">
													<img className="img-fluid w-100" src="/assets/imgs/team/teachers/3.webp" alt="Teacher" />
												</div>
												<Link href="#" className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-4 hover-up">
													<h6>Teacher</h6>
													{/* <p className="text-900">Streamlining operations and growth strategies for market enhancement.</p> */}
												</Link>
											</div>
										</div>
									</SwiperSlide>

                  <SwiperSlide className="swiper-slide">
										<div className="text-center">
											<div className="zoom-img position-relative d-inline-block z-1">
												<div className="rounded-3 fix">
													<img className="img-fluid w-100" src="/assets/imgs/team/teachers/4.webp" alt="Teacher" />
												</div>
												<Link href="#" className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-4 hover-up">
													<h6>Teacher</h6>
													{/* <p className="text-900">Streamlining operations and growth strategies for market enhancement.</p> */}
												</Link>
											</div>
										</div>
									</SwiperSlide>

                  <SwiperSlide className="swiper-slide">
										<div className="text-center">
											<div className="zoom-img position-relative d-inline-block z-1">
												<div className="rounded-3 fix">
													<img className="img-fluid w-100" src="/assets/imgs/team/teachers/5.webp" alt="Teacher" />
												</div>
												<Link href="#" className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-4 hover-up">
													<h6>Teacher</h6>
													{/* <p className="text-900">Streamlining operations and growth strategies for market enhancement.</p> */}
												</Link>
											</div>
										</div>
									</SwiperSlide>

                  <SwiperSlide className="swiper-slide">
										<div className="text-center">
											<div className="zoom-img position-relative d-inline-block z-1">
												<div className="rounded-3 fix">
													<img className="img-fluid w-100" src="/assets/imgs/team/teachers/6.webp" alt="Teacher" />
												</div>
												<Link href="#" className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-4 hover-up">
													<h6>Teacher</h6>
													{/* <p className="text-900">Streamlining operations and growth strategies for market enhancement.</p> */}
												</Link>
											</div>
										</div>
									</SwiperSlide>


                  <SwiperSlide className="swiper-slide">
										<div className="text-center">
											<div className="zoom-img position-relative d-inline-block z-1">
												<div className="rounded-3 fix">
													<img className="img-fluid w-100" src="/assets/imgs/team/teachers/7.webp" alt="Teacher" />
												</div>
												<Link href="#" className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-4 hover-up">
													<h6>Teacher</h6>
													{/* <p className="text-900">Streamlining operations and growth strategies for market enhancement.</p> */}
												</Link>
											</div>
										</div>
									</SwiperSlide>
               

              </div>
            </Swiper>
          </div>
        </div>
      </section>

      {/*Static 2*/}
      <section className="section-static-1 position-relative fix z-0 py-8">
        <div className="container">
          <div className="inner">
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-auto col-md-12 text-center text-lg-start mb-5 mb-lg-0">
                <h4 className="mb-0">
                  See why we are <br /> trusted the world over
                </h4>
              </div>
              <div className="col-lg-auto col-md-6">
                <div className="counter-item-cover counter-item">
                  <div className="content text-center mx-auto">
                    <span className="h1 count fw-black text-primary my-0">
                      <span className="odometer" />
                      <CountUp enableScrollSpy={true} end={2728} />
                    </span>
                    <p>Wellness Sessions</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-auto col-md-6">
                <div className="counter-item-cover counter-item">
                  <div className="content text-center mx-auto">
                    <span className="h1 count fw-black text-primary my-0">
                      +<span className="odometer" />
                      <CountUp enableScrollSpy={true} end={28} />
                    </span>
                    <p>Partners Served</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-auto col-md-6">
                <div className="counter-item-cover counter-item">
                  <div className="content text-center mx-auto">
                    <span className="h1 count fw-black text-primary my-0">
                      +<span className="odometer" />
                      <CountUp enableScrollSpy={true} end={369} />
                    </span>
                    <p>Certified Instructors</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-auto col-md-6">
                <div className="counter-item-cover counter-item">
                  <div className="content text-center mx-auto">
                    <span className="h1 count fw-black text-primary my-0">
                      +<span className="odometer" />
                      <CountUp enableScrollSpy={true} end={27} />
                      <span>k</span>
                    </span>
                    <p>Our Network Size</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bouncing-blobs-container">
          <div className="bouncing-blobs-glass fix" />
          <div className="bouncing-blobs">
            <div className="bouncing-blob bouncing-blob--green" />
            <div className="bouncing-blob bouncing-blob--primary" />
            <div className="bouncing-blob bouncing-blob--infor bouncing-blob--infor-2" />
          </div>
        </div>
      </section>

      <section className="section-padding position-relative overflow-hidden">
        <div className="row text-center d-none d-md-block">
          <div className="text-center">
            <h3 className="my-3">Our Clients</h3>
            <p className="fs-5">
              Delivering Exceptional Yoga & Wellness Services since 2012.
            </p>
          </div>

          <div className="col-lg-10 col mx-lg-auto">
            <div className="compatible-group bg-white p-5 mt-5 rounded-4 d-md-flex justify-content-between">
              <div className="row g-4">
                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="compatible hover-up text-center">
                    <img
                      src="/assets/imgs/clients/hotels/westin.png"
                      alt="Westin Hotels"
                      height={50}
                    />
                    <p className="text-900 mt-3 mb-0">Westin Hotels</p>
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="compatible hover-up text-center">
                    <img
                      src="/assets/imgs/clients/hotels/dagny.png"
                      alt="The Dagny"
                      height={50}
                    />
                    <p className="text-900 mt-3 mb-0">The Dagny</p>
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="compatible hover-up text-center">
                    <img
                      src="/assets/imgs/clients/hotels/highgate.webp"
                      alt="Highgate Hotel"
                      height={50}
                    />
                    <p className="text-900 mt-3 mb-0">Highgate Hotel</p>
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="compatible hover-up text-center">
                    <img
                      src="/assets/imgs/clients/hotels/hyatt.png"
                      alt="Hyatt Hotels"
                      height={50}
                    />
                    <p className="text-900 mt-3 mb-0">Hyatt Hotels</p>
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="compatible hover-up text-center">
                    <img
                      src="/assets/imgs/clients/hotels/hilton.png"
                      alt="Hilton Grand Vacations Club"
                      height={100}
                    />
                    <p className="text-900 mt-3 mb-0">
                      Hilton Grand Vacations Club
                    </p>
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="compatible hover-up text-center">
                    <img
                      src="/assets/imgs/clients/hotels/aimbridge.png"
                      alt="Aimbridge Hospitality"
                      height={100}
                    />
                    <p className="text-900 mt-3 mb-0">Aimbridge Hospitality</p>
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="compatible hover-up text-center">
                    <img
                      src="/assets/imgs/clients/institutes/california-state-university.png"
                      alt="California State University"
                      height={100}
                    />
                    <p className="text-900 mt-3 mb-0">
                      California State University
                    </p>
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="compatible hover-up text-center">
                    <img
                      src="/assets/imgs/clients/institutes/osher-life-long-learning-institute.png"
                      alt="Osher Life Long Learning Institute"
                      height={100}
                    />
                    <p className="text-900 mt-3 mb-0">
                      Osher Life Long Learning Institute
                    </p>
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="compatible hover-up text-center">
                    <img
                      src="/assets/imgs/clients/institutes/mcbride-high-school.png"
                      alt="MCBride High School"
                      height={100}
                    />
                    <p className="text-900 mt-3 mb-0">MCBride High School</p>
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="compatible hover-up text-center">
                    <img
                      src="/assets/imgs/clients/institutes/longfellow-elementary-school.png"
                      alt="Longfellow Elementary School"
                      height={100}
                    />
                    <p className="text-900 mt-3 mb-0">
                      Longfellow Elementary School
                    </p>
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="compatible hover-up text-center">
                    <img
                      src="/assets/imgs/clients/institutes/bixby-elementary-school.png"
                      alt="Bixby Elementary School"
                      height={100}
                    />
                    <p className="text-900 mt-3 mb-0">
                      Bixby Elementary School
                    </p>
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="compatible hover-up text-center">
                    <img
                      src="/assets/imgs/clients/institutes/sc-health-sciences-university.webp"
                      alt="South California Health Sciences University"
                      height={100}
                    />
                    <p className="text-900 mt-3 mb-0">
                      South California Health Sciences University
                    </p>
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="compatible hover-up text-center">
                    <img
                      src="/assets/imgs/clients/california-endowment.png"
                      alt="California Edowment"
                      height={100}
                    />
                    <p className="text-900 mt-3 mb-0">California Edowment</p>
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="compatible hover-up text-center">
                    <img
                      src="/assets/imgs/clients/california-psychological-association.png"
                      alt="California Psychological Association"
                      height={100}
                    />
                    <p className="text-900 mt-3 mb-0">
                      California Psychological Association
                    </p>
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="compatible hover-up text-center">
                    <img
                      src="/assets/imgs/clients/county-of-los-angeles.png"
                      alt="County of Los Angeles"
                      height={100}
                    />
                    <p className="text-900 mt-3 mb-0">County of Los Angeles</p>
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="compatible hover-up text-center">
                    <img
                      src="/assets/imgs/clients/lb-public-library-foundation.png"
                      alt="Longbeach Public Library Foundation"
                      height={100}
                    />
                    <p className="text-900 mt-3 mb-0">
                      Longbeach Public Library Foundation
                    </p>
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="compatible hover-up text-center">
                    <img
                      src="/assets/imgs/clients/sacred-roots.webp"
                      alt="Sacred Roots"
                      height={100}
                    />
                    <p className="text-900 mt-3 mb-0">Sacred Roots</p>
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="compatible hover-up text-center">
                    <img
                      src="/assets/imgs/clients/wrd.png"
                      alt="WRD"
                      height={100}
                    />
                    <p className="text-900 mt-3 mb-0">WRD</p>
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="compatible hover-up text-center">
                    <img
                      src="/assets/imgs/clients/hss.png"
                      alt="HSS"
                      height={100}
                    />
                    <p className="text-900 mt-3 mb-0">HSS</p>
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="compatible hover-up text-center">
                    <img
                      src="/assets/imgs/clients/om.png"
                      alt="OM"
                      height={100}
                    />
                    <p className="text-900 mt-3 mb-0">OM</p>
                  </div>
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
