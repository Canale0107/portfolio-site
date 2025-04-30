// src/react/App.jsx
import React, { useEffect, useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import Profile from "@/components/profile/Profile";
import Overview from "@/components/overview/Overview";
import Career from "@/components/career/Career";
import Skills from "@/components/skills/Skills";
import Research from "@/components/research/Research";
import Interests from "@/components/interests/Interests";
import Footer from "@/components/Footer";

export default function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <main className="profile-page" id="top">
        <h1 className="visually-hidden">小寺奏怜｜プロフィール</h1>
        <Profile theme={theme} />
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
