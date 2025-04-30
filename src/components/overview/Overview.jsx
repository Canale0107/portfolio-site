import React from "react";
import Purpose from "./Purpose";
import Values from "./Values";
import AboutMe from "./AboutMe";

export default function Overview() {
  return (
    <section
      className="profile-page__section profile-page__overview"
      id="react-overview"
    >
      <Purpose />
      <Values />
      <AboutMe />
    </section>
  );
}
