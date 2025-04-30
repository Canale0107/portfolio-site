import React from "react";
import styles from "./Interests.module.css";

export default function Quotes({ quotes }) {
  return (
    <ul className={styles.list}>
      {quotes.map((quote, i) => (
        <li key={i} className={styles.item}>
          <blockquote className={styles.block}>
            <p className={styles.text}>{quote.text}</p>
            <cite className={styles.author}>- {quote.author}</cite>
          </blockquote>
          <div className={styles.commentary}>{quote.commentary}</div>
        </li>
      ))}
    </ul>
  );
}
