import styles from "./Skills.module.css";
import CategoryList from "./CategoryList";

export default function CertificationList({ data }) {
  return (
    <CategoryList
      data={data}
      renderItem={(cert) => (
        <>
          <span className={styles.certificationName}>{cert.name}</span>
          <span className={styles.certificationDate}>（{cert.date}）</span>
        </>
      )}
    />
  );
}
