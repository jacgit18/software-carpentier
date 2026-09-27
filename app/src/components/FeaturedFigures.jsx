// The two featured-project mockup illustrations (Iron Log's weekly board /
// progress chart / muscle map, and DevHiveMind's knowledge graph / topic index).
// These use plenty of hyphenated SVG attributes (font-family, stroke-width, ...),
// so rather than hand-convert every one to camelCase (easy to typo, hard to spot),
// they're rendered via dangerouslySetInnerHTML. The markup is static and authored
// by us, not user input, so this is safe and guarantees pixel-identical output.

export function IronLogFigure() {
  return (
    <svg
      viewBox="0 0 460 300"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: `
          <defs><clipPath id="il-body"><path d="M230 8c10 0 18 8 18 18 0 8-4 14-9 17 12 4 20 14 20 27v14c0 8-6 15-13 17l3 40c8 3 13 11 13 20v46c0 10-8 18-18 18h-2l-4 46c9 3 15 12 15 22v24c0 12-9 21-21 21h-24c-12 0-21-9-21-21v-24c0-10 6-19 15-22l-4-46h-2c-10 0-18-8-18-18v-46c0-9 5-17 13-20l3-40c-7-2-13-9-13-17v-14c0-13 8-23 20-27-5-3-9-9-9-17 0-10 8-18 18-18z"/></clipPath></defs>
          <!-- weekly board -->
          <g font-family="IBM Plex Mono, monospace" font-size="8.5" fill="#8db3e6">
            <text x="4" y="12" letter-spacing="1.5">WEEKLY BOARD</text>
          </g>
          <g stroke="#3d7ad0" stroke-width="1">
            <rect x="4" y="18" width="210" height="150" fill="rgba(4,32,74,.4)"/>
            <line x1="34" y1="18" x2="34" y2="168"/><line x1="64" y1="18" x2="64" y2="168"/>
            <line x1="94" y1="18" x2="94" y2="168"/><line x1="124" y1="18" x2="124" y2="168"/>
            <line x1="154" y1="18" x2="154" y2="168"/><line x1="184" y1="18" x2="184" y2="168"/>
            <line x1="4" y1="30" x2="214" y2="30"/>
          </g>
          <g font-family="IBM Plex Mono, monospace" font-size="6.5" fill="#a9d3ff" text-anchor="middle">
            <text x="19" y="27">SUN</text><text x="49" y="27">MON</text><text x="79" y="27">TUE</text>
            <text x="109" y="27">WED</text><text x="139" y="27">THU</text><text x="169" y="27">FRI</text><text x="199" y="27">SAT</text>
          </g>
          <g>
            <!-- exercise cards per column, varying counts, some checked -->
            <g id="il-cards"><rect x="5.5" y="34" width="27" height="13" rx="1" fill="#2f6fc4" stroke="#5f97e0" stroke-width=".6"/><path d="M9 41 l3 3 6-7" fill="none" stroke="#eaf4ff" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/><rect x="5.5" y="51" width="27" height="13" rx="1" fill="rgba(4,32,74,.6)" stroke="#5f97e0" stroke-width=".6"/><rect x="5.5" y="68" width="27" height="13" rx="1" fill="#2f6fc4" stroke="#5f97e0" stroke-width=".6"/><path d="M9 75 l3 3 6-7" fill="none" stroke="#eaf4ff" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/><rect x="35.5" y="34" width="27" height="13" rx="1" fill="rgba(4,32,74,.6)" stroke="#5f97e0" stroke-width=".6"/><rect x="35.5" y="51" width="27" height="13" rx="1" fill="#2f6fc4" stroke="#5f97e0" stroke-width=".6"/><path d="M39 58 l3 3 6-7" fill="none" stroke="#eaf4ff" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/><rect x="65.5" y="34" width="27" height="13" rx="1" fill="#2f6fc4" stroke="#5f97e0" stroke-width=".6"/><path d="M69 41 l3 3 6-7" fill="none" stroke="#eaf4ff" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/><rect x="65.5" y="51" width="27" height="13" rx="1" fill="#2f6fc4" stroke="#5f97e0" stroke-width=".6"/><path d="M69 58 l3 3 6-7" fill="none" stroke="#eaf4ff" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/><rect x="65.5" y="68" width="27" height="13" rx="1" fill="rgba(4,32,74,.6)" stroke="#5f97e0" stroke-width=".6"/><rect x="65.5" y="85" width="27" height="13" rx="1" fill="#2f6fc4" stroke="#5f97e0" stroke-width=".6"/><path d="M69 92 l3 3 6-7" fill="none" stroke="#eaf4ff" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/><rect x="95.5" y="34" width="27" height="13" rx="1" fill="#2f6fc4" stroke="#5f97e0" stroke-width=".6"/><path d="M99 41 l3 3 6-7" fill="none" stroke="#eaf4ff" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/><rect x="95.5" y="51" width="27" height="13" rx="1" fill="rgba(4,32,74,.6)" stroke="#5f97e0" stroke-width=".6"/><rect x="95.5" y="68" width="27" height="13" rx="1" fill="#2f6fc4" stroke="#5f97e0" stroke-width=".6"/><path d="M99 75 l3 3 6-7" fill="none" stroke="#eaf4ff" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/><rect x="155.5" y="34" width="27" height="13" rx="1" fill="#2f6fc4" stroke="#5f97e0" stroke-width=".6"/><path d="M159 41 l3 3 6-7" fill="none" stroke="#eaf4ff" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/><rect x="155.5" y="51" width="27" height="13" rx="1" fill="#2f6fc4" stroke="#5f97e0" stroke-width=".6"/><path d="M159 58 l3 3 6-7" fill="none" stroke="#eaf4ff" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/><rect x="155.5" y="68" width="27" height="13" rx="1" fill="rgba(4,32,74,.6)" stroke="#5f97e0" stroke-width=".6"/><rect x="185.5" y="34" width="27" height="13" rx="1" fill="#2f6fc4" stroke="#5f97e0" stroke-width=".6"/><path d="M189 41 l3 3 6-7" fill="none" stroke="#eaf4ff" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/></g>
          </g>
          <!-- progress chart -->
          <g font-family="IBM Plex Mono, monospace" font-size="8.5" fill="#8db3e6"><text x="4" y="188" letter-spacing="1.5">PROGRESS</text></g>
          <rect x="4" y="194" width="210" height="66" fill="rgba(4,32,74,.4)" stroke="#3d7ad0"/>
          <polyline points="10,244 34,234 58,238 82,222 106,226 130,208 154,214 178,196 202,202" fill="none" stroke="#7cc0ff" stroke-width="1.6"/>
          <g fill="#a9d3ff">
            <circle cx="10" cy="244" r="2"/><circle cx="58" cy="238" r="2"/><circle cx="106" cy="226" r="2"/><circle cx="154" cy="214" r="2"/><circle cx="202" cy="202" r="2"/>
          </g>
          <!-- muscle map -->
          <g font-family="IBM Plex Mono, monospace" font-size="8.5" fill="#8db3e6"><text x="230" y="12" letter-spacing="1.5">MUSCLE MAP</text></g>
          <rect x="226" y="18" width="106" height="242" fill="rgba(4,32,74,.4)" stroke="#3d7ad0"/>
          <g stroke="#5f97e0" stroke-width="1">
            <circle cx="279" cy="42" r="13" fill="#173e7c"/>
            <rect x="256" y="58" width="46" height="64" rx="12" fill="#173e7c"/>
            <rect x="240" y="62" width="14" height="52" rx="7" fill="#173e7c"/>
            <rect x="305" y="62" width="14" height="52" rx="7" fill="#173e7c"/>
            <rect x="261" y="124" width="17" height="74" rx="8" fill="#173e7c"/>
            <rect x="281" y="124" width="17" height="74" rx="8" fill="#173e7c"/>
          </g>
          <g stroke="none">
            <rect x="261" y="64" width="36" height="22" rx="4" fill="#5aa2f0"/>
            <rect x="242" y="64" width="10" height="30" rx="4" fill="#4fd0e8"/>
            <rect x="307" y="64" width="10" height="30" rx="4" fill="#4fd0e8"/>
            <rect x="259" y="90" width="40" height="28" rx="4" fill="#2f6fc4"/>
            <rect x="263" y="130" width="13" height="62" rx="5" fill="#8fb0ff"/>
            <rect x="283" y="130" width="13" height="62" rx="5" fill="#8fb0ff"/>
          </g>
          <!-- timer dial -->
          <g transform="translate(279,246)">
            <circle r="14" fill="rgba(4,32,74,.6)" stroke="#a9d3ff" stroke-width="1.2"/>
            <path d="M0 -14 A14 14 0 0 1 12 6" fill="none" stroke="#7cc0ff" stroke-width="2"/>
            <line x1="0" y1="0" x2="0" y2="-10" stroke="#eaf4ff" stroke-width="1.2"/>
            <line x1="0" y1="0" x2="6" y2="2" stroke="#eaf4ff" stroke-width="1.2"/>
          </g>
        ` }}
    />
  );
}

