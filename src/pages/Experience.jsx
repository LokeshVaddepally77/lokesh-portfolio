import SheetHeader from "../components/SheetHeader.jsx";
import { timeline } from "../data/profile.js";
import Timeline from "../components/illustrations/Timeline.jsx";

export default function Experience() {
  return (
    <section className="sheet experience-page" id="experience">
      <SheetHeader index="03" label="REVISION HISTORY" title="Experience" />

      <div className="education-page__intro">
        <Timeline className="education-page__illo" />
        <p className="about__text">
          A full stack developer's path through TCS, a relocation, and grad
          school, told the way a revision log would tell it.
        </p>
      </div>

      <div className="exp-list">
        {timeline.map((entry) => (
          <div className="exp-card" key={entry.rev} data-reveal>
            <div className="exp-card__head">
              <div>
                <span className="exp-card__rev">{entry.rev}</span>
                <h4 className="exp-card__title">{entry.title}</h4>
                <p className="exp-card__org">
                  {entry.org}
                  {entry.place ? ` · ${entry.place}` : ""}
                </p>
              </div>
              <span className="exp-card__date">{entry.date}</span>
            </div>
            <details className="exp-card__details">
              <summary>Responsibilities</summary>
              <ul>
                {entry.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </details>
          </div>
        ))}
      </div>
    </section>
  );
}
