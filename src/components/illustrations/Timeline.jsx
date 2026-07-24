export default function Timeline({ className = "" }) {
  return (
    <svg
      className={`illo ${className}`}
      viewBox="0 0 360 300"
      fill="none"
      aria-hidden="true"
    >
      <rect x="1" y="1" width="358" height="298" className="illo__frame" />
      <path className="illo__corner" d="M1 25V1h24" />
      <path className="illo__corner" d="M359 25V1h-24" />
      <path className="illo__corner" d="M1 275v24h24" />
      <path className="illo__corner" d="M359 275v24h-24" />

      {/* briefcase */}
      <rect x="90" y="130" width="180" height="110" rx="6" className="illo__stroke" />
      <path d="M140 130v-16a20 20 0 0 1 20-20h40a20 20 0 0 1 20 20v16" className="illo__stroke" />
      <line x1="90" y1="170" x2="270" y2="170" className="illo__stroke-dim" />
      <rect x="168" y="160" width="24" height="20" rx="2" className="illo__accent" />

      {/* rising bar chart to the side */}
      <line x1="70" y1="260" x2="300" y2="260" className="illo__stroke-dim" />
      <rect x="90" y="238" width="14" height="22" className="illo__accent" />
      <rect x="115" y="222" width="14" height="38" className="illo__stroke-dim" />
      <rect x="140" y="204" width="14" height="56" className="illo__accent" />
    </svg>
  );
}
