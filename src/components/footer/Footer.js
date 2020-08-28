import React from "react";
import Logo from "./FooterLogo";
import { NavLink } from "react-router-dom";

import { Facebook, Pinterest, Twitter } from "./FooterSocials";
import "./Footer.scss";
export default function Footer() {
  return (
    <footer className="footer grid">
      <Logo />
      <div className="footer-nav grid">
        <NavLink className="footer-nav-link body-text-secondary" to="/">
          home
        </NavLink>
        <NavLink className="footer-nav-link body-text-secondary" to="/about">
          about
        </NavLink>
      </div>
      <p className="footer-address body-text-secondary">
        987 Hillcrest Lane <br /> Irvine, CA <br /> California 92714 <br /> Call
        Us : 949-833-7432
      </p>
      <ul className="footer-socials grid">
        <li className="footer-socials-item">
          <Facebook />
        </li>
        <li className="footer-socials-item">
          <Pinterest />
        </li>
        <li className="footer-socials-item">
          <Twitter />
        </li>
      </ul>
      <p className="footer-copy body-text-secondary">
        Copyright 2020. All Rights Reserved
      </p>
    </footer>
  );
}
