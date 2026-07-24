import SheetHeader from "./SheetHeader.jsx";
import { projects } from "../data/profile.js";

export default function Projects() {
  return (
    <section className="sheet work" id="work">
      <SheetHeader index="01" label="DRAWINGS" title="Selected work" />
      <div className="work__list">
        {projects.map((p) => (
          <article className="drawing" key={p.sheet} data-reveal>
            <div className="drawing__corner" aria-hidden="true" />
            <header className="drawing__header">
              <span className="drawing__sheet">SHEET {p.sheet}</span>
              <h3 className="drawing__name">{p.name}</h3>
              <p className="drawing__subtitle">{p.subtitle}</p>
            </header>

            <dl className="drawing__facts">
              <div>
                <dt>Problem</dt>
                <dd>{p.problem}</dd>
              </div>
              <div>
                <dt>Role</dt>
                <dd>{p.role}</dd>
              </div>
              <div>
                <dt>Outcome</dt>
                <dd>{p.outcome}</dd>
              </div>
            </dl>

            <footer className="drawing__specs">
              <span className="drawing__specs-label">Built with</span>
              <ul className="drawing__stack">
                {p.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </footer>

            <div className="drawing__links">
              {p.links?.live ? (
                <a
                  className="drawing__link drawing__link--live"
                  href={p.links.live}
                  target="_blank"
                  rel="noreferrer"
                >
                  View live ↗
                </a>
              ) : null}
              {p.links?.github ? (
                <a
                  className="drawing__link drawing__link--source"
                  href={p.links.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  Source ↗
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
