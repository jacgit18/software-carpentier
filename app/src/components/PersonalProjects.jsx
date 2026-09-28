import { ParkPinThumb, WingThumb } from './ProjectThumbs.jsx';
import { IronLogFigure, DevHiveMindFigure } from './FeaturedFigures.jsx';

export default function PersonalProjects() {
  return (
    <section className="page" id="page-personal-projects" aria-labelledby="pers-h">
      <div className="panel">
        <div className="page-head">
          <svg className="mark i" aria-hidden="true"><use href="#i-cross" /></svg>
          <h2 id="pers-h">Personal Projects</h2>
        </div>
        <p className="sub">Side builds — for fun, for training, or to fix my own workflow.</p>
        <div className="pgrid">
          <article className="card featured">
            <div className="fig"><IronLogFigure /></div>
            <div className="body">
              <h3>Iron Log</h3>
              <div className="tags">
                <span className="tag">HTML/CSS/JS</span><span className="tag">No build step</span>
                <span className="tag">Chart rendering</span><span className="tag">GitHub Pages</span>
              </div>
              <p>
                A weekly training board that runs two workout programs on a rotation, sets targets per
                training phase, and shades a muscle map by weekly sets — plain JavaScript, no framework,
                no build step.
              </p>
              <ul>
                <li>Weekly board, A/B program rotation, phase-based targets</li>
                <li>Hold and rest timers, weight-over-time charts</li>
                <li>Excel export; Claude version backs up to GitHub</li>
              </ul>
              <a className="more" href="https://github.com/jacgit18/iron-log" target="_blank" rel="noopener noreferrer">
                View on GitHub <svg aria-hidden="true"><use href="#i-arrow" /></svg>
                <span className="sr-only"> (opens in new tab)</span>
              </a>
            </div>
          </article>

          <article className="card featured">
            <div className="fig"><DevHiveMindFigure /></div>
            <div className="body">
              <h3>DevHiveMind</h3>
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
                View on GitHub <svg aria-hidden="true"><use href="#i-arrow" /></svg>
                <span className="sr-only"> (opens in new tab)</span>
              </a>
            </div>
          </article>

          <article className="card">
            <div className="card-top">
              <WingThumb />
              <div>
                <h3>UnderTheWing</h3>
                <div className="tags">
                  <span className="tag">Node.js</span><span className="tag">Express</span>
                  <span className="tag">Sequelize</span><span className="tag">PostgreSQL</span>
                </div>
              </div>
            </div>
            <p>
              A team project (3 contributors) building a virtual mentorship platform that matches
              college students and high school seniors with working professionals through guided
              pathways. I built the backend — the Express API, Sequelize models, and PostgreSQL schema
              behind the mentor-mentee matching and task tracking.
            </p>
            <a className="more" href="https://github.com/Professional-Job-Seekers/UnderTheWing" target="_blank" rel="noopener noreferrer">
              View on GitHub <svg aria-hidden="true"><use href="#i-arrow" /></svg>
              <span className="sr-only"> (opens in new tab)</span>
            </a>
          </article>

          <article className="card">
            <div className="card-top">
              <ParkPinThumb />
              <div>
                <h3>ParkAlert</h3>
                <div className="tags">
                  <span className="tag">Flutter</span><span className="tag">Dart</span>
                  <span className="tag">System Design</span>
                </div>
              </div>
            </div>
            <p>
              A school project (16-week cycle): a Flutter mobile app that lets users alert each other
              to open parking spots nearby. Design-heavy — use case diagrams, ERDs, component and
              deployment diagrams — presented weekly alongside the prototype build.
            </p>
            <a className="more" href="https://github.com/jacgit18/ParkAlert" target="_blank" rel="noopener noreferrer">
              View on GitHub <svg aria-hidden="true"><use href="#i-arrow" /></svg>
              <span className="sr-only"> (opens in new tab)</span>
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
