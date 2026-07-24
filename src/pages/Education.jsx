import SheetHeader from "../components/SheetHeader.jsx";
import { education, certifications } from "../data/profile.js";
import GradCap from "../components/illustrations/GradCap.jsx";
import { SiMysql } from "react-icons/si";
import { TbMessageChatbot } from "react-icons/tb";

// One relevant icon per certification, matched to its actual subject —
// not a generic Udemy badge repeated three times. OpenAI has no icon in
// this icon set, so its symbol mark is loaded directly (public domain,
// Wikimedia Commons: OpenAI_logo_2025_(symbol).svg).
const certMeta = {
  "SQL – MySQL for Data Analytics": { Icon: SiMysql, color: "#4479A1" },
  "Introduction to OpenAI API": { image: "/openai-symbol.svg" },
  "The Complete Prompt Engineering for AI Bootcamp": {
    Icon: TbMessageChatbot,
    color: "#5fe1d6",
  },
};

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
        {education.map((e, i) => (
          <div
            className={`degree-card degree-card--accent-${i % 4}`}
            key={e.degree}
            data-reveal
          >
            {e.logo ? (
              <img className="degree-card__logo" src={e.logo} alt={`${e.school} logo`} />
            ) : null}
            <div className="degree-card__body">
              <span className="degree-card__index">{String(i + 1).padStart(2, "0")}</span>
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
          </div>
        ))}
      </div>

      <h3 className="education-page__subhead">Certifications</h3>
      <ul className="cert-grid">
        {certifications.map((c, i) => {
          const meta = certMeta[c.name] ?? {};
          return (
            <li key={c.name} data-reveal>
              <a
                className={`cert-card cert-card--accent-${i % 4}`}
                href={c.file}
                target="_blank"
                rel="noreferrer"
              >
                {meta.image ? (
                  <img
                    className="cert-card__icon cert-card__icon--badge"
                    src={meta.image}
                    alt=""
                    aria-hidden="true"
                  />
                ) : meta.Icon ? (
                  <meta.Icon
                    className="cert-card__icon"
                    style={{ color: meta.color }}
                    aria-hidden="true"
                  />
                ) : null}
                <div>
                  <p className="cert-card__name">{c.name}</p>
                  <span className="cert-card__issuer">Udemy · View certificate ↗</span>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
