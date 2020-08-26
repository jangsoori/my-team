import React from "react";
import { Route, Switch } from "react-router-dom";
import "./Content.scss";
import Home from "./home/Home";
export default function Content() {
  return (
    <section className="content-wrapper">
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </section>
  );
}
