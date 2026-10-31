import { useEffect, useRef, useState } from "react"
import type { Project } from "../../types/portfolio"
import { caseStudies } from "../../data/caseStudiesData"
import { ArrowDown, ArrowUpRight, Icon } from "../common/Icon"

interface CaseStudyViewProps {
  project: Project
  onClose: () => void
  onSelectProject: (project: Project) => void
  allProjects: Project[]
}

export function CaseStudyView({
  project,
  onClose,
  onSelectProject,
  allProjects,
}: CaseStudyViewProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [copiedHex, setCopiedHex] = useState<string | null>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  const study = caseStudies[project.number] || caseStudies["01"]

  // Circular next project
  const currentIndex = allProjects.findIndex((p) => p.number === project.number)
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length]

  // Track scroll progress and isolate scroll events from window / Lenis
  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    el.focus()

    const stopPropagation = (e: Event) => {
      e.stopPropagation()
    }

    el.addEventListener("wheel", stopPropagation, { passive: true })
    el.addEventListener("touchmove", stopPropagation, { passive: true })

    const onScroll = () => {
      const max = el.scrollHeight - el.clientHeight
      setScrollProgress(max > 0 ? el.scrollTop / max : 0)
    }

    el.addEventListener("scroll", onScroll, { passive: true })

    return () => {
      el.removeEventListener("wheel", stopPropagation)
      el.removeEventListener("touchmove", stopPropagation)
      el.removeEventListener("scroll", onScroll)
    }
  }, [project.number])

  // Scroll to top when project switches
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0
    }
  }, [project.number])

  // ESC to close
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [onClose])

  // Lock root document scroll while mounted
  useEffect(() => {
    const prevBody = document.body.style.overflow
    const prevHtml = document.documentElement.style.overflow
    document.body.style.overflow = "hidden"
    document.documentElement.style.overflow = "hidden"
    window.dispatchEvent(new CustomEvent("scroll-lock", { detail: true }))

    return () => {
      document.body.style.overflow = prevBody
      document.documentElement.style.overflow = prevHtml
      window.dispatchEvent(new CustomEvent("scroll-lock", { detail: false }))
    }
  }, [])

  const copyColor = (hex: string) => {
    navigator.clipboard?.writeText(hex).then(() => {
      setCopiedHex(hex)
      window.setTimeout(() => setCopiedHex(null), 1800)
    })
  }

  // Titles
  const titleSolid = study.titleSolid || study.title.split(" ")[0]
  const titleStroke =
    study.titleStroke || study.title.split(" ").slice(1).join(" ") || "STUDY"

  return (
    <div
      aria-label={`${study.title} case study`}
      aria-modal="true"
      className="case-study-overlay"
      data-lenis-prevent="true"
      data-lenis-prevent-touch="true"
      data-lenis-prevent-wheel="true"
      ref={containerRef}
      role="dialog"
      tabIndex={-1}
    >
      {/* Top Reading Progress Bar */}
      <div
        className="case-study-progress"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />

      {/* Sticky Top Header Nav */}
      <header className="case-study-nav">
        <button
          aria-label="Back to projects"
          className="case-study-back-btn"
          onClick={onClose}
          type="button"
        >
          <span className="case-study-back-arrow">←</span>
          <span>Back to Works</span>
        </button>

        <div className="case-study-badge">
          <span className="case-study-badge-num">({study.number})</span>
          <span className="case-study-badge-title">{study.title}</span>
        </div>

        <div className="case-study-actions">
          <a
            className="case-study-cta-btn"
            href={study.liveUrl}
            rel="noreferrer"
            target="_blank"
          >
            <span>Live Demo</span>
            <ArrowUpRight />
          </a>
          <button
            aria-label="Close case study"
            className="case-study-close-btn"
            onClick={onClose}
            type="button"
          >
            ✕
          </button>
        </div>
      </header>

      {/* Main Editorial Case Study Container */}
      <main className="cs-wrap">
        {/* =========================================================
            HERO SECTION
            ========================================================= */}
        <section className="cs-hero-grid">
          {/* Left Column: Eyebrow, Giant Title, Tagline, Intro, Tech Pills */}
          <div className="cs-hero-left">
            <span className="cs-eyebrow">
              <i className="cs-dash" /> WORKS / CASE STUDY {study.number}
            </span>

            <h1 className="cs-giant-title">
              <span className="cs-title-solid">{titleSolid}</span>
              <span className="cs-title-stroke">{titleStroke}</span>
            </h1>

            <p className="cs-tagline">{study.tagline}</p>
            <p className="cs-hero-summary">{study.summary}</p>

            {/* Tech Tags Pills */}
            <div className="cs-pill-row">
              {project.tags.map((tag) => (
                <span className="cs-tech-pill" key={tag}>
                  {tag.toUpperCase()}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: 3D Perspective Browser Card + Metadata + Spinning Badge */}
          <div className="cs-hero-right">
            {/* Metadata specs callout */}
            <div className="cs-meta-stack">
              <div className="cs-meta-item">
                <span className="cs-meta-kicker">ROLE</span>
                <strong className="cs-meta-val">{study.role.toUpperCase()}</strong>
              </div>
              <div className="cs-meta-item">
                <span className="cs-meta-kicker">YEAR</span>
                <strong className="cs-meta-val">{study.year}</strong>
              </div>
              <div className="cs-meta-item">
                <span className="cs-meta-kicker">TYPE</span>
                <strong className="cs-meta-val">{study.category.toUpperCase()}</strong>
              </div>
            </div>

            {/* Circular Spinning Stamp Badge */}
            <div className="cs-stamp-badge" aria-hidden="true">
              <svg viewBox="0 0 140 140">
                <path
                  d="M 70, 70 m -50, 0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0"
                  id="stampPath"
                />
                <text>
                  <textPath href="#stampPath">
                    {(study.badgeText || "GOOD FOOD ✦ GOOD MOOD ✦ ").repeat(2)}
                  </textPath>
                </text>
              </svg>
            </div>

            {/* Curved Arrow pointer */}
            <svg
              className="cs-curved-arrow"
              viewBox="0 0 120 70"
              aria-hidden="true"
            >
              <path
                d="M 110,10 Q 60,6 20,48"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path d="M 16,40 L 20,50 L 30,46" fill="currentColor" />
            </svg>

            {/* 3D Angled Browser Showcase Card */}
            <div className="cs-perspective-browser">
              <div className="cs-browser-bar">
                <span className="cs-dot cs-dot-red" />
                <span className="cs-dot cs-dot-yellow" />
                <span className="cs-dot cs-dot-green" />
                <span className="cs-browser-url">{study.title.toLowerCase().replace(/\s+/g, "")}.com</span>
              </div>
              <div className="cs-browser-frame">
                <img
                  alt={study.title}
                  loading="eager"
                  src={study.experience?.desktopImg || project.image}
                />
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 01: THE BRIEF
            ========================================================= */}
        <section className="cs-block cs-brief-section">
          <div className="cs-split-head">
            <div className="cs-split-title">
              <span className="cs-eyebrow">
                <i className="cs-dash" /> 01 / PROJECT OVERVIEW
              </span>
              <h2 className="cs-h2">
                THE
                <br />
                BRIEF
              </h2>
            </div>
            <div className="cs-split-desc">
              <p>{study.brief.description}</p>
            </div>
          </div>

          {/* 4 Metadata Cards */}
          <div className="cs-meta-grid">
            <div className="cs-meta-card">
              <span className="cs-card-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </span>
              <span className="cs-card-label">CLIENT</span>
              <strong className="cs-card-value">{study.brief.client}</strong>
            </div>

            <div className="cs-meta-card">
              <span className="cs-card-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </span>
              <span className="cs-card-label">TIMELINE</span>
              <strong className="cs-card-value">{study.brief.timeline}</strong>
            </div>

            <div className="cs-meta-card">
              <span className="cs-card-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
              </span>
              <span className="cs-card-label">SERVICES</span>
              <strong className="cs-card-value">{study.brief.services}</strong>
            </div>

            <div className="cs-meta-card">
              <span className="cs-card-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
              </span>
              <span className="cs-card-label">PLATFORM</span>
              <strong className="cs-card-value">{study.brief.platform}</strong>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 02: THE EXPERIENCE (Dual Devices)
            ========================================================= */}
        <section className="cs-block cs-experience-section">
          <div className="cs-exp-header">
            <span className="cs-eyebrow">
              <i className="cs-dash" /> 02 / THE EXPERIENCE
            </span>
            <div className="cs-handwritten-note">
              <span>{study.experience.tagline}</span>
              <svg viewBox="0 0 60 40" aria-hidden="true">
                <path d="M 5,5 Q 35,5 45,35" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M 38,30 L 45,37 L 52,28" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
          </div>

          {/* Dual Mockups Frame: Laptop + Mobile side-by-side */}
          <div className="cs-devices-stage">
            {/* Desktop Laptop Frame */}
            <div className="cs-laptop-mockup">
              <div className="cs-laptop-screen">
                <div className="cs-laptop-camera" />
                <img
                  alt="Desktop website experience"
                  loading="lazy"
                  src={study.experience.desktopImg}
                />
              </div>
              <div className="cs-laptop-base" />
            </div>

            {/* Mobile Phone Mockup */}
            <div className="cs-phone-mockup">
              <div className="cs-phone-notch" />
              <div className="cs-phone-screen">
                <img
                  alt="Mobile phone experience"
                  loading="lazy"
                  src={study.experience.mobileImg}
                />
              </div>
            </div>
          </div>

          <div className="cs-devices-caption">
            <span>{study.experience.caption}</span>
          </div>
        </section>

        {/* =========================================================
            SECTION 03: THE CHALLENGE
            ========================================================= */}
        <section className="cs-block cs-challenge-section">
          <div className="cs-split-head">
            <div className="cs-split-title">
              <span className="cs-eyebrow">
                <i className="cs-dash" /> 03 / THE CHALLENGE
              </span>
              <h2 className="cs-h2">
                THE
                <br />
                CHALLENGE
              </h2>
            </div>
          </div>

          {/* 3 Numbered Challenge Cards */}
          <div className="cs-challenge-grid">
            {study.challenges.map((c) => (
              <div className="cs-challenge-card" key={c.number}>
                <span className="cs-card-num">({c.number})</span>
                <h3>{c.title}</h3>
                <p>{c.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================
            SECTION 04: VISUAL DIRECTION
            ========================================================= */}
        <section className="cs-block cs-visual-section">
          <div className="cs-split-head">
            <div className="cs-split-title">
              <span className="cs-eyebrow">
                <i className="cs-dash" /> 04 / DESIGN DIRECTION
              </span>
              <h2 className="cs-h2">
                VISUAL
                <br />
                DIRECTION
              </h2>
            </div>
            <div className="cs-split-desc">
              <p>{study.visualDirection.description}</p>
            </div>
          </div>

          {/* Color Palette Circular Swatches */}
          <div className="cs-colors-row">
            {study.visualDirection.colors.map((c) => {
              const isCopied = copiedHex === c.hex
              return (
                <button
                  aria-label={`Copy hex code ${c.hex}`}
                  className="cs-color-circle-btn"
                  key={c.hex}
                  onClick={() => copyColor(c.hex)}
                  type="button"
                >
                  <div
                    className="cs-color-disc"
                    style={{ backgroundColor: c.hex }}
                  >
                    <span className="cs-disc-tip">
                      {isCopied ? "COPIED" : "COPY"}
                    </span>
                  </div>
                  <strong className="cs-color-name">{c.name}</strong>
                  <span className="cs-color-hex">{c.hex}</span>
                </button>
              )
            })}
          </div>

          {/* Lower Spec Row: Typography, UI Elements, Sample Item Card */}
          <div className="cs-design-subgrid">
            {/* Typeface Block */}
            <div className="cs-design-card cs-card-type">
              <span className="cs-sub-label">TYPEFACE (SIMILAR STYLE)</span>
              <div className="cs-type-lead">
                <span className="cs-giant-glyph">Aa</span>
                <div>
                  <strong>{study.visualDirection.typeface.name}</strong>
                  <span>{study.visualDirection.typeface.weights}</span>
                </div>
              </div>
            </div>

            {/* UI Elements Block */}
            <div className="cs-design-card cs-card-ui">
              <span className="cs-sub-label">UI ELEMENTS</span>
              <div className="cs-ui-row">
                <button className="cs-sample-btn" type="button">
                  Button <span>→</span>
                </button>
                <button className="cs-sample-circle-btn" type="button">
                  →
                </button>
              </div>
            </div>

            {/* Menu Item Sample Card */}
            {study.visualDirection.sampleCard && (
              <div className="cs-design-card cs-card-menu-item">
                <span className="cs-sub-label">
                  {study.visualDirection.sampleCard.title}
                </span>
                <div className="cs-menu-item-row">
                  <p>{study.visualDirection.sampleCard.description}</p>
                  <img
                    alt={study.visualDirection.sampleCard.title}
                    className="cs-menu-thumb"
                    src={study.visualDirection.sampleCard.image}
                  />
                </div>
              </div>
            )}
          </div>
        </section>

        {/* =========================================================
            SECTION 05: FROM IDEA TO REALITY (Engineering)
            ========================================================= */}
        <section className="cs-block cs-building-section">
          <div className="cs-split-head">
            <div className="cs-split-title">
              <span className="cs-eyebrow">
                <i className="cs-dash" /> 05 / BUILDING THE EXPERIENCE
              </span>
              <h2 className="cs-h2">
                FROM IDEA
                <br />
                TO REALITY
              </h2>
            </div>
            <div className="cs-split-desc">
              <p>{study.building.description}</p>
            </div>
          </div>

          {/* Architecture Flow Diagram & Code Window */}
          <div className="cs-flow-code-grid">
            {/* Left Flow Stack */}
            <div className="cs-flow-column">
              <div className="cs-flow-steps">
                {study.building.steps.map((s, idx) => (
                  <div className="cs-flow-step" key={s.tag}>
                    <div className="cs-step-box">
                      <span className="cs-step-tag">{s.tag}</span>
                      <strong className="cs-step-title">{s.title}</strong>
                      <span className="cs-step-desc">{s.desc}</span>
                    </div>
                    {idx < study.building.steps.length - 1 && (
                      <span className="cs-flow-arrow">→</span>
                    )}
                  </div>
                ))}
              </div>

              {/* 4 Feature Items */}
              <div className="cs-flow-features">
                {study.building.features.map((f) => (
                  <div className="cs-feature-item" key={f.title}>
                    <span className="cs-feat-icon">
                      {f.icon === "device" && (
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="2" y="3" width="20" height="14" rx="2" />
                          <line x1="12" y1="17" x2="12" y2="21" />
                        </svg>
                      )}
                      {f.icon === "cms" && (
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                      )}
                      {f.icon === "speed" && (
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                        </svg>
                      )}
                      {f.icon === "seo" && (
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="11" cy="11" r="8" />
                          <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                      )}
                    </span>
                    <div>
                      <strong>{f.title}</strong>
                      <span>{f.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Code Editor Window */}
            <div className="cs-code-editor">
              <div className="cs-code-header">
                <div className="cs-code-dots">
                  <span className="cs-dot cs-dot-red" />
                  <span className="cs-dot cs-dot-yellow" />
                  <span className="cs-dot cs-dot-green" />
                </div>
                <div className="cs-code-tabs">
                  <span className="cs-tab cs-tab-active">{study.building.codeFile}</span>
                  <span className="cs-tab">menu.tsx</span>
                </div>
              </div>
              <pre className="cs-code-body">
                <code>{study.building.codeSnippet}</code>
              </pre>
              <div className="cs-code-badge-note">
                <span>CLEAN CODE BETTER WEBSITES</span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 06: THE OUTCOME
            ========================================================= */}
        <section className="cs-block cs-outcome-section">
          <div className="cs-split-head">
            <div className="cs-split-title">
              <span className="cs-eyebrow">
                <i className="cs-dash" /> 06 / THE OUTCOME
              </span>
              <h2 className="cs-h2">
                THE
                <br />
                OUTCOME
              </h2>
            </div>
            <div className="cs-split-desc">
              <p>{study.outcome.description}</p>
            </div>
          </div>

          {/* 3 Outcome Benefit Badges */}
          <div className="cs-outcome-badges">
            {study.outcome.highlights.map((h) => (
              <div className="cs-outcome-card" key={h.title}>
                <span className="cs-outcome-icon">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <div>
                  <strong>{h.title}</strong>
                  <span>{h.desc}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Wide Panoramic Perspective Gallery */}
          <div className="cs-panoramic-gallery">
            {study.outcome.galleryImages.map((img) => (
              <div className="cs-pano-card" key={img.title}>
                <img alt={img.title} loading="lazy" src={img.url} />
                <div className="cs-pano-overlay">
                  <strong>{img.title}</strong>
                  <span>{img.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================
            SECTION 07: FOOTER CTA
            ========================================================= */}
        <footer className="cs-block cs-cta-section">
          <div className="cs-cta-box">
            <div className="cs-cta-left">
              <span className="cs-eyebrow">
                <i className="cs-dash" /> 07 / LET&apos;S WORK TOGETHER
              </span>
              <h2 className="cs-cta-title">
                HAVE A PROJECT
                <br />
                IN MIND?
              </h2>
            </div>

            <div className="cs-cta-right">
              <div className="cs-cta-action-group">
                <span className="cs-cta-text">
                  LET&apos;S BUILD
                  <br />
                  SOMETHING THAT WORKS.
                </span>
                <a
                  className="cs-cta-circle-btn"
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    onClose()
                    const contact = document.querySelector("#contact")
                    contact?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  <ArrowUpRight />
                </a>
              </div>

              {/* Next Project Switcher Button */}
              <div className="cs-cta-subnav">
                <button
                  className="cs-next-btn"
                  onClick={() => onSelectProject(nextProject)}
                  type="button"
                >
                  <span>Next Case Study:</span>
                  <strong>
                    {nextProject.title} ({nextProject.number}) →
                  </strong>
                </button>
                <button
                  className="cs-return-link"
                  onClick={onClose}
                  type="button"
                >
                  ← Return to Portfolio
                </button>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
