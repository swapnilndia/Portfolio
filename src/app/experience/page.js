export default function Experience() {
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

        {/* Experience Header */}
        <section
          className="hero"
          style={{ marginTop: 'clamp(48px, 6vw, 80px)' }}
        >
          <div>
            <h1
              className="title"
              style={{ fontSize: 'clamp(28px, 5vw, 42px)' }}
            >
              My Experience
            </h1>
            <p className="subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae, ultricies eget, tempor sit amet, ante.
            </p>

            <div
              className="cta-row"
              style={{ marginTop: 'clamp(20px, 3vw, 32px)' }}
            >
              <button className="btn primary">View Timeline</button>
              <button className="btn ghost">Download Resume</button>
            </div>

            <div className="chips">
              <span className="chip">Senior Developer</span>
              <span className="chip">Tech Lead</span>
              <span className="chip">Freelancer</span>
              <span className="chip">Mentor</span>
            </div>
          </div>

          <div className="stack">
            {/* Current Role */}
            <div className="product">
              <div
                className="mock-img"
                style={{
                  background: `
                  radial-gradient(120% 120% at 60% 20%, rgba(255,255,255,0.9), rgba(255,255,255,0.08) 45%, rgba(255,255,255,0) 60%),
                  conic-gradient(from 270deg at 50% 50%, #34d399, #60a5fa, #f472b6, #34d399)
                `,
                }}
              ></div>
              <div className="meta">
                <h3>Senior Full-Stack Developer</h3>
                <p>
                  Leading development of scalable web applications and mentoring
                  junior developers in modern technologies.
                </p>
                <div className="price">2022 - Present • TechCorp Inc.</div>
                <div className="buy-row">
                  <button className="btn primary">View Details</button>
                  <button className="btn ghost">Achievements</button>
                </div>
              </div>
            </div>

            {/* Work Status */}
            <div className="player">
              <div
                className="cover"
                style={{
                  background: 'linear-gradient(135deg, #60a5fa, #2563eb)',
                }}
              ></div>
              <div className="track">
                <div className="name">Work Status</div>
                <div className="artist">Available for consulting</div>
              </div>
              <button className="play">
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
              </button>
            </div>
          </div>
        </section>

        {/* Previous Role */}
        <section
          className="hero"
          style={{ marginTop: 'clamp(48px, 6vw, 80px)' }}
        >
          <div>
            <h2
              className="title"
              style={{ fontSize: 'clamp(24px, 4vw, 36px)' }}
            >
              Full-Stack Developer
            </h2>
            <p className="subtitle">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>

            <div className="chips">
              <span className="chip">2020 - 2022</span>
              <span className="chip">StartupXYZ</span>
              <span className="chip">Remote</span>
              <span className="chip">Team of 8</span>
            </div>
          </div>

          <div className="stack">
            <div className="product">
              <div
                className="mock-img"
                style={{
                  background: `
                  radial-gradient(120% 120% at 40% 80%, rgba(255,255,255,0.9), rgba(255,255,255,0.08) 45%, rgba(255,255,255,0) 60%),
                  conic-gradient(from 180deg at 60% 20%, #f472b6, #34d399, #60a5fa, #f472b6)
                `,
                }}
              ></div>
              <div className="meta">
                <h3>Key Achievements</h3>
                <p>
                  Built the core platform from scratch, implemented CI/CD
                  pipelines, and reduced deployment time by 70%.
                </p>
                <div className="price">React • Node.js • AWS • Docker</div>
                <div className="buy-row">
                  <button className="btn primary">View Projects</button>
                  <button className="btn ghost">Technologies</button>
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
                <div className="name">Impact</div>
                <div className="artist">70% faster deployments</div>
              </div>
              <button className="play">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Junior Role */}
        <section
          className="hero"
          style={{ marginTop: 'clamp(48px, 6vw, 80px)' }}
        >
          <div>
            <h2
              className="title"
              style={{ fontSize: 'clamp(24px, 4vw, 36px)' }}
            >
              Junior Developer
            </h2>
            <p className="subtitle">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet.
            </p>

            <div className="chips">
              <span className="chip">2019 - 2020</span>
              <span className="chip">WebAgency Pro</span>
              <span className="chip">On-site</span>
              <span className="chip">First Job</span>
            </div>
          </div>

          <div className="stack">
            <div className="product">
              <div
                className="mock-img"
                style={{
                  background: `
                  radial-gradient(120% 120% at 70% 30%, rgba(255,255,255,0.9), rgba(255,255,255,0.08) 45%, rgba(255,255,255,0) 60%),
                  conic-gradient(from 90deg at 30% 70%, #60a5fa, #f472b6, #34d399, #60a5fa)
                `,
                }}
              ></div>
              <div className="meta">
                <h3>Learning & Growth</h3>
                <p>
                  Started my professional journey, learned industry best
                  practices, and contributed to 15+ client projects.
                </p>
                <div className="price">HTML • CSS • JavaScript • PHP</div>
                <div className="buy-row">
                  <button className="btn primary">Client Work</button>
                  <button className="btn ghost">Skills Gained</button>
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
                <div className="name">Foundation</div>
                <div className="artist">15+ client projects</div>
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

        {/* Skills Timeline */}
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
              <circle cx="12" cy="12" r="3" />
              <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1" />
            </svg>
            <span>Leadership</span>
          </div>
          <div className="icon-card">
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
            <span>Mentoring</span>
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
            <span>Architecture</span>
          </div>
          <div className="icon-card">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            <span>Innovation</span>
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
