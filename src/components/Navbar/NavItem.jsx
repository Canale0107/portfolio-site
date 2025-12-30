import React from "react";
import classNames from "classnames";
import styles from "./NavItem.module.css";
import { useSection } from "@/contexts/SectionContext";

export default function NavItem({ href, label, onClick, mobileOnly = false }) {
  const targetId = href.replace("#", "");
  const { changeSection, activeSection } = useSection();

  // TOPセクション内のサブセクション（purpose, values, about-me）は
  // すべて "top" セクションとして扱う
  const normalizedTargetId = targetId === "purpose" || targetId === "values" || targetId === "about-me" 
    ? "top" 
    : targetId || "top";
  
  const isActive = activeSection === normalizedTargetId;

  const handleClick = () => {
    changeSection(normalizedTargetId);
    if (onClick) onClick(); // モバイル用の isOpen制御も対応
  };

  return (
    <li className={mobileOnly ? styles.navItemMobileOnly : ""}>
      <button
        onClick={handleClick}
        className={classNames(styles.navItemBtn, {
          [styles.navItemBtnActive]: isActive,
        })}
        aria-label={`${label} セクションに切り替え`}
        aria-current={isActive ? "page" : undefined}
      >
        {label}
      </button>
    </li>
  );
}
