import Layout from "@/components/layout/Layout";
import Link from "next/link";


export const metadata = {
  title: "Health Care | My Yoga Network",
  description:
    "Enhance patient wellness with My Yoga Network's tailored yoga programs. Contact us at (888) 960-9240 or contact@myyoganetwork.com for healthcare solutions in Long Beach, CA.",
};

export default function HealthPage() {
  return (
    <Layout>
    
      {/* HERO */}
      <section className="section-feature-5">
        <div className="container-fluid position-relative section-padding">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="photo-description position-relative  rounded-4">
                  <img
                    className="rounded-4 border border-2 border-white position-relative z-1"
                    src="/assets/imgs/healthcare/hero.webp"
                    alt="Hotels"
                  />
                  <div className="box-gradient-1 ms-lg-8 position-absolute bottom-0 start-0 bg-linear-1 rounded-4 z-0" />
                </div>
              </div>
              <div className="col-lg-6 offset-lg-1 mt-lg-0 mt-5">
                <h4 className="ds-4 fw-regular">
                  Empower Your <span className="fw-bold" data-aos="fade-zoom-in" data-aos-delay={200}>Healthcare Facility</span> with Personalized Yoga Solutions
                </h4>
                <p className="fs-5">
                Holistic Healing Through Yoga for Patients in Healthcare Facilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
     
      <section className="features-10 py-9 bg-primary">
        <div className="container">
          <div className="row">
            {/* prettier-ignore */}
            <div className="col-lg-3 col-md-6">
              <div className="feature-item mb-5 position-relative mb-lg-0 bg-white p-5 rounded-4 hover-up" style={{ minHeight: "350px" }}>
                <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
                  <div className="icon">
                    <img src="/assets/imgs/features-1/icon-1.svg" alt="Weekly wellness icon" />
                  </div>
                </div>
                <h6>Weekly Wellness</h6>
                <p>Provide weekly therapeutic yoga sessions to support patients’ ongoing recovery and well-being. Tailored programs enhance flexibility, reduce stress, and promote holistic healing with expert guidance.</p>
                <Link href="#" className="text-primary fs-7 fw-bold">
                  Learn More
                  <svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={19} height={18} viewBox="0 0 19 18" fill="none">
                    <g clipPath="url(#clip0_399_9647)">
                      <path className="fill-dark" d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z" fill="#111827" />
                    </g>
                    <defs>
                      <clipPath>
                        <rect width={18} height={18} fill="white" transform="translate(0.5)" />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
                <div className="position-absolute end-0 top-0">
                  <img src="/assets/imgs/feature-10/bg-line.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="feature-item mb-5 position-relative mb-lg-0 bg-white p-5 rounded-4 hover-up"
                style={{ minHeight: "350px" }}
              >
                <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
                  <div className="icon">
                    <img
                      src="/assets/imgs/features-1/icon-2.svg"
                      alt="Monthly wellness icon"
                    />
                  </div>
                </div>
                <h6>Monthly Wellness</h6>
                <p>
                  Offer long-term patient wellness and preventative care with
                  monthly yoga sessions. Designed to improve mental clarity,
                  boost resilience, and support sustained health with
                  professional <br /> oversight.
                </p>
                <Link href="#" className="text-primary fs-7 fw-bold">
                  Learn More
                  <svg
                    className="ms-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width={19}
                    height={18}
                    viewBox="0 0 19 18"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_399_9647)">
                      <path
                        className="fill-dark"
                        d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z"
                        fill="#111827"
                      />
                    </g>
                    <defs>
                      <clipPath>
                        <rect
                          width={18}
                          height={18}
                          fill="white"
                          transform="translate(0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
                <div className="position-absolute end-0 top-0">
                  <img src="/assets/imgs/feature-10/bg-line.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="feature-item mb-5 position-relative mb-lg-0 bg-white p-5 rounded-4 hover-up"
                style={{ minHeight: "350px" }}
              >
                <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
                  <div className="icon">
                    <img
                      src="/assets/imgs/features-1/icon-3.svg"
                      alt="One-off sessions icon"
                    />
                  </div>
                </div>
                <h6>One-Off Sessions</h6>
                <p>
                  Perfect for patients needing an immediate wellness boost
                  without commitment. These sessions offer quick relief,
                  improved mobility, and a personalized <br /> touch from
                  certified instructors.
                </p>
                <Link href="#" className="text-primary fs-7 fw-bold">
                  Learn More
                  <svg
                    className="ms-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width={19}
                    height={18}
                    viewBox="0 0 19 18"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_399_9647)">
                      <path
                        className="fill-dark"
                        d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z"
                        fill="#111827"
                      />
                    </g>
                    <defs>
                      <clipPath>
                        <rect
                          width={18}
                          height={18}
                          fill="white"
                          transform="translate(0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
                <div className="position-absolute end-0 top-0">
                  <img src="/assets/imgs/feature-10/bg-line.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="feature-item mb-5 position-relative mb-lg-0 bg-white p-5 rounded-4 hover-up"
                style={{ minHeight: "350px" }}
              >
                <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
                  <div className="icon">
                    <img
                      src="/assets/imgs/features-1/icon-4.svg"
                      alt="Trial plan icon"
                    />
                  </div>
                </div>
                <h6>Trial Plan</h6>
                <p>
                  Experience our premium yoga services with a no-commitment
                  trial. Explore tailored sessions, expert-led practices, and a
                  preview of long-term wellness <br /> benefits in a risk-free
                  setting.
                </p>
                <Link href="#" className="text-primary fs-7 fw-bold">
                  Learn More
                  <svg
                    className="ms-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width={19}
                    height={18}
                    viewBox="0 0 19 18"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_399_9647)">
                      <path
                        className="fill-dark"
                        d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z"
                        fill="#111827"
                      />
                    </g>
                    <defs>
                      <clipPath>
                        <rect
                          width={18}
                          height={18}
                          fill="white"
                          transform="translate(0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
                <div className="position-absolute end-0 top-0">
                  <img src="/assets/imgs/feature-10/bg-line.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-team-1 position-relative fix section-padding">
        <div className="container position-relative z-2">
          <div className="text-center">
            <div
              className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2"
              data-aos="zoom-in"
              data-aos-delay={100}
            >
              <img
                src="/assets/imgs/features-1/dots.png"
                alt="My Yoga Network"
              />
              <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
                Benefits of Yoga
              </span>
            </div>
            <h3 className="ds-3 my-3 fw-regular">
              Benefits of Yoga for{" "}
              <span className=" fw-bold">
                Patient Wellness <br className="d-none d-lg-inline" />
              </span>
            </h3>
          </div>
          <div className="row mt-6 position-relative">
            {/* prettier-ignore */}
            <div className="col-lg-4 col-md-6">
                            <div className="p-2 rounded-4 shadow-1 bg-white position-relative z-1 hover-up mb-4">
                                <div className="card-service bg-white p-6 border rounded-4 text-center">
                                    <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
                                        <div className="icon">
                                            <img src="/assets/imgs/service-2/icon-1.svg" alt="My Yoga Network" />
                                        </div>
                                    </div>
                                    <h5 className="my-3">Effective Pain Management</h5>
