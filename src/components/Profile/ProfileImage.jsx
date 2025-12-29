import React, { useEffect } from "react";
import jpg from "@/assets/profile-pic.jpg";
import webp from "@/assets/profile-pic.webp";
import styles from "./ProfileImage.module.css";
import { useTheme } from "@/contexts/ThemeContext";

export default function ProfileImage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // 画像をプリロードして素早く表示
  useEffect(() => {
    const linkWebp = document.createElement("link");
    linkWebp.rel = "preload";
    linkWebp.as = "image";
    linkWebp.href = webp;
    linkWebp.type = "image/webp";
    document.head.appendChild(linkWebp);

    const linkJpg = document.createElement("link");
    linkJpg.rel = "preload";
    linkJpg.as = "image";
    linkJpg.href = jpg;
    document.head.appendChild(linkJpg);
  }, [webp, jpg]);

  return (
    <picture>
      <source srcSet={webp} type="image/webp" />
      <img
        src={jpg}
        alt="小寺奏怜のプロフィール写真"
        className={`${styles.profileImage} ${
          isDark ? styles.darkProfileImage : ""
        }`}
        loading="eager"
        fetchPriority="high"
      />
    </picture>
  );
}
