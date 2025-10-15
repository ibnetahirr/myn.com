import Link from "next/link";

export default function Testimonial1() {
  return (
    <>
      <section className="section-testimonial-1 pb-120 @@classList position-relative">
        <div className="container position-relative z-1">
          <div className="row">
            <div className="col-lg-4">
              <div className="pe-8 mt-10">
                <div
                  className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2"
                  data-aos="zoom-in"
                  data-aos-delay={100}
                >
                  <img src="/assets/imgs/features-1/dots.png" alt="infinia" />
                  <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
                    Testimonials
                  </span>
                </div>
                <h3
                  className="ds-3 mt-3 mb-3"
                  data-aos="fade-zoom-in"
                  data-aos-delay={100}
                >
                  What our clients say
                </h3>
                <span
                  className="fs-5 fw-medium"
                  data-aos="fade-zoom-in"
                  data-aos-delay={300}
                >
                  Discover transformative feedback on our tailored yoga programs
                  and exclusive wellness benefits for your organization. 🔥
                </span>
                <div className="d-flex flex-wrap align-items-center mt-8">
                  <Link
                    href="/page-contact-1"
                    className="btn btn-outline-secondary hover-up"
                    data-aos="fade-zoom-in"
                    data-aos-delay={100}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        className="stroke-dark"
                        d="M8.89286 4.75H6.06818C5.34017 4.75 4.75 5.34017 4.75 6.06818C4.75 13.3483 10.6517 19.25 17.9318 19.25C18.6598 19.25 19.25 18.6598 19.25 17.9318V15.1071L16.1429 13.0357L14.5317 14.6468C14.2519 14.9267 13.8337 15.0137 13.4821 14.8321C12.8858 14.524 11.9181 13.9452 10.9643 13.0357C9.98768 12.1045 9.41548 11.1011 9.12829 10.494C8.96734 10.1537 9.06052 9.76091 9.32669 9.49474L10.9643 7.85714L8.89286 4.75Z"
                        stroke="#111827"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Contact Us
                  </Link>
                  <Link
                    href="#"
                    className="ms-5 ms-md-5 mt-5 mt-md-0 fw-bold"
                    data-aos="fade-zoom-in"
                    data-aos-delay={300}
                  >
                    Help Center
                    <svg
                      className="ms-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={14}
                      viewBox="0 0 24 14"
                      fill="none"
                    >
                      <path
                        d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z"
                        fill="black"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="bg-neutral-100 p-5 mt-8 rounded-3 position-relative card-hover"
                data-aos="fade-zoom-in"
                data-aos-delay={100}
              >
                <p className="text-900">
                  The team's dedication has transformed our wellness
                  initiatives.{" "}
                  <span className="fw-bold">
                    Their tailored yoga programs and exceptional support
                  </span>{" "}
                  have significantly enhanced our team’s well-being and
                  productivity, allowing us to prioritize what matters most.
                </p>
                <div className="d-flex align-items-center mt-5">
                  <img
                    className="avatar-lg"
                    src="/assets/imgs/testimonial-1/avatar-1.png"
                    alt="infinia"
                  />
                  <div className="d-flex flex-column">
                    <h6 className="ms-3 fs-6 mb-0">Kathryn Murphy</h6>
                    <div className="flag ms-3">
                      <img
                        src="/assets/imgs/testimonial-1/flag-1.png"
                        alt="infinia"
                      />
                      <span className="fs-8">CEO of Tech Innovators Inc</span>
                    </div>
                  </div>
                </div>
                <Link
                  href="#"
                  className="position-absolute top-0 start-0 end-0 bottom-0"
                />
              </div>
              <div
                className="bg-neutral-100 p-5 mt-5 rounded-3 position-relative card-hover"
                data-aos="fade-zoom-in"
                data-aos-delay={200}
              >
                <p className="text-900">
                  Our partnership with My Yoga Network has greatly enhanced our
                  wellness programs.{" "}
                  <span className="fw-bold">
                    Their diverse range of tailored yoga sessions has
                    effectively met our organization’s specific needs
                  </span>
                  . The flexible support and resources have enabled seamless
                  integration and well-being across our teams.
                </p>
                <div className="d-flex align-items-center mt-5">
                  <img
                    className="avatar-lg"
                    src="/assets/imgs/testimonial-1/avatar-2.png"
                    alt="infinia"
                  />
                  <div className="d-flex flex-column">
                    <h6 className="ms-3 fs-6 mb-0">Emily Davis</h6>
                    <div className="flag ms-3">
                      <img
                        src="/assets/imgs/testimonial-1/flag-2.png"
                        alt="infinia"
                      />
                      <span className="fs-8">Software Engineer</span>
                    </div>
                  </div>
                </div>
                <Link
                  href="#"
                  className="position-absolute top-0 start-0 end-0 bottom-0"
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="bg-neutral-100 p-5 mt-5 mt-lg-0 rounded-3 position-relative card-hover"
                data-aos="fade-zoom-in"
                data-aos-delay={300}
              >
                <p className="text-900">
                  The tailored wellness programs have enhanced our team’s
                  communication and professionalism. Additionally, the premium
                  support team’s responsiveness and expertise have ensured
                  minimal{" "}
                  <span className="fw-bold">
                    disruptions and swift solutions
                  </span>{" "}
                  to any challenges. I highly recommend My Yoga Network for any
                  organization seeking effective wellness solutions.
                </p>
                <div className="d-flex align-items-center mt-5">
                  <img
                    className="avatar-lg"
                    src="/assets/imgs/testimonial-1/avatar-3.png"
                    alt="infinia"
                  />
                  <div className="d-flex flex-column">
                    <h6 className="ms-3 fs-6 mb-0">Sarah Thompson</h6>
                    <div className="flag ms-3">
                      <img
                        src="/assets/imgs/testimonial-1/flag-3.png"
                        alt="infinia"
                      />
                      <span className="fs-8">Marketing Director</span>
                    </div>
                  </div>
                </div>
                <Link
                  href="#"
                  className="position-absolute top-0 start-0 end-0 bottom-0"
                />
              </div>
              <div
                className="bg-neutral-100 p-5 mt-5 rounded-3 position-relative card-hover"
                data-aos="fade-zoom-in"
                data-aos-delay={400}
              >
                <p className="text-900">
                  Our experience with My Yoga Network has exceeded expectations
                  in every way.{" "}
                  <span className="fw-bold">
                    The diverse range of tailored yoga programs has enabled us
                    to create highly effective wellness initiatives
                  </span>{" "}
                  that resonate with our organization. Equally impressive is the
                  premium support team’s proactive approach.
                </p>
                <div className="d-flex align-items-center mt-5">
                  <img
                    className="avatar-lg"
                    src="/assets/imgs/testimonial-1/avatar-4.png"
                    alt="infinia"
                  />
                  <div className="d-flex flex-column">
                    <h6 className="ms-3 fs-6 mb-0">Emily Adams</h6>
                    <div className="flag ms-3">
                      <img
                        src="/assets/imgs/testimonial-1/flag-4.png"
                        alt="infinia"
                      />
                      <span className="fs-8">Software Engineer</span>
                    </div>
                  </div>
                </div>
                <Link
                  href="#"
                  className="position-absolute top-0 start-0 end-0 bottom-0"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="position-absolute top-0 start-0 z-0">
          <img src="/assets/imgs/testimonial-1/bg-line.png" alt="infinia" />
        </div>
      </section>
    </>
  );
}
