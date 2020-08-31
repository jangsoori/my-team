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
        <li className="desktop-menu-item body-text-primary">
          <NavLink to="/contact">contact us</NavLink>
        </li>
      </ul>
    </nav>
  );
}
