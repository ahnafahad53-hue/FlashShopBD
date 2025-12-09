'use client';

import Script from 'next/script';

const FacebookPixel = () => {
  const pixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

  // If no Pixel ID is configured, don't render anything
  if (!pixelId) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(
        '[FacebookPixel] NEXT_PUBLIC_FACEBOOK_PIXEL_ID is not set. Meta Pixel will not be initialized.'
      );
    }
    return null;
  }

  return (
    <>
      {/* Meta Pixel Script */}
      <Script
        strategy="afterInteractive"
        id="facebook-pixel"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s) {
              if(f.fbq) return;
              n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq) f._fbq=n;
              n.push=n;
              n.loaded=!0;
              n.version='2.0';
              n.queue=[];
              t=b.createElement(e);
              t.async=!0;
              t.src=v;
              s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)
            }(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${pixelId}');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        <img
          alt="facebook-pixel"
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
};

export default FacebookPixel;

