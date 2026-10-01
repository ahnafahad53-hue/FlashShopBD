"use client";

import { Image as ImageKitImage } from "@imagekit/next";
import Image, { type ImageProps } from "next/image";
import { useEffect, useState } from "react";
import { imageKitUrlEndpoint } from "@/lib/imagekit";

interface ImageWithFallbackProps extends Omit<ImageProps, "onError"> {
  fallbackSrc?: string;
}

function isImageKitUrl(src: string, urlEndpoint?: string) {
  if (src.startsWith("https://ik.imagekit.io/")) {
    return true;
  }

  return Boolean(
    urlEndpoint && (src === urlEndpoint || src.startsWith(`${urlEndpoint}/`)),
  );
}

/**
 * Renders ImageKit assets with ImageKit's responsive loader and keeps local or
 * legacy remote images on next/image. Failed images fall back to a local asset.
 */
export default function ImageWithFallback({
  src,
  alt,
  fallbackSrc = "/placeholder-product.png",
  className,
  ...props
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState<typeof src>(src);
  const [errored, setErrored] = useState(false);

  useEffect(() => {
    setImgSrc(src);
    setErrored(false);
  }, [src]);

  const handleError = () => {
    if (!errored) {
      setErrored(true);
      setImgSrc(fallbackSrc);
    }
  };

  if (
    typeof imgSrc === "string" &&
    imageKitUrlEndpoint &&
    isImageKitUrl(imgSrc, imageKitUrlEndpoint)
  ) {
    return (
      <ImageKitImage
        {...props}
        src={imgSrc}
        alt={alt}
        className={className}
        onError={handleError}
      />
    );
  }

  const isCloudinaryUrl =
    typeof imgSrc === "string" && imgSrc.includes("res.cloudinary.com");

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
      unoptimized={isCloudinaryUrl}
    />
  );
}
