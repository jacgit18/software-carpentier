export default function PersonalProjects() {
  return (
    <section className="page" id="page-personal-projects" aria-labelledby="pers-h">
      <div className="panel">
        <div className="page-head">
          <svg className="mark i" aria-hidden="true"><use href="#i-cross" /></svg>
          <h1 id="pers-h">Personal Projects</h1>
        </div>
        <p className="sub">Side builds — for fun, for training, or to fix my own workflow.</p>
        <div className="pgrid">
          <article className="card featured">
            <div className="fig"><img src="./projects/iron-log.svg" width="460" height="300" fetchPriority="high" alt="Iron Log illustration: weekly workout board, progress chart, and muscle map" /></div>
            <div className="body">
              <h2>Iron Log</h2>
              <div className="tags">
                <span className="tag">React 19</span><span className="tag">Vite</span>
                <span className="tag">Zustand</span><span className="tag">SheetJS</span>
                <span className="tag">Vitest</span><span className="tag">Offline PWA</span>
              </div>
              <p>
                An installable workout tracker built with React, Vite, and Zustand. It pairs a weekly
                training board with set-by-set logging, progressive weight targets, and a muscle map.
                Data stays in the browser, with offline support, SheetJS workbook exports, and GitHub
                backup and restore.
              </p>
              <ul>
                <li>A/B program rotation, editable programs, and saved versions</li>
                <li>Progress charts, heavier-weight suggestions, and stall alerts</li>
                <li>Offline logging, Excel/JSON import and export, and GitHub backups</li>
              </ul>
              <div className="more-row">
                <a className="more" href="https://jacgit18.github.io/iron-log/" target="_blank" rel="noopener noreferrer">
                  View deployed app <svg aria-hidden="true"><use href="#i-arrow" /></svg>
                  <span className="sr-only"> (opens in new tab)</span>
                </a>
                <a className="more" href="https://github.com/jacgit18/iron-log" target="_blank" rel="noopener noreferrer">
                  View Iron Log on GitHub <svg aria-hidden="true"><use href="#i-arrow" /></svg>
                  <span className="sr-only"> (opens in new tab)</span>
                </a>
              </div>
            </div>
          </article>

          <article className="card featured">
            <div className="fig"><img src="./projects/devhivemind.svg" width="460" height="300" decoding="async" alt="DevHiveMind illustration: connected knowledge graph and topic index" /></div>
            <div className="body">
              <h2>DevHiveMind</h2>
              <div className="tags">
                <span className="tag">Obsidian</span><span className="tag">Markdown</span>
                <span className="tag">Mind maps</span><span className="tag">Peer review</span>
                <span className="tag">RAG</span>
              </div>
              <p>
                A personal software-development encyclopedia built in Obsidian — ten numbered topic
                areas from fundamentals to the twelve-factor app, linked into a knowledge graph with
                mind maps and a peer-review status on every note. Also serves as a RAG source I use to
                develop AI skills, grounding an assistant's answers in my own notes instead of relying
                on general knowledge alone.
              </p>
              <ul>
                <li>Ten topic areas, from fundamentals to security and testing</li>
                <li>Backlinked notes with a four-stage review status</li>
                <li>Mind maps and a dashboard for navigating the vault</li>
              </ul>
              <a className="more" href="https://github.com/jacgit18/DevHiveMind" target="_blank" rel="noopener noreferrer">
                View DevHiveMind on GitHub <svg aria-hidden="true"><use href="#i-arrow" /></svg>
                <span className="sr-only"> (opens in new tab)</span>
              </a>
            </div>
          </article>

          <article className="card featured">
            <div className="fig"><img src="./projects/under-the-wing.svg" width="460" height="300" loading="lazy" decoding="async" alt="UnderTheWing illustration: mentor matching and a guided learning pathway" /></div>
            <div className="body">
                <h2>UnderTheWing</h2>
                <div className="tags">
                  <span className="tag">Node.js</span><span className="tag">Express</span>
                  <span className="tag">Sequelize</span><span className="tag">PostgreSQL</span>
                </div>
            <p>
              A team project (3 contributors) building a virtual mentorship platform that matches
              college students and high school seniors with working professionals through guided
              pathways. I built the backend — the Express API, Sequelize models, and PostgreSQL schema
              behind the mentor-mentee matching and task tracking.
            </p>
            <div className="more-row">
              <a className="more" href="https://professional-job-seekers.github.io/UnderTheWing/#/" target="_blank" rel="noopener noreferrer">
                View deployed app <svg aria-hidden="true"><use href="#i-arrow" /></svg>
                <span className="sr-only"> (opens in new tab)</span>
              </a>
              <a className="more" href="https://github.com/Professional-Job-Seekers/UnderTheWing" target="_blank" rel="noopener noreferrer">
                View UnderTheWing on GitHub <svg aria-hidden="true"><use href="#i-arrow" /></svg>
                <span className="sr-only"> (opens in new tab)</span>
              </a>
            </div>
            </div>
          </article>

          <article className="card featured">
            <div className="fig"><img src="./projects/park-alert.svg" width="460" height="300" loading="lazy" decoding="async" alt="ParkAlert illustration: nearby parking map and a phone for sharing open spots" /></div>
            <div className="body">
                <h2>ParkAlert</h2>
                <div className="tags">
                  <span className="tag">Flutter</span><span className="tag">Dart</span>
                  <span className="tag">System Design</span>
                </div>
            <p>
              A school project (16-week cycle): a Flutter mobile app that lets users alert each other
              to open parking spots nearby. Design-heavy — use case diagrams, ERDs, component and
              deployment diagrams — presented weekly alongside the prototype build.
            </p>
            <a className="more" href="https://github.com/jacgit18/ParkAlert" target="_blank" rel="noopener noreferrer">
              View ParkAlert on GitHub <svg aria-hidden="true"><use href="#i-arrow" /></svg>
              <span className="sr-only"> (opens in new tab)</span>
            </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
