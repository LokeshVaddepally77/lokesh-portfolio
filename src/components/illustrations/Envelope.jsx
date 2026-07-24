export default function Envelope({ className = "" }) {
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

      {/* envelope body */}
      <rect x="70" y="100" width="220" height="140" rx="4" className="illo__stroke" />
      <path d="M70 104 180 190 290 104" className="illo__stroke-dim" />

      {/* sent check */}
      <circle cx="255" cy="95" r="22" className="illo__accent" />
      <path d="M245 95l7 7 13-14" className="illo__accent" />
    </svg>
  );
}
