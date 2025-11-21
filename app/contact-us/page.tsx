import Layout from "@/components/layout/Layout";
import Content from "./Content";

export const metadata = {
  title: "Contact | My Yoga Network",
  description:
    "My Yoga Network provides certified yoga teachers for hotels, resorts, healthcare facilities, and private practices, promoting wellness for all. Contact today!",
};

export default function ContactPage() {
  return (
    <Layout>
      {/* Contact 6 */}
      <section className="section-contact-6 section-padding fix">
        <div className="container">
          <div className="text-center">
            <h3 className="mt-3 mb-3">Contact Our Team</h3>
            <p className="fs-5">
              We’re here to support your wellness program needs. Reach out
              anytime.
            </p>
          </div>

          <div className="row mt-8">
            <div className="col-lg-10 mx-lg-auto">
              <Content />
            </div>
          </div>
        </div>
      </section>

      <div className=" position-relative d-none d-md-flex">
        <div className="col-12 bg-primary py-md-6"></div>
        <div className="container position-absolute top-50 start-50 translate-middle">
          <div className="row">
            <div className="col-12 d-lg-flex justify-content-center gap-5">
              {/* EMAIL */}
              <a
                className="d-flex mb-lg-0 mb-2"
                href="mailto:team@myyoganetwork.com"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M3 5H21C21.5523 5 22 5.44772 22 6V18C22 18.5523 21.5523 19 21 19H3C2.44772 19 2 18.5523 2 18V6C2 5.44772 2.44772 5 3 5Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 6L12 13L2 6"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-white mb-0 ms-2">team@myyoganetwork.com</p>
              </a>

              {/* PHONE */}
              <a className="d-flex" href="tel:5622771269">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M8.89286 4.75H6.06818C5.34017 4.75 4.75 5.34017 4.75 6.06818C4.75 13.3483 10.6517 19.25 17.9318 19.25C18.6598 19.25 19.25 18.6598 19.25 17.9318V15.1071L16.1429 13.0357L14.5317 14.6468C14.2519 14.9267 13.8337 15.0137 13.4821 14.8321C12.8858 14.524 11.9181 13.9452 10.9643 13.0357C9.98768 12.1045 9.41548 11.1011 9.12829 10.494C8.96734 10.1537 9.06052 9.76091 9.32669 9.49474L10.9643 7.85714L8.89286 4.75Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-white mb-0 ms-2">562 277 1269</p>
              </a>
            </div>
          </div>
        </div>
      </div>

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
