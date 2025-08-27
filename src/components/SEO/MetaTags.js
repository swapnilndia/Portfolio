/**
 * MetaTags Component
 * Reusable component for generating SEO meta tags
 */

import { generateMetaKeywords } from '../../lib/seo/keywords.js';

export default function MetaTags({
  title,
  description,
  keywords = [],
  canonical,
  noindex = false,
  ogImage,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  author = 'Swapnil Katiyar',
  publishedTime,
  modifiedTime,
  children,
}) {
  const metaKeywords = generateMetaKeywords(keywords);

  return (
    <>
      {/* Basic Meta Tags */}
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {metaKeywords && <meta name="keywords" content={metaKeywords} />}
      {author && <meta name="author" content={author} />}

      {/* Robots Meta */}
      <meta
        name="robots"
        content={noindex ? 'noindex,nofollow' : 'index,follow'}
      />
      <meta
        name="googlebot"
        content={
          noindex
            ? 'noindex,nofollow'
            : 'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1'
        }
      />

      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph Meta Tags */}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      <meta property="og:type" content={ogType} />
      {canonical && <meta property="og:url" content={canonical} />}
      {ogImage && <meta property="og:image" content={ogImage} />}
      {ogImage && (
        <meta
          property="og:image:alt"
          content={title || 'Swapnil Katiyar Portfolio'}
        />
      )}
      <meta property="og:site_name" content="Swapnil Katiyar Portfolio" />
      <meta property="og:locale" content="en_US" />

      {/* Article specific Open Graph tags */}
      {ogType === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {ogType === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {ogType === 'article' && author && (
        <meta property="article:author" content={author} />
      )}

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      <meta name="twitter:creator" content="@swapnilndia" />
      <meta name="twitter:site" content="@swapnilndia" />

      {/* Additional Meta Tags */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />

      {/* Viewport for mobile optimization */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />

      {/* Additional custom meta tags */}
      {children}
    </>
  );
}

/**
 * Specialized meta tags for different page types
 */

export function HomePageMeta({ structuredData }) {
  return (
    <MetaTags
      title="Swapnil Katiyar - Full-Stack Developer & Frontend Specialist"
      description="Experienced full-stack developer specializing in React, Next.js, and modern web technologies. Building scalable eCommerce platforms with 100/100 Lighthouse SEO scores in Noida, India."
      keywords={[
        'Swapnil Katiyar',
        'Full-Stack Developer',
        'React Developer',
        'Next.js Developer',
        'Frontend Developer',
        'JavaScript Developer',
        'Web Developer India',
        'eCommerce Developer',
        'SEO Optimization',
        'Performance Optimization',
      ]}
      canonical="https://swapnilkatiyar.dev"
      ogImage="https://swapnilkatiyar.dev/og-home.jpg"
      ogType="profile"
    >
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </MetaTags>
  );
}

export function AboutPageMeta({ structuredData }) {
  return (
    <MetaTags
      title="About Swapnil Katiyar - Full-Stack Developer Journey"
      description="Learn about Swapnil Katiyar's journey from Structural Engineer to Full-Stack Developer. Expertise in React, Next.js, and modern web technologies with 200+ students mentored."
      keywords={[
        'About Swapnil Katiyar',
        'Developer Background',
        'Career Transition',
        'Structural Engineer to Developer',
        'React Developer Experience',
        'Frontend Developer Journey',
        'Self-Taught Developer',
        'Mentoring Experience',
      ]}
      canonical="https://swapnilkatiyar.dev/about"
      ogImage="https://swapnilkatiyar.dev/og-about.jpg"
    >
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </MetaTags>
  );
}

export function ProjectsPageMeta({ structuredData }) {
  return (
    <MetaTags
      title="Projects - Full-Stack Development Portfolio"
      description="Explore Swapnil Katiyar's portfolio of React, Next.js, and full-stack projects including eCommerce platforms, gaming applications, and enterprise solutions."
      keywords={[
        'Web Development Projects',
        'React Projects',
        'Next.js Projects',
        'eCommerce Projects',
        'Full-Stack Projects',
        'Portfolio Projects',
        'JavaScript Projects',
        'TypeScript Projects',
      ]}
      canonical="https://swapnilkatiyar.dev/projects"
      ogImage="https://swapnilkatiyar.dev/og-projects.jpg"
    >
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </MetaTags>
  );
}

export function ExperiencePageMeta({ structuredData }) {
  return (
    <MetaTags
      title="Professional Experience - Software Developer Career"
      description="Swapnil Katiyar's professional experience as Software Developer at Tekonika Technologies, WagerGeeks, Treeroot Informatics, and Sharpener Tech. Frontend and full-stack development expertise."
      keywords={[
        'Professional Experience',
        'Software Developer Experience',
        'Frontend Developer Career',
        'React Developer Experience',
        'Full-Stack Developer Career',
        'Tekonika Technologies',
        'WagerGeeks',
        'Treeroot Informatics',
      ]}
      canonical="https://swapnilkatiyar.dev/experience"
      ogImage="https://swapnilkatiyar.dev/og-experience.jpg"
    >
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </MetaTags>
  );
}

export function ContactPageMeta({ structuredData }) {
  return (
    <MetaTags
      title="Contact - Hire Full-Stack Developer"
      description="Contact Swapnil Katiyar for full-stack development projects, React/Next.js development, eCommerce solutions, and technical consulting. Available for remote work worldwide."
      keywords={[
        'Contact Developer',
        'Hire Full-Stack Developer',
        'React Developer for Hire',
        'Freelance Developer',
        'Development Services',
        'Technical Consulting',
        'Remote Developer',
        'Project Collaboration',
      ]}
      canonical="https://swapnilkatiyar.dev/contact"
      ogImage="https://swapnilkatiyar.dev/og-contact.jpg"
    >
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </MetaTags>
  );
}
