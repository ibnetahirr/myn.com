import Layout from "@/components/layout/Layout";
import Link from "next/link";

export const metadata = {
  title: "Kids Program | My Yoga Network",
  description:
    "Explore My Yoga Network's Kids Program, featuring tailored yoga classes for children aged 3-12 in Long Beach, CA, to enhance wellness and growth.",
};

export default function KidsProgramPage() {
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
                    src="/assets/imgs/kids/hero.webp"
                    alt="Hotels"
                  />
                  <div className="box-gradient-1 ms-lg-8 position-absolute bottom-0 start-0 bg-linear-1 rounded-4 z-0" />
                </div>
              </div>
              <div className="col-lg-6 offset-lg-1 mt-lg-0 mt-5">
                <h4 className="ds-4 fw-regular">
                  Empowering <span className="fw-bold" data-aos="fade-zoom-in" data-aos-delay={200}>Students</span> Through Yoga, Movement & Mindfulness
                </h4>
                <p className="fs-5">
                Your partner for enriching after-school programs in LBUSD, supporting the whole child with engaging, evidence-based wellness activities.
                </p>
                <Link
                  href="#"
                  className="btn btn-outline-secondary hover-up bg-transparent mt-5"
                  data-aos="fade-zoom-in"
                  data-aos-delay={200}
                >
                  Explore Now
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
          </div>
        </div>
      </section>

      {/*Blog-4*/}
      <section className="section-blog-4 pb-120 @@classList">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-12 col-md-4 me-auto">
              <h3 className="ds-4 mt-6 mb-2">Our Services</h3>
              <span className="fs-5 fw-medium">
                Supporting Every Stage of Your Child’s Journey with Care
              </span>
            </div>
            <div className="col-12 col-md-4 col-auto mt-5 mt-md-0"></div>
          </div>
          <div className="row mt-8">
            <div className="col-12 col-md-4">
              <Link href="/after-school-program">
                <div className="card border-0 position-relative rounded-3 d-inline-flex card-hover shadow-2">
                  <img
                    className="rounded-top-3"
                    src="/assets/imgs/kids/after-school.webp"
                    alt="After-School Yoga"
                  />
                  <div className="card-body bg-white border border-top-0 rounded-bottom-3 p-6">
                    <h6 className="mb-3">After-School Yoga</h6>
                    <p>
                      A fun and enriching after-school program where kids build
                      strength, flexibility, focus, and confidence through
                      playful yoga and mindfulness activities.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-12 col-md-4">
              <Link href="/kids-yoga-program">
                <div className="card border-0 position-relative rounded-3 d-inline-flex card-hover shadow-2">
                  <img
                    className="rounded-top-3"
                    src="/assets/imgs/kids/kids-at-studio.webp"
                    alt="Kids Yoga at Studio"
                  />
                  <div className="card-body bg-white border border-top-0 rounded-bottom-3 p-6">
                    <h6 className="mb-3">Kids Yoga at Studio</h6>
                    <p>
                      Engaging studio classes designed to help children improve
                      their balance, coordination, and emotional well-being in a
                      supportive and creative environment.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-12 col-md-4">
              <Link href="/infant-massage-program">
                <div className="card border-0 position-relative rounded-3 d-inline-flex card-hover shadow-2">
                  <img
                    className="rounded-top-3"
                    src="/assets/imgs/kids/infants.webp"
                    alt="Infant Massage"
                  />
                  <div className="card-body bg-white border border-top-0 rounded-bottom-3 p-6">
                    <h6 className="mb-3">Infant Massage</h6>
                    <p>
                      Learn the techniques and benefits that gentle, intentional
                      touch can have on your baby’s health and well-being?
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Team 1 */}
      <section className="section-team-1 section-padding position-relative overflow-hidden">
        <div className="container">
          <div className="row position-relative z-1">
            <div className="text-center">
              <h3
                className="ds-3 my-3"
                data-aos="fade-zoom-in"
                data-aos-delay={200}
              >
                Meet Our Teachers
              </h3>
              <p className="fs-5" data-aos="fade-zoom-in" data-aos-delay={300}>
                Our certified yoga instructors bring expertise and passion to
                every class, tailored for kids and families in Long Beach.
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