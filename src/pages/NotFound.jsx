import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="container page not-found">
      <div>
        <p className="not-found__code" aria-hidden="true">
          404
        </p>
        <h1>
          This page <em>doesn't exist.</em>
        </h1>
        <p className="lead">It may have been moved, renamed, or never built.</p>
        <div className="actions">
          <Link className="btn btn--primary" to="/">
            Back to home
          </Link>
          <Link className="btn btn--ghost" to="/projects">
            View my work <FiArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}
