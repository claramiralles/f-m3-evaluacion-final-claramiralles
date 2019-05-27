import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import "./scss/index.scss";
import App from "./components/App/App";

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);
