// src/App.jsx
import ProfileImage from "./components/ProfileImage";
import Career from "./components/Career";
import Skills from "./components/Skills";
import Overview from "./components/Overview";
// Research, Interests なども追加予定

export default function App() {
  return (
    <>
      <header>（Navbarを将来ここに）</header>
      <main className="profile-page">
        <h1 className="visually-hidden">小寺奏怜｜プロフィール</h1>
        <ProfileImage />
        <Overview />
        <Career />
        <Skills />
        {/* Research, Interests をここに */}
      </main>
      <footer className="profile-page__footer">
        <p>© 2025 Kodera Kanare</p>
      </footer>
    </>
  );
}
