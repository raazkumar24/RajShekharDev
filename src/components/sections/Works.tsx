import { useEffect, useRef, useState } from "react"
import type { CSSProperties, MouseEvent } from "react"
import { SectionLabel } from "../common/SectionLabel"
import { ArrowUpRight } from "../common/Icon"
import { projects } from "../../data/portfolioData"
import type { Project } from "../../types/portfolio"

interface WorksProps {
  onSelectProject?: (project: Project) => void
}

const total = String(projects.length).padStart(2, "0")
const years = projects.map((project) => Number(project.year))
const yearRange =
  Math.min(...years) === Math.max(...years)
    ? String(Math.min(...years))
    : `${Math.min(...years)} — ${Math.max(...years)}`

const hostOf = (url?: string) => {
  if (!url) return "localhost:5173"
  try {
    return new URL(url).host.replace(/^www\./, "")
  } catch {
    return url
  }
}

interface ProjectInfoProps {
  project: Project
  isActive: boolean
  onOpen: (event: MouseEvent<HTMLAnchorElement>) => void
}

function ProjectInfo({ project, isActive, onOpen }: ProjectInfoProps) {
  return (
    <div className={`wk-info ${isActive ? "is-active" : ""}`}>
      <p className="wk-kicker">
        <span>{project.category}</span>
        <span>{project.year}</span>
      </p>
      <h3>
        <span>{project.title}</span>
      </h3>
      <p className="wk-desc">{project.description}</p>
      <ul className="wk-tags" aria-label="Built with">
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <div className="wk-actions">
        <a className="wk-open" href={`#case-study-${project.number}`} onClick={onOpen}>
          Read the case study
          <i>
            <ArrowUpRight />
          </i>
        </a>
        {project.liveUrl && (
          <a className="wk-link" href={project.liveUrl} rel="noreferrer" target="_blank">
            Live site <ArrowUpRight />
          </a>
        )}
        {project.repoUrl && (
          <a className="wk-link" href={project.repoUrl} rel="noreferrer" target="_blank">
            Code <ArrowUpRight />
          </a>
        )}
      </div>
    </div>
  )
}

/** Drawn stand-in for projects whose real screens are not captured yet */
function ShotSketch({ title }: { title: string }) {
  return (
    <div className="wk-sketch" aria-hidden="true">
      <div className="wk-sketch-nav">
        <b>{title}</b>
        <span className="wk-sketch-search" />
        <span className="wk-sketch-cart">2</span>
      </div>
      <div className="wk-sketch-hero">
        <div>
          <i />
          <i />
          <i />
          <span className="wk-sketch-btn" />
        </div>
        <span className="wk-sketch-art">
          <em className="wk-sketch-note">Wireframe — screenshots coming soon</em>
        </span>
      </div>
      <div className="wk-sketch-grid">
        {["₹1,299", "₹899", "₹2,499", "₹649"].map((price) => (
          <div key={price}>
            <span />
            <i />
            <em>{price}</em>
          </div>
        ))}
      </div>
    </div>
  )
}

export function Works({ onSelectProject }: WorksProps) {
  const [active, setActive] = useState(0)
  const itemRefs = useRef<Array<HTMLElement | null>>([])

  // The project crossing the middle of the screen drives the sticky panel
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.index))
        })
      },
      { rootMargin: "-45% 0px -45% 0px" },
    )
    itemRefs.current.forEach((item) => item && observer.observe(item))
    return () => observer.disconnect()
  }, [])

  const open = (project: Project) => (event: MouseEvent<HTMLAnchorElement>) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.button === 1) return
    event.preventDefault()
    onSelectProject?.(project)
  }

  return (
    <section className="work" data-section id="work">
      <header className="wk-head">
        <SectionLabel number="02">Work</SectionLabel>
        <div className="wk-head-row">
          <h2 className="wk-title" data-split>
            Things I&apos;ve <span>built.</span>
          </h2>
          <div className="wk-head-side" data-rise>
            <p>
              A few things I&apos;ve designed and built — client work and personal projects. All of
              them are live, so open one and click around.
            </p>
            <span className="wk-count">
              {total} builds <i /> {yearRange}
            </span>
          </div>
        </div>
        <ol className="wk-index">
          {projects.map((project, index) => (
            <li key={project.number}>
              <a className={index === active ? "is-active" : ""} href={`#work-${project.number}`}>
                <span className="wk-index-num">{project.number}</span>
                <strong>{project.title}</strong>
                <em>{project.category}</em>
                <span className="wk-index-year">{project.year}</span>
                <ArrowUpRight />
              </a>
            </li>
          ))}
        </ol>
      </header>

      <div className="wk-stage">
        <aside className="wk-panel" aria-label="Project details">
          <div className="wk-panel-num" aria-hidden="true">
            <span className="wk-num-window">
              <span className="wk-num-roll" style={{ "--i": active } as CSSProperties}>
                {projects.map((project) => (
                  <b key={project.number}>{project.number}</b>
                ))}
              </span>
            </span>
            <small>/ {total}</small>
          </div>
          <div className="wk-panel-stack">
            {projects.map((project, index) => (
              <ProjectInfo
                isActive={index === active}
                key={project.number}
                onOpen={open(project)}
                project={project}
              />
            ))}
          </div>
          <div className="wk-ticks" aria-hidden="true">
            {projects.map((project, index) => (
              <i className={index === active ? "is-on" : index < active ? "is-done" : ""} key={project.number} />
            ))}
          </div>
        </aside>

        <div className="wk-shots">
          {projects.map((project, index) => (
            <article
              className={`wk-item ${index === active ? "is-active" : ""}`}
              data-index={index}
              id={`work-${project.number}`}
              key={project.number}
              ref={(node) => {
                itemRefs.current[index] = node
              }}
            >
              <a
                aria-label={`Open the ${project.title} case study`}
                className="wk-shot"
                data-cursor
                href={`#case-study-${project.number}`}
                onClick={open(project)}
              >
                <div className="wk-browser">
                  <div className="wk-browser-bar">
                    <span className="wk-dots" aria-hidden="true">
                      <i />
                      <i />
                      <i />
                    </span>
                    <span className="wk-url">{hostOf(project.liveUrl)}</span>
                    <span className="wk-live">Live</span>
                  </div>
                  <div className="wk-screen">
                    {project.screens ? (
                      <img alt={project.alt} loading="lazy" src={project.screens.desktop} />
                    ) : (
                      <ShotSketch title={project.title} />
                    )}
                  </div>
                </div>
                {project.screens?.mobile && (
                  <div className="wk-phone">
                    <div className="wk-phone-body">
                      <img alt="" loading="lazy" src={project.screens.mobile} />
                    </div>
                  </div>
                )}
                <span className="wk-sticker" aria-hidden="true">
                  <b>{project.number}</b>
                  Case study
                  <ArrowUpRight />
                </span>
              </a>
              <div className="wk-info-inline">
                <ProjectInfo isActive onOpen={open(project)} project={project} />
              </div>
            </article>
          ))}
        </div>
      </div>

      <a className="wk-more" data-rise href="#contact">
        <span className="wk-more-kicker">That&apos;s the list for now.</span>
        <strong>Got something in mind?</strong>
        <i>
          <ArrowUpRight />
        </i>
      </a>
    </section>
  )
}
