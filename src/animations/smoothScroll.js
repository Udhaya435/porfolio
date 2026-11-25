import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let lenisInstance = null;

export function initSmoothScroll(prefersReducedMotion) {
  if (prefersReducedMotion || lenisInstance) {
    return lenisInstance;
  }

  const lenis = new Lenis({
    duration: 1.15,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    touchMultiplier: 1.5,
  });

  lenis.on('scroll', ScrollTrigger.update);

  const tick = (time) => {
    lenis.raf(time * 1000);
  };

  gsap.ticker.add(tick);
  gsap.ticker.lagSmoothing(0);

  lenisInstance = {
    instance: lenis,
    destroy: () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      lenisInstance = null;
    },
  };

  return lenisInstance;
}

export function getLenisInstance() {
  return lenisInstance?.instance ?? null;
}

export function scrollToSection(sectionId) {
  const target = document.getElementById(sectionId);
  if (!target) return;

  const lenis = getLenisInstance();
  if (lenis) {
    lenis.scrollTo(target, { offset: -8 });
  } else {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export function scrollToTop() {
  const lenis = getLenisInstance();
  if (lenis) {
    lenis.scrollTo(0);
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
