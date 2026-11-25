import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/personalInfo';
import { scrollToSection, scrollToTop } from '../animations/smoothScroll';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" id="site-footer">
      <div className="site-container footer-inner">
        <div>
          <div className="nav-logo" style={{ marginBottom: '0.35rem' }}>
            {PERSONAL_INFO.brand}
            <span className="nav-logo__dot">®</span>
          </div>
          <div className="footer-copy">
            FULL STACK DEVELOPER &bull; {PERSONAL_INFO.location.toUpperCase()}.
          </div>
        </div>

        <nav aria-label="Footer navigation" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1.35rem' }}>
          <a
            href="#about"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }}
          >
            About
          </a>
          <a
            href="#projects"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('projects');
            }}
          >
            Projects
          </a>
          <a href={`mailto:${PERSONAL_INFO.email}`} className="nav-link" style={{ textTransform: 'none' }}>
            {PERSONAL_INFO.email}
          </a>
          <a
            href={PERSONAL_INFO.socials.github}
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href={PERSONAL_INFO.socials.linkedin}
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <span className="footer-copy">&copy; {currentYear} {PERSONAL_INFO.fullName.toUpperCase()}</span>
          <button
            type="button"
            className="footer-back-top magnetic"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
          >
            <span>TOP</span>
            <ArrowUp size={14} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
