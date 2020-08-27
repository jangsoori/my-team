import React from "react";
import Icon1 from "./icons/Icon1";
import Icon2 from "./icons/Icon2";
import Icon3 from "./icons/Icon3";
import FeaturesItem from "./FeaturesItem";
import "./Features.scss";
const features = [
  {
    icon: <Icon1 />,
    title: "Experienced Individuals",
    text:
      "Our network is made up of highly experienced professionals who are passionate about what they do.",
  },
  {
    icon: <Icon2 />,
    title: "Easy to Implement",
    text:
      "Our processes have been refined over years of implementation meaning our teams always deliver.",
  },
  {
    icon: <Icon3 />,
    title: "Enhanced Productivity",
    text:
      "Our customized platform with in-built analytics helps you manage your distributed teams.",
  },
];

const renderFeatures = (features) => {
  return features.map((feature) => {
    return <FeaturesItem feature={feature} />;
  });
};
export default function Features() {
  return (
    <section className="features grid">{renderFeatures(features)}</section>
  );
}
