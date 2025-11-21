"use client";

export default function HowItWork2() {
	return (
		<>
			<section className="howitwork-2 section-padding position-relative fix">
				<div className="container position-relative z-1">
					<div className="text-center mb-8">
						<h3 className="my-3 fw-black">How We Build Your Wellness Program</h3>
					</div>
				</div>
				<div className="container"> 
					<div className="row position-relative justify-content-center">
						<div className="col-lg-4 text-center px-md-10">
							<div className="card-service-4 text-center mt-2">
								{/* <div className="bg-white icon-flip position-relative icon-shape icon-xxl rounded-3">
									<div className="icon">
										<img src="/assets/imgs/icons/consult.svg" alt="Consultation" width={80} height={80} />
									</div>
								</div> */}
								<h5 className="my-3">1. Strategic Needs Assessment</h5>
								<p className="mb-6">We evaluate your environment, audience (guests, employees, students, patients), schedule, and wellness objectives to determine the right delivery model.</p>
							</div>
						</div>
						<div className="col-lg-4 text-center px-md-10">
							<div className="card-service-4 text-center mt-2">
								{/* <div className="bg-white icon-flip position-relative icon-shape icon-xxl rounded-3">
									<div className="icon">
										<img src="/assets/imgs/icons/plan.svg" alt="Tailored Program Design" width={80} height={80} />
									</div>
								</div> */}
								<h5 className="my-3">2. Tailored Program Design</h5>
								<p className="mb-6">We design your program around your operational rhythm—weekly subscriptions, seasonal activations, retreats, hybrid delivery, or event-based rollouts.</p>
							</div>
						</div>
						<div className="col-lg-4 text-center px-md-10">
							<div className="card-service-4 text-center mt-2">
								{/* <div className="bg-white icon-flip position-relative icon-shape icon-xxl rounded-3">
									<div className="icon">
										<img src="/assets/imgs/icons/execute.svg" alt="Delivery & Ongoing Partnership" width={80} height={80} />
									</div>
								</div> */}
								<h5 className="my-3">3. Delivery & Ongoing Partnership</h5>
								<p className="mb-6">Our certified instructors handle on-site or virtual facilitation. We manage scheduling, logistics, feedback, and continuous optimization so your initiative scales with clarity and measurable impact.</p>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
