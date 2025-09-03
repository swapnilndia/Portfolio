'use client';

import { getContent } from '../../data/content.js';

export default function ContactPageContent() {
  return (
    <main className="wrap">
      {/* Contact Header */}
      <header className="hero" style={{ marginTop: 'clamp(48px, 6vw, 80px)' }}>
        <div>
          <h1 className="title" style={{ fontSize: 'clamp(28px, 5vw, 42px)' }}>
            {getContent('contact.title')}
          </h1>
          <p className="subtitle">{getContent('contact.description')}</p>

          <nav
            className="cta-row"
            style={{ marginTop: 'clamp(20px, 3vw, 32px)' }}
            aria-label="Contact actions"
          >
            <button
              className="btn primary"
              onClick={() =>
                window.open('mailto:swapnil240695@gmail.com', '_blank')
              }
              aria-label="Send email to Swapnil Katiyar"
            >
              {getContent('contact.cta.message')}
            </button>
            <button
              className="btn ghost"
              onClick={() =>
                window.open(
                  'https://www.linkedin.com/in/swapnilndia/',
                  '_blank'
                )
              }
              aria-label="Connect on LinkedIn"
            >
              {getContent('contact.cta.call')}
            </button>
          </nav>

          <address
            className="chips"
            role="list"
            aria-label="Contact information"
          >
            <span className="chip" role="listitem">
              {getContent('contact.info.email')}
            </span>
            <span className="chip" role="listitem">
              {getContent('contact.info.phone')}
            </span>
            <span className="chip" role="listitem">
              {getContent('contact.info.location')}
            </span>
            <span className="chip" role="listitem">
              {getContent('contact.info.remote')}
            </span>
          </address>
        </div>

        <aside className="stack">
          {/* Contact Form */}
          <article className="product">
            <div
              className="mock-img"
              style={{
                background: `
                radial-gradient(120% 120% at 70% 30%, rgba(255,255,255,0.9), rgba(255,255,255,0.08) 45%, rgba(255,255,255,0) 60%),
                conic-gradient(from 315deg at 30% 70%, #60a5fa, #f472b6, #34d399, #60a5fa)
              `,
              }}
              role="img"
              aria-label="Contact collaboration visualization"
            ></div>
            <div className="meta">
              <h3>{getContent('contact.collaboration.title')}</h3>
              <p>{getContent('contact.collaboration.description')}</p>
              <div className="price">
                {getContent('contact.collaboration.response')}
              </div>
              <div className="buy-row">
                <button
                  className="btn primary"
                  onClick={() =>
                    window.open('mailto:swapnil240695@gmail.com', '_blank')
                  }
                  aria-label="Open contact form"
                >
                  Contact Form
                </button>
                <button
                  className="btn ghost"
                  onClick={() =>
                    window.open(
                      'https://www.linkedin.com/in/swapnilndia/',
                      '_blank'
                    )
                  }
                  aria-label="Connect on LinkedIn"
                >
                  LinkedIn
                </button>
              </div>
            </div>
          </article>

          {/* Social Links */}
          <aside className="player">
            <div
              className="cover"
              style={{
                background: 'linear-gradient(135deg, #f472b6, #db2777)',
              }}
              role="img"
              aria-label="Social media presence indicator"
            ></div>
            <div className="track">
              <div className="name">{getContent('contact.social.follow')}</div>
              <div className="artist">
                {getContent('contact.social.platforms')}
              </div>
            </div>
            <button
              className="play"
              onClick={() =>
                window.open('https://github.com/swapnilndia', '_blank')
              }
              aria-label="Visit GitHub profile"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </button>
          </aside>
        </aside>
      </header>

      {/* Contact Methods - Reverse Layout */}
      <section
        className="hero hero--reverse"
        style={{ marginTop: 'clamp(48px, 6vw, 80px)' }}
      >
        <div className="stack">
          <div className="product">
            <div
              className="mock-img"
              style={{
                background: `
                radial-gradient(120% 120% at 40% 60%, rgba(255,255,255,0.9), rgba(255,255,255,0.08) 45%, rgba(255,255,255,0) 60%),
                conic-gradient(from 180deg at 60% 40%, #34d399, #60a5fa, #f472b6, #34d399)
              `,
              }}
            ></div>
            <div className="meta">
              <h3>Direct Contact</h3>
              <p>
                For project inquiries, collaborations, or just to say hello.
                I&apos;m always open to interesting conversations.
              </p>
              <div className="price">Email • Phone • Video Call</div>
              <div className="buy-row">
                <button
                  className="btn primary"
                  onClick={() =>
                    window.open('mailto:swapnil240695@gmail.com', '_blank')
                  }
                >
                  Send Email
                </button>
                <button
                  className="btn ghost"
                  onClick={() =>
                    window.open(
                      'https://www.linkedin.com/in/swapnilndia/',
                      '_blank'
                    )
                  }
                >
                  Book Call
                </button>
              </div>
            </div>
          </div>

          <div className="player">
            <div
              className="cover"
              style={{
                background: 'linear-gradient(135deg, #60a5fa, #2563eb)',
              }}
            ></div>
            <div className="track">
              <div className="name">Response Time</div>
              <div className="artist">Usually within 4 hours</div>
            </div>
            <button className="play">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12,6 12,12 16,14" />
              </svg>
            </button>
          </div>
        </div>

        <div>
          <h2 className="title" style={{ fontSize: 'clamp(24px, 4vw, 36px)' }}>
            {getContent('contact.methods.title')}
          </h2>
          <p className="subtitle">
            {getContent('contact.methods.description')}
          </p>

          <div className="chips">
            <span className="chip">
              {getContent('contact.methods.chips.email')}
            </span>
            <span className="chip">
              {getContent('contact.methods.chips.hindi')}
            </span>
            <span className="chip">
              {getContent('contact.methods.chips.english')}
            </span>
            <span className="chip">
              {getContent('contact.methods.chips.quick')}
            </span>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="hero" style={{ marginTop: 'clamp(48px, 6vw, 80px)' }}>
        <div>
          <h2 className="title" style={{ fontSize: 'clamp(24px, 4vw, 36px)' }}>
            {getContent('contact.services.title')}
          </h2>
          <p className="subtitle">
            {getContent('contact.services.description')}
          </p>

          <div className="chips">
            <span className="chip">
              {getContent('contact.services.list.fullstack')}
            </span>
            <span className="chip">
              {getContent('contact.services.list.consulting')}
            </span>
            <span className="chip">
              {getContent('contact.services.list.review')}
            </span>
            <span className="chip">
              {getContent('contact.services.list.mentoring')}
            </span>
          </div>
        </div>

        <div className="stack">
          <div className="product">
            <div
              className="mock-img"
              style={{
                background: `
                radial-gradient(120% 120% at 80% 20%, rgba(255,255,255,0.9), rgba(255,255,255,0.08) 45%, rgba(255,255,255,0) 60%),
                conic-gradient(from 45deg at 20% 80%, #f472b6, #34d399, #60a5fa, #f472b6)
              `,
              }}
            ></div>
            <div className="meta">
              <h3>Available Services</h3>
              <p>
                From full-stack development to technical consulting and code
                reviews. Let&apos;s discuss your needs.
              </p>
              <div className="price">Flexible rates • Quality guaranteed</div>
              <div className="buy-row">
                <button
                  className="btn primary"
                  onClick={() =>
                    window.open('mailto:swapnil240695@gmail.com', '_blank')
                  }
                >
                  Discuss Project
                </button>
                <button
                  className="btn ghost"
                  onClick={() =>
                    window.open(
                      'https://www.linkedin.com/in/swapnilndia/',
                      '_blank'
                    )
                  }
                >
                  View Rates
                </button>
              </div>
            </div>
          </div>

          <div className="player">
            <div
              className="cover"
              style={{
                background: 'linear-gradient(135deg, #34d399, #059669)',
              }}
            ></div>
            <div className="track">
              <div className="name">
                {getContent('contact.services.availability.title')}
              </div>
              <div className="artist">
                {getContent('contact.services.availability.status')}
              </div>
            </div>
            <button className="play">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 12l2 2 4-4" />
                <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c2.12 0 4.07.74 5.61 1.98" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section
        className="icon-row"
        style={{ marginTop: 'clamp(48px, 6vw, 80px)' }}
        aria-labelledby="contact-methods-heading"
      >
        <h2 id="contact-methods-heading" className="sr-only">
          Contact Methods
        </h2>
        <article
          className="icon-card"
          onClick={() =>
            window.open('mailto:swapnil240695@gmail.com', '_blank')
          }
          style={{ cursor: 'pointer' }}
          role="button"
          tabIndex={0}
          aria-label="Send email to swapnil240695@gmail.com"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              window.open('mailto:swapnil240695@gmail.com', '_blank');
            }
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          <span>Email</span>
        </article>
        <article
          className="icon-card"
          onClick={() =>
            window.open('https://www.linkedin.com/in/swapnilndia/', '_blank')
          }
          style={{ cursor: 'pointer' }}
          role="button"
          tabIndex={0}
          aria-label="Connect on LinkedIn"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              window.open('https://www.linkedin.com/in/swapnilndia/', '_blank');
            }
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
          <span>LinkedIn</span>
        </article>
        <article
          className="icon-card"
          onClick={() =>
            window.open('https://github.com/swapnilndia', '_blank')
          }
          style={{ cursor: 'pointer' }}
          role="button"
          tabIndex={0}
          aria-label="Visit GitHub profile"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              window.open('https://github.com/swapnilndia', '_blank');
            }
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          </svg>
          <span>GitHub</span>
        </article>
        <article
          className="icon-card"
          onClick={() =>
            window.open('https://leetcode.com/u/Swapnilndia/', '_blank')
          }
          style={{ cursor: 'pointer' }}
          role="button"
          tabIndex={0}
          aria-label="View LeetCode profile"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              window.open('https://leetcode.com/u/Swapnilndia/', '_blank');
            }
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="M21 15.5c-1-1.4-3-2.5-5-2.5s-4 1.1-5 2.5" />
          </svg>
          <span>LeetCode</span>
        </article>
      </section>

      {/* Footer */}
      <footer className="foot" style={{ marginTop: 'clamp(48px, 6vw, 80px)' }}>
        <p>{getContent('global.builtWith')}</p>
        <p style={{ marginTop: '8px', fontSize: '12px', opacity: '0.7' }}>
          {getContent('global.copyright')}
        </p>
      </footer>
    </main>
  );
}
