export default function ReadingTools({ theme, setTheme, size, setSize }) {
  return (
    <footer className="reading-tools wrap" aria-label="Reading tools and help">
      <details>
        <summary>Reading preferences</summary>
        <div className="reading-options">
          <label>Color theme
            <select value={theme} onChange={event => setTheme(event.target.value)}>
              <option value="blueprint">Blueprint</option>
              <option value="light">Dark text on white</option>
              <option value="dark">White text on black</option>
            </select>
          </label>
          <label>Text size
            <select value={size} onChange={event => setSize(event.target.value)}>
              <option value="standard">Standard</option>
              <option value="large">Large (150%)</option>
            </select>
          </label>
        </div>
        <p>You can also change text size and colors in your browser settings, or zoom in. Your choices here are saved on this device.</p>
      </details>
      <details>
        <summary>Plain-language overview and technical terms</summary>
        <p>Joshua builds software, checks that it works, and helps teams learn new tools. He has worked on banking and construction software. His personal projects help people track workouts, organize notes, find mentors, and share parking spots. Use Contact to email him or book a call.</p>
        <dl>
          <dt>Software Carpentier</dt><dd>A play on Joshua’s surname and “carpenter”: someone who plans, builds, and improves software.</dd>
          <dt>Frontend / backend / full-stack</dt><dd>The part of an app you see / the systems behind it / work on both parts.</dd>
          <dt>Fintech</dt><dd>Software for money and financial services.</dd>
          <dt>IT / QA</dt><dd>Information technology / quality assurance: supporting computer systems and checking that software works.</dd>
          <dt>API / UI</dt><dd>Application programming interface: a way for programs to exchange data. User interface: the screens and controls people use.</dd>
          <dt>AWS / cloud / DevOps</dt><dd>Amazon Web Services: rented computing services. The cloud means computers reached over the internet. DevOps combines building software with running it reliably.</dd>
          <dt>HTML / CSS / JS / SQL</dt><dd>HyperText Markup Language describes page structure; Cascading Style Sheets control its appearance; JavaScript adds behavior; Structured Query Language works with databases.</dd>
          <dt>PERN</dt><dd>PostgreSQL, Express, React, and Node.js: four tools used together to build an app.</dd>
          <dt>AI / RAG</dt><dd>Artificial intelligence / retrieval-augmented generation: giving an AI assistant relevant source material to help it answer.</dd>
          <dt>ERD / system design</dt><dd>Entity-relationship diagram: a map of how stored information connects. System design plans how parts of an app work together.</dd>
          <dt>Migration / rollout / cutover</dt><dd>Moving data or software to a new system / releasing a change / switching from the old system to the new one.</dd>
          <dt>Test coverage / component tests</dt><dd>How much code automated checks exercise / checks of a particular part of an app. Coverage does not guarantee that software is free of mistakes.</dd>
          <dt>Knowledge graph / backlinked notes / vault</dt><dd>Connected notes shown as a map / notes linked to each other / a collection of notes.</dd>
          <dt>CUNY / TD / BI</dt><dd>City University of New York / Toronto-Dominion / business intelligence: using data to understand an organization’s work.</dd>
        </dl>
      </details>
    </footer>
  );
}
