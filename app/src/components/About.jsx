import TitleBlock from './TitleBlock.jsx';

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
        </div>
      </div>
      <TitleBlock sheetTitle="About" sheetNo="A-104" />
    </section>
  );
}
