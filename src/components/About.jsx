import SheetHeader from "./SheetHeader.jsx";
import { profile, education, certifications } from "../data/profile.js";

export default function About() {
  return (
    <section className="sheet about" id="about">
      <SheetHeader index="02" label="PROFILE" title="About" />
      <div className="about__grid">
        <div data-reveal>
          <p className="about__text">{profile.summary}</p>
          <p className="about__text about__text--next">
            Next, I'm looking for a full stack role (.NET/C# or React-heavy)
            where I can keep pairing production feature work with the system
            design fundamentals I've been studying: caching, replication,
            message queues, and API design.
          </p>
        </div>
        <ul className="about__facts" data-reveal>
          <li>
            <span className="about__facts-key">Based in</span>
            {profile.location}
          </li>
          <li>
            <span className="about__facts-key">Authorization</span>
            {profile.authorization}
          </li>
          {education.map((e) => (
            <li key={e.degree}>
              <span className="about__facts-key">{e.degree}</span>
              {e.school}
              {e.date ? ` · ${e.date}` : ""}
            </li>
          ))}
          <li>
            <span className="about__facts-key">Certifications</span>
            {certifications.join(" · ")}
          </li>
        </ul>
      </div>
    </section>
  );
}
