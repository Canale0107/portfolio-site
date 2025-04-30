import styles from "./Career.module.css";

export default function CareerItem({ date, title, descriptions = [] }) {
  return (
    <li className={styles.item}>
      <span className={styles.date}>{date}</span>
      <div className={styles.event}>
        <p className={styles.title}>{title}</p>
        {descriptions.map((desc, i) => (
          <p key={i} className={styles.description}>
            {desc}
          </p>
        ))}
      </div>
    </li>
  );
}
