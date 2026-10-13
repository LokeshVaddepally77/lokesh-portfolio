import { Link } from "react-router-dom";
import SheetHeader from "../components/SheetHeader.jsx";

export default function NotFound() {
  return (
    <section className="sheet not-found" id="not-found">
      <SheetHeader index="404" label="SHEET MISSING" title="Page not found" />
      <p className="about__text">
        This sheet isn't in the set. It may have been renamed or never drawn.
      </p>
      <div className="hero__actions">
        <Link className="btn btn--primary" to="/">
          Back to home
        </Link>
        <Link className="btn btn--ghost" to="/projects">
          View my work
        </Link>
      </div>
    </section>
  );
}
