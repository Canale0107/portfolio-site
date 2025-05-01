// components/HamburgerButton.jsx
import React from "react";
import styles from "./HamburgerButton.module.css";

export default function HamburgerButton({ isOpen, onClick }) {
  return (
    <div
      className={`${styles.btnTrigger} ${isOpen ? styles.active : ""}`}
      onClick={onClick}
      aria-label="メニューを開く"
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
