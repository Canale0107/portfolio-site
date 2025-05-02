import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { navItems } from "@/constants/navigation";
import HamburgerButton from "./HamburgerButton";
import ThemeToggleButton from "./ThemeToggleButton";

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
        <HamburgerButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
      </div>

      {/* PC用 or 展開時のリスト */}
      <ul className={`${styles.list} ${isOpen ? styles.open : ""}`}>
        {navItems.map(({ href, label, mobileOnly }) => {
          const targetId = href.replace("#", "");

          return (
            <li
              key={href}
              className={mobileOnly ? styles.navItemMobileOnly : ""}
            >
              <button
                onClick={() => {
                  const el = document.getElementById(targetId);
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                    history.replaceState(null, "", href);
                    setIsOpen(false);
                  }
                }}
                className={styles.navItemBtn}
                aria-label={`${label} にスクロール`}
              >
                {label}
              </button>
            </li>
          );
        })}

        {/* テーマ切替ボタンは常時表示 */}
        <li className={styles.themeToggleListItem}>
          <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
        </li>
      </ul>
    </nav>
  );
}
