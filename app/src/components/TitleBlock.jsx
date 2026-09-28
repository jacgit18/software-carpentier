// The drawing-sheet corner block repeated at the bottom of every page.
export default function TitleBlock({ sheetTitle, sheetNo, rev = 'D' }) {
  return (
    <div className="tb-wrap">
      <div className="titleblock" role="group" aria-label="Sheet information">
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
