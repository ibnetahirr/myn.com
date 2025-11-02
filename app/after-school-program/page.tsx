import Layout from "@/components/layout/Layout";
import Link from "next/link";

export const metadata = {
  title: "After School Program | My Yoga Network",
  description:
    "Discover My Yoga Network's After School Program, designed for Pre-K to 5th grade kids in Long Beach, CA, to transform wiggles into wellness with tailored yoga and mindfulness activities.",
};

export default function AfterSchoolPage() {
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
                    alt="Hotels"
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
                        src="/assets/imgs/clients/institutes/california-state-university.png"
                        alt="California State University"
                        height={100}
                      />
                      <p className="text-900 mt-3 mb-0">
                        California State University
                      </p>
                    </div>
                    <div className="compatible hover-up">
                      <img
                        src="/assets/imgs/clients/institutes/sc-health-sciences-university.webp"
                        alt="South California Health Sciences University"
                        height={100}
                      />
                      <p className="text-900 mt-3 mb-0">
                        South California Health Sciences University
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
                  (SEL), and team-building activities to help kids thrive —
                  physically, emotionally, and socially. Whether your little one
                  needs to move, express themselves through art, learn emotional
                  regulation, or just have fun with friends, we’ve got the
                  perfect blend of activities to support their development. 🎯
                  Now enrolling for the new season!
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

      {/*Blog-3*/}
      <section className="section-blog-3 position-relative @@classList section-padding fix">
        <div className="container position-relative z-1">
          <div
            className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2"
            data-aos="zoom-in"
            data-aos-delay={100}
          >
            <img src="/assets/imgs/features-1/dots.png" alt="infinia" />
            <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
              FOR HOSPITALITY
            </span>
          </div>
          <h3
            className="ds-3 my-3"
            data-aos="fade-zoom-in"
            data-aos-delay={300}
          >
            Transforming Stays Through Wellness
          </h3>
          <p data-aos="fade-zoom-in" data-aos-delay={100}>
            Curated yoga and mindfulness programs that elevate guest experience
            and enrich every property.
          </p>
          <div className="row">
            <div className="col-lg-6 pe-lg-8">
              <Link
                href="#"
                className="d-flex flex-md-row flex-column align-items-center mb-4 hover-up"
              >
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
              </Link>
              <Link
                href="#"
                className="d-flex flex-md-row flex-column align-items-center mb-4 hover-up"
              >
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
              </Link>
            </div>
            <div className="col-lg-6 pe-lg-8">
              <Link
                href="#"
                className="d-flex flex-md-row flex-column align-items-center mb-4 hover-up"
              >
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
              </Link>
              <Link
                href="#"
                className="d-flex flex-md-row flex-column align-items-center mb-4 hover-up"
              >
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
              </Link>
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

      <section className="section-team-1 position-relative fix section-padding">
        <div className="container position-relative z-2">
          <div className="text-center">
            <div
              className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2"
              data-aos="zoom-in"
              data-aos-delay={100}
            >
              <img
                src="/assets/imgs/features-1/dots.png"
                alt="My Yoga Network"
              />
              <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
                Other Program Combinations with Local Partners
              </span>
            </div>
            <p className="fs-5 text-900 mb-0">
              We collaborate with trusted local educators and creatives to
              design engaging, age-appropriate wellness experiences. Explore our
              flexible pairings:
            </p>
          </div>
          <div className="row mt-6 position-relative">
            {/* prettier-ignore */}
            <div className="col-lg-4 col-md-6">
        <div className="p-2 rounded-4 shadow-1 bg-white position-relative z-1 hover-up mb-4">
          <div className="card-service bg-white p-6 border rounded-4 text-center">
            <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
              <div className="icon">
                <img src="/assets/imgs/service-2/icon-1.svg" alt="My Yoga Network" />
              </div>
            </div>
            <h5 className="my-3">Yoga +  Art / Mindfulness Crafts</h5>
            <ul className="mb-6 text-start">
              <li>45 min yoga + breathwork</li>
              <li>15 min snack/break</li>
              <li>1 hr expressive art project (e.g., mandala coloring, “mood journals,” gratitude jars)</li>
            </ul>
            <p className="mb-6">Why it works: 
                <br/>
                  Combines physical, emotional, and creative development. Easy to adapt by age.</p>
            <Link href="#" className="text-primary fs-7 fw-bold">
              
              <svg className=" ms-2 " xmlns="http://www.w3.org/2000/svg" width={19} height={18} viewBox="0 0 19 18" fill="none">
                <g clipPath="url(#clip0_399_9647)">
                  <path d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z" fill="#111827" />
                </g>
                <defs>
                  <clipPath>
                    <rect width={18} height={18} fill="white" transform="translate(0.5)" />
                  </clipPath>
                </defs>
              </svg>
            </Link>
          </div>
        </div>
      </div>
            <div className="col-lg-4 col-md-6">
              <div className="p-2 rounded-4 shadow-1 bg-white position-relative z-1 hover-up mb-4">
                <div className="card-service bg-white p-6 border rounded-4 text-center">
                  <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
                    <div className="icon">
                      <img
                        src="/assets/imgs/service-2/icon-2.svg"
                        alt="My Yoga Network"
                      />
                    </div>
                  </div>
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
                  <Link href="#" className="text-primary fs-7 fw-bold">
                    <svg
                      className=" ms-2 "
                      xmlns="http://www.w3.org/2000/svg"
                      width={19}
                      height={18}
                      viewBox="0 0 19 18"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_399_9647)">
                        <path
                          d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z"
                          fill="#111827"
                        />
                      </g>
                      <defs>
                        <clipPath>
                          <rect
                            width={18}
                            height={18}
                            fill="white"
                            transform="translate(0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="p-2 rounded-4 shadow-1 bg-white position-relative z-1 hover-up mb-4">
                <div className="card-service bg-white p-6 border rounded-4 text-center">
                  <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
                    <div className="icon">
                      <img
                        src="/assets/imgs/service-2/icon-3.svg"
                        alt="My Yoga Network"
                      />
                    </div>
                  </div>
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
                  <Link href="#" className="text-primary fs-7 fw-bold">
                    <svg
                      className=" ms-2 "
                      xmlns="http://www.w3.org/2000/svg"
                      width={19}
                      height={18}
                      viewBox="0 0 19 18"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_399_9647)">
                        <path
                          d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z"
                          fill="#111827"
                        />
                      </g>
                      <defs>
                        <clipPath>
                          <rect
                            width={18}
                            height={18}
                            fill="white"
                            transform="translate(0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="p-2 rounded-4 shadow-1 bg-white position-relative z-1 hover-up mb-4">
                <div className="card-service bg-white p-6 border rounded-4 text-center">
                  <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
                    <div className="icon">
                      <img
                        src="/assets/imgs/service-2/icon-4.svg"
                        alt="My Yoga Network"
                      />
                    </div>
                  </div>
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
                  <Link href="#" className="text-primary fs-7 fw-bold">
                    <svg
                      className=" ms-2 "
                      xmlns="http://www.w3.org/2000/svg"
                      width={19}
                      height={18}
                      viewBox="0 0 19 18"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_399_9647)">
                        <path
                          d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z"
                          fill="#111827"
                        />
                      </g>
                      <defs>
                        <clipPath>
                          <rect
                            width={18}
                            height={18}
                            fill="white"
                            transform="translate(0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="p-2 rounded-4 shadow-1 bg-white position-relative z-1 hover-up mb-4">
                <div className="card-service bg-white p-6 border rounded-4 text-center">
                  <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
                    <div className="icon">
                      <img
                        src="/assets/imgs/service-2/icon-5.svg"
                        alt="My Yoga Network"
                      />
                    </div>
                  </div>
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
                  <Link href="#" className="text-primary fs-7 fw-bold">
                    <svg
                      className=" ms-2 "
                      xmlns="http://www.w3.org/2000/svg"
                      width={19}
                      height={18}
                      viewBox="0 0 19 18"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_399_9647)">
                        <path
                          d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z"
                          fill="#111827"
                        />
                      </g>
                      <defs>
                        <clipPath>
                          <rect
                            width={18}
                            height={18}
                            fill="white"
                            transform="translate(0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="p-2 rounded-4 shadow-1 bg-white position-relative z-1 hover-up mb-4">
                <div className="card-service bg-white p-6 border rounded-4 text-center">
                  <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
                    <div className="icon">
                      <img
                        src="/assets/imgs/service-2/icon-6.svg"
                        alt="My Yoga Network"
                      />
                    </div>
                  </div>
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
                  <Link href="#" className="text-primary fs-7 fw-bold">
                    <svg
                      className=" ms-2 "
                      xmlns="http://www.w3.org/2000/svg"
                      width={19}
                      height={18}
                      viewBox="0 0 19 18"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_399_9647)">
                        <path
                          d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z"
                          fill="#111827"
                        />
                      </g>
                      <defs>
                        <clipPath>
                          <rect
                            width={18}
                            height={18}
                            fill="white"
                            transform="translate(0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <svg
              className="position-absolute top-50 start-50 translate-middle z-0"
              xmlns="http://www.w3.org/2000/svg"
              width={828}
              height={699}
              viewBox="0 0 828 699"
              fill="none"
            >
              <path
                className="fill-primary-soft"
                d="M0 130.481C0 110.236 15.1267 93.1822 35.2276 90.7667L783.228 0.880261C807.04 -1.98124 828 16.611 828 40.5945V533.155C828 552.691 813.888 569.369 794.622 572.603L46.6224 698.173C22.2271 702.269 0 683.462 0 658.725V130.481Z"
                fill="#F5EEFF"
              />
            </svg>
          </div>
        </div>
        <div className="position-absolute top-0 start-50 translate-middle-x z-0">
          <img src="/assets/imgs/service-2/bg-line.png" alt="My Yoga Network" />
        </div>
        <div className="rotate-center ellipse-rotate-success position-absolute z-1" />
        <div className="rotate-center-rev ellipse-rotate-primary position-absolute z-1" />
      </section>

      {/* feature-12 */}
      <section className="section-feature-12 border-bottom pb-120 pt-110">
        <div className="container">
          <div className="text-center">
            <h5 className="ds-5">12-Week Program (2 Hours per Week)</h5>
            <p className="fs-5 pb-4">
              A structured program combining yoga and mindfulness art to support
              kids’ development.
            </p>
          </div>
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

      {/*Team-1*/}
      <section className="section-team-1 section-padding position-relative overflow-hidden">
        <div className="container">
          <div className="row position-relative z-1">
            <div className="text-center">
              <h6
                className="ds-4 my-3"
                data-aos="fade-zoom-in"
                data-aos-delay={200}
              >
                Peek Into Our After School Kids Wellness Program
              </h6>
            </div>
          </div>
          <div className="row mt-6">
            {/* prettier-ignore */}
            <div className="col-lg-3 col-md-6 mb-lg-4 mb-7 text-center" data-aos="fade-zoom-in" data-aos-delay={100}>
              <div className="position-relative d-inline-block z-1">
                <div className="zoom-img rounded-3">
                  <img className="img-fluid w-100" src="/assets/imgs/team-1/img-1.jpg" alt="my-yoga-network" />
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
                    src="/assets/imgs/team-1/img-2.jpg"
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
                    src="/assets/imgs/team-1/img-3.jpg"
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
                    src="/assets/imgs/team-1/img-4.jpg"
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
