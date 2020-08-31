import React from "react";
import "./Header.scss";
import Logo from "./Logo";
import "../../utils/utilityClasses.scss";
import Navbar from "./Navbar";
import useWindowSize from "../../hooks/useWindowSize";
import NavDesktop from "./NavDesktop";
import Logo_big from "./Logo_big";
export default function Header() {
  const size = useWindowSize();
  console.log(size.width);
  return (
    <header
      className={`header grid bg-main ${
        size.width > 600 ? "header-desktop" : ""
      }`}
    >
      {size.width > 1281 ? <Logo_big /> : <Logo />}

      {/* Detect screen size, if wider than 600px, render desktop navbar  */}
      {size.width > 600 ? <NavDesktop /> : <Navbar />}
    </header>
  );
}
