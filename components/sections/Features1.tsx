"use client";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";



export default function Features1() {
  const [isOpen, setOpen] = useState(false);
 
  return (
    <>
      <section id="solutions" className="features-1 section-padding">
       <div className="container position-relative z-1">
					<div className="text-center mb-8">
						<h3 className="my-3 fw-black">Wellness Where You Need It</h3>
					</div>
				</div>
				
        <div className="container">
          <div className="row mt-10">
            {/* prettier-ignore */}
            <div className="col-lg-3 col-md-6">
							<div className="feature-item mb-5 mb-lg-0">
								<div className="icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
									<div className="icon">
										<img src="/assets/imgs/icons/hotel.svg" alt="Hotels & Resorts" width={80} height={80} />
									</div>
								</div>
								<h6>Hotels & Resorts</h6>
								<p>Transform wellness into a revenue and guest-experience advantage. From sunrise flows to signature retreats, we help properties boost satisfaction scores, increase engagement, and elevate brand appeal with certified instructors and turnkey, procurement-compliant programming.</p>
							</div>
						</div>
            <div className="col-lg-3 col-md-6">
              <div className="feature-item mb-5 mb-lg-0">
                <div className="icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
                  <div className="icon">
                    <img
                      src="/assets/imgs/icons/corporate.svg"
                      alt="Corporate Wellness" width={80} height={80}
                    />
                  </div>
                </div>
                <h6>Corporate Wellness</h6>
                <p>
              Improve team performance and retention by reducing burnout and supporting mental resilience. We deliver scalable on-site and virtual yoga, meditation, and stress-regulation programs that integrate seamlessly into your workplace culture.  </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature-item mb-5 mb-lg-0">
                <div className="icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
                  <div className="icon">
                    <img
                      src="/assets/imgs/icons/school.svg"
                      alt="Schools/Kids Yoga" width={80} height={80}
                    />
                  </div>
                </div>
                <h6>Schools & Kids Yoga</h6>
                <p>
              Bring developmentally appropriate, trauma-informed yoga into classrooms and after-school programming. Students build emotional regulation, confidence, and physical literacy—available at your school, district, or our Long Beach studio.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature-item mb-5 mb-lg-0">
                <div className="icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
                  <div className="icon">
                    <img
                      src="/assets/imgs/icons/health.svg"
                      alt="Healthcare & Rehabilitation" width={80} height={80}
                    />
                  </div>
                </div>
                <h6>Healthcare & Rehabilitation</h6>
                <p>
                Integrate therapeutic mind-body programming into patient care. Our clinical-aligned yoga supports pain modulation, mobility, anxiety reduction, and overall quality of life across hospitals, behavioral health, rehab, and outpatient settings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
