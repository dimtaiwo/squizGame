import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap-grid.min.css"; // Using only the grid for responsiveness
import "./index.css";
import App from "./App";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
