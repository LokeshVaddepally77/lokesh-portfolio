export default function GradCap({ className = "" }) {
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

      {/* cap board */}
      <path d="M180 90 300 130 180 170 60 130Z" className="illo__stroke" />
      {/* cap base */}
      <path d="M110 145v34c0 14 31 26 70 26s70-12 70-26v-34" className="illo__stroke-dim" />
      {/* tassel */}
      <line x1="270" y1="122" x2="270" y2="176" className="illo__accent" />
      <circle cx="270" cy="182" r="5" className="illo__accent" />
      {/* scroll */}
      <rect x="150" y="220" width="60" height="14" rx="7" className="illo__stroke-dim" />
      <line x1="140" y1="227" x2="150" y2="227" className="illo__stroke-dim" />
      <line x1="210" y1="227" x2="220" y2="227" className="illo__stroke-dim" />
    </svg>
  );
}
