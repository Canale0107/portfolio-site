import React from "react";
import jpg from "../assets/profile-pic.jpg";
import webp from "../assets/profile-pic.webp";

export default function ProfileImage() {
  return (
    <picture>
      <source srcSet={webp} type="image/webp" />
      <img
        src={jpg}
        alt="小寺奏怜のプロフィール写真"
        className="profile-page__profile-image"
      />
    </picture>
  );
}
