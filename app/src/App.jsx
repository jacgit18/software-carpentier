import { useEffect, useRef, useState } from 'react';
import useReadingPreferences from './hooks/useReadingPreferences.js';
import ReadingTools from './components/ReadingTools.jsx';
import IconSprite from './components/IconSprite.jsx';
import NavBar from './components/NavBar.jsx';
import Home from './components/Home.jsx';
import ProfessionalProjects from './components/ProfessionalProjects.jsx';
import PersonalProjects from './components/PersonalProjects.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';

const TITLES = {
  home: 'Home',
  'professional-projects': 'Professional Work',
  'personal-projects': 'Personal Projects',
  about: 'About',
  skills: 'Skills',
  contact: 'Contact',
};

const PAGES = Object.keys(TITLES);

function initialPage() {
  const h = (window.location.hash || '').replace(/^#\/?/, '');
  return PAGES.includes(h) ? h : 'home';
}

export default function App() {
  const [page, setPage] = useState(initialPage);
  const reading = useReadingPreferences();
  const mainRef = useRef(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    document.title = (page === 'home' ? '' : `${TITLES[page]} · `) + 'Joshua Carpentier · Software Carpentier';

    window.scrollTo(0, 0);
    // Move focus to the new section so keyboard/screen-reader users get the same
    // "you navigated" cue sighted users get from the visual change. Skipped on the
    // very first render so landing on the site doesn't yank focus from the URL bar.
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      mainRef.current?.focus();
    }
  }, [page]);

  useEffect(() => {
    const sync = () => { if (window.location.hash !== '#main') setPage(initialPage()); };
    window.addEventListener('hashchange', sync);
    window.addEventListener('popstate', sync);
    return () => {
      window.removeEventListener('hashchange', sync);
      window.removeEventListener('popstate', sync);
    };
  }, []);

  const nav = (id) => {
    const next = PAGES.includes(id) ? id : 'home';
    if (next !== page) window.history.pushState(null, '', `#/${next}`);
    setPage(next);
  };

  return (
    <>
      <IconSprite />
      <a className="skip-link" href="#main" onClick={(event) => { event.preventDefault(); mainRef.current?.focus(); mainRef.current?.scrollIntoView(); }}>Skip to content</a>
      <NavBar page={page} onNav={nav} theme={reading.theme} onToggleDark={reading.toggleDark} />
      <main className="wrap" id="main" tabIndex={-1} ref={mainRef} aria-label={TITLES[page]}>
        {page === 'home' && <Home onNav={nav} />}
        {page === 'professional-projects' && <ProfessionalProjects />}
        {page === 'personal-projects' && <PersonalProjects />}
        {page === 'about' && <About />}
        {page === 'skills' && <Skills />}
        {page === 'contact' && <Contact />}
      </main>
      <ReadingTools theme={reading.theme} setTheme={reading.setTheme} size={reading.size} setSize={reading.setSize} />
    </>
  );
}
