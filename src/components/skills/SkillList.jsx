import React, { useState } from "react";
import styles from "./Skills.module.css";
import SkillBar from "./SkillBar";

export default function SkillList({ data }) {
  const [triggerMap, setTriggerMap] = useState({});

  const handleHover = (catIndex) => {
    setTriggerMap((prev) => ({
      ...prev,
      [catIndex]: Date.now(), // ✅ 毎回異なる値で更新
    }));
  };

  return (
    <section className={styles.categories}>
      {data.map((category, catIndex) => (
        <section
          className={styles.category}
          key={catIndex}
          onMouseEnter={() => handleHover(catIndex)}
        >
          <h4>{category.name}</h4>
          <ul className={styles.skills}>
            {category.items.map((skill, skillIndex) => (
              <li key={skillIndex} className={styles.skillItem}>
                <span className={styles.skillName}>{skill.name}</span>
                <SkillBar
                  level={skill.level}
                  trigger={triggerMap[catIndex] ?? 0}
                />
              </li>
            ))}
          </ul>
        </section>
      ))}
    </section>
  );
}
