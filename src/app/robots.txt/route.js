import { generateRobotsTxt } from '../../lib/seo/sitemap.js';

export function GET() {
  try {
    const robotsTxt = generateRobotsTxt();

    return new Response(robotsTxt, {
      headers: {
        'Content-Type': 'text/plain',
        'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800',
        'X-Robots-Tag': 'noindex', // Don't index robots.txt itself
      },
    });
  } catch (error) {
    console.error('Error generating robots.txt:', error);

    // Return a basic robots.txt as fallback
    const fallbackRobots = `User-agent: *
Allow: /

Sitemap: https://swapnilkatiyar.dev/sitemap.xml`;

    return new Response(fallbackRobots, {
      headers: {
        'Content-Type': 'text/plain',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  }
}
