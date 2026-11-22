import "./Hero.css";

function Hero({ article }) {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="container hero-layout">
        <div className="hero-content">
          <span className="hero-category">Featured • {article.category}</span>

          <h1 id="hero-title" className="hero-title">
            {article.title}
          </h1>

          <p className="hero-description">{article.description}</p>

          <div className="hero-actions">
            <a
              className="hero-button"
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read Security Guidance
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <p className="hero-source">Source: {article.source}</p>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-visual-glow" />

          <div className="hero-security-panel">
            <svg
              className="hero-shield"
              viewBox="0 0 120 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M60 8L108 27V65C108 97 89 119 60 132C31 119 12 97 12 65V27L60 8Z"
                stroke="currentColor"
                strokeWidth="5"
              />
              <rect
                x="42"
                y="59"
                width="36"
                height="31"
                rx="5"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                d="M49 59V49C49 34 71 34 71 49V59"
                stroke="currentColor"
                strokeWidth="4"
              />
              <circle cx="60" cy="74" r="3" fill="currentColor" />
            </svg>

            <span className="hero-visual-label">CYBER THREAT INTELLIGENCE</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
