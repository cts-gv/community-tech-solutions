const bars = [50, 80, 60, 100, 75];

export default function HeroComputer() {
  return (
    <svg
      viewBox="0 0 480 360"
      className="pc-float w-full max-w-md mx-auto drop-shadow-[0_24px_40px_rgba(252,187,36,0.25)]"
      role="img"
      aria-label="Animated computer showing a Wi-Fi signal and a website loading"
    >
      <rect x="40" y="10" width="400" height="270" rx="20" fill="#0a1a4a" stroke="#fcbb24" strokeWidth="3" />
      <rect x="58" y="28" width="364" height="234" rx="8" fill="#01153d" />
      <rect x="58" y="28" width="364" height="28" rx="8" fill="#0e2766" />
      <circle cx="78" cy="42" r="5" fill="#fcbb24" />
      <circle cx="94" cy="42" r="5" fill="#fff" opacity="0.6" />
      <circle cx="110" cy="42" r="5" fill="#fff" opacity="0.3" />
      <rect x="130" y="34" width="200" height="16" rx="8" fill="#1a3580" />

      <g transform="translate(130 150)" fill="none" stroke="#fcbb24" strokeWidth="6" strokeLinecap="round">
        <path className="pc-arc" style={{ animationDelay: '0.8s' }} d="M-39 -32 A51 51 0 0 1 39 -32" />
        <path className="pc-arc" style={{ animationDelay: '0.4s' }} d="M-27 -22 A35 35 0 0 1 27 -22" />
        <path className="pc-arc" d="M-15 -12 A19 19 0 0 1 15 -12" />
        <circle r="6" fill="#fcbb24" stroke="none" cy="6" />
      </g>

      {bars.map((h, i) => (
        <rect
          key={i}
          className="pc-bar"
          style={{ animationDelay: `${i * 0.25}s` }}
          x={235 + i * 36}
          y={160 - h}
          width="24"
          height={h}
          rx="4"
          fill={i === 3 ? '#fcbb24' : '#5968a2'}
        />
      ))}

      {[260, 200, 230].map((w, i) => (
        <rect key={w} className="pc-line" style={{ animationDelay: `${i * 0.5}s` }} x="80" y={184 + i * 18} width={w} height="8" rx="4" fill="#fff" opacity="0.28" />
      ))}
      <rect x="80" y="244" width="320" height="10" rx="5" fill="#1a3580" />
      <rect className="pc-progress" x="80" y="244" width="320" height="10" rx="5" fill="#fcbb24" />

      <rect x="210" y="280" width="60" height="44" fill="#0a1a4a" stroke="#fcbb24" strokeWidth="3" />
      <rect x="150" y="322" width="180" height="16" rx="8" fill="#0a1a4a" stroke="#fcbb24" strokeWidth="3" />
    </svg>
  );
}
