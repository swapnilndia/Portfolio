/**
 * SEO Configuration
 * Centralized SEO settings and page-specific configurations
 */

import {
  generatePersonSchema,
  generateWebSiteSchema,
  generateContactPointSchema,
  generateLocalBusinessSchema,
} from '../lib/seo/schema.js';

/**
 * Global SEO configuration
 */
export const GLOBAL_SEO_CONFIG = {
  siteName: 'Swapnil Katiyar Portfolio',
  siteUrl: 'https://swapnilkatiyar.dev',
  author: 'Swapnil Katiyar',
  defaultTitle: 'Swapnil Katiyar - Full-Stack Developer & Frontend Specialist',
  defaultDescription:
    'Experienced full-stack developer specializing in React, Next.js, and modern web technologies. Building scalable eCommerce platforms with 100/100 Lighthouse SEO scores.',
  defaultImage: '/og-default.jpg',
  twitterHandle: '@swapnilndia',
  language: 'en',
  locale: 'en_US',
  themeColor: '#000000',
};

/**
 * Page-specific SEO configurations
 */
export const PAGE_SEO_CONFIG = {
  home: {
    title: 'Swapnil Katiyar - Full-Stack Developer & Frontend Specialist',
    description:
      'Experienced full-stack developer specializing in React, Next.js, and modern web technologies. Building scalable eCommerce platforms with 100/100 Lighthouse SEO scores in Noida, India.',
    keywords: [
      'Swapnil Katiyar',
      'Full-Stack Developer',
      'React Developer',
      'Next.js Developer',
      'Frontend Developer',
      'JavaScript Developer',
      'TypeScript Developer',
      'Web Developer India',
      'eCommerce Developer',
      'SEO Optimization',
      'Performance Optimization',
      'SCSS Expert',
      'Redux Developer',
      'Node.js Developer',
    ],
    ogImage: '/og-home.jpg',
    ogType: 'profile',
    structuredData: [
      generatePersonSchema(),
      generateWebSiteSchema(),
      generateLocalBusinessSchema(),
    ],
  },

  about: {
    title: 'About Swapnil Katiyar - Full-Stack Developer Journey',
    description:
      "Learn about Swapnil Katiyar's journey from Structural Engineer to Full-Stack Developer. Expertise in React, Next.js, and modern web technologies with 200+ students mentored.",
    keywords: [
      'About Swapnil Katiyar',
      'Developer Background',
      'Professional Journey',
      'Career Transition',
      'Structural Engineer to Developer',
      'Self-Taught Developer',
      'Continuous Learning',
      'React Developer Experience',
      'Frontend Developer Journey',
      'Mentoring Experience',
      'Technical Skills Development',
      'Career Growth',
    ],
    ogImage: '/og-about.jpg',
    structuredData: [generatePersonSchema()],
  },

  projects: {
    title: 'Projects - Full-Stack Development Portfolio',
    description:
      "Explore Swapnil Katiyar's portfolio of React, Next.js, and full-stack projects including eCommerce platforms, gaming applications, and enterprise solutions with detailed case studies.",
    keywords: [
      'Web Development Projects',
      'React Projects',
      'Next.js Projects',
      'eCommerce Projects',
      'Full-Stack Projects',
      'Portfolio Projects',
      'JavaScript Projects',
      'TypeScript Projects',
      'Case Studies',
      'Project Showcase',
      'Development Portfolio',
      'Technical Projects',
    ],
    ogImage: '/og-projects.jpg',
    structuredData: [],
  },

  experience: {
    title: 'Professional Experience - Software Developer Career',
    description:
      "Swapnil Katiyar's professional experience as Software Developer at Tekonika Technologies, WagerGeeks, Treeroot Informatics, and Sharpener Tech. Frontend and full-stack development expertise.",
    keywords: [
      'Professional Experience',
      'Software Developer Experience',
      'Frontend Developer Career',
      'React Developer Experience',
      'Full-Stack Developer Career',
      'Work History',
      'Employment History',
      'Career Progression',
      'Tekonika Technologies',
      'WagerGeeks',
      'Treeroot Informatics',
      'Sharpener Tech',
    ],
    ogImage: '/og-experience.jpg',
    structuredData: [],
  },

  contact: {
    title: 'Contact - Hire Full-Stack Developer',
    description:
      'Contact Swapnil Katiyar for full-stack development projects, React/Next.js development, eCommerce solutions, and technical consulting. Available for remote work worldwide.',
    keywords: [
      'Contact Developer',
      'Hire Full-Stack Developer',
      'React Developer for Hire',
      'Next.js Developer for Hire',
      'Freelance Developer',
      'Development Services',
      'Technical Consulting',
      'Remote Developer',
      'Project Collaboration',
      'eCommerce Development Services',
      'Frontend Development Services',
      'Web Development Consultation',
    ],
    ogImage: '/og-contact.jpg',
    structuredData: [
      generateContactPointSchema(),
      generateLocalBusinessSchema(),
    ],
  },
};

