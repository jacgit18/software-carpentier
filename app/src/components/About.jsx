
export default function About() {
  return (
    <section className="page" id="page-about" aria-labelledby="about-h">
      <div className="panel">
        <div className="page-head">
          <svg className="mark i" aria-hidden="true"><use href="#i-cross" /></svg>
          <h1 id="about-h">About Me</h1>
        </div>
        <div className="roles">Builder<i>/</i>Problem Solver<i>/</i>Lifelong Learner</div>
        <div className="about-grid">
          <div>
            <p>
              I’m Joshua, a software carpentier. Six years in tech: IT support first, then QA,
              business analysis, and full-stack engineering, the last three in fintech. Reading the
              plans, building, and inspecting the work are three different jobs, and I’ve done all
              three.
            </p>
            <p>
              At Capital One I built workflows for the collections team, including one that lets a
              customer who has fallen behind on their credit card set up their own payment plan, and I
              raised test coverage by 75% on the servicing screens agents use for citizenship updates
              and secure document requests. At TD Bank I wrote the setup guides for a program that
              upskilled 200+ engineers. At TracFlo, a construction-fintech startup, I helped bring 50+
              contractor companies onto a new platform by moving their data off a legacy PHP system.
            </p>
            <p>
              I’ve mentored aspiring engineers through CUNY Tech Prep. Lately I’ve been building with
              AI tools, this site included.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
