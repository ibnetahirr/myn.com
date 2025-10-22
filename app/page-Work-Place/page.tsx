import Layout from "@/components/layout/Layout";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import Hero5 from "./WorkPlaceContent";

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
								<h4 className="ds-4 fw-regular">Corporate Yoga Program</h4>
								<p className="fs-5">Designed for businesses that offer wellness programs for their employees.</p>
								<Link href="#" className="btn btn-outline-secondary hover-up bg-transparent mt-5" data-aos="fade-zoom-in" data-aos-delay={200}>
									Explore Now
									<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
										<path className="stroke-dark" d="M17.25 15.25V6.75H8.75" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										<path className="stroke-dark" d="M17 7L6.75 17.25" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</Link>
							</div>
						</div>
						<div className="py-90">
						</div>
						<div className="row align-items-start pb-5 pt-lg-5 pt-0">
							<div className="col-lg-5 order-2 order-lg-1 mt-lg-0 mt-10 pt-lg-0 pt-5">
								<h4 className="ds-4 fw-regular">Corporate Yoga Programs to<br /> <span className="fw-bold" data-aos="fade-zoom-in" data-aos-delay={200}>Energize <br /></span>Your Workplace</h4>
								<p className="fs-5">Support your employees’ physical and mental well-being with yoga sessions designed specifically for the modern workplace. Whether your team works from the office, remotely, or in a hybrid setup—our certified instructors bring wellness directly to them.</p>
								<Link href="#" className="btn btn-outline-secondary hover-up bg-transparent mt-5" data-aos="fade-zoom-in" data-aos-delay={300}>
									Explore Now
									<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
										<path className="stroke-dark" d="M17.25 15.25V6.75H8.75" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										<path className="stroke-dark" d="M17 7L6.75 17.25" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</Link>
							</div>
							<div className="col-lg-6 offset-lg-1 order-1 order-lg-2 mt-5 text-lg-end text-center">
								<div className="photo-description position-relative rounded-4 d-inline-block">
									<img className="rounded-4 border border-2 border-white position-relative z-1" src="/assets/imgs/workplace/section.jpg" alt="stand out" />
									<div className="position-absolute top-50 start-50 translate-middle z-0">
										<div className="box-gradient-2 position-relative bg-linear-1 rounded-4 z-0">
										</div>
									</div>
									<img className="position-absolute top-100 start-0 d-none d-md-block translate-middle rounded-4 border border-2 border-white position-relative z-1" src="/assets/imgs/features-5/img-3.png" alt="infinia" data-aos="zoom-in" data-aos-delay={100} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
      
      <section className="howitwork-2 section-padding position-relative fix">
          <div className="container position-relative z-1">
            <div className="text-center mb-8">
              <h3 className="ds-5 my-3 fw-black">How it Works ?</h3>
              <p className="fs-5 mb-0">
                Get yoga when you want, where you want.
              </p>
            </div>
          </div>
          <div className="position-absolute top-0 start-50 translate-middle-x z-0">
            <img
              src="/assets/imgs/howitwork-2/img-bg-line.png"
              alt="My Yoga Network"
            />
          </div>
          <div className="container">
            <div className="row position-relative justify-content-center">
              <div className="col-lg-4 text-center px-md-10">
                <div className="card-service-4 text-center mt-2">
                  <div className="bg-white icon-flip position-relative icon-shape icon-xxl rounded-3">
                    <div className="icon">
                      <img
                        src="/assets/imgs/howitwork-2/icon-1.svg"
                        alt="My Yoga Network"
                      />
                    </div>
                  </div>
                  <h5 className="my-3">Consultation </h5>
                  <p className="mb-6">
                    We assess your needs and space to design the perfect
                    program.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 text-center px-md-10">
                <div className="card-service-4 text-center mt-2">
                  <div className="bg-white icon-flip position-relative icon-shape icon-xxl rounded-3">
                    <div className="icon">
                      <img
                        src="/assets/imgs/howitwork-2/icon-2.svg"
                        alt="My Yoga Network"
                      />
                    </div>
                  </div>
                  <h5 className="my-3">Customized Plan</h5>
                  <p className="mb-6">
                    Choose from flexible session formats—monthly, on-demand
                    events, or luxury wellness retreats.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 text-center px-md-10">
                <div className="card-service-4 text-center mt-2">
                  <div className="bg-white icon-flip position-relative icon-shape icon-xxl rounded-3">
                    <div className="icon">
                      <img
                        src="/assets/imgs/howitwork-2/icon-3.svg"
                        alt="My Yoga Network"
                      />
                    </div>
                  </div>
                  <h5 className="my-3">Execution & Support</h5>
                  <p className="mb-6">
                    We handle session delivery, feedback, and ongoing program
                    enhancement.
                  </p>
                </div>
              </div>
            </div>
            <div className="navigation-arrow-1 d-none d-lg-block position-absolute top-50">
              <img
                src="/assets/imgs/howitwork-2/arrow-1.png"
                alt="My Yoga Network"
              />
            </div>
            <div className="navigation-arrow-2 d-none d-lg-block position-absolute">
              <img
                src="/assets/imgs/howitwork-2/arrow-2.png"
                alt="My Yoga Network"
              />
            </div>
            <div className="row"></div>
            <div className="bouncing-blobs-container">
              <div className="bouncing-blobs-glass" />
              <div className="bouncing-blobs">
                <div className="bouncing-blob bouncing-blob--green" />
                <div className="bouncing-blob bouncing-blob--primary" />
              </div>
            </div>
          </div>
        </section>
        {/*service 1*/}
        <section className="section-padding">
          <div className="container">
            <div className="text-center">
              <h6
                className="ds-6 my-3"
                data-aos="fade-zoom-in"
                data-aos-delay={300}
              >
                Why Choose My Yoga Network?
              </h6>
              <p data-aos="fade-zoom-in" data-aos-delay={100}>
                Partner with My Yoga Network and benefit from our team of
                instructors and decades of experience.
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
                      src="/assets/imgs/service-1/icon-1.png"
                      alt="infinia"
                    />
                    <h6 className="my-3">Industry-Specific Programs</h6>
                    <p className="mb-6">
                      Designed for hotels, corporates, schools & healthcare
                      providers.
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
                    <img
                      src="/assets/imgs/service-1/icon-2.png"
                      alt="my-yoga-network"
                    />
                    <h6 className="my-3">
                      Certified & Vetted Yoga Instructors
                    </h6>
                    <p className="mb-6">
                      Get reliable, professional, insured yoga instructors.
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
                    <img
                      src="/assets/imgs/service-1/icon-3.png"
                      alt="my-yoga-network"
                    />
                    <h6 className="my-3">Flexible Offerings</h6>
                    <p className="mb-6">
                      Monthly sessions, on-demand events, luxury retreats, or trial plans.


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
        {/*Team 1*/}
      <section className="section-team-1 section-padding position-relative overflow-hidden">
        <div className="container">
          <div className="row position-relative z-1">
            <div className="text-center">
              
              <h3
                className="ds-3 my-3"
                data-aos="fade-zoom-in"
                data-aos-delay={200}
              >
                Our Talented Yoga Teachers
              </h3>
              <p className="fs-5" data-aos="fade-zoom-in" data-aos-delay={300}>
                Certified Professionals Creating Transformative Yoga Experiences.{" "}
              </p>
            </div>
          </div>
          <div className="row mt-6">
            {/* prettier-ignore */}
            <div className="col-lg-3 col-md-6 mb-lg-4 mb-7 text-center" data-aos="fade-zoom-in" data-aos-delay={100}>
              <div className="position-relative d-inline-block z-1">
                <div className="zoom-img rounded-3">
                  <img className="img-fluid w-100" src="/assets/imgs/team-1/teacher-1.jpg" alt="infinia" />
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
                    alt="infinia"
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
                    alt="infinia"
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
                    alt="infinia"
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
          <img src="/assets/imgs/team-1/bg-line.png" alt="infinia" />
        </div>
        <div className="rotate-center ellipse-rotate-success position-absolute z-0" />
        <div className="rotate-center-rev ellipse-rotate-primary position-absolute z-0" />
      </section>
     
    </Layout>
  );
}