/** Převede místní cestu na cestu pod Astro base; externí odkazy ponechá. */
export function withBase(url: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  if (!url.startsWith("/") || url.startsWith("//") || !base || url === base || url.startsWith(`${base}/`)) return url;
  return `${base}${url}`;
}
