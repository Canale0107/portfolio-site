// src/react/App.jsx
import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Profile from "@/components/Profile/Profile";
import Overview from "@/components/Overview/Overview";
import Career from "@/components/Career/Career";
import Skills from "@/components/Skills/Skills";
import Research from "@/components/Research/Research";
import Interests from "@/components/Interests/Interests";
import Footer from "@/components/Footer/Footer";

import { useSection } from "@/contexts/SectionContext";

export default function App() {
  const { activeSection } = useSection();

  // セクションIDのマッピング
  // TOPセクションは "top" で、Profile + Overview を含む
  const renderSection = () => {
    switch (activeSection) {
      case "top":
      case "purpose":
      case "values":
      case "about-me":
        // TOPセクション（Profile + Overview）を表示
        // purpose, values, about-me は Overview 内のサブセクションなので、TOPセクション全体を表示
        return (
          <>
            <Profile />
            <Overview />
          </>
        );
      case "career-timeline":
        return <Career />;
      case "skills":
        return <Skills />;
      case "research":
        return <Research />;
      case "interests":
        return <Interests />;
      default:
        return (
          <>
            <Profile />
            <Overview />
          </>
        );
    }
  };

  return (
    <>
      <Navbar />
      <div id="top" style={{ height: "1px", position: "absolute", top: 0 }} />
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <main className="profile-page">
          <h1 className="visually-hidden">小寺奏怜｜プロフィール</h1>
          {renderSection()}
        </main>
      </div>
      <Footer />
    </>
  );
}
