import React from "react";
import { NavLink } from "react-router-dom";
import "./NavDesktop.scss";
export default function NavDesktop() {
  return (
    <nav className="desktop-menu">
      <ul className="desktop-menu-items grid">
        <li className="desktop-menu-item body-text-primary">
          <NavLink to="/">home</NavLink>
        </li>
        <li className="desktop-menu-item body-text-primary">
          <NavLink to="/about">about</NavLink>
        </li>
        <NavLink
          className="desktop-menu-item body-text-primary btn btn-primary-light"
          to="/contact"
        >
          contact us
        </NavLink>
      </ul>
    </nav>
  );
}
