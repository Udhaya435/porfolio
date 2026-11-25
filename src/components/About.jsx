export default function About() {
  return (
    <section id="about" className="section-shell" aria-labelledby="about-heading">
      <div className="site-container">
        <div className="section-meta reveal-up">
          <span className="section-meta__num">01</span>
          <span>/ ABOUT ME</span>
          <span className="section-meta__line" aria-hidden="true" />
        </div>

        <div className="about-grid">
          <h2 id="about-heading" className="editorial-heading about-heading split-heading">
            ENGINEERING IDEAS
            <br />
            INTO DIGITAL REALITY.
          </h2>

          <div className="about-body">
            <p className="about-lead reveal-up">
              I&apos;m Udhayakumar S, a Full Stack Developer with 1 year of experience in developing modern web applications using Python, Node.js, PostgreSQL and React.js.
            </p>
            <p className="about-paragraph reveal-up">
              I have experience in REST API development, database management, responsive frontend development and building scalable software solutions.
            </p>
            <p className="about-paragraph reveal-up">
              I enjoy solving technical challenges, developing reusable components and creating practical software applications. Currently associated with Adhiba Technologies Pvt. Ltd., Coimbatore.
            </p>

            <div className="about-facts reveal-up">
              <div className="about-fact">
                <span className="about-fact__label">ROLE</span>
                <span className="about-fact__val">Junior Software Engineer</span>
              </div>
              <div className="about-fact">
                <span className="about-fact__label">COMPANY</span>
                <span className="about-fact__val">Adhiba Technologies Pvt. Ltd.</span>
              </div>
              <div className="about-fact">
                <span className="about-fact__label">LANGUAGES</span>
                <span className="about-fact__val">Tamil (Native), English</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
