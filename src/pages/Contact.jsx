import { useState } from "react";
import SheetHeader from "../components/SheetHeader.jsx";
import { profile, mailtoLink } from "../data/profile.js";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard not available — the email is still shown and linked below.
    }
  };

  return (
    <section className="sheet contact" id="contact">
      <SheetHeader index="06" label="SIGN-OFF" title="Get in touch" />

      <div className="education-page__intro">
        <div className="photo-frame education-page__illo">
          <img src="/lokesh_pic.jpeg" alt={profile.name} />
          <span className="photo-frame__corner photo-frame__corner--tl" aria-hidden="true" />
          <span className="photo-frame__corner photo-frame__corner--tr" aria-hidden="true" />
          <span className="photo-frame__corner photo-frame__corner--bl" aria-hidden="true" />
          <span className="photo-frame__corner photo-frame__corner--br" aria-hidden="true" />
        </div>
        <p className="about__text">
          Open to full stack roles across .NET/C# and React. Based in{" "}
          {profile.location}. {profile.authorization}.
        </p>
      </div>

      <div className="contact__grid" data-reveal>
        <div className="contact__actions">
          <a className="btn btn--primary" href={mailtoLink}>
            Email {profile.name.split(" ")[0]}
          </a>
          <a className="btn btn--ghost" href={`tel:${profile.phone.replace(/\s/g, "")}`}>
            {profile.phone}
          </a>
          <a
            className="btn btn--ghost"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          {profile.github ? (
            <a
              className="btn btn--ghost"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          ) : null}
          <button className="btn btn--ghost" onClick={copyEmail} type="button">
            {copied ? "Copied" : "Copy email"}
          </button>
        </div>
      </div>

      <footer className="footer">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Drawn in React · Rev {new Date().getFullYear()}</span>
      </footer>
    </section>
  );
}
