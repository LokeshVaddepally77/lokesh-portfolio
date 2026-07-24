import SheetHeader from "./SheetHeader.jsx";
import { coreSkills } from "../data/profile.js";

export default function Skills() {
  return (
    <section className="sheet skills" id="skills">
      <SheetHeader index="05" label="SPECIFICATIONS" title="Skills" />
      <ul className="skills__row" data-reveal>
        {coreSkills.map((item, i) => (
          <li
            className="skills__chip"
            key={item}
            style={{ transitionDelay: `${i * 40}ms` }}
          >
            {item}
          </li>
        ))}
      </ul>
      <p className="skills__note">
        Full toolset (languages, databases, cloud, and system design topics)
        shows up in context in the project write-ups above.
      </p>
    </section>
  );
}
