import React from "react";
import "./Testimonials.scss";

import TestimonialsItem from "./TestimonialsItem";
const testimonials = [
  {
    text:
      "“The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”",
    name: "Kady Baker",
    occupation: "Product Manager at Bookmark",
    picture: `./avatars/testimonial1.jpeg`,
  },
  {
    text:
      "“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”",
    name: "Aiysha Reese",
    occupation: "Founder of Manage",
    picture: `./avatars/testimonial2.jpeg`,
  },
  {
    text:
      "“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”",
    name: "Arthur Clarke",
    occupation: "Co-founder of MyPhysio",
    picture: `./avatars/testimonial3.jpeg`,
  },
];

const renderTestimonials = (testimonials) => {
  return testimonials.map((testimonial, index) => {
    return <TestimonialsItem key={index} testimonial={testimonial} />;
  });
};
export default function Testimonials() {
  return (
    <section className="testimonials grid">
      {renderTestimonials(testimonials)}
    </section>
  );
}
