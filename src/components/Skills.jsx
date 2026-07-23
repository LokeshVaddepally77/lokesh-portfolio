import SheetHeader from "./SheetHeader.jsx";
import { coreSkills } from "../data/profile.js";

export default function Skills() {
  return (
    <section className="sheet skills" id="skills">
      <SheetHeader index="05" label="SPECIFICATIONS" title="Skills" />
      <ul className="skills__row">
        {coreSkills.map((item) => (
          <li className="skills__chip" key={item}>
            {item}
          </li>
        ))}
      </ul>
      <p className="skills__note">
        Full toolset — languages, databases, cloud, and system design
        topics — shows up in context in the project write-ups above.
      </p>
    </section>
  );
}
