import Lenis from 'lenis';

let lenis: Lenis | null = null;

export const initSmoothScroll = () => {
  if (typeof window === 'undefined') return null;

  lenis = new Lenis({
    lerp: 0.08,
    duration: 1.2,
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
  });

  // Optimized animation frame loop
  let rafId: number;
  function raf(time: number) {
    lenis?.raf(time);
    rafId = requestAnimationFrame(raf);
  }
  rafId = requestAnimationFrame(raf);

  // Store rafId for cleanup
  (lenis as any).rafId = rafId;

  return lenis;
};

export const destroySmoothScroll = () => {
  if (lenis) {
    // Cancel animation frame if it exists
    const rafId = (lenis as any).rafId;
    if (rafId) {
      cancelAnimationFrame(rafId);
    }
    lenis.destroy();
    lenis = null;
  }
};

export { lenis };
