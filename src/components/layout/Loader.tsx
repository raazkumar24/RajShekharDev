interface LoaderProps {
  time: string
}

const statusLines = ["Pouring the chai", "Sharpening pencils", "Opening the studio"]

/**
 * Intro sheet: a signed, stamped page on ruled paper. Motion lives in scroll.ts;
 * the CSS keeps everything hidden until the timeline plays.
 */
export function Loader({ time }: LoaderProps) {
  return (
    <div className="loader" aria-hidden="true">
      <div className="loader-paper">
        <div className="loader-row loader-row--top">
          <p className="loader-note">
            <span>Raj Shekhar</span>
            <span>Full-stack developer</span>
          </p>
          <p className="loader-note loader-note--end">
            <span>Chandigarh, IN</span>
            <span>{time ? `${time} IST` : "IST"}</span>
          </p>
        </div>

        <div className="loader-sign">
          <p className="loader-signature">Raj Shekhar</p>
          <svg className="loader-swash" viewBox="0 0 600 60" preserveAspectRatio="none">
            <path
              d="M6 42 C 120 18, 260 52, 380 30 S 560 14, 594 34"
              pathLength={1}
            />
          </svg>

          <svg className="loader-stamp" viewBox="0 0 200 200">
            <defs>
              {/* Roughens the edges so the stamp reads as ink, not vector */}
              <filter id="loader-ink" x="-10%" y="-10%" width="120%" height="120%">
                <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="7" />
                <feDisplacementMap in="SourceGraphic" scale="3.5" />
              </filter>
              <path id="loader-stamp-ring" d="M100 100 m -74 0 a 74 74 0 1 1 148 0 a 74 74 0 1 1 -148 0" />
            </defs>
            <g filter="url(#loader-ink)">
              <circle cx="100" cy="100" r="94" fill="none" strokeWidth="4" />
              <circle cx="100" cy="100" r="58" fill="none" strokeWidth="1.5" />
              <text className="loader-stamp-ring">
                <textPath href="#loader-stamp-ring" lengthAdjust="spacing" startOffset="0" textLength="458">
                  Selected work · Chandigarh · 2026 ·
                </textPath>
              </text>
              <text className="loader-stamp-mono" x="100" y="112" textAnchor="middle">
                RS
              </text>
              <text className="loader-stamp-year" x="100" y="134" textAnchor="middle">
                Folio no. 26
              </text>
            </g>
          </svg>
        </div>

        <div className="loader-row loader-row--bottom">
          <p className="loader-status">
            {statusLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </p>
          <p className="loader-note loader-note--end">
            <span>Signed &amp; built by hand</span>
          </p>
        </div>
      </div>
    </div>
  )
}
