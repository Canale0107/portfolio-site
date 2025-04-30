import React from "react";
import ResearchIntro from "./ResearchIntro";
import ResearchCard from "./ResearchCard";

const researchItems = [
  {
    title: "Wireless Sensingによる触覚センシング (2025.1)",
    description: `WiFiのCSI（Channel State Information）を用い、人や物体の動き・変形を非接触でセンシングする研究に取り組みました。<br />
    筒状物体の変形推定に関する成果を以下の国際会議にて発表しました。`,
    authors: "K. Kodera and T. Nishio,",
    title_en:
      '"Estimating deformation of tubular object from WiFi CSI toward tactile sensing,"',
    venue:
      "in Proceedings of the 2025 IEEE 22nd Consumer Communications & Networking Conference (CCNC)",
    location: "Las Vegas, NV, USA, 2025, pp. 671–676.",
  },
  {
    title: "Split Computingデモシステム開発 (2024.1)",
    description: `クラウドとエッジに分散した推論システム（Split Computing）のデモシステム開発に従事しました。<br />
    プライバシー保護型画像認識のデモ成果は、以下の国際会議にて発表されました。`,
    authors:
      "T. Nishio, K. Yorita, S. Ohta, K. Maejima, K. Kodera, Y. Horikawa, and K. Fukui,",
    title_en: (
      <a
        href="https://doi.org/10.1109/CCNC51664.2024.10454718"
        target="_blank"
        rel="noopener noreferrer"
      >
        "Demo: split computing-based privacy-preserving image classification and
        object detection,"
      </a>
    ),
    venue:
      "in Proceedings of the 2024 IEEE 21st Consumer Communications & Networking Conference (CCNC)",
    location: "Las Vegas, NV, USA, 2024, pp. 1092–1093.",
  },
];

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
      {researchItems.map((item, i) => (
        <ResearchCard key={i} {...item} />
      ))}
    </section>
  );
}
