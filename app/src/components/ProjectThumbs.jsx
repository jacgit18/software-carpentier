// Small per-project glyphs used in the card headers. Plain JSX (no hyphenated
// SVG attributes here), so these are written directly rather than via
// dangerouslySetInnerHTML.

export function ClaimsThumb(props) {
  return (
    <svg className="thumb i" viewBox="0 0 64 64" aria-hidden="true" {...props}>
      <rect x="8" y="8" width="12" height="9" /><rect x="26" y="8" width="12" height="9" /><rect x="44" y="8" width="12" height="9" />
      <rect x="8" y="27" width="12" height="9" /><rect x="26" y="27" width="12" height="9" /><rect x="44" y="27" width="12" height="9" />
      <rect x="26" y="46" width="12" height="9" />
      <path d="M20 12.5h6M38 12.5h6M14 17v10M32 17v10M50 17v10M20 31.5h6M38 31.5h6M32 36v10" />
    </svg>
  );
}

export function EmpathThumb(props) {
  return (
    <svg className="thumb i" viewBox="0 0 64 64" aria-hidden="true" {...props}>
      <rect x="6" y="10" width="52" height="40" rx="1" />
      <path d="M6 18h52M12 14h.01M17 14h.01M22 14h.01M14 26h20M14 32h14M14 38h22M40 26h12v10H40z" />
    </svg>
  );
}

export function TracFloThumb(props) {
  return (
    <svg className="thumb i" viewBox="0 0 64 64" aria-hidden="true" {...props}>
      <circle cx="32" cy="24" r="8" /><circle cx="20" cy="32" r="8" /><circle cx="44" cy="32" r="8" />
      <circle cx="26" cy="42" r="8" /><circle cx="38" cy="42" r="8" /><circle cx="32" cy="32" r="4" />
    </svg>
  );
}

export function UpskillThumb(props) {
  return (
    <svg className="thumb i" viewBox="0 0 64 64" aria-hidden="true" {...props}>
      <path d="M32 14 58 24 32 34 6 24z" />
      <path d="M18 27v9c0 4 6.5 7 14 7s14-3 14-7v-9" />
      <path d="M50 24v13M50 37l3.5 3.5" />
    </svg>
  );
}

export function ParkPinThumb(props) {
  return (
    <svg className="thumb i" viewBox="0 0 64 64" aria-hidden="true" {...props}>
      <path d="M32 8c-11 0-19.5 8.5-19.5 19 0 15 19.5 29 19.5 29s19.5-14 19.5-29C51.5 16.5 43 8 32 8z" />
      <circle cx="32" cy="27" r="8" />
    </svg>
  );
}

export function WingThumb(props) {
  return (
    <svg className="thumb i" viewBox="0 0 64 64" aria-hidden="true" {...props}>
      <path d="M6 48C16 30 30 16 58 10" />
      <path d="M14 44C22 30 34 20 54 14" />
      <path d="M22 40C28 30 36 24 48 18" />
    </svg>
  );
}
