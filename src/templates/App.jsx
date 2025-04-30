// src/react/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Profile from "./components/profile/Profile";
import Overview from "./components/overview/Overview";
import Career from "./components/career/Career";
import Skills from "./components/skills/Skills";
import Research from "./components/research/Research";
import Interests from "./components/interest/Interests";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="profile-page">
        <h1 className="visually-hidden">小寺奏怜｜プロフィール</h1>
        <Profile />
        <Overview />
        <Career />
        <Skills />
        <Research />
        <Interests />
      </main>
      <footer className="profile-page__footer">
        <p>© 2025 Kodera Kanare</p>
      </footer>
    </>
  );
}
