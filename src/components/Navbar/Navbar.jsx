import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { navItems } from "@/constants/navigation";
import HamburgerButton from "./HamburgerButton";
import ThemeToggleButton from "./ThemeToggleButton";
import { useTheme } from "@/contexts/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import useMediaQuery from "@/hooks/useMediaQuery";

const menuVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

export default function Navbar() {
  const isMobile = useMediaQuery("(max-width: 800px)");
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

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

      {/* PC用 or 展開時のリスト */}
      <AnimatePresence>
        {isMobile ? (
          isOpen && (
            <motion.ul
              className={styles.list}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
              transition={{ duration: 0.3 }}
            >
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
              <li className={styles.navItemThemeToggle}>
                <ThemeToggleButton />
              </li>
            </motion.ul>
          )
        ) : (
          <ul className={styles.list}>
            {navItems
              .filter(({ mobileOnly }) => !mobileOnly)
              .map(({ href, label }) => {
                const targetId = href.replace("#", "");
                return (
                  <li key={href}>
                    <button
                      onClick={() => {
                        const el = document.getElementById(targetId);
                        if (el) {
                          el.scrollIntoView({ behavior: "smooth" });
                          history.replaceState(null, "", href);
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
            <li className={styles.navItemThemeToggle}>
              <ThemeToggleButton />
            </li>
          </ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
