import React, { useState } from "react";
import styles from "./Badges.module.css";

export default function BadgeCard({ badge, url }) {
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

  const cardContent = (
    <>
      {/* バッジ画像コンテナ（グラデーション背景） */}
      <div className={styles.imageContainer}>
        {image && !imageError && (
          <>
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
            <div className={styles.shine}></div>
          </>
        )}
      </div>

      {/* バッジ情報 */}
      <div className={styles.badgeInfo}>
        <h3 className={styles.badgeName}>{name}</h3>
        {issuer && <p className={styles.badgeIssuer}>{issuer}</p>}
        {formattedDate && (
          <time className={styles.badgeDate} dateTime={issuedOn}>
            {formattedDate}
          </time>
        )}
      </div>
    </>
  );

  // URLがある場合はリンクとして表示
  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.badgeCardLink}
        title={description}
      >
        <article className={styles.badgeCard}>{cardContent}</article>
      </a>
    );
  }

  // URLがない場合は通常のカードとして表示
  return (
    <article className={styles.badgeCard} title={description}>
      {cardContent}
    </article>
  );
}
