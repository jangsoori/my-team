import React from "react";
import "./Contact.scss";
import ContactItems from "./ContactItems";
import ContactForm from "./ContactForm";
export default function Contact() {
  return (
    <React.Fragment>
      <section className="content contact-main bg-main">
        <div className="contact-main-text grid">
          <h2 className="content-heading contact-heading-big heading-main">
            Contact
          </h2>
          <h4 className="contact-heading-small text-emphasize">Ask us about</h4>
        </div>
        <ContactItems />
        <ContactForm />
        <svg
          className="contact-svg-1"
          width="100"
          height="113"
          viewBox="0 0 100 113"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M200.5 100.5C200.5 45.2715 155.728 0.5 100.5 0.5C45.2715 0.5 0.5 45.2715 0.5 100.5C0.5 155.728 45.2715 200.5 100.5 200.5C155.728 200.5 200.5 155.728 200.5 100.5ZM133.5 100.5C133.5 82.2746 118.725 67.5 100.5 67.5C82.2746 67.5 67.5 82.2746 67.5 100.5C67.5 118.725 82.2746 133.5 100.5 133.5C118.725 133.5 133.5 118.725 133.5 100.5Z"
            fill="#012F34"
          />
          <rect
            x="43.5"
            y="0.5"
            width="43"
            height="43"
            transform="rotate(90 43.5 0.5)"
            fill="#79C8C7"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M200.5 124.987C200.5 69.7581 155.728 24.9866 100.5 24.9866C45.2715 24.9866 0.5 69.7581 0.5 124.987C0.5 180.215 45.2715 224.987 100.5 224.987C155.728 224.987 200.5 180.215 200.5 124.987ZM133.5 124.987C133.5 106.761 118.725 91.9866 100.5 91.9866C82.2746 91.9866 67.5 106.761 67.5 124.987C67.5 143.212 82.2746 157.987 100.5 157.987C118.725 157.987 133.5 143.212 133.5 124.987Z"
            fill="#F67E7E"
          />
        </svg>
      </section>
    </React.Fragment>
  );
}
