export default function SheetHeader({ index, total = "06", label, title }) {
  return (
    <div className="sheet-header" data-reveal>
      <span className="sheet-header__index">SHEET {index}/{total}</span>
      <span className="sheet-header__rule" aria-hidden="true" />
      <span className="sheet-header__label">{label}</span>
      <h2 className="sheet-header__title">{title}</h2>
    </div>
  );
}
