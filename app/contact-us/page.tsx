import Layout from "@/components/layout/Layout";
import Link from "next/link";
import ClientContactForm from "./ClientContactForm";

export const metadata = {
  title: "Contact Us | My Yoga Network",
  description:
    "Get in touch with My Yoga Network for customized yoga and wellness programs. Contact us at +1 888-960-9240 or team@myyoganetwork.com for consultations, support, or partnerships in Long Beach, CA.",
};

export default function ContactPage() {
  return (
    <Layout>
      {/* Contact 6 */}
      <section className="section-contact-6 section-padding fix">
        <div className="container">
          <div className="text-center">
            <div
              className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2"
              data-aos="zoom-in"
              data-aos-delay={100}
            >
              <img src="/assets/imgs/features-1/dots.png" alt="infinia" />
              <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
                Get in Touch
              </span>
            </div>
            <h3 className="ds-3 mt-3 mb-3">Contact Our Team</h3>
            <p className="fs-5">
             Share your details and questions below, and we'll get back to you.
            </p>
          </div>

          <div className="row mt-8">
            <div className="col-lg-10 mx-lg-auto">
              <div className="row">
                {/* LEFT: Contact Form (client component below) */}
                <div className="col-lg-6 ps-lg-0 pb-5 pb-lg-0">
                  <ClientContactForm />
                </div>

                 {/* RIGHT: Help/Contact info (unchanged content) */}
                <div className="col-lg-6 align-self-stretch">
                  <div className="ms-lg-6 p-5 border rounded-4 h-100">
                    <h4 className="mb-5">Need more help?</h4>
                    <h6>Chat with us</h6>
                    <p className="text-500">The support team is always available 24/7</p>

                    <div className="d-flex mb-2">
                      {/* Whatsapp */}
                      <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                        <g clipPath="url(#clip0_602_10655)">
                          <path d="M15.0051 12.0403L13.9452 10.9803C13.656 10.6912 13.2563 10.5462 12.8494 10.5828C12.4421 10.6194 12.0749 10.833 11.8418 11.1689L11.4726 11.701C10.9704 11.6115 9.99908 11.3584 9.3201 10.6793C8.64084 10 8.38771 9.02824 8.29842 8.52687L8.8306 8.15761C9.16654 7.92449 9.38017 7.55719 9.41662 7.14992C9.45314 6.74265 9.30822 6.34328 9.01912 6.05422L7.9592 4.99429C7.53326 4.5684 6.89127 4.46675 6.36158 4.74121C5.43283 5.22238 4.82275 6.12433 4.64353 7.2809C4.35162 9.16523 5.22275 11.3883 6.91693 13.0825C8.39451 14.56 10.2742 15.4115 11.9808 15.4115C12.231 15.4115 12.4776 15.3932 12.7185 15.3559C13.8751 15.1768 14.777 14.5666 15.2582 13.6379C15.5326 13.1081 15.431 12.4661 15.0051 12.0403ZM14.1797 13.0791C13.7974 13.8172 13.0729 14.0719 12.5326 14.1556C11.0468 14.3857 9.17963 13.6274 7.77576 12.2236C6.37197 10.8198 5.61361 8.95265 5.84377 7.46683C5.92744 6.92644 6.1822 6.20207 6.92025 5.81965C6.94025 5.80933 6.96236 5.80429 6.98478 5.80429C7.02603 5.80429 7.06838 5.82129 7.10025 5.85312L8.16021 6.91308C8.20424 6.95719 8.20986 7.00726 8.20677 7.04152C8.20369 7.07582 8.18931 7.1241 8.13806 7.15965L7.30084 7.74058C7.12576 7.86207 7.02713 8.06652 7.04107 8.27918C7.04634 8.35949 7.18447 10.2614 8.46119 11.5381C9.73791 12.8148 11.6398 12.953 11.7201 12.9582C11.9326 12.9719 12.1372 12.8736 12.2587 12.6984L12.8397 11.8612C12.8752 11.81 12.9235 11.7956 12.9578 11.7925C12.9921 11.7894 13.0421 11.7951 13.0863 11.8391L14.1462 12.899C14.1954 12.9482 14.2092 13.0223 14.1797 13.0791Z" fill="#6B7280" />
                          <path d="M17.0709 2.92906C15.1821 1.0402 12.6708 0 9.99959 0C7.32834 0 4.81709 1.0402 2.92826 2.92902C1.32291 4.53438 0.303771 6.65902 0.0584589 8.9116C-0.173455 11.0411 0.289357 13.2086 1.36311 15.046L0.320998 18.9352C0.264826 19.1447 0.324748 19.3684 0.478225 19.5218C0.631623 19.6752 0.855334 19.7351 1.06479 19.679L4.95393 18.6369C6.48143 19.5296 8.23725 20 10.0096 20C10.369 20 10.7292 19.9807 11.0883 19.9415C13.3409 19.6962 15.4656 18.6771 17.0709 17.0717C18.9598 15.1829 20 12.6716 20 10.0004C20 7.32922 18.9597 4.81789 17.0709 2.92906Z" fill="#6B7280" />
                        </g>
                        <defs>
                          <clipPath>
                            <rect width={20} height={20} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <Link className="ms-2 text-decoration-underline text-900 fs-7" href="#">
                        Chat via Whatsapp
                      </Link>
                    </div>

                    <div className="d-flex mb-5">
                      {/* Messenger */}
                      <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                        <path d="M10.0003 1.4585C14.962 1.4585 18.9587 5.1185 18.9587 9.5835C18.9587 14.0485 14.962 17.7085 10.0003 17.7085C8.83533 17.7085 7.72199 17.506 6.70199 17.1393L4.02949 18.476C3.82199 18.5793 3.57449 18.5602 3.38533 18.4243C3.19699 18.2893 3.09949 18.0602 3.13116 17.8302L3.50283 15.176C1.97449 13.716 1.04199 11.746 1.04199 9.5835C1.04199 5.1185 5.03866 1.4585 10.0003 1.4585Z" fill="#6B7280" />
                      </svg>
                      <Link className="ms-2 text-decoration-underline text-900 fs-7" href="#">
                        Chat via Messenger
                      </Link>
                    </div>

                    <h6>Send us an email</h6>
                    <p className="text-500">Our team will respond promptly to your inquiries</p>
                    <div className="d-flex mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                        <path d="M18.2422 2.96875H1.75781C0.786602 2.96875 0 3.76023 0 4.72656V15.2734C0 16.2455 0.792383 17.0312 1.75781 17.0312H18.2422C19.2053 17.0312 20 16.2488 20 15.2734V4.72656C20 3.76195 19.2165 2.96875 18.2422 2.96875ZM17.996 4.14062C17.6369 4.49785 11.4564 10.6458 11.243 10.8581C10.9109 11.1901 10.4695 11.3729 10 11.3729C9.53047 11.3729 9.08906 11.1901 8.75594 10.857C8.61242 10.7142 2.50012 4.63414 2.00398 4.14062H17.996Z" fill="#6B7280" />
                      </svg>
                      <Link className="ms-2 text-decoration-underline text-900 fs-7" href="#">
                        team@myyoganetwork.com
                      </Link>
                    </div>

                    <h6 className="mt-5">Our Office</h6>
                    <p className="text-500">Visit us and meet our team</p>
                    <div className="d-flex mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                        <path d="M6.13295 3.37527L5.96687 3.54135C4.16028 5.34793 3.95437 8.207 5.48339 10.2538L9.42647 15.3913C9.67756 15.7185 10.1711 15.7171 10.4203 15.3885L14.3248 10.2397C15.8617 8.1851 15.6557 5.31345 13.8414 3.49914L13.7176 3.37527C11.6231 1.28083 8.22739 1.28084 6.13295 3.37527Z" stroke="#6B7280" strokeWidth="1.04167" />
                        <path d="M9.89583 9.27067C11.0464 9.27067 11.9792 8.33793 11.9792 7.18734C11.9792 6.03674 11.0464 5.104 9.89583 5.104C8.74524 5.104 7.8125 6.03674 7.8125 7.18734C7.8125 8.33793 8.74524 9.27067 9.89583 9.27067Z" stroke="#6B7280" strokeWidth="1.04167" />
                      </svg>
                      <Link className="ms-2 text-decoration-underline text-900 fs-7" href="#">
                       1250 N Bellflower Blvd, Long Beach, CA 90840, United States
                      </Link>
                    </div>
                  </div>
                </div>
                {/* /RIGHT */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <div className="contact-map w-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.917678074687!2d-118.11914939999999!3d33.778481599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd314648a3431d%3A0xef10c01b8f992c1!2sCalifornia+State+University+Long+Beach!5e0!3m2!1sen!2sus!4v1695393183000!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          aria-label="Map of California State University Long Beach"
        />
      </div>
    </Layout>
  );
}
