import React from "react";
import {
  FaBrain,
  FaBook,
  FaPenNib,
  FaPalette,
  FaMusic,
} from "react-icons/fa6";
import styles from "./Influences.module.css";

const categoryIcons = {
  思索者: <FaBrain size={18} />,
  作家: <FaBook size={18} />,
  詩人: <FaPenNib size={18} />,
  アーティスト: <FaPalette size={18} />,
  音楽: <FaMusic size={18} />,
};

export default function Influences({ influences }) {
  return (
    <div className={styles.influencesGrid}>
      {Object.entries(influences).map(([group, items]) => (
        <div key={group} className={styles.influenceCard}>
          <div className={styles.categoryHeader}>
            <div className={styles.categoryIcon}>
              {categoryIcons[group] || <FaBook size={18} />}
            </div>
            <h4 className={styles.categoryTitle}>{group}</h4>
          </div>
          <ul className={styles.peopleList}>
            {items.map((item, i) => (
              <li key={i} className={styles.personItem}>
                <span className={styles.bullet}>•</span>
                <span className={styles.personName}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
