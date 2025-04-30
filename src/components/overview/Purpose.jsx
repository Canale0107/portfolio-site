import styles from "./Overview.module.css";

export default function Purpose() {
  return (
    <section id="purpose">
      <h2>
        <span className="sec-en">MY PURPOSE</span>
        <span className="sec-ja">パーパス</span>
      </h2>
      <div className={styles.purpose}>
        <div className={styles.purposeLine}></div>
        <div className={styles.purposeTexts}>
          <p className={styles.purposeJa}>
            問い続ける姿勢を通じて、誠実な対話と深い思考の文化を育てる。
          </p>
          <p className={styles.purposeEn}>
            Foster a culture of sincere dialogue and deep thinking through an
            enduring attitude of questioning.
          </p>
        </div>
      </div>
    </section>
  );
}
