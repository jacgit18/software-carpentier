import Cube from './Cube.jsx';
import TitleBlock from './TitleBlock.jsx';

export default function Home({ onNav }) {
  return (
    <section className="page home" id="page-home" aria-label="Home">
      <section className="hero">
        <div className="hero-copy">
          <div className="kicker">PLAN &nbsp;/&nbsp; BUILD &nbsp;/&nbsp; IMPROVE</div>
          <h1>Software Carpentier</h1>
          <p className="tagline">Turning ideas into scalable systems</p>
          <p className="intro">
            I’m Joshua — a software carpentier, focused on building reliable, maintainable, and
            scalable systems. I bridge the gap between problem solving and thoughtful architecture,
            crafting solutions that last.
          </p>
          <div className="btns">
            <button type="button" className="btn" onClick={() => onNav('professional-projects')}>
              View projects <svg><use href="#i-arrow" /></svg>
            </button>
            <button type="button" className="btn" onClick={() => onNav('contact')}>
              Get in touch <svg><use href="#i-arrow" /></svg>
            </button>
          </div>
          <div className="hero-foot">
            <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2">
              <circle cx="16" cy="16" r="5" />
              <path d="M16 2v10M16 20v10M2 16h10M20 16h10" />
            </svg>
            Better systems. Stronger foundations.
          </div>
        </div>

        <Cube />

        <aside className="panel blocks" aria-labelledby="bb-h">
          <h2 id="bb-h">Building blocks of my work</h2>
          <ul>
            <li>
              <span className="iconbox"><svg className="i"><use href="#i-cube" /></svg></span>
              <div><h3>Problem Solving</h3><p>Find the right solution, not just the quick one.</p></div>
            </li>
            <li>
              <span className="iconbox"><svg className="i"><use href="#i-gear" /></svg></span>
              <div><h3>System Design</h3><p>Designing for scale, reliability, and real-world impact.</p></div>
            </li>
            <li>
              <span className="iconbox"><svg className="i"><use href="#i-code" /></svg></span>
              <div><h3>Full Stack Development</h3><p>From UI to infrastructure, I enjoy the full stack.</p></div>
            </li>
            <li>
              <span className="iconbox"><svg className="i"><use href="#i-cloud" /></svg></span>
              <div><h3>Cloud &amp; DevOps</h3><p>Automate, optimize, and keep things running.</p></div>
            </li>
            <li>
              <span className="iconbox"><svg className="i"><use href="#i-people" /></svg></span>
              <div><h3>Collaboration</h3><p>Build great things with great people.</p></div>
            </li>
          </ul>
        </aside>
      </section>
      <TitleBlock sheetTitle="Cover sheet" sheetNo="A-101" />
    </section>
  );
}
