import Lenis from 'lenis';

let lenis: Lenis | null = null;

export const initSmoothScroll = () => {
  if (typeof window === 'undefined') return null;

  lenis = new Lenis({
    lerp: 0.1,
  });

  // Animation frame loop
  function raf(time: number) {
    lenis?.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  return lenis;
};

export const destroySmoothScroll = () => {
  if (lenis) {
    lenis.destroy();
    lenis = null;
  }
};

export { lenis };
