import React from "react";
import "./Team.scss";
import TeamItem from "./TeamItem";

const team = [
  {
    name: "Nikita Marks",
    occupation: "Founder & CEO",
    picture: "",
    quote:
      "“Empowered teams create truly amazing products. Set the north star and let them follow it.”",
    socials: { twitter: "", facebook: "" },
  },
  {
    name: "Nikita Marks",
    occupation: "Founder & CEO",
    picture: "",
    quote:
      "“Empowered teams create truly amazing products. Set the north star and let them follow it.”",
    socials: { twitter: "", facebook: "" },
  },
  {
    name: "Nikita Marks",
    occupation: "Founder & CEO",
    picture: "",
    quote:
      "“Empowered teams create truly amazing products. Set the north star and let them follow it.”",
    socials: { twitter: "", facebook: "" },
  },
  {
    name: "Nikita Marks",
    occupation: "Founder & CEO",
    picture: "",
    quote:
      "“Empowered teams create truly amazing products. Set the north star and let them follow it.”",
    socials: { twitter: "", facebook: "" },
  },
  {
    name: "Nikita Marks",
    occupation: "Founder & CEO",
    picture: "",
    quote:
      "“Empowered teams create truly amazing products. Set the north star and let them follow it.”",
    socials: { twitter: "", facebook: "" },
  },
  {
    name: "Nikita Marks",
    occupation: "Founder & CEO",
    picture: "",
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
