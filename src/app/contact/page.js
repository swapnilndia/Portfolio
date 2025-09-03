import StructuredData from '../../components/SEO/StructuredData.js';
import { getPageSEOConfig } from '../../data/seo-config.js';
import { generatePageMetadata } from '../../lib/seo/metadata.js';
import ContactPageContent from '../../components/Contact/ContactPage.js';

// Generate metadata for contact page
export async function generateMetadata() {
  const seoConfig = getPageSEOConfig('contact');

  return generatePageMetadata({
    title: seoConfig.title,
    description: seoConfig.description,
    keywords: seoConfig.keywords,
    path: '/contact',
    ogImage: seoConfig.ogImage,
    type: seoConfig.ogType || 'website',
  });
}

export default function Contact() {
  const seoConfig = getPageSEOConfig('contact');

  return (
    <>
      {/* Structured Data for Contact Page */}
      {seoConfig.structuredData.map((data, index) => (
        <StructuredData key={index} data={data} />
      ))}

      <ContactPageContent />
    </>
  );
}
