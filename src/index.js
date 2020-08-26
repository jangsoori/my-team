import React from "react";
import ReactDOM from "react-dom";

//Router
import { BrowserRouter as Router } from "react-router-dom";

//Components
import App from "./components/App";

//Styles
import "normalize.css";
import "./reset.css";
import "./index.scss";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
