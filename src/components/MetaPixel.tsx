'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function MetaPixel() {
  const pathname = usePathname();

  useEffect(() => {
    // Initialize Meta Pixel
    if (typeof window !== 'undefined' && !window.fbq) {
      (function(f: any, b: any, e: any, v: any, n: any, t: any, s: any) {
        if (f.fbq) return;
        n = f.fbq = function(...args: any[]) {
          n.callMethod
            ? n.callMethod.apply(n, args)
            : n.queue.push(args);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(
        window,
        document,
        'script',
        'https://connect.facebook.net/en_US/fbevents.js',
        null,
        null,
        null
      );

      // Initialize pixel with empty advanced matching (will be populated when data is available)
      window.fbq('init', '840498368356556', {});
      window.fbq('track', 'PageView');
    }

    // Track page view on route change
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'PageView');
    }
  }, [pathname]);

  return null;
}

// Helper function to track events with advanced matching
export function trackMetaPixelEvent(
  eventName: string,
  data?: {
    email?: string;
    phone?: string;
    firstName?: string;
    lastName?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    country?: string;
  }
) {
  if (typeof window !== 'undefined' && window.fbq) {
    const advancedMatching: any = {};
    
    if (data?.email) {
      advancedMatching.em = data.email; // Will be hashed automatically by Meta Pixel
    }
    if (data?.phone) {
      advancedMatching.ph = data.phone.replace(/\D/g, ''); // Remove non-digits
    }
    if (data?.firstName) {
      advancedMatching.fn = data.firstName;
    }
    if (data?.lastName) {
      advancedMatching.ln = data.lastName;
    }
    if (data?.city) {
      advancedMatching.ct = data.city;
    }
    if (data?.state) {
      advancedMatching.st = data.state;
    }
    if (data?.zipCode) {
      advancedMatching.zp = data.zipCode;
    }
    if (data?.country) {
      advancedMatching.country = data.country;
    }

    // Track event with advanced matching if available
    if (Object.keys(advancedMatching).length > 0) {
      window.fbq('track', eventName, {}, advancedMatching);
    } else {
      window.fbq('track', eventName);
    }
  }
}

// Extend Window interface
declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

