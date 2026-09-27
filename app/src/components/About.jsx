import TitleBlock from './TitleBlock.jsx';

const REVISIONS = [
  { rev: 'A', description: 'TracFlo — full stack features, PERN stack', period: '2022' },
  { rev: 'B', description: 'TD Bank — business systems analyst', period: '2022–23' },
  { rev: 'C', description: 'Capital One — quality assurance', period: '2024' },
  { rev: 'D', description: 'Capital One — full stack, collections workflows', period: '2025–26' },
];

const KEY_SKILLS = ['AWS', 'Python', 'Docker', 'Kubernetes', 'Terraform', 'JavaScript / TypeScript', 'SQL', 'CI/CD', 'Linux'];

export default function About() {
  return (
    <section className="page" id="page-about" aria-labelledby="about-h">
      <div className="panel">
        <div className="page-head">
          <svg className="mark i"><use href="#i-cross" /></svg>
          <h2 id="about-h">About Me</h2>
        </div>
        <div className="roles">Builder<i>/</i>Problem Solver<i>/</i>Lifelong Learner</div>
        <div className="about-grid">
          <div>
            <p>
              I’m Joshua — a software carpentier with 5 years of engineering experience, including
              ~6 months in QA and hands-on QA work in engineering roles.
            </p>
            <p>
              I focus on building reliable systems, automating the repetitive, and creating clean,
              maintainable code. My goal is to grow into a software architect, designing systems that
              scale and solve real problems.
            </p>
          </div>
          <div className="about-side">
            <div className="sketch" aria-hidden="true">
              <div className="note hand">Better systems.<br />Stronger tomorrow.</div>
              <svg viewBox="0 0 140 130" fill="none" stroke="#9cc8ff" strokeWidth="1" strokeLinejoin="round">
                <path d="M70 12 118 38v54L70 118 22 92V38z" fill="rgba(124,192,255,.1)" />
                <path d="M22 38 70 64l48-26M70 64v54" />
                <path d="M46 26 94 52M94 26 46 52" strokeDasharray="3 3" />
                <path d="M70 12v-8M60 4h20" />
                <path d="M22 100 70 126l48-26" strokeDasharray="2 3" />
              </svg>
            </div>
            <div className="keyskills">
              <h3>Key Skills</h3>
              <ul>{KEY_SKILLS.map((s) => <li key={s}>{s}</li>)}</ul>
            </div>
          </div>
        </div>
      </div>
      <TitleBlock sheetTitle="About" sheetNo="A-104" revisions={REVISIONS} />
    </section>
  );
}
