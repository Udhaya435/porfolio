import { EXPERIENCE_DATA } from '../data/personalInfo';

export default function Experience() {
  return (
    <section id="experience" className="section-shell" aria-labelledby="experience-heading">
      <div className="site-container">
        <div className="section-meta reveal-up">
          <span className="section-meta__num">03</span>
          <span>/ EXPERIENCE</span>
          <span className="section-meta__line" aria-hidden="true" />
        </div>

        <h2 id="experience-heading" className="editorial-heading experience-heading split-heading">
          MY PROFESSIONAL
          <br />
          JOURNEY.
        </h2>

        <div className="timeline-wrapper">
          <div className="timeline-track" aria-hidden="true">
            <div className="timeline-progress" id="timeline-progress" />
          </div>

          {EXPERIENCE_DATA.map((item) => (
            <article key={item.id} className="timeline-card reveal-up">
              <span className="timeline-node" aria-hidden="true" />

              <div className="timeline-top-row">
                <span className="credential-label">EXPERIENCE // {item.number}</span>
                <span className="timeline-big-num" aria-hidden="true">
                  01 YR
                </span>
              </div>

              <header className="timeline-header">
                <div>
                  <h3 className="timeline-company">{item.company}</h3>
                  <div className="timeline-role">{item.position}</div>
                </div>
                <div className="timeline-meta">
                  <span className="timeline-date">{item.duration}</span>
                  <span className="timeline-location">{item.location}</span>
                </div>
              </header>

              <ul className="timeline-list">
                {item.responsibilities.map((resp) => (
                  <li key={resp} className="timeline-list__item">
                    <span className="timeline-list__bullet" aria-hidden="true" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
