import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import gsap from 'gsap';
import { PERSONAL_INFO } from '../data/personalInfo';
import { scrollToSection } from '../animations/smoothScroll';

const NAV_ITEMS = [
  { id: 'home', label: 'HOME', num: '00' },
  { id: 'about', label: 'ABOUT', num: '01' },
  { id: 'skills', label: 'SKILLS', num: '02' },
  { id: 'experience', label: 'EXPERIENCE', num: '03' },
  { id: 'projects', label: 'PROJECTS', num: '04' },
  { id: 'contact', label: 'CONTACT', num: '06' },
];

export default function Navbar({ prefersReducedMotion }) {
  const headerRef = useRef(null);
  const toggleBtnRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion || !headerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        y: -16,
        opacity: 0,
        duration: 0.6,
        delay: 0.15,
        ease: 'power3.out',
      });
    }, headerRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 32);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('main section[id]');
    if (!('IntersectionObserver' in window) || sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-38% 0px -48% 0px',
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
        toggleBtnRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  const handleNavClick = (event, targetId) => {
    event.preventDefault();
    if (isMenuOpen) setIsMenuOpen(false);
    scrollToSection(targetId);
  };

  return (
    <>
      <header
        ref={headerRef}
        id="site-header"
        className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}
      >
        <nav className="nav-inner" aria-label="Primary Navigation">
          <a
            href="#home"
            className="nav-logo"
            onClick={(e) => handleNavClick(e, 'home')}
          >
            {PERSONAL_INFO.brand}
            <span className="nav-logo__dot">®</span>
          </a>

          <ul className="nav-links" role="list">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`nav-link ${activeSection === item.id ? 'is-active' : ''}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="nav-cta magnetic"
            onClick={(e) => handleNavClick(e, 'contact')}
          >
            <span>LET&apos;S TALK</span>
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>

          <button
            ref={toggleBtnRef}
            type="button"
            className="nav-toggle"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </nav>
      </header>

      <div
        id="mobile-menu"
        className={`mobile-menu ${isMenuOpen ? 'is-open' : ''}`}
        aria-hidden={!isMenuOpen}
      >
        <ul className="mobile-menu__list" role="list">
          {NAV_ITEMS.map((item) => (
            <li key={item.id} className="mobile-menu__item">
              <a
                href={`#${item.id}`}
                className={`mobile-menu__link ${activeSection === item.id ? 'is-active' : ''}`}
                tabIndex={isMenuOpen ? 0 : -1}
                onClick={(e) => handleNavClick(e, item.id)}
              >
                <span>{item.label}</span>
                <span className="mobile-menu__num">{item.num}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mobile-menu__footer">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="contact-value-link"
            style={{ fontSize: '1rem' }}
            tabIndex={isMenuOpen ? 0 : -1}
          >
            {PERSONAL_INFO.email}
          </a>
          <span style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
            {PERSONAL_INFO.location}
          </span>
        </div>
      </div>
    </>
  );
}
