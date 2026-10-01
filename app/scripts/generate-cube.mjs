// Keep the decorative cube out of the client JavaScript and DOM construction path.
import { writeFile } from 'node:fs/promises';
import { buildCube } from '../src/utils/cube.js';
const escape = value => String(value).replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
const shape = ({ tag, props, text = '' }) => `<${tag} ${Object.entries(props).map(([key, value]) => `${key.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`)}="${escape(value)}"`).join(' ')}>${escape(text)}</${tag}>`;
const { pieces, dims, callouts } = buildCube();
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="940" height="780" viewBox="-20 0 940 780">
<defs><pattern id="grain" width="26" height="14" patternUnits="userSpaceOnUse" patternTransform="rotate(-8)"><path d="M0 3q6.5-3 13 0t13 0M0 8q6.5 3 13 0t13 0M0 12.5q6.5-2 13 0t13 0" fill="none" stroke="#a9d3ff" stroke-width=".7" opacity=".55"/></pattern><marker id="ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M1 1 9 5 1 9" fill="none" stroke="#a9d3ff" stroke-width="1.3"/></marker></defs>
<g stroke-linejoin="round">${pieces.map(shape).join('')}</g><g fill="none" stroke="#6ea6ee" stroke-width=".8">${dims.map(shape).join('')}</g><g>${callouts.map(shape).join('')}</g></svg>`;
await writeFile(new URL('../public/cube.svg', import.meta.url), svg);
