import React from "react";
import Header from "./header/Header";
import "./App.scss";
import Content from "./content_routes/Content";
import { Route } from "react-router-dom";
import GetStarted from "./GetStarted";
import Footer from "./footer/Footer";
import "../utils/buttons.scss";
import "../utils/typography.scss";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Content />
      <Route exact path={["/", "/about"]} component={GetStarted} />
      <Footer />
    </div>
  );
}
