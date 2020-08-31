import React, { useState } from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  console.log(mobileMenuActive);
  return (
    <React.Fragment>
      <i
        class="fas fa-bars navbar-icon"
        onClick={() => setMobileMenuActive(!mobileMenuActive)}
      ></i>
      <section
        className={`mobile-menu-wrapper ${
          mobileMenuActive ? "mobile-menu-active" : ""
        }`}
        onClick={() => setMobileMenuActive(!mobileMenuActive)}
      >
        <nav className={`mobile-menu`} onClick={(e) => e.stopPropagation()}>
          <svg
            class="navbar-close"
            onClick={() => setMobileMenuActive(!mobileMenuActive)}
            width="18"
            height="17"
            viewBox="0 0 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.99989 6.37869L2.98948 0.368286L0.868164 2.48961L6.87857 8.50001L0.868164 14.5104L2.98948 16.6317L8.99989 10.6213L15.0103 16.6317L17.1316 14.5104L11.1212 8.50001L17.1316 2.48961L15.0103 0.368286L8.99989 6.37869Z"
              fill="white"
            />
          </svg>

          <ul className="mobile-menu-items grid">
            <li className="mobile-menu-item body-text-primary">
              <NavLink to="/">home</NavLink>
            </li>
            <li className="mobile-menu-item body-text-primary">
              <NavLink to="/about">about</NavLink>
            </li>
            <NavLink
              className="mobile-menu-item body-text-primary btn btn-primary-light"
              to="/contact"
            >
              contact us
            </NavLink>
          </ul>
        </nav>
      </section>
    </React.Fragment>
  );
}
