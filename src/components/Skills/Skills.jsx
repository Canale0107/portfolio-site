import React from "react";
import certifications from "@/data/certifications.json";
import skills from "@/data/skills.json";
import badges from "@/data/badges.json";
import CertificationList from "./CertificationList";
import BadgeList from "./BadgeList";
import SkillList from "./SkillList";
import levelDefStyles from "./SkillsLevelDefinitions.module.css";

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
      
      {/* レベル定義 */}
      <div className={levelDefStyles.container}>
        <h4 className={levelDefStyles.title}>スキルレベル定義</h4>
        <div className={levelDefStyles.grid}>
          <div className={levelDefStyles.item}>
            <div className={levelDefStyles.levelBadge}>Lv.1</div>
            <p className={levelDefStyles.description}>学習・ハンズオン経験あり</p>
          </div>
          <div className={levelDefStyles.item}>
            <div className={levelDefStyles.levelBadge}>Lv.2</div>
            <p className={levelDefStyles.description}>個人開発・実務で使用経験あり</p>
          </div>
          <div className={levelDefStyles.item}>
            <div className={levelDefStyles.levelBadge}>Lv.3</div>
            <p className={levelDefStyles.description}>要件から自走して実装できる</p>
          </div>
          <div className={levelDefStyles.item}>
            <div className={levelDefStyles.levelBadge}>Lv.4</div>
            <p className={levelDefStyles.description}>設計・改善・レビューができる</p>
          </div>
          <div className={levelDefStyles.item}>
            <div className={levelDefStyles.levelBadge}>Lv.5</div>
            <p className={levelDefStyles.description}>標準化・教育ができる</p>
          </div>
        </div>
      </div>

      <SkillList data={skills} />
    </section>
  );
}
