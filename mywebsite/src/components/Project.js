import { Link } from "react-router-dom";

const Project = ({ project }) => {
  return (
    <div className="project">
      <h3>
        <Link
          to={{
            pathname: project.projectLink,
          }}
          className="proj-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {project.title}
        </Link>
      </h3>
      <p>
        <Link
          to={{ pathname: project.gitLink }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Git Repo
        </Link>
      </p>
      <p>{project.description}</p>
      <p>{project.tools}</p>
    </div>
  );
};

export default Project;
