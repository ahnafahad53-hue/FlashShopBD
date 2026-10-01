const imageKitUrlEndpoint =
  process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT?.replace(/\/+$/, "");

export function getImageKitUrl(path: string, fallback: string): string {
  if (!imageKitUrlEndpoint) {
    return fallback;
  }

  const encodedPath = path
    .replace(/^\/+/, "")
    .split("/")
    .map(encodeURIComponent)
    .join("/");

  return `${imageKitUrlEndpoint}/${encodedPath}`;
}

export { imageKitUrlEndpoint };
