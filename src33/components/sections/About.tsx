import { CircleBadge } from "../common/CircleBadge"
import { ArrowDown } from "../common/Icon"
import { Toolkit } from "./Toolkit"
import collageTechBg from "@/assets/collage-tech-bg.png"
import year2023 from "@/assets/2023.png"
import collageTechBg2 from "@/assets/collage-tech-bg2.png"
import rajJourneyPortrait from "@/assets/raj-journey-portrait.png"

export function About() {
  return (
    <section className="about" data-section id="about">
      <nav className="journey-rail" aria-label="Journey timeline">
        {["2023", "2024", "2025"].map((year, index) => (
          <a aria-label={`Chapter ${index + 1}`} data-index={index} href={`#journey-${year}`} key={year}>
            <i />
            <span>0{index + 1}</span>
          </a>
        ))}
      </nav>

      <div className="journey-head">
        <p className="mono-eyebrow">
          <i /> Editorial portfolio
        </p>
        <h2 className="outline-title" data-split>
          MY JOURNEY
        </h2>
        <svg className="head-arrow connector" viewBox="0 0 90 105" aria-hidden="true">
          <path className="glow" d="M54 8C78 28 78 68 38 94" />
          <path className="arrowhead" d="M38 78v16h16" />
        </svg>
        <CircleBadge id="journey-badge-path" />
      </div>

      <article className="milestone milestone--one" id="journey-2023">
        <div className="milestone-copy">
          <span className="milestone-chapter">Chapter 01 — The spark</span>
          <h3>2023 — The spark</h3>
          <p>
            Driven by a relentless curiosity about how the web actually works under the hood, I
            embarked on my journey from ground zero. Mastered HTML, CSS, and modern JavaScript
            fundamentals. Determined to forge my path as an independent web developer, I enrolled
            in an online BCA degree to build strong computer science foundations while committing
            every day to building and writing code.
          </p>
          <ul className="milestone-tags">
            <li>HTML &amp; CSS</li>
            <li>JavaScript</li>
            <li>Web fundamentals</li>
            <li>Online BCA</li>
          </ul>
          <a className="mono-cue" href="#journey-2024">
            <ArrowDown />
            <span>
              Scroll to
              <br />
              discover
            </span>
          </a>
        </div>
        <div className="collage" aria-hidden="true" data-parallax="60">
          <div className="collage-back">
            <img src={collageTechBg} alt="" />
            {/* <span className="note" /> */}
            <span className="note">
              <img className="" src={year2023} alt="" />
            </span>
          </div>
          <div className="collage-front">
            <img src={collageTechBg2} alt="" />
            {/* <span className="tape" /> */}
          <span className="tape">
            <p>Start</p>
          </span>
          </div>
        </div>
      </article>

      <svg className="connector connector--one" viewBox="0 0 1200 260" aria-hidden="true">
        <path className="glow" d="M720 0C730 120 540 160 390 220C360 234 365 250 400 248" />
        <path className="arrowhead" d="M380 234l22 14-20 14" />
      </svg>

      <article className="milestone milestone--two" id="journey-2024">
        <div className="milestone-copy">
          <span className="milestone-chapter">Chapter 02 — The craft</span>
          <h3>2024 — Scaling up</h3>
          <p>
            Turned core fundamentals into scalable frontend architecture. Immersed myself in
            reactive state management, component hierarchies, and modern web frameworks. Mastered
            React, Next.js, TypeScript, and Tailwind CSS—evolving from static pages to crafting
            high-performance, production-ready interfaces with fluid motion and robust REST APIs.
          </p>
          <ul className="milestone-tags">
            <li>React</li>
            <li>Next.js</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
            <li>REST APIs</li>
          </ul>
        </div>
        <div className="code-stack" aria-hidden="true" data-parallax="70">
          <div className="window window--back">
            <span className="dots">
              <i />
              <i />
              <i />
            </span>
          </div>
          <div className="window window--front">
            <div className="window-bar">
              <span className="dots">
                <i />
                <i />
                <i />
              </span>
              <p>Architecture.tsx</p>
            </div>
            <div className="code-lines">
              <p><b>1</b><em className="k">import</em> {"{ createEngine }"} <em className="k">from</em> <em className="s">"@raj/core"</em></p>
              <p><b>2</b><em className="k">const</em> stack = [<em className="s">"React"</em>, <em className="s">"Next.js"</em>]</p>
              <p><b>3</b><em className="c">// Fluid spring physics &amp; APIs</em></p>
              <p><b>4</b><em className="f">async function</em> <em className="y">deploySystem</em>() {"{"}</p>
              <p><b>5</b>&nbsp;&nbsp;<em className="k">return await</em> createEngine({"{ speed }"})</p>
              <p><b>6</b>{"}"}<i className="caret" /></p>
            </div>
            <div className="window-status">
              <p>
                <i /> Ready
              </p>
              <p>UTF-8 • TypeScript</p>
            </div>
          </div>
        </div>
      </article>

      <svg className="connector connector--two" viewBox="0 0 1200 300" aria-hidden="true">
        <path className="glow" d="M1080 0C1090 160 960 270 690 290" />
        <path className="arrowhead" d="M712 272l-24 18 26 10" />
      </svg>

      <article className="milestone milestone--three" id="journey-2025">
        <div className="milestone-copy">
          <span className="milestone-chapter">Chapter 03 — The full picture</span>
          <h3>2025–2026 — Full-stack expansion</h3>
          <p>
            Stepped beyond the frontend to engineer complete, end-to-end full-stack applications.
            Architected and shipped production-grade software powered by Next.js and the MERN stack
            (MongoDB, Express, React, Node.js). Designed secure backends, scalable RESTful APIs, and
            real-time database flows that bridge high-impact visual design with resilient system
            engineering.
          </p>
          <ul className="milestone-tags">
            <li>MERN Stack</li>
            <li>Next.js</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <figure className="journey-portrait" data-parallax="50">
          <div className="portrait-card">
            <div className="portrait-frame">
              <img alt="Black and white portrait of Raj Shekhar" src={rajJourneyPortrait} />
            </div>
          </div>
          <figcaption>Raj, 2025–2026 — still curious</figcaption>
          <svg className="connector connector-portrait" viewBox="0 0 80 85" aria-hidden="true">
            <path className="glow" d="M10 14C42 14 62 36 62 68" />
            <path className="arrowhead" d="M52 58L62 68L72 58" />
          </svg>
        </figure>
        <a className="vertical-cue" href="#who">
          <ArrowDown /> Scroll
        </a>
      </article>

      <div className="who-scene" id="who">
        <p className="who-kicker mono-eyebrow">
          <i /> The person behind the pixels
        </p>
        <h2 className="outline-title who-title">WHO IS RAJ?</h2>
      </div>

      <div className="who-grid" data-rise>
        <p className="who-lead">
          A developer who thinks like a designer — obsessed with the details between pixels,
          performance, and people.
        </p>
        <div className="who-copy">
          <p>
            I build products that look considered and work flawlessly. My process starts with
            structure and story, then moves into systems, motion, and engineering until every
            interaction feels inevitable.
          </p>
          <dl>
            <div>
              <dt>3+</dt>
              <dd>Years crafting for the web</dd>
            </div>
            <div>
              <dt>40+</dt>
              <dd>Projects shipped</dd>
            </div>
            <div>
              <dt>15</dt>
              <dd>Happy clients worldwide</dd>
            </div>
          </dl>
        </div>
      </div>

      <Toolkit />
    </section>
  )
}

