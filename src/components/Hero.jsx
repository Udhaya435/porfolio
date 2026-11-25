import { useEffect, useRef } from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { PERSONAL_INFO } from '../data/personalInfo';
import { scrollToSection } from '../animations/smoothScroll';

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Hero({ prefersReducedMotion, isDesktopPointer, preloaderDone }) {
  const sectionRef = useRef(null);
  const nameRef = useRef(null);
  const accentFillRef = useRef(null);
  const visualRef = useRef(null);
  const svgLayersRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion || !preloaderDone || !sectionRef.current) return;

    let splitHero = null;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      if (nameRef.current) {
        splitHero = new SplitText(nameRef.current, { type: 'chars' });
        tl.from(splitHero.chars, {
          yPercent: 105,
          opacity: 0,
          duration: 0.72,
          stagger: 0.025,
          ease: 'power4.out',
        });
      }

      tl.from(
        '.hero-stagger',
        {
          y: 22,
          opacity: 0,
          duration: 0.62,
          stagger: 0.075,
          ease: 'power3.out',
        },
        '-=0.42'
      );

      if (accentFillRef.current) {
        tl.from(
          accentFillRef.current,
          {
            scaleX: 0,
            duration: 0.75,
            ease: 'power3.out',
          },
          '-=0.45'
        );
      }

      if (visualRef.current) {
        tl.from(
          visualRef.current,
          {
            opacity: 0,
            scale: 0.96,
            duration: 0.7,
            ease: 'power3.out',
          },
          '-=0.6'
        );
      }

      if (isDesktopPointer && visualRef.current) {
        gsap.to(visualRef.current, {
          y: -32,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    }, sectionRef);

    const handleMouseMove = (event) => {
      if (!isDesktopPointer || !sectionRef.current || !svgLayersRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const relX = (event.clientX - rect.left) / rect.width - 0.5;
      const relY = (event.clientY - rect.top) / rect.height - 0.5;
      gsap.to(svgLayersRef.current, {
        x: relX * 16,
        y: relY * 14,
        duration: 0.55,
        ease: 'power2.out',
      });
    };

    const sectionEl = sectionRef.current;
    if (isDesktopPointer && sectionEl) {
      sectionEl.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (sectionEl) {
        sectionEl.removeEventListener('mousemove', handleMouseMove);
      }
      splitHero?.revert();
      ctx.revert();
    };
  }, [prefersReducedMotion, isDesktopPointer, preloaderDone]);

  return (
    <section ref={sectionRef} id="home" className="hero-section" aria-label="Introduction">
      <div className="site-container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-availability hero-stagger">
              <span className="hero-availability__dot" aria-hidden="true" />
              <span>AVAILABLE FOR PROFESSIONAL OPPORTUNITIES</span>
            </div>

            <p className="hero-kicker hero-stagger">HELLO, I&apos;M</p>
            <h1 ref={nameRef} className="hero-name" id="hero-name">
              UDHAYAKUMAR<span className="hero-name__accent">.</span>
            </h1>

            <p className="hero-role hero-stagger">
              FULL STACK DEVELOPER
              <br />
              BUILDING DIGITAL EXPERIENCES.
            </p>

            <div className="hero-accent-line" aria-hidden="true">
              <div ref={accentFillRef} className="hero-accent-line__fill" />
            </div>

            <p className="hero-support hero-stagger">
              I build modern web applications, scalable backend solutions and meaningful digital experiences through clean code, thoughtful engineering and creative problem-solving.
            </p>

            <div className="hero-actions hero-stagger">
              <a
                href="#projects"
                className="btn-primary magnetic"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('projects');
                }}
              >
                <span>EXPLORE MY WORK</span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>

              <a
                href={PERSONAL_INFO.resumePath}
                download="Udhayakumar-Resume.pdf"
                className="btn-secondary magnetic"
              >
                <span>DOWNLOAD RESUME</span>
                <ArrowDown size={16} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div ref={visualRef} className="hero-visual" aria-hidden="true">
            <span className="hero-visual__corner hero-visual__corner--tl">SYS // ARCH_01</span>
            <svg
              className="hero-visual__svg"
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="24" y="24" width="352" height="352" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
              <line x1="200" y1="24" x2="200" y2="376" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
              <line x1="24" y1="200" x2="376" y2="200" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />

              <g className="svg-orbit-spin">
                <circle
                  cx="200"
                  cy="200"
                  r="134"
                  stroke="rgba(255,255,255,0.14)"
                  strokeWidth="1"
                  strokeDasharray="6 8"
                />
                <circle cx="200" cy="66" r="4" fill="#B9F27C" />
                <circle cx="334" cy="200" r="3" fill="#F5F5F5" />
              </g>

              <g className="svg-orbit-spin-reverse">
                <circle
                  cx="200"
                  cy="200"
                  r="94"
                  stroke="rgba(185,242,124,0.35)"
                  strokeWidth="1"
                  strokeDasharray="24 12"
                />
                <rect x="196" y="102" width="8" height="8" fill="#B9F27C" />
              </g>

              <g ref={svgLayersRef}>
                <polygon
                  points="200,126 268,162 200,198 132,162"
                  fill="#151515"
                  stroke="#B9F27C"
                  strokeWidth="1.2"
                />
                <polygon
                  points="200,164 268,200 200,236 132,200"
                  fill="rgba(16,16,16,0.92)"
                  stroke="rgba(255,255,255,0.28)"
                  strokeWidth="1"
                />
                <polygon
                  points="200,202 268,238 200,274 132,238"
                  fill="#080808"
                  stroke="rgba(255,255,255,0.18)"
                  strokeWidth="1"
                />
              </g>

              <path d="M40 52V40H52" stroke="#B9F27C" strokeWidth="1.5" />
              <path d="M360 348V360H348" stroke="#B9F27C" strokeWidth="1.5" />
              <text
                x="44"
                y="362"
                fill="#71717A"
                fontFamily="Space Grotesk, sans-serif"
                fontSize="10"
                letterSpacing="2"
              >
                FULL.STACK.ENGINE
              </text>
            </svg>
            <span className="hero-visual__corner hero-visual__corner--br">11.3410° N // 77.7172° E</span>
          </div>
        </div>

        <div className="hero-bottom hero-stagger">
          <div className="hero-meta-strip">
            <div className="hero-meta-item">
              <span className="hero-meta-item__label">EXPERIENCE</span>
              <span className="hero-meta-item__value">{PERSONAL_INFO.experienceYears}</span>
            </div>
            <div className="hero-meta-item">
              <span className="hero-meta-item__label">DISCIPLINE</span>
              <span className="hero-meta-item__value">{PERSONAL_INFO.discipline}</span>
            </div>
            <div className="hero-meta-item">
              <span className="hero-meta-item__label">BASED IN</span>
              <span className="hero-meta-item__value">{PERSONAL_INFO.shortLocation}</span>
            </div>
          </div>

          <a
            href="#about"
            className="scroll-indicator"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }}
          >
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
