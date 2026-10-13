import { FiDownload, FiExternalLink } from "react-icons/fi";
import SectionHeader from "../components/SectionHeader.jsx";
import { profile } from "../data/profile.js";

export default function Resume() {
  const fileName = profile.resumeFile.split("/").pop();

  return (
    <div className="container page">
      <SectionHeader
        page
        eyebrow="Résumé"
        title={
          <>
            The <em>one-pager</em>
          </>
        }
        description="Everything on this site, condensed to a single PDF."
        action={
          <div className="actions">
            <a className="btn btn--primary" href={profile.resumeFile} download>
              <FiDownload aria-hidden="true" /> Download PDF
            </a>
            <a className="btn btn--ghost" href={profile.resumeFile} target="_blank" rel="noreferrer">
              <FiExternalLink aria-hidden="true" /> Open in new tab
            </a>
          </div>
        }
      />

      <div className="card viewer" data-reveal>
        <div className="viewer__bar" aria-hidden="true">
          <i />
          <i />
          <i />
          <span>{fileName}</span>
        </div>
        <iframe src={profile.resumeFile} title={`${profile.name} résumé`} loading="lazy" />
        <p className="viewer-note">
          Most phone browsers can't preview PDFs inline. Use Download PDF or Open in
          new tab above to read the résumé.
        </p>
      </div>
    </div>
  );
}
