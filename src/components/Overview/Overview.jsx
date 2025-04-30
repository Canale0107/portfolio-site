import React from "react";
import classNames from "classnames";
import styles from "./Overview.module.css";

import Purpose from "./Purpose";
import Values from "./Values";
import AboutMe from "./AboutMe";

export default function Overview() {
  return (
    <section
      className={classNames("profile-page__section", styles.overview)}
      id="react-overview"
    >
      <Purpose />
      <Values />
      <AboutMe />
    </section>
  );
}
