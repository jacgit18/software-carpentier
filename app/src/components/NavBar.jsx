import { useState } from 'react';

const TABS = [
  { id: 'home', label: 'Home' },
  { id: 'professional-projects', label: 'Professional' },
  { id: 'personal-projects', label: 'Personal' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

// Every internal nav control is a <button>, not an <a href="#...">. Anchor-based
// hash links get treated as page navigation by some sandboxed viewers (they open
// a new tab/window instead of just switching tabs); buttons carry no such
// baggage and update page state directly via onNav.
export default function NavBar({ page, onNav }) {
  const [open, setOpen] = useState(false);

  const go = (id) => {
    setOpen(false);
    onNav(id);
  };

  return (
    <header className="bar">
      <div className="bar-in">
        <div className="bar-top">
          <button
            type="button"
            className="brand"
            onClick={() => go('home')}
            aria-label="Joshua Carpentier, Software Carpentier"
          >
            <svg className="brand-mark" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
              <rect x="3" y="3" width="34" height="34" />
              <rect x="8" y="8" width="24" height="24" />
              <path d="M20 8v24M8 20h24M14 8v24M26 8v24M8 14h24M8 26h24" strokeWidth=".8" />
            </svg>
            <h1 className="brand-name">
              JOSHUA CARPENTIER
              <span className="brand-sub">SOFTWARE CARPENTIER</span>
            </h1>
          </button>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="main-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <svg aria-hidden="true"><use href={open ? '#i-close' : '#i-menu'} /></svg>
          </button>
        </div>
        <nav aria-label="Main" id="main-nav" className={open ? 'nav-open' : ''}>
          <ul>
            {TABS.map((t) => (
              <li key={t.id}>
                <button
                  type="button"
                  className="navlink"
                  aria-current={page === t.id ? 'page' : undefined}
                  onClick={() => go(t.id)}
                >
                  {t.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export { TABS };
