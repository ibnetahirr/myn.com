"use client";

export default function Features3() {
  return (
    <>
      {/* Why MYN */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center">
            <h3 className="my-3 fw-black">What Sets Us Apart</h3>
          </div>
          <div className="row mt-6 position-relative">
            <div className="col-lg-4">
              <div className="p-2 mt-lg-8 rounded-4 shadow-1 bg-white position-relative z-1 hover-up">
                <div className="card-service bg-white p-6 border rounded-4 text-center">
                  <img
                    src="/assets/imgs/why/1.png"
                    alt="Industry-Specific Programs"
                    height={70}
                  />
                  <h6 className="my-3">Industry-Specific Programming</h6>
                  <p className="mb-4">
                    Designed for hotels, corporates, schools, and healthcare
                    providers, each program built for your environment.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="p-2 mt-5 rounded-4 shadow-1 bg-white position-relative z-1 hover-up">
                <div className="card-service bg-white p-6 border rounded-3 text-center">
                  <img
                    src="/assets/imgs/why/2.png"
                    alt="Certified & Vetted Yoga Instructors"
                    height={70}
                  />
                  <h6 className="my-3">Certified & Vetted Yoga Instructors</h6>
                  <p className="mb-4">
                    All instructors are professional, insured, and trained in
                    trauma-informed, inclusive, and adaptive yoga.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="p-2 mt-lg-8 mt-5 rounded-4 shadow-1 bg-white position-relative z-1 hover-up hover-up">
                <div className="card-service bg-white p-6 border rounded-3 text-center">
                  <img
                    src="/assets/imgs/why/3.png"
                    alt="Flexible Offerings"
                    height={70}
                  />
                  <h6 className="my-3">Flexible Offerings</h6>
                  <p className="mb-4">
                    Weekly sessions, on-demand events, luxury wellness options,
                    kids programs, and yoga therapy, all tailored to your
                    schedule.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
