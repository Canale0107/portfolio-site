// src/react/entrypoints/mountCareer.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import Career from "../components/career/Career";

const container = document.getElementById("react-career");

if (container) {
  ReactDOM.createRoot(container).render(<Career />);
}
