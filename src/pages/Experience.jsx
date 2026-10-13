import { FiArrowUpRight, FiAward, FiBriefcase, FiDownload } from "react-icons/fi";
import SectionHeader from "../components/SectionHeader.jsx";
import { profile, timeline } from "../data/profile.js";

const kinds = {
  work: { label: "Work", Icon: FiBriefcase },
  education: { label: "Education", Icon: FiAward },
};

export default function Experience() {
  // Most recent first.
  const entries = [...timeline].reverse();

  return (
    <div className="container page">
      <SectionHeader
        page
        eyebrow="Experience"
        title={
          <>
            The path <em>so far</em>
          </>
        }
        description="A full stack developer's path through TCS, a move to Canada, grad school, and a capstone role at Aisha Home Services."
        action={
          <a className="btn btn--ghost" href={profile.resumeFile} download>
            <FiDownload aria-hidden="true" /> Download résumé
          </a>
        }
      />

      <ol className="timeline">
        {entries.map((entry) => {
          const { label, Icon } = kinds[entry.kind] ?? kinds.work;
          return (
            <li className="timeline__item" key={entry.rev} data-reveal>
              <div className="timeline__meta">
                <span className="timeline__date">{entry.date}</span>
                {entry.place ? <span className="timeline__place">{entry.place}</span> : null}
              </div>
              <span className="timeline__marker" aria-hidden="true">
                <Icon />
              </span>
              <article className="card timeline__card">
                <span className="chip">{label}</span>
                <h2 className="timeline__title">{entry.title}</h2>
                <p className="timeline__org">{entry.org}</p>
                {entry.blurb ? <p className="timeline__blurb">{entry.blurb}</p> : null}
                <ul className="bullets">
                  {entry.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                {entry.live ? (
                  <div className="actions timeline__actions">
                    <a
                      className="btn btn--primary btn--sm"
                      href={entry.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View live site <FiArrowUpRight aria-hidden="true" />
                    </a>
                  </div>
                ) : null}
              </article>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
