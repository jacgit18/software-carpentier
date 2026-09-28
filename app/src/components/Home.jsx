import Cube from './Cube.jsx';

export default function Home({ onNav }) {
  return (
    <section className="page home" id="page-home" aria-label="Home">
      <section className="hero">
        <div className="hero-copy">
          <div className="kicker">PLAN &nbsp;/&nbsp; BUILD &nbsp;/&nbsp; IMPROVE</div>
          <h2>Software Carpentier</h2>
          <p className="tagline">Turning ideas into scalable systems</p>
          <p className="intro">
            I’m Joshua — six years in tech, the last three building fintech systems at Capital One
            and TracFlo. I like the parts other engineers skip: the tests, the migrations, the docs
            that keep a rollout from breaking.
          </p>
          <div className="btns">
            <button type="button" className="btn" onClick={() => onNav('professional-projects')}>
              View projects <svg aria-hidden="true"><use href="#i-arrow" /></svg>
            </button>
            <button type="button" className="btn" onClick={() => onNav('contact')}>
              Get in touch <svg aria-hidden="true"><use href="#i-arrow" /></svg>
            </button>
          </div>
          <div className="hero-foot">
            <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
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
              <span className="iconbox"><svg className="i" aria-hidden="true"><use href="#i-flask" /></svg></span>
              <div>
                <h3>Testing &amp; Quality</h3>
                <p>Raised test coverage 75% on Capital One’s credit card servicing screens and wrote the component tests behind its collections platform.</p>
              </div>
            </li>
            <li>
              <span className="iconbox"><svg className="i" aria-hidden="true"><use href="#i-server" /></svg></span>
              <div>
                <h3>Full-Stack Systems</h3>
                <p>Built the workflows behind TracFlo’s billable change orders and Capital One’s payment-plan enrollment.</p>
              </div>
            </li>
            <li>
              <span className="iconbox"><svg className="i" aria-hidden="true"><use href="#i-people" /></svg></span>
              <div>
                <h3>Engineering Enablement</h3>
                <p>Wrote the setup guides that helped 200+ engineers onboard new tooling at TD Bank.</p>
              </div>
            </li>
          </ul>
        </aside>
      </section>
    </section>
  );
}
