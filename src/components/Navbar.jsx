import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { profile } from "../data/profile.js";

const links = [
  { to: "/", label: "Home" },
  { to: "/education", label: "Education" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar__row">
        <Link to="/" className="navbar__logo" onClick={() => setOpen(false)}>
          {"< "}
          {profile.name}
          {" />"}
        </Link>

        <button
          type="button"
          className="navbar__toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`navbar__nav ${open ? "is-open" : ""}`} aria-label="Primary">
          <ul>
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === "/"}
                  className={({ isActive }) => (isActive ? "is-active" : "")}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
