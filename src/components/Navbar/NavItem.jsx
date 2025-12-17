import React from "react";
import styles from "./NavItem.module.css";
import { useSection } from "@/contexts/SectionContext";

export default function NavItem({ href, label, onClick, mobileOnly = false }) {
  const targetId = href.replace("#", "");
  const { changeSection } = useSection();

  const handleClick = () => {
    // TOPセクション内のサブセクション（purpose, values, about-me）は
    // すべて "top" セクションとして扱う
    const sectionId = targetId === "purpose" || targetId === "values" || targetId === "about-me" 
      ? "top" 
      : targetId || "top";
    
    changeSection(sectionId);
    if (onClick) onClick(); // モバイル用の isOpen制御も対応
  };

  return (
    <li className={mobileOnly ? styles.navItemMobileOnly : ""}>
      <button
        onClick={handleClick}
        className={styles.navItemBtn}
        aria-label={`${label} セクションに切り替え`}
      >
        {label}
      </button>
    </li>
  );
}
