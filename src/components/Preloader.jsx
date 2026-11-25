import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { PERSONAL_INFO } from '../data/personalInfo';

export default function Preloader({ prefersReducedMotion, onComplete }) {
  const containerRef = useRef(null);
  const barRef = useRef(null);
  const counterRef = useRef(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      setDone(true);
      onComplete?.();
      return;
    }

    document.body.classList.add('is-loading');

    const ctx = gsap.context(() => {
      const progress = { value: 0 };
      const tl = gsap.timeline({
        onComplete: () => {
          document.body.classList.remove('is-loading');
          setDone(true);
          onComplete?.();
        },
      });

      tl.to(progress, {
        value: 100,
        duration: 0.72,
        ease: 'power2.out',
        onUpdate: () => {
          if (counterRef.current) {
            counterRef.current.textContent = String(Math.round(progress.value)).padStart(2, '0');
          }
        },
      })
        .to(
          barRef.current,
          {
            scaleX: 1,
            duration: 0.72,
            ease: 'power2.out',
          },
          '<'
        )
        .to(containerRef.current, {
          yPercent: -100,
          duration: 0.62,
          ease: 'power4.inOut',
        });
    }, containerRef);

    return () => {
      document.body.classList.remove('is-loading');
      ctx.revert();
    };
  }, [prefersReducedMotion, onComplete]);

  if (done) return null;

  return (
    <div
      ref={containerRef}
      className="preloader"
      role="status"
      aria-label="Loading portfolio"
    >
      <div className="preloader__top">
        <span>PORTFOLIO // 2026</span>
        <span>{PERSONAL_INFO.shortLocation}</span>
      </div>

      <div className="preloader__center">
        <div className="preloader__brand">
          {PERSONAL_INFO.brand}
          <span>®</span>
        </div>
        <div className="preloader__progress-track">
          <div ref={barRef} className="preloader__progress-bar" />
        </div>
      </div>

      <div className="preloader__bottom">
        <span className="preloader__status">INITIALIZING INTERFACE</span>
        <span ref={counterRef} className="preloader__counter">
          00
        </span>
      </div>
    </div>
  );
}
