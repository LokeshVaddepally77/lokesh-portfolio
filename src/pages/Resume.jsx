import SheetHeader from "../components/SheetHeader.jsx";
import { profile } from "../data/profile.js";

export default function Resume() {
  return (
    <section className="sheet resume-page" id="resume">
      <SheetHeader index="05" label="AS-BUILT" title="Résumé" />

      <div className="resume-page__actions">
        <a className="btn btn--primary" href={profile.resumeFile} download>
          Download PDF
        </a>
        <a className="btn btn--ghost" href={profile.resumeFile} target="_blank" rel="noreferrer">
          Open in new tab
        </a>
      </div>

      <p className="resume-page__mobile-note">
        Most phone browsers can't preview PDFs inline. Use Download PDF or
        Open in new tab above to read the résumé.
      </p>

      <div className="resume-page__viewer">
        <iframe
          src={profile.resumeFile}
          title={`${profile.name} resume`}
          loading="lazy"
        />
      </div>
    </section>
  );
}
