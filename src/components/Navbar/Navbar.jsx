import React, { useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import styles from "./Navbar.module.css";

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
    <nav
      className={styles.navbar}
      role="navigation"
      aria-label="メインナビゲーション"
    >
      {/* スマホ用：ハンバーガー＋テーマ */}
      <div className={styles.mobile}>
        <button
          className={styles.toggle}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="メニューを開く"
        >
          ☰
        </button>
        <button
          onClick={toggleTheme}
          className={styles.themeToggleBtn}
          aria-label="テーマ切替"
        >
          {theme === "dark" ? <FiSun /> : <FiMoon className={styles.moon} />}
        </button>
      </div>

      {/* PC用 or 展開時のリスト */}
      <ul className={`${styles.list} ${isOpen ? styles.open : ""}`}>
        {items.map(({ href, label }) => {
          const targetId = href.replace("#", ""); // "#about-me" → "about-me"
          return (
            <li key={href}>
              <button
                onClick={() => {
                  const el = document.getElementById(targetId);
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                    setIsOpen(false); // モバイル用に閉じる
                  }
                }}
                className={styles.navItemBtn} // 必要ならスタイル追加
                aria-label={`${label} にスクロール`}
              >
                {label}
              </button>
            </li>
          );
        })}
        <li className={`${styles.themeToggleListItem}`}>
          <button
            onClick={toggleTheme}
            className={styles.themeToggleBtn}
            aria-label="テーマ切替"
          >
            {theme === "dark" ? <FiSun /> : <FiMoon className={styles.moon} />}
          </button>
        </li>
      </ul>
    </nav>
  );
}
