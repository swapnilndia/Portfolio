/**
 * Breadcrumbs Component
 * Provides navigation breadcrumbs with structured data
 */

import Link from 'next/link';
import StructuredData from './StructuredData.js';
import { generateBreadcrumbSchema } from '../../lib/seo/schema.js';

export default function Breadcrumbs({ items, className = '' }) {
  if (!items || items.length <= 1) return null;

  const breadcrumbSchema = generateBreadcrumbSchema(items);

  return (
    <>
      {/* Breadcrumb Structured Data */}
      <StructuredData data={breadcrumbSchema} />

      {/* Breadcrumb Navigation */}
      <nav
        className={`breadcrumbs ${className}`}
        aria-label="Breadcrumb navigation"
      >
        <ol className="breadcrumbs__list">
          {items.map((item, index) => (
            <li key={index} className="breadcrumbs__item">
              {index < items.length - 1 ? (
                <>
                  <Link
                    href={item.path}
                    className="breadcrumbs__link"
                    aria-label={`Navigate to ${item.name}`}
                  >
                    {item.name}
                  </Link>
                  <span className="breadcrumbs__separator" aria-hidden="true">
                    /
                  </span>
                </>
              ) : (
                <span className="breadcrumbs__current" aria-current="page">
                  {item.name}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

/**
 * Generate breadcrumb items for different pages
 */
export function generateBreadcrumbItems(currentPage, additionalItems = []) {
  const baseBreadcrumbs = [{ name: 'Home', path: '/' }];

  const pageBreadcrumbs = {
    about: [...baseBreadcrumbs, { name: 'About', path: '/about' }],
    projects: [...baseBreadcrumbs, { name: 'Projects', path: '/projects' }],
    experience: [
      ...baseBreadcrumbs,
      { name: 'Experience', path: '/experience' },
    ],
    contact: [...baseBreadcrumbs, { name: 'Contact', path: '/contact' }],
  };

  const breadcrumbs = pageBreadcrumbs[currentPage] || baseBreadcrumbs;

  // Add any additional items (for dynamic pages)
  return [...breadcrumbs, ...additionalItems];
}

/**
 * Breadcrumb wrapper for easy page integration
 */
export function PageBreadcrumbs({ page, additionalItems, className }) {
  const items = generateBreadcrumbItems(page, additionalItems);

  return <Breadcrumbs items={items} className={className} />;
}
