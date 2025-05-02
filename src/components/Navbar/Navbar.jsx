import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";

import useMediaQuery from "@/hooks/useMediaQuery";
import HamburgerButton from "./HamburgerButton";
import ThemeToggleButton from "./ThemeToggleButton";
import NavList from "./NavList";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const isMobile = useMediaQuery("(max-width: 800px)");
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
        <ThemeToggleButton />
      </div>

      {/* ナビゲーションリスト */}
      <AnimatePresence>
        <NavList
          isMobile={isMobile}
          isOpen={isOpen}
          onItemClick={() => setIsOpen(false)}
        />
      </AnimatePresence>
    </nav>
  );
}
