import React from "react";
import "./Clients.scss";
import ClientsItem from "./ClientsItem";
const clients = [
  { name: "The Verge", logo: "./clients/Object-2.png" },
  { name: "The Jakarta Post", logo: "./clients/Object-3.png" },
  { name: "The Guardian", logo: "./clients/Object.png" },
  { name: "Techradar", logo: "./clients/Object-4.png" },
  { name: "Gadgets Now", logo: "./clients/Object-5.png" },
];
export default function Clients() {
  const renderClients = (clients) => {
    return clients.map((client, index) => {
      return <ClientsItem key={index} client={client} />;
    });
  };
  return (
    <React.Fragment>
      <h2 className="content-heading heading-main-secondary about-clients-title">
        Some of our clients
      </h2>
      <section className="about-clients grid">{renderClients(clients)}</section>
    </React.Fragment>
  );
}
