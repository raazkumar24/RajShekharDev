import { useEffect, useRef, useState } from "react"
import type { Project } from "../../types/portfolio"
import { caseStudies } from "../../data/caseStudiesData"
import { ArrowUpRight, Icon } from "../common/Icon"
import { setupCaseStudyScroll } from "./caseStudyScroll"

interface CaseStudySectionProps {
  project: Project
  onSelectProject: (project: Project) => void
  allProjects: Project[]
  onBack?: () => void
  onHeader?: (header: { hidden: boolean; scrolled: boolean }) => void
}

export function CaseStudySection({
  project,
  onSelectProject,
  allProjects,
  onBack,
  onHeader,
}: CaseStudySectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const [copiedHex, setCopiedHex] = useState<string | null>(null)
  const [activeCodeTab, setActiveCodeTab] = useState<"page" | "menu">("page")

  const study = caseStudies[project.number] || caseStudies["01"]

  // Mount GSAP scroll animations & Lenis smooth scroll
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    window.scrollTo(0, 0)
    const cleanup = setupCaseStudyScroll({
      root: el,
      onHeader,
    })
    return () => cleanup?.()
  }, [project.number, onHeader])

  const copyColor = (hex: string) => {
    navigator.clipboard?.writeText(hex).then(() => {
      setCopiedHex(hex)
      window.setTimeout(() => setCopiedHex(null), 1800)
    })
  }

  // Split title for solid + stroke effect
  const titleSolid = study.titleSolid || study.title.split(" ")[0]
  const titleStroke =
    study.titleStroke || study.title.split(" ").slice(1).join(" ") || "VRINDAVAN"

  return (
    <section
      aria-label={`${study.title} case study`}
      className="case-study-section cs-page-view"
      data-section
      id="case-study"
      ref={sectionRef}
    >
      {/* Ambient background glow */}
      <div aria-hidden="true" className="cs-ambient-glow" />

      {/* Floating Vertical Chapter Rail on the Left */}
      <nav aria-label="Case study chapters" className="case-study-rail">
        <div className="cs-rail-track">
          {[
            { id: "cs-hero", label: "01", name: "Overview" },
            { id: "cs-brief", label: "02", name: "The Brief" },
            { id: "cs-experience", label: "03", name: "Experience" },
            { id: "cs-challenge", label: "04", name: "Challenge" },
            { id: "cs-visual", label: "05", name: "Visuals" },
            { id: "cs-building", label: "06", name: "Build" },
            { id: "cs-outcome", label: "07", name: "Outcome" },
          ].map((ch) => (
            <a
              aria-label={`Go to ${ch.name}`}
              className="cs-rail-item"
              data-chapter={ch.label}
              href={`#${ch.id}`}
              key={ch.id}
            >
              <span className="cs-rail-num">{ch.label}</span>
              <span className="cs-rail-dot" />
              <span className="cs-rail-tooltip">{ch.name}</span>
            </a>
          ))}
        </div>
      </nav>

      {/* Project Switcher & Back Button Capsule Bar */}
      <div className="cs-top-capsule-bar">
        <div className="cs-top-capsule-inner">
          {onBack && (
            <button
              aria-label="Back to all projects"
              className="cs-capsule-back-btn"
              onClick={onBack}
              type="button"
            >
              <span className="cs-back-arrow">←</span>
              <span>ALL PROJECTS</span>
            </button>
          )}

          <div className="cs-capsule-center">
            <span className="cs-capsule-kicker">PROJECT:</span>
            <div className="cs-capsule-pills">
              {allProjects.map((p) => {
                const isActive = p.number === project.number
                return (
                  <button
                    className={`cs-capsule-pill ${isActive ? "is-active" : ""}`}
                    key={p.number}
                    onClick={() => onSelectProject(p)}
                    type="button"
                  >
                    <i className="cs-capsule-dot" />
                    <span>
                      {p.number === "01"
                        ? "UDUPI VRINDAVAN"
                        : p.number === "02"
                          ? "PULSE COMMERCE"
                          : p.number === "03"
                            ? "ATLAS SAAS"
                            : "FORMA 3D"}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="cs-capsule-links-group">
            <a
              aria-label="Open case study in new tab"
              className="cs-capsule-tab-link"
              href={`#case-study-${project.number}`}
              rel="noreferrer"
              target="_blank"
            >
              <span>NEW TAB</span>
              <ArrowUpRight />
            </a>
            <a
              className="cs-capsule-live-link"
              href={study.liveUrl}
              rel="noreferrer"
              target="_blank"
            >
              <span>LIVE DEMO</span>
              <ArrowUpRight />
            </a>
          </div>
        </div>
      </div>

      <div className="cs-wrap">
        {/* =================================================================
            MASTER 2-COLUMN EDITORIAL SPREAD (MATCHING REFERENCE MOCKUP 1:1)
            Left Column: Hero + Brief + Experience
            Right Column: Challenge + Visual Direction + Building + Outcome
            ================================================================= */}
        <div className="cs-master-spread">
          {/* ===============================================================
              LEFT COLUMN
              =============================================================== */}
          <div className="cs-col-left">
            {/* CHAPTER: HERO */}
            <div className="cs-card-panel cs-hero-card" id="cs-hero">
              <div className="cs-eyebrow-row">
                <span className="cs-eyebrow">
                  <i className="cs-dash" /> WORKS / CASE STUDY {study.number}
                </span>
              </div>

              <h1 className="cs-giant-title">
                <span className="cs-title-solid">{titleSolid}</span>
                <span className="cs-title-stroke">{titleStroke}</span>
              </h1>

              <p className="cs-tagline">{study.tagline}</p>
              <p className="cs-hero-summary">{study.summary}</p>

              {/* Monospace Stadium Tech Pills (Matching user's pill references) */}
              <div className="cs-pill-row">
                {project.tags.map((tag) => (
                  <span className="cs-tech-pill" key={tag}>
                    {tag.toUpperCase()}
                  </span>
                ))}
              </div>

              {/* 3D Angled Perspective Browser Mockup */}
              <div className="cs-browser-stage">
                {/* Floating Specs Callout (Role, Year, Type) */}
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

                {/* Curved Red Arrow from specs to browser */}
                <svg
                  aria-hidden="true"
                  className="cs-curved-arrow"
                  viewBox="0 0 120 70"
                >
                  <path
                    d="M 110,12 Q 55,8 18,50"
                    fill="none"
                    stroke="#c4161c"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                  />
                  <path d="M 14,40 L 18,52 L 28,48" fill="#c4161c" />
                </svg>

                {/* Circular Spinning Stamp Badge */}
                <div aria-hidden="true" className="cs-stamp-badge">
                  <svg viewBox="0 0 140 140">
                    <path
                      d="M 70, 70 m -50, 0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0"
                      id="csStampPathHero"
                    />
                    <text>
                      <textPath href="#csStampPathHero">
                        {(study.badgeText || "GOOD FOOD ✦ GOOD MOOD ✦ ").repeat(2)}
                      </textPath>
                    </text>
                  </svg>
                </div>

                {/* The 3D Perspective Browser Card */}
                <div className="cs-perspective-browser">
                  <div className="cs-browser-bar">
                    <div className="cs-browser-dots">
                      <span className="cs-dot cs-dot-red" />
                      <span className="cs-dot cs-dot-yellow" />
                      <span className="cs-dot cs-dot-green" />
                    </div>
                    <div className="cs-browser-url-pill">
                      {study.title.toLowerCase().replace(/\s+/g, "")}.com
                    </div>
                  </div>

                  {/* Browser Live Page Rendering */}
                  <div className="cs-browser-content">
                    <div className="cs-site-nav">
                      <div className="cs-site-logo">
                        <span className="cs-logo-icon">🛕</span>
                        <span>Udupi Vrindavan</span>
                      </div>
                      <div className="cs-site-links">
                        <span>Home</span>
                        <span>Menu</span>
                        <span>About</span>
                        <span>Gallery</span>
                        <span>Blog</span>
                        <span>Contact</span>
                      </div>
                      <span className="cs-site-reserve-btn">Reserve Table</span>
                    </div>

                    <div className="cs-site-hero">
                      <div className="cs-site-hero-text">
                        <h3>Authentic South Indian Cuisine</h3>
                        <p>Traditional flavours. Modern experience. A taste of Udupi, always.</p>
                        <div className="cs-site-hero-btns">
                          <span className="cs-btn-yellow">View Menu</span>
                          <span className="cs-btn-dark">Book a Table</span>
                        </div>
                      </div>
                      <div className="cs-site-hero-visual">
                        <img
                          alt="Authentic South Indian Thali"
                          className="cs-site-food-img"
                          loading="eager"
                          src={
                            study.experience?.desktopImg ||
                            "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=1200&q=80"
                          }
                        />
                      </div>
                    </div>

                    <div className="cs-site-stats-bar">
                      <div className="cs-site-stat">
                        <strong>4.9 ★</strong>
                        <span>Customer Rating</span>
                      </div>
                      <div className="cs-site-stat">
                        <strong>600+</strong>
                        <span>Happy Customers</span>
                      </div>
                      <div className="cs-site-stat">
                        <strong>Pure Veg</strong>
                        <span>Restaurant</span>
                      </div>
                      <div className="cs-site-stat">
                        <strong>Authentic</strong>
                        <span>Udupi Taste</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CHAPTER 01: THE BRIEF */}
            <div className="cs-card-panel cs-brief-card" id="cs-brief">
              <div className="cs-section-header">
                <span className="cs-eyebrow">
                  <i className="cs-dash" /> 01 / PROJECT OVERVIEW
                </span>
                <h2 className="cs-h2">THE BRIEF</h2>
                <p className="cs-section-desc">{study.brief.description}</p>
              </div>

              {/* 4 Metadata Glass Cards */}
              <div className="cs-meta-grid">
                <div className="cs-meta-card">
                  <div className="cs-card-icon">
                    <Icon size={20}>monitor</Icon>
                  </div>
                  <span className="cs-card-label">CLIENT</span>
                  <strong className="cs-card-value">{study.brief.client}</strong>
                </div>

                <div className="cs-meta-card">
                  <div className="cs-card-icon">
                    <Icon size={20}>calendar</Icon>
                  </div>
                  <span className="cs-card-label">TIMELINE</span>
                  <strong className="cs-card-value">{study.brief.timeline}</strong>
                </div>

                <div className="cs-meta-card">
                  <div className="cs-card-icon">
                    <Icon size={20}>wrench</Icon>
                  </div>
                  <span className="cs-card-label">SERVICES</span>
                  <strong className="cs-card-value">{study.brief.services}</strong>
                </div>

                <div className="cs-meta-card">
                  <div className="cs-card-icon">
                    <Icon size={20}>grid</Icon>
                  </div>
                  <span className="cs-card-label">PLATFORM</span>
                  <strong className="cs-card-value">{study.brief.platform}</strong>
                </div>
              </div>
            </div>

            {/* CHAPTER 02: THE EXPERIENCE (Dual Devices on Volcanic Stone + Foliage) */}
            <div className="cs-card-panel cs-experience-card" id="cs-experience">
              <div className="cs-exp-header">
                <span className="cs-eyebrow">
                  <i className="cs-dash" /> 02 / THE EXPERIENCE
                </span>
                <div className="cs-handwritten-callout">
                  <span>{study.experience?.tagline || "SAME TASTE A BETTER EXPERIENCE"}</span>
                  <svg aria-hidden="true" viewBox="0 0 65 40">
                    <path
                      d="M 5,6 Q 42,6 55,30"
                      fill="none"
                      stroke="#ff4a52"
                      strokeLinecap="round"
                      strokeWidth="2.4"
                    />
                    <path d="M 46,27 L 57,32 L 60,22" fill="#ff4a52" />
                  </svg>
                </div>
              </div>

              {/* Photorealistic Hardware Stage */}
              <div className="cs-devices-stage">
                {/* Foreground Camera Blur Tropical Foliage */}
                <div aria-hidden="true" className="cs-ambient-foliage">
                  <svg viewBox="0 0 160 160">
                    <g fill="none">
                      <path
                        d="M 10,150 C 15,100 45,60 90,40 C 95,70 85,110 50,140 Z"
                        fill="url(#leafGrad1)"
                      />
                      <path
                        d="M 12,148 Q 50,100 88,42"
                        stroke="#43773a"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M 5,160 C 25,110 70,80 130,70 C 130,105 105,140 60,160 Z"
                        fill="url(#leafGrad2)"
                      />
                      <path
                        d="M 10,158 Q 70,115 126,72"
                        stroke="#33612b"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M 0,130 C 5,80 30,40 70,20 C 72,50 60,90 25,120 Z"
                        fill="url(#leafGrad1)"
                        opacity="0.85"
                      />
                    </g>
                    <defs>
                      <linearGradient id="leafGrad1" x1="0%" x2="100%" y1="100%" y2="0%">
                        <stop offset="0%" stopColor="#142b12" />
                        <stop offset="60%" stopColor="#255420" />
                        <stop offset="100%" stopColor="#3d7a34" />
                      </linearGradient>
                      <linearGradient id="leafGrad2" x1="0%" x2="100%" y1="100%" y2="0%">
                        <stop offset="0%" stopColor="#0d1f0b" />
                        <stop offset="50%" stopColor="#1e4519" />
                        <stop offset="100%" stopColor="#306927" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Dark Volcanic Stone Pedestal Base */}
                <div aria-hidden="true" className="cs-stone-pedestal" />

                {/* MacBook Pro Mockup */}
                <div className="cs-laptop-mockup">
                  <div className="cs-laptop-screen">
                    <div className="cs-laptop-camera" />
                    <div className="cs-laptop-inner-web">
                      <div className="cs-laptop-nav">
                        <span>🛕 Udupi Vrindavan</span>
                        <div className="cs-laptop-nav-links">
                          <span>Home</span>
                          <span>Menu</span>
                          <span>About</span>
                          <span>Gallery</span>
                          <span>Blog</span>
                          <span>Contact</span>
                        </div>
                        <span className="cs-laptop-pill-btn">Reserve Table</span>
                      </div>
                      <div className="cs-laptop-body">
                        <div className="cs-laptop-text">
                          <h4>Authentic South Indian Cuisine</h4>
                          <p>Traditional flavours. Modern experience. A taste of Udupi, always.</p>
                          <div className="cs-laptop-actions">
                            <span className="cs-pill-btn-gold">View Menu</span>
                            <span className="cs-pill-btn-ghost">Book a Table</span>
                          </div>
                        </div>
                        <img
                          alt="Culinary spread on laptop"
                          className="cs-laptop-thali-img"
                          loading="lazy"
                          src={
                            study.experience?.desktopImg ||
                            "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=1200&q=80"
                          }
                        />
                      </div>
                      <div className="cs-laptop-stat-row">
                        <span>4.9 ★ Rating</span>
                        <span>600+ Customers</span>
                        <span>Pure Veg</span>
                        <span>Authentic Taste</span>
                      </div>
                    </div>
                  </div>
                  <div className="cs-laptop-hinge" />
                  <div className="cs-laptop-base" />
                </div>

                {/* Overlapping iPhone Mockup */}
                <div className="cs-phone-mockup">
                  <div className="cs-phone-dynamic-island" />
                  <div className="cs-phone-screen">
                    <div className="cs-phone-header">
                      <span>🛕 Udupi Vrindavan</span>
                      <span>☰</span>
                    </div>
                    <div className="cs-phone-hero">
                      <h5>Authentic South Indian Cuisine</h5>
                      <p>Traditional flavours. Modern experience.</p>
                      <div className="cs-phone-btns">
                        <span>View Menu</span>
                        <span>Book a Table</span>
                      </div>
                    </div>
                    <img
                      alt="Dosa preview on mobile"
                      className="cs-phone-food-img"
                      loading="lazy"
                      src={
                        study.experience?.mobileImg ||
                        "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80"
                      }
                    />
                    <div className="cs-phone-grid">
                      <div>
                        <strong>4.9★</strong>
                        <span>Rating</span>
                      </div>
                      <div>
                        <strong>Pure Veg</strong>
                        <span>Resto</span>
                      </div>
                      <div>
                        <strong>Fast</strong>
                        <span>Delivery</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="cs-devices-caption">
                {study.experience?.caption || "WEBSITE PREVIEW — DESKTOP & MOBILE"}
              </p>
            </div>
          </div>

          {/* ===============================================================
              RIGHT COLUMN
              =============================================================== */}
          <div className="cs-col-right">
            {/* CHAPTER 03: THE CHALLENGE */}
            <div className="cs-card-panel cs-challenge-card-group" id="cs-challenge">
              <div className="cs-section-header">
                <span className="cs-eyebrow">
                  <i className="cs-dash" /> 03 / THE CHALLENGE
                </span>
                <h2 className="cs-h2">THE CHALLENGE</h2>
              </div>

              <div className="cs-challenge-grid">
                {study.challenges.map((card) => (
                  <div className="cs-challenge-card" key={card.num || card.number}>
                    <div className="cs-challenge-top">
                      <span className="cs-card-num">{card.num || card.number}</span>
                      <h3 className="cs-challenge-title">{card.title}</h3>
                    </div>
                    <p className="cs-challenge-text">{card.text || card.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CHAPTER 04: DESIGN DIRECTION */}
            <div className="cs-card-panel cs-visual-card" id="cs-visual">
              <div className="cs-section-header">
                <span className="cs-eyebrow">
                  <i className="cs-dash" /> 04 / DESIGN DIRECTION
                </span>
                <h2 className="cs-h2">VISUAL DIRECTION</h2>
                <p className="cs-section-desc">{study.visualDirection.description}</p>
              </div>

              {/* 4 Large Color Discs in a Row */}
              <div className="cs-colors-row">
                {study.visualDirection.colors.map((color) => (
                  <button
                    className="cs-color-disc-btn"
                    key={color.name}
                    onClick={() => copyColor(color.hex)}
                    title={`Click to copy ${color.hex}`}
                    type="button"
                  >
                    <div
                      className="cs-color-disc"
                      style={{ backgroundColor: color.hex }}
                    >
                      {copiedHex === color.hex && (
                        <span className="cs-copied-pill">COPIED!</span>
                      )}
                    </div>
                    <strong className="cs-color-name">{color.name}</strong>
                    <span className="cs-color-hex">{color.hex}</span>
                  </button>
                ))}
              </div>

              {/* Typeface + UI Elements + Menu Item Specs */}
              <div className="cs-design-specs-grid">
                {/* Typeface Box */}
                <div className="cs-spec-box">
                  <span className="cs-spec-label">TYPEFACE (SIMILAR STYLE)</span>
                  <div className="cs-type-lead">
                    <span className="cs-giant-glyph">Aa</span>
                    <div>
                      <strong>{study.visualDirection.typeface.name}</strong>
                      <span>{study.visualDirection.typeface.weights}</span>
                    </div>
                  </div>
                </div>

                {/* UI Elements Box */}
                <div className="cs-spec-box">
                  <span className="cs-spec-label">UI ELEMENTS</span>
                  <div className="cs-ui-row">
                    <button className="cs-sample-btn" type="button">
                      <span>Button</span>
                      <ArrowUpRight />
                    </button>
                    <button className="cs-sample-circle-btn" type="button">
                      <ArrowUpRight />
                    </button>
                  </div>
                </div>

                {/* Menu Item Box */}
                <div className="cs-spec-box cs-menu-item-box">
                  <span className="cs-spec-label">
                    {study.visualDirection.sampleCard.title || "Menu Item"}
                  </span>
                  <div className="cs-menu-item-row">
                    <p>{study.visualDirection.sampleCard.description || study.visualDirection.sampleCard.text}</p>
                    <img
                      alt="Traditional South Indian dish"
                      className="cs-menu-thumb"
                      loading="lazy"
                      src={study.visualDirection.sampleCard.image}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* CHAPTER 05: BUILDING THE EXPERIENCE */}
            <div className="cs-card-panel cs-building-card" id="cs-building">
              <div className="cs-section-header">
                <span className="cs-eyebrow">
                  <i className="cs-dash" /> BUILDING THE EXPERIENCE
                </span>
                <h2 className="cs-h2">FROM IDEA TO REALITY</h2>
                <p className="cs-section-desc">{study.building.description}</p>
              </div>

              <div className="cs-flow-code-grid">
                {/* Left: Architecture Flow & 4 Features */}
                <div className="cs-flow-col">
                  <div className="cs-flow-steps">
                    {study.building.steps.map((st, i) => (
                      <div className="cs-flow-step" key={st.tag}>
                        <div className="cs-step-box">
                          <span className="cs-step-tag">[{st.tag}]</span>
                          <strong className="cs-step-title">{st.title}</strong>
                          <span className="cs-step-desc">{st.desc}</span>
                        </div>
                        {i < study.building.steps.length - 1 && (
                          <span className="cs-flow-arrow">→</span>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="cs-flow-features">
                    {study.building.features.map((feat) => (
                      <div className="cs-feature-item" key={feat.title}>
                        <div className="cs-feat-icon">
                          <Icon size={16}>chevron-right</Icon>
                        </div>
                        <div>
                          <strong>{feat.title}</strong>
                          <span>{feat.desc}</span>
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
                      <button
                        className={`cs-tab ${activeCodeTab === "page" ? "cs-tab-active" : ""}`}
                        onClick={() => setActiveCodeTab("page")}
                        type="button"
                      >
                        page.tsx
                      </button>
                      <button
                        className={`cs-tab ${activeCodeTab === "menu" ? "cs-tab-active" : ""}`}
                        onClick={() => setActiveCodeTab("menu")}
                        type="button"
                      >
                        menu.tsx
                      </button>
                    </div>
                  </div>

                  <pre className="cs-code-body">
                    <code>
                      {activeCodeTab === "page"
                        ? study.building.codeSnippet
                        : `// menu.tsx - Headless API Fetcher
export async function getMenuItems() {
  const res = await fetch('https://api.udupivrindavan.com/v1/menu', {
    next: { revalidate: 3600 }
  });
  return res.json();
}`}
                    </code>
                  </pre>

                  {/* Red handwritten note */}
                  <div className="cs-code-badge-note">
                    <span>CLEAN CODE BETTER WEBSITES</span>
                    <svg aria-hidden="true" viewBox="0 0 50 25">
                      <path
                        d="M 5,5 Q 25,5 40,20"
                        fill="none"
                        stroke="#ff4a52"
                        strokeLinecap="round"
                        strokeWidth="2"
                      />
                      <path d="M 33,18 L 42,21 L 43,12" fill="#ff4a52" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* CHAPTER 06: THE OUTCOME */}
            <div className="cs-card-panel cs-outcome-card-group" id="cs-outcome">
              <div className="cs-section-header">
                <span className="cs-eyebrow">
                  <i className="cs-dash" /> THE OUTCOME
                </span>
                <h2 className="cs-h2">THE OUTCOME</h2>
                <p className="cs-section-desc">{study.outcome.description}</p>
              </div>

              {/* 3 Outcome Metric Cards */}
              <div className="cs-outcome-badges">
                {study.outcome.highlights.map((hl) => (
                  <div className="cs-outcome-card" key={hl.title}>
                    <div className="cs-outcome-icon">
                      <Icon size={20}>award</Icon>
                    </div>
                    <div>
                      <strong>{hl.title}</strong>
                      <span>{hl.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Panoramic Continuous Showcase Strip */}
              <div className="cs-panoramic-showcase">
                <div className="cs-showcase-card cs-showcase-lead">
                  <div className="cs-showcase-text">
                    <span className="cs-showcase-tag">ATMOSPHERE</span>
                    <h3>A Pure Vegetarian Dining Experience</h3>
                    <p>
                      A timeless haven where traditional Udupi gastronomy meets contemporary hospitality.
                    </p>
                    <span className="cs-showcase-pill">Visit Us</span>
                  </div>
                  <img
                    alt="Udupi Vrindavan dining hall"
                    className="cs-showcase-bg-img"
                    loading="lazy"
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
                  />
                </div>

                <div className="cs-showcase-card cs-showcase-dish">
                  <img
                    alt="Crispy Masala Dosa"
                    loading="lazy"
                    src="https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80"
                  />
                  <div className="cs-showcase-overlay">
                    <strong>Golden Masala Dosa</strong>
                    <span>Served with 3 homemade chutneys & sambar</span>
                  </div>
                </div>

                <div className="cs-showcase-card cs-showcase-dish">
                  <img
                    alt="Steamed Idli and Vada"
                    loading="lazy"
                    src="https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80"
                  />
                  <div className="cs-showcase-overlay">
                    <strong>Idli & Medu Vada</strong>
                    <span>Ghee roasted with fresh curry leaves</span>
                  </div>
                </div>

                <div className="cs-showcase-card cs-showcase-ambience">
                  <img
                    alt="Restaurant interior"
                    loading="lazy"
                    src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
                  />
                  <div className="cs-showcase-overlay">
                    <strong>Family Dining Lounge</strong>
                    <span>Warm ambiance & authentic hospitality</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===============================================================
            FULL-WIDTH BOTTOM CTA: 07 / LET'S WORK TOGETHER
            =============================================================== */}
        <div className="cs-footer-cta" id="cs-cta">
          <div className="cs-cta-inner">
            <div className="cs-cta-text">
              <span className="cs-eyebrow">
                <i className="cs-dash" /> 07 / LET&apos;S WORK TOGETHER
              </span>
              <h2 className="cs-cta-h2">HAVE A PROJECT IN MIND?</h2>
            </div>
            <div className="cs-cta-actions-group">
              {onBack && (
                <button
                  className="cs-cta-back-btn"
                  onClick={onBack}
                  type="button"
                >
                  <span className="cs-back-arrow">←</span>
                  <span>BACK TO PORTFOLIO</span>
                </button>
              )}
              <a className="cs-cta-button" href="#contact">
                <span>LET&apos;S BUILD SOMETHING THAT WORKS.</span>
                <i className="cs-cta-arrow-circle">
                  <ArrowUpRight />
                </i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
