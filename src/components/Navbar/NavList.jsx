import React from "react";
import { motion } from "framer-motion";

import { navItems } from "@/constants/navigation";
import ThemeToggleButton from "./ThemeToggleButton";
import NavItem from "./NavItem";
import styles from "./Navbar.module.css";

const menuVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

export default function NavList({ isMobile, isOpen, onItemClick }) {
  if (isMobile && !isOpen) return null;

  const Wrapper = isMobile ? motion.ul : "ul";
  const wrapperProps = isMobile
    ? {
        initial: "hidden",
        animate: "visible",
        exit: "exit",
        variants: menuVariants,
        transition: { duration: 0.3 },
      }
    : {};

  const items = isMobile
    ? navItems
    : navItems.filter(({ mobileOnly }) => !mobileOnly);

  return (
    <Wrapper className={styles.list} {...wrapperProps}>
      {items.map(({ href, label, mobileOnly }) => (
        <NavItem
          key={href}
          href={href}
          label={label}
          mobileOnly={mobileOnly}
          onClick={isMobile ? onItemClick : undefined}
        />
      ))}
      <li className={styles.navItemThemeToggle}>
        <ThemeToggleButton />
      </li>
    </Wrapper>
  );
}
