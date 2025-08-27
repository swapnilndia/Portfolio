/**
 * Projects Data
 * Contains portfolio projects with SEO optimization and structured data
 */

import { generateCreativeWorkSchema } from '../lib/seo/schema.js';
import { getProjectKeywords } from '../lib/seo/keywords.js';

export const PROJECTS = [
  {
    id: 'ecommerce-platform-tekonika',
    title: 'eCommerce Platform - Tekonika Technologies',
    slug: 'ecommerce-platform-tekonika',
    description:
      'Scalable eCommerce frontend built with React, Redux, and SCSS. Achieved 100/100 Lighthouse SEO score and optimized performance.',
    longDescription:
      'A comprehensive eCommerce platform frontend developed at Tekonika Technologies using React.js, Redux for state management, and SCSS for styling. The project focuses on performance optimization, achieving a perfect 100/100 Lighthouse SEO score, and providing an exceptional user experience across all devices.',
    category: 'eCommerce',
    technologies: [
      'React.js',
      'Redux',
      'SCSS',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Performance Optimization',
      'SEO Optimization',
      'Responsive Design',
    ],
    features: [
      'Product catalog with advanced filtering',
      'Shopping cart and checkout process',
      'User authentication and profiles',
      'Payment gateway integration',
      'Inventory management interface',
      'Admin dashboard for content management',
      'Mobile-responsive design',
      'SEO-optimized pages',
      'Performance monitoring',
    ],
    challenges: [
      'Achieving 100/100 Lighthouse SEO score',
      'Optimizing performance for large product catalogs',
      'Implementing complex state management',
      'Ensuring cross-browser compatibility',
      'Mobile-first responsive design',
    ],
    results: [
      '100/100 Lighthouse SEO score achieved',
      '40% improvement in page load times',
      '25% increase in mobile user engagement',
      'Reduced bounce rate by 30%',
      'Improved conversion rates by 15%',
    ],
    images: [
      '/projects/ecommerce-tekonika/hero.jpg',
      '/projects/ecommerce-tekonika/dashboard.jpg',
      '/projects/ecommerce-tekonika/mobile.jpg',
    ],
    liveUrl: null, // Private project
    githubUrl: null, // Private repository
    createdAt: '2025-05-01',
    updatedAt: '2025-08-27',
    status: 'In Development',
    client: 'Tekonika Technologies',
    duration: '3+ months',
    role: 'Frontend Developer',
  },
  {
    id: 'gaming-platform-wagergeeks',
    title: 'Gaming Platform - WagerGeeks',
    slug: 'gaming-platform-wagergeeks',
    description:
      'Enhanced legacy gaming platform and built new platform with Next.js. Designed admin portal for content management and operational workflows.',
    longDescription:
      'A comprehensive gaming platform project involving both legacy system enhancement and new platform development. Built using Next.js and Tailwind CSS with a focus on user experience, performance, and administrative functionality.',
    category: 'Gaming',
    technologies: [
      'React.js',
      'Next.js',
      'Tailwind CSS',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Admin Portal Development',
      'UI/UX Design',
      'Gaming Platform Development',
    ],
    features: [
      'Interactive gaming interface',
      'Real-time game updates',
      'User authentication and profiles',
      'Admin portal for content management',
      'Responsive design for mobile gaming',
      'Performance optimized gaming experience',
      'User analytics and reporting',
      'Payment integration for gaming credits',
    ],
    challenges: [
      'Modernizing legacy gaming platform',
      'Building scalable admin portal',
      'Optimizing for real-time gaming performance',
      'Ensuring mobile gaming compatibility',
      'Implementing complex user management',
    ],
    results: [
      'Successfully modernized legacy platform',
      'Improved user engagement by 35%',
      'Reduced admin operational time by 50%',
      'Enhanced mobile gaming experience',
      'Streamlined content management workflows',
    ],
    images: [
      '/projects/gaming-wagergeeks/hero.jpg',
      '/projects/gaming-wagergeeks/admin.jpg',
      '/projects/gaming-wagergeeks/mobile.jpg',
    ],
    liveUrl: null, // Private project
    githubUrl: null, // Private repository
    createdAt: '2025-02-01',
    updatedAt: '2025-05-01',
    status: 'Completed',
    client: 'WagerGeeks Private Limited',
    duration: '3 months',
    role: 'Frontend Developer',
  },
  {
    id: 'credit-management-treeroot',
    title: 'Credit Management System - Treeroot Informatics',
    slug: 'credit-management-treeroot',
    description:
      'Enterprise Credit Management System for Dutch clients using React.js and Redux. Optimized performance with React memoization and dynamic imports.',
    longDescription:
      'An enterprise-grade Credit Management System developed for Dutch clients at Treeroot Informatics. The system handles complex financial data, user management, and reporting with a focus on performance, security, and international compliance.',
    category: 'Enterprise',
    technologies: [
      'React.js',
      'Redux',
      'JavaScript',
      'RESTful APIs',
      'Postman',
      'Authentication Systems',
      'Performance Optimization',
      'Enterprise Solutions',
      'International Compliance',
    ],
    features: [
      'Credit scoring and analysis',
      'User and client management',
      'Financial reporting dashboard',
      'API integration with banking systems',
      'Multi-language support',
      'Role-based access control',
      'Data visualization and charts',
      'Export functionality for reports',
    ],
    challenges: [
      'Handling complex financial calculations',
      'Implementing secure authentication',
      'Optimizing performance for large datasets',
      'International compliance requirements',
      'Multi-language support implementation',
    ],
    results: [
      'Successfully delivered to Dutch clients',
      '35% improvement in data processing speed',
      'Reduced manual processing time by 60%',
      'Enhanced security compliance',
      'Improved user satisfaction scores',
    ],
    images: [
      '/projects/credit-management/hero.jpg',
      '/projects/credit-management/dashboard.jpg',
      '/projects/credit-management/reports.jpg',
    ],
    liveUrl: null, // Private client project
    githubUrl: null, // Private repository
    createdAt: '2023-01-01',
    updatedAt: '2024-04-01',
    status: 'Completed',
    client: 'Dutch Financial Institution',
    duration: '15 months',
    role: 'Frontend Developer',
  },
  {
    id: 'learning-projects-sharpener',
    title: 'Learning Projects - Sharpener Tech',
    slug: 'learning-projects-sharpener',
    description:
      'Multiple learning projects built during internship including responsive interfaces with React.js, Material-UI, and state management implementations.',
    longDescription:
      'A collection of learning projects developed during the internship at Sharpener Tech, marking the transition from structural engineering to software development. These projects demonstrate progressive skill development in React.js, Material-UI, and modern frontend practices.',
    category: 'Learning',
    technologies: [
      'React.js',
      'Material-UI',
      'Redux',
      'Context API',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Responsive Design',
      'Firebase',
      'Git',
    ],
    features: [
      'Multiple responsive web interfaces',
      'State management with Redux and Context API',
      'Material-UI component implementations',
      'Firebase integration for backend services',
      'User authentication systems',
      'CRUD operations and data management',
      'Progressive skill development projects',
    ],
    challenges: [
      'Learning React.js from scratch',
      'Understanding state management concepts',
      'Implementing responsive design principles',
      'Transitioning from engineering to development',
      'Building confidence in coding abilities',
    ],
    results: [
      'Successfully transitioned to software development',
      'Built 10+ learning projects',
      'Mentored 8+ junior developers',
      'Gained expertise in React ecosystem',
      'Established foundation for career growth',
    ],
    images: [
      '/projects/learning-sharpener/hero.jpg',
      '/projects/learning-sharpener/projects.jpg',
      '/projects/learning-sharpener/mentoring.jpg',
    ],
    liveUrl: null, // Learning projects
    githubUrl: 'https://github.com/swapnilndia/learning-projects',
    createdAt: '2022-01-01',
    updatedAt: '2022-12-31',
    status: 'Completed',
    client: 'Sharpener Tech',
    duration: '12 months',
    role: 'Frontend Intern',
  },
];

