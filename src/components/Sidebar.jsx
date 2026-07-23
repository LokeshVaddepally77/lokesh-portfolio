import { profile } from "../data/profile.js";
import useScrollSpy from "../hooks/useScrollSpy.js";

const links = [
  { href: "#work", id: "work", label: "Selected work" },
  { href: "#about", id: "about", label: "About" },
  { href: "#experience", id: "experience", label: "Experience" },
  { href: "#proof", id: "proof", label: "Where I've worked" },
  { href: "#skills", id: "skills", label: "Skills" },
  { href: "#contact", id: "contact", label: "Contact" },
];

export default function Sidebar() {
  const activeId = useScrollSpy(links.map((l) => l.id));

  return (
    <aside className="sidebar" id="top">
      <div className="sidebar__inner">
        <div>
          <p className="sidebar__eyebrow">Full stack developer</p>
          <h1 className="sidebar__name">{profile.name}</h1>
          <p className="sidebar__tagline">
            Building fast, reliable full stack apps with .NET/C# and React —
            based in {profile.location}.
          </p>
        </div>

        <nav className="sidebar__nav" aria-label="Section navigation">
          <ul>
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={l.href}
                  className={activeId === l.id ? "is-active" : ""}
                  aria-current={activeId === l.id ? "true" : undefined}
                >
                  <span className="sidebar__nav-line" aria-hidden="true" />
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="sidebar__actions">
          <a className="btn btn--primary" href="#work">
            View my work
          </a>
          <a className="btn btn--ghost" href={profile.resumeFile} download>
            Résumé
          </a>
        </div>

        <ul className="sidebar__social">
          <li>
            <a href={`mailto:${profile.email}`}>Email</a>
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
    </aside>
  );
}
