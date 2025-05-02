import React from "react";
import jpg from "@/assets/profile-pic.jpg";
import webp from "@/assets/profile-pic.webp";
import styles from "./ProfileImage.module.css";
import { useTheme } from "@/contexts/ThemeContext";

export default function ProfileImage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <picture>
      <source srcSet={webp} type="image/webp" />
      <img
        src={jpg}
        alt="小寺奏怜のプロフィール写真"
        className={`${styles.profileImage} ${
          isDark ? styles.darkProfileImage : ""
        }`}
      />
    </picture>
  );
}
