import { SKILL_CATEGORIES } from '../data/personalInfo';

export default function Skills() {
  return (
    <section id="skills" className="section-shell" aria-labelledby="skills-heading">
      <div className="site-container">
        <div className="section-meta reveal-up">
          <span className="section-meta__num">02</span>
          <span>/ TECHNICAL EXPERTISE</span>
          <span className="section-meta__line" aria-hidden="true" />
        </div>

        <h2 id="skills-heading" className="editorial-heading expertise-heading split-heading">
          TOOLS THAT
          <br />
          POWER MY WORK.
        </h2>

        <div className="expertise-strips">
          {SKILL_CATEGORIES.map((group) => (
            <div key={group.category} className="expertise-row reveal-up">
              <div className="expertise-category">{group.category}</div>
              <div className="expertise-tags">
                {group.items.map((skill) => (
                  <span key={skill} className="tech-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
