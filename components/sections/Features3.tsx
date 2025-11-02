"use client";
import Link from "next/link";
import CountUp from "react-countup";

export default function Features3() {
  return (
    <>
    {/* Why MYN */}
        <section className="section-padding">
          <div className="container">
            <div className="text-center">
               <div className="d-flex align-items-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-3 py-1">
                <img src="/assets/imgs/features-1/dots.png" alt="infinia" />
                <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
                  {" "}
                  Our Edge in Wellness
                </span>
              </div>
              <h6
                className="ds-6 my-3"
                data-aos="fade-zoom-in"
                data-aos-delay={300}
              >
                Why Choose My Yoga Network?
              </h6>
              <p data-aos="fade-zoom-in" data-aos-delay={100}>
                Partner with My Yoga Network and benefit from our team of
                instructors and decades of experience.
              </p>
            </div>
            <div className="row mt-6 position-relative">
              <div className="col-lg-4">
                <div
                  className="p-2 mt-lg-8 rounded-4 shadow-1 bg-white position-relative z-1 hover-up"
                  data-aos="fade-zoom-in"
                  data-aos-delay={100}
                >
                  <div className="card-service bg-white p-6 border rounded-4">
                    <img
                      src="/assets/imgs/service-1/icon-1.png"
                      alt="infinia"
                    />
                    <h6 className="my-3">Industry-Specific Programs</h6>
                    <p className="mb-6">
                      Designed for hotels, corporates, schools & healthcare
                      providers.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="p-2 mt-5 rounded-4 shadow-1 bg-white position-relative z-1 hover-up"
                  data-aos="fade-zoom-in"
                  data-aos-delay={300}
                >
                  <div className="card-service bg-white p-6 border rounded-3">
                    <img
                      src="/assets/imgs/service-1/icon-2.png"
                      alt="infinia"
                    />
                    <h6 className="my-3">
                      Certified & Vetted Yoga Instructors
                    </h6>
                    <p className="mb-6">
                      Get reliable, professional, insured yoga instructors.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="p-2 mt-lg-8 mt-5 rounded-4 shadow-1 bg-white position-relative z-1 hover-up hover-up"
                  data-aos="fade-zoom-in"
                  data-aos-delay={200}
                >
                  <div className="card-service bg-white p-6 border rounded-3">
                    <img
                      src="/assets/imgs/service-1/icon-3.png"
                      alt="infinia"
                    />
                    <h6 className="my-3">Flexible Offerings</h6>
                    <p className="mb-6">
                      Monthly sessions, on-demand events, luxury retreats, or
                      trial plans.
                    </p>
                  </div>
                </div>
              </div>
              <div className="position-absolute top-50 start-50 translate-middle z-0">
                <img src="/assets/imgs/service-1/img-bg.png" alt="infinia" />
              </div>
            </div>
          </div>
        </section>
    </>
  );
}
