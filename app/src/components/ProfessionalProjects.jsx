import TitleBlock from './TitleBlock.jsx';
import { ClaimsThumb, EmpathThumb, TracFloThumb } from './ProjectThumbs.jsx';

// Note: unlike the Personal Projects cards, these have no "View details" link —
// the source for these three isn't publicly accessible, so the card ends after
// the description.
const PROJECTS = [
  {
    id: 'claims',
    Thumb: ClaimsThumb,
    title: 'Claims Automation Pipeline',
    tags: ['AWS', 'Python', 'Docker', 'LocalStack'],
    description:
      'Built a serverless workflow to automate credit card collections processes, reducing manual work and improving turnaround time.',
  },
  {
    id: 'empath',
    Thumb: EmpathThumb,
    title: 'Empath Micro-Frontend',
    tags: ['Vue.js', 'TypeScript', 'Jest', 'Vue Testing Library'],
    description: 'Rebuilt a customer servicing micro-frontend with improved test coverage and performance.',
  },
  {
    id: 'tracflo',
    Thumb: TracFloThumb,
    title: 'TracFlo',
    tags: ['PERN Stack', 'Express', 'React', 'Knex'],
    description:
      'Built full-stack features — from UI to database — for a construction-fintech platform that turns field activity into billable change orders, used by 50+ contractor companies and 35+ active users. Led the migration off a legacy PHP system with 30+ reversible database migrations and row-count checks, so the cutover ran without losing or duplicating customer data. Shipped 13+ features handling 135+ equipment and material tickets per project.',
  },
];

export default function ProfessionalProjects() {
  return (
    <section className="page" id="page-professional-projects" aria-labelledby="prof-h">
      <div className="panel">
        <div className="page-head">
          <svg className="mark i"><use href="#i-cross" /></svg>
          <h2 id="prof-h">Professional Projects</h2>
        </div>
        <p className="sub">Real solutions. Clean code. Measurable impact.</p>
        <div className="pgrid">
          {PROJECTS.map(({ id, Thumb, title, tags, description }) => (
            <article className="card" key={id}>
              <div className="card-top">
                <Thumb />
                <div>
                  <h3>{title}</h3>
                  <div className="tags">{tags.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
                </div>
              </div>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
      <TitleBlock sheetTitle="Professional projects" sheetNo="A-102" />
    </section>
  );
}
