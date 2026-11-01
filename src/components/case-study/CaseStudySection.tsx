import { useEffect, useRef, useState } from "react"
import type { CSSProperties, ReactNode } from "react"
import type { CaseStudyData, Project } from "../../types/portfolio"
import { caseStudies } from "../../data/caseStudiesData"
import { ArrowDown, ArrowUpRight, Icon } from "../common/Icon"
import { SectionLabel } from "../common/SectionLabel"
import { Footer } from "../layout/Footer"
import { setupCaseStudyScroll } from "./caseStudyScroll"

type HeaderState = { hidden: boolean; scrolled: boolean }

interface CaseStudySectionProps {
  project: Project
  allProjects: Project[]
  onSelectProject: (project: Project) => void
  onBack: () => void
  onHeader: (header: HeaderState) => void
}

const chapters = [
  { id: "cs-top", name: "Overview" },
  { id: "cs-brief", name: "The brief" },
  { id: "cs-experience", name: "Experience" },
  { id: "cs-challenge", name: "Challenge" },
  { id: "cs-visual", name: "Visuals" },
  { id: "cs-build", name: "The build" },
  { id: "cs-outcome", name: "Outcome" },
]

const featureIcons: Record<CaseStudyData["building"]["features"][number]["icon"], ReactNode> = {
  device: (
    <>
      <rect height="11" rx="2" width="14" x="2" y="4" />
      <path d="M6 19h6" />
      <rect height="11" rx="1.5" width="6" x="16" y="9" />
    </>
  ),
  cms: (
    <>
      <path d="M4 6h16M4 12h9M4 18h6" />
      <circle cx="18" cy="16" r="3" />
    </>
  ),
  speed: <path d="M13 2 4 14h7l-1 8 9-12h-7z" />,
  seo: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5M8 11h6M11 8v6" />
    </>
  ),
}

/** True when dark text reads better than white on this colour (WCAG contrast). */
function isLightColor(hex: string) {
  const value = parseInt(hex.replace("#", ""), 16)
  const channel = (shift: number) => {
    const c = ((value >> shift) & 255) / 255
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4
  }
  const luminance = 0.2126 * channel(16) + 0.7152 * channel(8) + 0.0722 * channel(0)
  return (luminance + 0.05) / 0.05 > 1.05 / (luminance + 0.05)
}

function hostOf(url: string) {
  try {
    return new URL(url).host
  } catch {
    return url
  }
}

