import Link from "next/link";
import MobileMenu from "../MobileMenu";
import Search from "../Search";
import OffCanvas from "../OffCanvas";
import ThemeSwitch from "@/components/elements/ThemeSwitch";
import Menu from "../Menu";

interface HeaderProps {
  scroll: boolean;
  isMobileMenu: boolean;
  handleMobileMenu: () => void;
  isSearch: boolean;
  handleSearch: () => void;
  isOffCanvas: boolean;
  handleOffCanvas: () => void;
}

export default function Header1({
  scroll,
  isMobileMenu,
  handleMobileMenu,
  isSearch,
  handleSearch,
  isOffCanvas,
  handleOffCanvas,
}: HeaderProps) {
  return (
    <header>
      <nav
        className={`navbar navbar-expand-lg navbar-light w-100 z-999 ${
          scroll ? "navbar-stick" : ""
        }`}
        style={{
          position: scroll ? "fixed" : "relative",
          top: scroll ? "0" : "auto",
        }}
        role="navigation"
        aria-label="Main Navigation"
      >
        <div className="container">
          {/* Logo + Name */}
          <Link
            className="navbar-brand d-flex main-logo align-items-center"
            href="/"
            aria-label="My Yoga Network Homepage"
          >
            <img
              src="/assets/imgs/template/favicon.svg"
              alt="My Yoga Network Logo"
              width={50}
              height={50}
            />
            <span className="ms-2">
              <strong>My Yoga</strong>
              <br />
              <strong>Network</strong>
            </span>
          </Link>

          {/* Main Menu */}
          <Menu />

          {/* Right Controls */}
          <div className="d-flex align-items-center pe-5 pe-lg-0 me-5 me-lg-0">
            {/* Search Button */}
            <button
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target=".offcanvasTop"
              onClick={handleSearch}
              className="cursor-pointer btn btn-link p-0"
              aria-label="Open search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  className="stroke-dark"
                  d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Theme Switch */}
            <ThemeSwitch />

            {/* Login */}
            <Link
              href="/page-login"
              className="btn btn-gradient d-none d-md-block"
            >
              Login
            </Link>

            {/* Mobile Menu Burger */}
            <button
              type="button"
              className="burger-icon burger-icon-white border rounded-3"
              onClick={handleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <span className="burger-icon-top" />
              <span className="burger-icon-mid" />
              <span className="burger-icon-bottom" />
            </button>
          </div>
        </div>
      </nav>

      {/* OffCanvas Panel */}
      <OffCanvas handleOffCanvas={handleOffCanvas} isOffCanvas={isOffCanvas} />

      {/* Search Panel */}
      <Search isSearch={isSearch} handleSearch={handleSearch} />

      {/* Mobile Menu */}
      <MobileMenu
        handleMobileMenu={handleMobileMenu}
        isMobileMenu={isMobileMenu}
      />
    </header>
  );
}
