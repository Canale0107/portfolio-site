import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";

import useMediaQuery from "@/hooks/useMediaQuery";
import HamburgerButton from "./HamburgerButton";
import ThemeToggleButton from "./ThemeToggleButton";
import NavList from "./NavList";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const isMobile = useMediaQuery("(max-width: 800px)");
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

    const handleScroll = () => {
      setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside); // ←スマホ用（後述）
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile, isOpen]);

  return (
    <nav
      className={styles.navbar}
      role="navigation"
      aria-label="メインナビゲーション"
      ref={navRef}
    >
      {/* スマホ用：ハンバーガー＋テーマ */}
      <div className={styles.mobile}>
        <HamburgerButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        <ThemeToggleButton />
      </div>

      {/* ナビゲーションリスト */}
      <AnimatePresence>
        {(isMobile && isOpen) || !isMobile ? (
          <NavList
            isMobile={isMobile}
            isOpen={isOpen}
            onItemClick={() => setIsOpen(false)}
          />
        ) : null}
      </AnimatePresence>
    </nav>
  );
}
