export default function BrandBanner() {
  return (
    <div className="w-full bg-white pt-6">
      <svg
        viewBox="0 0 1140 210"
        className="mx-auto w-full max-w-3xl px-6"
        role="img"
        aria-label="Builds By Zainab"
      >
        <defs>
          <path id="brand-arc" d="M 20 190 Q 570 20 1120 190" fill="none" />
        </defs>
        <text
          fill="#5B1A3A"
          style={{ fontFamily: "'Yellowtail', cursive" }}
          fontSize="92"
        >
          <textPath href="#brand-arc" startOffset="50%" textAnchor="middle">
            Builds By Zainab
          </textPath>
        </text>
      </svg>
    </div>
  )
}
