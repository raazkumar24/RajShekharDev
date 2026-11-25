interface LoaderProps {
  time: string
}

const statusLines = ["Pouring the chai", "Sharpening pencils", "Opening the studio"]
const shutters = [0, 1, 2, 3, 4]

/**
 * Intro: an ink screen with a big counter that fills to 100, then lifts away in
 * staggered shutters over a lemon flash. Motion lives in scroll.ts; the CSS keeps
 * everything at its start state until the timeline plays.
 */
export function Loader({ time }: LoaderProps) {
  return (
    <div className="loader" aria-hidden="true">
      <div className="loader-flash" />
      <div className="loader-cols">
        {shutters.map((index) => (
          <span className="loader-col" key={index} />
        ))}
      </div>

      <div className="loader-content">
        <div className="loader-row">
          <p className="loader-note">
            <span>Raj Shekhar</span>
            <span>Full-stack developer</span>
          </p>
          <p className="loader-note loader-note--mid">
            <span>Portfolio</span>
            <span>Edition 2026</span>
          </p>
          <p className="loader-note loader-note--end">
            <span>Chandigarh, IN</span>
            <span>{time ? `${time} IST` : "IST"}</span>
          </p>
        </div>

        <div className="loader-main">
          <p className="loader-count">
            <span className="loader-count-num">000</span>
            <span className="loader-count-unit">%</span>
          </p>
          <div className="loader-side">
            <p className="loader-status">
              {statusLines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </p>
            <p className="loader-note">
              <span>Websites that load fast</span>
              <span>and feel alive.</span>
            </p>
          </div>
        </div>

        <div className="loader-bar">
          <i />
        </div>
      </div>
    </div>
  )
}
