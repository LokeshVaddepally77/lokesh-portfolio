export default function Workstation({ className = "" }) {
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

      {/* monitor */}
      <rect x="80" y="70" width="200" height="130" rx="2" className="illo__stroke" />
      <rect x="96" y="86" width="168" height="98" className="illo__stroke-dim" />
      {/* code lines on screen */}
      <line x1="110" y1="102" x2="170" y2="102" className="illo__accent" />
      <line x1="110" y1="118" x2="220" y2="118" className="illo__stroke-dim" />
      <line x1="126" y1="134" x2="200" y2="134" className="illo__stroke-dim" />
      <line x1="110" y1="150" x2="190" y2="150" className="illo__accent" />
      <line x1="126" y1="166" x2="160" y2="166" className="illo__stroke-dim" />

      {/* stand */}
      <line x1="180" y1="200" x2="180" y2="222" className="illo__stroke" />
      <line x1="150" y1="222" x2="210" y2="222" className="illo__stroke" />

      {/* keyboard */}
      <rect x="130" y="236" width="100" height="18" rx="2" className="illo__stroke-dim" />

      {/* mug */}
      <path d="M60 220h26v22a13 13 0 0 1-13 13 13 13 0 0 1-13-13z" className="illo__accent" />
      <path d="M86 226h8a7 7 0 0 1 0 14h-8" className="illo__accent" />
    </svg>
  );
}
