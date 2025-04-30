// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App";
import "@/styles/style.css"; // CSSはここで読み込むのが通例

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);
