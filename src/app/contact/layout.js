import { generatePageMetadata } from '../../lib/seo/metadata.js';
import { getPageSEOConfig } from '../../data/seo-config.js';

// Generate metadata for contact page
export async function generateMetadata() {
  const seoConfig = getPageSEOConfig('contact');

  return generatePageMetadata({
    title: seoConfig.title,
    description: seoConfig.description,
    keywords: seoConfig.keywords,
    path: '/contact',
    ogImage: seoConfig.ogImage,
    type: 'website',
  });
}

export default function ContactLayout({ children }) {
  return children;
}
