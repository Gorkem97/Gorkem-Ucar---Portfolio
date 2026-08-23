/**
 * Resolves static asset paths correctly across both local dev,
 * custom domains, and GitHub Pages subpath repositories (e.g. username.github.io/repo-name/).
 */
export function getAssetUrl(url: string | undefined | null): string {
  if (!url) return '';
  
  // Return external URLs as is
  if (
    url.startsWith('http://') ||
    url.startsWith('https://') ||
    url.startsWith('data:') ||
    url.startsWith('blob:')
  ) {
    return url;
  }

  // Remove leading slashes
  const cleanPath = url.replace(/^\/+/, '');
  
  // Get Vite's base URL (e.g. './' or '/repo-name/')
  const baseUrl = import.meta.env.BASE_URL || './';
  const normalizedBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;

  return `${normalizedBase}${cleanPath}`;
}
