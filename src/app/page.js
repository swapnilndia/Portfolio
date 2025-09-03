import { generatePageMetadata } from '../lib/seo/metadata.js';
import { getPageSEOConfig } from '../data/seo-config.js';
import StructuredData from '../components/SEO/StructuredData.js';
import { getContent } from '../data/content.js';

// Generate metadata for homepage
export async function generateMetadata() {
  const seoConfig = getPageSEOConfig('home');

  return generatePageMetadata({
    title: seoConfig.title,
    description: seoConfig.description,
    keywords: seoConfig.keywords,
    path: '',
    ogImage: seoConfig.ogImage,
    type: seoConfig.ogType || 'website',
  });
}

export default function Home() {
  const seoConfig = getPageSEOConfig('home');

  return (
    <>
      {/* Structured Data for Homepage */}
      {seoConfig.structuredData.map((data, index) => (
        <StructuredData key={index} data={data} />
      ))}

      <div className="wrap">
        {/* Hero Section */}
        <section className="hero">
          <div>
            <h1 className="title">
              {getContent('homepage.title')
                .split('\n')
                .map((line, index) => (
                  <span key={index}>
                    {line}
                    {index === 0 && <br />}
                  </span>
                ))}
            </h1>
            <p className="subtitle">{getContent('homepage.subtitle')}</p>

            <div className="cta-row">
              <a href="/projects" className="btn primary">
                {getContent('homepage.cta.primary')}
              </a>
              <a href="/contact" className="btn ghost">
                {getContent('homepage.cta.secondary')}
              </a>
            </div>

            <div className="chips">
              <span className="chip">
                {getContent('homepage.skills.react')}
              </span>
              <span className="chip">{getContent('homepage.skills.node')}</span>
              <span className="chip">
                {getContent('homepage.skills.typescript')}
              </span>
              <span className="chip">{getContent('homepage.skills.scss')}</span>
              <span className="chip">
                {getContent('homepage.skills.mongodb')}
              </span>
            </div>
          </div>

          <div className="stack">
            {/* Featured Project */}
            <div className="product">
              <div className="mock-img"></div>
              <div className="meta">
                <h3>{getContent('homepage.currentProject.title')}</h3>
                <p>{getContent('homepage.currentProject.description')}</p>
                <div className="price">
                  {getContent('homepage.currentProject.status')}
                </div>
                <div className="buy-row">
                  <a href="/projects" className="btn primary">
                    {getContent('homepage.currentProject.actions.demo')}
                  </a>
                  <button className="btn ghost">
                    {getContent('homepage.currentProject.actions.code')}
                  </button>
                </div>
              </div>
            </div>

            {/* Music Player Component */}
            <div className="player">
              <div className="cover"></div>
              <div className="track">
                <div className="name">
                  {getContent('homepage.currentRole.title')}
                </div>
                <div className="artist">
                  {getContent('homepage.currentRole.company')}
                </div>
              </div>
              <button className="play">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Third Section - Back to Left Aligned */}
        <section
          className="hero"
          style={{ marginTop: 'clamp(24px, 4vw, 48px)' }}
        >
          <div>
            <h2
              className="title"
              style={{ fontSize: 'clamp(20px, 3vw, 32px)' }}
            >
              {getContent('homepage.approach.title')}
            </h2>
            <p className="subtitle">
              {getContent('homepage.approach.description')}
            </p>

            <div className="chips">
              <span className="chip">
                {getContent('homepage.approach.values.userCentered')}
              </span>
              <span className="chip">
                {getContent('homepage.approach.values.performanceFirst')}
              </span>
              <span className="chip">
                {getContent('homepage.approach.values.cleanCode')}
              </span>
              <span className="chip">
                {getContent('homepage.approach.values.accessibility')}
              </span>
            </div>
          </div>

          <div className="stack">
            {/* Philosophy Card */}
            <div className="product">
              <div
                className="mock-img"
                style={{
                  background: `
                  radial-gradient(120% 120% at 30% 80%, rgba(255,255,255,0.9), rgba(255,255,255,0.08) 45%, rgba(255,255,255,0) 60%),
                  conic-gradient(from 270deg at 60% 40%, #f472b6, #34d399, #60a5fa, #f472b6)
                `,
                }}
              ></div>
              <div className="meta">
                <h3>{getContent('homepage.philosophy.title')}</h3>
                <p>{getContent('homepage.philosophy.description')}</p>
                <div className="price">
                  {getContent('homepage.philosophy.focus')}
                </div>
                <div className="buy-row">
                  <a href="/about" className="btn primary">
                    {getContent('homepage.philosophy.actions.learn')}
                  </a>
                  <button className="btn ghost">
                    {getContent('homepage.philosophy.actions.process')}
                  </button>
                </div>
              </div>
            </div>

            {/* Tools Component */}
            <div className="player">
              <div
                className="cover"
                style={{
                  background: 'linear-gradient(135deg, #f472b6, #db2777)',
                }}
              ></div>
              <div className="track">
                <div className="name">{getContent('homepage.tools.title')}</div>
                <div className="artist">
                  {getContent('homepage.tools.list')}
                </div>
              </div>
              <button className="play">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Skills Grid */}
        <section className="icon-row">
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
            <span>{getContent('homepage.skillsGrid.frontend')}</span>
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
            <span>{getContent('homepage.skillsGrid.backend')}</span>
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
            <span>{getContent('homepage.skillsGrid.database')}</span>
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
            <span>{getContent('homepage.skillsGrid.devops')}</span>
          </div>
        </section>

        {/* Additional Projects - Reversed Layout */}
        <section
          className="hero hero--reverse"
          style={{ marginTop: 'clamp(24px, 4vw, 48px)' }}
        >
          <div className="stack">
            {/* Second Project */}
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
                <h3>E-commerce Platform</h3>
                <p>
                  Full-stack e-commerce solution with payment integration,
                  inventory management, and analytics.
                </p>
                <div className="price">React • Node.js • Stripe</div>
                <div className="buy-row">
                  <a href="/projects" className="btn primary">
                    View Project
                  </a>
                  <button className="btn ghost">Case Study</button>
                </div>
              </div>
            </div>

            {/* Status Component */}
            <div className="player">
              <div
                className="cover"
                style={{
                  background: 'linear-gradient(135deg, #34d399, #059669)',
                }}
              ></div>
              <div className="track">
                <div className="name">
                  {getContent('homepage.status.title')}
                </div>
                <div className="artist">
                  {getContent('homepage.status.description')}
                </div>
              </div>
              <button className="play">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </button>
            </div>
          </div>

          <div>
            <h2
              className="title"
              style={{ fontSize: 'clamp(20px, 3vw, 32px)' }}
            >
              {getContent('homepage.projects.title')}
            </h2>
            <p className="subtitle">
              {getContent('homepage.projects.description')}
            </p>

            <div className="chips">
              <span className="chip">
                {getContent('homepage.projects.categories.ecommerce')}
              </span>
              <span className="chip">
                {getContent('homepage.projects.categories.saas')}
              </span>
              <span className="chip">
                {getContent('homepage.projects.categories.mobile')}
              </span>
              <span className="chip">
                {getContent('homepage.projects.categories.api')}
              </span>
            </div>
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
