import React from "react";
import { FaRegCopyright, FaGithub } from "react-icons/fa";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <FaRegCopyright className={styles.icon} />
        <span>2025 Kodera Kanare</span>
      </div>
      <div className={styles.right}>
        <a
          href="https://github.com/Canale0107/portfolio-site"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <FaGithub className={styles.icon} />
          <span>Source</span>
        </a>
      </div>
    </footer>
  );
}
