import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { profile } from "../data/profile.js";
import useTheme from "../hooks/useTheme.js";

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Work" },
  { to: "/experience", label: "Experience" },
  { to: "/education", label: "Education" },
  { to: "/resume", label: "Résumé" },
];

const initials = profile.name
  .split(" ")
  .map((word) => word[0])
  .join("");

const linkClass = ({ isActive }) => (isActive ? "is-active" : "");

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, toggleTheme] = useTheme();
  const { pathname } = useLocation();

  // Close the mobile panel whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`nav ${scrolled ? "is-scrolled" : ""}`}>
      <div className="nav__bar">
        <Link to="/" className="nav__brand" aria-label={`${profile.name}, home`}>
          <span className="nav__mark" aria-hidden="true">
            {initials}
          </span>
          <span className="nav__name">{profile.name}</span>
        </Link>

        <nav className="nav__links" aria-label="Primary">
          <ul>
            {navLinks.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} end={l.to === "/"} className={linkClass}>
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav__actions">
          <button
            type="button"
            className="icon-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            {theme === "dark" ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
          </button>
          <Link className="btn btn--primary btn--sm nav__cta" to="/contact">
            Let's talk
          </Link>
          <button
            type="button"
            className="icon-btn nav__toggle"
            aria-label="Toggle navigation"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav id="mobile-nav" className="nav__panel" aria-label="Mobile">
          <ul>
            {[...navLinks, { to: "/contact", label: "Contact" }].map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} end={l.to === "/"} className={linkClass}>
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
