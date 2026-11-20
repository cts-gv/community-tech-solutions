import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const d = dot.current;
    const r = ring.current;
    if (!d || !r) return;

    const root = document.documentElement;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    root.classList.add('has-custom-cursor');
    let x = -100, y = -100, rx = -100, ry = -100, raf = 0, seen = false;

    const show = (on: boolean) => {
      d.classList.toggle('is-visible', on);
      r.classList.toggle('is-visible', on);
    };
    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!seen) {
        seen = true;
        rx = x;
        ry = y;
      }
      const t = e.target as Element | null;
      r.classList.toggle('cursor-hot', !!t?.closest('a,button,[role="button"],summary,label[for]'));
      show(!t?.closest('input,textarea,select'));
    };
    const onDown = () => r.classList.add('cursor-down');
    const onUp = () => r.classList.remove('cursor-down');
    const onLeave = () => show(false);
    const loop = () => {
      const k = reduce ? 1 : 0.18;
      rx += (x - rx) * k;
      ry += (y - ry) * k;
      d.style.transform = `translate3d(${x}px,${y}px,0)`;
      r.style.transform = `translate3d(${rx}px,${ry}px,0)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerdown', onDown);
    window.addEventListener('pointerup', onUp);
    root.addEventListener('mouseleave', onLeave);
    loop();
    return () => {
      cancelAnimationFrame(raf);
      root.classList.remove('has-custom-cursor');
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointerup', onUp);
      root.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <>
      <div ref={ring} className="cursor-ring" aria-hidden="true">
        <div className="cursor-ring-inner" />
      </div>
      <div ref={dot} className="cursor-dot" aria-hidden="true" />
    </>
  );
}
