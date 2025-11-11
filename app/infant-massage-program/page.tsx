import Layout from "@/components/layout/Layout";
import { style } from "framer-motion/client";
import Link from "next/link";

export const metadata = {
  title: "Infant Massage Program | My Yoga Network",
  description:
    "Join our 6-week Infant Massage Program in Long Beach, CA with My Yoga Network. Enhance bonding and well-being for infants and parents. Contact us at (888) 960-9240 or contact@myyoganetwork.com.",
};

export default function InfantMassagePage() {
  return (
    <Layout>

      <section className="section-feature-5">
          <div className="container-fluid position-relative section-padding">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <div className="photo-description position-relative  rounded-4">
                    <img
                      className="rounded-4 border border-2 border-white position-relative z-1"
                      src="/assets/imgs/hotels/page/hotel.webp"
                      alt="Hotels"
                    />
                    <div className="box-gradient-1 ms-lg-8 position-absolute bottom-0 start-0 bg-linear-1 rounded-4 z-0" />
                  </div>
                </div>
                <div className="col-lg-6 offset-lg-1 mt-lg-0 mt-5">
                  <h4 className="ds-4 fw-regular">
                  Infant Massage Program In Long Beach, CA
                  </h4>
                  <p className="fs-5">
                   Transform Your Baby’s Well-Being Through Gentle Touch.
                  </p>
                  <Link
                    href="https://calendly.com/ram-myyoganetwork/up-to-60min"
                    target="_blank"
                    className="btn btn-outline-secondary hover-up bg-transparent mt-5"
                    data-aos="fade-zoom-in"
                    data-aos-delay={200}
                  >
                    ENROLL NOW
                    <svg
                      className="ms-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        className="stroke-dark"
                        d="M17.25 15.25V6.75H8.75"
                        stroke="#000"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        className="stroke-dark"
                        d="M17 7L6.75 17.25"
                        stroke="#000"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="py-90"></div>
              <div className="row align-items-start pb-5 pt-lg-5 pt-0">
                <div className="col-lg-5 order-2 order-lg-1 mt-lg-0 mt-10 pt-lg-0 pt-5">
                  <h4 className="ds-4 fw-regular">
                  Why Infant Massage?
                  </h4>
                  <p className="fs-5">
                 <p className="mb-3">
                  Did you know that gentle, intentional touch can have profound
                  benefits for your baby’s health and well-being?
                </p>
                <div className="mb-9">
                  <p>
                    Our <strong>6-week Infant Massage Program</strong> is
                    designed to help you develop a deeper connection with your
                    little one while promoting their emotional and physical
                    well-being.
                  </p>
                  <ul style={{ listStyleType: "none" }}>
                    <li>✔️ Strengthens parent-child bonding</li>
                    <li>✔️ Encourages better sleep patterns</li>
                    <li>✔️ Relieves gas, colic, and teething discomfort</li>
                    <li>✔️ Supports healthy circulation and muscle tone</li>
                    <li>✔️ Reduces stress and anxiety in both baby & parent</li>
                    <li>✔️ Enhances communication and trust</li>
                  </ul>
                  </div>
                  </p>
                </div>
                <div className="col-lg-6 offset-lg-1 order-1 order-lg-2 mt-5 text-lg-end text-center">
                  <div className="photo-description position-relative rounded-4 d-inline-block">
                    <img
                      className="rounded-4 border border-2 border-white position-relative z-1"
                      src="/assets/imgs/hotels/page/hotel-right.webp"
                      alt="stand out"
                    />
                    <div className="position-absolute top-50 start-50 translate-middle z-0">
                      <div className="box-gradient-2 position-relative bg-linear-1 rounded-4 z-0"></div>
                    </div>
                    <img
                      className="position-absolute top-100 start-0 d-none d-md-block translate-middle rounded-4 border border-2 border-white position-relative z-1"
                      src="/assets/imgs/features-5/img-3.png"
                      alt="infinia"
                      data-aos="zoom-in"
                      data-aos-delay={100}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


      {/* Testimonial-1 */}
      <section className="section-testimonial-1 pb-120 @@classList position-relative">
        <div className="container position-relative z-1">
          <div className="row">
            <div className="col-lg-6">
              <div className="pe-8 mt-10">
                <div
                  className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2"
                  data-aos="zoom-in"
                  data-aos-delay={100}
                >
                  <img src="/assets/imgs/features-1/dots.png" alt="infinia" />
                  <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
                    Program Details
                  </span>
                </div>
                <h3
                  className="ds-3 mt-3 mb-3"
                  data-aos="fade-zoom-in"
                  data-aos-delay={100}
                >
                  What you can expect
                </h3>
                <span
                  className="fs-5 fw-medium"
                  data-aos="fade-zoom-in"
                  data-aos-delay={300}
                >
                  Explore the structure and benefits of our 6-week Infant
                  Massage Program in Long Beach, CA. 🌱
                </span>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="bg-neutral-100 p-5 mt-8 rounded-3 position-relative card-hover"
                data-aos="fade-zoom-in"
                data-aos-delay={100}
              >
                <div className="text-900">
                  <ul>
                    <li>
                      <strong>📅 Duration:</strong> 6 weeks, once-a-week
                      sessions
                    </li>
                    <li>
                      <strong>👶 Age Group:</strong> 10-18 months old
                    </li>
                    <li>
                      <strong>🧘 Session Highlights:</strong>
                      <ul>
                        <li>
                          Gentle massage techniques tailored to your baby’s
                          needs
                        </li>
                        <li>Calming routines to promote better sleep</li>
                        <li>
                          Safe and effective touch therapy for overall wellness
                        </li>
                        <li>
                          Bonding exercises to enhance emotional connection
                        </li>
                        <li>Small group setting for personalized guidance</li>
                      </ul>
                    </li>
                    <li>
                      <strong>📍 Location:</strong> 5555 E Stearns St #108, Long
                      Beach, CA 90815
                    </li>
                    <li>
                      <strong>👩‍⚕️ Led by:</strong> Claudia
                    </li>
                  </ul>
                </div>
                <div className="d-flex align-items-center mt-5">
                  <img
                    className="avatar-lg"
                    src="/assets/imgs/testimonial-1/avatar-5.png"
                    alt="infinia"
                  />
                  <div className="d-flex flex-column">
                    <h6 className="ms-3 fs-6 mb-0">Claudia</h6>
                    <div className="flag ms-3">
                      <img
                        src="/assets/imgs/testimonial-1/flag-1.png"
                        alt="infinia"
                      />
                      <span className="fs-8">
                        Certified Infant Massage Instructor
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="position-absolute top-0 start-0 z-0">
          <img src="/assets/imgs/testimonial-1/bg-line.png" alt="infinia" />
        </div>
      </section>
      {/* Team 1 */}
      <section className="section-team-1 section-padding position-relative overflow-hidden">
        <div className="container">
          <div className="row position-relative z-1">
            <div className="text-center">
              <h3
                className="ds-5 my-3"
                data-aos="fade-zoom-in"
                data-aos-delay={200}
              >
                Learn to Soothe and Care for Your Little One
              </h3>
              <p className="fs-5" data-aos="fade-zoom-in" data-aos-delay={300}>
                Discover expert techniques for infant massage to nurture your
                baby’s well-being in Long Beach.
              </p>
            </div>
          </div>
          <div className="row mt-6">
            {/* prettier-ignore */}
            <div className="col-lg-3 col-md-6 mb-lg-4 mb-7 text-center" data-aos="fade-zoom-in" data-aos-delay={100}>
        <div className="position-relative d-inline-block z-1">
          <div className="zoom-img rounded-3">
            <img className="img-fluid w-100" src="/assets/imgs/team-1/m-1.jpg" alt="my-yoga-network" />
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
                    src="/assets/imgs/team-1/m-2.jpg"
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
                    src="/assets/imgs/team-1/m-3.jpg"
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
                    src="/assets/imgs/team-1/m-4.jpg"
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

      {/* Features 3 */}
      <section>
        <div className="container-fluid position-relative bg-neutral-100 section-padding bg-neutral-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 text-lg-end text-center">
                <div className="position-relative d-inline-block mb-lg-0 mb-8">
                  <img
                    className="rounded-4"
                    src="/assets/imgs/features-3/img-2.png"
                    alt="my-yoga-network"
                    data-aos="fade-zoom-in"
                    data-aos-delay={200}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="ps-lg-5">
                  <h6 data-aos="fade-zoom-in" data-aos-delay={100}>
                    Meet Claudia
                  </h6>
                  <h6
                    className="ds-5 mt-4 mb-4"
                    data-aos="fade-zoom-in"
                    data-aos-delay={200}
                  >
                    A Certified Infant Massage Specialist
                  </h6>
                  <p
                    className="mb-5"
                    data-aos="fade-zoom-in"
                    data-aos-delay={300}
                  >
                    With over 15 years of experience in infant massage therapy,
                    Claudia has guided hundreds of parents to foster stronger
                    bonds with their infants through the art of gentle touch. As
                    a Certified Infant Massage Instructor, she excels in
                    techniques that:
                  </p>
                  <ul>
                    <li>Help babies sleep longer and more peacefully</li>
                    <li>Ease digestion issues, colic, and gas discomfort</li>
                    <li>
                      Strengthen emotional bonding between parents and infants
                    </li>
                  </ul>
                  <p
                    className="mb-5"
                    data-aos="fade-zoom-in"
                    data-aos-delay={300}
                  >
                    "I believe that touch is a powerful tool for love and
                    healing. My goal is to empower parents with simple yet
                    effective techniques to create a peaceful and nurturing
                    environment for their babies.”
                  </p>
                  <p>
                    <strong>- Claudia</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services 1 */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center">
            <h3
              className="ds-3 my-3"
              data-aos="fade-zoom-in"
              data-aos-delay={300}
            >
              Why Choose My Yoga Network?
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
                  <img src="/assets/imgs/service-1/img-1.png" alt="infinia" />
                  <h6 className="my-3">Certified Infant Massage Experts</h6>
                  <p className="mb-6">
                    Experienced professionals trained in safe and effective
                    massage techniques.
                  </p>
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
                  <img src="/assets/imgs/service-1/img-2.png" alt="infinia" />
                  <h6 className="my-3">Soothing, Baby-Friendly Atmosphere</h6>
                  <p className="mb-6">
                    A nurturing space designed to help infants relax and thrive.
                  </p>
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
                  <img src="/assets/imgs/service-1/img-3.png" alt="infinia" />
                  <h6 className="my-3">Trusted by Parents</h6>
                  <p className="mb-6">
                    A dedicated community of happy families who’ve seen the
                    benefits firsthand.
                  </p>
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