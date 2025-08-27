/**
 * StructuredData Component
 * Renders JSON-LD structured data for SEO
 */

import { validateStructuredData } from '../../lib/seo/schema.js';

export default function StructuredData({ data, validate = true }) {
  // Validate structured data in development
  if (process.env.NODE_ENV === 'development' && validate) {
    const validation = validateStructuredData(data);
    if (!validation.valid) {
      console.warn('Invalid structured data:', validation.errors);
    }
  }

  if (!data) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(
          data,
          null,
          process.env.NODE_ENV === 'development' ? 2 : 0
        ),
      }}
    />
  );
}

/**
 * Multiple structured data items
 */
export function MultipleStructuredData({ dataArray, validate = true }) {
  if (!dataArray || !Array.isArray(dataArray)) return null;

  return (
    <>
      {dataArray.map((data, index) => (
        <StructuredData key={index} data={data} validate={validate} />
      ))}
    </>
  );
}

/**
 * Structured data with error boundary
 */
export function SafeStructuredData({ data, fallback = null, validate = true }) {
  try {
    return <StructuredData data={data} validate={validate} />;
  } catch (error) {
    console.error('Error rendering structured data:', error);
    return fallback;
  }
}
