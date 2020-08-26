import React from "react";
import Header from "./header/Header";
import "./App.scss";
import Content from "./content_routes/Content";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Content />
    </div>
  );
}
