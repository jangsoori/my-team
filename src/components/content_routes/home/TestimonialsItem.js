import React from "react";
import "./TestimonialsItem.scss";
import CiteIcon from "./icons/CiteIcon";
export default function TestimonialsItem({ testimonial }) {
  return (
    <div className="testimonial-item grid">
      <CiteIcon />
      <p className="body-text-secondary">{testimonial.text}</p>
      <div className="testimonial-person grid">
        <p className="body-text-primary">{testimonial.name}</p>
        <p>{testimonial.occupation}</p>
      </div>
      <img
        src={testimonial.picture}
        alt="avatar"
        className="testimonial-item-picture"
      />
    </div>
  );
}
