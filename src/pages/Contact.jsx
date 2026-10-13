import { useState } from "react";
import {
  FiArrowUpRight,
  FiCheck,
  FiCopy,
  FiFileText,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
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

  const methods = [
    { label: "Email", value: profile.email, href: mailtoLink, Icon: FiMail },
    {
      label: "Phone",
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, "")}`,
      Icon: FiPhone,
    },
    { label: "LinkedIn", value: "View profile", href: profile.linkedin, Icon: FaLinkedinIn, external: true },
    profile.github
      ? {
          label: "GitHub",
          value: profile.github.replace(/^https?:\/\/(www\.)?github\.com\//, ""),
          href: profile.github,
          Icon: FaGithub,
          external: true,
        }
      : null,
    { label: "Résumé", value: "Download PDF", href: profile.resumeFile, Icon: FiFileText, download: true },
    { label: "Location", value: profile.location, Icon: FiMapPin },
  ].filter(Boolean);

  return (
    <div className="container page">
      <section className="contact-hero" data-reveal>
        <div>
          <span className="badge">
            <span className="badge__dot" aria-hidden="true" />
            Open to full stack roles
          </span>
          <h1 className="display">
            Let's build something <em>together.</em>
          </h1>
          <p className="lead">
            Open to full stack roles across .NET/C# and React. Based in{" "}
            {profile.location}. {profile.authorization}.
          </p>
          <div className="actions">
            <a className="btn btn--primary" href={mailtoLink}>
              <FiMail aria-hidden="true" /> Email {profile.name.split(" ")[0]}
            </a>
            <button className="btn btn--ghost" onClick={copyEmail} type="button">
              {copied ? <FiCheck aria-hidden="true" /> : <FiCopy aria-hidden="true" />}
              <span aria-live="polite">{copied ? "Copied" : "Copy email"}</span>
            </button>
          </div>
        </div>
        <img
          className="contact-hero__photo"
          src="/lokesh_pic.jpeg"
          alt={profile.name}
          width="168"
          height="168"
        />
      </section>

      <ul className="contact-grid">
        {methods.map(({ label, value, href, Icon, external, download }) => {
          const inner = (
            <>
              <div className="contact-card__top">
                <Icon aria-hidden="true" />
                {href ? <FiArrowUpRight aria-hidden="true" /> : null}
              </div>
              <div>
                <p className="contact-card__label">{label}</p>
                <p className="contact-card__value">{value}</p>
              </div>
            </>
          );
          return (
            <li key={label} data-reveal>
              {href ? (
                <a
                  className="card contact-card"
                  href={href}
                  {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                  {...(download ? { download: true } : {})}
                >
                  {inner}
                </a>
              ) : (
                <div className="card contact-card">{inner}</div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
