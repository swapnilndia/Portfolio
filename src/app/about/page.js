import StructuredData from '../../components/SEO/StructuredData.js';
import { getPageSEOConfig } from '../../data/seo-config.js';
import { getContent } from '../../data/content.js';
import { generatePageMetadata } from '../../lib/seo/metadata.js';

// Generate metadata for about page
export async function generateMetadata() {
  const seoConfig = getPageSEOConfig('about');

  return generatePageMetadata({
    title: seoConfig.title,
    description: seoConfig.description,
    keywords: seoConfig.keywords,
    path: '/about',
    ogImage: seoConfig.ogImage,
    type: seoConfig.ogType || 'profile',
  });
}

export default function About() {
  const seoConfig = getPageSEOConfig('about');

  return (
    <>
      {/* Structured Data for About Page */}
      {seoConfig.structuredData.map((data, index) => (
        <StructuredData key={index} data={data} />
      ))}

      <div className="wrap">
        {/* About Section - Left aligned (default) */}
        <section
          className="hero"
          style={{ marginTop: 'clamp(48px, 6vw, 80px)' }}
        >
          <div>
            <h1 className="title">{getContent('about.title')}</h1>
            <p className="subtitle">{getContent('about.intro')}</p>
            <p className="subtitle">{getContent('about.journey')}</p>

            <div className="cta-row">
              <button className="btn primary">
                {getContent('about.cta.resume')}
              </button>
              <button className="btn ghost">
                {getContent('about.cta.contact')}
              </button>
            </div>

            <div className="chips">
              <span className="chip">
                {getContent('about.chips.developer')}
              </span>
              <span className="chip">{getContent('about.chips.react')}</span>
              <span className="chip">{getContent('about.chips.seo')}</span>
              <span className="chip">{getContent('about.chips.mentor')}</span>
            </div>
          </div>

          <div className="stack">
            {/* Skills Card */}
            <div className="product">
              <div
                className="mock-img"
                style={{
                  background: `
                  radial-gradient(120% 120% at 30% 80%, rgba(255,255,255,0.9), rgba(255,255,255,0.08) 45%, rgba(255,255,255,0) 60%),
                  conic-gradient(from 180deg at 70% 30%, #60a5fa, #34d399, #f472b6, #60a5fa)
                `,
                }}
              ></div>
              <div className="meta">
                <h3>Technical Skills</h3>
                <p>
                  Proficient in modern web technologies with a focus on
                  performance and user experience.
                </p>
                <div className="price">Frontend • Backend • DevOps</div>
                <div className="buy-row">
                  <button className="btn primary">View Skills</button>
                  <button className="btn ghost">Download CV</button>
                </div>
              </div>
            </div>

            {/* Education/Certification */}
            <div className="player">
              <div
                className="cover"
                style={{
                  background: 'linear-gradient(135deg, #f472b6, #db2777)',
                }}
              ></div>
              <div className="track">
                <div className="name">Background</div>
                <div className="artist">
                  Structural Engineering • Frontend Developer
                </div>
              </div>
              <button className="play">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* My Journey - Right aligned (reverse) */}
        <section
          className="hero hero--reverse"
          style={{ marginTop: 'clamp(24px, 4vw, 48px)' }}
        >
          <div className="stack">
            {/* Philosophy */}
            <div className="product">
              <div
                className="mock-img"
                style={{
                  background: `
                  radial-gradient(120% 120% at 60% 40%, rgba(255,255,255,0.9), rgba(255,255,255,0.08) 45%, rgba(255,255,255,0) 60%),
                  conic-gradient(from 45deg at 40% 60%, #34d399, #60a5fa, #f472b6, #34d399)
                `,
                }}
              ></div>
              <div className="meta">
                <h3>My Philosophy</h3>
                <p>
                  Building products that don&apos;t just work, but feel
                  effortless. Clean, maintainable code with a focus on
                  performance and user experience.
                </p>
                <div className="price">Quality • Innovation • Impact</div>
                <div className="buy-row">
                  <button className="btn primary">My Values</button>
                  <button className="btn ghost">Work Style</button>
                </div>
              </div>
            </div>

            {/* Current Focus */}
            <div className="player">
              <div
                className="cover"
                style={{
                  background: 'linear-gradient(135deg, #60a5fa, #2563eb)',
                }}
              ></div>
              <div className="track">
                <div className="name">Current Focus</div>
                <div className="artist">
                  eCommerce • Gaming • Performance Optimization
                </div>
              </div>
              <button className="play">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1" />
                </svg>
              </button>
            </div>
          </div>

          <div>
            <h2
              className="title"
              style={{ fontSize: 'clamp(24px, 4vw, 36px)' }}
            >
              {getContent('about.sections.journey.title')}
            </h2>
            <p className="subtitle">
              <strong>2019–2022:</strong>{' '}
              {getContent('about.sections.journey.timeline.2019')}
            </p>
            <p className="subtitle">
              <strong>2022:</strong>{' '}
              {getContent('about.sections.journey.timeline.2022')}
            </p>
            <p className="subtitle">
              <strong>2023–2024:</strong>{' '}
              {getContent('about.sections.journey.timeline.2023')}
            </p>
            <p className="subtitle">
              <strong>2025:</strong>{' '}
              {getContent('about.sections.journey.timeline.2025')}
            </p>

            <div className="chips">
              <span className="chip">
                {getContent('about.sections.journey.chips.started')}
              </span>
              <span className="chip">
                {getContent('about.sections.journey.chips.pivot')}
              </span>
              <span className="chip">
                {getContent('about.sections.journey.chips.learner')}
              </span>
              <span className="chip">
                {getContent('about.sections.journey.chips.solver')}
              </span>
            </div>
          </div>
        </section>

        {/* Skills & Technologies - Left aligned */}
        <section
          className="hero"
          style={{ marginTop: 'clamp(24px, 4vw, 48px)' }}
        >
          <div>
            <h2
              className="title"
              style={{ fontSize: 'clamp(24px, 4vw, 36px)' }}
            >
              {getContent('about.sections.skills.title')}
            </h2>
            <p className="subtitle">
              <strong>Frontend:</strong>{' '}
              {getContent('about.sections.skills.categories.frontend')}
            </p>
            <p className="subtitle">
              <strong>UI & State:</strong>{' '}
              {getContent('about.sections.skills.categories.ui')}
            </p>
            <p className="subtitle">
              <strong>Integration:</strong>{' '}
              {getContent('about.sections.skills.categories.integration')}
            </p>
            <p className="subtitle">
              <strong>Tools:</strong>{' '}
              {getContent('about.sections.skills.categories.tools')}
            </p>
            <p className="subtitle">
              {getContent('about.sections.skills.note')}
            </p>

            <div className="cta-row">
              <button className="btn primary">View Portfolio</button>
              <button className="btn ghost">Download CV</button>
            </div>

            <div className="chips">
              <span className="chip">
                {getContent('about.sections.skills.chips.react')}
              </span>
              <span className="chip">
                {getContent('about.sections.skills.chips.typescript')}
              </span>
              <span className="chip">
                {getContent('about.sections.skills.chips.scss')}
              </span>
              <span className="chip">
                {getContent('about.sections.skills.chips.aws')}
              </span>
            </div>
          </div>

          <div className="stack">
            {/* Tech Stack Card */}
            <div className="product">
              <div
                className="mock-img"
                style={{
                  background: `
                  radial-gradient(120% 120% at 80% 20%, rgba(255,255,255,0.9), rgba(255,255,255,0.08) 45%, rgba(255,255,255,0) 60%),
                  conic-gradient(from 45deg at 40% 40%, #34d399, #60a5fa, #f472b6, #34d399)
                `,
                }}
              ></div>
              <div className="meta">
                <h3>Tech Stack</h3>
                <p>
                  Modern technologies and tools I use to build scalable,
                  performant applications.
                </p>
                <div className="price">Frontend • Backend • DevOps</div>
                <div className="buy-row">
                  <button className="btn primary">View Projects</button>
                  <button className="btn ghost">Tech Details</button>
                </div>
              </div>
            </div>

            {/* Learning Status */}
            <div className="player">
              <div
                className="cover"
                style={{
                  background: 'linear-gradient(135deg, #34d399, #059669)',
                }}
              ></div>
              <div className="track">
                <div className="name">Always Learning</div>
                <div className="artist">New Technologies • Best Practices</div>
              </div>
              <button className="play">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="16,18 22,12 16,6" />
                  <polyline points="8,6 2,12 8,18" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Skills Grid */}
        <section
          className="icon-row"
          style={{ marginTop: 'clamp(48px, 6vw, 80px)' }}
        >
          <div className="icon-card">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
              <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
            </svg>
            <span>Frontend</span>
          </div>
          <div className="icon-card">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
            <span>Backend</span>
          </div>
          <div className="icon-card">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <ellipse cx="12" cy="5" rx="9" ry="3" />
              <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
              <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
            </svg>
            <span>Database</span>
          </div>
          <div className="icon-card">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
            <span>DevOps</span>
          </div>
        </section>

        {/* Footer */}
        <footer
          className="foot"
          style={{ marginTop: 'clamp(48px, 6vw, 80px)' }}
        >
          <p>{getContent('global.builtWith')}</p>
          <p style={{ marginTop: '8px', fontSize: '12px', opacity: '0.7' }}>
            {getContent('global.copyright')}
          </p>
        </footer>
      </div>
    </>
  );
}
