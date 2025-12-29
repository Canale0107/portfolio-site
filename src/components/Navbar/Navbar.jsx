import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";

import useMediaQuery from "@/hooks/useMediaQuery";
import HamburgerButton from "./HamburgerButton";
import ThemeToggleButton from "./ThemeToggleButton";
import NavList from "./NavList";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const isMobile = useMediaQuery("(max-width: 900px)");
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null); // ナビゲーション領域の参照

  // 外側クリックで閉じる
  useEffect(() => {
    if (!isMobile || !isOpen) return;

    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside); // ←スマホ用（後述）

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMobile, isOpen]);

  return (
    <nav
      className={styles.navbar}
      role="navigation"
      aria-label="メインナビゲーション"
      ref={navRef}
    >
      <div className={styles.navbarInner}>
        {/* モバイル時：左端にハンバーガー */}
        {isMobile && (
          <div className={styles.iconLeft}>
            <HamburgerButton
              isOpen={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        )}

        {/* 中央：NavList */}
        <AnimatePresence>
          {(isMobile && isOpen) || !isMobile ? (
            <div className={styles.navListWrapper}>
              <NavList
                isMobile={isMobile}
                isOpen={isOpen}
                onItemClick={() => setIsOpen(false)}
              />
            </div>
          ) : null}
        </AnimatePresence>

        {/* 常に右端：テーマ切り替え */}
        <div className={styles.iconRight}>
          <ThemeToggleButton />
        </div>
      </div>
    </nav>
  );
}
