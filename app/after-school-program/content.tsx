"use client";
import Contact1 from "@/components/sections/Contact1";

export default function Content() {
  return (
    <>
      {/* HERO */}
      <section className="section-feature-5">
        <div className="container-fluid position-relative section-padding">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="photo-description position-relative  rounded-4">
                  <img
                    className="rounded-4 border border-2 border-white position-relative z-1"
                    src="/assets/imgs/after-school/hero.webp"
                    alt="Schools / Kids Yoga"
                  />
                  <div className="box-gradient-1 ms-lg-8 position-absolute bottom-0 start-0 bg-linear-1 rounded-4 z-0" />
                </div>
              </div>
              <div className="col-lg-6 offset-lg-1 mt-lg-0 mt-5">
                 <h4 className="ds-4 fw-regular">
                  After{" "}
                  <span className="fw-bold">School Programs</span>{" "}that Transforms Wiggles into Wellness
                </h4>
                <p className="fs-5">
                  Designed for Pre-K to 5th grade, our program helps kids reset,
                  refocus, and recharge.
                </p>
              </div>
              <div className="row pt-lg-150 pt-8 text-center d-none d-md-block">
                <div className="text-center mb-8 mx-auto">
                  <h3 className="my-3 fw-black">
                   Trusted by Schools & Communities
                  </h3>
                </div>
                
                <div className="col-lg-10 col mx-lg-auto">
                  <div className="compatible-group bg-white p-5 mt-5 rounded-4 d-md-flex justify-content-between">
                    <div className="compatible hover-up">
                      <img
                        src="/assets/imgs/clients/institutes/bixby-elementary-school.png"
                        alt="Bixby Elementary School"
                        height={100}
                      />
                      <p className="text-900 mt-3 mb-0">
                        Bixby Elementary School
                      </p>
                    </div>
                    <div className="compatible hover-up">
                      <img
                        src="/assets/imgs/clients/institutes/lbu-school.png"
                        alt="Lonh Beach Unified School District"
                        height={100}
                      />
                      <p className="text-900 mt-3 mb-0">
                        Lonh Beach Unified School District
                      </p>
                    </div>
                    <div className="compatible hover-up">
                      <img
                        src="/assets/imgs/clients/institutes/mcbride-high-school.png"
                        alt="MCBride High School"
                        height={100}
                      />
                      <p className="text-900 mt-3 mb-0">MCBride High School</p>
                    </div>
                    <div className="compatible hover-up">
                      <img
                        src="/assets/imgs/clients/institutes/longfellow-elementary-school.png"
                        alt="Longfellow Elementary School"
                        height={100}
                      />
                      <p className="text-900 mt-3 mb-0">
                        Longfellow Elementary School
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="section-padding">
          <div className="container position-relative z-1">
            <div className="text-center mb-8 mx-auto">
              <h3 className="my-3 fw-black">
                Why Schools Partner With My Yoga Network
              </h3>
              <p className="fs-5 mb-0">
                Today’s students need more than academics—they need tools for
                emotional regulation, movement, connection, and confidence. Our
                programs blend yoga, mindfulness, creative arts, and SEL-aligned
                activities to support physical health, mental well-being, and
                social-emotional growth.
              </p>
            </div>
          </div>

          <div className="container">
            <div
              className="row align-items-center pb-5 pt-lg-5 pt-0"
              style={{ maxWidth: "1100px", margin: "0 auto" }}
            >
              {/* TEXT */}
              <div className="col-lg-5 order-2 order-lg-1 mt-lg-0 mt-10">
                <div className="mb-4">
                  <h4 className="fw-bold">Outcomes You Can Measure</h4>
                </div>
                <ul className="fs-5">
                  <li>Improved focus and classroom readiness</li>
                  <li>Better emotional balance and stress management</li>
                  <li>Increased confidence, teamwork, and leadership skills</li>
                  <li>
                    Stronger body awareness, coordination, and motor skills
                  </li>
                </ul>
                <p>
                  Calmer school environments and more supported teachers
                </p>
              </div>
              {/* IMAGE */}
              <div className="col-lg-6 offset-lg-1 order-1 order-lg-2 text-lg-end text-center mt-5 mt-lg-0 d-flex justify-content-center justify-content-lg-end">
                <div className="photo-description position-relative rounded-4 d-inline-block">
                  <img
                    className="rounded-4 border border-2 border-white position-relative z-1 img-fluid"
                    src="/assets/imgs/kids/2.webp"
                    alt="Outcomes You Can Measure"
                    style={{ maxWidth: "460px" }}
                  />
                </div>
              </div>
            </div>

            <div
              className="row align-items-center pb-5 pt-lg-5 pt-0"
              style={{ maxWidth: "1100px", margin: "0 auto" }}
            >
              {/* IMAGE (Left) */}
              <div className="col-lg-6 order-1 order-lg-1 text-center text-lg-start d-flex justify-content-center justify-content-lg-start mt-5 mt-lg-0">
                <div className="photo-description position-relative rounded-4 d-inline-block">
                  <img
                    className="rounded-4 border border-2 border-white position-relative z-1 img-fluid"
                    src="/assets/imgs/kids/4.webp"
                    alt="Workplace Mindfulness & Mental Wellness Sessions"
                    style={{ maxWidth: "460px" }}
                  />
                </div>
              </div>

              {/* TEXT (Right) */}
              <div className="col-lg-5 offset-lg-1 order-2 order-lg-2 mt-lg-0 mt-10">
                <div className="mb-4">
                  <h4 className="fw-bold">Compliance & Safety</h4>
                  <p>
                    Your peace of mind is our priority. All instructors meet or
                    exceed district and state standards:
                  </p>
                </div>
                <ul className="fs-5 ps-3">
                  <li>TB clearance & fingerprinting</li>
                  <li>
                    Instructional aide qualification (48 units / AA equivalent)
                  </li>
                  <li>CPR / First Aid certified</li>
                  <li>Mandated reporter training</li>
                  <li>Trauma-informed & neurodiversity-aware training</li>
                  <li>
                    Full insurance: liability, auto, workers’ comp, and
                    professional coverage
                  </li>
                </ul>
                <p>
                  We provide all required district paperwork, onboarding, and
                  site-specific compliance forms.
                </p>
              </div>
            </div>

            <div
              className="row align-items-center pb-5 pt-lg-5 pt-0"
              style={{ maxWidth: "1100px", margin: "0 auto" }}
            >
              {/* TEXT */}
              <div className="col-lg-5 order-2 order-lg-1 mt-lg-0 mt-10">
                <div className="mb-4">
                  <h4 className="fw-bold">
                    Aligned With ELO-P & SEL Standards
                  </h4>
                  <p>
                    Our curriculum supports the requirements and priorities of
                    the Expanded Learning Opportunities Program (ELO-P) and
                    Social-Emotional Learning (SEL) frameworks:
                  </p>
                </div>
                <ul className="fs-5 ps-3">
                  <li>
                    Hands-on, Active Learning: Yoga, movement games, partner
                    activities.
                  </li>
                  <li>
                    Social-Emotional Growth: Emotional literacy, self-awareness,
                    empathy, self-regulation.
                  </li>
                  <li>
                    Physical Wellness: Flexibility, strength, balance, posture,
                    healthy movement habits.
                  </li>
                  <li>
                    Creative Expression: Art, music, journaling, and
                    sensory-based mindfulness.
                  </li>
                </ul>
                <p>
                  We complement, not duplicate, the regular school day.
                </p>
              </div>
              {/* IMAGE */}
              <div className="col-lg-6 offset-lg-1 order-1 order-lg-2 text-lg-end text-center mt-5 mt-lg-0 d-flex justify-content-center justify-content-lg-end">
                <div className="photo-description position-relative rounded-4 d-inline-block">
                  <img
                    className="rounded-4 border border-2 border-white position-relative z-1 img-fluid"
                    src="/assets/imgs/kids/5.webp"
                    alt="Aligned With ELO-P & SEL Standards"
                    style={{ maxWidth: "460px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="position-relative section-padding fix">
        <div className="container position-relative z-1">
          <div className="text-center mb-8">
            <h3 className="my-3 fw-black">
              What’s Included in Our After-School Wellness Program
            </h3>
          </div>
        </div>
        <div className="container position-relative z-1">
          <div className="row">
            <div className="col-lg-6 pe-lg-8">
              <div className="d-flex flex-md-row flex-column align-items-center mb-4 hover-up">
                <img
                  className="rounded-3 w-100 w-md-auto"
                  src="/assets/imgs/blog-3/img-1.png"
                  alt="Yoga & Movement Classes"
                />
                <span className="content ms-5 mt-md-0 mt-3">
                  <h6 className="mb-2">Yoga & Movement Classes</h6>
                  <p>
                    Engaging physical activities promoting flexibility,
                    strength, and body awareness.
                  </p>
                </span>
              </div>
              <div className="d-flex flex-md-row flex-column align-items-center mb-4 hover-up">
                <img
                  className="rounded-3 w-100 w-md-auto"
                  src="/assets/imgs/blog-3/img-2.png"
                  alt="Mindfulness & SEL Sessions"
                />
                <span className="content ms-5 mt-md-0 mt-3">
                  <h6 className="mb-2">Mindfulness & SEL Sessions</h6>
                  <p>
                    Activities focused on social-emotional learning (SEL),
                    stress management, and emotional well-being.
                  </p>
                </span>
              </div>
            </div>
            <div className="col-lg-6 pe-lg-8">
              <div className="d-flex flex-md-row flex-column align-items-center mb-4 hover-up">
                <img
                  className="rounded-3 w-100 w-md-auto"
                  src="/assets/imgs/blog-3/img-3.png"
                  alt="Art & Mindfulness Crafts"
                />
                <span className="content ms-5 mt-md-0 mt-3">
                  <h6 className="mb-2">Art & Mindfulness Crafts</h6>
                  <p>
                    Creative expression combined with mindfulness techniques to
                    foster emotional release and self-discovery.
                  </p>
                </span>
              </div>
              <div className="d-flex flex-md-row flex-column align-items-center mb-4 hover-up">
                <img
                  className="rounded-3 w-100 w-md-auto"
                  src="/assets/imgs/blog-3/img-4.png"
                  alt="Team-building & Leadership Workshops"
                />
                <span className="content ms-5 mt-md-0 mt-3">
                  <h6 className="mb-2">Team-building & Leadership Workshops</h6>
                  <p>
                    Activities designed to foster collaboration, communication,
                    and leadership skills.
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Yoga Program Features*/}
      <section>
        <div className="container-fluid position-relative bg-primary-light section-padding">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-6 mb-lg-0 mb-8 pe-5 pe-lg-10 position-relative z-1">
                <h2 className="text-white mt-3 mb-4 fw-black">
                  Why Schools Love Partnering With Us
                </h2>
              </div>
              <div className="col-lg-4 col-md-6 mb-lg-0 mb-8 pe-lg-8">
                <ul className="list-unstyled ">
                  <li>
                    <div className="d-flex align-items-start mb-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={60}
                        height={60}
                        viewBox="0 0 23 24"
                        fill="none"
                      >
                        <path
                          d="M22.5 12C22.5 12.96 21.3206 13.7512 21.0844 14.6362C20.8406 15.5512 21.4575 16.8263 20.9944 17.6269C20.5238 18.4406 19.1081 18.5381 18.4481 19.1981C17.7881 19.8581 17.6906 21.2738 16.8769 21.7444C16.0763 22.2075 14.8012 21.5906 13.8862 21.8344C13.0012 22.0706 12.21 23.25 11.25 23.25C10.29 23.25 9.49875 22.0706 8.61375 21.8344C7.69875 21.5906 6.42375 22.2075 5.62313 21.7444C4.80938 21.2738 4.71187 19.8581 4.05188 19.1981C3.39188 18.5381 1.97625 18.4406 1.50563 17.6269C1.0425 16.8263 1.65938 15.5512 1.41563 14.6362C1.17938 13.7512 0 12.96 0 12C0 11.04 1.17938 10.2487 1.41563 9.36375C1.65938 8.44875 1.0425 7.17375 1.50563 6.37313C1.97625 5.55938 3.39188 5.46187 4.05188 4.80188C4.71187 4.14188 4.80938 2.72625 5.62313 2.25563C6.42375 1.7925 7.69875 2.40938 8.61375 2.16563C9.49875 1.92938 10.29 0.75 11.25 0.75C12.21 0.75 13.0012 1.92938 13.8862 2.16563C14.8012 2.40938 16.0763 1.7925 16.8769 2.25563C17.6906 2.72625 17.7881 4.14188 18.4481 4.80188C19.1081 5.46187 20.5238 5.55938 20.9944 6.37313C21.4575 7.17375 20.8406 8.44875 21.0844 9.36375C21.3206 10.2487 22.5 11.04 22.5 12Z"
                          fill="white"
                        />
                        <path
                          d="M14.5013 8.64754L10.2188 12.93L7.99875 10.7119C7.51688 10.23 6.735 10.23 6.25313 10.7119C5.77125 11.1938 5.77125 11.9757 6.25313 12.4575L9.36751 15.5719C9.83626 16.0407 10.5975 16.0407 11.0663 15.5719L16.245 10.3932C16.7269 9.91129 16.7269 9.12941 16.245 8.64754C15.7631 8.16566 14.9831 8.16566 14.5013 8.64754Z"
                          fill="#FFB703"
                        />
                      </svg>
                      <div className="ms-3 pb-4 border-bottom">
                        <h5 className="text-white mb-2">
                          Turnkey Administration
                        </h5>
                        <p className="text-white mb-0">
                          We manage enrollment, parent communication,
                          attendance, and rosters.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-start mb-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={60}
                        height={60}
                        viewBox="0 0 23 24"
                        fill="none"
                      >
                        <path
                          d="M22.5 12C22.5 12.96 21.3206 13.7512 21.0844 14.6362C20.8406 15.5512 21.4575 16.8263 20.9944 17.6269C20.5238 18.4406 19.1081 18.5381 18.4481 19.1981C17.7881 19.8581 17.6906 21.2738 16.8769 21.7444C16.0763 22.2075 14.8012 21.5906 13.8862 21.8344C13.0012 22.0706 12.21 23.25 11.25 23.25C10.29 23.25 9.49875 22.0706 8.61375 21.8344C7.69875 21.5906 6.42375 22.2075 5.62313 21.7444C4.80938 21.2738 4.71187 19.8581 4.05188 19.1981C3.39188 18.5381 1.97625 18.4406 1.50563 17.6269C1.0425 16.8263 1.65938 15.5512 1.41563 14.6362C1.17938 13.7512 0 12.96 0 12C0 11.04 1.17938 10.2487 1.41563 9.36375C1.65938 8.44875 1.0425 7.17375 1.50563 6.37313C1.97625 5.55938 3.39188 5.46187 4.05188 4.80188C4.71187 4.14188 4.80938 2.72625 5.62313 2.25563C6.42375 1.7925 7.69875 2.40938 8.61375 2.16563C9.49875 1.92938 10.29 0.75 11.25 0.75C12.21 0.75 13.0012 1.92938 13.8862 2.16563C14.8012 2.40938 16.0763 1.7925 16.8769 2.25563C17.6906 2.72625 17.7881 4.14188 18.4481 4.80188C19.1081 5.46187 20.5238 5.55938 20.9944 6.37313C21.4575 7.17375 20.8406 8.44875 21.0844 9.36375C21.3206 10.2487 22.5 11.04 22.5 12Z"
                          fill="white"
                        />
                        <path
                          d="M14.5013 8.64754L10.2188 12.93L7.99875 10.7119C7.51688 10.23 6.735 10.23 6.25313 10.7119C5.77125 11.1938 5.77125 11.9757 6.25313 12.4575L9.36751 15.5719C9.83626 16.0407 10.5975 16.0407 11.0663 15.5719L16.245 10.3932C16.7269 9.91129 16.7269 9.12941 16.245 8.64754C15.7631 8.16566 14.9831 8.16566 14.5013 8.64754Z"
                          fill="#FFB703"
                        />
                      </svg>
                      <div className="ms-3 pb-4 border-bottom">
                        <h5 className="text-white mb-2">
                          Certified Kids-Yoga Specialists
                        </h5>
                        <p className="text-white mb-0">
                          Experienced with trauma-informed classrooms and
                          neurodiverse learners.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-start mb-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={60}
                        height={60}
                        viewBox="0 0 23 24"
                        fill="none"
                      >
                        <path
                          d="M22.5 12C22.5 12.96 21.3206 13.7512 21.0844 14.6362C20.8406 15.5512 21.4575 16.8263 20.9944 17.6269C20.5238 18.4406 19.1081 18.5381 18.4481 19.1981C17.7881 19.8581 17.6906 21.2738 16.8769 21.7444C16.0763 22.2075 14.8012 21.5906 13.8862 21.8344C13.0012 22.0706 12.21 23.25 11.25 23.25C10.29 23.25 9.49875 22.0706 8.61375 21.8344C7.69875 21.5906 6.42375 22.2075 5.62313 21.7444C4.80938 21.2738 4.71187 19.8581 4.05188 19.1981C3.39188 18.5381 1.97625 18.4406 1.50563 17.6269C1.0425 16.8263 1.65938 15.5512 1.41563 14.6362C1.17938 13.7512 0 12.96 0 12C0 11.04 1.17938 10.2487 1.41563 9.36375C1.65938 8.44875 1.0425 7.17375 1.50563 6.37313C1.97625 5.55938 3.39188 5.46187 4.05188 4.80188C4.71187 4.14188 4.80938 2.72625 5.62313 2.25563C6.42375 1.7925 7.69875 2.40938 8.61375 2.16563C9.49875 1.92938 10.29 0.75 11.25 0.75C12.21 0.75 13.0012 1.92938 13.8862 2.16563C14.8012 2.40938 16.0763 1.7925 16.8769 2.25563C17.6906 2.72625 17.7881 4.14188 18.4481 4.80188C19.1081 5.46187 20.5238 5.55938 20.9944 6.37313C21.4575 7.17375 20.8406 8.44875 21.0844 9.36375C21.3206 10.2487 22.5 11.04 22.5 12Z"
                          fill="white"
                        />
                        <path
                          d="M14.5013 8.64754L10.2188 12.93L7.99875 10.7119C7.51688 10.23 6.735 10.23 6.25313 10.7119C5.77125 11.1938 5.77125 11.9757 6.25313 12.4575L9.36751 15.5719C9.83626 16.0407 10.5975 16.0407 11.0663 15.5719L16.245 10.3932C16.7269 9.91129 16.7269 9.12941 16.245 8.64754C15.7631 8.16566 14.9831 8.16566 14.5013 8.64754Z"
                          fill="#FFB703"
                        />
                      </svg>
                      <div className="ms-3 pb-4 border-bottom">
                        <h5 className="text-white mb-2">Flexible Scheduling</h5>
                        <p className="text-white mb-0">
                          Before school, after school, enrichment blocks, or
                          seasonal camps.{" "}
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 mb-lg-0 mb-8 pe-lg-8">
                <ul className="list-unstyled ">
                  <li>
                    <div className="d-flex align-items-start mb-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={60}
                        height={60}
                        viewBox="0 0 23 24"
                        fill="none"
                      >
                        <path
                          d="M22.5 12C22.5 12.96 21.3206 13.7512 21.0844 14.6362C20.8406 15.5512 21.4575 16.8263 20.9944 17.6269C20.5238 18.4406 19.1081 18.5381 18.4481 19.1981C17.7881 19.8581 17.6906 21.2738 16.8769 21.7444C16.0763 22.2075 14.8012 21.5906 13.8862 21.8344C13.0012 22.0706 12.21 23.25 11.25 23.25C10.29 23.25 9.49875 22.0706 8.61375 21.8344C7.69875 21.5906 6.42375 22.2075 5.62313 21.7444C4.80938 21.2738 4.71187 19.8581 4.05188 19.1981C3.39188 18.5381 1.97625 18.4406 1.50563 17.6269C1.0425 16.8263 1.65938 15.5512 1.41563 14.6362C1.17938 13.7512 0 12.96 0 12C0 11.04 1.17938 10.2487 1.41563 9.36375C1.65938 8.44875 1.0425 7.17375 1.50563 6.37313C1.97625 5.55938 3.39188 5.46187 4.05188 4.80188C4.71187 4.14188 4.80938 2.72625 5.62313 2.25563C6.42375 1.7925 7.69875 2.40938 8.61375 2.16563C9.49875 1.92938 10.29 0.75 11.25 0.75C12.21 0.75 13.0012 1.92938 13.8862 2.16563C14.8012 2.40938 16.0763 1.7925 16.8769 2.25563C17.6906 2.72625 17.7881 4.14188 18.4481 4.80188C19.1081 5.46187 20.5238 5.55938 20.9944 6.37313C21.4575 7.17375 20.8406 8.44875 21.0844 9.36375C21.3206 10.2487 22.5 11.04 22.5 12Z"
                          fill="white"
                        />
                        <path
                          d="M14.5013 8.64754L10.2188 12.93L7.99875 10.7119C7.51688 10.23 6.735 10.23 6.25313 10.7119C5.77125 11.1938 5.77125 11.9757 6.25313 12.4575L9.36751 15.5719C9.83626 16.0407 10.5975 16.0407 11.0663 15.5719L16.245 10.3932C16.7269 9.91129 16.7269 9.12941 16.245 8.64754C15.7631 8.16566 14.9831 8.16566 14.5013 8.64754Z"
                          fill="#FFB703"
                        />
                      </svg>
                      <div className="ms-3 pb-4 border-bottom">
                        <h5 className="text-white mb-2">
                          Community Integration
                        </h5>
                        <p className="text-white mb-0">
                          Designed to support PTA initiatives, SEL weeks, health
                          fairs, and wellness events.{" "}
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-faqs-1 section-padding position-relative">
        <div className="container position-relative z-1">
          <div className="text-center mb-8">
            <h3 className="my-3 fw-black">Frequently Asked Questions</h3>
            <p className="fs-5 mb-0">
              Find Answers About Bringing Yoga & Mindfulness to Schools.
            </p>
          </div>
        </div>

        <div className="container position-relative z-2">
          <div className="row align-items-center">
            <div className="col-lg-12 mt-lg-0 mt-8">
              {/* FAQ 1 */}
              <div className="mb-3 card p-3 border bg-white rounded-2 shadow-2">
                <div className="px-0 border-0">
                  <div className="text-900 fw-bold d-flex align-items-center">
                    <h6 className="m-0">
                      Is this suitable for children with ADHD or anxiety?
                    </h6>
                  </div>
                </div>
                <div className="card-body ps-0">
                  <p className="mb-0">
                    Yes! Our instructors are trained in trauma-informed,
                    inclusive teaching methods. Yoga helps kids regulate
                    emotions and manage stress.
                  </p>
                </div>
              </div>

              {/* FAQ 2 */}
              <div className="mb-3 card p-3 border bg-white rounded-2 shadow-2">
                <div className="px-0 border-0">
                  <div className="text-900 fw-bold d-flex align-items-center">
                    <h6 className="m-0">Do kids need experience with yoga?</h6>
                  </div>
                </div>
                <div className="card-body ps-0">
                  <p className="mb-0">
                    Nope! Our classes are beginner-friendly, fun, and
                    age-appropriate.
                  </p>
                </div>
              </div>

              {/* FAQ 3 */}
              <div className="mb-3 card p-3 border bg-white rounded-2 shadow-2">
                <div className="px-0 border-0">
                  <div className="text-900 fw-bold d-flex align-items-center">
                    <h6 className="m-0">
                      What are the safety and liability considerations for the
                      program?
                    </h6>
                  </div>
                </div>
                <div className="card-body ps-0">
                  <p className="mb-0">
                    Our instructors are certified in kids yoga and trained in
                    child safety practices. We also carry liability insurance to
                    cover the program, ensuring peace of mind for your school.
                  </p>
                </div>
              </div>

              {/* FAQ 4 */}
              <div className="mb-3 card p-3 border bg-white rounded-2 shadow-2">
                <div className="px-0 border-0">
                  <div className="text-900 fw-bold d-flex align-items-center">
                    <h6 className="m-0">
                      How do we enroll students in the program?
                    </h6>
                  </div>
                </div>
                <div className="card-body ps-0">
                  <p className="mb-0">
                    We provide simple, ready-to-use enrollment forms for
                    parents, or we can manage sign-ups directly with our online
                    registration system.
                  </p>
                </div>
              </div>

              {/* FAQ 5 */}
              <div className="mb-3 card p-3 border bg-white rounded-2 shadow-2">
                <div className="px-0 border-0">
                  <div className="text-900 fw-bold d-flex align-items-center">
                    <h6 className="m-0">
                      Is the program flexible in terms of scheduling?
                    </h6>
                  </div>
                </div>
                <div className="card-body ps-0">
                  <p className="mb-0">
                    Absolutely! We offer flexible scheduling—during school
                    hours, after-school, or custom timings to fit your school’s
                    needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact1 />
    </>
  );
}
