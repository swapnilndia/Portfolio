/**
 * Professional Experience Data
 * Contains work experience information with SEO optimization
 */

import { generateWorkExperienceSchema } from '../lib/seo/schema.js';
import { COMPANIES } from './seo-config.js';

export const WORK_EXPERIENCE = [
  {
    id: 'tekonika-2025',
    company: 'Tekonika Technologies',
    position: 'Software Developer',
    startDate: '2025-05-01',
    endDate: null, // Current position
    location: COMPANIES.tekonika.location,
    description:
      'Building and maintaining eCommerce platform frontend with React, Redux, and SCSS. Achieved 100/100 Lighthouse SEO score and optimized performance across multiple projects.',
    achievements: [
      'Achieved 100/100 Lighthouse SEO score on eCommerce platform',
      'Optimized application performance resulting in 40% faster load times',
      'Implemented responsive design improving mobile user experience',
      'Collaborated with backend team to integrate RESTful APIs',
      'Mentored junior developers on React best practices',
    ],
    technologies: [
      'React.js',
      'Redux',
      'SCSS',
      'JavaScript',
      'HTML5',
      'CSS3',
      'RESTful APIs',
      'Git',
      'Performance Optimization',
      'SEO Optimization',
    ],
    type: 'Full-time',
    remote: false,
  },
  {
    id: 'wagergeeks-2025',
    company: 'WagerGeeks Private Limited',
    position: 'Frontend Developer',
    startDate: '2025-02-01',
    endDate: '2025-05-01',
    location: COMPANIES.wagergeeks.location,
    description:
      'Enhanced legacy gaming platform and built new platform with Next.js. Designed admin portal for content management and operational workflows.',
    achievements: [
      'Modernized legacy gaming platform with React improvements',
      'Built new gaming platform using Next.js and Tailwind CSS',
      'Designed and developed comprehensive admin portal',
      'Improved user interface and user experience design',
      'Implemented responsive design for mobile gaming',
    ],
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
    type: 'Full-time',
    remote: false,
  },
  {
    id: 'treeroot-2023',
    company: 'Treeroot Informatics',
    position: 'Frontend Developer',
    startDate: '2023-01-01',
    endDate: '2024-04-01',
    location: COMPANIES.treeroot.location,
    description:
      'Delivered Credit Management System for Dutch clients using React.js and Redux. Optimized performance with React memoization, dynamic imports, and integrated RESTful APIs with authentication.',
    achievements: [
      'Delivered enterprise Credit Management System for international clients',
      'Implemented performance optimizations reducing render time by 35%',
      'Integrated complex RESTful APIs with authentication systems',
      'Collaborated with international team across different time zones',
      'Maintained high code quality with comprehensive testing',
    ],
    technologies: [
      'React.js',
      'Redux',
      'JavaScript',
      'RESTful APIs',
      'Postman',
      'Authentication Systems',
      'Performance Optimization',
      'International Collaboration',
      'Enterprise Solutions',
    ],
    type: 'Full-time',
    remote: false,
  },
  {
    id: 'sharpener-2022',
    company: 'Sharpener Tech',
    position: 'Frontend Intern',
    startDate: '2022-01-01',
    endDate: '2022-12-31',
    location: COMPANIES.sharpener.location,
    description:
      'Started software development journey as Frontend Intern. Built responsive interfaces using React.js, Material-UI, and implemented state management with Redux and Context API.',
    achievements: [
      'Successfully transitioned from engineering to software development',
      'Built multiple responsive web interfaces from scratch',
      'Mentored 8+ junior developers in frontend concepts',
      'Implemented state management solutions using Redux and Context API',
      'Gained expertise in modern React development practices',
    ],
    technologies: [
      'React.js',
      'Material-UI',
      'Redux',
      'Context API',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Responsive Design',
      'Mentoring',
      'Career Transition',
    ],
    type: 'Internship',
    remote: false,
  },
  {
    id: 'econstruct-2019',
    company: 'Econstruct Design and Build',
    position: 'Structural Design Engineer',
    startDate: '2019-06-01',
    endDate: '2022-01-01',
    location: COMPANIES.econstruct.location,
    description:
      'Performed structural analysis and design for residential and commercial projects. Mentored 200+ students while collaborating with architects on various construction projects.',
    achievements: [
      'Mentored 200+ students in structural engineering concepts',
      'Designed safe and efficient structures for residential projects',
      'Collaborated with architects on commercial building projects',
      'Developed strong analytical and problem-solving skills',
      'Built foundation for systematic thinking and project management',
    ],
    technologies: [
      'Structural Analysis',
      'AutoCAD',
      'Project Management',
      'Team Collaboration',
      'Mentoring',
      'Problem Solving',
      'Analytical Thinking',
      'Construction Industry',
    ],
    type: 'Full-time',
    remote: false,
  },
];

/**
 * Generate structured data for all work experiences
 */
export function generateAllWorkExperienceSchema() {
  return WORK_EXPERIENCE.map((experience) =>
    generateWorkExperienceSchema(experience)
  );
}

/**
 * Get current work experience
 */
export function getCurrentExperience() {
  return WORK_EXPERIENCE.find((exp) => exp.endDate === null);
}

/**
 * Get experience by company
 */
export function getExperienceByCompany(companyName) {
  return WORK_EXPERIENCE.filter((exp) =>
    exp.company.toLowerCase().includes(companyName.toLowerCase())
  );
}

/**
 * Get total years of experience
 */
export function getTotalExperienceYears() {
  const startDate = new Date('2019-06-01');
  const currentDate = new Date();
  const diffTime = Math.abs(currentDate - startDate);
  const diffYears = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 365));
  return diffYears;
}

/**
 * Get software development experience years
 */
export function getSoftwareDevelopmentYears() {
  const startDate = new Date('2022-01-01');
  const currentDate = new Date();
  const diffTime = Math.abs(currentDate - startDate);
  const diffYears = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 365));
  return diffYears;
}
