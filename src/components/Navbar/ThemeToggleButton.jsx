import React from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import styles from "./ThemeToggleButton.module.css";

export default function ThemeToggleButton({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className={styles.themeToggleBtn}
      aria-label="テーマ切替"
    >
      {theme === "dark" ? (
        <BiSolidSun />
      ) : (
        <BiSolidMoon className={styles.moon} />
      )}
    </button>
  );
}
