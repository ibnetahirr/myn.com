"use client";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";



export default function Features1() {
  const [isOpen, setOpen] = useState(false);
 
  return (
    <>
      <section id="solutions" className="features-1 section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <h2 className="fw-medium mt-4 lh-sm">
                Elevating
                <span className="fw-black"> Wellness Journeys</span> with
                <span
                  className="text-primary fst-italic"
                >
                  {" "}
                  Tailored Yoga Programs.
                </span>
              </h2>
            </div>
            <div className="col-lg-8">
              <div className="d-flex flex-md-row flex-column align-items-center position-relative ps-lg-8 pt-lg-0 pt-10">
                <div
                  className="pe-md-3 pb-3 pb-md-0 position-relative z-1"
                >
                   <img
                    className="rounded-3 border border-3 border-white"
                    src="/assets/imgs/features-1/img-2.png"
                    alt="my-yoga-network"
                    height={150}
                  />
                </div>
              
                <div
                  className="pe-md-3 pb-3 pb-md-0 position-relative z-1"
                >
                  <img
                    className="rounded-3 border border-3 border-white"
                    src="/assets/imgs/home/1.jpeg"
                    alt="my-yoga-network"
                    height={300}
                  />
                </div>
                <img
                  className="position-absolute top-50 start-0 translate-middle-y z-0"
                  src="/assets/imgs/features-1/bg-ellipse.png"
                  alt="my-yoga-network"
                />
                <img
                  className="position-absolute z-2 star-lg"
                  src="/assets/imgs/features-1/star-lg.png"
                  alt="my-yoga-network"
                />
                <img
                  className="position-absolute z-2 star-md"
                  src="/assets/imgs/features-1/star-md.png"
                  alt="my-yoga-network"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row mt-10">
            {/* prettier-ignore */}
            <div className="col-lg-3 col-md-6">
							<div className="feature-item mb-5 mb-lg-0">
								<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
									<div className="icon">
										<img src="/assets/imgs/icons/hotel.svg" alt="Hotels & Resorts" width={80} height={80} />
									</div>
								</div>
								<h6>Hotels & Resorts</h6>
								<p>Boost guest satisfaction and elevate your property’s appeal with expertly designed yoga, meditation, and wellness retreats.</p>
							</div>
						</div>
            <div className="col-lg-3 col-md-6">
              <div className="feature-item mb-5 mb-lg-0">
                <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
                  <div className="icon">
                    <img
                      src="/assets/imgs/icons/corporate.svg"
                      alt="Corporate Clients" width={80} height={80}
                    />
                  </div>
                </div>
                <h6>Corporate Clients</h6>
                <p>
                  Enhance employee productivity, reduce stress, and promote
                  well-being with tailored yoga and wellness programs.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature-item mb-5 mb-lg-0">
                <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
                  <div className="icon">
                    <img
                      src="/assets/imgs/icons/school.svg"
                      alt="Schools/Kids Yoga" width={80} height={80}
                    />
                  </div>
                </div>
                <h6>Schools/Kids Yoga</h6>
                <p>
                  Offer Kids Yoga at your school or our studio to build focus,
                  flexibility, and emotional resilience in students.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature-item mb-5 mb-lg-0">
                <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
                  <div className="icon">
                    <img
                      src="/assets/imgs/icons/health.svg"
                      alt="Healthcare Providers" width={80} height={80}
                    />
                  </div>
                </div>
                <h6>Healthcare Providers</h6>
                <p>
                  Enhance your healthcare services with therapeutic yoga and
                  wellness sessions for patients, staff, and caregivers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
