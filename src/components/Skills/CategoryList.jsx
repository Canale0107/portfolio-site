import styles from "./Skills.module.css";

export default function CategoryList({ data, renderItem, onHover }) {
  return (
    <section className={styles.categories}>
      {data.map((category, i) => (
        <section
          className={styles.category}
          key={i}
          onMouseEnter={onHover ? () => onHover(i) : undefined}
        >
          <h4>{category.name || category.category}</h4>
          <ul className={styles.itemList}>
            {category.items.map((item, j) => (
              <li key={j}>{renderItem(item, i, j)}</li>
            ))}
          </ul>
        </section>
      ))}
    </section>
  );
}
