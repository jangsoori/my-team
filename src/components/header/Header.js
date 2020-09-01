import React from "react";
import "../../utils/utilityClasses.scss";
import "./Header.scss";
import Logo from "./Logo";
import NavMobile from "./NavMobile";
import NavDesktop from "./NavDesktop";
import LogoBig from "./LogoBig";
import useWindowSize from "../../hooks/useWindowSize";

export default function Header() {
  //Get window size
  const size = useWindowSize();
  return (
    <header
      className={`header grid bg-main ${
        size.width > 600 ? "header-desktop" : ""
      }`}
    >
      {size.width > 1281 ? <LogoBig /> : <Logo />}

      {/* Detect screen size, if wider than 600px, render desktop navbar  */}
      {size.width > 600 ? <NavDesktop /> : <NavMobile />}
    </header>
  );
}