/**
 * Generate structured data for all projects
 */
export function generateAllProjectsSchema() {
  return PROJECTS.map((project) => generateCreativeWorkSchema(project));
}

/**
 * Get featured projects
 */
export function getFeaturedProjects() {
  return PROJECTS.filter((project) =>
    [
      'ecommerce-platform-tekonika',
      'gaming-platform-wagergeeks',
      'credit-management-treeroot',
    ].includes(project.id)
  );
}

/**
 * Get projects by category
 */
export function getProjectsByCategory(category) {
  return PROJECTS.filter(
    (project) => project.category.toLowerCase() === category.toLowerCase()
  );
}

/**
 * Get project by slug
 */
export function getProjectBySlug(slug) {
  return PROJECTS.find((project) => project.slug === slug);
}

/**
 * Get projects by technology
 */
export function getProjectsByTechnology(technology) {
  return PROJECTS.filter((project) =>
    project.technologies.some((tech) =>
      tech.toLowerCase().includes(technology.toLowerCase())
    )
  );
}

/**
 * Get total projects count
 */
export function getTotalProjectsCount() {
  return PROJECTS.length;
}

/**
 * Get technologies used across all projects
 */
export function getAllTechnologies() {
  const allTechs = PROJECTS.flatMap((project) => project.technologies);
  return [...new Set(allTechs)].sort();
}
