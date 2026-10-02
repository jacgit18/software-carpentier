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
  index.css                    blueprint styles, reading themes, responsive and accessibility rules
  components/
    NavBar.jsx                 top bar + the six navigation links (collapses to a
                                 hamburger menu at <=560px)
    Cube.jsx                    renders the isometric cube from utils/cube.js
    Home.jsx / ProfessionalProjects.jsx / PersonalProjects.jsx /
      About.jsx / Skills.jsx / Contact.jsx     one component per tab
    ProjectThumbs.jsx           small per-project icon glyphs
    FeaturedFigures.jsx         original illustration source (not shipped in the client bundle)
    IconSprite.jsx              the shared <symbol> icon sprite
  utils/
    cube.js                     pure geometry functions for the cube (no DOM code)
public/
  icon.svg / icon-*.png / favicon.png / apple-touch-icon.png   PWA + favicon icons
  og-image.svg / og-image.png   social-preview image (1200x630)
  tracflo-logo.svg              third-party logo used on the TracFlo card
```

## Navigation and accessibility

The six hash routes use real links, browser history, page-specific headings and titles,
and focus management. The mobile menu closes with Escape. A skip link moves directly
to the current page without adding a history entry.

A header moon/sun button switches dark mode on and off, restoring the previous
blueprint or light theme. It shares state with Reading Preferences and persists
across reloads. Reading preferences offer all three themes plus larger text, with
local persistence that safely degrades when storage is blocked. The footer includes
a plain-language overview and technical glossary. Typography uses system fonts to
avoid remote font requests and supports browser text-size preferences.

## Measuring performance

`npm run dev` serves the development version at port 5173, including React's
 development checks and Vite's hot-reload client. Its Lighthouse results do not
represent the production bundle.

For a fresh production build and preview, run:

```bash
npm run serve
```

Then audit `http://localhost:4173/#/personal-projects` (or any other route).
`npm run audit` runs the complete mobile/desktop matrix against built assets.

Project illustrations live in `public/projects/`, share a 460×300 frame, and load
as SVG images rather than inline JavaScript markup. The two lower cards lazy-load
 their images. The decorative cube is also a static image; regenerate it after
changing `src/utils/cube.js` using `npm run generate:cube`.

## Quality checks

```bash
npm ci
npx playwright install --with-deps chromium
npm test
npm run test:audit
npm run audit
```

`npm test` builds production assets and checks all six routes, AAA automated contrast
rules, narrow-screen reflow, enlarged text and spacing, keyboard behavior, history,
reading settings, and all three themes at mobile and desktop widths.
`npm run audit` serves the existing production build and measures all six routes
with Lighthouse's standard mobile and desktop configurations. Run `npm run build`
first if you have changed source since running tests. Do not rebuild while auditing.
An installed Chromium executable can be supplied with `CHROME_PATH` for either command.

`npm run test:audit` checks preview startup, shutdown, and missing-build errors.
The audit uses Vite’s startup API rather than parsing colored console output.

Reports are saved in `reports/` (HTML, JSON, and `summary.json`). The audit command
fails if any numeric category rounds below 100 or any fraction category has an
unpassed applicable audit. Agentic Browsing must show 3/3: the accessibility tree,
layout stability, and the public `llms.txt` summary. Performance scores can vary with the machine
and hosting conditions; inspect the reports when a run fails. The quality workflow
runs these checks and uploads Lighthouse reports on pushes and pull requests.

See [ACCESSIBILITY.md](ACCESSIBILITY.md) for the scope and remaining manual checks.

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

## Project content sources

Iron Log's technology tags and feature summary were checked against its current
[package.json](https://github.com/jacgit18/iron-log/blob/main/package.json) and
[README](https://github.com/jacgit18/iron-log/blob/main/README.md) on October 1, 2026:
React 19, Vite, Zustand, SheetJS, Vitest, and an offline-capable progressive web app.
