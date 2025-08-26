export default function Contact() {
  return (
    <>
      {/* Animated background blobs */}
      <div className="blobs blobs--contact">
        <div className="blob one"></div>
        <div className="blob two"></div>
        <div className="blob thr"></div>
      </div>

      <div className="wrap">
        {/* Contact Header */}
        <section
          className="hero"
          style={{ marginTop: 'clamp(48px, 6vw, 80px)' }}
        >
          <div>
            <h1
              className="title"
              style={{ fontSize: 'clamp(28px, 5vw, 42px)' }}
            >
              Get In Touch
            </h1>
            <p className="subtitle">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet.
            </p>

            <div
              className="cta-row"
              style={{ marginTop: 'clamp(20px, 3vw, 32px)' }}
            >
              <button className="btn primary">Send Message</button>
              <button className="btn ghost">Schedule Call</button>
            </div>

            <div className="chips">
              <span className="chip">swapnil@example.com</span>
              <span className="chip">+1 (555) 123-4567</span>
              <span className="chip">Available Mon-Fri</span>
              <span className="chip">Remote Friendly</span>
            </div>
          </div>

          <div className="stack">
            {/* Contact Form */}
            <div className="product">
              <div
                className="mock-img"
                style={{
                  background: `
                  radial-gradient(120% 120% at 70% 30%, rgba(255,255,255,0.9), rgba(255,255,255,0.08) 45%, rgba(255,255,255,0) 60%),
                  conic-gradient(from 315deg at 30% 70%, #60a5fa, #f472b6, #34d399, #60a5fa)
                `,
                }}
              ></div>
              <div className="meta">
                <h3>Let's Collaborate</h3>
                <p>
                  Whether you have a project in mind or just want to chat about
                  technology, I'd love to hear from you.
                </p>
                <div className="price">Response within 24 hours</div>
                <div className="buy-row">
                  <button className="btn primary">Contact Form</button>
                  <button className="btn ghost">LinkedIn</button>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="player">
              <div
                className="cover"
                style={{
                  background: 'linear-gradient(135deg, #f472b6, #db2777)',
                }}
              ></div>
              <div className="track">
                <div className="name">Follow Me</div>
                <div className="artist">GitHub • LinkedIn • Twitter</div>
              </div>
              <button className="play">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </button>
            </div>
          </div>
        </section>

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
                  I'm always open to interesting conversations.
                </p>
                <div className="price">Email • Phone • Video Call</div>
                <div className="buy-row">
                  <button className="btn primary">Send Email</button>
                  <button className="btn ghost">Book Call</button>
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
            <h2
              className="title"
              style={{ fontSize: 'clamp(24px, 4vw, 36px)' }}
            >
              How to Reach Me
            </h2>
            <p className="subtitle">
              I prefer email for initial contact, but I'm also available for
              phone calls and video meetings. I typically respond within 4 hours
              during business days.
            </p>

            <div className="chips">
              <span className="chip">Email Preferred</span>
              <span className="chip">Quick Response</span>
              <span className="chip">Professional</span>
              <span className="chip">Friendly</span>
            </div>
          </div>
        </section>

        {/* Services */}
        <section
          className="hero"
          style={{ marginTop: 'clamp(48px, 6vw, 80px)' }}
        >
          <div>
            <h2
              className="title"
              style={{ fontSize: 'clamp(24px, 4vw, 36px)' }}
            >
              What I Can Help With
            </h2>
            <p className="subtitle">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>

            <div className="chips">
              <span className="chip">Web Development</span>
              <span className="chip">Consulting</span>
              <span className="chip">Code Review</span>
              <span className="chip">Mentoring</span>
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
                  reviews. Let's discuss your needs.
                </p>
                <div className="price">Flexible rates • Quality guaranteed</div>
                <div className="buy-row">
                  <button className="btn primary">Discuss Project</button>
                  <button className="btn ghost">View Rates</button>
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
                <div className="name">Availability</div>
                <div className="artist">Open for new projects</div>
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
        >
          <div className="icon-card">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <span>Email</span>
          </div>
          <div className="icon-card">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            <span>LinkedIn</span>
          </div>
          <div className="icon-card">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
            <span>GitHub</span>
          </div>
          <div className="icon-card">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
            <span>Twitter</span>
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
