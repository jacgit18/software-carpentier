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

export function HomeLabThumb(props) {
  return (
    <svg className="thumb i" viewBox="0 0 64 64" aria-hidden="true" {...props}>
      <rect x="8" y="10" width="26" height="10" rx="1" /><rect x="8" y="24" width="26" height="10" rx="1" /><rect x="8" y="38" width="26" height="10" rx="1" />
      <path d="M13 15h.01M13 29h.01M13 43h.01M40 40a7 7 0 0 1 .5-14 9 9 0 0 1 17 1.5A6 6 0 0 1 56 40z" />
    </svg>
  );
}
