import React from "react";
import ReactDOM from "react-dom/client";
import Interests from "../components/interest/Interests";

const container = document.getElementById("react-interests");

if (container) {
  ReactDOM.createRoot(container).render(<Interests />);
}
