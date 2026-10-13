import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import ProjectCover from "./ProjectCover.jsx";

// Compact project tile for the home page; links to the full case study.
export default function ProjectCard({ project }) {
  return (
    <Link className="card project-card" to={`/projects#${project.slug}`}>
      <ProjectCover variant={project.cover} number={project.sheet} hue={project.hue} />
      <div className="project-card__body">
        <div>
          <h3 className="project-card__name">{project.name}</h3>
          <p className="project-card__sub">{project.subtitle}</p>
        </div>
        <span className="project-card__arrow" aria-hidden="true">
          <FiArrowUpRight />
        </span>
      </div>
      <ul className="chips">
        {project.stack.slice(0, 3).map((s) => (
          <li className="chip" key={s}>
            {s}
          </li>
        ))}
      </ul>
    </Link>
  );
}
