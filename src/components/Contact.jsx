import { useState } from 'react';
import { ArrowUpRight, Check, Copy, Mail, Phone, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/personalInfo';

function GithubIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const INITIAL_VALUES = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

function validateField(name, value) {
  const trimmed = value.trim();
  switch (name) {
    case 'name':
      return trimmed.length >= 2 ? '' : 'Please enter your full name (at least 2 characters).';
    case 'email':
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)
        ? ''
        : 'Please enter a valid email address.';
    case 'subject':
      return trimmed.length >= 3 ? '' : 'Please enter a subject (at least 3 characters).';
    case 'message':
      return trimmed.length >= 10
        ? ''
        : 'Please enter a message (at least 10 characters).';
    default:
      return '';
  }
}

export default function Contact() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState({});
  const [copied, setCopied] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
    } catch {
      const tempInput = document.createElement('input');
      tempInput.value = PERSONAL_INFO.email;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = {};
    let hasError = false;
    Object.keys(values).forEach((key) => {
      const err = validateField(key, values[key]);
      nextErrors[key] = err;
      if (err) hasError = true;
    });

    setErrors(nextErrors);
    if (hasError) {
      setStatusMessage('');
      return;
    }

    const bodyText = `Name: ${values.name.trim()}\nEmail: ${values.email.trim()}\n\nMessage:\n${values.message.trim()}`;
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      values.subject.trim()
    )}&body=${encodeURIComponent(bodyText)}`;

    setStatusMessage(
      'Your email application is being opened with your entered message details.'
    );
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="section-shell" aria-labelledby="contact-heading">
      <div className="site-container">
        <div className="section-meta reveal-up">
          <span className="section-meta__num">06</span>
          <span>/ GET IN TOUCH</span>
          <span className="section-meta__line" aria-hidden="true" />
        </div>

        <h2 id="contact-heading" className="editorial-heading contact-heading split-heading">
          HAVE AN IDEA?
          <br />
          LET&apos;S BUILD
          <br />
          <span className="contact-heading__accent">SOMETHING GREAT.</span>
        </h2>

        <div className="contact-grid">
          <div className="contact-details reveal-up">
            <p className="about-paragraph">
              Have a project, opportunity or collaboration in mind? I&apos;d love to connect and discuss how we can build something meaningful together.
            </p>

            <div className="contact-item">
              <span className="contact-item__label">EMAIL</span>
              <div className="contact-email-row">
                <a href={`mailto:${PERSONAL_INFO.email}`} className="contact-value-link">
                  {PERSONAL_INFO.email}
                </a>
                <button
                  type="button"
                  className={`copy-email-btn ${copied ? 'is-copied' : ''}`}
                  onClick={handleCopyEmail}
                >
                  {copied ? <Check size={14} aria-hidden="true" /> : <Copy size={14} aria-hidden="true" />}
                  <span>{copied ? 'COPIED' : 'COPY EMAIL'}</span>
                </button>
              </div>
              <div style={{ marginTop: '0.9rem' }}>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="social-link magnetic">
                  <Mail size={15} aria-hidden="true" />
                  <span>EMAIL ME DIRECTLY</span>
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-item__label">PHONE</span>
              <a
                href={`tel:+91${PERSONAL_INFO.phone}`}
                className="contact-value-link"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.55rem' }}
              >
                <Phone size={18} aria-hidden="true" />
                <span>{PERSONAL_INFO.phone}</span>
              </a>
            </div>

            <div className="contact-item">
              <span className="contact-item__label">LOCATION</span>
              <span className="contact-value-link" style={{ fontSize: '1.15rem' }}>
                {PERSONAL_INFO.location}.
              </span>
            </div>

            <div className="contact-socials">
              <a
                href={PERSONAL_INFO.socials.github}
                className="social-link magnetic"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon size={16} />
                <span>GITHUB</span>
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                className="social-link magnetic"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon size={16} />
                <span>LINKEDIN</span>
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>
          </div>

          <form className="contact-form reveal-up" onSubmit={handleSubmit} noValidate>
            <div className="form-field">
              <label htmlFor="contact-name" className="form-label">
                Full Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                className={`form-input ${errors.name ? 'is-invalid' : ''}`}
                placeholder="Your full name"
                value={values.name}
                onChange={handleChange}
                autoComplete="name"
                required
              />
              <span className="form-error" aria-live="polite">
                {errors.name || ''}
              </span>
            </div>

            <div className="form-field">
              <label htmlFor="contact-email" className="form-label">
                Email Address
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                className={`form-input ${errors.email ? 'is-invalid' : ''}`}
                placeholder="you@example.com"
                value={values.email}
                onChange={handleChange}
                autoComplete="email"
                required
              />
              <span className="form-error" aria-live="polite">
                {errors.email || ''}
              </span>
            </div>

            <div className="form-field">
              <label htmlFor="contact-subject" className="form-label">
                Subject
              </label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                className={`form-input ${errors.subject ? 'is-invalid' : ''}`}
                placeholder="Project inquiry / Opportunity"
                value={values.subject}
                onChange={handleChange}
                required
              />
              <span className="form-error" aria-live="polite">
                {errors.subject || ''}
              </span>
            </div>

            <div className="form-field">
              <label htmlFor="contact-message" className="form-label">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                className={`form-textarea ${errors.message ? 'is-invalid' : ''}`}
                placeholder="Tell me about your project or role..."
                value={values.message}
                onChange={handleChange}
                minLength={10}
                required
              />
              <span className="form-error" aria-live="polite">
                {errors.message || ''}
              </span>
            </div>

            {statusMessage && (
              <div className="form-status" role="status" aria-live="polite">
                {statusMessage}
              </div>
            )}

            <button type="submit" className="btn-primary magnetic" style={{ width: '100%' }}>
              <span>SEND VIA EMAIL APP</span>
              <Send size={15} aria-hidden="true" />
            </button>

            <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: 0 }}>
              Submitting opens your default email application with your message details pre-filled.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
