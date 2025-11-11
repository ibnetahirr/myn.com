"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";

export default function AfterSchoolPage() {
  // Accordion
  const [activeItem, setActiveItem] = useState(1);

  const handleActiveItem = (index: any) => {
    setActiveItem(index);
  };

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
                    src="/assets/imgs/after-school/hero.webp"
                    alt="Schools / Kids Yoga"
                  />
                  <div className="box-gradient-1 ms-lg-8 position-absolute bottom-0 start-0 bg-linear-1 rounded-4 z-0" />
                </div>
              </div>
              <div className="col-lg-6 offset-lg-1 mt-lg-0 mt-5">
                <h4 className="ds-4 fw-regular">
                  After School Programs That Transforms Wiggles into Wellness
                </h4>
                <p className="fs-5">
                  Designed for Pre-K to 5th grade, our program helps kids reset,
                  refocus, and recharge.
                </p>
              </div>
              <div className="row pt-lg-150 pt-8 text-center d-none d-md-block">
                <div className="col-lg-10 col mx-lg-auto">
                  <h6 className="text-500">Trusted by Schools & Communities</h6>
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

            <div className="py-90"></div>
            <div className="row align-items-start pb-5 pt-lg-5 pt-0">
              <div className="col-lg-5 order-2 order-lg-1 mt-lg-0 mt-10 pt-lg-0 pt-5">
                <h4 className="ds-4 fw-regular">
                  Helping Kids Thrive After Class
                </h4>
                <p className="fs-5">
                  Looking for a safe, nurturing, and fun space where your child
                  can wind down after school while learning valuable life
                  skills? Our After School Enrichment Program combines the best
                  of yoga, mindfulness, creative arts, social-emotional learning
                  (SEL), and team-building activities to help kids thrive,
                  physically, emotionally, and socially. Whether your little one
                  needs to move, express themselves through art, learn emotional
                  regulation, or just have fun with friends, we’ve got the
                  perfect blend of activities to support their development. Now
                  enrolling for the new season!
                </p>
              </div>
              <div className="col-lg-6 offset-lg-1 order-1 order-lg-2 mt-5 text-lg-end text-center">
                <div className="photo-description position-relative rounded-4 d-inline-block">
                  <img
                    className="rounded-4 border border-2 border-white position-relative z-1"
                    src="/assets/imgs/kids/hero.webp"
                    alt="stand out"
                  />
                  <div className="position-absolute top-50 start-50 translate-middle z-0">
                    <div className="box-gradient-2 position-relative bg-linear-1 rounded-4 z-0"></div>
                  </div>
                  <img
                    className="position-absolute top-100 start-0 d-none d-md-block translate-middle rounded-4 border border-2 border-white position-relative z-1"
                    src="/assets/imgs/kids/kids-at-studio.webp"
                    height={150}
                   />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Blog-3*/}
      <section className="section-blog-3 position-relative section-padding fix">
        <div className="container position-relative z-1">
          <div className="text-center mb-8">
            <h3 className="ds-5 my-3 fw-black">
              Our Programs: Supporting ELO-P Priorities
            </h3>
            <p className="fs-5 mb-0">
              Our diverse program offerings are designed to align with the
              Expanded Learning Opportunities Program (ELO-P) goals of
              developing the academic, social, emotional, and physical needs of
              students through hands-on learning experiences. We complement, but
              do not replicate, learning activities in the regular school day.
            </p>
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
        <div className="position-absolute top-0 start-50 translate-middle-x z-0">
          <img
            src="/assets/imgs/blog-2/img-bg-line.png"
            alt="My Yoga Network"
          />
        </div>
        <div className="bouncing-blobs-container">
          <div className="bouncing-blobs-glass" />
          <div className="bouncing-blobs">
            <div className="bouncing-blob bouncing-blob--green" />
            <div className="bouncing-blob bouncing-blob--primary" />
          </div>
        </div>
      </section>

      {/*Services-2*/}
      <section className="position-relative fix section-padding">
        <div className="container position-relative z-1">
          <div className="text-center mb-8">
            <h3 className="ds-5 my-3 fw-black">
              Other Program Combinations with Local Partners
            </h3>
            <p className="fs-5 mb-0">
              We collaborate with trusted local educators and creatives to
              design engaging, age-appropriate wellness experiences. Explore our
              flexible pairings:
            </p>
          </div>
        </div>
        <div className="container position-relative z-2">
          <div className="row mt-6 position-relative">
            {/* prettier-ignore */}
            <div className="col-lg-4 col-md-6">
        <div className="p-2 rounded-4 shadow-1 bg-white position-relative z-1 hover-up mb-4">
          <div className="card-service bg-white p-6 border rounded-4 text-center">
            <h5 className="my-3">Yoga +  Art / Mindfulness Crafts</h5>
            <ul className="mb-6 text-start">
              <li>45 min yoga + breathwork</li>
              <li>15 min snack/break</li>
              <li>1 hr expressive art project (e.g., mandala coloring, “mood journals,” gratitude jars)</li>
            </ul>
            <p className="mb-6">Why it works: 
                <br/>
                  Combines physical, emotional, and creative development. Easy to adapt by age.</p>
          </div>
        </div>
      </div>
            <div className="col-lg-4 col-md-6">
              <div className="p-2 rounded-4 shadow-1 bg-white position-relative z-1 hover-up mb-4">
                <div className="card-service bg-white p-6 border rounded-4 text-center">
                  <h5 className="my-3">Yoga + SEL & Character Development</h5>
                  <ul className="mb-6 text-start">
                    <li>
                      1 hr yoga with SEL themes (e.g., confidence, kindness)
                    </li>
                    <li>
                      1 hr structured activity (storytelling, role play,
                      journaling, team-building)
                    </li>
                  </ul>
                  <p className="mb-6">
                    Why it works:
                    <br />
                    Meets goals around leadership, emotional regulation, and
                    personal growth.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="p-2 rounded-4 shadow-1 bg-white position-relative z-1 hover-up mb-4">
                <div className="card-service bg-white p-6 border rounded-4 text-center">
                  <h5 className="my-3">Yoga + Music & Movement</h5>
                  <ul className="mb-6 text-start">
                    <li>45 min yoga</li>
                    <li>15 min movement games</li>
                    <li>
                      1 hr rhythm & sound (e.g., drumming circles, sound baths,
                      sing-alongs)
                    </li>
                  </ul>
                  <p className="mb-6">
                    Why it works:
                    <br />
                    Perfect for TK–6. Encourages full-body expression and
                    cultural integration.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="p-2 rounded-4 shadow-1 bg-white position-relative z-1 hover-up mb-4">
                <div className="card-service bg-white p-6 border rounded-4 text-center">
                  <h5 className="my-3">
                    Yoga + Nature / Mindful Movement Games
                  </h5>
                  <ul className="mb-6 text-start">
                    <li>1 hr yoga indoors or outdoors</li>
                    <li>
                      1 hr sensory/nature play (yoga scavenger hunt, garden
                      time, mindful walks)
                    </li>
                  </ul>
                  <p className="mb-6">
                    Why it works:
                    <br />
                    Encourages calm energy and supports active learning goals.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="p-2 rounded-4 shadow-1 bg-white position-relative z-1 hover-up mb-4">
                <div className="card-service bg-white p-6 border rounded-4 text-center">
                  <h5 className="my-3">Yoga + Healthy Cooking or Nutrition</h5>
                  <ul className="mb-6 text-start">
                    <li>45 min yoga with digestive breathwork</li>
                    <li>
                      1 hr food-based fun (fruit kabobs, smoothie demos, mindful
                      eating lessons)
                    </li>
                  </ul>
                  <p className="mb-6">
                    Why it works:
                    <br /> Matches ELO-P interest areas like cooking and healthy
                    choices. Kids love it!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="p-2 rounded-4 shadow-1 bg-white position-relative z-1 hover-up mb-4">
                <div className="card-service bg-white p-6 border rounded-4 text-center">
                  <h5 className="my-3">
                    Yoga + Meditation or Storytime (TK–3)
                  </h5>
                  <ul className="mb-6 text-start">
                    <li>1 hr yoga & movement</li>
                    <li>
                      1 hr story-based relaxation (yoga nidra, guided
                      visualizations, stories about feelings)
                    </li>
                  </ul>
                  <p className="mb-6">
                    Why it works:
                    <br />
                    Promotes rest, recovery, and imagination. Ideal for younger
                    students.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* feature-12 */}
      <section className="section-feature-12 border-bottom pb-120 pt-110">
        <div className="container position-relative z-1">
          <div className="text-center mb-8">
            <h3 className="ds-5 my-3 fw-black">
              12-Week Program (2 Hours per Week)
            </h3>
            <p className="fs-5 mb-0">
              A structured program combining yoga and mindfulness art to support
              kids’ development.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="feature-item mb-5 bg-neutral-100 p-7 rounded-4 hover-up">
                <div className="icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
                  <div className="icon">
                    <img
                      className="filter-invert"
                      src="/assets/imgs/service-1/icon-6.svg"
                      alt="My Yoga Network"
                    />
                  </div>
                </div>
                <h4>Yoga Theme (1 hr)</h4>
                <p>
                  Week 1: Grounding & Balance
                  <br />
                  Week 2: Breath Awareness & Focus
                  <br />
                  Week 3: Kindness in Motion (Heart Openers)
                  <br />
                  Week 4: Strength & Confidence
                  <br />
                  Week 5: Emotional Release (Twists & Flows)
                  <br />
                  Week 6: Friendship & Team Yoga
                  <br />
                  Week 7: Calm & Stillness
                  <br />
                  Week 8: Energy Boost & Playful Movement
                  <br />
                  Week 9: Mindful Listening & Sound Healing
                  <br />
                  Week 10: Focus & Clarity
                  <br />
                  Week 11: Letting Go & Forgiveness
                  <br />
                  Week 12: Celebration & Reflection
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="feature-item mb-5 bg-neutral-100 p-7 rounded-4 hover-up">
                <div className="icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
                  <div className="icon">
                    <img
                      className="filter-invert"
                      src="/assets/imgs/service-1/icon-4.svg"
                      alt="My Yoga Network"
                    />
                  </div>
                </div>
                <h4>Art/Mindfulness Activity (1 hr)</h4>
                <p>
                  Week 1: Create a “Calm Corner” poster or mood journal
                  <br />
                  Week 2: Make a paper breathing wand / straw breath craft
                  <br />
                  Week 3: Gratitude tree leaves (what am I grateful for?)
                  <br />
                  Week 4: “I Am” affirmation cards or superhero self-portraits
                  <br />
                  Week 5: Scribble art & color-your-feelings worksheets
                  <br />
                  Week 6: Create kindness coupons or team collage
                  <br />
                  Week 7: Mandala coloring with music or scent
                  <br />
                  Week 8: Paint-to-music or movement-inspired art
                  <br />
                  Week 9: DIY rainsticks or calming sound jars
                  <br />
                  Week 10: Zentangle or line art with silent drawing
                  <br />
                  Week 11: Flying wish paper or watercolor “let go” projects
                  <br />
                  Week 12: Decorate a yoga memory page or group mural
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-faqs-1 section-padding position-relative">
        <div className="container position-relative z-1">
          <div className="text-center mb-8">
            <h3 className="ds-5 my-3 fw-black">Frequently Asked Questions</h3>
            <p className="fs-5 mb-0">
              Find Answers About Bringing Yoga & Mindfulness to Schools.
            </p>
          </div>
        </div>
        <div className="container position-relative z-2">
          <div className="row align-items-center">
            <div className="col-lg-12 mt-lg-0 mt-8 ">
              <div className="accordion">
                <div className="mb-3 card p-3 border  bg-white rounded-2 shadow-2">
                  <div className="px-0 card-header border-0 bg-gradient-1">
                    <a
                      className={` ${activeItem} == 1 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`}
                      onClick={() => handleActiveItem(1)}
                      data-bs-toggle="collapse"
                    >
                      <h6 className="m-0">
                        Is this suitable for children with ADHD or anxiety?
                      </h6>
                      <span className="ms-auto arrow me-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={13}
                          height={8}
                          viewBox="0 0 13 8"
                          fill="none"
                        >
                          <path
                            className="stroke-dark"
                            d="M11.5 1L6.25 6.5L1 1"
                            stroke="#111827"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                  <div
                    id="collapse01"
                    className={
                      activeItem == 1
                        ? "accordion-collapse collapse show"
                        : "accordion-collapse collapse"
                    }
                    data-bs-parent=".accordion"
                  >
                    <p className="ps-0 card-body">
                      Yes! Our instructors are trained in trauma-informed,
                      inclusive teaching methods. Yoga helps kids regulate
                      emotions and manage stress.
                    </p>
                  </div>
                </div>
                <div className="mb-3 card p-3 border  bg-white rounded-2 shadow-2">
                  <div className="px-0 card-header border-0 bg-gradient-1">
                    <a
                      className={` ${activeItem} == 2 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`}
                      onClick={() => handleActiveItem(2)}
                      data-bs-toggle="collapse"
                    >
                      <h6 className="m-0">
                        Do kids need experience with yoga?
                      </h6>
                      <span className="ms-auto arrow me-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={13}
                          height={8}
                          viewBox="0 0 13 8"
                          fill="none"
                        >
                          <path
                            className="stroke-dark"
                            d="M11.5 1L6.25 6.5L1 1"
                            stroke="#111827"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                  <div
                    id="collapse02"
                    className={
                      activeItem == 2
                        ? "accordion-collapse collapse show"
                        : "accordion-collapse collapse"
                    }
                    data-bs-parent=".accordion"
                  >
                    <p className="ps-0 card-body">
                      Nope! Our classes are beginner-friendly, fun, and
                      age-appropriate.
                    </p>
                  </div>
                </div>
                <div className="mb-3 card p-3 border  bg-white rounded-2 shadow-2">
                  <div className="px-0 card-header border-0 bg-gradient-1">
                    <a
                      className={` ${activeItem} == 3 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`}
                      onClick={() => handleActiveItem(3)}
                      data-bs-toggle="collapse"
                    >
                      <h6 className="m-0">
                        What are the safety and liability considerations for the
                        program?
                      </h6>
                      <span className="ms-auto arrow me-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={13}
                          height={8}
                          viewBox="0 0 13 8"
                          fill="none"
                        >
                          <path
                            className="stroke-dark"
                            d="M11.5 1L6.25 6.5L1 1"
                            stroke="#111827"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                  <div
                    id="collapse03"
                    className={
                      activeItem == 3
                        ? "accordion-collapse collapse show"
                        : "accordion-collapse collapse"
                    }
                    data-bs-parent=".accordion"
                  >
                    <p className="ps-0 card-body">
                      Our instructors are certified in kids yoga and trained in
                      child safety practices. We also carry liability insurance
                      to cover the program, so your school can rest easy knowing
                      everything is taken care of.
                    </p>
                  </div>
                </div>
                <div className="mb-3 card p-3 border  bg-white rounded-2 shadow-2">
                  <div className="px-0 card-header border-0 bg-gradient-1">
                    <a
                      className={` ${activeItem} == 4 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`}
                      onClick={() => handleActiveItem(4)}
                      data-bs-toggle="collapse"
                    >
                      <h6 className="m-0">
                        How do we enroll students in the program?
                      </h6>
                      <span className="ms-auto arrow me-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={13}
                          height={8}
                          viewBox="0 0 13 8"
                          fill="none"
                        >
                          <path
                            className="stroke-dark"
                            d="M11.5 1L6.25 6.5L1 1"
                            stroke="#111827"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                  <div
                    id="collapse04"
                    className={
                      activeItem == 4
                        ? "accordion-collapse collapse show"
                        : "accordion-collapse collapse"
                    }
                    data-bs-parent=".accordion"
                  >
                    <p className="ps-0 card-body">
                      We’ll provide you with a simple enrollment form that can
                      be shared with parents, or we can handle sign-ups
                      directly. We offer an easy online registration system for
                      parents to sign up their children.
                    </p>
                  </div>
                </div>
                <div className="mb-3 card p-3 border  bg-white rounded-2 shadow-2">
                  <div className="px-0 card-header border-0 bg-gradient-1">
                    <a
                      className={` ${activeItem} == 5 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`}
                      onClick={() => handleActiveItem(5)}
                      data-bs-toggle="collapse"
                    >
                      <h6 className="m-0">
                        Is the program flexible in terms of scheduling?
                      </h6>
                      <span className="ms-auto arrow me-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={13}
                          height={8}
                          viewBox="0 0 13 8"
                          fill="none"
                        >
                          <path
                            className="stroke-dark"
                            d="M11.5 1L6.25 6.5L1 1"
                            stroke="#111827"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                  <div
                    id="collapse05"
                    className={
                      activeItem == 5
                        ? "accordion-collapse collapse show"
                        : "accordion-collapse collapse"
                    }
                    data-bs-parent=".accordion"
                  >
                    <p className="ps-0 card-body">
                      Absolutely! We offer flexible scheduling options to meet
                      your school’s needs, whether that’s once or twice a week
                      after school hours. We can adjust class lengths to fit
                      within your school’s timeframe.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
