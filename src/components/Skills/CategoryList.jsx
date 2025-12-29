import React from "react";
import certStyles from "./Certifications.module.css";
import skillStyles from "./Skills.module.css";

export default function CategoryList({ data, renderItem, onHover, type = "certification" }) {
  // 資格の場合はCertifications.module.css、スキルの場合はSkills.module.cssを使用
  const styles = type === "certification" ? certStyles : skillStyles;
  
  return (
    <div className={styles.categoriesContainer}>
      {data.map((category, i) => (
        <div
          key={i}
          className={styles.categoryCard}
          onMouseEnter={onHover ? () => onHover(i) : undefined}
        >
          {/* Category Header */}
          <div className={styles.categoryHeader}>
            <h4 className={styles.categoryTitle}>
              {category.name || category.category}
            </h4>
            <span className={styles.categoryBadge}>
              {category.items.length}件
            </span>
          </div>
          <div className={styles.categoryDivider}></div>

          {/* Items List */}
          <div className={styles.itemsList}>
            {category.items.map((item, j) => (
              <div key={j} className={styles.itemWrapper}>
                {renderItem(item, i, j)}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
