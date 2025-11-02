import Layout from "@/components/layout/Layout";
import Link from "next/link";

export const metadata = {
  title: "Work Place | My Yoga Network",
  description:
    "Enhance workplace wellness with My Yoga Network's corporate yoga programs. Contact us at (888) 960-9240 or contact@myyoganetwork.com for tailored solutions in Long Beach, CA.",
};

export default function WorkPlacePage() {
  return (
    <Layout>

       {/* HERO */}
        <section className="section-feature-5">
				<div className="container-fluid position-relative section-padding">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-5">
								<div className="photo-description position-relative  rounded-4">
									<img className="rounded-4 border border-2 border-white position-relative z-1" src="/assets/imgs/workplace/hero.webp" alt="Hotels" />
									<div className="box-gradient-1 ms-lg-8 position-absolute bottom-0 start-0 bg-linear-1 rounded-4 z-0" />
								</div>
							</div>
							<div className="col-lg-6 offset-lg-1 mt-lg-0 mt-5">
								<h4 className="ds-4 fw-regular">Corporate Yoga Programs to Energize Your <span className="fw-bold" data-aos="fade-zoom-in" data-aos-delay={200}>Workplace</span></h4>
								<p className="fs-5">Support your employees’ physical and mental well-being with yoga sessions designed specifically for the modern workplace. Whether your team works from the office, remotely, or in a hybrid setup, our certified instructors bring wellness directly to them.</p>
								<Link href="#" className="btn btn-outline-secondary hover-up bg-transparent mt-5" data-aos="fade-zoom-in" data-aos-delay={200}>
									Explore Now
									<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
										<path className="stroke-dark" d="M17.25 15.25V6.75H8.75" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										<path className="stroke-dark" d="M17 7L6.75 17.25" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

       {/*Hotel Services */}
        <section className="section-padding">
          <div className="container">
            <div className="text-center">
              <div
                className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2"
                data-aos="zoom-in"
                data-aos-delay={100}
              >
                <img src="/assets/imgs/features-1/dots.png" alt="infinia" />
                <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
                  What we offers
                </span>
              </div>
              <h3
                className="ds-3 my-3"
                data-aos="fade-zoom-in"
                data-aos-delay={300}
              >
                Explore Our Services
              </h3>
              <p data-aos="fade-zoom-in" data-aos-delay={100}>
                Unlock Wellness Potential with Tailored Yoga Solutions.
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
                      src="/assets/imgs/service-1/icon-1.svg"
                      alt="infinia"
                    />
                    <h6 className="my-3">Monthly Program</h6>
                    <p className="mb-6">
                      Consistent monthly yoga and mindfulness sessions,
                      customized for your group, fostering balance, growth, and
                      sustained well-being.
                    </p>

                    <Link
                      href="#"
                      className="rounded-pill border icon-shape d-inline-flex gap-3 icon-learn-more"
                    >
                      <svg
                        className="plus"
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_226_5470)">
                          <path
                            className="fill-dark"
                            d="M15.375 7.375H8.625V0.625C8.625 0.279813 8.34519 0 8 0C7.65481 0 7.375 0.279813 7.375 0.625V7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H7.375V15.375C7.375 15.7202 7.65481 16 8 16C8.34519 16 8.625 15.7202 8.625 15.375V8.625H15.375C15.7202 8.625 16 8.34519 16 8C16 7.65481 15.7202 7.375 15.375 7.375Z"
                            fill="#111827"
                          />
                        </g>
                        <defs>
                          <clipPath>
                            <rect width={16} height={16} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <svg
                        className="arrow"
                        xmlns="http://www.w3.org/2000/svg"
                        width={18}
                        height={10}
                        viewBox="0 0 18 10"
                        fill="none"
                      >
                        <path
                          className="fill-dark"
                          d="M13.0633 0.0634766L12.2615 0.86529L15.8294 4.43321H0V5.56716H15.8294L12.2615 9.13505L13.0633 9.93686L18 5.00015L13.0633 0.0634766Z"
                          fill="#111827"
                        />
                      </svg>
                      <span className="fw-bold fs-7 text-900">Learm More</span>
                    </Link>
                  </div>
                </div>
                <div
                  className="p-2 mt-5 rounded-4 shadow-1 bg-white position-relative z-1 hover-up"
                  data-aos="fade-zoom-in"
                  data-aos-delay={200}
                >
                  <div className="card-service bg-white p-6 border rounded-3">
                    <img
                      src="/assets/imgs/service-1/icon-2.svg"
                      alt="infinia"
                    />
                    <h6 className="my-3">On-Demand Special Events</h6>
                    <p className="mb-6">
                      Enhance any occasion with wellness retreats, corporate
                      sessions, and themed yoga workshops that inspire,
                      rejuvenate, and unite communities.
                    </p>
                    <Link
                      href="#"
                      className="rounded-pill border icon-shape d-inline-flex gap-3 icon-learn-more"
                    >
                      <svg
                        className="plus"
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_226_5470)">
                          <path
                            className="fill-dark"
                            d="M15.375 7.375H8.625V0.625C8.625 0.279813 8.34519 0 8 0C7.65481 0 7.375 0.279813 7.375 0.625V7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H7.375V15.375C7.375 15.7202 7.65481 16 8 16C8.34519 16 8.625 15.7202 8.625 15.375V8.625H15.375C15.7202 8.625 16 8.34519 16 8C16 7.65481 15.7202 7.375 15.375 7.375Z"
                            fill="#111827"
                          />
                        </g>
                        <defs>
                          <clipPath>
                            <rect width={16} height={16} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <svg
                        className="arrow"
                        xmlns="http://www.w3.org/2000/svg"
                        width={18}
                        height={10}
                        viewBox="0 0 18 10"
                        fill="none"
                      >
                        <path
                          className="fill-dark"
                          d="M13.0633 0.0634766L12.2615 0.86529L15.8294 4.43321H0V5.56716H15.8294L12.2615 9.13505L13.0633 9.93686L18 5.00015L13.0633 0.0634766Z"
                          fill="#111827"
                        />
                      </svg>
                      <span className="fw-bold fs-7 text-900">Learm More</span>
                    </Link>
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
                      src="/assets/imgs/service-1/icon-3.svg"
                      alt="infinia"
                    />
                    <h6 className="my-3">Luxury Wellness Offerings</h6>
                    <p className="mb-6">
                      Exclusive one-on-one yoga training to complement spa and
                      concierge services, delivering a premium, tailored
                      wellness experience for guests.
                    </p>
                    <Link
                      href="#"
                      className="rounded-pill border icon-shape d-inline-flex gap-3 icon-learn-more"
                    >
                      <svg
                        className="plus"
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_226_5470)">
                          <path
                            className="fill-dark"
                            d="M15.375 7.375H8.625V0.625C8.625 0.279813 8.34519 0 8 0C7.65481 0 7.375 0.279813 7.375 0.625V7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H7.375V15.375C7.375 15.7202 7.65481 16 8 16C8.34519 16 8.625 15.7202 8.625 15.375V8.625H15.375C15.7202 8.625 16 8.34519 16 8C16 7.65481 15.7202 7.375 15.375 7.375Z"
                            fill="#111827"
                          />
                        </g>
                        <defs>
                          <clipPath>
                            <rect width={16} height={16} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <svg
                        className="arrow"
                        xmlns="http://www.w3.org/2000/svg"
                        width={18}
                        height={10}
                        viewBox="0 0 18 10"
                        fill="none"
                      >
                        <path
                          className="fill-dark"
                          d="M13.0633 0.0634766L12.2615 0.86529L15.8294 4.43321H0V5.56716H15.8294L12.2615 9.13505L13.0633 9.93686L18 5.00015L13.0633 0.0634766Z"
                          fill="#111827"
                        />
                      </svg>
                      <span className="fw-bold fs-7 text-900">Learm More</span>
                    </Link>
                  </div>
                </div>
                <div
                  className="p-2 mt-5 rounded-4 shadow-1 bg-white position-relative z-1 hover-up"
                  data-aos="fade-zoom-in"
                  data-aos-delay={100}
                >
                  <div className="card-service bg-white p-6 border rounded-3">
                    <img
                      src="/assets/imgs/service-1/icon-4.svg"
                      alt="infinia"
                    />
                    <h6 className="my-3">Corporate Retreat Program</h6>
                    <p className="mb-6">
                      Half- or full-day retreats tailored to boost team
                      building, reduce stress, and promote workplace harmony.
                    </p>

                    <Link
                      href="#"
                      className="rounded-pill border icon-shape d-inline-flex gap-3 icon-learn-more"
                    >
                      <svg
                        className="plus"
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_226_5470)">
                          <path
                            className="fill-dark"
                            d="M15.375 7.375H8.625V0.625C8.625 0.279813 8.34519 0 8 0C7.65481 0 7.375 0.279813 7.375 0.625V7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H7.375V15.375C7.375 15.7202 7.65481 16 8 16C8.34519 16 8.625 15.7202 8.625 15.375V8.625H15.375C15.7202 8.625 16 8.34519 16 8C16 7.65481 15.7202 7.375 15.375 7.375Z"
                            fill="#111827"
                          />
                        </g>
                        <defs>
                          <clipPath>
                            <rect width={16} height={16} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <svg
                        className="arrow"
                        xmlns="http://www.w3.org/2000/svg"
                        width={18}
                        height={10}
                        viewBox="0 0 18 10"
                        fill="none"
                      >
                        <path
                          className="fill-dark"
                          d="M13.0633 0.0634766L12.2615 0.86529L15.8294 4.43321H0V5.56716H15.8294L12.2615 9.13505L13.0633 9.93686L18 5.00015L13.0633 0.0634766Z"
                          fill="#111827"
                        />
                      </svg>
                      <span className="fw-bold fs-7 text-900">Learm More</span>
                    </Link>
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
                      src="/assets/imgs/service-1/icon-5.svg"
                      alt="infinia"
                    />
                    <h6 className="my-3">Mind & Body Coaching</h6>
                    <p className="mb-6">
                      Tailored yoga, meditation, and lifestyle coaching to
                      enhance mental clarity, resilience, and well-being for
                      your team.
                    </p>
                    <Link
                      href="#"
                      className="rounded-pill border icon-shape d-inline-flex gap-3 icon-learn-more"
                    >
                      <svg
                        className="plus"
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_226_5470)">
                          <path
                            className="fill-dark"
                            d="M15.375 7.375H8.625V0.625C8.625 0.279813 8.34519 0 8 0C7.65481 0 7.375 0.279813 7.375 0.625V7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H7.375V15.375C7.375 15.7202 7.65481 16 8 16C8.34519 16 8.625 15.7202 8.625 15.375V8.625H15.375C15.7202 8.625 16 8.34519 16 8C16 7.65481 15.7202 7.375 15.375 7.375Z"
                            fill="#111827"
                          />
                        </g>
                        <defs>
                          <clipPath>
                            <rect width={16} height={16} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <svg
                        className="arrow"
                        xmlns="http://www.w3.org/2000/svg"
                        width={18}
                        height={10}
                        viewBox="0 0 18 10"
                        fill="none"
                      >
                        <path
                          className="fill-dark"
                          d="M13.0633 0.0634766L12.2615 0.86529L15.8294 4.43321H0V5.56716H15.8294L12.2615 9.13505L13.0633 9.93686L18 5.00015L13.0633 0.0634766Z"
                          fill="#111827"
                        />
                      </svg>
                      <span className="fw-bold fs-7 text-900">Learm More</span>
                    </Link>
                  </div>
                </div>
                <div
                  className="p-2 mt-5 rounded-4 shadow-1 bg-white position-relative z-1 hover-up"
                  data-aos="fade-zoom-in"
                  data-aos-delay={300}
                >
                  <div className="card-service bg-white p-6 border rounded-3">
                    <img
                      src="/assets/imgs/service-1/icon-6.svg"
                      alt="infinia"
                    />
                    <h6 className="my-3">Virtual Wellness Hub</h6>
                    <p className="mb-6">
                      Enjoy live and on-demand yoga sessions, wellness guides,
                      and community support, available anytime for your
                      organization.
                    </p>
                    <Link
                      href="#"
                      className="rounded-pill border icon-shape d-inline-flex gap-3 icon-learn-more"
                    >
                      <svg
                        className="plus"
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_226_5470)">
                          <path
                            className="fill-dark"
                            d="M15.375 7.375H8.625V0.625C8.625 0.279813 8.34519 0 8 0C7.65481 0 7.375 0.279813 7.375 0.625V7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H7.375V15.375C7.375 15.7202 7.65481 16 8 16C8.34519 16 8.625 15.7202 8.625 15.375V8.625H15.375C15.7202 8.625 16 8.34519 16 8C16 7.65481 15.7202 7.375 15.375 7.375Z"
                            fill="#111827"
                          />
                        </g>
                        <defs>
                          <clipPath>
                            <rect width={16} height={16} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <svg
                        className="arrow"
                        xmlns="http://www.w3.org/2000/svg"
                        width={18}
                        height={10}
                        viewBox="0 0 18 10"
                        fill="none"
                      >
                        <path
                          className="fill-dark"
                          d="M13.0633 0.0634766L12.2615 0.86529L15.8294 4.43321H0V5.56716H15.8294L12.2615 9.13505L13.0633 9.93686L18 5.00015L13.0633 0.0634766Z"
                          fill="#111827"
                        />
                      </svg>
                      <span className="fw-bold fs-7 text-900">Learm More</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="position-absolute top-50 start-50 translate-middle z-0">
                <img src="/assets/imgs/service-1/img-bg.png" alt="infinia" />
              </div>
            </div>
          </div>
        </section>

      
     
    </Layout>
  );
}