import StructuredData from '../../components/SEO/StructuredData.js';
import { generateAllProjectsSchema } from '../../data/projects.js';
import { getContent } from '../../data/content.js';
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
    type: seoConfig.ogType || 'website',
  });
}

export default function Projects() {
  const projectsSchema = generateAllProjectsSchema();

  return (
    <>
      {/* Structured Data for Projects Page */}
      {projectsSchema.map((data, index) => (
        <StructuredData key={index} data={data} />
      ))}

      <main className="wrap">
        {/* Projects Header */}
        <header
          className="hero"
          style={{ marginTop: 'clamp(48px, 6vw, 80px)' }}
        >
          <div>
            <h1
              className="title"
              style={{ fontSize: 'clamp(28px, 5vw, 42px)' }}
            >
              {getContent('projects.title')}
            </h1>
            <p className="subtitle">{getContent('projects.description')}</p>

            <nav
              className="cta-row"
              style={{ marginTop: 'clamp(20px, 3vw, 32px)' }}
              aria-label="Project navigation"
            >
              <button className="btn primary" aria-label="View all projects">
                {getContent('projects.cta.all')}
              </button>
              <button className="btn ghost" aria-label="Visit GitHub profile">
                {getContent('projects.cta.github')}
              </button>
            </nav>

            <div className="chips" role="list" aria-label="Project categories">
              <span className="chip" role="listitem">
                {getContent('projects.categories.web')}
              </span>
              <span className="chip" role="listitem">
                {getContent('projects.categories.mobile')}
              </span>
              <span className="chip" role="listitem">
                {getContent('projects.categories.api')}
              </span>
              <span className="chip" role="listitem">
                {getContent('projects.categories.opensource')}
              </span>
            </div>
          </div>

          <aside className="stack">
            {/* Featured Project */}
            <article className="product">
              <div
                className="mock-img"
                style={{
                  background: `
                  radial-gradient(120% 120% at 40% 60%, rgba(255,255,255,0.9), rgba(255,255,255,0.08) 45%, rgba(255,255,255,0) 60%),
                  conic-gradient(from 90deg at 60% 40%, #f472b6, #34d399, #60a5fa, #f472b6)
                `,
                }}
                role="img"
                aria-label="SaaS Dashboard project preview"
              ></div>
              <div className="meta">
                <h3>{getContent('projects.featured.saas.title')}</h3>
                <p>{getContent('projects.featured.saas.description')}</p>
                <div className="price">
                  {getContent('projects.featured.saas.tech')}
                </div>
                <div className="buy-row">
                  <button
                    className="btn primary"
                    aria-label="View SaaS Dashboard demo"
                  >
                    {getContent('projects.actions.demo')}
                  </button>
                  <button
                    className="btn ghost"
                    aria-label="View SaaS Dashboard source code"
                  >
                    {getContent('projects.actions.github')}
                  </button>
                </div>
              </div>
            </article>

            {/* Project Stats */}
            <aside className="player">
              <div
                className="cover"
                style={{
                  background: 'linear-gradient(135deg, #34d399, #059669)',
                }}
                role="img"
                aria-label="Project statistics visualization"
              ></div>
              <div className="track">
                <div className="name">{getContent('projects.stats.title')}</div>
                <div className="artist">
                  {getContent('projects.stats.count')}
                </div>
              </div>
              <button className="play" aria-label="View project statistics">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M18 20V10" />
                  <path d="M12 20V4" />
                  <path d="M6 20v-6" />
                </svg>
              </button>
            </aside>
          </aside>
        </header>

        {/* E-commerce Project - Reverse Layout */}
        <section
          className="hero hero--reverse"
          style={{ marginTop: 'clamp(48px, 6vw, 80px)' }}
          aria-labelledby="ecommerce-project-heading"
        >
          <aside className="stack">
            <article className="product">
              <div
                className="mock-img"
                style={{
                  background: `
                  radial-gradient(120% 120% at 80% 20%, rgba(255,255,255,0.9), rgba(255,255,255,0.08) 45%, rgba(255,255,255,0) 60%),
                  conic-gradient(from 45deg at 40% 40%, #34d399, #60a5fa, #f472b6, #34d399)
                `,
                }}
                role="img"
                aria-label="E-commerce platform project preview"
              ></div>
              <div className="meta">
                <h3>{getContent('projects.featured.ecommerce.title')}</h3>
                <p>{getContent('projects.featured.ecommerce.description')}</p>
                <div className="price">
                  {getContent('projects.featured.ecommerce.duration')}
                </div>
                <div className="buy-row">
                  <button
                    className="btn primary"
                    aria-label="View e-commerce platform demo"
                  >
                    {getContent('projects.actions.demo')}
                  </button>
                  <button
                    className="btn ghost"
                    aria-label="Read e-commerce platform case study"
                  >
                    {getContent('projects.actions.case')}
                  </button>
                </div>
              </div>
            </article>

            <aside className="player">
              <div
                className="cover"
                style={{
                  background: 'linear-gradient(135deg, #60a5fa, #2563eb)',
                }}
                role="img"
                aria-label="E-commerce platform features visualization"
              ></div>
              <div className="track">
                <div className="name">Key Features</div>
                <div className="artist">Payment • Inventory • Analytics</div>
              </div>
              <button
                className="play"
                aria-label="Explore e-commerce platform features"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-4m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                </svg>
              </button>
            </aside>
          </aside>

          <div>
            <h2
              id="ecommerce-project-heading"
              className="title"
              style={{ fontSize: 'clamp(24px, 4vw, 36px)' }}
            >
              E-commerce Platform
            </h2>
            <p className="subtitle">
              Complete e-commerce solution with payment integration, inventory
              management, and analytics dashboard. Built with modern
              technologies for scalability and performance.
            </p>

            <div
              className="chips"
              role="list"
              aria-label="E-commerce project technologies"
            >
              <span className="chip" role="listitem">
                React
              </span>
              <span className="chip" role="listitem">
                Node.js
              </span>
              <span className="chip" role="listitem">
                Stripe
              </span>
              <span className="chip" role="listitem">
                MongoDB
              </span>
            </div>
          </div>
        </section>

        {/* Mobile App Project - Back to Default Layout */}
        <section
          className="hero"
          style={{ marginTop: 'clamp(48px, 6vw, 80px)' }}
          aria-labelledby="social-app-heading"
        >
          <div>
            <h2
              id="social-app-heading"
              className="title"
              style={{ fontSize: 'clamp(24px, 4vw, 36px)' }}
            >
              Social Media App
            </h2>
            <p className="subtitle">
              Cross-platform social networking application with real-time
              messaging, photo sharing, and community features. Built with React
              Native for optimal performance on both iOS and Android platforms.
            </p>

            <div
              className="chips"
              role="list"
              aria-label="Social media app technologies"
            >
              <span className="chip" role="listitem">
                React Native
              </span>
              <span className="chip" role="listitem">
                Firebase
              </span>
              <span className="chip" role="listitem">
                Redux
              </span>
              <span className="chip" role="listitem">
                Real-time
              </span>
            </div>
          </div>

          <aside className="stack">
            <article className="product">
              <div
                className="mock-img"
                style={{
                  background: `
                  radial-gradient(120% 120% at 30% 70%, rgba(255,255,255,0.9), rgba(255,255,255,0.08) 45%, rgba(255,255,255,0) 60%),
                  conic-gradient(from 270deg at 70% 30%, #f472b6, #60a5fa, #34d399, #f472b6)
                `,
                }}
                role="img"
                aria-label="Social media app project preview"
              ></div>
              <div className="meta">
                <h3>{getContent('projects.featured.social.title')}</h3>
                <p>{getContent('projects.featured.social.description')}</p>
                <div className="price">
                  {getContent('projects.featured.social.stats')}
                </div>
                <div className="buy-row">
                  <button
                    className="btn primary"
                    aria-label="Download social media app from App Store"
                  >
                    {getContent('projects.actions.app')}
                  </button>
                  <button
                    className="btn ghost"
                    aria-label="Download social media app from Google Play"
                  >
                    {getContent('projects.actions.play')}
                  </button>
                </div>
              </div>
            </article>

            <aside className="player">
              <div
                className="cover"
                style={{
                  background: 'linear-gradient(135deg, #f472b6, #db2777)',
                }}
                role="img"
                aria-label="User engagement metrics visualization"
              ></div>
              <div className="track">
                <div className="name">User Engagement</div>
                <div className="artist">95% retention rate</div>
              </div>
              <button
                className="play"
                aria-label="View user engagement statistics"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </button>
            </aside>
          </aside>
        </section>

        {/* Projects Grid */}
        <section
          className="icon-row"
          style={{ marginTop: 'clamp(48px, 6vw, 80px)' }}
          aria-labelledby="project-categories-heading"
        >
          <h2 id="project-categories-heading" className="sr-only">
            Project Categories
          </h2>
          <article className="icon-card">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              <polyline points="3.27,6.96 12,12.01 20.73,6.96" />
              <line x1="12" y1="22.08" x2="12" y2="12" />
            </svg>
            <span>API Services</span>
          </article>
          <article className="icon-card">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span>Portfolio Sites</span>
          </article>
          <article className="icon-card">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
            <span>Web Apps</span>
          </article>
          <article className="icon-card">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
              <line x1="4" y1="22" x2="4" y2="15" />
            </svg>
            <span>Open Source</span>
          </article>
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
      </main>
    </>
  );
}
