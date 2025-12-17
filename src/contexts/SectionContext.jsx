// src/contexts/SectionContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";

const SectionContext = createContext();

// TOPセクション内のサブセクションID
const TOP_SUBSECTIONS = ["purpose", "values", "about-me"];

// セクションIDを正規化（TOPセクション内のサブセクションは"top"に変換）
const normalizeSectionId = (sectionId) => {
  if (!sectionId || TOP_SUBSECTIONS.includes(sectionId)) {
    return "top";
  }
  return sectionId;
};

export function SectionProvider({ children }) {
  const [activeSection, setActiveSection] = useState(() => {
    // URLハッシュから初期セクションを取得
    const hash = window.location.hash.replace("#", "");
    return normalizeSectionId(hash);
  });

  useEffect(() => {
    // URLハッシュの変更を監視（ブラウザの戻る/進むボタン対応）
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      setActiveSection(normalizeSectionId(hash));
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const changeSection = (sectionId) => {
    const normalizedId = normalizeSectionId(sectionId);
    setActiveSection(normalizedId);
    history.replaceState(null, "", `#${normalizedId}`);
  };

  return (
    <SectionContext.Provider value={{ activeSection, changeSection }}>
      {children}
    </SectionContext.Provider>
  );
}

export const useSection = () => useContext(SectionContext);

