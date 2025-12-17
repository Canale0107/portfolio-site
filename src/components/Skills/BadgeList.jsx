import React from "react";
import BadgeCard from "./BadgeCard";
import styles from "./Skills.module.css";

export default function BadgeList({ data }) {
  if (!data || data.length === 0) {
    return null;
  }

  return (
    <>
      <div className={styles.badgeList}>
        {data.map((badge, i) => (
          <BadgeCard
            key={i}
            url={badge.url}
            fallbackName={badge.name || null}
          />
        ))}
      </div>
      <div className={styles.badgeLinks}>
        <a
          href="https://www.openbadge-global.com/ns/portal/openbadge/public/assertions/user/MUI5d2M2NlIzYlMzY3U4b1dUekVPdz09"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.badgeExternalLink}
        >
          LecoSでバッジを見る
        </a>
        <a
          href="https://www.credly.com/users/kanare-kodera/badges#credly"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.badgeExternalLink}
        >
          Credlyでバッジを見る
        </a>
      </div>
    </>
  );
}
