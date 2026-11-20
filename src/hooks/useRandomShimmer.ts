import { useEffect, useRef } from 'react';

export function useRandomShimmer<T extends HTMLElement>(min = 2500, max = 7000) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let next: number | undefined;
    let off: number | undefined;
    const schedule = () => {
      next = window.setTimeout(tick, min + Math.random() * (max - min));
    };
    const tick = () => {
      const el = ref.current;
      if (el) {
        el.classList.add('shimmer-run');
        off = window.setTimeout(() => el.classList.remove('shimmer-run'), 900);
      }
      schedule();
    };
    schedule();
    return () => {
      clearTimeout(next);
      clearTimeout(off);
    };
  }, [min, max]);

  return ref;
}
