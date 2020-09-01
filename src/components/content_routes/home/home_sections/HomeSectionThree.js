import React from "react";
import Testimonials from "../Testimonials";

export default function HomeSectionThree() {
  return (
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M47 56H147V60H47V56ZM47 64H147V68H47V64ZM147 72H47V76H147V72ZM47 80H147V84H47V80ZM147 88H47V92H147V88ZM47 96H147V100H47V96Z"
          fill="#79C8C7"
        />
      </svg>
      <h2 className="content-heading heading-main-secondary home-section-3-title">
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M100 200C44.7715 200 0 155.228 0 100C0 44.7715 44.7715 0 100 0C155.228 0 200 44.7715 200 100C200 155.228 155.228 200 100 200ZM100 133C81.7746 133 67 118.225 67 100C67 81.7746 81.7746 67 100 67C118.225 67 133 81.7746 133 100C133 118.225 118.225 133 100 133Z"
          fill="#012F34"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M100 56H200V60H100V56ZM100 64H200V68H100V64ZM200 72H100V76H200V72ZM100 80H200V84H100V80ZM200 88H100V92H200V88ZM100 96H200V100H100V96Z"
          fill="#79C8C7"
        />
      </svg>
    </section>
  );
}
