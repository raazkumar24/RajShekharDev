import { SectionLabel } from "../common/SectionLabel"
import { ArrowUpRight } from "../common/Icon"
import { projects } from "../../data/portfolioData"
import type { Project } from "../../types/portfolio"

interface WorksProps {
  onSelectProject?: (project: Project) => void
}

export function Works({ onSelectProject }: WorksProps) {
  return (
    <section className="work" data-section id="work">
      <div className="work-ghost" aria-hidden="true">
        SELECTED WORKS ✦ SELECTED WORKS
      </div>
      <div className="work-hud" aria-hidden="true">
        <span className="work-counter">
          <b>01</b> / {String(projects.length).padStart(2, "0")}
        </span>
        <span className="work-progress">
          <i />
        </span>
      </div>
      <div className="work-track">
        <div className="work-intro">
          <SectionLabel number="02">Featured projects</SectionLabel>
          <h2>
            Selected
            <br />
            <span>works.</span>
          </h2>
          <p>
            Products, platforms, and experiments where design intent and engineering quality
            carry equal weight.
          </p>
          <span className="work-hint">
            Keep scrolling <ArrowUpRight />
          </span>
        </div>
        {projects.map((project) => (
          <a
            className="project-card"
            data-cursor
            href={`#case-study-${project.number}`}
            key={project.number}
            onClick={(e) => {
              if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return
              e.preventDefault()
              if (onSelectProject) {
                onSelectProject(project)
              }
            }}
          >
            <div className="project-media">
              <img alt={project.alt} loading="lazy" src={project.image} />
            </div>
            <div className="project-shade" aria-hidden="true" />
            <div className="project-top">
              <span className="project-index">({project.number})</span>
              <span className="project-year">
                {project.category} — {project.year}
              </span>
              <span className="project-case-cue">
                Case Study <ArrowUpRight />
              </span>
            </div>
            <div className="project-bottom">
              <h3>{project.title}</h3>
              <div className="project-reveal">
                <p>{project.description}</p>
                <ul>
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </div>
          </a>
        ))}
        <a className="work-more" href="#contact">
          <span>We could keep going.</span>
          <strong>
            Let&apos;s build
            <br />
            yours next
          </strong>
          <i>
            <ArrowUpRight />
          </i>
        </a>
      </div>
    </section>
  )
}

