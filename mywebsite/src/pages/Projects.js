import React from "react";
import Project from "../components/Project";
import { MyProjects } from "../MyProjects";

const Projects = () => {
  return (
    <section className="resume-section">
      <h1>Projects</h1>
      {MyProjects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </section>
  );
};

export default Projects;
