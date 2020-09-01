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
  return team.map((item, index) => {
    return <TeamItem key={index} item={item} />;
  });
};
export default function Team() {
  return (
    <React.Fragment>
      <svg
        className="about-team-svg-1"
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 100C-55.2285 100 -100 55.2285 -100 0C-100 -55.2285 -55.2285 -100 0 -100C55.2285 -100 100 -55.2285 100 0C100 55.2285 55.2285 100 0 100ZM0 33C-18.2254 33 -33 18.2254 -33 0C-33 -18.2254 -18.2254 -33 0 -33C18.2254 -33 33 -18.2254 33 0C33 18.2254 18.2254 33 0 33Z"
          fill="#012F34"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M100 0H96V4H100V0ZM89 0H93V4H89V0ZM89 8H93V12H89V8ZM93 16H89V20H93V16ZM89 24H93V28H89V24ZM93 32H89V36H93V32ZM89 40H93V44H89V40ZM96 8H100V12H96V8ZM82 0H86V4H82V0ZM82 8H86V12H82V8ZM86 16H82V20H86V16ZM82 24H86V28H82V24ZM86 32H82V36H86V32ZM82 40H86V44H82V40ZM96 16H100V20H96V16ZM75 0H79V4H75V0ZM75 8H79V12H75V8ZM79 16H75V20H79V16ZM75 24H79V28H75V24ZM79 32H75V36H79V32ZM75 40H79V44H75V40ZM96 24H100V28H96V24ZM68 0H72V4H68V0ZM68 8H72V12H68V8ZM72 16H68V20H72V16ZM68 24H72V28H68V24ZM72 32H68V36H72V32ZM68 40H72V44H68V40ZM96 32H100V36H96V32ZM61 0H65V4H61V0ZM61 8H65V12H61V8ZM65 16H61V20H65V16ZM61 24H65V28H61V24ZM65 32H61V36H65V32ZM61 40H65V44H61V40ZM96 40H100V44H96V40ZM54 0H58V4H54V0ZM54 8H58V12H54V8ZM58 16H54V20H58V16ZM54 24H58V28H54V24ZM58 32H54V36H58V32ZM54 40H58V44H54V40ZM51 0H47V4H51V0ZM51 8H47V12H51V8ZM47 16H51V20H47V16ZM51 24H47V28H51V24ZM47 32H51V36H47V32ZM51 40H47V44H51V40Z"
          fill="#F67E7E"
        />
      </svg>

      <h2 className="content-heading heading-main-secondary about-team-title">
        Meet the directors
      </h2>
      <section className="team-list grid">{renderTeam(team)}</section>
      <svg
        className="about-team-svg-2"
        width="147"
        height="100"
        viewBox="0 0 147 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="100"
          height="100"
          transform="matrix(1 0 0 -1 0 100)"
          fill="#002529"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M47 56H147V60H47V56ZM47 64H147V68H47V64ZM147 72H47V76H147V72ZM47 80H147V84H47V80ZM147 88H47V92H147V88ZM47 96H147V100H47V96Z"
          fill="#79C8C7"
        />
      </svg>
    </React.Fragment>
  );
}
