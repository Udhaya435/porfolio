import { CERTIFICATIONS_DATA, EDUCATION_DATA } from '../data/personalInfo';

export default function Education() {
  return (
    <section id="education" className="section-shell" aria-labelledby="education-heading">
      <div className="site-container">
        <div className="section-meta reveal-up">
          <span className="section-meta__num">05</span>
          <span>/ EDUCATION</span>
          <span className="section-meta__line" aria-hidden="true" />
        </div>

        <h2 id="education-heading" className="sr-only">
          Education and Certifications
        </h2>

        <div className="credentials-grid reveal-up">
          <div className="credential-block">
            <span className="credential-label">EDUCATION</span>
            <h3 className="credential-title">
              {EDUCATION_DATA.degree} — {EDUCATION_DATA.field}
            </h3>
            <p className="credential-sub">
              {EDUCATION_DATA.institution} &bull; {EDUCATION_DATA.year}
            </p>
          </div>

          <div className="credential-block">
            <span className="credential-label">CERTIFICATIONS</span>
            <ul className="cert-list">
              {CERTIFICATIONS_DATA.map((cert) => (
                <li key={cert.name} className="cert-item">
                  <span className="cert-item__name">{cert.name}</span>
                  <span className="cert-item__issuer">{cert.meta}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
