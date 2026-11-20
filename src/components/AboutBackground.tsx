const waves = [
  { fill: '#233066', h: '48%', dur: 46, rev: false, op: 0.55 },
  { fill: '#1a2756', h: '36%', dur: 32, rev: true, op: 0.8 },
  { fill: '#0f1b47', h: '24%', dur: 22, rev: false, op: 1 },
];

export default function AboutBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-b from-primary-900 via-primary to-primary-700" aria-hidden="true">
      <div className="about-sun" />
      {Array.from({ length: 18 }, (_, i) => (
        <span
          key={i}
          className="about-star"
          style={{ left: `${(i * 37 + 8) % 97}%`, top: `${(i * 23 + 6) % 52}%`, animationDelay: `${(i % 6) * 0.55}s` }}
        />
      ))}
      {waves.map((w, i) => (
        <svg
          key={i}
          className="about-wave"
          viewBox="0 0 2400 200"
          preserveAspectRatio="none"
          style={{ height: w.h, opacity: w.op, animationDuration: `${w.dur}s`, animationDirection: w.rev ? 'reverse' : 'normal' }}
        >
          <path
            fill={w.fill}
            d="M0 100 C200 20 400 20 600 100 S1000 180 1200 100 C1400 20 1600 20 1800 100 S2200 180 2400 100 V200 H0 Z"
          />
        </svg>
      ))}
    </div>
  );
}
