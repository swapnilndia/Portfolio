import {
  generateSitemapXML,
  validateSitemapUrls,
  getSitemapStats,
} from '../../lib/seo/sitemap.js';

export function GET() {
  try {
    // Validate sitemap before generation
    const validation = validateSitemapUrls();
    if (!validation.isValid) {
      console.error('Sitemap validation errors:', validation.errors);
    }

    // Generate sitemap XML
    const sitemapXML = generateSitemapXML();

    // Log sitemap statistics in development
    if (process.env.NODE_ENV === 'development') {
      const stats = getSitemapStats();
      console.log('Sitemap generated:', stats);
    }

    return new Response(sitemapXML, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800',
        'X-Robots-Tag': 'noindex', // Don't index the sitemap itself
      },
    });
  } catch (error) {
    console.error('Error generating sitemap:', error);

    // Return a basic sitemap as fallback
    const fallbackSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://swapnilkatiyar.dev</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;

    return new Response(fallbackSitemap, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  }
}
