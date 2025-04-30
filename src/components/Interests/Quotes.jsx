import React from "react";
import styles from "./Interests.module.css";

export default function Quotes({ quotes }) {
  return (
    <ul className={styles.list}>
      {quotes.map((quote, i) => (
        <li key={i} className={styles.item}>
          <blockquote>
            <div className={styles.block}>
              <div className={styles.text}>{quote.text}</div>
              <div className={styles.author}>- {quote.author}</div>
            </div>
          </blockquote>
          <div className={styles.commentary}>{quote.commentary}</div>
        </li>
      ))}
    </ul>
  );
}
