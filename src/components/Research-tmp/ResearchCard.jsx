import React from "react";
import styles from "./Research.module.css";

export default function ResearchCard({
  title,
  description,
  authors,
  title_en,
  venue,
  location,
}) {
  return (
    <section className={styles.card}>
      <h3>{title}</h3>
      <p
        className={styles.description}
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <div className={styles.publication}>
        <div className={styles.pubContent}>
          <p className={styles.authors}>{authors}</p>
          <p className={styles.titleEn}>{title_en}</p>
          <p className={styles.venue}>
            <i>{venue}</i>
          </p>
          <p className={styles.venue}>{location}</p>
        </div>
      </div>
    </section>
  );
}
