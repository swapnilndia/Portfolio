import StructuredData from '../../components/SEO/StructuredData.js';
import { getPageSEOConfig } from '../../data/seo-config.js';

export default function About() {
  const seoConfig = getPageSEOConfig('about');

  return (
    <>
      {/* Structured Data for About Page */}
      {seoConfig.structuredData.map((data, index) => (
        <StructuredData key={index} data={data} />
      ))}

      {/* Animated background blobs */}
      <div className="blobs blobs--about">
        <div className="blob one"></div>
        <div className="blob two"></div>
        <div className="blob thr"></div>
      </div>

      <div className="wrap">
        {/* About Section - Left aligned (default) */}
        <section
          className="hero"
          style={{ marginTop: 'clamp(48px, 6vw, 80px)' }}
        >
          <div>
            <h1 className="title">About Me</h1>
            <p className="subtitle">
              Hi, I&apos;m Swapnil Katiyar — a Front-End Developer who loves
              turning designs into fast, scalable, and user-friendly
              applications. With experience across eCommerce, gaming, and
              enterprise systems, I focus on building products that don&apos;t
              just work, but feel effortless.
            </p>
            <p className="subtitle">
              My journey started as a Structural Design Engineer, mentoring 200+
              students while designing safe, efficient structures. In 2022, I
              pivoted into tech and haven&apos;t looked back since. Every step
              has been about learning fast, solving real problems, and raising
              the bar on performance and usability.
            </p>

            <div className="cta-row">
              <button className="btn primary">Download Resume</button>
              <button className="btn ghost">Contact Me</button>
            </div>

            <div className="chips">
              <span className="chip">Frontend Developer</span>
              <span className="chip">React & Next.js</span>
              <span className="chip">100/100 Lighthouse SEO</span>
              <span className="chip">200+ Students Mentored</span>
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
              My Journey
            </h2>
            <p className="subtitle">
              <strong>2019–2022:</strong> Started as a Structural Design
              Engineer, mentoring 200+ students while designing safe, efficient
              structures.
            </p>
            <p className="subtitle">
              <strong>2022:</strong> Pivoted into tech with an internship at
              Sharpener Tech, diving into React, Material-UI, and Firebase.
            </p>
            <p className="subtitle">
              <strong>2023–2024:</strong> Joined Treeroot Informatics,
              delivering a Credit Management System for Dutch clients and
              sharpening my API integration skills.
            </p>
            <p className="subtitle">
              <strong>2025:</strong> Built gaming platforms at WagerGeeks, then
              moved to Tekonika Technologies to scale eCommerce applications and
              achieve a perfect 100/100 Lighthouse SEO score.
            </p>

            <div className="chips">
              <span className="chip">Started 2019</span>
              <span className="chip">Tech Pivot 2022</span>
              <span className="chip">Fast Learner</span>
              <span className="chip">Problem Solver</span>
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
              Skills & Technologies
            </h2>
            <p className="subtitle">
              <strong>Frontend:</strong> React.js, Next.js, JavaScript (ES6+),
              TypeScript, HTML5, CSS3
            </p>
            <p className="subtitle">
              <strong>UI & State:</strong> Redux, Context API, SCSS, Tailwind
              CSS, Material-UI
            </p>
            <p className="subtitle">
              <strong>Integration:</strong> RESTful APIs, Postman, Swagger
            </p>
            <p className="subtitle">
              <strong>Tools:</strong> Git, GitHub, Jira, Figma, AWS (EC2, RDS)
            </p>
            <p className="subtitle">
              💡 Always learning: staying on top of modern frontend trends,
              performance hacks, and SEO best practices.
            </p>

            <div className="cta-row">
              <button className="btn primary">View Portfolio</button>
              <button className="btn ghost">Download CV</button>
            </div>

            <div className="chips">
              <span className="chip">React & Next.js</span>
              <span className="chip">TypeScript</span>
              <span className="chip">SCSS & Tailwind</span>
              <span className="chip">AWS & APIs</span>
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
          <p>Built with Next.js, SCSS, and lots of ☕</p>
          <p style={{ marginTop: '8px', fontSize: '12px', opacity: '0.7' }}>
            © 2024 Swapnil Katiyar. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
}
