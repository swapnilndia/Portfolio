export default function Projects() {
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
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <strong>Swapnil Katiyar</strong>
          </div>
          <div className="spacer"></div>
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

        {/* Projects Header */}
        <section
          className="hero"
          style={{ marginTop: 'clamp(48px, 6vw, 80px)' }}
        >
          <div>
            <h1
              className="title"
              style={{ fontSize: 'clamp(28px, 5vw, 42px)' }}
            >
              My Projects
            </h1>
            <p className="subtitle">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>

            <div
              className="cta-row"
              style={{ marginTop: 'clamp(20px, 3vw, 32px)' }}
            >
              <button className="btn primary">View All Projects</button>
              <button className="btn ghost">GitHub Profile</button>
            </div>

            <div className="chips">
              <span className="chip">Web Applications</span>
              <span className="chip">Mobile Apps</span>
              <span className="chip">APIs</span>
              <span className="chip">Open Source</span>
            </div>
          </div>

          <div className="stack">
            {/* Featured Project */}
            <div className="product">
              <div
                className="mock-img"
                style={{
                  background: `
                  radial-gradient(120% 120% at 40% 60%, rgba(255,255,255,0.9), rgba(255,255,255,0.08) 45%, rgba(255,255,255,0) 60%),
                  conic-gradient(from 90deg at 60% 40%, #f472b6, #34d399, #60a5fa, #f472b6)
                `,
                }}
              ></div>
              <div className="meta">
                <h3>SaaS Dashboard</h3>
                <p>
                  A comprehensive analytics dashboard with real-time data
                  visualization and user management features.
                </p>
                <div className="price">React • Node.js • PostgreSQL</div>
                <div className="buy-row">
                  <button className="btn primary">Live Demo</button>
                  <button className="btn ghost">GitHub</button>
                </div>
              </div>
            </div>

            {/* Project Stats */}
            <div className="player">
              <div
                className="cover"
                style={{
                  background: 'linear-gradient(135deg, #34d399, #059669)',
                }}
              ></div>
              <div className="track">
                <div className="name">Project Stats</div>
                <div className="artist">25+ completed projects</div>
              </div>
              <button className="play">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 20V10" />
                  <path d="M12 20V4" />
                  <path d="M6 20v-6" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* E-commerce Project */}
        <section
          className="hero"
          style={{ marginTop: 'clamp(48px, 6vw, 80px)' }}
        >
          <div>
            <h2
              className="title"
              style={{ fontSize: 'clamp(24px, 4vw, 36px)' }}
            >
              E-commerce Platform
            </h2>
            <p className="subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae, ultricies eget, tempor sit amet, ante.
            </p>

            <div className="chips">
              <span className="chip">React</span>
              <span className="chip">Node.js</span>
              <span className="chip">Stripe</span>
              <span className="chip">MongoDB</span>
            </div>
          </div>

          <div className="stack">
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
                <h3>Full-Stack Solution</h3>
                <p>
                  Complete e-commerce solution with payment integration,
                  inventory management, and analytics dashboard.
                </p>
                <div className="price">6 months development</div>
                <div className="buy-row">
                  <button className="btn primary">View Project</button>
                  <button className="btn ghost">Case Study</button>
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
                <div className="name">Key Features</div>
                <div className="artist">Payment • Inventory • Analytics</div>
              </div>
              <button className="play">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-4m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Mobile App Project */}
        <section
          className="hero"
          style={{ marginTop: 'clamp(48px, 6vw, 80px)' }}
        >
          <div>
            <h2
              className="title"
              style={{ fontSize: 'clamp(24px, 4vw, 36px)' }}
            >
              Social Media App
            </h2>
            <p className="subtitle">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet.
            </p>

            <div className="chips">
              <span className="chip">React Native</span>
              <span className="chip">Firebase</span>
              <span className="chip">Redux</span>
              <span className="chip">Real-time</span>
            </div>
          </div>

          <div className="stack">
            <div className="product">
              <div
                className="mock-img"
                style={{
                  background: `
                  radial-gradient(120% 120% at 30% 70%, rgba(255,255,255,0.9), rgba(255,255,255,0.08) 45%, rgba(255,255,255,0) 60%),
                  conic-gradient(from 270deg at 70% 30%, #f472b6, #60a5fa, #34d399, #f472b6)
                `,
                }}
              ></div>
              <div className="meta">
                <h3>Cross-Platform Mobile</h3>
                <p>
                  Social networking app with real-time messaging, photo sharing,
                  and community features.
                </p>
                <div className="price">iOS • Android • 10k+ users</div>
                <div className="buy-row">
                  <button className="btn primary">App Store</button>
                  <button className="btn ghost">Play Store</button>
                </div>
              </div>
            </div>

            <div className="player">
              <div
                className="cover"
                style={{
                  background: 'linear-gradient(135deg, #f472b6, #db2777)',
                }}
              ></div>
              <div className="track">
                <div className="name">User Engagement</div>
                <div className="artist">95% retention rate</div>
              </div>
              <button className="play">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
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
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              <polyline points="3.27,6.96 12,12.01 20.73,6.96" />
              <line x1="12" y1="22.08" x2="12" y2="12" />
            </svg>
            <span>API Services</span>
          </div>
          <div className="icon-card">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span>Portfolio Sites</span>
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
            <span>Web Apps</span>
          </div>
          <div className="icon-card">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
              <line x1="4" y1="22" x2="4" y2="15" />
            </svg>
            <span>Open Source</span>
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
