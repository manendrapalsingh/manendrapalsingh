import { useEffect, useRef } from 'react';

export const useSmoothScroll = () => {
  const isScrollingRef = useRef(false);

  useEffect(() => {
    let scrollTimeout: ReturnType<typeof setTimeout>;
    let rafId: number | null = null;

    const handleScroll = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }

      rafId = requestAnimationFrame(() => {
        // Smooth scroll handling
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          isScrollingRef.current = false;
        }, 150);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      clearTimeout(scrollTimeout);
    };
  }, []);

  return isScrollingRef;
};
