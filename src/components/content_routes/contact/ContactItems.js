import React from "react";
import Icon1 from "../home/icons/Icon1";
import Icon2 from "../home/icons/Icon2";
import Icon3 from "../home/icons/Icon3";
import "./ContactItems.scss";
export default function ContactItems() {
  return (
    <ul className="contact-items-list grid">
      <li className="contact-items-item grid">
        <Icon1 />
        <p className="body-text-primary">The quality of our talent network</p>
      </li>
      <li className="contact-items-item grid">
        <Icon2 />
        <p className="body-text-primary">
          Usage & implementation of our software
        </p>
      </li>
      <li className="contact-items-item grid">
        <Icon3 />
        <p className="body-text-primary">How we help drive innovation</p>
      </li>
    </ul>
  );
}
