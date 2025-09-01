/**
 * SEO Metadata Generation Utilities
 * Provides functions for generating Next.js metadata objects with SEO optimization
 */

const SITE_CONFIG = {
  name: 'Swapnil Katiyar Portfolio',
  title: 'Swapnil Katiyar - Full-Stack Developer & Frontend Specialist',
  description:
    'Experienced full-stack developer specializing in React, Next.js, and modern web technologies. Building scalable eCommerce platforms with 100/100 Lighthouse SEO scores.',
  url: 'https://swapnilkatiyar.dev',
  ogImage: '/Swapnil_Photo.jpeg',
  twitterImage: '/Swapnil_Photo.jpeg',
  author: 'Swapnil Katiyar',
  keywords: [
    'Swapnil Katiyar',
    'Full-Stack Developer',
    'React Developer',
    'Next.js Developer',
    'Frontend Developer',
    'JavaScript Developer',
    'TypeScript Developer',
    'eCommerce Developer',
    'Web Developer India',
    'SCSS Expert',
    'SEO Optimization',
    'Performance Optimization',
  ],
};

/**
 * Generate base metadata configuration
 */
export function generateBaseMetadata() {
  return {
    metadataBase: new URL(SITE_CONFIG.url),
    title: {
      template: `%s | ${SITE_CONFIG.author} - Full-Stack Developer`,
      default: SITE_CONFIG.title,
    },
    description: SITE_CONFIG.description,
    keywords: SITE_CONFIG.keywords,
    authors: [{ name: SITE_CONFIG.author, url: SITE_CONFIG.url }],
    creator: SITE_CONFIG.author,
    publisher: SITE_CONFIG.author,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: SITE_CONFIG.url,
      siteName: SITE_CONFIG.name,
      title: SITE_CONFIG.title,
      description: SITE_CONFIG.description,
      images: [
        {
          url: SITE_CONFIG.ogImage,
          width: 1200,
          height: 630,
          alt: SITE_CONFIG.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: SITE_CONFIG.title,
      description: SITE_CONFIG.description,
      images: [SITE_CONFIG.twitterImage],
      creator: '@swapnilndia',
    },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
    },
    alternates: {
      canonical: SITE_CONFIG.url,
    },
  };
}

/**
 * Generate page-specific metadata
 */
export function generatePageMetadata({
  title,
  description,
  keywords = [],
  path = '',
  ogImage,
  noIndex = false,
  publishedTime,
  modifiedTime,
  type = 'website',
}) {
  const fullUrl = `${SITE_CONFIG.url}${path}`;
  const pageTitle = title
    ? `${title} | ${SITE_CONFIG.author}`
    : SITE_CONFIG.title;
  const pageDescription = description || SITE_CONFIG.description;
  const pageKeywords = [...SITE_CONFIG.keywords, ...keywords];
  const pageOgImage = ogImage || SITE_CONFIG.ogImage;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: pageKeywords,
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: fullUrl,
      type,
      images: [
        {
          url: pageOgImage,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [pageOgImage],
    },
    alternates: {
      canonical: fullUrl,
    },
  };
}

/**
 * Generate metadata for project pages
 */
export function generateProjectMetadata(project) {
  return generatePageMetadata({
    title: `${project.title} - Project`,
    description: project.description,
    keywords: [...project.technologies, 'project', 'portfolio', 'case study'],
    path: `/projects/${project.slug}`,
    ogImage: project.ogImage,
    type: 'article',
    publishedTime: project.createdAt,
    modifiedTime: project.updatedAt,
  });
}

/**
 * Get site configuration
 */
export function getSiteConfig() {
  return SITE_CONFIG;
}

/**
 * Generate canonical URL
 */
export function generateCanonicalUrl(path = '') {
  return `${SITE_CONFIG.url}${path}`;
}

/**
 * Validate metadata object
 */
export function validateMetadata(metadata) {
  const errors = [];

  if (!metadata.title) {
    errors.push('Title is required');
  }

  if (!metadata.description) {
    errors.push('Description is required');
  }

  if (metadata.description && metadata.description.length > 160) {
    errors.push('Description should be under 160 characters');
  }

  if (metadata.title && metadata.title.length > 60) {
    errors.push('Title should be under 60 characters');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}
