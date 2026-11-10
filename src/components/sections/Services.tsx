import { SectionLabel } from "../common/SectionLabel"
import { ArrowUpRight } from "../common/Icon"
import { process, services } from "../../data/portfolioData"

export function Services() {
  return (
    <section className="services" data-section id="services">
      <div className="services-intro">
        <SectionLabel number="03">How I can help</SectionLabel>
        <h2 className="big-title" data-split>
          WHAT I DO
        </h2>
      </div>
      <div className="stack">
        {services.map((service, index) => (
          <article className={`stack-card stack-card--${index + 1}`} key={service.number}>
            <span aria-hidden="true" className="card-dim" />
            <div className="stack-top">
              <span>({service.number})</span>
              <span>
                Service {index + 1} / {services.length}
              </span>
            </div>
            <h3>{service.title}</h3>
            <div className="stack-bottom">
              <div className="stack-copy">
                <p>{service.description}</p>
                <ul>
                  {service.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
              <div className="stack-deliver">
                <span>Usually includes</span>
                <ol>
                  {service.deliverables.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              </div>
              <a className="stack-cta" href="#contact">
                <span className="roll" data-text="Ask about this">
                  Ask about this
                </span>
                <i>
                  <ArrowUpRight />
                </i>
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="process">
        <div className="process-head">
          <SectionLabel number="04">How a project usually goes</SectionLabel>
          <h2 className="big-title" data-split>
            HOW I WORK
          </h2>
          <p data-rise>
            Small steps, a live link you can check any time, and straight answers when you ask
            where things are.
          </p>
        </div>
        <ol className="process-steps">
          <span aria-hidden="true" className="process-line">
            <i />
          </span>
          {process.map((step) => (
            <li className="process-step" key={step.number}>
              <span className="process-dot">{step.number}</span>
              <span className="process-time">{step.duration}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
