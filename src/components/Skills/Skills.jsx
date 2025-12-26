import React from "react";
import certifications from "@/data/certifications.json";
import skills from "@/data/skills.json";
import badges from "@/data/badges.json";
import CertificationList from "./CertificationList";
import BadgeList from "./BadgeList";
import SkillList from "./SkillList";

export default function Skills() {
  return (
    <section
      className="profile-page__section profile-page__wide-section"
      id="skills"
    >
      <h2>
        <span className="sec-en">SKILLS</span>
        <span className="sec-ja">資格・スキル</span>
      </h2>

      <h3>保有資格</h3>
      <CertificationList data={certifications} />

      {badges && badges.length > 0 && (
        <>
          <h3>保有バッジ</h3>
          <BadgeList data={badges} />
        </>
      )}

      <h3>スキル</h3>
      <SkillList data={skills} />
    </section>
  );
}
