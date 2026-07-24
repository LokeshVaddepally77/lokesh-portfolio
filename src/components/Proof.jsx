import SheetHeader from "./SheetHeader.jsx";
import { companies } from "../data/profile.js";

export default function Proof() {
  return (
    <section className="sheet proof" id="proof">
      <SheetHeader index="04" label="APPROVALS" title="Where I've worked" />
      <ul className="proof__list">
        {companies.map((c) => (
          <li className="proof__item" key={c.name} data-reveal>
            <span className="proof__name">{c.name}</span>
            <span className="proof__detail">{c.detail}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
