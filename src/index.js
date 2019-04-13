import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import "./reset.scss";

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<App />, document.querySelector("#root"));
});
