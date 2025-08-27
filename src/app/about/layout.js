import { generatePageMetadata } from '../../lib/seo/metadata.js';
import { getPageSEOConfig } from '../../data/seo-config.js';

// Generate metadata for about page
export async function generateMetadata() {
  const seoConfig = getPageSEOConfig('about');

  return generatePageMetadata({
    title: seoConfig.title,
    description: seoConfig.description,
    keywords: seoConfig.keywords,
    path: '/about',
    ogImage: seoConfig.ogImage,
    type: 'profile',
  });
}

export default function AboutLayout({ children }) {
  return children;
}
