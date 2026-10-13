// Eyebrow + title (+ optional description and right-aligned action).
// `page` renders the larger h1 variant used at the top of each route.
export default function SectionHeader({ eyebrow, title, description, action, page = false }) {
  const Title = page ? "h1" : "h2";

  return (
    <div className={`section-head ${page ? "section-head--page" : ""}`} data-reveal>
      <div>
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <Title className="section-head__title">{title}</Title>
        {description ? <p className="section-head__desc">{description}</p> : null}
      </div>
      {action ? <div className="section-head__action">{action}</div> : null}
    </div>
  );
}
