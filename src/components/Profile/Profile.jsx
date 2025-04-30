import React from "react";
import classNames from "classnames";

import ProfileImage from "./ProfileImage";
import styles from "./Profile.module.css";

import { IoBusiness } from "react-icons/io5";
import { MdPushPin } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { GiPresent } from "react-icons/gi";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const items = [
  {
    icon: IoBusiness,
    content: "富士通株式会社",
  },
  {
    icon: MdPushPin,
    content: "新入社員研修中",
  },
  {
    icon: FaLocationDot,
    content: "東京都 大田区",
  },
  {
    icon: GiPresent,
    content: "2001.1.7",
  },
];

const socialLinks = [
  {
    icon: FaGithub,
    url: "https://github.com/Canale0107",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/kanare-kodera/",
    label: "LinkedIn",
  },
];

export default function Profile({ theme }) {
  return (
    <section className={classNames("profile-page__section", styles.profile)}>
      <ProfileImage theme={theme} />
      <h2 className={styles.name}>
        <div className={styles.nameJa}>小寺 奏怜</div>
        <div className={styles.nameEn}>Kodera Kanare</div>
      </h2>
      <ul className={styles.details}>
        {items.map(({ icon: Icon, content }, i) => (
          <li key={i} className={styles.detailItem}>
            <Icon className={styles.icon} />
            <div>{content}</div>
          </li>
        ))}
      </ul>

      {/* SNSリンクアイコンボックス */}
      <ul className={styles.socialLinks}>
        {socialLinks.map(({ icon: Icon, url, label }, i) => (
          <li key={i}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
            >
              <Icon className={styles.socialIcon} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
