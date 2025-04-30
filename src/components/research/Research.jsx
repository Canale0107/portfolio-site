import React from "react";
import ResearchIntro from "./ResearchIntro";
import ResearchCard from "./ResearchCard";
import researches from "@/data/researches.json";

export default function Research() {
  return (
    <section
      className="profile-page__section profile-page__wide-section"
      id="research"
    >
      <h2>
        <span className="sec-en">RESEARCH EXPERIENCE</span>
        <span className="sec-ja">研究経験</span>
      </h2>
      <ResearchIntro />
      {researches.map((item, i) => (
        <ResearchCard
          key={i}
          {...item}
          title_en={
            item.link ? (
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.title_en}
              </a>
            ) : (
              item.title_en
            )
          }
        />
      ))}
    </section>
  );
}
