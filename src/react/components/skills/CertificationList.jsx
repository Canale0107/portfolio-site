import React from "react";

export default function CertificationList({ data }) {
  return (
    <section className="certification-skill__categories">
      {data.map((category, i) => (
        <section className="certification-skill__category" key={i}>
          <h4>{category.category}</h4>
          <ul className="certification-skill__certifications">
            {category.items.map((cert, j) => (
              <li key={j}>
                <span className="certification-skill__certification-name">
                  {cert.name}
                </span>
                <span className="certification-skill__certification-date">
                  （{cert.date}）
                </span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </section>
  );
}
