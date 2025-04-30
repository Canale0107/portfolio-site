// src/react/App.jsx
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar-tmp/Navbar-tmp";
import Profile from "@/components/Profile-tmp/Profile-tmp";
import Overview from "@/components/Overview-tmp/Overview-tmp";
import Career from "@/components/Career-tmp/Career-tmp";
import Skills from "@/components/Skills-tmp/Skills-tmp";
import Research from "@/components/Research-tmp/Research-tmp";
import Interests from "@/components/Interests-tmp/Interests-tmp";
import Footer from "@/components/Footer-tmp";

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
