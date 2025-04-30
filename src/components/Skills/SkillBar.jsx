import React, { useEffect, useRef } from "react";
import styles from "./Skills.module.css";

export default function SkillBar({ level, trigger }) {
  const barRef = useRef(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    if (trigger) {
      bar.style.transition = "none";
      bar.style.width = "0%";
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          bar.style.transition = "width 0.6s ease";
          bar.style.width = `${level}%`;
        });
      });
    }
  }, [trigger, level]);

  return (
    <div className={styles.skillBarWrapper}>
      <div className={styles.skillBar}>
        <div ref={barRef} className={styles.fill} />
      </div>
      <span className={styles.percentage}>{level}%</span>
    </div>
  );
}