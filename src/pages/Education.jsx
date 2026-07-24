import SheetHeader from "../components/SheetHeader.jsx";
import { education, certifications } from "../data/profile.js";
import GradCap from "../components/illustrations/GradCap.jsx";

export default function Education() {
  return (
    <section className="sheet education-page" id="education">
      <SheetHeader index="02" label="QUALIFICATIONS" title="Education" />

      <div className="education-page__intro">
        <GradCap className="education-page__illo" />
        <p className="about__text">
          Degrees, certifications, and the credentials backing up the work in{" "}
          <a href="/projects">Projects</a>.
        </p>
      </div>

      <h3 className="education-page__subhead">Degrees</h3>
      <div className="degree-list">
        {education.map((e) => (
          <div className="degree-card" key={e.degree} data-reveal>
            <div className="degree-card__head">
              <h4>{e.degree}</h4>
              <span className="degree-card__date">{e.date}</span>
            </div>
            <p className="degree-card__school">
              {e.school}
              {e.place ? ` · ${e.place}` : ""}
            </p>
            {e.detail ? <p className="degree-card__detail">{e.detail}</p> : null}
          </div>
        ))}
      </div>

      <h3 className="education-page__subhead">Certifications</h3>
      <ul className="cert-grid">
        {certifications.map((c) => (
          <li className="cert-card" key={c} data-reveal>
            {c}
          </li>
        ))}
      </ul>
    </section>
  );
}
