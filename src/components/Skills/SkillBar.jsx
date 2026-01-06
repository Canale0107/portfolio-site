import React from "react";
import styles from "./SkillsContent.module.css";

export default function SkillBar({ level }) {
  return (
    <div className={styles.skillBarWrapper}>
      <div className={styles.levelDisplay}>
        <span className={styles.levelText}>Lv.{level}</span>
        <div className={styles.levelDots}>
          {[1, 2, 3, 4, 5].map((lvl) => (
            <span
              key={lvl}
              className={`${styles.levelDot} ${
                lvl <= level ? styles.levelDotActive : styles.levelDotInactive
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
