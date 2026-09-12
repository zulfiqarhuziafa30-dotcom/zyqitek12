import { motion } from 'motion/react';
import React, { ReactNode, useLayoutEffect, useState, useEffect } from 'react';

interface PageTransitionProps {
  children: ReactNode;
  key?: React.Key;
}

export function PageTransition({ children }: PageTransitionProps) {
  const [reducedMotion, setReducedMotion] = useState(() => 
    typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false
  );

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const listener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', listener);
    return () => mq.removeEventListener('change', listener);
  }, []);

  // Synchronously restore scroll to top BEFORE browser paints the new page.
  // In AnimatePresence mode="wait", this only mounts AFTER the old page finishes exiting.
  // This guarantees the exiting page NEVER suffers an abrupt scroll jump.
  useLayoutEffect(() => {
    if (!window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    }
  }, []);

  return (
    <motion.div
      className="w-full flex-grow flex flex-col"
      initial={reducedMotion ? false : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reducedMotion ? undefined : { opacity: 0, y: -6 }}
      transition={{ 
        duration: reducedMotion ? 0 : 0.18, 
        ease: [0.25, 1, 0.5, 1] 
      }}
    >
      {children}
    </motion.div>
  );
}


