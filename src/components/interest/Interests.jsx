import React from "react";
import HobbyIntro from "./HobbyIntro";
import Themes from "./Themes";
import Influences from "./Influences";
import Quotes from "./Quotes";
import quotes from "@/data/quotes.json";

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

      <h3>趣味</h3>
      <HobbyIntro />

      <h3>関心</h3>
      <Themes />

      <h3>影響を受けた人物・作品</h3>
      <Influences />

      <h3>共鳴する言葉・思想</h3>
      <Quotes quotes={quotes} />
    </section>
  );
}
