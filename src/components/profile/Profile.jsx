import React from "react";
import ProfileImage from "./ProfileImage";
import {
  CompanyIcon,
  StatusIcon,
  LocationIcon,
  BirthdayIcon,
  GitHubIcon,
  LinkedInIcon,
} from "@/components/icons";

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

const socialLinks = [
  {
    icon: GitHubIcon,
    url: "https://github.com/Canale0107",
    label: "GitHub",
  },
  {
    icon: LinkedInIcon,
    url: "https://www.linkedin.com/in/kanare-kodera/",
    label: "LinkedIn",
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

      {/* SNSリンクアイコンボックス */}
      <ul className="profile-page__social-links">
        {socialLinks.map(({ icon: Icon, url, label }, i) => (
          <li key={i}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
            >
              <Icon className="profile-page__social-icon" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
