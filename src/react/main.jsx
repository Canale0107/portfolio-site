import React from "react";
import ReactDOM from "react-dom/client";
import ReactImage from "./ProfileImage.jsx";

const container = document.getElementById("react-image");
if (container) {
  ReactDOM.createRoot(container).render(<ReactImage />);
}
