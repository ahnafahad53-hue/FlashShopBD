'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function MetaPixel() {
  const pathname = usePathname();
  const initialized = useRef(false);

  useEffect(() => {
    // Initialize Meta Pixel only once
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
      window.fbq('track', 'PageView'); // Initial PageView
      initialized.current = true;
    } 
    // Track page view on route change ONLY (not on initial mount)
    else if (initialized.current && typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'PageView');
    }
  }, [pathname]);

  return null;
}

// Helper function to track events with advanced matching and event parameters
export function trackMetaPixelEvent(
  eventName: string,
  eventParams?: {
    value?: number;
    currency?: string;
    content_type?: string;
    content_ids?: string[];
    contents?: Array<{ id: string; quantity: number }>;
    num_items?: number;
  },
  advancedMatchingData?: {
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
    
    // Build advanced matching object
    if (advancedMatchingData?.email) {
      advancedMatching.em = advancedMatchingData.email; // Will be hashed automatically by Meta Pixel
    }
    if (advancedMatchingData?.phone) {
      advancedMatching.ph = advancedMatchingData.phone.replace(/\D/g, ''); // Remove non-digits
    }
    if (advancedMatchingData?.firstName) {
      advancedMatching.fn = advancedMatchingData.firstName;
    }
    if (advancedMatchingData?.lastName) {
      advancedMatching.ln = advancedMatchingData.lastName;
    }
    if (advancedMatchingData?.city) {
      advancedMatching.ct = advancedMatchingData.city;
    }
    if (advancedMatchingData?.state) {
      advancedMatching.st = advancedMatchingData.state;
    }
    if (advancedMatchingData?.zipCode) {
      advancedMatching.zp = advancedMatchingData.zipCode;
    }
    if (advancedMatchingData?.country) {
      advancedMatching.country = advancedMatchingData.country;
    }

    // Track event with both event parameters and advanced matching
    // This is the correct way to combine both in a SINGLE event
    if (Object.keys(advancedMatching).length > 0) {
      window.fbq('track', eventName, eventParams || {}, advancedMatching);
    } else {
      window.fbq('track', eventName, eventParams || {});
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

