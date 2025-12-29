// src/constants/navigation.js
export const navItems = [
  { href: "#top", label: "TOP" },
  { href: "#purpose", label: "パーパス", mobileOnly: true },
  { href: "#values", label: "価値観", mobileOnly: true },
  { href: "#about-me", label: "わたしについて", mobileOnly: true },
  { href: "#career-timeline", label: "経歴" },
  { href: "#skills", label: "スキル" },
  { href: "#research", label: "研究経験" },
  { href: "#projects", label: "プロジェクト" },
  { href: "#interests", label: "趣味・関心" },
];

// idだけ抽出したい場合
export const sectionIds = navItems.map(({ href }) => href.replace("#", ""));
