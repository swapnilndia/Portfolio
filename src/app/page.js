export default function Home() {
  return (
    <>
      {/* Animated background blobs */}
      <div className="blobs">
        <div className="blob one"></div>
        <div className="blob two"></div>
        <div className="blob thr"></div>
      </div>

      <div className="wrap">
        {/* Navigation */}
        <nav className="nav">
          <div className="brand">
            <a
              href="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <strong>Swapnil Katiyar</strong>
            </a>
          </div>
          <div className="spacer"></div>
          <div
            className="nav-links"
            style={{ display: 'flex', gap: '24px', alignItems: 'center' }}
          >
            <a href="/about" className="nav-link">
              About
            </a>
            <a href="/projects" className="nav-link">
              Projects
            </a>
            <a href="/experience" className="nav-link">
              Experience
            </a>
            <a href="/contact" className="nav-link">
              Contact
            </a>
          </div>
          <button className="icon-btn">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
        </nav>

        {/* Hero Section */}
        <section className="hero">
          <div>
            <h1 className="title">
              Full-Stack Developer &
              <br />
              Digital Craftsman
            </h1>
            <p className="subtitle">
              I create beautiful, performant web applications using modern
              technologies. Passionate about clean code, user experience, and
              bringing ideas to life.
            </p>

            <div className="cta-row">
              <a href="/projects" className="btn primary">
                View My Work
              </a>
              <a href="/contact" className="btn ghost">
                Get In Touch
              </a>
            </div>

            <div className="chips">
              <span className="chip">React & Next.js</span>
              <span className="chip">Node.js</span>
              <span className="chip">TypeScript</span>
              <span className="chip">SCSS/CSS</span>
              <span className="chip">MongoDB</span>
            </div>
          </div>

          <div className="stack">
            {/* Featured Project */}
            <div className="product">
              <div className="mock-img"></div>
              <div className="meta">
                <h3>Portfolio Dashboard</h3>
                <p>
                  A modern portfolio management system built with Next.js and
                  glassmorphism design.
                </p>
                <div className="price">Featured Project</div>
                <div className="buy-row">
                  <a href="/projects" className="btn primary">
                    Live Demo
                  </a>
                  <button className="btn ghost">Source Code</button>
                </div>
              </div>
            </div>

            {/* Music Player Component */}
            <div className="player">
              <div className="cover"></div>
              <div className="track">
                <div className="name">Currently Coding To</div>
                <div className="artist">Lo-fi Hip Hop Beats</div>
              </div>
              <button className="play">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
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

        {/* Additional Projects */}
        <section
          className="hero"
          style={{ marginTop: 'clamp(24px, 4vw, 48px)' }}
        >
          <div>
            <h2
              className="title"
              style={{ fontSize: 'clamp(20px, 3vw, 32px)' }}
            >
              Recent Projects
            </h2>
            <p className="subtitle">
              A selection of my latest work showcasing different technologies
              and design approaches.
            </p>

            <div className="chips">
              <span className="chip">E-commerce</span>
              <span className="chip">SaaS Platform</span>
              <span className="chip">Mobile App</span>
              <span className="chip">API Design</span>
            </div>
          </div>

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
                <div className="name">Status: Available</div>
                <div className="artist">Open for new projects</div>
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
        </section>

        {/* Footer */}
        <footer
          className="foot"
          style={{ marginTop: 'clamp(48px, 6vw, 80px)' }}
        >
          <p>Built with Next.js, SCSS, and lots of ☕</p>
          <p style={{ marginTop: '8px', fontSize: '12px', opacity: '0.7' }}>
            © 2024 Swapnil Katiyar. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
}
