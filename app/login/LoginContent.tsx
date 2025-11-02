"use client";
import Link from "next/link";
export default function PageLogin() {
  return (
    <>
      <section className="position-relative border-bottom">
        <div className="container">
          <div className="row pt-7 pb-120">
            <div className="col-lg-5 ms-auto ps-lg-10 text-center">
              {/* Heading */}
              <h3 className="fw-bold">Welcome back!</h3>
              <p className="text-500">
                Create your free account today and start exploring our platform.
              </p>

              {/* Social Sign Up Buttons */}
              <Link
                href="#"
                className="btn rounded-3 bg-white border w-100 mb-3 d-flex align-items-center justify-content-center"
              >
                <img src="/assets/imgs/other/icon-gg.svg" alt="Google" />
                <span className="fs-7 text-900 fw-bold ms-2">
                  Sign up with Google
                </span>
              </Link>
              <Link
                href="#"
                className="btn rounded-3 bg-white border w-100 mb-3 d-flex align-items-center justify-content-center"
              >
                <img src="/assets/imgs/other/icon-apid.svg" alt="Apple" />
                <span className="fs-7 text-900 fw-bold ms-2">
                  Sign up with Apple
                </span>
              </Link>
              <Link
                href="#"
                className="btn rounded-3 bg-white border w-100 mb-3 d-flex align-items-center justify-content-center"
              >
                <img src="/assets/imgs/other/icon-twt.svg" alt="Twitter" />
                <span className="fs-7 text-900 fw-bold ms-2">
                  Sign up with Twitter
                </span>
              </Link>

              {/* Divider */}
              <div className="border-top mt-3 mb-2 position-relative">
                <p className="text-500 position-absolute top-50 start-50 translate-middle bg-white px-2">
                  or sign up with email
                </p>
              </div>

              {/* Username Input */}
              <div className="col text-start">
                <label htmlFor="name" className="form-label mt-2 text-900">
                  Username *
                </label>
                <div className="input-group d-flex align-items-center">
                  <div className="icon-input border border-end-0 rounded-3 rounded-end-0 ps-3">
                    {/* User Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 11.25C13.8 11.25 15.25 9.8 15.25 8C15.25 6.2 13.8 4.75 12 4.75C10.2 4.75 8.75 6.2 8.75 8C8.75 9.8 10.2 11.25 12 11.25Z"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.8 19.25H17.2C18.3 19.25 19.2 18.3 18.6 17.25C17.8 15.8 16.1 14 12 14C7.9 14 6.1 15.8 5.4 17.25C4.8 18.3 5.7 19.25 6.8 19.25Z"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    className="form-control ms-0 border rounded-3 rounded-start-0 border-start-0"
                    name="name"
                    placeholder="Enter your username"
                    id="name"
                    aria-label="username"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="col text-start">
                <label htmlFor="password" className="form-label mt-2 text-900">
                  Password *
                </label>
                <div className="input-group d-flex align-items-center">
                  <div className="icon-input border border-end-0 rounded-3 rounded-end-0 ps-3">
                    {/* Lock Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M4.75 5.75C4.75 5.2 5.2 4.75 5.75 4.75H9.25C9.8 4.75 10.25 5.2 10.25 5.75V9.25C10.25 9.8 9.8 10.25 9.25 10.25H5.75C5.2 10.25 4.75 9.8 4.75 9.25V5.75Z"
                        stroke="#111827"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M13.75 5.75C13.75 5.2 14.2 4.75 14.75 4.75H18.25C18.8 4.75 19.25 5.2 19.25 5.75V9.25C19.25 9.8 18.8 10.25 18.25 10.25H14.75C14.2 10.25 13.75 9.8 13.75 9.25V5.75Z"
                        stroke="black"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M4.75 14.75C4.75 14.2 5.2 13.75 5.75 13.75H9.25C9.8 13.75 10.25 14.2 10.25 14.75V18.25C10.25 18.8 9.8 19.25 9.25 19.25H5.75C5.2 19.25 4.75 18.8 4.75 18.25V14.75Z"
                        stroke="black"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M13.75 14.75C13.75 14.2 14.2 13.75 14.75 13.75H18.25C18.8 13.75 19.25 14.2 19.25 14.75V18.25C19.25 18.8 18.8 19.25 18.25 19.25H14.75C14.2 19.25 13.75 18.8 13.75 18.25V14.75Z"
                        stroke="black"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                  <input
                    type="password"
                    className="form-control ms-0 border rounded-3 rounded-start-0 border-start-0"
                    name="password"
                    placeholder="At least 8 characters"
                    id="password"
                    aria-label="password"
                  />
                </div>
              </div>

              {/* Remember + Forgot */}
              <div className="col-12 mt-2 d-flex justify-content-between">
                <div className="form-check text-start">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label
                    className="form-check-label text-500 fs-7"
                    htmlFor="gridCheck"
                  >
                    Remember me
                  </label>
                </div>
                <Link href="#" className="text-500 fs-7">
                  Forgot password?
                </Link>
              </div>

              {/* Submit Button */}
              <div className="col-12 mt-5">
                <button type="submit" className="btn btn-primary w-100">
                  Create new account
                  <svg
                    className="ms-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={24}
                    viewBox="0 0 25 24"
                    fill="none"
                  >
                    <path
                      d="M21.6 12.25H1V11.75H21.6L22.8 12L17.9 6.1L18.3 5.7L24 12L18.3 18.3L17.9 17.9L22.8 12.25H21.6Z"
                      stroke="white"
                    />
                  </svg>
                </button>
              </div>

              {/* Login Link */}
              <p className="text-500 fs-7 mt-5">
                Already have an account?{" "}
                <Link
                  href="#"
                  className="text-900 text-decoration-underline fs-7"
                >
                  Login here
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Side Image & Testimonials */}
        <div className="position-lg-absolute start-0 bottom-0 top-0">
          <img
            className="h-80 w-80 object-fit-cover"
            src="/assets/imgs/other/img-8.png"
            alt="illustration"
          />
          <div className="position-absolute bottom-0 end-0 m-8 backdrop-filter rounded-4 px-7 py-4 text-center z-1">
            <p className="pt-2 text-white fs-5">
              Loved by over 4k <br /> happy clients
            </p>
            <div className="d-flex align-items-center justify-content-center py-4">
              <img src="/assets/imgs/features-3/avatar-1.png" alt="client 1" />
              <img
                className="avt-hero z-1"
                src="/assets/imgs/features-3/avatar-2.png"
                alt="client 2"
              />
              <img
                className="avt-hero z-0"
                src="/assets/imgs/features-3/avatar-3.png"
                alt="client 3"
              />
            </div>
            <div className="d-flex align-items-center justify-content-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  width={26}
                  height={26}
                  viewBox="0 0 26 26"
                  fill="none"
                >
                  <path
                    d="M10.9 5.3C11.4 3.6 13.8 3.6 14.3 5.3L15 7.5C15.3 8.2 16 8.7 16.7 8.7H19c1.8 0 2.5 2.2 1.1 3.2L18.2 13.3C17.6 13.8 17.3 14.6 17.6 15.3L18.3 17.5C18.8 19.2 16.9 20.6 15.5 19.5L13.7 18.2C13 17.7 12.2 17.7 11.5 18.2L9.7 19.5C8.3 20.6 6.4 19.2 6.9 17.5L7.6 15.3C7.9 14.6 7.6 13.8 7 13.3L5.1 12C3.7 10.9 4.4 8.7 6.2 8.7H8.5C9.2 8.7 9.9 8.2 10.2 7.5L10.9 5.3Z"
                    fill="#64E1B0"
                  />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 pe-6">
              <div className="bg-success rounded-circle d-inline-flex icon-sm icon-shape p-4">
                <h5 className="m-0 text-white">1</h5>
              </div>
              <h6 className="mt-3">Register</h6>
              <p className="text-500">
                Create your account in minutes using your name, email, and a
                secure password, or sign up instantly with your social media
                account. Your details are always protected with
                industry-standard security.
              </p>
            </div>

            <div className="col-lg-3 col-md-6 pe-6">
              <div className="bg-primary rounded-circle d-inline-flex icon-sm icon-shape p-4">
                <h5 className="m-0 text-white">2</h5>
              </div>
              <h6 className="mt-3">Activate</h6>
              <p className="text-500">
                Verify your email by entering the code sent to your inbox. This
                quick step secures your account and unlocks access to your
                personalized yoga programs.
              </p>
            </div>

            <div className="col-lg-3 col-md-6 pe-6">
              <div className="bg-warning rounded-circle d-inline-flex icon-sm icon-shape p-4">
                <h5 className="m-0 text-white">3</h5>
              </div>
              <h6 className="mt-3">Connect Your Network</h6>
              <p className="text-500">
                Set up your personal or corporate wellness profile and start
                connecting with like-minded members. No credit card is required
                to join and explore.
              </p>
            </div>

            <div className="col-lg-3 col-md-6 pe-6">
              <div className="bg-info rounded-circle d-inline-flex icon-sm icon-shape p-4">
                <h5 className="m-0 text-white">4</h5>
              </div>
              <h6 className="mt-3">Begin Your Journey</h6>
              <p className="text-500">
                Access live and on-demand yoga sessions, track your progress,
                and enjoy a transformative wellness journey designed to help you
                achieve balance and growth.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
