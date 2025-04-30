import React, { useEffect, useRef } from "react";
import styles from "./Skills.module.css";

export default function SkillBar({ level, trigger }) {
  const barRef = useRef(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    if (trigger) {
      // 一旦0%にして次のフレームで目標に
      bar.style.transition = "none";
      bar.style.width = "0%";

      // 2フレーム後にアニメ付きで伸ばす（requestAnimationFrame 2回）
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          bar.style.transition = "width 0.6s ease";
          bar.style.width = `${level}%`;
        });
      });
    }
  }, [trigger, level]);

  return (
    <div className={styles.skillBar}>
      <div
        ref={barRef}
        className={styles.fill}
        style={{ width: `${level}%` }} // 初期値
      />
    </div>
  );
}
