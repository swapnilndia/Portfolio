import { getSiteConfig } from '../../lib/seo/metadata.js';

export function GET() {
  const siteConfig = getSiteConfig();

  const robotsTxt = `User-agent: *
Allow: /

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/

# Allow important files
Allow: /api/sitemap.xml
Allow: /favicon.ico
Allow: /*.css
Allow: /*.js

# Sitemap location
Sitemap: ${siteConfig.url}/sitemap.xml

# Crawl delay (optional)
Crawl-delay: 1

# Specific bot instructions
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400', // Cache for 24 hours
    },
  });
}
