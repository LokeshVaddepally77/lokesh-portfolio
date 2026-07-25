import { profile, mailtoLink } from "../data/profile.js";
import { techIcons, noIconSkills } from "../data/techIcons.js";
import Workstation from "../components/illustrations/Workstation.jsx";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero__corner hero__corner--tl" aria-hidden="true" />
        <div className="hero__corner hero__corner--tr" aria-hidden="true" />
        <div className="hero__corner hero__corner--bl" aria-hidden="true" />
        <div className="hero__corner hero__corner--br" aria-hidden="true" />

        <div className="hero__grid">
          <div>
            <p className="hero__eyebrow">Full stack developer</p>
            <h1 className="hero__headline">{profile.name}</h1>
            <p className="hero__tagline">{profile.tagline}</p>
            <p className="hero__summary">{profile.summary}</p>
            <p className="hero__summary">
              Next, I'm looking for a full stack role (.NET/C# or React-heavy)
              where I can keep pairing production feature work with the system
              design fundamentals I've been studying: caching, replication,
              message queues, and API design.
            </p>

            <div className="hero__actions">
              <a className="btn btn--primary" href="/projects">
                View my work
              </a>
              <a className="btn btn--ghost" href={profile.resumeFile} download>
                Résumé
              </a>
              <a className="btn btn--ghost" href={mailtoLink}>
                Contact me
              </a>
            </div>

            <ul className="hero__social">
              <li>
                <a href={mailtoLink}>Email</a>
              </li>
              <li>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
              {profile.github ? (
                <li>
                  <a href={profile.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </li>
              ) : null}
            </ul>
          </div>

          <Workstation className="hero__illo" />
        </div>
      </section>

      <section className="sheet stack" id="stack">
        <div className="sheet-header" data-reveal>
          <span className="sheet-header__index">SHEET 01/06</span>
          <span className="sheet-header__rule" aria-hidden="true" />
          <span className="sheet-header__label">SPECIFICATIONS</span>
          <h2 className="sheet-header__title">What I build with</h2>
        </div>

        <ul className="tech-grid" data-reveal>
          {techIcons.map(({ name, Icon, color }, i) => (
            <li
              className="tech-grid__item"
              key={name}
              style={{ transitionDelay: `${i * 25}ms` }}
            >
              <Icon aria-hidden="true" style={{ color }} />
              <span>{name}</span>
            </li>
          ))}
        </ul>

        <p className="stack__also-label">Also working with</p>
        <ul className="skills__row">
          {noIconSkills.map((item) => (
            <li className="skills__chip" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
