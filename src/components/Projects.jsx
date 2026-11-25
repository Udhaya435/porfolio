import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { PROJECTS_DATA } from '../data/projects';

function ProjectMockup({ type }) {
  switch (type) {
    case 'erp':
      return (
        <svg viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <rect width="800" height="500" fill="#101010" />
          <path
            d="M0 100H800M0 200H800M0 300H800M0 400H800M160 0V500M320 0V500M480 0V500M640 0V500"
            stroke="rgba(255,255,255,0.04)"
            strokeWidth="1"
          />
          <rect x="64" y="64" width="672" height="372" stroke="rgba(255,255,255,0.14)" fill="#0A0A0A" />
          <rect x="64" y="64" width="160" height="372" stroke="rgba(255,255,255,0.12)" fill="#0E0E0E" />
          <rect x="88" y="96" width="96" height="10" fill="#B9F27C" />
          <rect x="88" y="132" width="112" height="6" fill="rgba(255,255,255,0.2)" />
          <rect x="88" y="156" width="84" height="6" fill="rgba(255,255,255,0.12)" />
          <rect x="88" y="180" width="98" height="6" fill="rgba(255,255,255,0.12)" />
          <rect x="88" y="204" width="76" height="6" fill="rgba(255,255,255,0.12)" />
          <rect x="256" y="96" width="136" height="84" stroke="rgba(255,255,255,0.12)" fill="#151515" />
          <rect x="412" y="96" width="136" height="84" stroke="rgba(255,255,255,0.12)" fill="#151515" />
          <rect x="568" y="96" width="136" height="84" stroke="#B9F27C" strokeOpacity="0.55" fill="#151515" />
          <rect x="276" y="120" width="48" height="8" fill="rgba(255,255,255,0.3)" />
          <rect x="276" y="142" width="88" height="16" fill="#F5F5F5" />
          <rect x="432" y="120" width="56" height="8" fill="rgba(255,255,255,0.3)" />
          <rect x="432" y="142" width="72" height="16" fill="#F5F5F5" />
          <rect x="588" y="120" width="60" height="8" fill="#B9F27C" />
          <rect x="588" y="142" width="84" height="16" fill="#B9F27C" />
          <rect x="256" y="208" width="448" height="196" stroke="rgba(255,255,255,0.12)" fill="#131313" />
          <line x1="256" y1="252" x2="704" y2="252" stroke="rgba(255,255,255,0.08)" />
          <line x1="256" y1="296" x2="704" y2="296" stroke="rgba(255,255,255,0.08)" />
          <line x1="256" y1="340" x2="704" y2="340" stroke="rgba(255,255,255,0.08)" />
          <rect x="280" y="226" width="110" height="8" fill="rgba(255,255,255,0.28)" />
          <rect x="610" y="224" width="64" height="12" fill="#B9F27C" fillOpacity="0.25" stroke="#B9F27C" />
          <rect x="280" y="270" width="140" height="8" fill="rgba(255,255,255,0.2)" />
          <rect x="280" y="314" width="120" height="8" fill="rgba(255,255,255,0.2)" />
          <rect x="280" y="358" width="160" height="8" fill="rgba(255,255,255,0.2)" />
        </svg>
      );
    case 'sos':
      return (
        <svg viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <rect width="800" height="500" fill="#101010" />
          <circle cx="400" cy="250" r="180" stroke="rgba(255,255,255,0.06)" strokeDasharray="6 6" />
          <circle cx="400" cy="250" r="120" stroke="rgba(185,242,124,0.22)" />
          <circle cx="400" cy="250" r="60" stroke="#B9F27C" strokeOpacity="0.65" />
          <line x1="120" y1="250" x2="680" y2="250" stroke="rgba(255,255,255,0.08)" />
          <line x1="400" y1="40" x2="400" y2="460" stroke="rgba(255,255,255,0.08)" />
          <rect x="80" y="70" width="210" height="110" fill="#0B0B0B" stroke="rgba(255,255,255,0.14)" />
          <circle cx="104" cy="96" r="5" fill="#B9F27C" />
          <rect x="120" y="92" width="110" height="8" fill="#F5F5F5" />
          <path d="M100 150 L140 132 L180 144 L220 116 L265 128" stroke="#B9F27C" strokeWidth="2" fill="none" />
          <rect x="510" y="320" width="210" height="110" fill="#0B0B0B" stroke="rgba(255,255,255,0.14)" />
          <rect x="532" y="344" width="90" height="8" fill="rgba(255,255,255,0.3)" />
          <rect x="532" y="368" width="44" height="36" fill="#151515" stroke="#B9F27C" />
          <rect x="588" y="368" width="44" height="36" fill="#151515" stroke="rgba(255,255,255,0.2)" />
          <rect x="644" y="368" width="44" height="36" fill="#151515" stroke="rgba(255,255,255,0.2)" />
          <circle cx="400" cy="250" r="8" fill="#B9F27C" />
        </svg>
      );
    case 'conveyors':
      return (
        <svg viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <rect width="800" height="500" fill="#101010" />
          <path d="M0 125H800M0 250H800M0 375H800" stroke="rgba(255,255,255,0.05)" />
          <rect x="110" y="210" width="580" height="80" rx="40" stroke="rgba(255,255,255,0.22)" strokeWidth="2" fill="#0B0B0B" />
          <circle cx="150" cy="250" r="24" stroke="#B9F27C" strokeWidth="2" />
          <circle cx="275" cy="250" r="16" stroke="rgba(255,255,255,0.25)" />
          <circle cx="400" cy="250" r="24" stroke="#B9F27C" strokeWidth="2" />
          <circle cx="525" cy="250" r="16" stroke="rgba(255,255,255,0.25)" />
          <circle cx="650" cy="250" r="24" stroke="#B9F27C" strokeWidth="2" />
          <rect x="190" y="138" width="96" height="58" fill="#151515" stroke="rgba(255,255,255,0.18)" />
          <rect x="352" y="138" width="96" height="58" fill="#151515" stroke="#B9F27C" />
          <rect x="514" y="138" width="96" height="58" fill="#151515" stroke="rgba(255,255,255,0.18)" />
          <path d="M140 345H660" stroke="#B9F27C" strokeDasharray="10 8" strokeWidth="1.5" />
        </svg>
      );
    case 'aiot':
    default:
      return (
        <svg viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <rect width="800" height="500" fill="#101010" />
          <polygon points="400,85 545,168 545,332 400,415 255,332 255,168" stroke="rgba(255,255,255,0.14)" fill="#0B0B0B" />
          <polygon points="400,138 498,194 498,306 400,362 302,306 302,194" stroke="#B9F27C" strokeOpacity="0.55" fill="none" />
          <line x1="400" y1="85" x2="400" y2="415" stroke="rgba(255,255,255,0.08)" />
          <line x1="255" y1="168" x2="545" y2="332" stroke="rgba(255,255,255,0.08)" />
          <line x1="545" y1="168" x2="255" y2="332" stroke="rgba(255,255,255,0.08)" />
          <circle cx="400" cy="250" r="18" fill="#B9F27C" />
          <circle cx="400" cy="85" r="6" fill="#F5F5F5" />
          <circle cx="545" cy="168" r="6" fill="#B9F27C" />
          <circle cx="545" cy="332" r="6" fill="#F5F5F5" />
          <circle cx="400" cy="415" r="6" fill="#B9F27C" />
          <circle cx="255" cy="332" r="6" fill="#F5F5F5" />
          <circle cx="255" cy="168" r="6" fill="#B9F27C" />
          <rect x="82" y="84" width="120" height="44" fill="#151515" stroke="rgba(255,255,255,0.14)" />
          <rect x="598" y="372" width="120" height="44" fill="#151515" stroke="#B9F27C" strokeOpacity="0.6" />
        </svg>
      );
  }
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const closeBtnRef = useRef(null);
  const lastFocusedRef = useRef(null);

  const openModal = (project) => {
    lastFocusedRef.current = document.activeElement;
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
    if (lastFocusedRef.current && typeof lastFocusedRef.current.focus === 'function') {
      lastFocusedRef.current.focus();
    }
  };

  useEffect(() => {
    if (!selectedProject) return undefined;

    document.body.classList.add('modal-open');
    closeBtnRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.classList.remove('modal-open');
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="section-shell" aria-labelledby="projects-heading">
      <div className="site-container">
        <div className="section-meta reveal-up">
          <span className="section-meta__num">04</span>
          <span>/ SELECTED WORK</span>
          <span className="section-meta__line" aria-hidden="true" />
        </div>

        <div className="projects-header">
          <h2 id="projects-heading" className="editorial-heading projects-heading split-heading">
            A SELECTION OF
            <br />
            THINGS I&apos;VE BUILT.
          </h2>
          <p className="projects-sub reveal-up">
            Enterprise QMS modules, real-time alert telemetry dashboards, and modern corporate web platforms engineered end-to-end.
          </p>
        </div>

        <div className="projects-list">
          {PROJECTS_DATA.map((project, index) => {
            const isReverse = index % 2 === 1;
            return (
              <article
                key={project.id}
                className={`project-item ${isReverse ? 'project-item--reverse' : ''}`}
              >
                <div
                  className="project-visual-wrap clip-reveal"
                  data-cursor="project"
                  role="button"
                  tabIndex={0}
                  aria-label={`Inspect details for ${project.title}`}
                  onClick={() => openModal(project)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      openModal(project);
                    }
                  }}
                >
                  <div className="project-visual-inner">
                    <ProjectMockup type={project.mockupType} />
                  </div>
                  <div className="project-visual-overlay" aria-hidden="true" />
                  <span className="project-visual-badge">{project.category}</span>
                </div>

                <div className="project-content reveal-up">
                  <span className="project-num">PROJECT {project.number}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="project-tech__tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button
                    type="button"
                    className="project-action-btn magnetic"
                    onClick={() => openModal(project)}
                  >
                    <span>VIEW DETAILS &amp; CONTRIBUTIONS</span>
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {selectedProject && (
        <div
          className="project-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div className="project-modal__dialog">
            <button
              ref={closeBtnRef}
              type="button"
              className="project-modal__close"
              aria-label="Close project details"
              onClick={closeModal}
            >
              <X size={18} aria-hidden="true" />
            </button>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', paddingRight: '1.5rem' }}>
              <span className="project-num">
                PROJECT {selectedProject.number} // {selectedProject.category}
              </span>
              <h3
                id="modal-project-title"
                className="project-title"
                style={{ fontSize: 'clamp(1.4rem, 3vw, 2.1rem)' }}
              >
                {selectedProject.title}
              </h3>
              <p className="project-desc" style={{ color: 'var(--text-primary)' }}>
                {selectedProject.description}
              </p>

              <div style={{ borderTop: '1px solid var(--border-hairline)', paddingTop: '1.25rem' }}>
                <span className="credential-label" style={{ display: 'block', marginBottom: '0.85rem' }}>
                  KEY CONTRIBUTIONS
                </span>
                <ul
                  style={{
                    listStyle: 'none',
                    margin: 0,
                    padding: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                  }}
                >
                  {selectedProject.contributions.map((item) => (
                    <li key={item} className="timeline-list__item">
                      <span className="timeline-list__bullet" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ borderTop: '1px solid var(--border-hairline)', paddingTop: '1.25rem' }}>
                <span className="credential-label" style={{ display: 'block', marginBottom: '0.85rem' }}>
                  TECHNOLOGIES
                </span>
                <div className="project-tech">
                  {selectedProject.technologies.map((tech) => (
                    <span key={tech} className="project-tech__tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
