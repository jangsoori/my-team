import React from "react";
import "./Team.scss";
import TeamItem from "./TeamItem";

const team = [
  {
    name: "Nikita Marks",
    occupation: "Founder & CEO",
    picture: "./avatars/Oval.png",
    quote:
      "“Empowered teams create truly amazing products. Set the north star and let them follow it.”",
    socials: { twitter: "", facebook: "" },
  },
  {
    name: "Cristian Duncan",
    occupation: "Co-founder & COO",
    picture: "./avatars/Oval-2.png",
    quote:
      "“Empowered teams create truly amazing products. Set the north star and let them follow it.”",
    socials: { twitter: "", facebook: "" },
  },
  {
    name: "Cruz Hamer",
    occupation: "Co-founder & CTO",
    picture: "./avatars/Oval-3.png",
    quote:
      "“Empowered teams create truly amazing products. Set the north star and let them follow it.”",
    socials: { twitter: "", facebook: "" },
  },
  {
    name: "Drake Heaton",
    occupation: "Business Development Lead",
    picture: "./avatars/Oval-2.png",
    quote:
      "“Empowered teams create truly amazing products. Set the north star and let them follow it.”",
    socials: { twitter: "", facebook: "" },
  },
  {
    name: "Griffin Wise",
    occupation: "Lead Marketing",
    picture: "./avatars/Oval-4.png",
    quote:
      "“Empowered teams create truly amazing products. Set the north star and let them follow it.”",
    socials: { twitter: "", facebook: "" },
  },
  {
    name: "Aden Allan",
    occupation: "Lead Development",
    picture: "./avatars/Oval-5.png",
    quote:
      "“Empowered teams create truly amazing products. Set the north star and let them follow it.”",
    socials: { twitter: "", facebook: "" },
  },
];

const renderTeam = (team) => {
  return team.map((item) => {
    return <TeamItem item={item} />;
  });
};
export default function Team() {
  return (
    <React.Fragment>
      <h2 className="content-heading heading-mobile-secondary about-team-title">
        Meet the directors
      </h2>
      <section className="team-list grid">{renderTeam(team)}</section>
    </React.Fragment>
  );
}