const TOKEN =
  /(\/\/.*$)|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)|\b(import|from|export|async|function|return|await|const|let|if|throw|new|type)\b|\b([A-Za-z_$][\w$]*)(?=\()/g

/** Tiny syntax highlighter: comments, strings, keywords and function calls. */
function highlight(line: string) {
  const parts: ReactNode[] = []
  let last = 0
  for (const match of line.matchAll(TOKEN)) {
    const index = match.index ?? 0
    if (index > last) parts.push(line.slice(last, index))
    const kind = match[1] ? "c" : match[2] ? "s" : match[3] ? "k" : "f"
    parts.push(
      <em className={kind} key={index}>
        {match[0]}
      </em>,
    )
    last = index + match[0].length
  }
  if (last < line.length) parts.push(line.slice(last))
  return parts.length ? parts : " "
}

export function CaseStudySection({
  project,
  allProjects,
  onSelectProject,
  onBack,
  onHeader,
}: CaseStudySectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const [copied, setCopied] = useState<string | null>(null)

  const study = caseStudies[project.number] ?? caseStudies["01"]
  const index = allProjects.findIndex((item) => item.number === project.number)
  const nextProject = allProjects[(index + 1) % allProjects.length]
  const titleSolid = study.titleSolid ?? study.title.split(" ")[0]
  const titleStroke = study.titleStroke ?? study.title.split(" ").slice(1).join(" ")
  // Concept projects are not deployed — show where they actually run
  const host = study.liveUrl ? hostOf(study.liveUrl) : "localhost:3000"
  const { visualDirection: visual, building, outcome } = study
  const bandText = `${[...project.tags, study.category].join(" / ").toUpperCase()} / `
  const codeLines = building.codeSnippet.split("\n")
  const screen = study.experience.screen

  useEffect(() => {
    const root = sectionRef.current
    if (!root) return
    return setupCaseStudyScroll({ root, onHeader })
  }, [onHeader])

  const copy = (value: string) => {
    navigator.clipboard
      ?.writeText(value)
      .then(() => {
        setCopied(value)
        window.setTimeout(() => setCopied((current) => (current === value ? null : current)), 1600)
      })
      .catch(() => undefined)
  }

  const facts = [
    { label: "Client", value: study.brief.client },
    { label: "Timeline", value: study.brief.timeline },
    { label: "Services", value: study.brief.services },
    { label: "Platform", value: study.brief.platform },
  ]

  return (
    <article aria-label={`${study.title} case study`} className="cs" id="case-study" ref={sectionRef}>
      {/* Chapter rail */}
      <nav aria-label="Case study chapters" className="cs-rail">
        {chapters.map((chapter, chapterIndex) => (
          <a href={`#${chapter.id}`} key={chapter.id}>
            <i />
            <span>0{chapterIndex + 1}</span>
            <em>{chapter.name}</em>
          </a>
        ))}
      </nav>

      {/* ---------- 00 · Hero ---------- */}
      <header className="cs-hero" id="cs-top">
        <div className="cs-hero-top cs-fade">
          <button className="cs-back" onClick={onBack} type="button">
            <span className="cs-back-icon" aria-hidden="true">
              <Icon size={16}>
                <path d="M19 12H5M11 6l-6 6 6 6" />
              </Icon>
            </span>
            <span className="roll" data-text="All works">
              All works
            </span>
          </button>
          <div aria-label="Switch case study" className="cs-switch" role="group">
            {allProjects.map((item) => (
              <button
                aria-pressed={item.number === project.number}
                className={item.number === project.number ? "is-active" : ""}
                key={item.number}
                onClick={() => item.number !== project.number && onSelectProject(item)}
                type="button"
              >
                <sup>{item.number}</sup>
                {item.title}
              </button>
            ))}
          </div>
        </div>

        <p className="mono-eyebrow cs-fade">
          <i /> Case study {study.number} / {String(allProjects.length).padStart(2, "0")}
        </p>
        <h1 className="cs-title">
          <span className="cs-title-solid">{titleSolid}</span>
          {titleStroke && <span className="cs-title-outline">{titleStroke}</span>}
        </h1>

        <div className="cs-hero-grid">
          <div className="cs-hero-copy cs-fade">
            <p className="cs-tagline">{study.tagline}</p>
            <p className="cs-summary">{study.summary}</p>
            <div className="cs-actions">
              {study.liveUrl && (
                <a className="cs-btn cs-btn--solid" data-magnetic href={study.liveUrl} rel="noreferrer" target="_blank">
                  <span className="roll" data-text="Live site">
                    Live site
                  </span>
                  <i>
                    <ArrowUpRight />
                  </i>
                </a>
              )}
              {study.githubUrl && (
                <a className="cs-btn" href={study.githubUrl} rel="noreferrer" target="_blank">
                  <span className="roll" data-text="Source code">
                    Source code
                  </span>
                  <ArrowUpRight />
                </a>
              )}
              {!study.liveUrl && !study.githubUrl && (
                <p className="cs-private">Concept project — not public yet. Happy to walk you through it.</p>
              )}
            </div>
          </div>
          <dl className="cs-hero-meta cs-fade">
            <div>
              <dt>Role</dt>
              <dd>{study.role}</dd>
            </div>
            <div>
              <dt>Year</dt>
              <dd>{study.year}</dd>
            </div>
            <div>
              <dt>Type</dt>
              <dd>{study.category}</dd>
            </div>
            <div>
              <dt>Stack</dt>
              <dd>
                <ul className="cs-tags">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </div>

        <figure className="cs-cover">
          <div className="cs-cover-media">
            <img alt={project.alt} src={project.image} />
          </div>
          <figcaption>
            <span className="cs-cover-pill">
              {study.category} — {study.year}
            </span>
            <a className="cs-cover-cue" href="#cs-brief">
              Read the story <ArrowDown />
            </a>
          </figcaption>
          <div aria-hidden="true" className="cs-stamp">
            <svg viewBox="0 0 120 120">
              <defs>
                <path d="M60 60m-46 0a46 46 0 1 1 92 0a46 46 0 1 1-92 0" id={`cs-stamp-${study.number}`} />
              </defs>
              <text>
                <textPath href={`#cs-stamp-${study.number}`} lengthAdjust="spacing" textLength="285">
                  {study.badgeText ?? "DESIGN / BUILD / SHIP / "}
                </textPath>
              </text>
            </svg>
            <span>{study.number}</span>
          </div>
        </figure>
      </header>

      {/* ---------- 01 · Brief ---------- */}
      <section className="cs-brief" id="cs-brief">
        <SectionLabel number="01">The brief / Project overview</SectionLabel>
        <p className="cs-brief-text">
          {study.brief.description.split(" ").map((word, wordIndex) => (
            <span className="cs-word" key={`${word}-${wordIndex}`}>
              {word}{" "}
            </span>
          ))}
        </p>
        <dl className="cs-facts">
          {facts.map((fact, factIndex) => (
            <div className="cs-fact" key={fact.label}>
              <dt>
                0{factIndex + 1} / {fact.label}
              </dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <div aria-hidden="true" className="cs-band">
        <div className="cs-band-track">{bandText.repeat(6)}</div>
      </div>

      {/* ---------- 02 · Experience ---------- */}
      <section className="cs-experience" id="cs-experience">
        <SectionLabel number="02">The experience / Desktop &amp; mobile</SectionLabel>
        <h2 className="cs-heading cs-heading--outline" data-cs-split>
          {study.experience.tagline}
        </h2>

        <div className="cs-devices">
          <div className="cs-browser">
            <div className="cs-browser-bar">
              <span className="cs-dots">
                <i />
                <i />
                <i />
              </span>
              <p>
                <Icon size={11}>
                  <rect height="10" rx="2" width="14" x="5" y="11" />
                  <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                </Icon>
                {host}
              </p>
              <span />
            </div>
            <div className="cs-browser-view">
              <img alt={`${study.title} desktop preview`} loading="lazy" src={study.experience.desktopImg} />
              <div className="cs-screen-ui" aria-hidden="true">
                <div className="cs-screen-nav">
                  <strong>{study.title}</strong>
                  <span>
                    {screen.nav.map((item) => (
                      <i key={item}>{item}</i>
                    ))}
                  </span>
                  <b>{screen.primary}</b>
                </div>
                <div className="cs-screen-hero">
                  <p>{study.tagline}</p>
                  <span>
                    <b>
                      {screen.primary} <ArrowUpRight />
                    </b>
                    <b>{screen.secondary}</b>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="cs-phone">
            <span className="cs-phone-notch" />
            <div className="cs-phone-view">
              <img alt={`${study.title} mobile preview`} loading="lazy" src={study.experience.mobileImg} />
              <div className="cs-screen-ui cs-screen-ui--phone" aria-hidden="true">
                <div className="cs-screen-nav">
                  <strong>{titleSolid}</strong>
                  <em className="cs-screen-burger">
                    <i />
                    <i />
                  </em>
                </div>
                <div className="cs-screen-hero">
                  <p>{study.title}</p>
                  <span>
                    <b>{screen.primary}</b>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="cs-caption">
          <i /> {study.experience.caption}
        </p>
      </section>

      {/* ---------- 03 · Challenge ---------- */}
      <section className="cs-challenge" id="cs-challenge">
        <SectionLabel number="03">The challenge / What stood in the way</SectionLabel>
        <h2 className="cs-heading cs-heading--xl" data-cs-split>
          The challenge
        </h2>
        <div className="cs-stack">
          {study.challenges.map((challenge, challengeIndex) => (
            <article className={`cs-stack-card cs-stack-card--${challengeIndex + 1}`} key={challenge.number}>
              <div className="cs-stack-top">
                <span>({challenge.number})</span>
                <span>
                  Challenge {challengeIndex + 1} / {study.challenges.length}
                </span>
              </div>
              <h3>{challenge.title}</h3>
              <p>{challenge.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ---------- 04 · Visual direction ---------- */}
      <section className="cs-visual" id="cs-visual">
        <SectionLabel number="04">Design direction / Look &amp; feel</SectionLabel>
        <div className="cs-head-row">
          <h2 className="cs-heading" data-cs-split>
            Visual <span>direction</span>
          </h2>
          <p>{visual.description}</p>
        </div>

        <div className="cs-palette">
          {visual.colors.map((color) => (
            <button
              className={`cs-swatch ${isLightColor(color.hex) ? "is-light" : ""}`}
              key={color.hex}
              onClick={() => copy(color.hex)}
              style={{ "--swatch": color.hex } as CSSProperties}
              title={`Copy ${color.hex}`}
              type="button"
            >
              <span className="cs-swatch-name">{color.name}</span>
              <span className="cs-swatch-foot">
                <strong>{copied === color.hex ? "Copied!" : color.hex}</strong>
                {color.role && <em>{color.role}</em>}
              </span>
            </button>
          ))}
        </div>

        <div className={`cs-specimen ${visual.sampleCard ? "" : "cs-specimen--two"}`}>
          <div className="cs-spec cs-spec--type">
            <span className="cs-spec-label">Typeface</span>
            <p className="cs-glyph" aria-hidden="true">
              Aa
            </p>
            <div>
              <strong>{visual.typeface.name}</strong>
              <span>{visual.typeface.weights}</span>
            </div>
            <p className="cs-alphabet" aria-hidden="true">
              ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789
            </p>
          </div>

          <div className="cs-spec cs-spec--ui">
            <span className="cs-spec-label">UI elements</span>
            <div className="cs-ui-row">
              <span className="cs-ui-btn" style={{ background: visual.colors[0]?.hex }}>
                Primary <ArrowUpRight />
              </span>
              <span className="cs-ui-circle">
                <ArrowUpRight />
              </span>
            </div>
            <ul className="cs-tags">
              {project.tags.slice(0, 3).map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <p className="cs-spec-note">{visual.typeface.role}</p>
          </div>

          {visual.sampleCard && (
            <div className="cs-spec cs-spec--sample">
              <img alt="" loading="lazy" src={visual.sampleCard.image} />
              <div>
                <span className="cs-spec-label">{visual.sampleCard.title}</span>
                <p>{visual.sampleCard.description}</p>
                {visual.sampleCard.price && <strong>{visual.sampleCard.price}</strong>}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ---------- 05 · Build ---------- */}
      <section className="cs-build" id="cs-build">
        <SectionLabel number="05">The build / Idea to reality</SectionLabel>
        <div className="cs-head-row">
          <h2 className="cs-heading" data-cs-split>
            {building.title}
          </h2>
          <p>{building.description}</p>
        </div>

        <ol className="cs-flow">
          <span aria-hidden="true" className="cs-flow-line">
            <i />
          </span>
          {building.steps.map((step, stepIndex) => (
            <li key={step.tag}>
              <span className="cs-flow-dot">0{stepIndex + 1}</span>
              <span className="cs-flow-tag">{step.tag}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </li>
          ))}
        </ol>

        <div className="cs-build-grid">
          <ul className="cs-features">
            {building.features.map((feature) => (
              <li key={feature.title}>
                <span className="cs-feature-icon">
                  <Icon size={20}>{featureIcons[feature.icon]}</Icon>
                </span>
                <div>
                  <strong>{feature.title}</strong>
                  <span>{feature.desc}</span>
                </div>
              </li>
            ))}
          </ul>

          <div className="cs-code">
            <div className="cs-code-bar">
              <span className="cs-dots">
                <i />
                <i />
                <i />
              </span>
              <p>{building.codeFile}</p>
              <button onClick={() => copy(building.codeSnippet)} type="button">
                {copied === building.codeSnippet ? "Copied" : "Copy"}
              </button>
            </div>
            <pre className="cs-code-body">
              <code>
                {codeLines.map((line, lineIndex) => (
                  <span className="cs-code-line" key={lineIndex}>
                    <b>{lineIndex + 1}</b>
                    <span>{highlight(line)}</span>
                  </span>
                ))}
              </code>
            </pre>
            <div className="cs-code-status">
              <p>
                <i /> Ready
              </p>
              <p>UTF-8 • TypeScript</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 06 · Outcome ---------- */}
      <section className="cs-outcome" id="cs-outcome">
        <SectionLabel number="06">The outcome / What shipped</SectionLabel>
        <h2 className="cs-heading cs-heading--xl" data-cs-split>
          The outcome
        </h2>
        <p className="cs-outcome-lead" data-cs-rise>
          {outcome.description}
        </p>
        <ol className="cs-results">
          {outcome.highlights.map((highlightItem, resultIndex) => (
            <li key={highlightItem.title}>
              <span>(0{resultIndex + 1})</span>
              <h3 data-fill>{highlightItem.title}</h3>
              <p>{highlightItem.desc}</p>
            </li>
          ))}
        </ol>
        <div className={`cs-gallery cs-gallery--${Math.min(outcome.galleryImages.length, 3)}`}>
          {outcome.galleryImages.map((image) => (
            <figure key={image.url}>
              <div className="cs-gallery-media">
                <img alt={image.title} loading="lazy" src={image.url} />
              </div>
              <figcaption>
                <strong>{image.title}</strong>
                <span>{image.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ---------- 07 · Next ---------- */}
      <section className="cs-next">
        <p className="mono-eyebrow">
          <i /> Next case study
        </p>
        <button className="cs-next-card" data-cursor onClick={() => onSelectProject(nextProject)} type="button">
          <span className="cs-next-media">
            <img alt="" loading="lazy" src={nextProject.image} />
          </span>
          <span className="cs-next-shade" aria-hidden="true" />
          <span className="cs-next-top">
            <span>({nextProject.number})</span>
            <span className="cs-cover-pill">
              {nextProject.category} — {nextProject.year}
            </span>
          </span>
          <span className="cs-next-title">{nextProject.title}</span>
          <span className="cs-next-arrow" aria-hidden="true">
            <ArrowUpRight />
          </span>
        </button>

        <div className="cs-cta">
          <h2>
            Have a project
            <br />
            <span>in mind?</span>
          </h2>
          <div className="cs-cta-actions">
            <button className="cs-btn" onClick={onBack} type="button">
              <span className="roll" data-text="Back to works">
                Back to works
              </span>
            </button>
            <a className="cs-btn cs-btn--solid" data-magnetic href="#contact">
              <span className="roll" data-text="Let's talk">
                Let&apos;s talk
              </span>
              <i>
                <ArrowUpRight />
              </i>
            </a>
          </div>
        </div>
        <Footer topHref="#cs-top" />
      </section>
    </article>
  )
}
