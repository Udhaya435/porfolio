import { useCallback, useEffect, useRef, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useMediaQuery } from './hooks/useMediaQuery';
import { initSmoothScroll } from './animations/smoothScroll';
import { registerGlobalScrollAnimations } from './animations/gsapAnimations';

import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const appRef = useRef(null);
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const isDesktopPointer = useMediaQuery(
    '(hover: hover) and (pointer: fine) and (min-width: 1024px)'
  );
  const [preloaderDone, setPreloaderDone] = useState(prefersReducedMotion);

  const handlePreloaderComplete = useCallback(() => {
    setPreloaderDone(true);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setPreloaderDone(true);
    }
  }, [prefersReducedMotion]);

  useEffect(() => {
    const smoothHandle = initSmoothScroll(prefersReducedMotion);
    return () => {
      smoothHandle?.destroy();
    };
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (!preloaderDone || !appRef.current) return undefined;

    const cleanup = registerGlobalScrollAnimations(appRef.current, {
      prefersReducedMotion,
      isDesktopPointer,
    });

    ScrollTrigger.refresh();
    return cleanup;
  }, [preloaderDone, prefersReducedMotion, isDesktopPointer]);

  return (
    <div ref={appRef}>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <div className="bg-architectural-grid" aria-hidden="true" />

      <div className="custom-cursor" id="custom-cursor" aria-hidden="true">
        <span className="custom-cursor__label">VIEW</span>
      </div>

      <Preloader
        prefersReducedMotion={prefersReducedMotion}
        onComplete={handlePreloaderComplete}
      />

      <Navbar prefersReducedMotion={prefersReducedMotion} />

      <main id="main-content">
        <Hero
          prefersReducedMotion={prefersReducedMotion}
          isDesktopPointer={isDesktopPointer}
          preloaderDone={preloaderDone}
        />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
