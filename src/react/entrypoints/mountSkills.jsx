import React from "react";
import ReactDOM from "react-dom/client";
import Skills from "../components/skills/Skills";

const container = document.getElementById("react-skills");

if (container) {
  ReactDOM.createRoot(container).render(<Skills />);
}
