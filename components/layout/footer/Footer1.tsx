import Link from "next/link";

export default function Footer1() {
  return (
    <>
      <footer>
        <div className="section-footer position-relative">
          <div className="container-fluid bgft-1">
            <div className="container position-relative z-2">
              <div className="row py-90">
                {/* Logo + Name + Description */}
                <div
                  className="col-lg-4 pe-10"
                >
                  <Link
                    href="/"
                    className="d-flex align-items-center gap-3 mb-3"
                    aria-label="Go to homepage"
                  >
                    <img
                      src="/assets/imgs/logo/favicon.svg"
                      alt="My Yoga Network Logo"
                      width={50}
                      height={50}
                    />
                    <span className="text-white fw-bold fs-5">
                      My Yoga Network
                    </span>
                  </Link>

                  <p className="text-white fw-medium mt-3 mb-6 opacity-50">
                    My Yoga Network delivers personalized yoga and wellness
                    programs to hotels, corporates, schools, and healthcare
                    facilities, enhancing well-being and productivity.
                  </p>

                  {/* Social Icons */}
                  <nav aria-label="Social Media Links">
                    <div className="d-flex social-icons">
                      <Link
                        href="https://www.facebook.com/myyoganetwork/"
                        className="text-white border border-end-0 border-light border-opacity-10 icon-shape icon-md"
                        aria-label="Facebook"
                        target="_blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={10}
                          height={17}
                          viewBox="0 0 10 17"
                          fill="none"
                        >
                          <path
                            d="M8.84863 9.20312H6.5415V16.0938H3.46533V9.20312H0.942871V6.37305H3.46533V4.18896C3.46533 1.72803 4.94189 0.34375 7.1875 0.34375C8.26416 0.34375 9.40234 0.559082 9.40234 0.559082V2.98926H8.14111C6.91064 2.98926 6.5415 3.72754 6.5415 4.52734V6.37305H9.2793L8.84863 9.20312Z"
                            fill="white"
                          />
                        </svg>
                      </Link>
                      <Link
                        href="https://www.instagram.com/myyoganetwork/?hl=en"
                        className="text-white border border-end-0 border-light border-opacity-10 icon-shape icon-md"
                        aria-label="Instagram"
                        target="_blank"
                      >
                        <i className="bi bi-instagram" />
                      </Link>

                      <Link
                        href="https://www.linkedin.com/company/my-yoga-network/"
                        className="text-white border border-light border-opacity-10 icon-shape icon-md"
                        aria-label="LinkedIn"
                        target="_blank"
                      >
                        <i className="bi bi-linkedin" />
                      </Link>
                      <Link
                        href="https://www.youtube.com/@MyYogaNetwork"
                        className="text-white border border-start-0 border-light border-opacity-10 icon-shape icon-md"
                        aria-label="YouTube"
                        target="_blank"
                      >
                        <i className="bi bi-youtube" />
                      </Link>
                    </div>
                  </nav>
                </div>

                {/* Footer Links */}
                <div className="col-lg-8">
                  <div className="row">
                    <div
                      className="col-lg-4 col-md-4 col-6"
                    >
                      <h3 className="text-white opacity-50 fs-6 fw-black text-uppercase pb-3 pt-5">
                        Company
                      </h3>
                      <div className="d-flex flex-column align-items-start">
                        <Link
                          className="hover-effect text-white mb-2 fw-medium fs-6"
                          href="/join-as-yoga-instructor"
                        >
                          Join as an Instructor
                        </Link>
                        <Link
                          className="hover-effect text-white mb-2 fw-medium fs-6"
                          href="/find-a-yoga-therapist-near-me"
                        >
                          Find a Yoga Therapist
                        </Link>
                        <Link
                          className="hover-effect text-white mb-2 fw-medium fs-6"
                          href="/blogs"
                        >
                          Blogs
                        </Link>
                        <Link
                          className="hover-effect text-white mb-2 fw-medium fs-6"
                          href="/about-our-team-and-vision"
                        >
                          About Us
                        </Link>
                      </div>
                    </div>
                    <div
                      className="col-lg-4 col-md-4 col-6"
                    >
                      <h3 className="text-white opacity-50 fs-6 fw-black text-uppercase pb-3 pt-5">
                        Services
                      </h3>
                      <div className="d-flex flex-column align-items-start">
                        <Link
                          className="hover-effect text-white mb-2 fw-medium fs-6"
                          href="/yoga-for-hotels-and-resorts"
                        >
                           Hotel & Resort Wellness
                        </Link>
                        <Link
                          className="hover-effect text-white mb-2 fw-medium fs-6"
                          href="/corporate-wellness-programs"
                        >
                          Workplace Yoga
                        </Link>
                        <Link
                          className="hover-effect text-white mb-2 fw-medium fs-6"
                          href="/yoga-for-healthcare-providers"
                        >
                          Healthcare
                        </Link>
                        <Link
                          className="hover-effect text-white mb-2 fw-medium fs-6"
                          href="/kids-programs"
                        >
                          Kid's Programs
                        </Link>
                      </div>
                    </div>
                    <div
                      className="col-lg-4 col-md-4 col-6"
                    >
                      <h3 className="text-white opacity-50 fs-6 fw-black text-uppercase pb-3 pt-5">
                        Support
                      </h3>
                      <div className="d-flex flex-column align-items-start">
                        <Link
                          className="hover-effect text-white mb-2 fw-medium fs-6"
                          href="faqs"
                        >
                          Frequently Asked Questions
                        </Link>
                        <Link
                          className="hover-effect text-white mb-2 fw-medium fs-6"
                          href="/terms-of-service"
                        >
                          Terms of Use
                        </Link>
                        <Link
                          className="hover-effect text-white mb-2 fw-medium fs-6"
                          href="/privacy-policy"
                        >
                          Privacy Policy
                        </Link>
                        <Link
                          className="hover-effect text-white mb-2 fw-medium fs-6"
                          href="/contact-us"
                        >
                          Contact
                        </Link>
                      </div>
                    </div>
                    {/* <div
                      className="col-lg-3 col-md-4 col-6">
                      <h3 className="text-white opacity-50 fs-6 fw-black text-uppercase pb-3 pt-5">
                        Resources
                      </h3>
                      <div className="d-flex flex-column align-items-start">
                        <Link
                          className="hover-effect text-white mb-2 fw-medium fs-6"
                          href="#"
                        >
                          Knowledge Base
                        </Link>

                        <Link
                          className="hover-effect text-white mb-2 fw-medium fs-6"
                          href=""
                        >
                          Documents
                        </Link>
                        <Link
                          className="hover-effect text-white mb-2 fw-medium fs-6"
                          href="#"
                        >
                          Security
                        </Link>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>

              {/* Footer Bottom */}
              <div className="row text-center py-4 border-top border-white border-opacity-10">
                <span
                  className="text-white opacity-50"
                  data-aos="fade-zoom-in"
                  data-aos-delay={200}
                >
                  Copyright © {new Date().getFullYear()} My Yoga Network. All
                  Rights Reserved
                </span>
              </div>
            </div>
          </div>

          {/* Background Shapes */}
          <div className="position-absolute top-0 start-50 translate-middle-x z-0">
            <img
              src="/assets/imgs/footer-1/line-bg.png"
              alt="background line"
            />
          </div>
          <div className="position-absolute top-0 start-0 z-0">
            <img
              src="/assets/imgs/footer-1/ellipse-left.png"
              alt="ellipse left"
            />
          </div>
          <div className="position-absolute top-0 end-0 z-0">
            <img
              src="/assets/imgs/footer-1/ellipse-right.png"
              alt="ellipse right"
            />
          </div>
        </div>
      </footer>
    </>
  );
}
