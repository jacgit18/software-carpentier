import { ClaimsThumb, EmpathThumb, TracFloThumb, UpskillThumb } from './ProjectThumbs.jsx';

// Note: unlike the Personal Projects cards, these have no "View details" link —
// the source for these three isn't publicly accessible, so the card ends after
// the description.
const PROJECTS = [
  {
    id: 'payment-plans',
    Thumb: ClaimsThumb,
    title: 'RTIC — Promise to Pay Payment Plans',
    meta: 'Capital One · Software Engineer · 2025',
    tags: ['AWS', 'Python', 'Docker', 'LocalStack'],
    description:
      'Built the workflow that lets a customer who has fallen behind on a credit card enroll in a payment plan without waiting for a collections agent, as part of Capital One’s Real-Time Intelligence Collection (RTIC) platform. Also wrote the automated tests that check it from start to finish, running against simulated AWS services on a laptop so engineers could verify changes without waiting for a shared test environment.',
  },
  {
    id: 'empath',
    Thumb: EmpathThumb,
    title: 'Empath',
    meta: 'Capital One · QA Engineer · 2024',
    tags: ['Vue.js', 'TypeScript', 'Jest', 'Vue Testing Library'],
    description:
      'Built automated tests for the internal screens Capital One’s credit card agents use every day, including updating a customer’s citizenship record and requesting secure documents. Test coverage on those workflows rose 75%, so changes to compliance-sensitive features were caught before reaching agents or customers.',
  },
  {
    id: 'td-upskilling',
    Thumb: UpskillThumb,
    title: 'Engineering Upskilling Program',
    meta: 'TD Bank · Business Systems Analyst · 2022–23',
    tags: ['Power BI', 'Java', 'Spring Boot', 'Docker'],
    description:
      'Helped plan and run a technical bootcamp program for 200+ software engineers, associate through senior. Interviewed engineers and leads to find what they needed, built a Power BI skill matrix from delivery metrics and technology demand to choose the topics, and wrote the setup guides for the Java, Spring Boot, Docker, and event-driven courses across 10 cohorts over 5 months.',
  },
  {
    id: 'tracflo',
    Thumb: TracFloThumb,
    title: 'TracFlo',
    meta: 'TracFlo · Software Engineer · 2022',
    tags: ['PERN Stack', 'Express', 'React', 'Knex'],
    description:
      'Built full-stack features — from UI to database — for a construction-fintech platform that turns field activity into billable change orders, used by 50+ contractor companies and 35+ active users. Implemented the migration off a legacy PHP system with 30+ reversible database migrations and row-count checks, so the cutover ran without losing or duplicating customer data. Shipped 13+ features handling 135+ equipment and material tickets per project.',
    link: 'https://www.tracfloapp.com',
  },
];

export default function ProfessionalProjects() {
  return (
    <section className="page" id="page-professional-projects" aria-labelledby="prof-h">
      <div className="panel">
        <div className="page-head">
          <svg className="mark i" aria-hidden="true"><use href="#i-cross" /></svg>
          <h2 id="prof-h">Professional Work</h2>
        </div>
        <p className="sub">Real solutions. Clean code. Measurable impact.</p>
        <div className="pgrid">
          {PROJECTS.map(({ id, Thumb, title, meta, tags, description, link }) => (
            <article className="card" key={id}>
              <div className="card-top">
                <Thumb />
                <div>
                  <h3>{title}</h3>
                  <p className="card-meta">{meta}</p>
                  <div className="tags">{tags.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
                </div>
              </div>
              <p>{description}</p>
              {link && (
                <a className="more" href={link} target="_blank" rel="noopener noreferrer">
                  <img className="link-logo" src="./tracflo-logo.svg" alt="" aria-hidden="true" />
                  Visit TracFlo <svg aria-hidden="true"><use href="#i-arrow" /></svg>
                  <span className="sr-only"> (opens in new tab)</span>
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
