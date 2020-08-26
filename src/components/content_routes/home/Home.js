import React from "react";
import "./Home.scss";
import "../../../utils/typography.scss";
export default function Home() {
  return (
    <React.Fragment>
      <section className="content home-main bg-main">
        <h2 className="content-heading heading-mobile">
          Find the best <span className="text-empaphise">talent</span>
        </h2>
        <p className="content-text body-text-secondary">
          Finding the right people and building high performing teams can be
          hard. Most companies aren’t tapping into the abundance of global
          talent. We’re about to change that.
        </p>
        <svg
          className="home-svg-main"
          width="358"
          height="100"
          viewBox="0 0 358 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="100" cy="100" r="100" fill="#2C6269" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M258 200C313.228 200 358 155.228 358 100C358 44.7715 313.228 0 258 0C202.772 0 158 44.7715 158 100C158 155.228 202.772 200 258 200ZM258 133C276.225 133 291 118.225 291 100C291 81.7746 276.225 67 258 67C239.775 67 225 81.7746 225 100C225 118.225 239.775 133 258 133Z"
            fill="#012F34"
          />
          <rect
            x="358"
            y="43"
            width="43"
            height="43"
            transform="rotate(-180 358 43)"
            fill="#79C8C7"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M233.514 200C288.742 200 333.514 155.228 333.514 100C333.514 44.7715 288.742 0 233.514 0C178.285 0 133.514 44.7715 133.514 100C133.514 155.228 178.285 200 233.514 200ZM233.514 133C251.739 133 266.514 118.225 266.514 100C266.514 81.7746 251.739 67 233.514 67C215.288 67 200.514 81.7746 200.514 100C200.514 118.225 215.288 133 233.514 133Z"
            fill="#F67E7E"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M100 0H0V4H100V0ZM100 8H0V12H100V8ZM0 16H100V20H0V16ZM100 24H0V28H100V24ZM0 32H100V36H0V32ZM100 40H0V44H100V40Z"
            fill="#79C8C7"
          />
        </svg>
      </section>
      <section className="home-section-2">
        <h2 className="content-heading heading-mobile-secondary">
          Build & manage distributed teams like no one else.
        </h2>
      </section>
    </React.Fragment>
  );
}
