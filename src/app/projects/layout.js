import { generatePageMetadata } from '../../lib/seo/metadata.js';
import { getPageSEOConfig } from '../../data/seo-config.js';

// Generate metadata for projects page
export async function generateMetadata() {
  const seoConfig = getPageSEOConfig('projects');

  return generatePageMetadata({
    title: seoConfig.title,
    description: seoConfig.description,
    keywords: seoConfig.keywords,
    path: '/projects',
    ogImage: seoConfig.ogImage,
    type: 'website',
  });
}

export default function ProjectsLayout({ children }) {
  return children;
}
