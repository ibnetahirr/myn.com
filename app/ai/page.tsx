"use client";
import Layout from "@/components/layout/Layout";


export default function HotelAIPlatformContent() {
  return (
    <Layout>
      {/* HERO */}
      <section className="section-feature-5">
        <div className="container section-padding">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="ds-3 fw-regular">
                AI That Turns Hotel Wellness Into&nbsp;
                <span className="fw-bold">Revenue, Not Overhead.</span>
              </h1>
              <p className="fs-5 mt-4">
                My Yoga Network is an AI-powered hospitality wellness platform.
                We help hotels uncover demand, staff smarter, personalize guest
                experiences, and reduce operational risk — all in one system.
              </p>

              <div className="d-flex gap-3 mt-5">
                <a href="#ai-services" className="btn btn-primary">
                  Explore AI Services
                </a>
                <a href="/contact" className="btn btn-outline-secondary">
                  Request Demo
                </a>
              </div>
            </div>

            <div className="col-lg-5 offset-lg-1 mt-5 mt-lg-0">
              <div className="p-4 border rounded-4 bg-white shadow-sm">
                <ul className="list-unstyled mb-0">
                  <li className="mb-3">✔ Built for Hotels</li>
                  <li className="mb-3">✔ Real Market Intelligence</li>
                  <li className="mb-3">✔ Human + AI Network</li>
                  <li>✔ Revenue-Focused Wellness</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section-padding bg-light">
        <div className="text-center">
          <h3>How AI Works for Your Hotel</h3>
          <p className="fs-5">
            Practical intelligence, not generic dashboards.
          </p>
        </div>

        <div className="container mt-6">
          <div className="row g-4 text-center">
            {[
              {
                title: "Analyze",
                desc: "Scan your digital presence, reviews, job market, and local wellness signals.",
                icon: (
                  <circle cx="12" cy="12" r="9" stroke="#177BCE" strokeWidth="1.8" />
                ),
              },
              {
                title: "Predict",
                desc: "Identify revenue opportunities, staffing gaps, and guest demand patterns.",
                icon: (
                  <path
                    d="M4 16L9 11L13 14L20 7"
                    stroke="#22C55E"
                    strokeWidth="2"
                    fill="none"
                  />
                ),
              },
              {
                title: "Activate",
                desc: "Deploy vetted wellness professionals and programs matched to your property.",
                icon: (
                  <path
                    d="M12 4V20M4 12H20"
                    stroke="#177BCE"
                    strokeWidth="2"
                  />
                ),
              },
            ].map((step, i) => (
              <div key={i} className="col-md-4">
                <div className="h-100 p-4 bg-white rounded-4 shadow-sm">
                  <svg width="48" height="48" viewBox="0 0 24 24" className="mb-3">
                    {step.icon}
                  </svg>
                  <h6 className="fw-bold">{step.title}</h6>
                  <p className="mb-0">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI SERVICES */}
      <section id="ai-services" className="section-padding">
        <div className="text-center">
          <h3>AI Services Built for Hotels</h3>
          <p className="fs-5">
            Each module solves a real hospitality problem.
          </p>
        </div>

        <div className="container mt-6">
          <div className="row g-4">
            {[
              {
                title: "Wellness Revenue Optimizer",
                desc: "Identify new wellness revenue streams using your existing space, guests, and schedule.",
              },
              {
                title: "Staffing Intelligence Engine",
                desc: "Understand local wellness talent supply, pricing, and availability in real time.",
              },
              {
                title: "Guest Experience Personalization",
                desc: "AI-designed wellness experiences tailored to guest type and length of stay.",
              },
              {
                title: "Reputation & Review Intelligence",
                desc: "Analyze guest sentiment around wellness and uncover service gaps.",
              },
              {
                title: "Risk & Compliance Scanner",
                desc: "Ensure wellness programs meet insurance, credential, and safety standards.",
              },
              {
                title: "Local Wellness Demand Maps",
                desc: "Visualize what wellness services guests actively seek in your market.",
              },
            ].map((service, i) => (
              <div key={i} className="col-md-4">
                <div className="h-100 p-4 border rounded-4 bg-white">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    className="mb-3"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="4"
                      stroke="#177BCE"
                      strokeWidth="1.6"
                      fill="none"
                    />
                    <path
                      d="M8 12H16"
                      stroke="#22C55E"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                  <h6 className="fw-bold">{service.title}</h6>
                  <p className="mb-0">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="section-padding bg-primary">
        <div className="text-center text-white">
          <h3>Designed for Hospitality Leaders</h3>
          <p className="fs-5">
            Built with hotel operators, not just technologists.
          </p>
        </div>

        <div className="container mt-5">
          <div className="row g-4 text-center">
            {[
              "Hotel Owners & GMs",
              "Operations & Revenue Teams",
              "Wellness & Spa Directors",
              "Brand & Experience Leaders",
            ].map((role, i) => (
              <div key={i} className="col-md-3">
                <div className="p-4 bg-white rounded-4 h-100">
                  <h6 className="fw-bold">{role}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-padding">
        <div className="container text-center">
          <h3>Turn Wellness Into a Strategic Advantage</h3>
          <p className="fs-5 mt-3">
            See how AI-driven wellness intelligence can increase revenue,
            improve guest satisfaction, and reduce risk.
          </p>
          <a href="/contact" className="btn btn-primary mt-4">
            Schedule a Hotel AI Demo
          </a>
        </div>
      </section>
    </Layout>
  );
}
