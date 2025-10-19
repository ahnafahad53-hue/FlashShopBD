import { ImageResponse } from 'next/og';

// Image metadata - 32x32 is optimal for browser favicons
export const size = {
  width: 32,
  height: 32,
};

export const contentType = 'image/png';

// Image generation - Optimized for small size visibility
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#2563eb', // Blue background for better contrast
          borderRadius: '6px', // Slightly rounded for modern look
        }}
      >
        {/* Lightning bolt - simplified and larger for better visibility */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"
            fill="#FFA500"
            stroke="#FFA500"
            strokeWidth="1"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}

