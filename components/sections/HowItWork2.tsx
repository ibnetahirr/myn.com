
import Link from "next/link"

export default function HowItWork2() {
	return (
		<>
			<section className="howitwork-2 section-padding position-relative fix">
				<div className="container position-relative z-1">
					<div className="text-center mb-8">
						<div className="d-flex align-items-center position-relative z-2 justify-content-center bg-primary-soft d-inline-flex rounded-pill border border-2 border-white px-3 py-1">
							<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
							<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">working process</span>
						</div>
						<h3 className="ds-3 my-3 fw-black">How It Works</h3>
						<p className="fs-5 mb-0">Get yoga when you want, where you want.</p>
					</div>
				</div>
				{/* <div className="position-absolute top-0 start-50 translate-middle-x z-0">
					<img src="/assets/imgs/howitwork-2/img-bg-line.png" alt="infinia" />
				</div> */}
				<div className="container">
					<div className="row position-relative justify-content-center">
						<div className="col-lg-4 text-center px-md-10">
							<div className="card-service-4 text-center mt-2">
								<div className="bg-white icon-flip position-relative icon-shape icon-xxl rounded-3">
									<div className="icon">
										<img src="/assets/imgs/howitwork-2/icon-1.svg" alt="infinia" />
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
										<img src="/assets/imgs/howitwork-2/icon-2.svg" alt="infinia" />
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
										<img src="/assets/imgs/howitwork-2/icon-3.svg" alt="infinia" />
									</div>
								</div>
								<h5 className="my-3">Execution & Support</h5>
								<p className="mb-6">We handle session delivery, feedback, and ongoing program enhancement.</p>
							</div>
						</div>
					</div>
					<div className="navigation-arrow-1 d-none d-lg-block position-absolute top-50">
						<img src="/assets/imgs/howitwork-2/arrow-1.png" alt="infinia" />
					</div>
					<div className="navigation-arrow-2 d-none d-lg-block position-absolute">
						<img src="/assets/imgs/howitwork-2/arrow-2.png" alt="infinia" />
					</div>
					{/* <div className="bouncing-blobs-container">
						<div className="bouncing-blobs-glass" />
						<div className="bouncing-blobs">
							<div className="bouncing-blob bouncing-blob--green" />
							<div className="bouncing-blob bouncing-blob--primary" />
						</div>
					</div> */}
				</div>
			</section>

		</>
	)
}
