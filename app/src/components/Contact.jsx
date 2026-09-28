
const ROWS = [
  { icon: 'i-mail', title: 'Email', href: 'mailto:joshuaxcarpentier@gmail.com', label: 'joshuaxcarpentier@gmail.com', external: false },
  { icon: 'i-code', title: 'GitHub', href: 'https://github.com/jacgit18', label: 'github.com/jacgit18', external: true },
  { icon: 'i-people', title: 'LinkedIn', href: 'https://www.linkedin.com/in/joshua-carpentier/', label: 'linkedin.com/in/joshua-carpentier', external: true },
  { icon: 'i-cal', title: 'Book a 30-minute call', href: 'https://calendly.com/joshuaxcarpentier/30min?month=2026-09', label: 'calendly.com/joshuaxcarpentier/30min', external: true },
];

export default function Contact() {
  return (
    <section className="page" id="page-contact" aria-labelledby="contact-h">
      <div className="panel">
        <div className="page-head">
          <svg className="mark i" aria-hidden="true"><use href="#i-cross" /></svg>
          <h2 id="contact-h">Get in Touch</h2>
        </div>
        <p className="sub">Open to software engineering and business systems roles.</p>
        <div className="contact-grid">
          {ROWS.map((r) => (
            <div className="crow" key={r.title}>
              <span className="iconbox"><svg className="i" aria-hidden="true"><use href={`#${r.icon}`} /></svg></span>
              <div>
                <h3>{r.title}</h3>
                <a href={r.href} target={r.external ? '_blank' : undefined} rel={r.external ? 'noopener noreferrer' : undefined}>
                  {r.label}
                  {r.external && <span className="sr-only"> (opens in new tab)</span>}
                </a>
              </div>
            </div>
          ))}
        </div>
        <p className="contact-note">Better systems. Stronger foundations.</p>
      </div>
    </section>
  );
}
