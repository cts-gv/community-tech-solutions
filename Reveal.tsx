import { useEffect, useRef, useState, type ReactNode, type ElementType } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  from?: 'up' | 'left' | 'right';
  as?: ElementType;
  className?: string;
}

export default function Reveal({
  children,
  delay = 0,
  from = 'up',
  as: Tag = 'div',
  className = '',
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !('IntersectionObserver' in window)
    ) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={{ animationDelay: `${delay}ms` }}
      className={`reveal reveal-${from} ${shown ? 'reveal-in' : ''} ${className}`}
    >
      {children}
    </Tag>
  );
}
