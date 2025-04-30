import React from "react";
import ReactDOM from "react-dom/client";
import ProfileImage from "./ProfileImage.jsx";

const container = document.getElementById("react-profile-image");
if (container) {
  ReactDOM.createRoot(container).render(<ProfileImage />);
}
