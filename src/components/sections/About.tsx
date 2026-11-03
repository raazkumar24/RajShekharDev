import { CircleBadge } from "../common/CircleBadge"
import { ArrowDown } from "../common/Icon"
import { Toolkit } from "./Toolkit"
import { nowItems } from "../../data/portfolioData"
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
          <i /> How I got here
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
        <span aria-hidden="true" className="milestone-year" data-fill>
          2023
        </span>
        <div className="milestone-copy">
          <span className="milestone-chapter">
            Chapter 01 <em>/ 03</em>
          </span>
          <h3>The spark</h3>
          <p>
            This is where it started — from zero. I wanted to know how websites actually work, so
            I learned HTML, CSS and JavaScript properly, one small project at a time. I also
            enrolled in an online BCA to get the computer-science basics right, and kept writing
            code every day.
          </p>
          <span className="milestone-label">What I picked up</span>
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
        <span aria-hidden="true" className="milestone-year" data-fill>
          2024
        </span>
        <div className="milestone-copy">
          <span className="milestone-chapter">
            Chapter 02 <em>/ 03</em>
          </span>
          <h3>Real apps</h3>
          <p>
            Static pages turned into real apps. I picked up React, Next.js, TypeScript and Tailwind
            CSS, learned how to split a UI into components and manage state, and started pulling
            data from REST APIs. This is the year I went from making pages to building things
            people could actually use.
          </p>
          <span className="milestone-label">What I picked up</span>
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
              <p>journey.ts</p>
            </div>
            <div className="code-lines">
              <p><b>1</b><em className="k">const</em> focus = <em className="s">"frontend"</em></p>
              <p><b>2</b><em className="k">const</em> stack = [<em className="s">"React"</em>, <em className="s">"Next.js"</em>]</p>
              <p><b>3</b><em className="c">// one project at a time</em></p>
              <p><b>4</b><em className="f">function</em> <em className="y">learn</em>(topic) {"{"}</p>
              <p><b>5</b>&nbsp;&nbsp;<em className="k">return</em> build(topic).ship()</p>
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
        <span aria-hidden="true" className="milestone-year" data-fill>
          2025
        </span>
        <div className="milestone-copy">
          <span className="milestone-chapter">
            Chapter 03 <em>/ 03</em>
          </span>
          <h3>The whole stack</h3>
          <p>
            Now I work on both ends. With Next.js and the MERN stack (MongoDB, Express, React,
            Node.js) I build the database, the API and the login flow alongside the interface — so
            a project can go from idea to a live product without changing hands.
          </p>
          <span className="milestone-label">What I work with now</span>
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
          <figcaption>Raj — still curious</figcaption>
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
              <dt data-count="3">3+</dt>
              <dd>Years building for the web</dd>
            </div>
            <div>
              <dt data-count="40">40+</dt>
              <dd>Projects shipped</dd>
            </div>
            <div>
              <dt data-count="15">15</dt>
              <dd>Clients so far</dd>
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

