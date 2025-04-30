import styles from "./Skills.module.css";

export default function CertificationList({ data }) {
  return (
    <section className={styles.categories}>
      {data.map((category, i) => (
        <section className={styles.category} key={i}>
          <h4>{category.category}</h4>
          <ul className={styles.certifications}>
            {category.items.map((cert, j) => (
              <li key={j}>
                <span className={styles.certificationName}>{cert.name}</span>
                <span className={styles.certificationDate}>
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
