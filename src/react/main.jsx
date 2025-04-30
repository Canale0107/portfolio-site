import React from "react";
import ReactDOM from "react-dom/client";
import ReactImage from "./components/profile/ProfileImage.jsx";
import "@/styles/style.css";

const container = document.getElementById("react-image");
if (container) {
  ReactDOM.createRoot(container).render(<ReactImage />);
}
