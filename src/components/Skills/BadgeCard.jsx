import React, { useState } from "react";
import styles from "./Badges.module.css";

export default function BadgeCard({ badge }) {
  const [imageError, setImageError] = useState(false);

  const { name, description, image, issuedOn, issuer } = badge;

  // 日付をYYYY.MM形式に変換
  const formatDate = (dateString) => {
    if (!dateString) return null;
    try {
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      return `${year}.${month}`;
    } catch (e) {
      return null;
    }
  };

  const formattedDate = formatDate(issuedOn);

  return (
    <div className={styles.badgeCard}>
      <div className={styles.badgeLink} title={description}>
        {image && !imageError && (
          <img
            src={image}
            alt={name}
            className={styles.badgeImage}
            onError={(e) => {
              console.error("Failed to load badge image:", image);
              setImageError(true);
              e.target.style.display = "none";
            }}
            loading="lazy"
          />
        )}
        <div className={styles.badgeInfo}>
          <div className={styles.badgeName}>{name}</div>
          {formattedDate && (
            <div className={styles.badgeDate}>Issued on: {formattedDate}</div>
          )}
        </div>
      </div>
    </div>
  );
}
