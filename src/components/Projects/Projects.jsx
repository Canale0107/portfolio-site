import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "@/data/projects.json";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section
      className="profile-page__section profile-page__wide-section"
      id="projects"
    >
      <h2>
        <span className="sec-en">PROJECTS</span>
        <span className="sec-ja">プロジェクト</span>
      </h2>
      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}