export function DevHiveMindFigure() {
  return (
    <svg
      viewBox="0 0 460 300"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: `
          <!-- knowledge graph / backlinks -->
          <g font-family="IBM Plex Mono, monospace" font-size="8.5" fill="#8db3e6"><text x="4" y="12" letter-spacing="1.5">KNOWLEDGE GRAPH</text></g>
          <rect x="4" y="18" width="222" height="196" fill="rgba(4,32,74,.4)" stroke="#3d7ad0"/>
          <g transform="translate(10,24)">
            <line x1="60" y1="40" x2="150" y2="26" stroke="#3d7ad0" stroke-width="1"/><line x1="60" y1="40" x2="95" y2="96" stroke="#3d7ad0" stroke-width="1"/><line x1="60" y1="40" x2="40" y2="110" stroke="#3d7ad0" stroke-width="1"/><line x1="150" y1="26" x2="210" y2="60" stroke="#3d7ad0" stroke-width="1"/><line x1="150" y1="26" x2="150" y2="86" stroke="#3d7ad0" stroke-width="1"/><line x1="150" y1="86" x2="178" y2="120" stroke="#3d7ad0" stroke-width="1"/><line x1="95" y1="96" x2="120" y2="140" stroke="#3d7ad0" stroke-width="1"/><line x1="95" y1="96" x2="60" y2="150" stroke="#3d7ad0" stroke-width="1"/><line x1="178" y1="120" x2="195" y2="150" stroke="#3d7ad0" stroke-width="1"/><line x1="178" y1="120" x2="150" y2="168" stroke="#3d7ad0" stroke-width="1"/><line x1="120" y1="140" x2="60" y2="150" stroke="#3d7ad0" stroke-width="1"/><line x1="120" y1="140" x2="150" y2="168" stroke="#3d7ad0" stroke-width="1"/><line x1="210" y1="60" x2="195" y2="150" stroke="#3d7ad0" stroke-width="1"/><line x1="60" y1="40" x2="90" y2="30" stroke="#3d7ad0" stroke-width="1"/><line x1="60" y1="40" x2="20" y2="70" stroke="#3d7ad0" stroke-width="1"/><line x1="90" y1="30" x2="150" y2="26" stroke="#3d7ad0" stroke-width="1"/><line x1="20" y1="70" x2="40" y2="110" stroke="#3d7ad0" stroke-width="1"/>
            <circle cx="60" cy="40" r="7" fill="#2f6fc4" stroke="#eaf4ff" stroke-width="1.4"/><circle cx="150" cy="26" r="3.2" fill="#5aa2f0" stroke="#06285a" stroke-width=".6"/><circle cx="210" cy="60" r="3.8" fill="#8fb0ff" stroke="#06285a" stroke-width=".6"/><circle cx="150" cy="86" r="4.4" fill="#a9d3ff" stroke="#06285a" stroke-width=".6"/><circle cx="95" cy="96" r="4.4" fill="#a9d3ff" stroke="#06285a" stroke-width=".6"/><circle cx="40" cy="110" r="3.8" fill="#4fd0e8" stroke="#06285a" stroke-width=".6"/><circle cx="178" cy="120" r="4.4" fill="#5aa2f0" stroke="#06285a" stroke-width=".6"/><circle cx="120" cy="140" r="3.2" fill="#8fb0ff" stroke="#06285a" stroke-width=".6"/><circle cx="60" cy="150" r="4.4" fill="#8fb0ff" stroke="#06285a" stroke-width=".6"/><circle cx="195" cy="150" r="3.8" fill="#5aa2f0" stroke="#06285a" stroke-width=".6"/><circle cx="150" cy="168" r="3.2" fill="#5aa2f0" stroke="#06285a" stroke-width=".6"/><circle cx="90" cy="30" r="4.4" fill="#8fb0ff" stroke="#06285a" stroke-width=".6"/><circle cx="20" cy="70" r="4.4" fill="#a9d3ff" stroke="#06285a" stroke-width=".6"/>
          </g>
          <g font-family="IBM Plex Mono, monospace" font-size="7" fill="#8db3e6">
            <text x="14" y="232">4,988 COMMITS</text><text x="14" y="244">MARKDOWN + OBSIDIAN</text>
          </g>
          <!-- peer review status -->
          <g font-family="IBM Plex Mono, monospace" font-size="8.5" fill="#8db3e6"><text x="4" y="266" letter-spacing="1.5">NOTE STATUS</text></g>
          <g font-family="IBM Plex Mono, monospace" font-size="7.5" transform="translate(4,272)">
            <rect x="0" y="0" width="54" height="16" fill="rgba(4,32,74,.6)" stroke="#5aa2f0"/><text x="27" y="11" text-anchor="middle" fill="#eaf4ff">FINAL</text>
            <rect x="58" y="0" width="54" height="16" fill="rgba(4,32,74,.6)" stroke="#2f6fc4"/><text x="85" y="11" text-anchor="middle" fill="#d8e8ff">DONE</text>
            <rect x="116" y="0" width="70" height="16" fill="rgba(4,32,74,.6)" stroke="#4fd0e8"/><text x="151" y="11" text-anchor="middle" fill="#d8e8ff">REFINEMENT</text>
            <rect x="190" y="0" width="54" height="16" fill="rgba(4,32,74,.6)" stroke="#8fb0ff"/><text x="217" y="11" text-anchor="middle" fill="#d8e8ff">DRAFT</text>
          </g>
          <!-- topic index -->
          <g font-family="IBM Plex Mono, monospace" font-size="8.5" fill="#8db3e6"><text x="234" y="12" letter-spacing="1.5">TOPIC INDEX</text></g>
          <rect x="230" y="18" width="226" height="252" fill="rgba(4,32,74,.4)" stroke="#3d7ad0"/>
          <g font-family="IBM Plex Mono, monospace" font-size="9" fill="#d8e8ff">
            <text x="240" y="34">01&#160;&#160;Fundamentals</text>
            <text x="240" y="54">02&#160;&#160;System Design</text>
            <text x="240" y="74">03&#160;&#160;Application Structure</text>
            <text x="240" y="94">04&#160;&#160;Backing Services</text>
            <text x="240" y="114">05&#160;&#160;AI</text>
            <text x="240" y="134">06&#160;&#160;Networking &amp; Delivery</text>
            <text x="240" y="154">07&#160;&#160;Operability &amp; Prod</text>
            <text x="240" y="174">08&#160;&#160;Security</text>
            <text x="240" y="194">09&#160;&#160;Testing</text>
            <text x="240" y="214">10&#160;&#160;Twelve-Factor App</text>
          </g>
          <line x1="240" y1="224" x2="444" y2="224" stroke="#3d7ad0"/>
          <g font-family="IBM Plex Mono, monospace" font-size="9" fill="#8db3e6">
            <text x="240" y="242">+ Mind maps</text>
            <text x="240" y="260">+ Dashboard</text>
          </g>
        ` }}
    />
  );
}
