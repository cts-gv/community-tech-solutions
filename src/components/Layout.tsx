import { useLocation, useOutlet } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from './CustomCursor';

type Stage = 'idle' | 'out' | 'in';

export default function Layout() {
  const { pathname } = useLocation();
  const outlet = useOutlet();
  const [shown, setShown] = useState(outlet);
  const [stage, setStage] = useState<Stage>('idle');
  const current = useRef(pathname);

  useEffect(() => {
    if (pathname === current.current) return;
    current.current = pathname;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setStage('out');
    const t = window.setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
      setShown(outlet);
      setStage('in');
    }, reduce ? 0 : 220);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    if (stage !== 'in') return;
    const t = window.setTimeout(() => setStage('idle'), 600);
    return () => clearTimeout(t);
  }, [stage]);

  return (
    <div className="flex flex-col min-h-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-accent focus:text-primary focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold"
      >
        Skip to main content
      </a>
      <CustomCursor />
      <Navbar />
      <main
        id="main-content"
        className="flex-1"
        style={stage !== 'idle' ? { backgroundColor: '#01215b' } : undefined}
      >
        <div className={stage === 'out' ? 'page-out' : stage === 'in' ? 'page-in' : ''}>{shown}</div>
      </main>
      <Footer />
    </div>
  );
}
