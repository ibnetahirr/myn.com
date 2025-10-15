"use client";
import Link from "next/link";

import { useState } from "react";

export default function Hero5() {
  const [isOpen, setOpen] = useState(false);
  // Accordion
  const [activeItem, setActiveItem] = useState(1);

  const handleActiveItem = (index: any) => {
    setActiveItem(index);
  };

  return (
    <>
    <section className="section-page-header py-10 fix position-relative">
        <div className="container position-relative z-1">
          <div className="text-start">
            <h3>Infant Massage Program</h3>
            <div className="d-flex">
              <Link href="/">
                <p className="mb-0 text-900">Home</p>
              </Link>
              <svg
                className="mx-3 mt-1"
                xmlns="http://www.w3.org/2000/svg"
                width={8}
                height={13}
                viewBox="0 0 8 13"
                fill="none"
              >
                <path
                  className="stroke-dark"
                  d="M1 1.5L6.5 6.75L1 12"
                  stroke="#111827"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-primary mb-0">Infant Massage Program</p>
            </div>
          </div>
        </div>
        <img
          className="position-absolute bottom-0 start-0 end-0 top-0 z-0"
          src="/assets/imgs/page-header/bg-line.png"
          alt="my-yoga-network"
        />
        <div className="bouncing-blobs-container">
          <div className="bouncing-blobs-glass" />
          <div className="bouncing-blobs">
            <div className="position-absolute top-0 start-0 translate-middle-y bouncing-blob--green" />
            <div className="position-absolute top-0 end-0 bouncing-blob--primary" />
          </div>
        </div>
      </section>
      {/*Hero 5*/}
      <div className="section-hero-5 position-relative">
        <div
          className="position-relative py-188 img-pull"
          style={{ backgroundImage: `url(/assets/imgs/hero-5/img-bg-1.png)` }}
        >
          <div className="container position-relative z-2">
            <div className="row">
              <div className="col-lg-6">
                <div className="backdrop-filter p-8 position-relative rounded-3">
                  <div className="bg-white bg-opacity-50 border border-primary-soft d-inline-flex rounded-pill px-4 py-1">
                    <span className="tag-spacing fs-6 text-primary">
                      🚀 My Yoga Network
                    </span>
                  </div>
                  <h3 className="ds-3 my-3">
                    Infant Massage Program In Long Beach, CA
                    <span className="fw-regular">
                      <br />
                      with
                      <img
                        className="alltuchtopdown img-fluid filter-invert"
                        src="/assets/imgs/hero-5/icon-1.svg"
                        alt="Yoga icon"
                      />
                      Transform Your Baby’s Well-Being Through Gentle Touch
                    </span>
                  </h3>
                  <p className="fs-5 text-900">
                    Designed for infants and parents, our program promotes
                    bonding, relaxation, and healthy development in Long Beach,
                    CA.
                  </p>
                  <div className="d-flex flex-column flex-md-row align-items-center">
                    <Link href="#" className="btn btn-gradient rounded-4">
                      Enroll Now
                      <svg
                        className="ms-2"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M17.25 15.25V6.75H8.75"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M17 7L6.75 17.25"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                  <div className="position-absolute top-50 start-0 translate-middle d-none d-md-block z-2">
                    <div className="tag-home-5 rotate-90 backdrop-filter px-6 py-3 rounded-pill d-inline-flex d-flex align-items-center justify-content-center">
                      <p className="text-900 mb-0 fs-18px fw-bold">
                        20+ Years of Experience
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="position-absolute top-0 start-0 z-0">
            <img
              src="/assets/imgs/hero-5/img-bg-line.png"
              alt="Decorative line"
            />
          </div>
        </div>
      </div>
      {/* CTA 6 */}
      <section className="section-cta-6 position-relative section-padding fix">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 pe-lg-0">
              <div className="zoom-img rounded-end-lg-0 rounded-4">
                <img
                  className="rounded-end-lg-0 rounded-4"
                  src="/assets/imgs/cta-6/img-3.png"
                  alt="my-yoga-network"
                />
              </div>
            </div>
            <div className="col-12 col-lg-6 ps-lg-0 align-self-stretch">
              <div className="bg-white p-md-8 p-5 rounded-start-lg-0 h-100 rounded-4 mt-lg-0 mt-5 border border-start-lg-0 shadow-1">
                <h1 className="fs-1">Why Infant Massage?</h1>
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
                  <ul>
                    <li>✔️ Strengthens parent-child bonding</li>
                    <li>✔️ Encourages better sleep patterns</li>
                    <li>✔️ Relieves gas, colic, and teething discomfort</li>
                    <li>✔️ Supports healthy circulation and muscle tone</li>
                    <li>✔️ Reduces stress and anxiety in both baby & parent</li>
                    <li>✔️ Enhances communication and trust</li>
                  </ul>
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
            <div className="col-lg-4">
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
            <div className="col-lg-4">
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
    </>
  );
}
