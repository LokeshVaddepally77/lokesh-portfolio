import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { SiMysql } from "react-icons/si";
import { TbMessageChatbot } from "react-icons/tb";
import SectionHeader from "../components/SectionHeader.jsx";
import { education, certifications } from "../data/profile.js";

// One relevant icon per certification, matched to its actual subject —
// not a generic Udemy badge repeated three times. OpenAI has no icon in
// this icon set, so its symbol mark is loaded directly (public domain,
// Wikimedia Commons: OpenAI_logo_2025_(symbol).svg).
const certMeta = {
  "SQL – MySQL for Data Analytics": { Icon: SiMysql, color: "#4479A1" },
  "Introduction to OpenAI API": { image: "/openai-symbol.svg" },
  "The Complete Prompt Engineering for AI Bootcamp": {
    Icon: TbMessageChatbot,
    color: "#8b7bff",
  },
};

export default function Education() {
  return (
    <div className="container page">
      <SectionHeader
        page
        eyebrow="Education"
        title={
          <>
            Degrees &amp; <em>credentials</em>
          </>
        }
        description={
          <>
            The formal training behind the work in <Link to="/projects">Projects</Link>.
          </>
        }
      />

      <h2 className="subhead">Degrees</h2>
      <div className="degree-grid">
        {education.map((e) => (
          <article className="card degree" key={e.degree} data-reveal>
            <div className="degree__top">
              <img className="degree__logo" src={e.logo} alt={`${e.school} logo`} />
              {e.date ? <span className="chip">{e.date}</span> : null}
            </div>
            <div>
              <h3 className="degree__title">{e.degree}</h3>
              <p className="degree__school">
                {e.school}
                {e.place ? ` · ${e.place}` : ""}
              </p>
            </div>
            {e.detail ? (
              <ul className="chips">
                <li className="chip">{e.detail}</li>
              </ul>
            ) : null}
          </article>
        ))}
      </div>

      <h2 className="subhead">Certifications</h2>
      <ul className="cert-grid">
        {certifications.map((c) => {
          const meta = certMeta[c.name] ?? {};
          return (
            <li key={c.name} data-reveal>
              <a className="card cert" href={c.file} target="_blank" rel="noreferrer">
                <div className="cert__top">
                  <span
                    className={`cert__icon ${meta.image ? "cert__icon--light" : ""}`}
                    aria-hidden="true"
                  >
                    {meta.image ? (
                      <img src={meta.image} alt="" />
                    ) : meta.Icon ? (
                      <meta.Icon style={{ color: meta.color }} />
                    ) : null}
                  </span>
                  <FiArrowUpRight aria-hidden="true" />
                </div>
                <h3 className="cert__name">{c.name}</h3>
                <span className="cert__issuer">Udemy · View certificate</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
