import React from "react";
import CareerItem from "./CareerItem";

const careerData = [
  {
    date: "2019.3",
    title: "渋谷教育学園幕張高等学校 卒業",
  },
  {
    date: "2023.3",
    title: "東京工業大学 工学院 情報通信系 卒業",
    descriptions: [
      "情報通信工学を専攻し、無線通信、信号処理、ネットワークシステムに特化した課程を卒業。",
      "西尾研究室に所属し、卒業研究ではWi-FiのCSI（チャネル状態情報）を用いた屋内人物位置推に取り組み、機械学習と信号処理の技術を統合して実現。",
    ],
  },
  {
    date: "2025.3",
    title: "東京科学大学大学院 工学院 情報通信系 情報通信コース 修了",
    descriptions: [
      "情報通信工学を専攻し、無線センシング、機械学習、信号処理に重点を置いた課程を修了。",
      "西尾研究室に所属し、Wi-FiのCSIを用いたチューブ状物体の変形推定に取り組み、ソフトロボットにおける触覚センシングのために、CSIデータから物体形状を二値画像として予測する深層学習モデルを開発。",
    ],
  },
  {
    date: "2025.4",
    title: "富士通株式会社 入社",
    descriptions: [
      "技術の社会実装を通して世の中に変化をもたらすことに関心を持ち、SE職を選択。",
      "現在は導入研修を受講中であり、今後の配属に向けたRole別研修を控えています。",
      "技術的専門性を深めつつ、社会課題を捉え直す視点や、構造を見つめるまなざしを活かし、SEとしての本質的価値を追求していくことを目指しています。",
    ],
  },
];

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
        {careerData.map((item, i) => (
          <CareerItem key={i} {...item} />
        ))}
      </ol>
    </section>
  );
}
