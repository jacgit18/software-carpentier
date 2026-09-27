// Isometric Rubik's cube geometry, drawn like a sheet from a set of plans.
// This is a direct port of the original imperative <script> that built the cube's
// SVG by hand — the math is unchanged, but instead of calling document.createElementNS
// and appending nodes, each function returns plain shape descriptors ({tag, props})
// that a React component maps straight to JSX elements. Keeping the geometry as pure,
// side-effect-free functions is what makes this idiomatic React: the cube is derived
// data, not something built by mutating the page.

const S = 100, OX = 410, OY = 351, K = 0.58, ZS = 0.9, C = 1.5;

// TURNS: how far each horizontal layer is turned, in degrees (bottom, middle, top).
// 0 leaves a layer as is. Exported so <Cube turns={...}/> can override the default.
export const DEFAULT_TURNS = [0, 0, 24];

function proj([x, y, z]) {
  return [OX + (x - y) * 0.866 * S, OY + ((x + y) * K - z * ZS) * S];
}
function pts(arr) {
  return arr.map((p) => `${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');
}
function turnPoint(x, y, z, k, TR) {
  const t = TR[k], dx = x - C, dy = y - C;
  return [C + dx * t.c - dy * t.s, C + dx * t.s + dy * t.c, z];
}
function at(x, y, z, k, TR) {
  return proj(turnPoint(x, y, z, k, TR));
}
function shrink(q, f) {
  let cx = 0, cy = 0;
  q.forEach((p) => { cx += p[0]; cy += p[1]; });
  cx /= 4; cy /= 4;
  return q.map((p) => [cx + (p[0] - cx) * f, cy + (p[1] - cy) * f]);
}

// Mixed blueprint tones: each face leans on its own base blue, with a share of
// tiles swapped for other blues, so the top and two visible sides don't read flat.
const PALETTE = ['#eaf4ff', '#a9d3ff', '#5aa2f0', '#2f6fc4', '#4fd0e8', '#8fb0ff'];
const BASE = { top: 1, left: 2, right: 3 };
function pickColor(face, i, j, k) {
  const h = (i * 7 + j * 13 + k * 17 + (face === 'top' ? 3 : face === 'left' ? 5 : 11)) % 10;
  return h < 5 ? PALETTE[(h + i + j + k) % 6] : PALETTE[BASE[face]];
}

/**
 * Builds every shape needed to draw the cube: the 27 cubies (each up to 3 faces),
 * the dimension line along the bottom edge, the rotation arc/note for the turned
 * layer, and the three layer callouts (Plan / Build / Improve).
 * Returns { pieces, dims, callouts } — arrays of {tag, props} ready for JSX.
 */
export function buildCube(turnsDeg = DEFAULT_TURNS) {
  const TR = turnsDeg.map((a) => {
    const r = (a * Math.PI) / 180;
    return { c: Math.cos(r), s: Math.sin(r) };
  });

  const g = 0.03;
  const cubies = [];
  for (let k = 0; k < 3; k++) {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const m = turnPoint(i + 0.5, j + 0.5, k + 0.5, k, TR);
        cubies.push({ i, j, k, key: m[0] + m[1] });
      }
    }
  }
  cubies.sort((a, b) => a.k - b.k || a.key - b.key);

  const edge = '#cfe6ff';
  const body = { top: '#0b3373', left: '#092b5e', right: '#07234f' };
  const pieces = [];
  let uid = 0;

  cubies.forEach((c) => {
    const x0 = c.i + g, x1 = c.i + 1 - g, y0 = c.j + g, y1 = c.j + 1 - g, z0 = c.k + g, z1 = c.k + 1 - g;
    const V = (x, y, z) => at(x, y, z, c.k, TR);
    const faces = {
      top: [V(x0, y0, z1), V(x1, y0, z1), V(x1, y1, z1), V(x0, y1, z1)],
      left: [V(x0, y1, z0), V(x1, y1, z0), V(x1, y1, z1), V(x0, y1, z1)],
      right: [V(x1, y0, z0), V(x1, y1, z0), V(x1, y1, z1), V(x1, y0, z1)],
    };
    ['top', 'left', 'right'].forEach((f) => {
      pieces.push({
        tag: 'polygon',
        key: `p${uid++}`,
        props: { points: pts(faces[f]), fill: body[f], stroke: edge, strokeWidth: 0.7, strokeLinejoin: 'round' },
      });
    });
    const show = { top: c.k === 2, left: c.j === 2, right: c.i === 2 };
    ['top', 'left', 'right'].forEach((f) => {
      if (!show[f]) return;
      pieces.push({
        tag: 'polygon',
        key: `p${uid++}`,
        props: {
          points: pts(shrink(faces[f], 0.88)),
          fill: pickColor(f, c.i, c.j, c.k),
          stroke: '#06285a',
          strokeWidth: 0.5,
          strokeLinejoin: 'round',
          opacity: f === 'top' ? 0.95 : f === 'left' ? 0.88 : 0.8,
        },
      });
    });
  });

  const mono = 'IBM Plex Mono, ui-monospace, monospace';
  const hand = 'Caveat, cursive';
  const dims = [];
  let did = 0;

  // Dimension line along the bottom edge of the left face.
  const off = 0.62;
  const p0 = proj([0, 3, 0]), p1 = proj([3, 3, 0]);
  const d0 = proj([0, 3 + off, 0]), d1 = proj([3, 3 + off, 0]);
  dims.push({ tag: 'line', key: `d${did++}`, props: { x1: p0[0] - 4, y1: p0[1] + 3, x2: d0[0] - 3, y2: d0[1] + 3 } });
  dims.push({ tag: 'line', key: `d${did++}`, props: { x1: p1[0] - 4, y1: p1[1] + 3, x2: d1[0] - 3, y2: d1[1] + 3 } });
  dims.push({ tag: 'line', key: `d${did++}`, props: { x1: d0[0], y1: d0[1], x2: d1[0], y2: d1[1] } });
  [[d0, 1], [d1, -1]].forEach(([e]) => {
    dims.push({ tag: 'line', key: `d${did++}`, props: { x1: e[0] - 6, y1: e[1] + 6, x2: e[0] + 6, y2: e[1] - 6 } });
  });
  const ang = (Math.atan2(d1[1] - d0[1], d1[0] - d0[0]) * 180) / Math.PI;
  const mx = (d0[0] + d1[0]) / 2, my = (d0[1] + d1[1]) / 2;
  dims.push({
    tag: 'text', key: `d${did++}`, text: '3 × 3 × 3',
    props: {
      x: mx, y: my - 7, textAnchor: 'middle', fontFamily: mono, fontSize: 11, fill: '#8db3e6',
      stroke: 'none', transform: `rotate(${ang.toFixed(1)} ${mx.toFixed(1)} ${my.toFixed(1)})`,
    },
  });

  // Rotation of the turned (top) layer: dashed reference ray, solid turned ray, arc, angle label.
  const R = 2.55, a0 = 200, a1 = a0 + turnsDeg[2], zt = 3;
  const polar = (a, r) => {
    const t = (a * Math.PI) / 180;
    return proj([C + r * Math.cos(t), C + r * Math.sin(t), zt]);
  };
  const c0 = proj([C, C, zt]);
  const rr0 = polar(a0, R + 0.25), rr1 = polar(a1, R + 0.25);
  dims.push({ tag: 'line', key: `d${did++}`, props: { x1: c0[0], y1: c0[1], x2: rr0[0], y2: rr0[1], strokeDasharray: '5 4' } });
  dims.push({ tag: 'line', key: `d${did++}`, props: { x1: c0[0], y1: c0[1], x2: rr1[0], y2: rr1[1] } });
  const n = 14;
  let d = [];
  for (let t = 0; t <= n; t++) {
    const p = polar(a0 + ((a1 - a0) * t) / n, R);
    d.push(`${t ? 'L' : 'M'}${p[0].toFixed(1)} ${p[1].toFixed(1)}`);
  }
  dims.push({ tag: 'path', key: `d${did++}`, props: { d: d.join(' '), markerEnd: 'url(#ah)', strokeWidth: 1 } });
  const lp = polar((a0 + a1) / 2, R + 0.6);
  dims.push({
    tag: 'text', key: `d${did++}`, text: `${turnsDeg[2]}°`,
    props: { x: lp[0] - 8, y: lp[1] - 4, fontFamily: mono, fontSize: 10.5, fill: '#8db3e6', stroke: 'none', textAnchor: 'end' },
  });

  // Drafting note pointing at the turned layer, and the three layer callouts.
  const callouts = [];
  let cid = 0;
  const nx = -12, ny = 176;
  callouts.push({ tag: 'text', key: `c${cid++}`, text: 'LAYER 3', props: { x: nx, y: ny, fontFamily: mono, fontSize: 10.5, fill: '#8db3e6', letterSpacing: '1.4' } });
  callouts.push({ tag: 'text', key: `c${cid++}`, text: `ROTATED ${turnsDeg[2]}°`, props: { x: nx, y: ny + 15, fontFamily: mono, fontSize: 10.5, fill: '#d8e8ff', letterSpacing: '1.4' } });
  const tgt = at(0.5, 3, 2.5, 2, TR);
  callouts.push({
    tag: 'path', key: `c${cid++}`,
    props: {
      d: `M${nx + 92} ${ny + 8} Q${nx + 150} ${ny + 24} ${(tgt[0] - 4).toFixed(1)} ${(tgt[1] - 4).toFixed(1)}`,
      fill: 'none', stroke: '#a9d3ff', strokeWidth: 1, markerEnd: 'url(#ah)',
    },
  });

  const LX = 712;
  const layers = [
    { k: 2, tag: 'LAYER 3', name: 'Improve', lines: ['Scale & Performance', 'Maintain & Operate'], y: 262 },
    { k: 1, tag: 'LAYER 2', name: 'Build', lines: ['Clean Code + Testing', 'Systems & Integrations'], y: 402 },
    { k: 0, tag: 'LAYER 1', name: 'Plan', lines: ['Ideas & Requirements', 'Architecture & Design'], y: 542 },
  ];
  layers.forEach((L) => {
    callouts.push({ tag: 'text', key: `c${cid++}`, text: L.tag, props: { x: LX, y: L.y - 30, fontFamily: mono, fontSize: 10.5, fill: '#8db3e6', letterSpacing: '1.4' } });
    callouts.push({ tag: 'text', key: `c${cid++}`, text: L.name, props: { x: LX, y: L.y, fontFamily: hand, fontSize: 32, fill: '#f2f7ff' } });
    L.lines.forEach((line, ix) => {
      callouts.push({ tag: 'text', key: `c${cid++}`, text: line, props: { x: LX, y: L.y + 24 + ix * 22, fontFamily: hand, fontSize: 21, fill: '#d8e8ff' } });
    });
    const e = at(3 - 0.08, 0.45, L.k + 0.5, L.k, TR);
    callouts.push({
      tag: 'path', key: `c${cid++}`,
      props: {
        d: `M${LX - 8} ${L.y - 10} C${LX - 60} ${L.y - 10} ${(e[0] + 50).toFixed(1)} ${e[1].toFixed(1)} ${(e[0] + 5).toFixed(1)} ${e[1].toFixed(1)}`,
        fill: 'none', stroke: '#a9d3ff', strokeWidth: 1, markerEnd: 'url(#ah)',
      },
    });
  });

  return { pieces, dims, callouts };
}
