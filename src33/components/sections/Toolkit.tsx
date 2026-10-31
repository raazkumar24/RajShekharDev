import { SectionLabel } from "../common/SectionLabel"
import { toolkit } from "../../data/portfolioData"

export function Toolkit() {
  return (
    <div className="toolkit" id="toolkit">
      <div className="toolkit-intro">
        <SectionLabel number="01">About / Toolkit</SectionLabel>
        <h2 className="big-title" data-split>
          MY TOOLKIT
        </h2>
      </div>
      <ol className="tool-rows">
        {toolkit.map((group) => (
          <li className="tool-row" key={group.number}>
            <span className="tool-index">({group.number})</span>
            <h3 data-fill>{group.title}</h3>
            <div className="tool-detail" data-rise>
              <p>{group.note}</p>
              <ul>
                {group.tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

