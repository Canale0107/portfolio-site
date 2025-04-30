// src/react/components/Navbar.jsx
import React from "react";

const items = [
  { href: "#purpose", label: "パーパス" },
  { href: "#values", label: "価値観" },
  { href: "#about-me", label: "わたしについて" },
  { href: "#career-timeline", label: "経歴" },
  { href: "#skills", label: "資格・スキル" },
  { href: "#research", label: "研究経験" },
  { href: "#interests", label: "趣味・関心" },
];

// Navbar.jsx は <ul> だけ描画する
export default function Navbar() {
  return (
    <ul className="navbar__list">
      {items.map(({ href, label }) => (
        <li key={href}>
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>
  );
}
