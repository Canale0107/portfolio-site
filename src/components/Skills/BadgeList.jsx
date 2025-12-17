import React from "react";
import BadgeCard from "./BadgeCard";
import styles from "./Skills.module.css";

export default function BadgeList({ data }) {
  if (!data || data.length === 0) {
    return null;
  }

  return (
    <div className={styles.badgeList}>
      {data.map((badge, i) => (
        <BadgeCard key={i} url={badge.url} fallbackName={badge.name || null} />
      ))}
    </div>
  );
}
