interface DividerProps {
  color: string;
  bg?: string;
  flip?: boolean;
  overlay?: boolean;
}

export default function Divider({ color, bg = '', flip = false, overlay = false }: DividerProps) {
  const wrap = overlay
    ? 'absolute bottom-0 inset-x-0 leading-none -mb-px pointer-events-none'
    : `${bg} leading-none -mb-px`;
  return (
    <div className={wrap} aria-hidden="true">
      <svg viewBox="0 0 100 10" preserveAspectRatio="none" className={`block w-full h-10 md:h-20 ${color}`}>
        <polygon points={flip ? '0,0 100,10 0,10' : '0,10 100,0 100,10'} fill="currentColor" />
      </svg>
    </div>
  );
}
