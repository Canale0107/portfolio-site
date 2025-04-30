// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App";
import "@/styles/variables.css"; // CSSはここで読み込むのが通例
import "@/styles/base.css";
import "@/styles/style.css";
import "@/styles/responsive.css";

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);
