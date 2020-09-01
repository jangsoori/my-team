import React from "react";
import "./About.scss";
import Team from "./Team";
import Clients from "./Clients";
export default function About() {
  return (
    <React.Fragment>
      <section className="content about-main bg-main">
        <h2 className="content-heading heading-main">About</h2>
        <p className="content-text body-text-secondary">
          We help companies build dynamic teams made up of top global talent.
          Using our network of passionate professionals we drive innovation and
          deliver incredible outcomes. Talented, diverse teams shape the best
          products and experiences. We’ll bring those teams to you.
        </p>
        <svg
          className="about-svg-1"
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="100"
            y="100"
            width="100"
            height="100"
            transform="rotate(-180 100 100)"
            fill="#2C6269"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M100 200C155.228 200 200 155.228 200 100C200 44.7715 155.228 0 100 0C44.7715 0 0 44.7715 0 100C0 155.228 44.7715 200 100 200ZM100 133C118.225 133 133 118.225 133 100C133 81.7746 118.225 67 100 67C81.7746 67 67 81.7746 67 100C67 118.225 81.7746 133 100 133Z"
            fill="#F67E7E"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M100 0H0V4H100V0ZM100 8H0V12H100V8ZM0 16H100V20H0V16ZM100 24H0V28H100V24ZM0 32H100V36H0V32ZM100 40H0V44H100V40Z"
            fill="#79C8C7"
          />
        </svg>
      </section>
      <section className="about-section-2">
        <Team />
      </section>
      <section className="about-section-3">
        <Clients />
      </section>
    </React.Fragment>
  );
}
