import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { CircleBadge } from "../common/CircleBadge"
import { ArrowDown } from "../common/Icon"
import { buildJourney, lengthAtY, pointAtLength, type JourneyGeometry } from "./journeyPath"
import collageTechBg from "@/assets/collage-tech-bg.png"
import year2023 from "@/assets/2023.png"
import collageTechBg2 from "@/assets/collage-tech-bg2.png"
import rajJourneyPortrait from "@/assets/raj-journey-portrait.png"

const COMPACT = "(max-width: 960px)"

type Canvas = { d: string; w: number; h: number }

/**
 * The journey is one thick ribbon that is drawn as you scroll: it hooks out of the
 * heading, waves through each year's station and loops between chapters.
 */
export function Journey() {
  const rootRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const revealRef = useRef<SVGPathElement>(null)
  const markerRef = useRef<SVGGElement>(null)
  const geometryRef = useRef<JourneyGeometry | null>(null)
  const updateRef = useRef<() => void>(() => {})
  const [canvas, setCanvas] = useState<Canvas | null>(null)

  // Measure the chapters and rebuild the ribbon whenever the layout changes
  useLayoutEffect(() => {
    const root = rootRef.current
    const title = titleRef.current
    if (!root || !title) return

    const measure = () => {
      const box = root.getBoundingClientRect()
      if (!box.width) return
      const compact = window.matchMedia(COMPACT).matches
      const rel = (element: Element | Range) => {
        const rect = element.getBoundingClientRect()
        return { top: rect.top - box.top, bottom: rect.bottom - box.top, right: rect.right - box.left }
      }
      const spineX = compact ? 26 : box.width / 2
      // The split title can wrap past its own box, so measure the glyphs themselves
      const range = document.createRange()
      range.selectNodeContents(title)
      const heading = rel(range)
      const chapters = Array.from(root.querySelectorAll(".milestone"), rel)
      const gaps = Array.from(root.querySelectorAll(".journey-gap"), (gap, index) => ({
        ...rel(gap),
        dir: (compact || index % 2 === 0 ? 1 : -1) as 1 | -1,
      }))
      if (!chapters.length) return

      const start = compact
        ? { x: spineX + 56, y: heading.bottom + 18 }
        : { x: Math.min(heading.right + 36, box.width - 160), y: (heading.top + heading.bottom) / 2 }
      const geometry = buildJourney({
        spineX,
        start,
        hook: compact ? 20 : 150,
        chapters,
        gaps,
        end: box.height - 24,
        wave: compact ? 10 : 36,
        loopWidth: compact ? 128 : Math.min(480, box.width * 0.36),
      })
      geometryRef.current = geometry
      setCanvas({ d: geometry.d, w: box.width, h: box.height })
    }

    measure()
    // Title wraps (after the char split) and late images change positions inside the root
    const observer = new ResizeObserver(measure)
    observer.observe(root)
    observer.observe(title)
    root.querySelectorAll(".milestone, .journey-gap").forEach((element) => observer.observe(element))
    document.fonts?.ready.then(measure)
    window.addEventListener("load", measure)
    const late = window.setTimeout(measure, 1500)
    return () => {
      observer.disconnect()
      window.removeEventListener("load", measure)
      window.clearTimeout(late)
    }
  }, [])

  // Scroll drives how much of the ribbon is drawn; the tip tracks 62% of the viewport
  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    let frame = 0

    const update = () => {
      frame = 0
      const geometry = geometryRef.current
      const reveal = revealRef.current
      const marker = markerRef.current
      if (!geometry || !reveal || !marker) return
      const target = reduced ? Infinity : window.innerHeight * 0.62 - root.getBoundingClientRect().top
      const length = Math.min(geometry.total, lengthAtY(geometry, target))
      const progress = length / geometry.total
      reveal.style.strokeDashoffset = String(1 - progress)
      reveal.style.visibility = progress > 0.001 ? "visible" : "hidden"
      const point = pointAtLength(geometry, length)
      marker.setAttribute("transform", `translate(${point.x} ${point.y}) rotate(${point.angle})`)
      marker.style.opacity = progress > 0.002 ? "1" : "0"

      root.querySelectorAll<HTMLElement>(".milestone").forEach((chapter) => {
        chapter.classList.toggle("is-reached", chapter.offsetTop + chapter.offsetHeight / 2 <= target)
      })
      root.querySelectorAll<HTMLElement>(".journey-gap").forEach((gap) => {
        gap.classList.toggle("is-reached", gap.offsetTop + gap.offsetHeight * 0.4 <= target)
      })
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    updateRef.current = schedule

    schedule()
    window.addEventListener("scroll", schedule, { passive: true })
    window.addEventListener("resize", schedule)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", schedule)
      window.removeEventListener("resize", schedule)
    }
  }, [])

  // A rebuilt path needs the drawn state re-applied
  useEffect(() => {
    updateRef.current()
  }, [canvas])

  return (
    <div className="journey" ref={rootRef}>
      {canvas && (
        <svg
          aria-hidden="true"
          className="journey-line"
          height={canvas.h}
          viewBox={`0 0 ${canvas.w} ${canvas.h}`}
          width={canvas.w}
        >
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="journey-ribbon-paint" x1="0" x2="0" y1="0" y2={canvas.h}>
              <stop className="journey-stop-a" offset="0" />
              <stop className="journey-stop-b" offset="0.38" />
              <stop className="journey-stop-a" offset="0.7" />
              <stop className="journey-stop-b" offset="1" />
            </linearGradient>
            <mask
              height={canvas.h + 400}
              id="journey-reveal"
              maskUnits="userSpaceOnUse"
              width={canvas.w + 400}
              x={-200}
              y={-200}
            >
              <path className="journey-reveal" d={canvas.d} pathLength={1} ref={revealRef} />
            </mask>
          </defs>
          <path className="journey-track" d={canvas.d} />
          <g mask="url(#journey-reveal)">
            <path className="journey-ribbon" d={canvas.d} />
            <path className="journey-ribbon-dash" d={canvas.d} />
          </g>
          <g className="journey-marker" ref={markerRef}>
            <circle r="19" />
            <path d="M-5 -7 L4 0 L-5 7" />
          </g>
        </svg>
      )}

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
        <h2 className="outline-title" data-split ref={titleRef}>
          MY JOURNEY
        </h2>
        <CircleBadge id="journey-badge-path" />
      </div>

      <article className="milestone milestone--one" id="journey-2023">
        <span aria-hidden="true" className="journey-node">
          <b>2023</b>
        </span>
        <div className="milestone-copy">
          <span className="milestone-chapter">
            Chapter 01 <em>/ 03</em>
          </span>
          <h3>The spark</h3>
          <p>
            This is where it started — from zero. I wanted to know how websites actually work, so
            I learned HTML, CSS and JavaScript properly, one small project at a time. I also
            enrolled in an online BCA to get the computer-science basics right, and kept practising
            every day.
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
              Follow
              <br />
              the line
            </span>
          </a>
        </div>
        <div className="collage" aria-hidden="true" data-parallax="60">
          <div className="collage-back">
            <img src={collageTechBg} alt="" />
            <span className="note">
              <img src={year2023} alt="" />
            </span>
          </div>
          <div className="collage-front">
            <img src={collageTechBg2} alt="" />
            <span className="tape">
              <p>Start</p>
            </span>
          </div>
        </div>
      </article>

      <div aria-hidden="true" className="journey-gap journey-gap--right">
        <p className="journey-note">from zero, one page at a time</p>
      </div>

      <article className="milestone milestone--two" id="journey-2024">
        <span aria-hidden="true" className="journey-node">
          <b>2024</b>
        </span>
        <figure className="layers" aria-label="A screen split into layout, components and live data" data-parallax="40">
          <div aria-hidden="true" className="layer layer--base" />
          <div aria-hidden="true" className="layer layer--mid">
            {[0, 1, 2].map((card) => (
              <span className="layer-card" key={card}>
                <i />
                <b />
                <b />
              </span>
            ))}
          </div>
          <div aria-hidden="true" className="layer layer--top">
            <span className="layer-bar" />
            <svg className="layer-spark" viewBox="0 0 120 40" preserveAspectRatio="none">
              <polyline points="2,34 22,26 40,30 60,14 80,20 100,6 118,10" />
            </svg>
            <span className="layer-button" />
          </div>
          <figcaption className="layer-labels">
            <span className="layer-label layer-label--top">
              <em>03</em> Live data
            </span>
            <span className="layer-label layer-label--mid">
              <em>02</em> Components
            </span>
            <span className="layer-label layer-label--base">
              <em>01</em> Layout
            </span>
          </figcaption>
        </figure>
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
      </article>

      <div aria-hidden="true" className="journey-gap journey-gap--left">
        <p className="journey-note">then people started using it</p>
      </div>

      <article className="milestone milestone--three" id="journey-2025">
        <span aria-hidden="true" className="journey-node">
          <b>2025</b>
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
        </figure>
      </article>
    </div>
  )
}
