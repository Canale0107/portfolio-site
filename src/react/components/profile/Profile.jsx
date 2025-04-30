// src/components/Profile.jsx
import React from "react";
import ProfileImage from "./ProfileImage";
import CompanyIcon from "./icons/CompanyIcon";
import LocationIcon from "./icons/LocationIcon";
import BirthdayIcon from "./icons/BirthdayIcon";

export default function Profile() {
  return (
    <>
      <ProfileImage />
      <h2 className="profile-page__name">
        <div className="profile-page__name-japanese">小寺 奏怜</div>
        <div className="profile-page__name-english">Kodera Kanare</div>
      </h2>
      <ul className="profile-page__profile-details">
        <li>
          <CompanyIcon className="profile-page__info-icon" />
          <div className="profile-page__info-text">
            <div className="company">富士通株式会社</div>
            <div className="status">新入社員研修中</div>
          </div>
        </li>
        <li>
          <LocationIcon className="profile-page__info-icon" />
          <div className="profile-page__info-text">東京都 大田区</div>
        </li>
        <li>
          <BirthdayIcon className="profile-page__info-icon" />
          <div className="profile-page__info-text">2001.1.7</div>
        </li>
      </ul>
    </>
  );
}
