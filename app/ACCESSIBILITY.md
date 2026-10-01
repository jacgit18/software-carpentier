# Accessibility and performance verification

Target: WCAG 2.2 AAA. Automated checks are regression evidence, not a declaration
that every AAA success criterion has been verified.

## Implemented

- One page heading, named main landmark, consistent navigation, current-page labels,
  meaningful project link names, and page-specific document titles.
- Keyboard skip link, visible 3px focus indicators, native links/selects/disclosures,
  Escape handling in the mobile menu, and focus management after navigation.
- Non-sticky navigation avoids hiding focused content. Interactive links and controls
  provide at least 44px targets. External links announce their new-tab behavior.
- Higher-contrast text, three color themes, a persistent keyboard-accessible header
  dark-mode toggle synchronized with Reading Preferences, larger text controls, browser font-size
  support, wrapped grids, narrow-screen reflow, and reduced-motion/forced-color rules.
- Plain-language overview and technical glossary for supplementary reading support.
- No forms, account authentication, timed tasks, autoplaying audio/video, dragging,
  or motion-dependent controls are present.
- System fonts eliminate external font requests. Deferred service-worker registration
  removes a blocking script. The logo has explicit dimensions and lazy loading.
- Missing resources return 404 in the production preview rather than the app shell.
  A robots.txt file and an agent-readable llms.txt portfolio summary are included.

## Recorded local results — October 1, 2026

The final production build passed all 20 browser tests. Lighthouse 13.5.0,
using the installed Chromium-based Brave 152 engine, recorded 100 in Performance,
Accessibility, Best Practices, SEO, and the experimental Agentic Browsing category
on all six routes in both standard mobile and desktop configurations (12 audits).
The follow-up verification also confirmed the displayed Agentic Browsing count is
3/3 on all 12 audits after adding llms.txt. Fraction failures now fail the audit command.
The final run completed successfully; the Skills layout-shift regression was fixed
by applying paragraph spacing immediately and restoring reading settings before paint.
See `reports/summary.json` and the individual HTML reports for the measurements.
These results apply to this local build and environment, not a guarantee for every run.

## Automated coverage

Run `npm test`: 20 browser tests covering all six routes, all three color themes at
320px and 1440px, expanded reading tools, axe A/AA/AAA rules, 200% root text scaling
with WCAG text-spacing overrides, target dimensions, navigation history, skip-link
focus, mobile Escape behavior, persisted preferences, and equal project-image dimensions on mobile and desktop.

Run `npm run build` followed by `npm run audit`: 12 Lighthouse navigation audits,
one per route in mobile and desktop mode. Agentic Browsing is checked as a displayed
pass count as well as a numeric score; the numeric score alone omits zero-weight
audits such as `llms.txt`. Full reports include version, browser,
settings, timing metrics, and category scores. `reports/summary.json` summarizes them.
The local measurements use HTTP loopback; they are not measurements of the public
GitHub Pages deployment.

## Manual review still required before claiming AAA conformance

- Screen-reader reading order, announcements, meaningful graphics/text alternatives,
  and route changes with NVDA/Firefox and VoiceOver/Safari.
- Full keyboard traversal and focus visibility with browser zoom at 200% and 400%,
  OS text scaling, forced colors, and browser foreground/background overrides.
- Human review of reading level, unusual words, abbreviations, pronunciation where
  meaning is ambiguous, and whether the supplementary overview is sufficient.
- Visual presentation including text in SVG illustrations, text-spacing adjustments,
  paragraph spacing, and line lengths in every reading mode and viewport.
- Confirm third-party destinations are clearly identified; their pages are outside
  this portfolio's implementation and have not been audited here.
- Retest the deployed site over HTTPS. GitHub project sites cannot control an
  origin-root robots.txt from their project subdirectory; root resource responses,
  caching, compression, and security headers are hosting responsibilities.

Do not describe a Lighthouse accessibility score of 100 as proof of WCAG AAA.
WCAG requires all applicable A, AA, and AAA criteria for complete pages/processes.

References:
- https://www.w3.org/TR/WCAG22/
- https://developer.chrome.com/docs/lighthouse/accessibility/scoring
- https://developer.chrome.com/docs/lighthouse/performance/performance-scoring

## Development-server comparison and artwork update

The reported mobile slowdown was reproduced at localhost:5173: Lighthouse scored
56 with 19.0s LCP and about 3.3 MiB transferred by the development server. Requests
included Vite hot reload and development React modules. Performance checks should
use `npm run serve` (production build and preview at localhost:4173).

All four Personal Projects illustrations now have matching 460×300 frames, explicit
image dimensions, and image-loading/layout tests. The two lower images lazy-load.
The cube and project artwork are external SVG assets; the production JavaScript
entry decreased from 188,970 to 170,902 bytes. The updated production build passed
20 tests and all 12 mobile/desktop Lighthouse audits at 100, with Agentic Browsing 3/3.
