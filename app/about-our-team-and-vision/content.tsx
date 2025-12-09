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
                  Since 2012, My Yoga Network has pioneered on‑site and virtual
                  wellness programs that integrate yoga and mindfulness into
                  workplaces, schools, resorts, and healthcare institutions. Our
                  certified instructors tailor every session to your environment
                  and goals—whether you’re looking to boost employee focus,
                  enhance guest satisfaction, or support patient recovery. By
                  partnering with us, you bring a culture of holistic wellbeing
                  into your organization, improving productivity, morale, and
                  long‑term health outcomes.
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
                Behind every successful program is a diverse team of wellness
                strategists, physicians, and industry advisors. Our leadership
                blends decades of clinical experience, hospitality expertise,
                and behavioral science to design evidence‑based programs that
                deliver measurable results. Get to know the people who drive our
                innovation and are committed to transforming the way
                organizations approach health and wellbeing.
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

      <section className="section-padding position-relative overflow-hidden">
        <div className="container">
          <div className="row text-center d-none d-md-block">
            <div className="text-center">
              <h3 className="my-3">Our Clients</h3>
              <p className="fs-5">
                From Fortune 500 hospitality brands to school districts,
                universities. and hospitals, we’ve partnered with organizations
                that value tangible wellbeing outcomes. Our solutions are
                trusted by Westin Hotels, California State University, and the
                County of Los Angeles because we consistently deliver measurable
                improvements in engagement, satisfaction, and resilience.
                Explore our client roster and see how we can bring the same
                results to your organization.
              </p>
            </div>

            <div className="col mx-lg-auto">
              <div className="compatible-group bg-white p-5 mt-5 rounded-4 d-md-flex justify-content-between">
                <div className="row g-5">
                  <div className="col-12 col-sm-6 col-lg-3">
                    <div className="compatible hover-up text-center">
                      <img
                        src="/assets/imgs/clients/hotels/westin.png"
                        alt="Westin Hotels"
                        height={50}
                      />
                    </div>
                  </div>

                  <div className="col-12 col-sm-6 col-lg-3">
                    <div className="compatible hover-up text-center">
                      <img
                        src="/assets/imgs/clients/hotels/dagny.png"
                        alt="The Dagny"
                        height={50}
                      />
                    </div>
                  </div>

                  <div className="col-12 col-sm-6 col-lg-3">
                    <div className="compatible hover-up text-center">
                      <img
                        src="/assets/imgs/clients/hotels/highgate.webp"
                        alt="Highgate Hotel"
                        height={50}
                      />
                    </div>
                  </div>

                  <div className="col-12 col-sm-6 col-lg-3">
                    <div className="compatible hover-up text-center">
                      <img
                        src="/assets/imgs/clients/hotels/hyatt.png"
                        alt="Hyatt Hotels"
                        height={50}
                      />
                    </div>
                  </div>

                  <div className="col-12 col-sm-6 col-lg-3">
                    <div className="compatible hover-up text-center">
                      <img
                        src="/assets/imgs/clients/hotels/hilton.png"
                        alt="Hilton Grand Vacations Club"
                        height={100}
                      />
                    </div>
                  </div>

                  <div className="col-12 col-sm-6 col-lg-3">
                    <div className="compatible hover-up text-center">
                      <img
                        src="/assets/imgs/clients/hotels/aimbridge.png"
                        alt="Aimbridge Hospitality"
                        height={100}
                      />
                    </div>
                  </div>

                  <div className="col-12 col-sm-6 col-lg-3">
                    <div className="compatible hover-up text-center">
                      <img
                        src="/assets/imgs/clients/institutes/california-state-university.png"
                        alt="California State University"
                        height={100}
                      />
                    </div>
                  </div>

                  <div className="col-12 col-sm-6 col-lg-3">
                    <div className="compatible hover-up text-center">
                      <img
                        src="/assets/imgs/clients/institutes/osher-life-long-learning-institute.png"
                        alt="Osher Life Long Learning Institute"
                        height={100}
                      />
                    </div>
                  </div>

                  <div className="col-12 col-sm-6 col-lg-3">
                    <div className="compatible hover-up text-center">
                      <img
                        src="/assets/imgs/clients/institutes/mcbride-high-school.png"
                        alt="MCBride High School"
                        height={100}
                      />
                    </div>
                  </div>

                  <div className="col-12 col-sm-6 col-lg-3">
                    <div className="compatible hover-up text-center">
                      <img
                        src="/assets/imgs/clients/institutes/longfellow-elementary-school.png"
                        alt="Longfellow Elementary School"
                        height={100}
                      />
                    </div>
                  </div>

                  <div className="col-12 col-sm-6 col-lg-3">
                    <div className="compatible hover-up text-center">
                      <img
                        src="/assets/imgs/clients/institutes/bixby-elementary-school.png"
                        alt="Bixby Elementary School"
                        height={100}
                      />
                    </div>
                  </div>


                   <div className="col-12 col-sm-6 col-lg-3">
                    <div className="compatible hover-up text-center">
                      <img
                        src="/assets/imgs/clients/institutes/lbu-school.png"
                        alt="Long Beach Unified Schoo District logo"
                        height={100}
                      />
                    </div>
                  </div>


                   <div className="col-12 col-sm-6 col-lg-3">
                    <div className="compatible hover-up text-center">
                      <img
                        src="/assets/imgs/clients/county-of-los-angeles.png"
                        alt="County of Los Angeles"
                        height={100}
                      />
                    </div>
                  </div>

                
                  <div className="col-12 col-sm-6 col-lg-3">
                    <div className="compatible hover-up text-center">
                      <img
                        src="/assets/imgs/clients/institutes/sc-health-sciences-university.webp"
                        alt="South California Health Sciences University"
                        height={100}
                      />
                    </div>
                  </div>

                  <div className="col-12 col-sm-6 col-lg-3">
                    <div className="compatible hover-up text-center">
                      <img
                        src="/assets/imgs/clients/california-endowment.png"
                        alt="California Edowment"
                        height={80}
                      />
                    </div>
                  </div>

                  <div className="col-12 col-sm-6 col-lg-3">
                    <div className="compatible hover-up text-center">
                      <img
                        src="/assets/imgs/clients/california-psychological-association.png"
                        alt="California Psychological Association"
                        height={80}
                      />
                    </div>
                  </div>

                 
                   <div className="col-12 col-sm-6 col-lg-3">
                    <div className="compatible hover-up text-center">
                      <img
                        src="/assets/imgs/clients/lb-public-library-foundation.png"
                        alt="Longbeach Public Library Foundation"
                        height={80}
                      />
                    </div>
                  </div>

                  <div className="col-12 col-sm-6 col-lg-3">
                    <div className="compatible hover-up text-center">
                      <img
                        src="/assets/imgs/clients/wrd.png"
                        alt="Water Replenishment District"
                        height={80}
                      />
                    </div>
                  </div>

                  <div className="col-12 col-sm-6 col-lg-3">
                    <div className="compatible hover-up text-center">
                      <img
                        src="/assets/imgs/clients/hss.png"
                        alt="Hindu Swayamsevak Sangh USA"
                        height={80}
                      />
                    </div>
                  </div>

                  <div className="col-12 col-sm-6 col-lg-3">
                    <div className="compatible hover-up text-center">
                      <img
                        src="/assets/imgs/clients/intex.png"
                        alt="Intex"
                        height={80}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-project-2 pt-120 pb-8">
        <div className="container">
          <div className="row position-relative z-1">
            <div className="text-center">
              <h3 className="my-3">Meet Our Teachers</h3>
              <p className="fs-5">
                Our network of experienced wellness practitioners brings both
                technical expertise and compassionate guidance to every session.
                They are trained to adapt poses, breathing techniques, and
                mindfulness practices to diverse populations, ensuring
                inclusivity and maximizing health benefits.
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
                        <img
                          className="img-fluid w-100"
                          src="/assets/imgs/team/teachers/1.webp"
                          alt="Teacher"
                        />
                      </div>
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
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
      </section>

      <Contact1 />
    </>
  );
}
