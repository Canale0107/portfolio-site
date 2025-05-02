import React, { useState } from "react";
import styles from "./Skills.module.css";
import SkillBar from "./SkillBar";
import CategoryList from "./CategoryList";

export default function SkillList({ data }) {
  const [triggerMap, setTriggerMap] = useState({});

  const handleHover = (catIndex) => {
    setTriggerMap((prev) => ({
      ...prev,
      [catIndex]: Date.now(),
    }));
  };

  return (
    <CategoryList
      data={data}
      onHover={handleHover}
      renderItem={(skill, catIndex) => (
        <div className={styles.skillItem}>
          <span className={styles.skillName}>{skill.name}</span>
          <SkillBar level={skill.level} trigger={triggerMap[catIndex] ?? 0} />
        </div>
      )}
    />
  );
}
