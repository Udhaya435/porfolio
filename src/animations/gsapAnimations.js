import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

export function registerGlobalScrollAnimations(rootEl, { prefersReducedMotion, isDesktopPointer }) {
  if (!rootEl || prefersReducedMotion) {
    return () => {};
  }

  const cleanups = [];

  const ctx = gsap.context(() => {
    // Scroll-triggered SplitText headings
    gsap.utils.toArray('.split-heading').forEach((heading) => {
      const split = new SplitText(heading, { type: 'lines' });
      cleanups.push(() => split.revert());

      gsap.from(split.lines, {
        y: 34,
        opacity: 0,
        duration: 0.72,
        stagger: 0.09,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: heading,
          start: 'top 86%',
          once: true,
        },
      });
    });

    // Generic reveal-up blocks
    gsap.utils.toArray('.reveal-up').forEach((el) => {
      gsap.from(el, {
        y: 26,
        opacity: 0,
        duration: 0.68,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          once: true,
        },
      });
    });

    // Staggered skill pills per category strip
    gsap.utils.toArray('.expertise-row').forEach((row) => {
      const pills = row.querySelectorAll('.tech-pill');
      if (!pills.length) return;
      gsap.from(pills, {
        y: 14,
        opacity: 0,
        duration: 0.45,
        stagger: 0.04,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: row,
          start: 'top 88%',
          once: true,
        },
      });
    });

    // Timeline vertical progress line
    const timelineProgress = document.getElementById('timeline-progress');
    if (timelineProgress) {
      gsap.to(timelineProgress, {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '.timeline-wrapper',
          start: 'top 76%',
          end: 'bottom 64%',
          scrub: 0.45,
        },
      });
    }

    // Project visual clip-path reveal
    gsap.utils.toArray('.clip-reveal').forEach((box) => {
      gsap.fromTo(
        box,
        { clipPath: 'inset(0 0 100% 0)', opacity: 0.65 },
        {
          clipPath: 'inset(0 0 0% 0)',
          opacity: 1,
          duration: 0.9,
          ease: 'power4.inOut',
          scrollTrigger: {
            trigger: box,
            start: 'top 85%',
            once: true,
          },
        }
      );
    });

    // Footer entrance
    const footerInner = document.querySelector('#site-footer .footer-inner');
    if (footerInner) {
      gsap.from(footerInner, {
        y: 18,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '#site-footer',
          start: 'top 95%',
          once: true,
        },
      });
    }

    // Desktop-only magnetic buttons & custom cursor
    if (isDesktopPointer) {
      const magneticButtons = document.querySelectorAll('.magnetic');
      magneticButtons.forEach((btn) => {
        const onMove = (e) => {
          const rect = btn.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          gsap.to(btn, {
            x: x * 0.2,
            y: y * 0.2,
            duration: 0.3,
            ease: 'power2.out',
          });
        };
        const onLeave = () => {
          gsap.to(btn, {
            x: 0,
            y: 0,
            duration: 0.45,
            ease: 'elastic.out(1, 0.4)',
          });
        };
        btn.addEventListener('mousemove', onMove);
        btn.addEventListener('mouseleave', onLeave);
        cleanups.push(() => {
          btn.removeEventListener('mousemove', onMove);
          btn.removeEventListener('mouseleave', onLeave);
        });
      });

      const cursor = document.getElementById('custom-cursor');
      if (cursor) {
        const setX = gsap.quickTo(cursor, 'left', { duration: 0.16, ease: 'power3.out' });
        const setY = gsap.quickTo(cursor, 'top', { duration: 0.16, ease: 'power3.out' });

        const onWindowMove = (e) => {
          setX(e.clientX);
          setY(e.clientY);
        };
        const onMouseOver = (e) => {
          if (e.target.closest('[data-cursor="project"]')) {
            cursor.classList.add('is-project');
            cursor.classList.remove('is-hovering');
          } else if (e.target.closest('a, button, input, textarea')) {
            cursor.classList.add('is-hovering');
            cursor.classList.remove('is-project');
          } else {
            cursor.classList.remove('is-hovering', 'is-project');
          }
        };

        window.addEventListener('mousemove', onWindowMove);
        document.addEventListener('mouseover', onMouseOver);
        cleanups.push(() => {
          window.removeEventListener('mousemove', onWindowMove);
          document.removeEventListener('mouseover', onMouseOver);
        });
      }
    }
  }, rootEl);

  return () => {
    cleanups.forEach((fn) => fn());
    ctx.revert();
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  };
}
