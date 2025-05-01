import React from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import styles from "./ThemeToggleButton.module.css";

export default function ThemeToggleButton({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className={styles.themeToggleBtn}
      aria-label="テーマ切替"
    >
      {theme === "dark" ? <FiSun /> : <FiMoon className={styles.moon} />}
    </button>
  );
}
