import React from "react";
import "./ClientsItem.scss";
export default function ClientsItem({ client }) {
  return <img src={client.logo} alt="" className="about-client-logo" />;
}
