import { useEffect, useRef, useState } from 'react';
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
  const mainRef = useRef(null);
  const isFirstRender = useRef(true);

  // Update the document title and the address-bar hash (for shareable/refreshable
  // deep links) whenever the active tab changes. history.replaceState — not a real
  // navigation — so this never causes the browser's own back/forward handling to fire.
  useEffect(() => {
    document.title = (page === 'home' ? '' : `${TITLES[page]} · `) + 'Joshua Carpentier · Software Carpentier';
    window.history.replaceState(null, '', `#/${page}`);
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

  const nav = (id) => setPage(PAGES.includes(id) ? id : 'home');

  return (
    <>
      <IconSprite />
      <NavBar page={page} onNav={nav} />
      <main className="wrap" id="main" tabIndex={-1} ref={mainRef}>
        {page === 'home' && <Home onNav={nav} />}
        {page === 'professional-projects' && <ProfessionalProjects />}
        {page === 'personal-projects' && <PersonalProjects onNav={nav} />}
        {page === 'about' && <About />}
        {page === 'skills' && <Skills />}
        {page === 'contact' && <Contact />}
      </main>
    </>
  );
}
