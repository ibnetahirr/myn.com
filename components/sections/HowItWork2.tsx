
import Link from "next/link"

export default function HowItWork2() {
	return (
		<>
			<section className="howitwork-2 section-padding position-relative fix">
				<div className="container position-relative z-1">
					<div className="text-center mb-8">
						<h3 className="ds-5 my-3 fw-black">How It Works</h3>
						<p className="fs-5 mb-0">Get yoga when you want, where you want.</p>
					</div>
				</div>
				<div className="container"> 
					<div className="row position-relative justify-content-center">
						<div className="col-lg-4 text-center px-md-10">
							<div className="card-service-4 text-center mt-2">
								<div className="bg-white icon-flip position-relative icon-shape icon-xxl rounded-3">
									<div className="icon">
										<img src="/assets/imgs/icons/consult.svg" alt="Consultation" width={80} height={80} />
									</div>
								</div>
								<h5 className="my-3">Consultation</h5>
								<p className="mb-6">We assess your needs and space to design the perfect program.</p>
							</div>
						</div>
						<div className="col-lg-4 text-center px-md-10">
							<div className="card-service-4 text-center mt-2">
								<div className="bg-white icon-flip position-relative icon-shape icon-xxl rounded-3">
									<div className="icon">
										<img src="/assets/imgs/icons/plan.svg" alt="Customized Plan" width={80} height={80} />
									</div>
								</div>
								<h5 className="my-3">Customized Plan</h5>
								<p className="mb-6">Choose from flexible session formats, including monthly programs, on-demand events, or luxury wellness retreats.</p>
							</div>
						</div>
						<div className="col-lg-4 text-center px-md-10">
							<div className="card-service-4 text-center mt-2">
								<div className="bg-white icon-flip position-relative icon-shape icon-xxl rounded-3">
									<div className="icon">
										<img src="/assets/imgs/icons/execute.svg" alt="Execution & Support" width={80} height={80} />
									</div>
								</div>
								<h5 className="my-3">Execution & Support</h5>
								<p className="mb-6">We handle session delivery, feedback, and ongoing program enhancement.</p>
							</div>
						</div>
					</div>
					<div className="navigation-arrow-1 d-none d-lg-block position-absolute top-50">
						<img src="/assets/imgs/howitwork-2/arrow-1.png" alt="next" />
					</div>
					<div className="navigation-arrow-2 d-none d-lg-block position-absolute">
						<img src="/assets/imgs/howitwork-2/arrow-2.png" alt="next" />
					</div>
				</div>
			</section>

		</>
	)
}
