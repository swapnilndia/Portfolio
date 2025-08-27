import { generatePageMetadata } from '../../lib/seo/metadata.js';
import { getPageSEOConfig } from '../../data/seo-config.js';

// Generate metadata for experience page
export async function generateMetadata() {
  const seoConfig = getPageSEOConfig('experience');

  return generatePageMetadata({
    title: seoConfig.title,
    description: seoConfig.description,
    keywords: seoConfig.keywords,
    path: '/experience',
    ogImage: seoConfig.ogImage,
    type: 'website',
  });
}

export default function ExperienceLayout({ children }) {
  return children;
}
