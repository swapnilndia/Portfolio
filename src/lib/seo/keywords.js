/**
 * SEO Keywords Management
 * Centralized keyword management for consistent SEO optimization
 */

/**
 * Primary keywords for different pages and content types
 */
export const KEYWORDS = {
  // Primary brand and professional keywords
  primary: [
    'Swapnil Katiyar',
    'Full-Stack Developer',
    'React Developer',
    'Next.js Developer',
    'Frontend Developer',
    'JavaScript Developer',
    'TypeScript Developer',
  ],

  // Technical skills keywords
  technical: [
    'React.js',
    'Next.js',
    'JavaScript',
    'TypeScript',
    'Node.js',
    'HTML5',
    'CSS3',
    'SCSS',
    'Tailwind CSS',
    'Redux',
    'Context API',
    'RESTful APIs',
    'MongoDB',
    'PostgreSQL',
    'AWS',
    'Git',
    'GitHub',
    'Webpack',
    'Vite',
  ],

  // Industry and domain keywords
  industry: [
    'eCommerce Development',
    'Web Application Development',
    'Frontend Architecture',
    'Performance Optimization',
    'SEO Optimization',
    'Mobile-First Design',
    'Responsive Web Design',
    'User Experience',
    'Cross-Browser Compatibility',
    'Progressive Web Apps',
    'Single Page Applications',
  ],

  // Location-based keywords
  location: [
    'Web Developer India',
    'React Developer India',
    'Frontend Developer Noida',
    'Full-Stack Developer Pune',
    'JavaScript Developer Delhi NCR',
    'Remote Developer India',
  ],

  // Experience and achievements
  achievements: [
    '100/100 Lighthouse SEO',
    'Performance Optimization Expert',
    'eCommerce Platform Developer',
    'Gaming Platform Developer',
    'Enterprise Solutions Developer',
    'Mentor',
    'Team Lead',
    'Code Review Expert',
  ],

  // Page-specific keywords
  pages: {
    home: [
      'Portfolio',
      'Software Developer Portfolio',
      'React Developer Portfolio',
      'Full-Stack Developer Portfolio',
      'Web Developer Showcase',
      'Professional Portfolio',
    ],
    about: [
      'About Swapnil Katiyar',
      'Developer Background',
      'Professional Journey',
      'Career Transition',
      'Structural Engineer to Developer',
      'Self-Taught Developer',
      'Continuous Learning',
    ],
    projects: [
      'Web Development Projects',
      'React Projects',
      'Next.js Projects',
      'eCommerce Projects',
      'Full-Stack Projects',
      'Portfolio Projects',
      'Case Studies',
      'Project Showcase',
    ],
    experience: [
      'Work Experience',
      'Professional Experience',
      'Career History',
      'Employment History',
      'Developer Experience',
      'Frontend Developer Experience',
      'Full-Stack Developer Experience',
    ],
    contact: [
      'Contact Developer',
      'Hire Developer',
      'Freelance Developer',
      'Development Services',
      'Consultation',
      'Project Inquiry',
      'Collaboration',
    ],
  },
};

/**
 * Get keywords for a specific page
 */
export function getPageKeywords(page) {
  const baseKeywords = [
    ...KEYWORDS.primary,
    ...KEYWORDS.technical.slice(0, 8), // Limit technical keywords
    ...KEYWORDS.industry.slice(0, 6), // Limit industry keywords
  ];

  const pageSpecificKeywords = KEYWORDS.pages[page] || [];

  return [...baseKeywords, ...pageSpecificKeywords];
}

/**
 * Get keywords for project content
 */
export function getProjectKeywords(technologies = [], category = '') {
  const baseKeywords = [
    ...KEYWORDS.primary.slice(0, 4),
    ...KEYWORDS.pages.projects.slice(0, 4),
  ];

  const techKeywords = technologies.filter((tech) =>
    KEYWORDS.technical.includes(tech)
  );

  const categoryKeywords = category
    ? [
        `${category} Development`,
        `${category} Project`,
        `${category} Application`,
      ]
    : [];

  return [...baseKeywords, ...techKeywords, ...categoryKeywords];
}

/**
 * Get keywords for experience content
 */
export function getExperienceKeywords(position, company, technologies = []) {
  const baseKeywords = [
    ...KEYWORDS.primary.slice(0, 3),
    ...KEYWORDS.pages.experience.slice(0, 3),
  ];

  const positionKeywords = [
    position,
    `${position} at ${company}`,
    `${company} Developer`,
  ];

  const techKeywords = technologies
    .filter((tech) => KEYWORDS.technical.includes(tech))
    .slice(0, 5);

  return [...baseKeywords, ...positionKeywords, ...techKeywords];
}

/**
 * Generate meta keywords string
 */
export function generateMetaKeywords(keywords) {
  // Remove duplicates and limit to 15 keywords for optimal SEO
  const uniqueKeywords = [...new Set(keywords)].slice(0, 15);
  return uniqueKeywords.join(', ');
}

/**
 * Calculate keyword density in content
 */
export function calculateKeywordDensity(content, keyword) {
  if (!content || !keyword) return 0;

  const contentLower = content.toLowerCase();
  const keywordLower = keyword.toLowerCase();
  const words = contentLower.split(/\s+/);
  const keywordCount = words.filter(
    (word) => word.includes(keywordLower) || keywordLower.includes(word)
  ).length;

  return (keywordCount / words.length) * 100;
}

/**
 * Suggest keywords based on content
 */
export function suggestKeywords(content, maxSuggestions = 10) {
  if (!content) return [];

  const contentLower = content.toLowerCase();
  const suggestions = [];

  // Check which keywords from our database appear in the content
  const allKeywords = [
    ...KEYWORDS.primary,
    ...KEYWORDS.technical,
    ...KEYWORDS.industry,
  ];

  allKeywords.forEach((keyword) => {
    if (contentLower.includes(keyword.toLowerCase())) {
      suggestions.push(keyword);
    }
  });

  return suggestions.slice(0, maxSuggestions);
}

/**
 * Validate keyword optimization
 */
export function validateKeywordOptimization(content, targetKeywords) {
  const results = {
    score: 0,
    suggestions: [],
    warnings: [],
  };

  if (!content || !targetKeywords.length) {
    results.warnings.push('Content or target keywords missing');
    return results;
  }

  targetKeywords.forEach((keyword) => {
    const density = calculateKeywordDensity(content, keyword);

    if (density === 0) {
      results.suggestions.push(`Consider adding "${keyword}" to the content`);
    } else if (density > 3) {
      results.warnings.push(
        `Keyword "${keyword}" may be over-optimized (${density.toFixed(1)}% density)`
      );
    } else if (density >= 0.5 && density <= 3) {
      results.score += 1;
    }
  });

  // Calculate final score as percentage
  results.score = (results.score / targetKeywords.length) * 100;

  return results;
}
