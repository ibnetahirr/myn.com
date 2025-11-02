import Link from "next/link";

export default function Menu() {
 const scrollToSolutions = () => {
    const section = document.getElementById("solutions");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <>
      <div className="d-none d-lg-flex">
        <ul className="navbar-nav mx-auto gap-4 align-items-lg-center">
          <li className="nav-item ">
            <Link
              className="nav-link fw-bold d-flex align-items-center"
              href="/">
              Home
            </Link>
          </li>

          {/* Solutions Dropdown */}
          <li className="nav-item dropdown menu-item-has-children">
            <Link
              className="nav-link fw-bold d-flex align-items-center"
              href="#"
              role="button"
              onClick={scrollToSolutions}
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Our Expertise
            </Link>
            <div className="dropdown-menu position-absolute start-0 mt-2">
              <ul className="list-unstyled m-0">
                <li>
                  <Link
                    className="dropdown-item position-relative z-1"
                    href="/yoga-for-hotels-and-resorts"
                  >
                    Hotel & Resort Wellness
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item position-relative z-1"
                    href="/corporate-wellness-programs"
                  >
                    Workplace Yoga
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item position-relative z-1"
                    href="/yoga-for-healthcare-providers"
                  >
                    Healthcare
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item position-relative z-1"
                    href="/kids-programs"
                  >
                    Kid's Programs
                  </Link>
                </li>
              </ul>
            </div>
          </li>
       
          <li className="nav-item ">
            <Link
              className="nav-link fw-bold d-flex align-items-center"
              href="/ai"
            >
              AI
            </Link>
          </li>

             <li className="nav-item dropdown menu-item-has-children">
            <Link
              className="nav-link fw-bold d-flex align-items-center"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Company
            </Link>
            <div className="dropdown-menu position-absolute start-0 mt-2">
              <ul className="list-unstyled m-0">
                <li>
                  <Link
                    className="dropdown-item position-relative z-1"
                    href="/about-our-team-and-vision"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item position-relative z-1"
                    href="/blog"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item position-relative z-1"
                    href="https://community.myyoganetwork.org/" target="_blank"
                  >
                    Discourse
                  </Link>
                </li>
              </ul>
            </div>
          </li>
       
          <li className="nav-item">
            <Link
              className="nav-link fw-bold d-flex align-items-center"
              href="/contact-us"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
