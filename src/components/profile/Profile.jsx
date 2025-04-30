import React from "react";
import ProfileImage from "./ProfileImage";
import CompanyIcon from "./icons/CompanyIcon";
import StatusIcon from "./icons/StatusIcon"
import LocationIcon from "./icons/LocationIcon";
import BirthdayIcon from "./icons/BirthdayIcon";

const items = [
  {
    icon: CompanyIcon,
    content: "富士通株式会社",
  },
  {
    icon: StatusIcon,
    content: "新入社員研修中",
  },
  {
    icon: LocationIcon,
    content: "東京都 大田区",
  },
  {
    icon: BirthdayIcon,
    content: "2001.1.7",
  },
];

export default function Profile() {
  return (
    <section className="profile-page__section profile-page__profile">
      <ProfileImage />
      <h2 className="profile-page__name">
        <div className="profile-page__name-japanese">小寺 奏怜</div>
        <div className="profile-page__name-english">Kodera Kanare</div>
      </h2>
      <ul className="profile-page__profile-details">
        {items.map(({ icon: Icon, content }, i) => (
          <li key={i}>
            <Icon className="profile-page__info-icon" />
            <div className="profile-page__info-text">{content}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}
