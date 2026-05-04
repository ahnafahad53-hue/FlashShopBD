'use client';

import { useState } from 'react';
import Image, { type ImageProps } from 'next/image';

interface CloudinaryImageProps extends Omit<ImageProps, 'onError'> {
  fallbackSrc?: string;
}

/**
 * A drop-in replacement for next/image that gracefully handles
 * Cloudinary load errors by swapping in a local placeholder
 * instead of showing broken alt text.
 */
export default function CloudinaryImage({
  src,
  alt,
  fallbackSrc = '/placeholder-product.png',
  className,
  ...props
}: CloudinaryImageProps) {
  const [imgSrc, setImgSrc] = useState<typeof src>(src);
  const [errored, setErrored] = useState(false);

  const handleError = () => {
    if (!errored) {
      setErrored(true);
      setImgSrc(fallbackSrc);
    }
  };

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
    />
  );
}
