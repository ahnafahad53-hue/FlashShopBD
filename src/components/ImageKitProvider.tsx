"use client";

import { ImageKitProvider as Provider } from "@imagekit/next";
import type { ReactNode } from "react";
import { imageKitUrlEndpoint } from "@/lib/imagekit";

interface ImageKitProviderProps {
  children: ReactNode;
}

export default function ImageKitProvider({ children }: ImageKitProviderProps) {
  if (!imageKitUrlEndpoint) {
    return children;
  }

  return <Provider urlEndpoint={imageKitUrlEndpoint}>{children}</Provider>;
}