<p className="mb-6">Yoga assists patients in reducing the intensity of pain, providing relief from chronic pain conditions and post-surgical discomfort with a targeted therapeutic approach.</p>
                                    <Link href="#" className="text-primary fs-7 fw-bold">
                                        Learn More
                                        <svg className=" ms-2 " xmlns="http://www.w3.org/2000/svg" width={19} height={18} viewBox="0 0 19 18" fill="none">
                                            <g clipPath="url(#clip0_399_9647)">
                                                <path d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z" fill="#111827" />
                                            </g>
                                            <defs>
                                                <clipPath>
                                                    <rect width={18} height={18} fill="white" transform="translate(0.5)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
            <div className="col-lg-4 col-md-6">
              <div className="p-2 rounded-4 shadow-1 bg-white position-relative z-1 hover-up mb-4">
                <div className="card-service bg-white p-6 border rounded-4 text-center">
                  <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
                    <div className="icon">
                      <img
                        src="/assets/imgs/service-2/icon-2.svg"
                        alt="My Yoga Network"
                      />
                    </div>
                  </div>
                  <h5 className="my-3">Optimized Recovery Enhancement</h5>
                  <p className="mb-6">
                    Therapeutic yoga facilitates the healing process by
                    enhancing strength, flexibility, and mobility, delivering a
                    comprehensive approach to patient recovery.
                  </p>
                  <Link href="#" className="text-primary fs-7 fw-bold">
                    Learn More
                    <svg
                      className=" ms-2 "
                      xmlns="http://www.w3.org/2000/svg"
                      width={19}
                      height={18}
                      viewBox="0 0 19 18"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_399_9647)">
                        <path
                          d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z"
                          fill="#111827"
                        />
                      </g>
                      <defs>
                        <clipPath>
                          <rect
                            width={18}
                            height={18}
                            fill="white"
                            transform="translate(0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="p-2 rounded-4 shadow-1 bg-white position-relative z-1 hover-up mb-4">
                <div className="card-service bg-white p-6 border rounded-4 text-center">
                  <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
                    <div className="icon">
                      <img
                        src="/assets/imgs/service-2/icon-3.svg"
                        alt="My Yoga Network"
                      />
                    </div>
                  </div>
                  <h5 className="my-3">Comprehensive Mental Health Support</h5>
                  <p className="mb-6">
                    Yoga effectively mitigates symptoms of anxiety, depression,
                    and stress, empowering patients to address the emotional
                    dimensions of their recovery journey with greater
                    resilience.
                  </p>
                  <Link href="#" className="text-primary fs-7 fw-bold">
                    Learn More
                    <svg
                      className=" ms-2 "
                      xmlns="http://www.w3.org/2000/svg"
                      width={19}
                      height={18}
                      viewBox="0 0 19 18"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_399_9647)">
                        <path
                          d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z"
                          fill="#111827"
                        />
                      </g>
                      <defs>
                        <clipPath>
                          <rect
                            width={18}
                            height={18}
                            fill="white"
                            transform="translate(0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="p-2 rounded-4 shadow-1 bg-white position-relative z-1 hover-up mb-4">
                <div className="card-service bg-white p-6 border rounded-4 text-center">
                  <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
                    <div className="icon">
                      <img
                        src="/assets/imgs/service-2/icon-4.svg"
                        alt="My Yoga Network"
                      />
                    </div>
                  </div>
                  <h5 className="my-3">Enhanced Sleep Quality</h5>
                  <p className="mb-6">
                    Relaxing yoga practices promote improved sleep quality, a
                    critical factor in supporting patients' overall healing and
                    recovery process.
                  </p>
                  <Link href="#" className="text-primary fs-7 fw-bold">
                    Learn More
                    <svg
                      className=" ms-2 "
                      xmlns="http://www.w3.org/2000/svg"
                      width={19}
                      height={18}
                      viewBox="0 0 19 18"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_399_9647)">
                        <path
                          d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z"
                          fill="#111827"
                        />
                      </g>
                      <defs>
                        <clipPath>
                          <rect
                            width={18}
                            height={18}
                            fill="white"
                            transform="translate(0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="p-2 rounded-4 shadow-1 bg-white position-relative z-1 hover-up mb-4">
                <div className="card-service bg-white p-6 border rounded-4 text-center">
                  <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
                    <div className="icon">
                      <img
                        src="/assets/imgs/service-2/icon-5.svg"
                        alt="My Yoga Network"
                      />
                    </div>
                  </div>
                  <h5 className="my-3">Improved Mobility</h5>
                  <p className="mb-6">
                    Gentle stretching and controlled movements facilitate the
                    restoration of mobility, assisting patients in regaining
                    functional movement with enhanced efficacy.
                  </p>
                  <Link href="#" className="text-primary fs-7 fw-bold">
                    Learn More
                    <svg
                      className=" ms-2 "
                      xmlns="http://www.w3.org/2000/svg"
                      width={19}
                      height={18}
                      viewBox="0 0 19 18"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_399_9647)">
                        <path
                          d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z"
                          fill="#111827"
                        />
                      </g>
                      <defs>
                        <clipPath>
                          <rect
                            width={18}
                            height={18}
                            fill="white"
                            transform="translate(0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="p-2 rounded-4 shadow-1 bg-white position-relative z-1 hover-up mb-4">
                <div className="card-service bg-white p-6 border rounded-4 text-center">
                  <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
                    <div className="icon">
                      <img
                        src="/assets/imgs/service-2/icon-6.svg"
                        alt="My Yoga Network"
                      />
                    </div>
                  </div>
                  <h5 className="my-3">Enhanced Immune Function</h5>
                  <p className="mb-6">
                    Yoga practice is proven to bolster the immune system,
                    providing critical support for patients in fortifying
                    resilience throughout their recovery journey.
                  </p>
                  <Link href="#" className="text-primary fs-7 fw-bold">
                    Learn More
                    <svg
                      className=" ms-2 "
                      xmlns="http://www.w3.org/2000/svg"
                      width={19}
                      height={18}
                      viewBox="0 0 19 18"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_399_9647)">
                        <path
                          d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z"
                          fill="#111827"
                        />
                      </g>
                      <defs>
                        <clipPath>
                          <rect
                            width={18}
                            height={18}
                            fill="white"
                            transform="translate(0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <svg
              className="position-absolute top-50 start-50 translate-middle z-0"
              xmlns="http://www.w3.org/2000/svg"
              width={828}
              height={699}
              viewBox="0 0 828 699"
              fill="none"
            >
              <path
                className="fill-primary-soft"
                d="M0 130.481C0 110.236 15.1267 93.1822 35.2276 90.7667L783.228 0.880261C807.04 -1.98124 828 16.611 828 40.5945V533.155C828 552.691 813.888 569.369 794.622 572.603L46.6224 698.173C22.2271 702.269 0 683.462 0 658.725V130.481Z"
                fill="#F5EEFF"
              />
            </svg>
          </div>
        </div>
        <div className="position-absolute top-0 start-50 translate-middle-x z-0">
          <img src="/assets/imgs/service-2/bg-line.png" alt="My Yoga Network" />
        </div>
        <div className="rotate-center ellipse-rotate-success position-absolute z-1" />
        <div className="rotate-center-rev ellipse-rotate-primary position-absolute z-1" />
      </section>
   
    
      <section className="section-team-1 section-padding position-relative overflow-hidden">
        <div className="container">
          <div className="row position-relative z-1">
            <div className="text-center">
              <div
                className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2"
                data-aos="zoom-in"
                data-aos-delay={100}
              ></div>
              <h3
                className="ds-3 my-3"
                data-aos="fade-zoom-in"
                data-aos-delay={200}
              >
                Meet Our Teachers
              </h3>
              <p className="fs-5" data-aos="fade-zoom-in" data-aos-delay={300}>
                Our certified instructors deliver tailored, expert-led yoga
                sessions with dedication and precision.{" "}
              </p>
            </div>
          </div>
          <div className="row mt-6">
            {/* prettier-ignore */}
            <div className="col-lg-3 col-md-6 mb-lg-4 mb-7 text-center" data-aos="fade-zoom-in" data-aos-delay={100}>
              <div className="position-relative d-inline-block z-1">
                <div className="zoom-img rounded-3">
                  <img className="img-fluid w-100" src="/assets/imgs/team-1/teacher-1.jpg" alt="my-yoga-network" />
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 mb-lg-4 mb-7 text-center"
              data-aos="fade-zoom-in"
              data-aos-delay={200}
            >
              <div className="position-relative d-inline-block z-1">
                <div className="zoom-img rounded-3">
                  <img
                    className="img-fluid w-100"
                    src="/assets/imgs/team-1/teacher-2.jpg"
                    alt="my-yoga-network"
                  />
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 mb-lg-4 mb-7 text-center"
              data-aos="fade-zoom-in"
              data-aos-delay={300}
            >
              <div className="position-relative d-inline-block z-1">
                <div className="zoom-img rounded-3">
                  <img
                    className="img-fluid w-100"
                    src="/assets/imgs/team-1/teacher-3.jpg"
                    alt="my-yoga-network"
                  />
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 mb-lg-4 mb-7 text-center"
              data-aos="fade-zoom-in"
              data-aos-delay={400}
            >
              <div className="position-relative d-inline-block z-1">
                <div className="zoom-img rounded-3">
                  <img
                    className="img-fluid w-100"
                    src="/assets/imgs/team-1/teacher-4.jpg"
                    alt="my-yoga-network"
                  />
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 mb-lg-4 mb-7 text-center"
              data-aos="fade-zoom-in"
              data-aos-delay={100}
            ></div>
            <div
              className="col-lg-3 col-md-6 mb-lg-4 mb-7 text-center"
              data-aos="fade-zoom-in"
              data-aos-delay={200}
            ></div>
            <div
              className="col-lg-3 col-md-6 mb-lg-4 mb-7 text-center"
              data-aos="fade-zoom-in"
              data-aos-delay={300}
            ></div>
            <div
              className="col-lg-3 col-md-6 mb-lg-4 mb-7 text-center"
              data-aos="fade-zoom-in"
              data-aos-delay={400}
            ></div>
          </div>
        </div>
        <div className="position-absolute top-0 start-50 translate-middle-x z-0">
          <img src="/assets/imgs/team-1/bg-line.png" alt="my-yoga-network" />
        </div>
        <div className="rotate-center ellipse-rotate-success position-absolute z-0" />
        <div className="rotate-center-rev ellipse-rotate-primary position-absolute z-0" />
      </section>
    </Layout>
  );
}