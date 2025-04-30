import React from "react";
import certifications from "@/data/certifications.json";
import skills from "@/data/skills.json";
import CertificationList from "./CertificationList";
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

      <h3>スキル</h3>
      <SkillList data={skills} />
    </section>
  );
}
