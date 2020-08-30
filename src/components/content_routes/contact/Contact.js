import React from "react";
import "./Contact.scss";
import ContactItems from "./ContactItems";
export default function Contact() {
  return (
    <React.Fragment>
      <section className="content contact-main bg-main">
        <div className="contact-main-text grid">
          <h2 className="content-heading contact-heading-big heading-mobile">
            Contact
          </h2>
          <h4 className="contact-heading-small text-emphasize">Ask us about</h4>
        </div>
        <ContactItems />
      </section>
    </React.Fragment>
  );
}
