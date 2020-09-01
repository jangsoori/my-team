import React from "react";
import "./Home.scss";

import HomeSectionOne from "./home_sections/HomeSectionOne";
import HomeSectionTwo from "./home_sections/HomeSectionTwo";
import HomeSectionThree from "./home_sections/HomeSectionThree";
export default function Home() {
  return (
    <React.Fragment>
      <HomeSectionOne />
      <HomeSectionTwo />
      <HomeSectionThree />
    </React.Fragment>
  );
}
