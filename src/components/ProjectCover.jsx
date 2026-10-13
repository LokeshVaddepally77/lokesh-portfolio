// A tinted panel with a CSS-drawn UI sketch, standing in for a screenshot.
// `variant` matches the project's shape: "grid" (marketplace), "code" (API),
// "list" (task manager). Purely decorative, so hidden from screen readers.
const codeLines = [
  [70, 0], [45, 1], [85, 2], [60, 2], [30, 1], [75, 1], [50, 0],
];
const listRows = [72, 54, 80, 40];

export default function ProjectCover({ variant = "grid", number, hue }) {
  return (
    <div className="cover" style={{ "--hue": hue }} aria-hidden="true">
      {number ? <span className="cover__num">{number}</span> : null}
      <div className="mock">
        <div className="mock__bar">
          <i />
          <i />
          <i />
          <span />
        </div>
        <div className="mock__body">
          {variant === "code"
            ? codeLines.map(([w, indent], i) => (
                <span key={i} className="mock__line" style={{ "--w": `${w}%`, "--indent": indent }} />
              ))
            : variant === "list"
              ? listRows.map((w, i) => (
                  <span key={i} className="mock__row">
                    <b />
                    <span style={{ "--w": `${w}%` }} />
                  </span>
                ))
              : (
                  <>
                    <span className="mock__hero" />
                    <span className="mock__tiles">
                      <b />
                      <b />
                      <b />
                    </span>
                    <span className="mock__tiles">
                      <b />
                      <b />
                      <b />
                    </span>
                  </>
                )}
        </div>
      </div>
    </div>
  );
}
