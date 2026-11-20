const PATH = 'M-50 430 C250 390 330 110 640 200 S1000 340 1260 70';

const bubbles = [
  { left: '5%', top: '16%', w: 110, gold: false, dur: 6, delay: 0 },
  { left: '15%', top: '62%', w: 84, gold: true, dur: 7.5, delay: 1.2 },
  { left: '27%', top: '30%', w: 70, gold: false, dur: 5.5, delay: 2.4 },
  { left: '74%', top: '18%', w: 96, gold: true, dur: 6.8, delay: 0.6 },
  { left: '86%', top: '58%', w: 118, gold: false, dur: 7.2, delay: 1.8 },
  { left: '66%', top: '72%', w: 76, gold: false, dur: 5.8, delay: 3 },
];

export default function ContactBackground() {
  const reduce = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-tr from-primary-900 via-primary to-primary-700" aria-hidden="true">
      <div className="hero-glow" />
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 500" preserveAspectRatio="xMidYMid slice">
        <path d={PATH} fill="none" stroke="#fcbb24" strokeOpacity="0.35" strokeWidth="2" strokeDasharray="6 12" />
        {!reduce && (
          <g>
            <path d="M0 0 L-24 -10 L-17 0 L-24 10 Z" fill="#fcbb24" />
            <animateMotion dur="10s" repeatCount="indefinite" rotate="auto" path={PATH} />
          </g>
        )}
      </svg>
      {bubbles.map((b, i) => (
        <div
          key={i}
          className={`ct-bubble ${b.gold ? 'ct-gold' : ''}`}
          style={{ left: b.left, top: b.top, width: b.w, animationDuration: `${b.dur}s`, animationDelay: `-${b.delay}s` }}
        >
          <i className="ct-dot" />
          <i className="ct-dot" style={{ animationDelay: '0.2s' }} />
          <i className="ct-dot" style={{ animationDelay: '0.4s' }} />
        </div>
      ))}
    </div>
  );
}
