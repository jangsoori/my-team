import React, { useState } from "react";
import "./TeamItem.scss";
import { AboutTwitter, AboutLinkedIn } from "./AboutIcons";

export default function TeamItem({ item }) {
  const [overviewActive, setOverviewActive] = useState(false);

  const renderExtendIcon = () => {
    return overviewActive ? (
      <svg
        onClick={() => {
          setOverviewActive(!overviewActive);
        }}
        className="team-item-extend-icon"
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="28" cy="28" r="28" fill="#79C8C7" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M35.0711 23.7576L32.2426 20.9292L28 25.1718L23.7574 20.9292L20.9289 23.7576L25.1716 28.0002L20.9289 32.2429L23.7574 35.0713L28 30.8287L32.2426 35.0713L35.0711 32.2429L30.8284 28.0002L35.0711 23.7576Z"
          fill="#012F34"
        />
      </svg>
    ) : (
      <svg
        onClick={() => {
          setOverviewActive(!overviewActive);
        }}
        className="team-item-extend-icon"
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="28" cy="28" r="28" fill="#F67E7E" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M30 20H26V26H20V30H26V36H30V30H36V26H30V20Z"
          fill="#012F34"
        />
      </svg>
    );
  };
  return (
    <figure className="team-item grid">
      <img src={item.picture} alt="" className="team-item-picture" />
      <div className="team-item-overview grid">
        <p className="body-text-primary team-item-name">{item.name}</p>
        <p className="body-text-secondary team-item-occupation">
          {item.occupation}
        </p>
      </div>
      {renderExtendIcon()}
      <div
        className={`team-item team-item-details ${
          overviewActive ? "team-item-details-visible" : ""
        } grid`}
      >
        <p className="body-text-primary team-item-name">{item.name}</p>
        <p className="body-text-secondary team-item-quote">{item.quote}</p>
        <div className="team-item-details-socials grid">
          <AboutTwitter />
          <AboutLinkedIn />
        </div>
      </div>
    </figure>
  );
}
