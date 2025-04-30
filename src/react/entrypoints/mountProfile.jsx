// src/react/entrypoints/mountProfile.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import Profile from "../components/profile/Profile.jsx";
import "@/styles/style.css";

const container = document.getElementById("react-profile");
if (container) {
  ReactDOM.createRoot(container).render(<Profile />);
}
