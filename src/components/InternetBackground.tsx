export default function InternetBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-r from-primary-900 via-primary to-primary-700" aria-hidden="true">
      {[0, 1, 2, 3].map((i) => (
        <span key={i} className="net-ring" style={{ animationDelay: `${i * 1.5}s` }} />
      ))}
      <span className="net-core" />
      {Array.from({ length: 14 }, (_, i) => (
        <span
          key={i}
          className="net-streak"
          style={{
            top: `${(i * 53 + 7) % 96}%`,
            width: 90 + ((i * 37) % 140),
            animationDuration: `${2.2 + ((i * 7) % 28) / 10}s`,
            animationDelay: `-${(i * 0.7) % 5}s`,
          }}
        />
      ))}
    </div>
  );
}
