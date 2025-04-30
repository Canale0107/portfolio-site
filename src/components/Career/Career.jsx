import React from "react";
import classNames from "classnames";
import styles from "./Career.module.css";
import CareerItem from "./CareerItem";
import career from "@/data/career.json";

export default function Career() {
  return (
    <section
      className={classNames("profile-page__section", "profile-page__wide-section")}
      id="career-timeline"
    >
      <h2>
        <span className="sec-en">CAREER</span>
        <span className="sec-ja">経歴</span>
      </h2>
      <ol className={styles.timeline}>
        {career.map((item, i) => (
          <CareerItem key={i} {...item} />
        ))}
      </ol>
    </section>
  );
}
