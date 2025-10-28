'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { initSmoothScroll, destroySmoothScroll } from '@/lib/smooth-scroll';
import { initAnimations } from '@/lib/animations';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // Initialize smooth scrolling
    const lenis = initSmoothScroll();
    
    // Initialize GSAP animations
    initAnimations();

    // Update ScrollTrigger when Lenis updates
    if (lenis) {
      lenis.on('scroll', ScrollTrigger.update);
    }

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      destroySmoothScroll();
    };
  }, [pathname]);

  return <>{children}</>;
}
