import React, { useEffect, useRef, useState } from "react";
import styles from "./SkillsContent.module.css";

export default function SkillBar({ level, trigger }) {
  const barRef = useRef(null);
  const [displayedLevel, setDisplayedLevel] = useState(0);
  const animationRef = useRef(null);

  // バーの幅のアニメーション
  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    bar.style.transition = "none";
    bar.style.width = "0%";

    requestAnimationFrame(() => {
      bar.style.transition = "width 0.6s ease";
      bar.style.width = `${level}%`;
    });
  }, [trigger, level]);

  // 数値表示のアニメーション
  useEffect(() => {
    let start = null;
    const duration = 600;
    const from = 0;
    const to = level;

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const value = Math.round(from + (to - from) * progress);
      setDisplayedLevel(value);
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    cancelAnimationFrame(animationRef.current);
    animationRef.current = requestAnimationFrame(animate);
  }, [trigger, level]);

  return (
    <div className={styles.skillBarWrapper}>
      <div className={styles.skillBar}>
        <div ref={barRef} className={styles.fill} />
      </div>
      <span className={styles.percentage}>{displayedLevel}%</span>
    </div>
  );
}
