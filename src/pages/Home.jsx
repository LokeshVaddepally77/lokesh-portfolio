import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiClock,
  FiDownload,
  FiMail,
  FiMapPin,
  FiShield,
} from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import {
  profile,
  mailtoLink,
  projects,
  timeline,
  education,
  skillGroups,
} from "../data/profile.js";
import { techIcons, noIconSkills } from "../data/techIcons.js";
import SectionHeader from "../components/SectionHeader.jsx";
import ProjectCard from "../components/ProjectCard.jsx";

const timeFormat = new Intl.DateTimeFormat("en-CA", {
  hour: "numeric",
  minute: "2-digit",
  timeZone: "America/Vancouver",
  timeZoneName: "short",
});

function VancouverTime() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(id);
  }, []);
  return <time dateTime={now.toISOString()}>{timeFormat.format(now)}</time>;
}

function TechPill({ name, Icon, color, dup }) {
  return (
    <li className="tech" aria-hidden={dup || undefined} data-dup={dup || undefined}>
      <Icon aria-hidden="true" style={color ? { color } : undefined} />
      {name}
    </li>
  );
}

// Each row renders its list twice so the CSS loop can scroll seamlessly; the
// copy is hidden from assistive tech.
function Marquee({ items, reverse = false }) {
  return (
    <div className={`marquee ${reverse ? "marquee--reverse" : ""}`}>
      <ul className="marquee__track">
        {items.map((t) => (
          <TechPill key={t.name} {...t} />
        ))}
        {items.map((t) => (
          <TechPill key={`${t.name}-dup`} {...t} dup />
        ))}
      </ul>
    </div>
  );
}

const half = Math.ceil(techIcons.length / 2);
const systemDesign = skillGroups.find((g) => g.label === "System Design")?.items ?? [];
const degree = education[0];

