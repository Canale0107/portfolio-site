import React, { useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import styles from "./Navbar.module.css";
import { navItems } from "@/constants/navigation";

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
        <div
          className={`${styles.btnTrigger} ${isOpen ? styles.active : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="メニューを開く"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
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
        {navItems.map(({ href, label }) => {
          const targetId = href.replace("#", ""); // "#about-me" → "about-me"
          return (
            <li key={href}>
              <button
                onClick={() => {
                  const el = document.getElementById(targetId);
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                    history.replaceState(null, "", href);
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
