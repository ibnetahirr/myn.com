"use client";
import Link from "next/link";
import { useState } from "react";

export default function MobileMenu({
  isMobileMenu,
  handleMobileMenu,
}: {
  isMobileMenu: boolean;
  handleMobileMenu: () => void;
}) {
  const [isAccordion, setIsAccordion] = useState<number | null>(null);

  const handleAccordion = (key: number) => {
    setIsAccordion((prevState) => (prevState === key ? null : key));
  };

  return (
    <>
      <div
        className={`mobile-header-active mobile-header-wrapper-style button-bg-2 ${
          isMobileMenu ? "sidebar-visible" : ""
        }`}
      >
        <div className="mobile-header-wrapper-inner">
          {/* Logo + Close button */}
          <div className="mobile-header-logo d-flex justify-between align-items-center">
            <Link
              className="navbar-brand d-flex main-logo align-items-center"
              href="/"
            >
              <img src="/assets/imgs/template/favicon.svg" alt="infinia" />
              <span>
                My Yoga <br />
                Network
              </span>
            </Link>

            <div
              className={`burger-icon burger-icon-white border rounded-3 ${
                isMobileMenu ? "burger-close" : ""
              }`}
              onClick={handleMobileMenu}
            >
              <span className="burger-icon-top" />
              <span className="burger-icon-mid" />
              <span className="burger-icon-bottom" />
            </div>
          </div>

          {/* Mobile menu items */}
          <div className="mobile-header-content-area">
            <div className="mobile-menu-wrap mobile-header-border">
              <nav>
                <ul className="mobile-menu font-heading ps-0">
                  {/* About */}
                  <li>
                    <Link href="/">Home</Link>
                  </li>

                  {/* Solutions Dropdown */}
                  <li
                    className={`has-children ${
                      isAccordion === 1 ? "active" : ""
                    }`}
                  >
                    <span
                      className="menu-expand"
                      onClick={() => handleAccordion(1)}
                    >
                      <i className="arrow-small-down"></i>
                    </span>
                    <Link href="#">Services</Link>
                    <ul
                      className="sub-menu"
                      style={{
                        display: `${isAccordion === 1 ? "block" : "none"}`,
                      }}
                    >
                      <li>
                        <Link href="/yoga-for-hotels-and-resorts">Hotel & Resort Wellness</Link>
                      </li>
                      <li>
                        <Link href="/corporate-wellness-programs">Workplace Yoga</Link>
                      </li>
                      <li>
                        <Link href="/yoga-for-healthcare-providers">Healthcare</Link>
                      </li>
                      <li>
                        <Link href="/after-school-program">Schools/Kids Yoga</Link>
                      </li>
                    </ul>
                  </li>

                  {/* Yoga AI */}
                  <li>
                    <Link href="/ai">AI</Link>
                  </li>

                  {/* For Therapists Dropdown */}
                  <li
                    className={`has-children ${
                      isAccordion === 2 ? "active" : ""
                    }`}
                  >
                    <span
                      className="menu-expand"
                      onClick={() => handleAccordion(2)}
                    >
                      <i className="arrow-small-down"></i>
                    </span>
                    <Link href="#">Company</Link>
                    <ul
                      className="sub-menu"
                      style={{
                        display: `${isAccordion === 2 ? "block" : "none"}`,
                      }}
                    >
                      <li>
                        <Link href="/about-our-team-and-vision">
                          About
                        </Link>
                      </li>
                      <li>
                        <Link href="/blogs">
                          Blog
                        </Link>
                      </li>
                       <li>
                        <Link href="https://community.myyoganetwork.org/" target="_blank">
                          Community
                        </Link>
                      </li>
                    </ul>
                  </li>

                  {/* Yoga AI */}
                  {/* <li>
                    <Link href="/ai">AI</Link>
                  </li> */}

                  {/* Contact */}
                  <li>
                    <Link href="contact-us">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}