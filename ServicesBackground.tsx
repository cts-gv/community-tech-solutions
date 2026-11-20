const windows = [
  { left: '6%', w: 150, h: 100, dur: 16, delay: 0, rot: -6 },
  { left: '20%', w: 110, h: 76, dur: 22, delay: 6, rot: 4 },
  { left: '38%', w: 170, h: 112, dur: 19, delay: 3, rot: -3 },
  { left: '58%', w: 120, h: 84, dur: 24, delay: 10, rot: 7 },
  { left: '74%', w: 160, h: 104, dur: 18, delay: 1, rot: -5 },
  { left: '89%', w: 100, h: 70, dur: 21, delay: 8, rot: 5 },
];

export default function ServicesBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-primary-900 via-primary to-primary-700" aria-hidden="true">
      <div className="svc-grid" />
      {windows.map((w, i) => (
        <div
          key={i}
          className="svc-window"
          style={{ left: w.left, top: '100%', width: w.w, height: w.h, animationDuration: `${w.dur}s`, animationDelay: `-${w.delay}s`, ['--r' as string]: `${w.rot}deg` }}
        />
      ))}
      <div className="svc-beam" />
    </div>
  );
}
