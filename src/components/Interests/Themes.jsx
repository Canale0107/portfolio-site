import React from "react";
import styles from "./Themes.module.css";
import {
  FaBookOpen,
  FaEye,
  FaRobot,
  FaRegHeart,
  FaMusic,
  FaCity,
  FaCamera,
} from "react-icons/fa6";

const themes = [
  {
    title: "哲学・存在論・視線",
    icon: <FaBookOpen size={24} />,
    text: "哲学、特に存在論（断絶や身体性）、倫理学（他者・応答責任）、認識論（視線・表象）への関心",
  },
  {
    title: "他者と身体・関係性",
    icon: <FaEye size={24} />,
    text: "他者との関係や距離、そしてそのすれ違いに宿る構造的な問い。視線や身体、言葉にならない感情の交差点。",
  },
  {
    title: "人形制作と視線",
    icon: <FaRegHeart size={24} />,
    text: "「視線」と「オブジェ化」という主題との結びつき。",
  },
  {
    title: "懐古趣味・ノスタルジア",
    icon: <FaMusic size={24} />,
    text: "過去に向けられた一方通行の視線＝ノスタルジアとしての営み。記憶の中のイメージとの静かな対話。",
  },
  {
    title: "詩や写真と沈黙",
    icon: <FaCamera size={24} />,
    text: "「伝達のずれ」や「沈黙に近い詩情」を通じて、孤独な自己と世界の接点を見出す試み。",
  },
  {
    title: "都市と記号・考現学",
    icon: <FaCity size={24} />,
    text: "考現学や路上観察。都市に潜む些細なズレや記号を読み取る営み。東京という都市における匿名性や多層的な時間の流れに感じる詩的な呼びかけ。",
  },
  {
    title: "テクノロジーと感情の接点",
    icon: <FaRobot size={24} />,
    text: "感情や社会の無意識とメディアとの関係。",
  },
];

const Themes = () => {
  return (
    <section className={styles.container}>
      <div className={styles.grid}>
        {themes.map((theme, index) => (
          <article key={index} className={styles.card}>
            <div className={styles.icon}>{theme.icon}</div>
            <h3 className={styles.title}>{theme.title}</h3>
            <p className={styles.text}>{theme.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Themes;
