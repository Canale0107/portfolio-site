import React from "react";
import styles from "./NavItem.module.css";

export default function NavItem({ href, label, onClick, mobileOnly = false }) {
  const targetId = href.replace("#", "");

  return (
    <li className={mobileOnly ? styles.navItemMobileOnly : ""}>
      <button
        onClick={() => {
          const el = document.getElementById(targetId);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
            history.replaceState(null, "", href);
            if (onClick) onClick(); // モバイル用の isOpen制御も対応
          }
        }}
        className={styles.navItemBtn}
        aria-label={`${label} にスクロール`}
      >
        {label}
      </button>
    </li>
  );
}
