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
              <h3 className="ds-5 my-3 fw-black">
                Why Choose My Yoga Network?
              </h3>
              <p className="fs-5 mb-0">
                Partner with My Yoga Network and benefit from our team of
                instructors and decades of experience.
              </p>
            </div>
            <div className="row mt-6 position-relative">
              <div className="col-lg-4">
                <div
                  className="p-2 mt-lg-8 rounded-4 shadow-1 bg-white position-relative z-1 hover-up"
                >
                  <div className="card-service bg-white p-6 border rounded-4 text-center">
                    <img
                      src="/assets/imgs/why/1.png"
                      alt="Industry-Specific Programs"
                      height={70}
                    />
                    <h6 className="my-3">Industry-Specific Programs</h6>
                    <p className="mb-4">
                      Designed for hotels, corporates, schools & healthcare
                      providers.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="p-2 mt-5 rounded-4 shadow-1 bg-white position-relative z-1 hover-up"
                >
                  <div className="card-service bg-white p-6 border rounded-3 text-center">
                    <img
                      src="/assets/imgs/why/2.png"
                      alt="Certified & Vetted Yoga Instructors"
                      height={70}
                    />
                    <h6 className="my-3">
                      Certified & Vetted Yoga Instructors
                    </h6>
                    <p className="mb-4">
                      Get reliable, professional, insured yoga instructors.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="p-2 mt-lg-8 mt-5 rounded-4 shadow-1 bg-white position-relative z-1 hover-up hover-up"
                >
                  <div className="card-service bg-white p-6 border rounded-3 text-center">
                    <img
                      src="/assets/imgs/why/3.png"
                      alt="Flexible Offerings"
                      height={70}
                    />
                    <h6 className="my-3">Flexible Offerings</h6>
                    <p className="mb-4">
                      Monthly sessions, on-demand events, luxury retreats, or
                      trial plans.
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
