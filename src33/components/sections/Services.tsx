import { SectionLabel } from "../common/SectionLabel"
import { services } from "../../data/portfolioData"

export function Services() {
  return (
    <section className="services" data-section id="services">
      <div className="services-intro">
        <SectionLabel number="03">Services / This is my thing</SectionLabel>
        <h2 className="big-title" data-split>
          WHAT I DO
        </h2>
      </div>
      <div className="stack">
        {services.map((service, index) => (
          <article className={`stack-card stack-card--${index + 1}`} key={service.number}>
            <div className="stack-top">
              <span>({service.number})</span>
              <span>
                Service {index + 1} / {services.length}
              </span>
            </div>
            <h3>{service.title}</h3>
            <div className="stack-bottom">
              <p>{service.description}</p>
              <ul>
                {service.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

