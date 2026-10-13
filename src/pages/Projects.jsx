import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import SectionHeader from "../components/SectionHeader.jsx";
import ProjectCover from "../components/ProjectCover.jsx";
import { projects } from "../data/profile.js";

export default function Projects() {
  return (
    <div className="container page">
      <SectionHeader
        page
        eyebrow="Selected work"
        title={
          <>
            Case <em>studies</em>
          </>
        }
        description="Three builds, each designed and built solo: the problem, my role, and what came out the other end."
      />

      <div className="cases">
        {projects.map((p) => (
          <article className="card case" id={p.slug} key={p.slug} data-reveal>
            <ProjectCover variant={p.cover} number={p.sheet} hue={p.hue} />

            <div className="case__body">
              <div>
                <p className="eyebrow">{p.subtitle}</p>
                <h2 className="case__name">{p.name}</h2>
                <p className="case__role">{p.role}</p>
              </div>

              <dl className="case__facts">
                <div>
                  <dt>Problem</dt>
                  <dd>{p.problem}</dd>
                </div>
                <div>
                  <dt>Outcome</dt>
                  <dd>{p.outcome}</dd>
                </div>
              </dl>

              <ul className="chips" aria-label="Built with">
                {p.stack.map((s) => (
                  <li className="chip" key={s}>
                    {s}
                  </li>
                ))}
              </ul>

              {p.links?.live || p.links?.github ? (
                <div className="actions">
                  {p.links.live ? (
                    <a
                      className="btn btn--primary btn--sm"
                      href={p.links.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View live <FiArrowUpRight aria-hidden="true" />
                    </a>
                  ) : null}
                  {p.links.github ? (
                    <a
                      className="btn btn--ghost btn--sm"
                      href={p.links.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FiGithub aria-hidden="true" /> Source
                    </a>
                  ) : null}
                </div>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
