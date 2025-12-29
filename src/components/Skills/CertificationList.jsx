import styles from "./Certifications.module.css";
import CategoryList from "./CategoryList";

export default function CertificationList({ data }) {
  return (
    <CategoryList
      data={data}
      type="certification"
      renderItem={(cert) => (
        <div className={styles.certificationItem}>
          <div className={styles.certificationName}>{cert.name}</div>
          <div className={styles.certificationDate}>{cert.date}</div>
        </div>
      )}
    />
  );
}
