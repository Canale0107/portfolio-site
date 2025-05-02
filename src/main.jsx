// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App";
import "@/styles/variables.css";
import "@/styles/base.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
