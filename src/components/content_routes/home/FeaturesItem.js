import React from "react";
import "./FeaturesItem.scss";
export default function FeaturesItem({ feature }) {
  return (
    <div className="features-item grid">
      <figure className="features-item-icon">{feature.icon}</figure>
      <figcaption className="features-item-title body-text-primary">
        {feature.title}
      </figcaption>
      <p className="features-item-text body-text-secondary">{feature.text}</p>
    </div>
  );
}
