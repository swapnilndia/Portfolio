/**
 * FAQ Component
 * Displays frequently asked questions with structured data
 */

import { useState } from 'react';
import StructuredData from './StructuredData.js';
import { generateFAQSchema } from '../../lib/seo/schema.js';

export default function FAQ({
  faqs,
  title = 'Frequently Asked Questions',
  className = '',
}) {
  const [openItems, setOpenItems] = useState(new Set());

  if (!faqs || faqs.length === 0) return null;

  const faqSchema = generateFAQSchema(faqs);

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <>
      {/* FAQ Structured Data */}
      <StructuredData data={faqSchema} />

      {/* FAQ Section */}
      <section className={`faq ${className}`}>
        <h2 className="faq__title">{title}</h2>

        <div className="faq__list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq__item ${openItems.has(index) ? 'faq__item--open' : ''}`}
            >
              <button
                className="faq__question"
                onClick={() => toggleItem(index)}
                aria-expanded={openItems.has(index)}
                aria-controls={`faq-answer-${index}`}
              >
                <span>{faq.question}</span>
                <span className="faq__icon" aria-hidden="true">
                  {openItems.has(index) ? '−' : '+'}
                </span>
              </button>

              <div
                id={`faq-answer-${index}`}
                className="faq__answer"
                aria-hidden={!openItems.has(index)}
              >
                <div className="faq__answer-content">
                  {typeof faq.answer === 'string' ? (
                    <p>{faq.answer}</p>
                  ) : (
                    faq.answer
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

/**
 * Common FAQs for the portfolio
 */
export const PORTFOLIO_FAQS = [
  {
    question: 'What technologies do you specialize in?',
    answer:
      'I specialize in React.js, Next.js, JavaScript, TypeScript, Node.js, and modern web technologies. I have extensive experience with SCSS, Redux, RESTful APIs, and performance optimization.',
  },
  {
    question: 'Do you work with remote clients?',
    answer:
      'Yes, I work with clients worldwide and am experienced in remote collaboration. I have worked with international teams and clients, including Dutch financial institutions.',
  },
  {
    question: 'What is your experience with eCommerce development?',
    answer:
      'I have extensive experience building scalable eCommerce platforms with React, Redux, and modern technologies. I achieved a 100/100 Lighthouse SEO score on an eCommerce platform at Tekonika Technologies.',
  },
  {
    question: 'Can you help with performance optimization?',
    answer:
      'Absolutely! Performance optimization is one of my key strengths. I have achieved significant improvements in load times, Core Web Vitals, and overall user experience across multiple projects.',
  },
  {
    question: 'Do you provide mentoring or code review services?',
    answer:
      'Yes, I offer mentoring and code review services. I have mentored 200+ students during my engineering career and 8+ developers during my software development journey.',
  },
  {
    question: 'What is your approach to SEO optimization?',
    answer:
      'I implement comprehensive SEO strategies including technical SEO, structured data, performance optimization, and content optimization. I achieved a perfect 100/100 Lighthouse SEO score on production applications.',
  },
];

/**
 * Developer-specific FAQs
 */
export const DEVELOPER_FAQS = [
  {
    question:
      'How did you transition from structural engineering to software development?',
    answer:
      'I transitioned in 2022 through intensive self-learning and a comprehensive internship at Sharpener Tech. My engineering background provided strong analytical and problem-solving skills that translate well to software development.',
  },
  {
    question: 'What makes you different from other developers?',
    answer:
      'My unique combination of engineering analytical skills, mentoring experience with 200+ students, and focus on performance optimization sets me apart. I bring a systematic approach to problem-solving and a commitment to continuous learning.',
  },
  {
    question: 'What types of projects do you enjoy working on?',
    answer:
      'I particularly enjoy working on eCommerce platforms, performance optimization challenges, and projects that require complex state management. I also love mentoring other developers and contributing to team growth.',
  },
];
