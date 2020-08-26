import React from "react";
import "./Home.scss";
import "../../../utils/typography.scss";
export default function Home() {
  return (
    <section className="content home">
      <h2 className="content-heading heading-mobile">
        Find the best <span className="text-empaphise">talent</span>
      </h2>
      <p className="content-text body-text-secondary">
        Finding the right people and building high performing teams can be hard.
        Most companies aren’t tapping into the abundance of global talent. We’re
        about to change that.
      </p>
    </section>
  );
}
