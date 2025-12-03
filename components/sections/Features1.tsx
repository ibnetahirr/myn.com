"use client";
import Link from "next/link";

export default function Features1() {
  return (
    <>
      <section id="solutions" className="features-1 section-padding">
        <div className="container position-relative z-1">
          <div className="text-center mb-8">
            <h3 className="my-3 fw-black">
              Tailored Yoga Programs for Every Environment
            </h3>
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
                <h6><Link href="/yoga-for-hotels-and-resorts">
								Hotels & Resorts</Link></h6>
                
								<p>From sunrise flows to wellness retreats, we help hotels boost guest satisfaction, increase engagement, and elevate brand appeal—all with procurement-ready solutions and certified instructors.</p>
							</div>
						</div>
            <div className="col-lg-3 col-md-6">
              <div className="feature-item mb-5 mb-lg-0">
                <div className="icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
                  <div className="icon">
                    <img
                      src="/assets/imgs/icons/corporate.svg"
                      alt="Corporate Wellness"
                      width={80}
                      height={80}
                    />
                  </div>
                </div>
                <h6><Link href="/corporate-wellness-programs">Corporations</Link></h6>
                <p>
                  We deliver scalable on-site or virtual wellness experiences
                  that integrate easily into your work culture, helping teams
                  stay focused, energized, and resilient.{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature-item mb-5 mb-lg-0">
                <div className="icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
                  <div className="icon">
                    <img
                      src="/assets/imgs/icons/school.svg"
                      alt="Schools/Kids Yoga"
                      width={80}
                      height={80}
                    />
                  </div>
                </div>
                <h6><Link href="/after-school-program">Schools Districts</Link></h6>
                <p>
                  Our after-school and in-class yoga offerings help children
                  regulate emotions, build confidence, and stay active in a
                  safe, nurturing environment.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature-item mb-5 mb-lg-0">
                <div className="icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
                  <div className="icon">
                    <img
                      src="/assets/imgs/icons/health.svg"
                      alt="Healthcare & Rehabilitation"
                      width={80}
                      height={80}
                    />
                  </div>
                </div>
                <h6><Link href="/yoga-for-healthcare-providers">
                  Healthcare Providers
                </Link></h6>
                <p>
                  Our wellness programs are designed for hospitals, clinics,
                  rehab centers, and behavioral health environments, enhancing
                  physical rehabilitation, reducing stress, and improving
                  quality of life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
