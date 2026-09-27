// Static SVG symbol sprite (icons referenced elsewhere via <use href="#i-name"/>).
// Authored by us — not user input — so dangerouslySetInnerHTML is safe here and
// avoids hand-converting dozens of path elements to JSX for no benefit.
export default function IconSprite() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <defs dangerouslySetInnerHTML={{ __html: `
    <symbol id="i-cube" viewBox="0 0 32 32"><path d="M16 3 28 9.5v13L16 29 4 22.5v-13z"/><path d="M4 9.5 16 16l12-6.5M16 16v13"/></symbol>
    <symbol id="i-gear" viewBox="0 0 32 32"><circle cx="16" cy="16" r="4.5"/><path d="M16 3.5v4M16 24.5v4M3.5 16h4M24.5 16h4M7.2 7.2l2.8 2.8M22 22l2.8 2.8M24.8 7.2 22 10M10 22l-2.8 2.8"/><circle cx="16" cy="16" r="9"/></symbol>
    <symbol id="i-code" viewBox="0 0 32 32"><path d="m12 9-7 7 7 7M20 9l7 7-7 7M18 6l-4 20"/></symbol>
    <symbol id="i-cloud" viewBox="0 0 32 32"><path d="M9 24a6 6 0 0 1-.6-11.97A8 8 0 0 1 23.7 11 6.5 6.5 0 0 1 23 24z"/><path d="M16 24v-6M13.5 20.5 16 18l2.5 2.5"/></symbol>
    <symbol id="i-people" viewBox="0 0 32 32"><circle cx="16" cy="11" r="3.6"/><circle cx="7" cy="14" r="2.6"/><circle cx="25" cy="14" r="2.6"/><path d="M9.5 25c0-4 2.9-7 6.5-7s6.5 3 6.5 7M2.5 23c0-3 2-5 4.5-5M29.5 23c0-3-2-5-4.5-5"/></symbol>
    <symbol id="i-monitor" viewBox="0 0 32 32"><rect x="4" y="5" width="24" height="16" rx="1"/><path d="M12 27h8M16 21v6"/></symbol>
    <symbol id="i-server" viewBox="0 0 32 32"><rect x="5" y="5" width="22" height="7" rx="1"/><rect x="5" y="14" width="22" height="7" rx="1"/><rect x="5" y="23" width="22" height="5" rx="1"/><path d="M9 8.5h.01M9 17.5h.01M9 25.5h.01"/></symbol>
    <symbol id="i-db" viewBox="0 0 32 32"><ellipse cx="16" cy="8" rx="9" ry="3.5"/><path d="M7 8v16c0 2 4 3.5 9 3.5s9-1.5 9-3.5V8M7 16c0 2 4 3.5 9 3.5s9-1.5 9-3.5"/></symbol>
    <symbol id="i-flask" viewBox="0 0 32 32"><path d="M12 4h8M13.5 4v8L6.5 24a2.5 2.5 0 0 0 2.2 3.7h14.6a2.5 2.5 0 0 0 2.2-3.7L18.5 12V4"/><path d="M10 20h12"/></symbol>
    <symbol id="i-arrow" viewBox="0 0 16 16"><path d="M2 8h11M9 4l4 4-4 4"/></symbol>
    <symbol id="i-mail" viewBox="0 0 32 32"><rect x="4" y="7" width="24" height="18" rx="1"/><path d="m4.5 8 11.5 9L27.5 8"/></symbol>
    <symbol id="i-cal" viewBox="0 0 32 32"><rect x="4.5" y="6.5" width="23" height="21" rx="1"/><path d="M4.5 12.5h23M10 4v5M22 4v5M10 18h4M18 18h4M10 22.5h4"/></symbol>
    <symbol id="i-cross" viewBox="0 0 32 32"><circle cx="16" cy="16" r="9"/><path d="M16 3v8M16 21v8M3 16h8M21 16h8"/></symbol>
    <symbol id="i-wrench" viewBox="0 0 32 32"><path d="M20.5 5.5a6 6 0 0 0-5.6 8L5.5 22.9a2.6 2.6 0 0 0 3.6 3.6l9.4-9.4a6 6 0 0 0 8-5.6l-4 3.5-3.3-.8-.8-3.3z"/></symbol>
  ` }} />
    </svg>
  );
}
