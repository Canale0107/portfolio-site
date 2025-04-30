// src/react/entrypoints/mountNavbar.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "../components/Navbar";

const container = document.getElementById("react-navbar-inner");
if (container) {
  ReactDOM.createRoot(container).render(<Navbar />);
}
