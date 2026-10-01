
const ROWS = [
  { icon: 'i-code', title: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'SQL'] },
  { icon: 'i-monitor', title: 'Frontend', items: ['React', 'Vue', 'HTML', 'CSS'] },
  { icon: 'i-server', title: 'Backend', items: ['Node.js', 'Express', 'FastAPI'] },
  { icon: 'i-cloud', title: 'Cloud & DevOps', items: ['AWS', 'Docker'] },
  { icon: 'i-db', title: 'Databases', items: ['PostgreSQL', 'MySQL'] },
  { icon: 'i-flask', title: 'Testing', items: ['Jest', 'Playwright', 'Vue Testing Library', 'Pytest'] },
  { icon: 'i-ai', title: 'AI', items: ['Claude', 'ChatGPT'] },
  { icon: 'i-gear', title: 'Other', items: ['Git', 'Linux', 'Jira', 'Confluence', 'Power BI'] },
];

export default function Skills() {
  return (
    <section className="page" id="page-skills" aria-labelledby="skills-h">
      <div className="panel">
        <div className="page-head">
          <svg className="mark i" aria-hidden="true"><use href="#i-wrench" /></svg>
          <h1 id="skills-h">Skills &amp; Tools</h1>
        </div>
        <p className="sub">What I build with, day to day.</p>
        <div className="skillgrid">
          {ROWS.map((r) => (
            <div className="skillrow" key={r.title}>
              <span className="iconbox sm"><svg className="i" aria-hidden="true"><use href={`#${r.icon}`} /></svg></span>
              <div>
                <h2>{r.title}</h2>
                <p>{r.items.map((it, i) => (i === 0 ? it : <span key={it}><b>·</b>{it}</span>))}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="motto hand">Plan. Build. Improve.</p>
      </div>
    </section>
  );
}
