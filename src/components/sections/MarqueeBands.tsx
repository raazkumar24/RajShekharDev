import { bandOne, bandTwo } from "../../data/portfolioData"

export function MarqueeBands() {
  return (
    <div className="bands" aria-hidden="true">
      <div className="band band--one">
        <div className="band-track">{bandOne.repeat(6)}</div>
      </div>
      <div className="band band--two">
        <div className="band-track">{bandTwo.repeat(6)}</div>
      </div>
    </div>
  )
}

