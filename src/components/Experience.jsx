import SheetHeader from "./SheetHeader.jsx";
import { timeline } from "../data/profile.js";

export default function Experience() {
  return (
    <section className="sheet experience" id="experience">
      <SheetHeader index="03" label="REVISION HISTORY" title="How this got here" />
      <div className="rev-table" role="table" aria-label="Career revision history">
        <div className="rev-table__head" role="row">
          <span role="columnheader">Rev</span>
          <span role="columnheader">Date</span>
          <span role="columnheader">Description</span>
        </div>
        {timeline.map((entry) => (
          <div className="rev-table__row" role="row" key={entry.rev}>
            <span className="rev-table__rev" role="cell">
              {entry.rev}
            </span>
            <span className="rev-table__date" role="cell">
              {entry.date}
            </span>
            <span className="rev-table__desc" role="cell">
              <span className="rev-table__title">{entry.title}</span>
              <span className="rev-table__org">
                {entry.org}
                {entry.place ? ` — ${entry.place}` : ""}
              </span>
              <ul className="rev-table__bullets">
                {entry.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
