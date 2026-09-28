# Software Carpentier — React port

This is a React (Vite) rebuild of the single-file `portfolio.html` site. Same
look, same content, same six tabs — restructured as components instead of one
big HTML file with inline `<script>` tags.

## Running it

```bash
npm install
npm run dev       # local dev server with hot reload
npm run build     # production build -> dist/
npm run preview   # serve the production build locally
```

Uses Vite 8 and `@vitejs/plugin-react` 6 (bumped from 5 / 4 to clear a
moderate esbuild/vite dev-server advisory — GHSA-67mh-4wv8-2f99 — via
`npm audit fix --force`; plugin-react needed the matching bump since 4.x only
supports Vite up to v7). `npm run build` and `npm run dev` both run clean with
0 vulnerabilities and no warnings on these versions.

### If `npm run dev` fails with ENOSPC

```
Error: ENOSPC: System limit for number of file watchers reached
```

This is a machine-level limit on inotify watchers, not a project bug — Vite's
dev server watches every file for hot reload and Linux's default watch limit
is often too low. Fix once per machine:

```bash
sudo bash -c 'cat > /etc/sysctl.d/99-vite-watchers.conf <<EOF
fs.inotify.max_user_watches=524288
fs.inotify.max_user_instances=512
EOF'
sudo sysctl --system
```

## Structure

```
src/
  main.jsx                     entry point
  App.jsx                      page state (which tab is active) + <title> updates
  index.css                    all styles, ported as-is from the original <style> block
  components/
    NavBar.jsx                 top bar + the six tab buttons (collapses to a
                                 hamburger menu at <=560px)
    Cube.jsx                    renders the isometric cube from utils/cube.js
    Home.jsx / ProfessionalProjects.jsx / PersonalProjects.jsx /
      About.jsx / Skills.jsx / Contact.jsx     one component per tab
    ProjectThumbs.jsx           small per-project icon glyphs
    FeaturedFigures.jsx         the Iron Log / DevHiveMind mockup illustrations
    IconSprite.jsx              the shared <symbol> icon sprite
  utils/
    cube.js                     pure geometry functions for the cube (no DOM code)
public/
  icon.svg / icon-*.png / favicon.png / apple-touch-icon.png   PWA + favicon icons
  og-image.svg / og-image.png   social-preview image (1200x630)
  tracflo-logo.svg              third-party logo used on the TracFlo card
```

## Notes on the port

- **Tabs are React state, not routes.** `App.jsx` holds `page` in `useState` and
  passes an `onNav` callback down; clicking a nav button just calls `setPage`.
  The address bar's `#/tab-name` hash is kept in sync via `history.replaceState`
  purely for shareable links and refresh — it doesn't drive navigation itself,
  the way the original hash-router script did.
- **Every internal control is a `<button>`, not an `<a href="#...">`.** That
  was a deliberate fix in the original HTML version (some sandboxed viewers,
  including Claude's own artifact preview, treat clicking a hash-link `<a>` as
  leaving the page and open a new tab/window instead of just navigating in
  place). Buttons don't have that problem, so the same approach carried over
  here. External links (email, GitHub, LinkedIn, Calendly, "View on GitHub")
  are still plain `<a target="_blank">`, which is correct for those.
- **The cube is derived data, not DOM manipulation.** The original page built
  the cube by calling `document.createElementNS` in a loop. `utils/cube.js` is
  the same math, but as pure functions that return plain `{tag, props}`
  descriptors; `Cube.jsx` just `.map()`s them into JSX. Pass a different
  `turns` prop (`[bottom, middle, top]`, in degrees) to change which layer is
  turned.
- **Two SVG figures use `dangerouslySetInnerHTML`.** The Iron Log and
  DevHiveMind card illustrations lean on a lot of hyphenated SVG attributes
  (`font-family`, `stroke-width`, etc.) that JSX requires as camelCase. Rather
  than hand-convert ~100 attributes with real risk of a silent typo, those two
  components render their (static, self-authored) markup directly. Everything
  else is written as ordinary JSX.

## Deploying

`npm run build` outputs a static `dist/` folder — works on GitHub Pages,
Netlify, Vercel, or any static host. `base` is set to `'./'` (relative paths),
which works from any subpath without edits.

In this repo specifically: deployment is handled by
`.github/workflows/deploy.yml`, which builds `app/` and publishes `app/dist`
straight to GitHub Pages (Pages is set to the "GitHub Actions" build type, not
a branch/folder) on every push to `main`. Nothing under `dist/` is committed —
`dist/` is gitignored, and CI rebuilds from source every time. To deploy, just
push to `main`; no manual build-and-copy step.

## PWA

The site is installable (`vite-plugin-pwa`, configured in `vite.config.js`):
a web app manifest plus an auto-updating service worker that precaches the
built assets for offline use. If you change the manifest or icons, rerun
`npm run build` locally to confirm `dist/manifest.webmanifest` and `dist/sw.js`
still generate cleanly before pushing — the CI build doesn't fail loudly on a
malformed manifest.
