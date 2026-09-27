import { Fragment } from 'react';

// The drawing-sheet corner block repeated at the bottom of every page.
// `revisions`, when given, renders the wider block with a revision history
// table above the usual sheet-info row (used on the About page).
export default function TitleBlock({ sheetTitle, sheetNo, rev = 'D', revisions }) {
  return (
    <div className="tb-wrap">
      <div className={`titleblock${revisions ? ' wide' : ''}`} role="group" aria-label="Sheet information">
        {revisions && (
          <>
            <div className="tb-1 rev-h"><small>Rev</small></div>
            <div className="tb-4 rev-h"><small>Description</small></div>
            <div className="tb-1 rev-h"><small>Period</small></div>
            {revisions.map((r) => (
              <Fragment key={r.rev}>
                <div className="tb-1"><b>{r.rev}</b></div>
                <div className="tb-4">{r.description}</div>
                <div className="tb-1">{r.period}</div>
              </Fragment>
            ))}
          </>
        )}
        <div className="tb-4"><small>Sheet title</small><b>{sheetTitle}</b></div>
        <div className="tb-2"><small>Sheet no.</small><b>{sheetNo}</b></div>
        <div className="tb-2"><small>Drawn by</small>J. Carpentier</div>
        <div className="tb-2"><small>Checked</small>J. Carpentier, QA</div>
        <div className="tb-1"><small>Scale</small>NTS</div>
        <div className="tb-1"><small>Rev</small><b>{rev}</b></div>
      </div>
    </div>
  );
}
