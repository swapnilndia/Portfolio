export default function Experience() {
  return (
    <>
      {/* Animated background blobs */}
      <div className="blobs blobs--experience">
        <div className="blob one"></div>
        <div className="blob two"></div>
        <div className="blob thr"></div>
      </div>

      <div className="wrap">
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
              My professional journey spans across leading technology companies
              in India, from startups to established enterprises. I&apos;ve
              built eCommerce platforms, gaming applications, and enterprise
              solutions while mentoring teams and optimizing performance.
            </p>

            <div
              className="cta-row"
              style={{ marginTop: 'clamp(20px, 3vw, 32px)' }}
            >
              <button className="btn primary">View Timeline</button>
              <button className="btn ghost">Download Resume</button>
            </div>

            <div className="chips">
              <span className="chip">Software Developer</span>
              <span className="chip">Frontend Expert</span>
              <span className="chip">SEO Specialist</span>
              <span className="chip">Team Mentor</span>
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
                <h3>Software Developer</h3>
                <p>
                  Building and maintaining eCommerce platform frontend with
                  React, Redux, and SCSS. Achieved 100/100 Lighthouse SEO score
                  and optimized performance across multiple projects.
                </p>
                <div className="price">
                  May 2025 - Present • Tekonika Technologies
                </div>
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
                <div className="name">Current Role</div>
                <div className="artist">Pune, Maharashtra</div>
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

        {/* Previous Role - Reverse Layout */}
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
                  radial-gradient(120% 120% at 40% 80%, rgba(255,255,255,0.9), rgba(255,255,255,0.08) 45%, rgba(255,255,255,0) 60%),
                  conic-gradient(from 180deg at 60% 20%, #f472b6, #34d399, #60a5fa, #f472b6)
                `,
                }}
              ></div>
              <div className="meta">
                <h3>Frontend Developer</h3>
                <p>
                  Enhanced legacy gaming platform and built new platform with
                  Next.js. Designed admin portal for content management and
                  operational workflows.
                </p>
                <div className="price">
                  React • Next.js • Tailwind • HTML/CSS
                </div>
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
                <div className="name">Location</div>
                <div className="artist">Indore, Madhya Pradesh</div>
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

          <div>
            <h2
              className="title"
              style={{ fontSize: 'clamp(24px, 4vw, 36px)' }}
            >
              WagerGeeks Private Limited
            </h2>
            <p className="subtitle">
              Maintained and enhanced legacy online gaming platform built with
              React. Contributed to new gaming platform development using
              Next.js and Tailwind CSS with modern design principles.
            </p>

            <div className="chips">
              <span className="chip">Feb 2025 - May 2025</span>
              <span className="chip">Frontend Developer</span>
              <span className="chip">Gaming Platform</span>
              <span className="chip">Admin Portal</span>
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
              Treeroot Informatics
            </h2>
            <p className="subtitle">
              Delivered Credit Management System for Dutch clients using
              React.js and Redux. Optimized performance with React memoization,
              dynamic imports, and integrated RESTful APIs with authentication.
            </p>

            <div className="chips">
              <span className="chip">Jan 2023 - Apr 2024</span>
              <span className="chip">Frontend Developer</span>
              <span className="chip">Enterprise Solutions</span>
              <span className="chip">International Clients</span>
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
                <h3>Credit Management System</h3>
                <p>
                  Built scalable enterprise solution for Dutch clients with
                  React.js and Redux. Implemented performance optimizations and
                  API integrations.
                </p>
                <div className="price">
                  React.js • Redux • RESTful APIs • Postman
                </div>
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
                <div className="name">Location</div>
                <div className="artist">Ahmedabad, Gujarat</div>
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

        {/* Early Career - Reverse Layout */}
        <section
          className="hero hero--reverse"
          style={{ marginTop: 'clamp(24px, 4vw, 48px)' }}
        >
          <div className="stack">
            <div className="product">
              <div
                className="mock-img"
                style={{
                  background: `
                  radial-gradient(120% 120% at 50% 50%, rgba(255,255,255,0.9), rgba(255,255,255,0.08) 45%, rgba(255,255,255,0) 60%),
                  conic-gradient(from 0deg at 50% 50%, #f472b6, #60a5fa, #34d399, #f472b6)
                `,
                }}
              ></div>
              <div className="meta">
                <h3>Frontend Development Journey</h3>
                <p>
                  Started as intern, built responsive interfaces with React.js
                  and Material-UI. Mentored 8+ junior developers in frontend
                  concepts and best practices.
                </p>
                <div className="price">
                  React.js • Material-UI • Redux • Context API
                </div>
                <div className="buy-row">
                  <button className="btn primary">View Growth</button>
                  <button className="btn ghost">Mentoring</button>
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
                <div className="name">Mentoring</div>
                <div className="artist">8+ developers guided</div>
              </div>
              <button className="play">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </button>
            </div>
          </div>

          <div>
            <h2
              className="title"
              style={{ fontSize: 'clamp(24px, 4vw, 36px)' }}
            >
              Sharpener Tech
            </h2>
            <p className="subtitle">
              Started my software development journey as a Frontend Intern.
              Built responsive interfaces using React.js, Material-UI, and
              implemented state management with Redux and Context API.
            </p>

            <div className="chips">
              <span className="chip">Jan 2022 - Dec 2022</span>
              <span className="chip">Frontend Intern</span>
              <span className="chip">Bangalore, Karnataka</span>
              <span className="chip">Career Transition</span>
            </div>
          </div>
        </section>

        {/* Engineering Background */}
        <section
          className="hero"
          style={{ marginTop: 'clamp(24px, 4vw, 48px)' }}
        >
          <div>
            <h2
              className="title"
              style={{ fontSize: 'clamp(24px, 4vw, 36px)' }}
            >
              Engineering Background
            </h2>
            <p className="subtitle">
              Before transitioning to software development, I worked as a
              Structural Design Engineer, mentoring 200+ students and
              collaborating with architects on residential and commercial
              projects.
            </p>

            <div className="chips">
              <span className="chip">Jun 2019 - Jan 2022</span>
              <span className="chip">Structural Engineer</span>
              <span className="chip">200+ Students Mentored</span>
              <span className="chip">Analytical Foundation</span>
            </div>
          </div>

          <div className="stack">
            <div className="product">
              <div
                className="mock-img"
                style={{
                  background: `
                  radial-gradient(120% 120% at 30% 70%, rgba(255,255,255,0.9), rgba(255,255,255,0.08) 45%, rgba(255,255,255,0) 60%),
                  conic-gradient(from 180deg at 70% 30%, #34d399, #f472b6, #60a5fa, #34d399)
                `,
                }}
              ></div>
              <div className="meta">
                <h3>Econstruct Design and Build</h3>
                <p>
                  Performed structural analysis and design for residential and
                  commercial projects. Built strong analytical and
                  problem-solving foundation.
                </p>
                <div className="price">
                  Structural Analysis • Project Management
                </div>
                <div className="buy-row">
                  <button className="btn primary">Experience</button>
                  <button className="btn ghost">Skills Transfer</button>
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
                <div className="name">Foundation</div>
                <div className="artist">Analytical • Problem-solving</div>
              </div>
              <button className="play">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 21h18" />
                  <path d="M5 21V7l8-4v18" />
                  <path d="M19 21V11l-6-4" />
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
