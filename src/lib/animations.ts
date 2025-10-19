import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Update ScrollTrigger to work with Lenis
if (typeof window !== 'undefined') {
  ScrollTrigger.addEventListener('refresh', () => {
    document.querySelectorAll('[data-lenis-prevent]').forEach((el) => {
      el.addEventListener('wheel', (e) => e.stopPropagation(), { passive: false });
    });
  });
}

// Hero animations
export const heroAnimations = () => {
  if (typeof window === 'undefined') return;

  const tl = gsap.timeline({ delay: 0.2 });
  
  tl.fromTo('.hero-title', 
    { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    { 
      opacity: 1, 
      y: 0,
      scale: 1,
      duration: 1,
      ease: 'power3.out'
    }
  )
  .fromTo('.hero-subtitle', 
    { 
      opacity: 0, 
      y: 30 
    },
    { 
      opacity: 1, 
      y: 0,
      duration: 0.8,
      ease: 'power2.out'
    },
    '-=0.5'
  )
  .fromTo('.hero-buttons', 
    { 
      opacity: 0, 
      y: 30 
    },
    { 
      opacity: 1, 
      y: 0,
      duration: 0.8,
      ease: 'power2.out'
    },
    '-=0.3'
  )
  .fromTo('.hero-trust-badges', 
    { 
      opacity: 0, 
      y: 30 
    },
    { 
      opacity: 1, 
      y: 0,
      duration: 0.8,
      ease: 'power2.out',
      stagger: 0.1
    },
    '-=0.2'
  )
  .fromTo('.hero-image', 
    { 
      opacity: 0, 
      scale: 0.8,
      rotation: 5
    },
    { 
      opacity: 1, 
      scale: 1,
      rotation: 0,
      duration: 1.2,
      ease: 'power3.out'
    },
    '-=0.8'
  );
};

// Section fade in animations
export const sectionAnimations = () => {
  if (typeof window === 'undefined') return;

  gsap.utils.toArray('.animate-fade-up').forEach((element: any) => {
    gsap.fromTo(element,
      {
        opacity: 0,
        y: 60,
        scale: 0.95
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          end: 'bottom 15%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  });

  // Cards stagger animation
  gsap.utils.toArray('.animate-card').forEach((element: any) => {
    gsap.fromTo(element,
      {
        opacity: 0,
        y: 40,
        scale: 0.9
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  });
};

// Counter animations
export const counterAnimations = () => {
  if (typeof window === 'undefined') return;

  gsap.utils.toArray('.counter').forEach((element: any) => {
    const endValue = parseInt(element.dataset.count);
    
    ScrollTrigger.create({
      trigger: element,
      start: 'top 80%',
      onEnter: () => {
        gsap.to(element, {
          innerHTML: endValue,
          duration: 2,
          ease: 'power2.out',
          snap: { innerHTML: 1 },
          onUpdate: function() {
            element.innerHTML = Math.ceil(this.targets()[0].innerHTML);
          }
        });
      }
    });
  });
};

// Hover animations for buttons and cards
export const hoverAnimations = () => {
  if (typeof window === 'undefined') return;

  // Button hover effects
  gsap.utils.toArray('.btn-primary').forEach((btn: any) => {
    btn.addEventListener('mouseenter', () => {
      gsap.to(btn, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
    });
    
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, { scale: 1, duration: 0.3, ease: 'power2.out' });
    });
  });

  // Card hover effects
  gsap.utils.toArray('.hover-card').forEach((card: any) => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, { 
        y: -10, 
        scale: 1.02,
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        duration: 0.3, 
        ease: 'power3.out' 
      });
    });
    
    card.addEventListener('mouseleave', () => {
      gsap.to(card, { 
        y: 0, 
        scale: 1,
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        duration: 0.3, 
        ease: 'power3.out' 
      });
    });
  });
};

// Initialize all animations
export const initAnimations = () => {
  if (typeof window === 'undefined') return;

  // Wait for DOM to be ready and Lenis to initialize
  gsap.delayedCall(0.5, () => {
    heroAnimations();
    
    // Refresh ScrollTrigger after animations are set up
    ScrollTrigger.refresh();
    
    sectionAnimations();
    counterAnimations();
    hoverAnimations();
  });
};
