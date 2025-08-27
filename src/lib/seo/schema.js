/**
 * Structured Data Schema Generators
 * Creates JSON-LD structured data for different content types
 */

import { getSiteConfig } from './metadata.js';

const siteConfig = getSiteConfig();

/**
 * Generate Person schema for homepage and about page
 */
export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Swapnil Katiyar',
    jobTitle: 'Software Developer',
    description:
      'Full-stack developer specializing in React, Next.js, and modern web technologies',
    url: siteConfig.url,
    image: `${siteConfig.url}/profile-image.jpg`,
    email: 'swapnil240695@gmail.com',
    telephone: '+91-7503533658',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Noida',
      addressRegion: 'Uttar Pradesh',
      addressCountry: 'India',
    },
    sameAs: [
      'https://linkedin.com/in/swapnilndia',
      'https://github.com/swapnilndia',
      'https://leetcode.com/u/Swapnilndia',
    ],
    knowsAbout: [
      'React.js',
      'Next.js',
      'JavaScript',
      'TypeScript',
      'Node.js',
      'SCSS',
      'HTML5',
      'CSS3',
      'Redux',
      'MongoDB',
      'PostgreSQL',
      'AWS',
      'Git',
      'SEO Optimization',
      'Performance Optimization',
      'eCommerce Development',
      'Frontend Development',
      'Full-Stack Development',
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Engineering College',
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Tekonika Technologies',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Pune',
        addressRegion: 'Maharashtra',
        addressCountry: 'India',
      },
    },
  };
}

/**
 * Generate WebSite schema for homepage
 */
export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    author: {
      '@type': 'Person',
      name: siteConfig.author,
    },
    inLanguage: 'en-US',
    copyrightYear: new Date().getFullYear(),
    copyrightHolder: {
      '@type': 'Person',
      name: siteConfig.author,
    },
  };
}

/**
 * Generate CreativeWork schema for projects
 */
export function generateCreativeWorkSchema(project) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    author: {
      '@type': 'Person',
      name: siteConfig.author,
      url: siteConfig.url,
    },
    dateCreated: project.createdAt,
    dateModified: project.updatedAt,
    url: `${siteConfig.url}/projects/${project.slug}`,
    image: project.image,
    programmingLanguage: project.technologies,
    keywords: project.keywords,
    about: project.category,
    ...(project.liveUrl && {
      sameAs: [project.liveUrl],
    }),
    ...(project.githubUrl && {
      codeRepository: project.githubUrl,
    }),
  };
}

/**
 * Generate WorkExperience schema for experience page
 */
export function generateWorkExperienceSchema(experience) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WorkExperience',
    position: experience.position,
    employer: {
      '@type': 'Organization',
      name: experience.company,
      address: {
        '@type': 'PostalAddress',
        addressLocality: experience.location.city,
        addressRegion: experience.location.state,
        addressCountry: experience.location.country,
      },
    },
    startDate: experience.startDate,
    ...(experience.endDate && { endDate: experience.endDate }),
    description: experience.description,
    skills: experience.technologies,
    workLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: experience.location.city,
        addressRegion: experience.location.state,
        addressCountry: experience.location.country,
      },
    },
  };
}

/**
 * Generate ContactPoint schema for contact page
 */
export function generateContactPointSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPoint',
    contactType: 'Professional Inquiries',
    email: 'swapnil240695@gmail.com',
    telephone: '+91-7503533658',
    availableLanguage: ['English', 'Hindi'],
    areaServed: 'Worldwide',
    serviceType: [
      'Full-Stack Development',
      'Frontend Development',
      'React Development',
      'Next.js Development',
      'eCommerce Development',
      'Technical Consulting',
      'Code Review',
      'Mentoring',
    ],
  };
}

/**
 * Generate LocalBusiness schema for local SEO
 */
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: `${siteConfig.author} - Full-Stack Developer`,
    description:
      'Professional full-stack development services specializing in React, Next.js, and modern web technologies',
    url: siteConfig.url,
    telephone: '+91-7503533658',
    email: 'swapnil240695@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Noida',
      addressRegion: 'Uttar Pradesh',
      addressCountry: 'India',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '28.5355',
      longitude: '77.3910',
    },
    openingHours: 'Mo-Fr 09:00-18:00',
    priceRange: '$$',
    serviceArea: {
      '@type': 'Place',
      name: 'Worldwide',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Development Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Full-Stack Development',
            description:
              'Complete web application development using modern technologies',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Frontend Development',
            description:
              'React and Next.js frontend development with optimal performance',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'eCommerce Development',
            description:
              'Scalable eCommerce platforms with payment integration',
          },
        },
      ],
    },
  };
}

/**
 * Generate BreadcrumbList schema for navigation
 */
export function generateBreadcrumbSchema(breadcrumbs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `${siteConfig.url}${crumb.path}`,
    })),
  };
}

/**
 * Generate FAQ schema for pages with questions
 */
export function generateFAQSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Validate structured data
 */
export function validateStructuredData(data) {
  try {
    // Check if it's valid JSON
    JSON.stringify(data);

    // Check required fields
    if (!data['@context'] || !data['@type']) {
      return {
        valid: false,
        errors: ['Missing required @context or @type fields'],
      };
    }

    return {
      valid: true,
      errors: [],
    };
  } catch (error) {
    return {
      valid: false,
      errors: [error.message],
    };
  }
}
