export default function Home() {
  return (
    <>
      {/* Animated background blobs */}
      <div className="blobs blobs--home">
        <div className="blob one"></div>
        <div className="blob two"></div>
        <div className="blob thr"></div>
      </div>

      <div className="wrap">
        {/* Hero Section */}
        <section className="hero">
          <div>
            <h1 className="title">
              Software Developer &
              <br />
              Frontend Specialist
            </h1>
            <p className="subtitle">
              I build scalable eCommerce platforms and web applications using
              React, Next.js, and modern JavaScript. Currently at Tekonika
              Technologies, optimizing performance and achieving perfect SEO
              scores.
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
                <h3>eCommerce Platform</h3>
                <p>
                  Scalable eCommerce frontend built with React, Redux, and SCSS.
                  Achieved 100/100 Lighthouse SEO score and optimized
                  performance.
                </p>
                <div className="price">Current Project</div>
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
                <div className="name">Current Role</div>
                <div className="artist">Software Developer @ Tekonika</div>
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
              My Approach
            </h2>
            <p className="subtitle">
              I believe in creating digital experiences that are not only
              beautiful but also functional, accessible, and performant. Every
              project is an opportunity to solve real problems.
            </p>

            <div className="chips">
              <span className="chip">User-Centered</span>
              <span className="chip">Performance First</span>
              <span className="chip">Clean Code</span>
              <span className="chip">Accessibility</span>
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
                <h3>Design Philosophy</h3>
                <p>
                  Form follows function. Beautiful interfaces that solve real
                  problems and create delightful user experiences.
                </p>
                <div className="price">UX • Performance • Accessibility</div>
                <div className="buy-row">
                  <a href="/about" className="btn primary">
                    Learn More
                  </a>
                  <button className="btn ghost">My Process</button>
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
                <div className="name">Favorite Tools</div>
                <div className="artist">VS Code • Figma • Git</div>
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
