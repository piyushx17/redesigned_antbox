/**
 * Returns a Clearbit logo URL for the given company domain.
 * Strips protocol, www prefix, and path segments.
 */
export function getClearbitLogo(domain: string, size = 64): string {
  const clean = domain
    .replace(/^https?:\/\//, '')
    .replace(/^www\./, '')
    .split('/')[0]
    .trim()

  if (!clean) {
    return ''
  }

  return `https://logo.clearbit.com/${encodeURIComponent(clean)}?size=${size}`
}
