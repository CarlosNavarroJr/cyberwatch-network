import { useEffect, useState } from "react";
import "./Navbar.css";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Latest News", href: "#latest-news" },
  { label: "Categories", href: "#categories" },
  { label: "Videos", href: "#videos" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="container navbar">
        <a
          href="#home"
          className="navbar-brand"
          onClick={closeMenu}
          aria-label="CyberWatchNetwork homepage"
        >
          <svg
            className="navbar-logo"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 2 20 5v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5l8-3Z" />
            <path d="m9 12 2 2 4-4" />
          </svg>

          <span className="navbar-tagline">
            <span className="navbar-brand-name">
              CyberWatch<span>Network</span>
            </span>

            <span className="navbar-tagline">
              Cybersecurity News & Analysis
            </span>
          </span>
        </a>

        <button
          className="navbar-toggle"
          type="button"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span aria-hidden="true">{isMenuOpen ? "x" : "☰"}</span>
        </button>

        <nav
          id="primary-navigation"
          className={`navbar-menu ${isMenuOpen ? "navbar-menu-open" : ""}`}
          aria-label="Main navigation"
        >
          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="navbar-link" onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
