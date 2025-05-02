// src/react/App.jsx
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Profile from "@/components/Profile/Profile";
import Overview from "@/components/Overview/Overview";
import Career from "@/components/Career/Career";
import Skills from "@/components/Skills/Skills";
import Research from "@/components/Research/Research";
import Interests from "@/components/Interests/Interests";
import Footer from "@/components/Footer/Footer";

import { sectionIds } from "@/constants/navigation";
import useSectionObserver from "@/hooks/useSectionObserver";

export default function App() {
  useSectionObserver(sectionIds);

  return (
    <>
      <Navbar />
      <div id="top" style={{ height: "1px", position: "absolute", top: 0 }} />
      <main className="profile-page">
        <h1 className="visually-hidden">小寺奏怜｜プロフィール</h1>
        <Profile />
        <Overview />
        <Career />
        <Skills />
        <Research />
        <Interests />
      </main>
      <Footer />
    </>
  );
}
