import React from "react";
import HobbyIntro from "./HobbyIntro";
import Themes from "./Themes";
import Influences from "./Influences";
import Quotes from "./Quotes";
import influences from "@/data/influences.json";
import quotes from "@/data/quotes.json";
import styles from "./Interests.module.css";

export default function Interests() {
  return (
    <section
      className="profile-page__section profile-page__wide-section"
      id="interests"
    >
      <h2>
        <span className="sec-en">INTERESTS</span>
        <span className="sec-ja">趣味・関心</span>
      </h2>

      <div className={styles.subsection}>
        <h3 className={styles.sectionTitle}>趣味</h3>
        <HobbyIntro />
      </div>

      <div className={styles.subsection}>
        <h3 className={styles.sectionTitle}>関心</h3>
        <Themes />
      </div>

      <div className={styles.subsection}>
        <h3 className={styles.sectionTitle}>影響を受けた人物・作品</h3>
        <Influences influences={influences} />
      </div>

      <div className={styles.subsection}>
        <h3 className={styles.sectionTitle}>共鳴する言葉・思想</h3>
        <Quotes quotes={quotes} />
      </div>
    </section>
  );
}
