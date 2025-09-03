/**
 * Centralized Content Management
 * All text content for the website in one place for easy localization
 */

export const CONTENT = {
  // Global/Common
  global: {
    siteName: 'Swapnil Katiyar Portfolio',
    tagline: 'Full-Stack Developer & Frontend Specialist',
    author: 'Swapnil Katiyar',
    email: 'swapnil240695@gmail.com',
    phone: '+91-7503533658',
    location: 'Noida, India',
    copyright: '© 2024 Swapnil Katiyar. All rights reserved.',
    builtWith: 'Built with Next.js, SCSS, and lots of ☕',
  },

  // Navigation
  navigation: {
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    experience: 'Experience',
    contact: 'Contact',
    search: 'Search',
    searchPlaceholder: 'Search portfolio...',
  },

  // Homepage
  homepage: {
    title: 'React Developer &\nFrontend Specialist',
    subtitle:
      'I build scalable eCommerce platforms and high-performance web applications using React.js, Next.js, and modern JavaScript. Currently at Tekonika Technologies, specializing in frontend development, performance optimization, and achieving perfect 100/100 Lighthouse SEO scores.',
    cta: {
      primary: 'View My Work',
      secondary: 'Get In Touch',
    },
    skills: {
      react: 'React & Next.js',
      node: 'Node.js',
      typescript: 'TypeScript',
      scss: 'SCSS/CSS',
      mongodb: 'MongoDB',
    },
    approach: {
      title: 'My Development Philosophy',
      description:
        'I specialize in creating high-performance web applications that combine beautiful user interfaces with exceptional functionality. As a React developer, I focus on building scalable eCommerce solutions, optimizing Core Web Vitals, and implementing SEO best practices for maximum search engine visibility.',
      values: {
        userCentered: 'User-Centered Design',
        performanceFirst: 'Performance Optimization',
        cleanCode: 'Clean React Code',
        accessibility: 'Web Accessibility',
      },
    },
    projects: {
      title: 'Featured React Projects',
      description:
        'Explore my portfolio of React.js and Next.js projects including eCommerce platforms, gaming applications, and enterprise solutions. Each project demonstrates modern frontend development practices, performance optimization, and SEO implementation.',
      categories: {
        ecommerce: 'eCommerce Development',
        saas: 'SaaS Applications',
        mobile: 'Responsive Web Apps',
        api: 'API Integration',
      },
    },
    skillsGrid: {
      frontend: 'Frontend',
      backend: 'Backend',
      database: 'Database',
      devops: 'DevOps',
    },
    currentProject: {
      title: 'eCommerce Platform Development',
      description:
        'Enterprise-grade eCommerce frontend built with React.js, Redux state management, and SCSS styling. Achieved perfect 100/100 Lighthouse SEO score through performance optimization, semantic HTML structure, and technical SEO implementation.',
      status: 'Current Project',
      actions: {
        demo: 'View Project',
        code: 'Case Study',
      },
    },
    currentRole: {
      title: 'Current Role',
      company: 'Software Developer @ Tekonika',
    },
    philosophy: {
      title: 'Frontend Development Philosophy',
      description:
        'I believe in building React applications where form follows function. My focus is creating beautiful, accessible interfaces that solve real business problems while maintaining exceptional performance and search engine optimization.',
      focus: 'React Development • SEO • Performance',
      actions: {
        learn: 'Learn More',
        process: 'Development Process',
      },
    },
    tools: {
      title: 'Favorite Tools',
      list: 'VS Code • Figma • Git',
    },
    status: {
      title: 'Status: Available',
      description: 'Open for new projects',
    },
  },

  // About Page
  about: {
    title: 'About Swapnil Katiyar - React Developer',
    intro:
      "Hi, I'm Swapnil Katiyar — a passionate React Developer and Frontend Specialist based in Noida, India. I specialize in building high-performance eCommerce platforms, scalable web applications, and SEO-optimized websites using React.js, Next.js, and modern JavaScript technologies. With expertise across eCommerce development, gaming platforms, and enterprise solutions, I focus on creating digital experiences that combine exceptional user experience with technical excellence.",
    journey:
      "My professional journey began as a Structural Design Engineer, where I mentored 200+ students while designing safe, efficient structures. This experience taught me systematic thinking, problem-solving, and attention to detail. In 2022, I made a strategic pivot into software development and haven't looked back since. Every project has been about rapid learning, solving complex technical challenges, and consistently raising the bar on performance optimization and user experience.",
    cta: {
      resume: 'Download Resume',
      contact: 'Contact Me',
    },
    chips: {
      developer: 'React Developer',
      react: 'React.js & Next.js Expert',
      seo: 'SEO Optimization Specialist',
      mentor: 'Technical Mentor',
    },
    sections: {
      journey: {
        title: 'My Journey',
        timeline: {
          2019: '2019–2022: Started as a Structural Design Engineer, mentoring 200+ students while designing safe, efficient structures. Developed strong analytical thinking and systematic problem-solving skills.',
          2022: '2022: Made strategic career pivot into software development with internship at Sharpener Tech. Mastered React.js, Material-UI, Redux, and Firebase while building responsive web applications.',
          2023: '2023–2024: Joined Treeroot Informatics as Frontend Developer, delivering enterprise Credit Management System for Dutch clients. Specialized in React performance optimization, API integration, and international compliance.',
          2025: '2025: Built gaming platforms at WagerGeeks using Next.js and Tailwind CSS, then joined Tekonika Technologies to develop scalable eCommerce applications. Achieved perfect 100/100 Lighthouse SEO scores through technical SEO implementation and performance optimization.',
        },
        chips: {
          started: 'Started 2019',
          pivot: 'Tech Pivot 2022',
          learner: 'Fast Learner',
          solver: 'Problem Solver',
        },
      },
      skills: {
        title: 'Skills & Technologies',
        categories: {
          frontend:
            'Frontend Development: React.js, Next.js, JavaScript (ES6+), TypeScript, HTML5, CSS3, Responsive Web Design',
          ui: 'UI & State Management: Redux, Context API, SCSS, Tailwind CSS, Material-UI, Component Libraries',
          integration:
            'API Integration: RESTful APIs, GraphQL, Postman, Swagger, Authentication Systems',
          tools:
            'Development Tools: Git, GitHub, Jira, Figma, AWS (EC2, RDS), Performance Monitoring, SEO Tools',
        },
        note: '💡 Continuous Learning: I stay current with modern React patterns, performance optimization techniques, Core Web Vitals, and SEO best practices to deliver cutting-edge web solutions.',
        chips: {
          react: 'React & Next.js',
          typescript: 'TypeScript',
          scss: 'SCSS & Tailwind',
          aws: 'AWS & APIs',
        },
      },
    },
  },

  // Projects Page
  projects: {
    title: 'React Developer Portfolio - Featured Projects',
    description:
      'Explore my comprehensive portfolio of React.js and Next.js projects including scalable eCommerce platforms, gaming applications, and enterprise solutions. Each project showcases modern frontend development practices, performance optimization, SEO implementation, and responsive design with detailed case studies and technical insights.',
    cta: {
      all: 'View All Projects',
      github: 'GitHub Profile',
    },
    categories: {
      web: 'React Web Applications',
      mobile: 'Responsive Mobile Apps',
      api: 'API Integration Projects',
      opensource: 'Open Source Contributions',
    },
    stats: {
      title: 'Project Stats',
      count: '25+ completed projects',
    },
    featured: {
      saas: {
        title: 'SaaS Dashboard',
        description:
          'A comprehensive analytics dashboard with real-time data visualization and user management features.',
        tech: 'React • Node.js • PostgreSQL',
      },
      ecommerce: {
        title: 'E-commerce Platform',
        description:
          'Complete e-commerce solution with payment integration, inventory management, and analytics dashboard.',
        duration: '6 months development',
      },
      social: {
        title: 'Social Media App',
        description:
          'Social networking app with real-time messaging, photo sharing, and community features.',
        stats: 'iOS • Android • 10k+ users',
      },
    },
    actions: {
      demo: 'Live Demo',
      github: 'GitHub',
      case: 'Case Study',
      app: 'App Store',
      play: 'Play Store',
    },
  },

  // Experience Page
  experience: {
    title: 'Professional Experience - React Developer Journey',
    description:
      "My professional journey as a React Developer spans across leading technology companies in India, from innovative startups to established enterprises. I've specialized in building scalable eCommerce platforms, gaming applications, and enterprise solutions while mentoring development teams, optimizing performance, and implementing SEO best practices. With expertise in React.js, Next.js, and modern frontend technologies, I've consistently delivered high-quality web applications that achieve perfect Lighthouse scores.",
    cta: {
      timeline: 'View Timeline',
      resume: 'Download Resume',
    },
    chips: {
      developer: 'React Developer',
      frontend: 'Frontend Specialist',
      seo: 'SEO Expert',
      mentor: 'Technical Mentor',
    },
    current: {
      title: 'React Developer',
      company: 'Tekonika Technologies',
      period: 'May 2025 - Present',
      location: 'Pune, Maharashtra',
      description:
        'Leading frontend development for enterprise eCommerce platforms using React.js, Redux state management, and SCSS styling. Achieved perfect 100/100 Lighthouse SEO scores through technical SEO implementation, performance optimization, and Core Web Vitals improvements. Specializing in scalable React architecture, responsive design, and modern JavaScript development practices.',
    },
    skillsGrid: {
      leadership: 'Leadership',
      mentoring: 'Mentoring',
      architecture: 'Architecture',
      innovation: 'Innovation',
    },
  },

  // Contact Page
  contact: {
    title: 'Contact Swapnil Katiyar - React Developer',
    description:
      "Ready to discuss your next React.js project or eCommerce development needs? I'm always excited to connect with fellow developers, potential clients, and businesses looking for expert frontend development services. Whether you need help with React development, performance optimization, SEO implementation, or technical consulting, let's collaborate to build something exceptional together!",
    cta: {
      message: 'Send Message',
      call: 'Schedule Call',
    },
    info: {
      email: 'swapnil240695@gmail.com',
      phone: '+91-7503533658',
      location: 'Noida, India',
      remote: 'Remote Friendly',
    },
    collaboration: {
      title: 'React Development Collaboration',
      description:
        "Whether you have an eCommerce project in mind, need React development expertise, or want to discuss modern frontend technologies, I'd love to hear from you. I specialize in building high-performance web applications with exceptional SEO.",
      response: 'Professional response within 24 hours',
    },
    methods: {
      title: 'How to Reach Me',
      description:
        "I prefer email for initial contact, but I'm also available for phone calls and video meetings. I typically respond within 4 hours during business days. I'm fluent in both Hindi and English.",
      chips: {
        email: 'Email Preferred',
        hindi: 'Hindi Native',
        english: 'English Fluent',
        quick: 'Quick Response',
      },
    },
    services: {
      title: 'React Development Services',
      description:
        "I specialize in React.js and Next.js development with expertise in eCommerce platforms, performance optimization, and SEO implementation. Whether you need help with a new React project, frontend architecture, technical consulting, or development mentoring, I'm here to help you achieve exceptional results.",
      list: {
        fullstack: 'React & Next.js Development',
        consulting: 'Frontend Architecture Consulting',
        review: 'Code Review & Optimization',
        mentoring: 'React Development Mentoring',
      },
      availability: {
        title: 'Availability',
        status: 'Open for new projects',
      },
    },
    social: {
      follow: 'Follow Me',
      platforms: 'GitHub • LinkedIn • LeetCode',
    },
  },

  // Common UI Elements
  ui: {
    buttons: {
      viewMore: 'View More',
      learnMore: 'Learn More',
      getStarted: 'Get Started',
      contact: 'Contact',
      download: 'Download',
      close: 'Close',
      menu: 'Menu',
      back: 'Back',
      next: 'Next',
      previous: 'Previous',
    },
    status: {
      loading: 'Loading...',
      error: 'Something went wrong',
      success: 'Success!',
      notFound: 'Not found',
    },
    accessibility: {
      skipToContent: 'Skip to main content',
      openMenu: 'Open navigation menu',
      closeMenu: 'Close navigation menu',
      searchSite: 'Search website',
    },
  },
};

/**
 * Get content by path (e.g., 'homepage.title' or 'navigation.home')
 */
export function getContent(path) {
  return path.split('.').reduce((obj, key) => obj?.[key], CONTENT);
}

/**
 * Get content with fallback
 */
export function getContentWithFallback(path, fallback = '') {
  return getContent(path) || fallback;
}

/**
 * Replace placeholders in content (e.g., {{name}} with actual values)
 */
export function replaceContentPlaceholders(content, replacements = {}) {
  if (typeof content !== 'string') return content;

  return Object.entries(replacements).reduce(
    (text, [key, value]) => text.replace(new RegExp(`{{${key}}}`, 'g'), value),
    content
  );
}
