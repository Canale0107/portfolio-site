import React from "react";

export default function SkillList({ data }) {
  return (
    <section className="certification-skill__categories">
      {data.map((category, i) => (
        <section className="certification-skill__category" key={i}>
          <h4>{category.name}</h4>
          <ul className="certification-skill__skills">
            {category.items.map((skill, j) => (
              <li key={j}>
                <span className="certification-skill__skill-name">
                  {skill.name}
                </span>
                <div className="skill-bar">
                  <div style={{ width: `${skill.level}%` }}></div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </section>
  );
}
