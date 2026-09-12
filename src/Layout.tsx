import { useOutlet, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { useEffect, useState } from 'react';
import { PageTransition } from './components/PageTransition';

export function Layout() {
  const location = useLocation();
  const outlet = useOutlet();
  const { scrollY } = useScroll();
  const yPos = useTransform(scrollY, [0, 1000], [0, 50]);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return (
    <div className="flex flex-col min-h-screen text-white relative selection:bg-white selection:text-black overflow-x-clip bg-[#090a0d]">
      {/* Persistent dark luxury studio backdrop - never re-mounts or re-downloads */}
      <motion.div 
        className="fixed inset-0 pointer-events-none z-0 bg-cover bg-center bg-no-repeat origin-top"
        style={{
          y: prefersReducedMotion ? 0 : yPos,
          backgroundImage: `
            radial-gradient(ellipse 80% 55% at 50% 10%, rgba(65, 72, 85, 0.5) 0%, rgba(22, 25, 30, 0.85) 60%, #090a0d 100%),
            url('/studio-backdrop.jpg')
          `,
          backgroundColor: "#090a0d",
          scale: 1.05
        }}
      />

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Persistent Navbar - stays mounted outside transition shell */}
        <Navbar />

        {/* Page Content area with smooth, instant in-memory transitions */}
        <main className="flex-grow flex flex-col">
          <AnimatePresence mode="wait" initial={false}>
            {outlet && (
              <PageTransition key={location.pathname}>
                {outlet}
              </PageTransition>
            )}
          </AnimatePresence>
        </main>

        {/* Persistent Footer - stays mounted outside transition shell */}
        <Footer />
      </div>
    </div>
  );
}

