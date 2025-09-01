/**
 * Sitemap Submission Utilities
 * Functions for submitting sitemaps to search engines
 */

import { getSiteConfig } from './metadata.js';

/**
 * Get search engine submission URLs
 */
export function getSearchEngineSubmissionUrls() {
  const siteConfig = getSiteConfig();
  const sitemapUrl = `${siteConfig.url}/sitemap.xml`;

  return {
    google: `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`,
    bing: `https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`,
    yandex: `https://webmaster.yandex.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`,
    baidu: `https://ping.baidu.com/ping/RPC2?sitemap=${encodeURIComponent(sitemapUrl)}`,
  };
}

/**
 * Submit sitemap to search engines (server-side only)
 */
export async function submitSitemapToSearchEngines() {
  if (typeof window !== 'undefined') {
    console.warn('Sitemap submission should only be done server-side');
    return;
  }

  const submissionUrls = getSearchEngineSubmissionUrls();
  const results = {};

  for (const [engine, url] of Object.entries(submissionUrls)) {
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'User-Agent': 'Swapnil Katiyar Portfolio Sitemap Submitter',
        },
      });

      results[engine] = {
        success: response.ok,
        status: response.status,
        statusText: response.statusText,
        submittedAt: new Date().toISOString(),
      };

      console.log(`Sitemap submitted to ${engine}:`, results[engine]);
    } catch (error) {
      results[engine] = {
        success: false,
        error: error.message,
        submittedAt: new Date().toISOString(),
      };

      console.error(`Failed to submit sitemap to ${engine}:`, error);
    }
  }

  return results;
}

/**
 * Generate sitemap submission instructions for manual submission
 */
export function getSitemapSubmissionInstructions() {
  const siteConfig = getSiteConfig();
  const sitemapUrl = `${siteConfig.url}/sitemap.xml`;

  return {
    sitemapUrl,
    instructions: {
      google: {
        name: 'Google Search Console',
        url: 'https://search.google.com/search-console',
        steps: [
          'Go to Google Search Console',
          'Select your property',
          'Navigate to Sitemaps in the left sidebar',
          `Enter sitemap URL: ${sitemapUrl}`,
          'Click Submit',
        ],
      },
      bing: {
        name: 'Bing Webmaster Tools',
        url: 'https://www.bing.com/webmasters',
        steps: [
          'Go to Bing Webmaster Tools',
          'Select your site',
          'Navigate to Sitemaps',
          `Enter sitemap URL: ${sitemapUrl}`,
          'Click Submit',
        ],
      },
      yandex: {
        name: 'Yandex Webmaster',
        url: 'https://webmaster.yandex.com',
        steps: [
          'Go to Yandex Webmaster',
          'Select your site',
          'Navigate to Indexing > Sitemaps',
          `Enter sitemap URL: ${sitemapUrl}`,
          'Click Add',
        ],
      },
    },
  };
}

/**
 * Validate sitemap accessibility
 */
export async function validateSitemapAccessibility() {
  const siteConfig = getSiteConfig();
  const sitemapUrl = `${siteConfig.url}/sitemap.xml`;

  try {
    const response = await fetch(sitemapUrl);
    const content = await response.text();

    return {
      accessible: response.ok,
      status: response.status,
      contentType: response.headers.get('content-type'),
      size: content.length,
      isValidXML: content.includes('<?xml') && content.includes('<urlset'),
      urlCount: (content.match(/<url>/g) || []).length,
      lastChecked: new Date().toISOString(),
    };
  } catch (error) {
    return {
      accessible: false,
      error: error.message,
      lastChecked: new Date().toISOString(),
    };
  }
}

/**
 * Generate sitemap index for multiple sitemaps (future use)
 */
export function generateSitemapIndex(sitemaps) {
  const siteConfig = getSiteConfig();
  const baseUrl = siteConfig.url;
  const currentDate = new Date().toISOString();

  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps
  .map(
    (sitemap) => `  <sitemap>
    <loc>${baseUrl}/${sitemap.filename}</loc>
    <lastmod>${sitemap.lastModified || currentDate}</lastmod>
  </sitemap>`
  )
  .join('\n')}
</sitemapindex>`;

  return sitemapIndex;
}

/**
 * Check sitemap submission status (requires API keys)
 */
export async function checkSubmissionStatus() {
  // This would require API keys for Google Search Console, Bing, etc.
  // For now, return placeholder information
  return {
    google: {
      status: 'submitted',
      lastSubmitted: '2024-01-01T00:00:00Z',
      indexedUrls: 0,
      errors: [],
    },
    bing: {
      status: 'submitted',
      lastSubmitted: '2024-01-01T00:00:00Z',
      indexedUrls: 0,
      errors: [],
    },
  };
}
