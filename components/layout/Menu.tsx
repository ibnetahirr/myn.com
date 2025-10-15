import Link from "next/link";

export default function Menu() {
  return (
    <>
      <div className="d-none d-lg-flex">
        <ul className="navbar-nav mx-auto gap-4 align-items-lg-center">
          <li className="nav-item ">
            <Link
              className="nav-link fw-bold d-flex align-items-center"
              href="page-about"
            >
              About
            </Link>
          </li>

          {/* Solutions Dropdown */}
          <li className="nav-item dropdown position-relative">
            <Link
              className="nav-link fw-bold d-flex align-items-center"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Solutions
            </Link>
            <div className="dropdown-menu position-absolute start-0 mt-2">
              <ul className="list-unstyled m-0">
                <li>
                  <Link
                    className="dropdown-item position-relative z-1"
                    href="page-hotel-resort"
                  >
                    Hotel & Resort Wellness
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item position-relative z-1"
                    href="page-Work-Place"
                  >
                    Workplace Yoga
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item position-relative z-1"
                    href="page-health"
                  >
                    Healthcare
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item position-relative z-1"
                    href="/page-kids-program"
                  >
                    Kid's Program
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          {/* For therapists Dropdown */}
          <li className="nav-item dropdown position-relative">
            <Link
              className="nav-link fw-bold d-flex align-items-center"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              For Therapists
            </Link>
            <div className="dropdown-menu position-absolute start-0 mt-2">
              <ul className="list-unstyled m-0">
                <li>
                  <Link
                    className="dropdown-item position-relative z-1"
                    href="page-join-instructor"
                  >
                    Join as an Instructor
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item position-relative z-1"
                    href="page-Find-Yoga-Therapist"
                  >
                    Find a Yoga Therapist
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li className="nav-item ">
            <Link
              className="nav-link fw-bold d-flex align-items-center"
              href="yoga-ai"
            >
              Yoga AI
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link fw-bold d-flex align-items-center"
              href="/page-contact-1"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