export default function Home() {
  return (
    <>
      <section className="container" aria-label="Introduction">
        <div className="bento">
          <div className="card tile tile--intro" style={{ "--i": 0 }}>
            <div>
              <span className="badge">
                <span className="badge__dot" aria-hidden="true" />
                Available for full stack roles
              </span>
              <h1 className="hero__title">
                Building <em>reliable</em> full stack products with .NET &amp; React.
              </h1>
              <p className="hero__summary">
                I'm {profile.name.split(" ")[0]}, a {profile.role.toLowerCase()} with ~3
                years shipping production features in ASP.NET Core, React, and Node.js,
                now pairing that with a solid grounding in system design.
              </p>
            </div>
            <div className="actions">
              <Link className="btn btn--primary" to="/projects">
                View my work <FiArrowUpRight aria-hidden="true" />
              </Link>
              <a className="btn btn--ghost" href={profile.resumeFile} download>
                <FiDownload aria-hidden="true" /> Résumé
              </a>
            </div>
          </div>

          <div className="card tile tile--profile" style={{ "--i": 1 }}>
            <div className="profile__head">
              <img className="avatar" src="/lokesh_pic.jpeg" alt="" width="64" height="64" />
              <div>
                <p className="profile__name">{profile.name}</p>
                <p className="profile__role">{profile.role}</p>
              </div>
            </div>
            <ul className="profile__meta">
              <li>
                <span>
                  <FiMapPin aria-hidden="true" /> Based in
                </span>
                <span>Vancouver, BC</span>
              </li>
              <li>
                <span>
                  <FiClock aria-hidden="true" /> Local time
                </span>
                <span>
                  <VancouverTime />
                </span>
              </li>
              <li>
                <span>
                  <FiShield aria-hidden="true" /> Work status
                </span>
                <span>Canadian work authorization</span>
              </li>
            </ul>
          </div>

          <div className="card tile tile--stats" style={{ "--i": 2 }}>
            <div>
              <span className="stat__value">~3 yrs</span>
              <span className="stat__label">Professional experience</span>
            </div>
            <div>
              <span className="stat__value">{projects.length}</span>
              <span className="stat__label">Full stack projects</span>
            </div>
            <div>
              <span className="stat__value">M.S.</span>
              <span className="stat__label">Information Systems</span>
            </div>
          </div>

          <div className="card tile tile--explore" style={{ "--i": 3 }}>
            <span className="tile__label">Currently deepening</span>
            <ul className="chips">
              {systemDesign.map((item) => (
                <li className="chip" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <Link className="card tile tile--edu" to="/education" style={{ "--i": 4 }}>
            <img src={degree.logo} alt="" width="64" height="64" />
            <div>
              <span className="tile__label">Education · {degree.date}</span>
              <p className="tile__title">{degree.degree}</p>
              <p className="tile__sub">{degree.school}</p>
            </div>
          </Link>

          <div className="card tile tile--connect" style={{ "--i": 5 }}>
            <span className="tile__label">Connect</span>
            <ul>
              <li>
                <a className="icon-btn" href={mailtoLink} aria-label="Email">
                  <FiMail aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  className="icon-btn"
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn aria-hidden="true" />
                </a>
              </li>
              {profile.github ? (
                <li>
                  <a
                    className="icon-btn"
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                  >
                    <FaGithub aria-hidden="true" />
                  </a>
                </li>
              ) : null}
            </ul>
          </div>
        </div>
      </section>

      <section className="marquee-wrap" aria-label="Technologies I build with">
        <Marquee items={techIcons.slice(0, half)} />
        <Marquee items={techIcons.slice(half)} reverse />
      </section>

      <section className="section container" id="about">
        <SectionHeader
          eyebrow="About"
          title={
            <>
              Production features, grounded in <em>system design</em>.
            </>
          }
        />
        <div className="about" data-reveal>
          <p className="about__statement">
            Full stack developer across .NET/C# and React.{" "}
            <span>
              Nearly three years at Tata Consultancy Services building and shipping features
              for Infineon Technologies, then an M.S. in Information Systems at
              Northeastern University in Vancouver.
            </span>
          </p>
          <div className="about__side">
            <p>{profile.summary}</p>
            <p>
              Next, I'm looking for a full stack role (.NET/C# or React-heavy) where I
              can keep pairing production feature work with the system design
              fundamentals I've been studying: caching, replication, message queues,
              and API design.
            </p>
            <div>
              <span className="tile__label">Also working with</span>
              <ul className="chips">
                {noIconSkills.map((item) => (
                  <li className="chip" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight container" id="work">
        <SectionHeader
          eyebrow="Selected work"
          title={
            <>
              Things I've <em>built</em>
            </>
          }
          action={
            <Link className="text-link" to="/projects">
              All case studies <FiArrowRight aria-hidden="true" />
            </Link>
          }
        />
        <div className="project-grid" data-reveal>
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      <section className="section section--tight container" id="experience">
        <SectionHeader
          eyebrow="Experience"
          title={
            <>
              Where I've <em>been</em>
            </>
          }
          action={
            <Link className="text-link" to="/experience">
              Full timeline <FiArrowRight aria-hidden="true" />
            </Link>
          }
        />
        <div className="rows" data-reveal>
          {[...timeline].reverse().map((entry) => (
            <Link className="row" to="/experience" key={entry.rev}>
              <h3 className="row__title">{entry.title}</h3>
              <span className="row__org">{entry.org}</span>
              <span className="row__date">{entry.date}</span>
              <FiArrowUpRight className="row__arrow" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </section>

      <section className="section container">
        <div className="cta" data-reveal>
          <p className="eyebrow">Open to opportunities</p>
          <h2 className="cta__title">
            Have a role in mind? <em>Let's talk.</em>
          </h2>
          <p className="cta__text">
            Full stack roles across .NET/C# and React, based in {profile.location}.{" "}
            {profile.authorization}.
          </p>
          <div className="actions">
            <a className="btn btn--primary" href={mailtoLink}>
              <FiMail aria-hidden="true" /> Email me
            </a>
            <Link className="btn btn--ghost" to="/contact">
              Contact details
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
