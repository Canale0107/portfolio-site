import React from "react";
import CareerItem from "./CareerItem";
import career from "@/data/career.json";

export default function Career() {
  return (
    <section
      className="profile-page__section profile-page__wide-section"
      id="career-timeline"
    >
      <h2>
        <span className="sec-en">CAREER</span>
        <span className="sec-ja">経歴</span>
      </h2>
      <ol className="career__timeline">
        {career.map((item, i) => (
          <CareerItem key={i} {...item} />
        ))}
      </ol>
    </section>
  );
}
