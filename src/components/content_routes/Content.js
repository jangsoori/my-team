import React from "react";
import { Route, Switch } from "react-router-dom";
import "./Content.scss";
import Home from "./home/Home";
import About from "./about/About";
export default function Content() {
  return (
    <section className="content-wrapper bg-main">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>
    </section>
  );
}
