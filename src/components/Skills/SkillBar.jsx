import React, { useState } from "react";
import styles from "./SkillsContent.module.css";

export default function SkillBar({ level, note }) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className={styles.skillBarWrapper}>
      <div
        className={styles.levelDisplay}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
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
        {showTooltip && note && (
          <div className={styles.tooltip}>
            <div className={styles.tooltipContent}>{note}</div>
          </div>
        )}
      </div>
    </div>
  );
}
