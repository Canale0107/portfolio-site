import React from "react";
import ReactDOM from "react-dom/client";
import Research from "../components/research/Research";

const container = document.getElementById("react-research");

if (container) {
  ReactDOM.createRoot(container).render(<Research />);
}
