import React from "react";
import "./Header.scss";
import Logo from "./Logo";
import "../../utils/utilityClasses.scss";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="header grid">
      <Logo />
      <Navbar />
    </header>
  );
}
