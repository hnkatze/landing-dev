const CDN_URL = "https://cdn.flujoo.dev";

export function cdn(path: string): string {
  return `${CDN_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
