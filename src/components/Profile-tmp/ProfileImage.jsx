import React from "react";
import jpg from "@/assets/profile-pic.jpg";
import webp from "@/assets/profile-pic.webp";
import styles from "./Profile.module.css"

export default function ProfileImage({ theme }) {
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
