import { Link } from "react-router-dom";
import { FiArrowUp } from "react-icons/fi";
import { profile, mailtoLink } from "../data/profile.js";
import { navLinks } from "./Navbar.jsx";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <strong>{profile.name}</strong>
            <p>
              {profile.role} working across .NET/C# and React. Based in{" "}
              {profile.location}.
            </p>
          </div>

          <div>
            <span className="footer__heading">Pages</span>
            <ul className="footer__links">
              {[...navLinks, { to: "/contact", label: "Contact" }].map((l) => (
                <li key={l.to}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="footer__heading">Elsewhere</span>
            <ul className="footer__links">
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
              <li>
                <a href={profile.resumeFile} download>
                  Résumé (PDF)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            © {year} {profile.name}. Built with React + Vite.
          </span>
          <button
            type="button"
            className="footer__top-btn"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Back to top <FiArrowUp aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
