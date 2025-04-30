import React, { useState } from "react";
import { SunIcon, MoonIcon } from "@/components/icons";

const items = [
  { href: "#top", label: "Top" },
  { href: "#purpose", label: "パーパス" },
  { href: "#values", label: "価値観" },
  { href: "#about-me", label: "わたしについて" },
  { href: "#career-timeline", label: "経歴" },
  { href: "#skills", label: "資格・スキル" },
  { href: "#research", label: "研究経験" },
  { href: "#interests", label: "趣味・関心" },
];

export default function Navbar({ toggleTheme, theme }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar" role="navigation" aria-label="メインナビゲーション">
      {/* スマホ用：ハンバーガー＋テーマ */}
      <div className="navbar__mobile">
        <button
          className="navbar__toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="メニューを開く"
        >
          ☰
        </button>
        <button
          onClick={toggleTheme}
          className="theme-toggle-btn"
          aria-label="テーマ切替"
        >
          {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>

      {/* PC用 or 展開時のリスト */}
      <ul className={`navbar__list ${isOpen ? "open" : ""}`}>
        {items.map(({ href, label }) => (
          <li key={href}>
            <a href={href} onClick={() => setIsOpen(false)}>
              {label}
            </a>
          </li>
        ))}
        {/* PC時の右端にテーマ切り替え */}
        <li className="theme-toggle-wrapper">
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label="テーマ切替"
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
        </li>
      </ul>
    </nav>
  );
}
