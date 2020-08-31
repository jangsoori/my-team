import React from "react";
import "./Clients.scss";
import ClientsItem from "./ClientsItem";
const clients = [
  { name: "The Verge", logo: "./clients/Bitmap.png" },
  { name: "The Jakarta Post", logo: "./clients/Bitmap-1.png" },
  { name: "The Guardian", logo: "./clients/Bitmap-2.png" },
  { name: "Techradar", logo: "./clients/Bitmap-3.png" },
  { name: "Gadgets Now", logo: "./clients/Bitmap-4.png" },
];
export default function Clients() {
  const renderClients = (clients) => {
    return clients.map((client) => {
      return <ClientsItem client={client} />;
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
