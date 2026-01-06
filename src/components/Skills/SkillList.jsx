import React from "react";
import styles from "./SkillsContent.module.css";
import SkillBar from "./SkillBar";
import CategoryList from "./CategoryList";

export default function SkillList({ data }) {
  return (
    <CategoryList
      data={data}
      type="skill"
      renderItem={(skill, catIndex) => (
        <div className={styles.skillItem}>
          <span className={styles.skillName}>{skill.name}</span>
          <SkillBar level={skill.level} />
        </div>
      )}
    />
  );
}
