import React from "react";

const influences = {
  思索者: [
    "Georges Bataille（断絶と欲望、禁忌と祝祭。その深淵に共鳴）",
    "Sigmund Freud（欲望と無意識、理性の背後に潜む衝動の構造的探究）",
    "Roland Barthes（言語と記号、視線の鋭利な分析と思索の優美）",
    "Walter Benjamin（モノと記憶、都市に潜む哀惜の感触）",
    "巖谷國士（夢と無意識の回廊としてのシュルレアリスム）",
  ],
  作家: [
    "澁澤龍彥（異端と耽美、禁忌と美学の系譜）",
    "寺山修司（感情と演出の混沌）",
    "唐十郎 (都市の裂け目から溢れ出す夢と身体の演劇)",
    "安部公房（存在の不確かさ、都市的異化の詩学）",
    "三島由紀夫（美と破滅、肉体と観念の交差点）",
    "谷崎潤一郎（官能と美意識、倒錯と静寂の間に）",
    "夢野久作（夢と狂気が交錯する異界の寓話）",
  ],
  詩人: ["萩原朔太郎（都市と憂愁）"],
  アーティスト: ["宇野亞喜良（耽美の線描）"],
  音楽: [
    "The Beatles（大衆と芸術、その間隙に揺れる叙情）",
    "Phil Spector（音の壁、その向こうの情念）",
    "Bob Dylan（言葉と抵抗、歌の中の沈黙）",
    "Pink Floyd（時と空間、音響による内的宇宙の編成）",
    "大瀧詠一（記憶と郷愁、ポップスの私的神話）",
  ],
};

export default function Influences() {
  return (
    <ul>
      {Object.entries(influences).map(([group, items]) => (
        <li key={group}>
          {group}:
          <ul>
            {items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
