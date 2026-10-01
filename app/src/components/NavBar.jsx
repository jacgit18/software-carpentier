import { useRef, useState } from 'react';

const TABS = [
  { id: 'home', label: 'Home' },
  { id: 'professional-projects', label: 'Professional' },
  { id: 'personal-projects', label: 'Personal' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export default function NavBar({ page, onNav, theme, onToggleDark }) {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);

  const go = (id) => {
    setOpen(false);
    onNav(id);
  };

  return (
    <header className="bar" onKeyDown={(event) => {
      if (event.key === 'Escape' && open) {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }}>
      <div className="bar-in">
        <div className="bar-top">
          <a
            href="#/home"
            className="brand"
            onClick={(event) => { if (!event.ctrlKey && !event.metaKey && !event.shiftKey && !event.altKey) { event.preventDefault(); go('home'); } }}
            aria-label="Joshua Carpentier, Software Carpentier"
          >
            <svg className="brand-mark" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
              <rect x="3" y="3" width="34" height="34" />
              <rect x="8" y="8" width="24" height="24" />
              <path d="M20 8v24M8 20h24M14 8v24M26 8v24M8 14h24M8 26h24" strokeWidth=".8" />
            </svg>
            <span className="brand-name">
              JOSHUA CARPENTIER
              <span className="brand-sub">SOFTWARE CARPENTIER</span>
            </span>
          </a>
          <button
            type="button"
            className="theme-toggle"
            aria-label="Dark mode"
            aria-pressed={theme === 'dark'}
            title={theme === 'dark' ? 'Turn off dark mode' : 'Turn on dark mode'}
            onClick={onToggleDark}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              {theme === 'dark' ? <>
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" />
              </> : <path d="M20 15.5A9 9 0 0 1 8.5 4a9 9 0 1 0 11.5 11.5Z" />}
            </svg>
          </button>
          <button
            type="button"
            className="nav-toggle"
            ref={toggleRef}
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
                <a
                  href={`#/${t.id}`}
                  className="navlink"
                  aria-current={page === t.id ? 'page' : undefined}
                  onClick={(event) => { if (!event.ctrlKey && !event.metaKey && !event.shiftKey && !event.altKey) { event.preventDefault(); go(t.id); } }}
                >
                  {t.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export { TABS };
