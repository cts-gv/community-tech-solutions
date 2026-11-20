import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const nodes = ['Internet', 'Modem', 'Router', 'Wi-Fi', 'Your device'];
const xs = [60, 190, 320, 450, 580];

const options = [
  { label: 'Slow everywhere in the house', node: 1, title: 'Likely the modem or your plan', tip: 'Plug a laptop straight into the modem with a cable and run a speed test. If it is slow there too, the problem is the line, the modem, or your plan.' },
  { label: 'Slow only in some rooms', node: 3, title: 'Likely Wi-Fi coverage', tip: 'Walls, distance and router placement weaken the signal. Moving the router or adding a mesh system usually fixes dead spots.' },
  { label: 'Slow at certain times of day', node: 0, title: 'Likely shared bandwidth', tip: 'Evening slowdowns often come from neighborhood congestion or many devices streaming at once. A plan check and network cleanup can help.' },
  { label: 'Keeps dropping or disconnecting', node: 2, title: 'Likely the router', tip: 'Old or overheated routers drop connections. Restart it, update the firmware, and consider replacing it if it is several years old.' },
];

export default function SlowDiagnostic() {
  const [sel, setSel] = useState<number | null>(null);
  const reduce = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const pick = sel === null ? null : options[sel];

  return (
    <section className="px-4 sm:px-6 lg:px-8 pt-12 md:pt-16" aria-labelledby="diagnostic-heading">
      <div className="container-custom mx-auto bg-primary rounded-3xl p-6 sm:p-10 md:p-14 shadow-xl">
        <h2 id="diagnostic-heading" className="text-3xl sm:text-4xl font-bold text-white text-center mb-3">
          Find the weak link
        </h2>
        <p className="text-white/70 text-center max-w-xl mx-auto mb-8">
          Pick what sounds like your problem and we will show where it most likely starts.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl mx-auto mb-10">
          {options.map((o, i) => (
            <button
              key={o.label}
              onClick={() => setSel(i)}
              aria-pressed={sel === i}
              className={`text-left px-5 py-4 rounded-xl border-2 font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent ${
                sel === i ? 'bg-accent text-primary border-accent' : 'text-white border-white/20 hover:border-accent'
              }`}
            >
              {o.label}
            </button>
          ))}
        </div>

        <svg viewBox="0 0 640 130" className="w-full max-w-3xl mx-auto" role="img" aria-label="Diagram of the path from the internet to your device">
          <line x1="60" y1="50" x2="580" y2="50" stroke="#fff" strokeOpacity="0.2" strokeWidth="3" />
          {pick && <line x1="60" y1="50" x2={xs[pick.node]} y2="50" stroke="#fcbb24" strokeWidth="3" />}
          {!reduce &&
            [0, 1, 2].map((k) => (
              <circle key={k} r="4" fill="#fcbb24">
                <animateMotion dur="3.6s" begin={`${k * 1.2}s`} repeatCount="indefinite" path="M60 50 H580" />
              </circle>
            ))}
          {nodes.map((n, i) => {
            const hot = pick?.node === i;
            return (
              <g key={n}>
                {hot && !reduce && (
                  <circle cx={xs[i]} cy="50" r="24" fill="none" stroke="#fcbb24" strokeWidth="3">
                    <animate attributeName="r" values="24;44" dur="1.4s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.8;0" dur="1.4s" repeatCount="indefinite" />
                  </circle>
                )}
                <circle cx={xs[i]} cy="50" r="24" fill={hot ? '#fcbb24' : '#233066'} stroke="#fff" strokeOpacity={hot ? 0 : 0.4} strokeWidth="2" />
                <text x={xs[i]} y="108" textAnchor="middle" fontSize="15" fontWeight="600" fill={hot ? '#fcbb24' : '#fff'}>{n}</text>
              </g>
            );
          })}
        </svg>

        <div className="max-w-2xl mx-auto mt-8 min-h-[9rem] text-center" aria-live="polite">
          {pick ? (
            <div key={sel} className="reveal reveal-in">
              <h3 className="text-2xl font-bold text-accent mb-3">{pick.title}</h3>
              <p className="text-white/80 leading-relaxed mb-6">{pick.tip}</p>
              <Link to="/contact" className="btn-primary">
                Get it checked
                <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
              </Link>
            </div>
          ) : (
            <p className="text-white/50">Your result will show up here.</p>
          )}
        </div>
      </div>
    </section>
  );
}
