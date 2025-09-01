/**
 * Sitemap Generation Utilities
 * Provides functions for generating comprehensive XML sitemaps
 */

import { getSiteConfig } from './metadata.js';
import { PROJECTS } from '../../data/projects.js';

/**
 * Get site configuration
 */
function getSiteInfo() {
  return getSiteConfig();
}

/**
 * Generate static page entries for sitemap
 */
export function getStaticPages() {
  const currentDate = new Date().toISOString();

  return [
    {
      url: '',
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
      title: 'Homepage - Full-Stack Developer Portfolio',
    },
    {
      url: '/about',
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
      title: 'About - Professional Background and Journey',
    },
    {
      url: '/projects',
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
      title: 'Projects - Portfolio and Case Studies',
    },
    {
      url: '/experience',
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
      title: 'Experience - Professional Career History',
    },
    {
      url: '/contact',
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
      title: 'Contact - Get in Touch for Collaboration',
    },
  ];
}

/**
 * Generate dynamic project page entries
 */
export function getProjectPages() {
  return PROJECTS.map((project) => ({
    url: `/projects/${project.slug}`,
    lastModified: project.updatedAt || project.createdAt,
    changeFrequency: 'monthly',
    priority: 0.8,
    title: `${project.title} - Project Case Study`,
  }));
}

/**
 * Generate all sitemap entries
 */
export function getAllSitemapEntries() {
  const staticPages = getStaticPages();
  const projectPages = getProjectPages();

  return [...staticPages, ...projectPages];
}

/**
 * Generate XML sitemap content
 */
export function generateSitemapXML() {
  const siteConfig = getSiteInfo();
  const baseUrl = siteConfig.url;
  const allPages = getAllSitemapEntries();

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd
        http://www.google.com/schemas/sitemap-image/1.1
        http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd">
${allPages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastModified}</lastmod>
    <changefreq>${page.changeFrequency}</changefreq>
    <priority>${page.priority}</priority>${
      page.url.startsWith('/projects/') && page.url !== '/projects'
        ? `
    <image:image>
      <image:loc>${baseUrl}/projects/${page.url.split('/').pop()}/hero.jpg</image:loc>
      <image:title>${page.title}</image:title>
    </image:image>`
        : ''
    }
  </url>`
  )
  .join('\n')}
</urlset>`;

  return xmlContent;
}

/**
 * Generate robots.txt content
 */
export function generateRobotsTxt() {
  const siteConfig = getSiteInfo();

  return `User-agent: *
Allow: /

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/
Disallow: /.well-known/
Disallow: /temp/

# Allow important files and directories
Allow: /api/sitemap.xml
Allow: /sitemap.xml
Allow: /robots.txt
Allow: /favicon.ico
Allow: /manifest.json
Allow: /*.css
Allow: /*.js
Allow: /*.jpg
Allow: /*.png
Allow: /*.svg
Allow: /*.webp

# Sitemap location
Sitemap: ${siteConfig.url}/sitemap.xml

# Crawl delay for respectful crawling
Crawl-delay: 1

# Specific bot instructions
User-agent: Googlebot
Allow: /
Crawl-delay: 0

User-agent: Bingbot
Allow: /
Crawl-delay: 1

User-agent: Slurp
Allow: /
Crawl-delay: 1

User-agent: DuckDuckBot
Allow: /
Crawl-delay: 1

User-agent: Baiduspider
Allow: /
Crawl-delay: 2

# Social media bots
User-agent: facebookexternalhit
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: LinkedInBot
Allow: /

# Block unwanted bots
User-agent: AhrefsBot
Disallow: /

User-agent: MJ12bot
Disallow: /

User-agent: DotBot
Disallow: /`;
}

/**
 * Get sitemap statistics
 */
export function getSitemapStats() {
  const allPages = getAllSitemapEntries();
  const staticPages = getStaticPages();
  const projectPages = getProjectPages();

  return {
    totalPages: allPages.length,
    staticPages: staticPages.length,
    projectPages: projectPages.length,
    lastGenerated: new Date().toISOString(),
    priorities: {
      high: allPages.filter((p) => p.priority >= 0.9).length,
      medium: allPages.filter((p) => p.priority >= 0.7 && p.priority < 0.9)
        .length,
      low: allPages.filter((p) => p.priority < 0.7).length,
    },
  };
}

/**
 * Validate sitemap URLs
 */
export function validateSitemapUrls() {
  const siteConfig = getSiteInfo();
  const allPages = getAllSitemapEntries();
  const errors = [];

  allPages.forEach((page, index) => {
    // Check URL format
    if (!page.url.startsWith('/') && page.url !== '') {
      errors.push(
        `Page ${index}: URL should start with / or be empty for homepage`
      );
    }

    // Check priority range
    if (page.priority < 0 || page.priority > 1) {
      errors.push(`Page ${index}: Priority should be between 0 and 1`);
    }

    // Check change frequency
    const validFrequencies = [
      'always',
      'hourly',
      'daily',
      'weekly',
      'monthly',
      'yearly',
      'never',
    ];
    if (!validFrequencies.includes(page.changeFrequency)) {
      errors.push(`Page ${index}: Invalid change frequency`);
    }

    // Check last modified date
    if (!page.lastModified || isNaN(Date.parse(page.lastModified))) {
      errors.push(`Page ${index}: Invalid lastModified date`);
    }
  });

  return {
    isValid: errors.length === 0,
    errors,
    totalPages: allPages.length,
  };
}
