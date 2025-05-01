import React from "react";
import styles from "./ThemeToggleButton.module.css";

export default function DarkModeToggle({ theme, toggleTheme }) {
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className={`${styles.toggleButton} ${
        isDark ? styles.dark : styles.light
      }`}
      aria-label="テーマ切替"
    >
      <div className={styles.icon}>
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i} className={styles.ray}></span>
        ))}
      </div>
    </button>
  );
}