/**
 * Project categories and their SEO configurations
 */
export const PROJECT_CATEGORIES = {
  ecommerce: {
    name: 'eCommerce',
    description:
      'Scalable eCommerce platforms with payment integration and inventory management',
    keywords: [
      'eCommerce Development',
      'Online Store',
      'Payment Integration',
      'Shopping Cart',
    ],
  },
  webapp: {
    name: 'Web Application',
    description:
      'Full-stack web applications with modern technologies and optimal performance',
    keywords: [
      'Web Application',
      'SPA',
      'Full-Stack Development',
      'React Application',
    ],
  },
  mobile: {
    name: 'Mobile Application',
    description: 'Cross-platform mobile applications with native performance',
    keywords: [
      'Mobile App',
      'React Native',
      'Cross-Platform',
      'Mobile Development',
    ],
  },
  api: {
    name: 'API Development',
    description: 'RESTful APIs and backend services with robust architecture',
    keywords: [
      'API Development',
      'REST API',
      'Backend Development',
      'Microservices',
    ],
  },
  gaming: {
    name: 'Gaming Platform',
    description: 'Interactive gaming platforms with real-time features',
    keywords: [
      'Gaming Platform',
      'Interactive Games',
      'Real-time Features',
      'Game Development',
    ],
  },
};

/**
 * Company information for experience structured data
 */
export const COMPANIES = {
  tekonika: {
    name: 'Tekonika Technologies',
    location: {
      city: 'Pune',
      state: 'Maharashtra',
      country: 'India',
    },
    website: 'https://tekonika.com',
  },
  wagergeeks: {
    name: 'WagerGeeks Private Limited',
    location: {
      city: 'Indore',
      state: 'Madhya Pradesh',
      country: 'India',
    },
  },
  treeroot: {
    name: 'Treeroot Informatics',
    location: {
      city: 'Ahmedabad',
      state: 'Gujarat',
      country: 'India',
    },
  },
  sharpener: {
    name: 'Sharpener Tech',
    location: {
      city: 'Bangalore',
      state: 'Karnataka',
      country: 'India',
    },
  },
  econstruct: {
    name: 'Econstruct Design and Build',
    location: {
      city: 'Various',
      state: 'India',
      country: 'India',
    },
  },
};

/**
 * Social media profiles
 */
export const SOCIAL_PROFILES = {
  linkedin: 'https://linkedin.com/in/swapnilndia',
  github: 'https://github.com/swapnilndia',
  leetcode: 'https://leetcode.com/u/Swapnilndia',
  twitter: 'https://twitter.com/swapnilndia',
};

/**
 * Contact information
 */
export const CONTACT_INFO = {
  email: 'swapnil240695@gmail.com',
  phone: '+91-7503533658',
  location: {
    city: 'Noida',
    state: 'Uttar Pradesh',
    country: 'India',
    coordinates: {
      latitude: '28.5355',
      longitude: '77.3910',
    },
  },
  availability: 'Available for remote work worldwide',
  responseTime: 'Usually responds within 4 hours',
  languages: ['English', 'Hindi'],
};

/**
 * Get SEO config for a specific page
 */
export function getPageSEOConfig(page) {
  return (
    PAGE_SEO_CONFIG[page] || {
      title: GLOBAL_SEO_CONFIG.defaultTitle,
      description: GLOBAL_SEO_CONFIG.defaultDescription,
      keywords: [],
      ogImage: GLOBAL_SEO_CONFIG.defaultImage,
      structuredData: [],
    }
  );
}

/**
 * Get global SEO config
 */
export function getGlobalSEOConfig() {
  return GLOBAL_SEO_CONFIG;
}
