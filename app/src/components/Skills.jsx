import TitleBlock from './TitleBlock.jsx';

const ROWS = [
  { icon: 'i-code', title: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'SQL'] },
  { icon: 'i-monitor', title: 'Frontend', items: ['React', 'Vue', 'HTML', 'CSS', 'Tailwind'] },
  { icon: 'i-server', title: 'Backend', items: ['Node.js', 'Express', 'FastAPI', '.NET (basics)'] },
  { icon: 'i-cloud', title: 'Cloud & DevOps', items: ['AWS', 'Docker', 'Kubernetes', 'Terraform'] },
  { icon: 'i-db', title: 'Databases', items: ['PostgreSQL', 'MySQL', 'DynamoDB', 'Redis'] },
  { icon: 'i-flask', title: 'Testing', items: ['Jest', 'Playwright', 'Vue Testing Library', 'Pytest'] },
  { icon: 'i-gear', title: 'Other', items: ['Git', 'Linux', 'Jira', 'Confluence', 'Power BI'] },
];

export default function Skills() {
  return (
    <section className="page" id="page-skills" aria-labelledby="skills-h">
      <div className="panel">
        <div className="page-head">
          <svg className="mark i"><use href="#i-wrench" /></svg>
          <h2 id="skills-h">Skills &amp; Tools</h2>
        </div>
        <p className="sub">What I build with, day to day.</p>
        <div className="skillgrid">
          {ROWS.map((r) => (
            <div className="skillrow" key={r.title}>
              <span className="iconbox sm"><svg className="i"><use href={`#${r.icon}`} /></svg></span>
              <div>
                <h3>{r.title}</h3>
                <p>{r.items.map((it, i) => (i === 0 ? it : <span key={it}><b>·</b>{it}</span>))}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="motto hand">Plan. Build. Improve.</p>
      </div>
      <TitleBlock sheetTitle="Skills &amp; tools" sheetNo="A-105" />
    </section>
  );
}
