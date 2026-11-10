import { Journey } from "./Journey"
import { Toolkit } from "./Toolkit"
import { nowItems } from "../../data/portfolioData"

export function About() {
  return (
    <section className="about" data-section id="about">
      <Journey />

      <div className="who-scene" id="who">
        <p className="who-kicker mono-eyebrow">
          <i /> The person behind the pixel
        </p>
        <h2 className="outline-title who-title">WHO IS RAJ?</h2>
      </div>

      <div className="who-grid">
        <p className="who-lead">
          I&apos;m a developer who cares how things look as much as how they work.
        </p>
        <div className="who-copy">
          <p>
            I start with the content and the people who&apos;ll use it, sketch the structure, then
            build it properly — clean code, fast pages, and animation only where it helps. If
            something feels off, I keep at it until it doesn&apos;t.
          </p>
          <dl>
            <div>
              <dt>2023</dt>
              <dd>Wrote my first line of HTML</dd>
            </div>
            <div>
              <dt data-count="39">39</dt>
              <dd>Public repos on GitHub</dd>
            </div>
            <div>
              <dt>MERN</dt>
              <dd>What I build with today</dd>
            </div>
          </dl>
        </div>
      </div>

      <ul className="now-strip" aria-label="Right now">
        {nowItems.map((item, index) => (
          <li key={item.label}>
            <span>
              {index === 0 && <i className="now-dot" aria-hidden="true" />}
              {item.label}
            </span>
            <p>{item.value}</p>
          </li>
        ))}
      </ul>

      <Toolkit />
    </section>
  )
}

