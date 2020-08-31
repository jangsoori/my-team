import React from "react";
import "./Home.scss";
import Features from "./Features";
import Testimonials from "./Testimonials";
export default function Home() {
  return (
    <React.Fragment>
      <section className="content home-main bg-main">
        <h2 className="content-heading heading-main">
          Find the best <span className="text-emphasize">talent</span>
        </h2>
        <p className="content-text body-text-secondary">
          Finding the right people and building high performing teams can be
          hard. Most companies aren’t tapping into the abundance of global
          talent. We’re about to change that.
        </p>
        <svg
          className="home-svg-1"
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
        <svg
          className="home-svg-2"
          width="100"
          height="244"
          viewBox="0 0 100 244"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="100"
            y="144"
            width="100"
            height="100"
            transform="rotate(-180 100 144)"
            fill="#2C6269"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M100 244C155.228 244 200 199.228 200 144C200 88.7715 155.228 44 100 44C44.7715 44 0 88.7715 0 144C0 199.228 44.7715 244 100 244ZM100 177C118.225 177 133 162.225 133 144C133 125.775 118.225 111 100 111C81.7746 111 67 125.775 67 144C67 162.225 81.7746 177 100 177Z"
            fill="#014E56"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M100 144H0V148H100V144ZM100 152H0V156H100V152ZM0 160H100V164H0V160ZM100 168H0V172H100V168ZM0 176H100V180H0V176ZM100 184H0V188H100V184Z"
            fill="#79C8C7"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 0H4V4H0V0ZM11 0H7V4H11V0ZM11 8H7V12H11V8ZM7 16H11V20H7V16ZM11 24H7V28H11V24ZM7 32H11V36H7V32ZM11 40H7V44H11V40ZM4 8H0V12H4V8ZM18 0H14V4H18V0ZM18 8H14V12H18V8ZM14 16H18V20H14V16ZM18 24H14V28H18V24ZM14 32H18V36H14V32ZM18 40H14V44H18V40ZM4 16H0V20H4V16ZM25 0H21V4H25V0ZM25 8H21V12H25V8ZM21 16H25V20H21V16ZM25 24H21V28H25V24ZM21 32H25V36H21V32ZM25 40H21V44H25V40ZM4 24H0V28H4V24ZM32 0H28V4H32V0ZM32 8H28V12H32V8ZM28 16H32V20H28V16ZM32 24H28V28H32V24ZM28 32H32V36H28V32ZM32 40H28V44H32V40ZM4 32H0V36H4V32ZM39 0H35V4H39V0ZM39 8H35V12H39V8ZM35 16H39V20H35V16ZM39 24H35V28H39V24ZM35 32H39V36H35V32ZM39 40H35V44H39V40ZM4 40H0V44H4V40ZM46 0H42V4H46V0ZM46 8H42V12H46V8ZM42 16H46V20H42V16ZM46 24H42V28H46V24ZM42 32H46V36H42V32ZM46 40H42V44H46V40ZM49 0H53V4H49V0ZM49 8H53V12H49V8ZM53 16H49V20H53V16ZM49 24H53V28H49V24ZM53 32H49V36H53V32ZM49 40H53V44H49V40Z"
            fill="#79C8C7"
          />
        </svg>

        <h2 className="content-heading heading-main-secondary">
          <span className="red-line"></span>
          Build & manage distributed teams like no one else.
        </h2>
        <Features />
      </section>
      <section className="home-section-3">
        <svg
          className="home-svg-3"
          width="147"
          height="100"
          viewBox="0 0 147 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="100"
            height="100"
            transform="matrix(1 0 0 -1 0 100)"
            fill="#002529"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M47 56H147V60H47V56ZM47 64H147V68H47V64ZM147 72H47V76H147V72ZM47 80H147V84H47V80ZM147 88H47V92H147V88ZM47 96H147V100H47V96Z"
            fill="#79C8C7"
          />
        </svg>
        <h2 className="content-heading heading-main-secondary">
          Delivering real results for top companies. Some of our{" "}
          <span>success stories.</span>
        </h2>
        <Testimonials />
        <svg
          className="home-svg-4"
          width="200"
          height="100"
          viewBox="0 0 200 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="100"
            height="100"
            transform="matrix(1 0 0 -1 100 100)"
            fill="#2C6269"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M100 200C44.7715 200 0 155.228 0 100C0 44.7715 44.7715 0 100 0C155.228 0 200 44.7715 200 100C200 155.228 155.228 200 100 200ZM100 133C81.7746 133 67 118.225 67 100C67 81.7746 81.7746 67 100 67C118.225 67 133 81.7746 133 100C133 118.225 118.225 133 100 133Z"
            fill="#012F34"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M100 56H200V60H100V56ZM100 64H200V68H100V64ZM200 72H100V76H200V72ZM100 80H200V84H100V80ZM200 88H100V92H200V88ZM100 96H200V100H100V96Z"
            fill="#79C8C7"
          />
        </svg>
      </section>
    </React.Fragment>
  );
}
