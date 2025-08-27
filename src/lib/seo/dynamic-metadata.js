/**
 * Dynamic Metadata Generation
 * Utilities for generating metadata for dynamic routes and content
 */

import { generatePageMetadata, generateProjectMetadata } from './metadata.js';
import { getProjectKeywords } from './keywords.js';
import { generateCreativeWorkSchema } from './schema.js';

/**
 * Generate metadata for individual project pages
 */
export async function generateProjectPageMetadata(projectSlug) {
  // This would typically fetch project data from a database or CMS
  // For now, we'll use a placeholder structure
  const project = {
    slug: projectSlug,
    title: 'Project Title',
    description: 'Project description',
    technologies: ['React', 'Next.js', 'TypeScript'],
    category: 'Web Application',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-15',
    ogImage: `/projects/${projectSlug}/og-image.jpg`,
  };

  return generateProjectMetadata(project);
}

/**
 * Generate metadata for blog posts (future use)
 */
export async function generateBlogPostMetadata(postSlug) {
  // Placeholder for blog post metadata generation
  const post = {
    slug: postSlug,
    title: 'Blog Post Title',
    description: 'Blog post description',
    publishedAt: '2024-01-01',
    updatedAt: '2024-01-15',
    tags: ['React', 'Development', 'Tutorial'],
    ogImage: `/blog/${postSlug}/og-image.jpg`,
  };

  return generatePageMetadata({
    title: post.title,
    description: post.description,
    keywords: post.tags,
    path: `/blog/${postSlug}`,
    ogImage: post.ogImage,
    type: 'article',
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt,
  });
}

/**
 * Generate structured data for dynamic content
 */
export function generateDynamicStructuredData(type, data) {
  switch (type) {
    case 'project':
      return generateCreativeWorkSchema(data);
    default:
      return null;
  }
}
