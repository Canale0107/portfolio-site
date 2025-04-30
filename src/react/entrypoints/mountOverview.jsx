// src/react/entrypoints/mountOverview.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import Overview from "../components/overview/Overview";

const container = document.getElementById("react-overview");
if (container) {
  ReactDOM.createRoot(container).render(<Overview />);
}
