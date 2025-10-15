import Link from "next/link";

export default function Features10() {
  return (
    <>
      <section className="features-10 py-9 bg-primary-light">
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
    </>
  );
}
