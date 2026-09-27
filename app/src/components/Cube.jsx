import { useMemo } from 'react';
import { buildCube, DEFAULT_TURNS } from '../utils/cube.js';

// Renders one shape descriptor ({tag, props, text?}) as the matching SVG element.
function Shape({ tag: Tag, props, text }) {
  return <Tag {...props}>{text}</Tag>;
}

/**
 * The isometric Rubik's cube on the Home page: thin line work, a dimension line,
 * a rotation note on the turned layer, and callouts tied to the three layers
 * (Plan / Build / Improve). Pass `turns` to override which layer is turned and
 * by how much — see DEFAULT_TURNS in utils/cube.js.
 */
export default function Cube({ turns = DEFAULT_TURNS }) {
  // Only recompute the (fairly expensive) geometry when the turn angles change.
  const { pieces, dims, callouts } = useMemo(() => buildCube(turns), [turns]);

  return (
    <div className="figure" aria-hidden="true">
      <svg id="blueprint" viewBox="-20 0 940 780" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grain" width="26" height="14" patternUnits="userSpaceOnUse" patternTransform="rotate(-8)">
            <path
              d="M0 3q6.5-3 13 0t13 0M0 8q6.5 3 13 0t13 0M0 12.5q6.5-2 13 0t13 0"
              fill="none"
              stroke="#a9d3ff"
              strokeWidth=".7"
              opacity=".55"
            />
          </pattern>
          <marker id="ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M1 1 9 5 1 9" fill="none" stroke="#a9d3ff" strokeWidth="1.3" />
          </marker>
        </defs>
        <g id="pieces" strokeLinejoin="round">
          {pieces.map((s) => <Shape key={s.key} {...s} />)}
        </g>
        <g id="dims" fill="none" stroke="#6ea6ee" strokeWidth=".8">
          {dims.map((s) => <Shape key={s.key} {...s} />)}
        </g>
        <g id="callouts">
          {callouts.map((s) => <Shape key={s.key} {...s} />)}
        </g>
      </svg>
    </div>
  );
}
