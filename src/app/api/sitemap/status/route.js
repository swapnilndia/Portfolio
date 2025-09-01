import {
  getSitemapStats,
  validateSitemapUrls,
} from '../../../../lib/seo/sitemap.js';
import {
  validateSitemapAccessibility,
  getSearchEngineSubmissionUrls,
} from '../../../../lib/seo/sitemap-submission.js';

export async function GET() {
  try {
    // Get sitemap statistics
    const stats = getSitemapStats();

    // Validate sitemap URLs
    const validation = validateSitemapUrls();

    // Check sitemap accessibility
    const accessibility = await validateSitemapAccessibility();

    // Get submission URLs
    const submissionUrls = getSearchEngineSubmissionUrls();

    const response = {
      status: 'success',
      timestamp: new Date().toISOString(),
      sitemap: {
        stats,
        validation,
        accessibility,
        submissionUrls,
      },
    };

    return new Response(JSON.stringify(response, null, 2), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
      },
    });
  } catch (error) {
    console.error('Error getting sitemap status:', error);

    return new Response(
      JSON.stringify({
        status: 'error',
        message: error.message,
        timestamp: new Date().toISOString(),
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
