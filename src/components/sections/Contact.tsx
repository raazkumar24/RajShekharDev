import { useState } from "react"
import type { FormEvent, ReactNode } from "react"
import type { EnquiryForm, FormStatus } from "../../types/portfolio"
import {
  budgetOptions,
  EMAIL,
  serviceOptions,
  socials,
  timelineOptions,
} from "../../data/portfolioData"
import { SectionLabel } from "../common/SectionLabel"
import { ArrowUpRight, Icon } from "../common/Icon"
import { Footer } from "../layout/Footer"

interface ContactProps {
  time: string
}

const emptyForm: EnquiryForm = {
  name: "",
  email: "",
  services: [],
  budget: "",
  timeline: "",
  message: "",
}

const serviceMeta: Record<string, { hint: string; icon: ReactNode }> = {
  "Web design": {
    hint: "UI, UX & art direction",
    icon: (
      <>
        <rect height="16" rx="2" width="20" x="2" y="4" />
        <path d="M2 9h20M8 20V9" />
      </>
    ),
  },
  Development: {
    hint: "React, Next.js & MERN",
    icon: <path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />,
  },
  "Creative systems": {
    hint: "Design systems & CMS",
    icon: (
      <>
        <rect height="7" rx="1.5" width="7" x="3" y="3" />
        <rect height="7" rx="1.5" width="7" x="14" y="3" />
        <rect height="7" rx="1.5" width="7" x="3" y="14" />
        <circle cx="17.5" cy="17.5" r="3.5" />
      </>
    ),
  },
  "Something else": {
    hint: "Tell me what you need",
    icon: <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6" />,
  },
}

export function Contact({ time }: ContactProps) {
  const [form, setForm] = useState<EnquiryForm>(emptyForm)
  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryForm, string>>>({})
  const [status, setStatus] = useState<FormStatus>("idle")
  const [copied, setCopied] = useState(false)

  const updateField = <K extends keyof EnquiryForm>(key: K, value: EnquiryForm[K]) => {
    setForm((current) => ({ ...current, [key]: value }))
    setErrors((current) => (current[key] ? { ...current, [key]: undefined } : current))
  }

  const toggleService = (service: string) => {
    updateField(
      "services",
      form.services.includes(service)
        ? form.services.filter((item) => item !== service)
        : [...form.services, service],
    )
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const next: Partial<Record<keyof EnquiryForm, string>> = {}
    if (!form.name.trim()) next.name = "Please tell me your name."
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = "That email doesn't look right."
    }
    if (form.services.length === 0) next.services = "Pick at least one option."
    if (form.message.trim().length < 10) {
      next.message = "A few more words, please (10+ characters)."
    }
    setErrors(next)
    if (Object.keys(next).length > 0) {
      const first = Object.keys(next)[0]
      event.currentTarget.querySelector<HTMLElement>(`[data-field="${first}"]`)?.focus()
      return
    }
    setStatus("sending")
    window.setTimeout(() => setStatus("sent"), 1100)
  }

  const resetForm = () => {
    setForm(emptyForm)
    setErrors({})
    setStatus("idle")
  }

  const copyEmail = () => {
    navigator.clipboard
      ?.writeText(EMAIL)
      .then(() => {
        setCopied(true)
        window.setTimeout(() => setCopied(false), 1800)
      })
      .catch(() => {
        window.location.href = `mailto:${EMAIL}`
      })
  }

  const filledSteps = [
    form.name.trim(),
    form.email.trim(),
    form.services.length > 0,
    form.message.trim().length >= 10,
  ].filter(Boolean).length

  const mailtoHref = `mailto:${EMAIL}?subject=${encodeURIComponent(
    `Project enquiry — ${form.services.join(", ") || "New project"}`,
  )}&body=${encodeURIComponent(
    `Hi Raj,\n\n${form.message}\n\nBudget: ${form.budget || "Not sure yet"}\nTimeline: ${form.timeline || "Flexible"}\n\n— ${form.name} (${form.email})`,
  )}`

  return (
    <section className="contact" data-section id="contact">
      <div className="talk">
        <p className="mono-eyebrow">
          <i /> Got a project in mind?
        </p>
        <h2 className="talk-title">LET&apos;S TALK</h2>
        <div className="talk-cta-wrap">
          <a aria-label="Start a project" className="talk-cta" data-magnetic href="#enquiry">
            <svg aria-hidden="true" viewBox="0 0 200 200">
              <defs>
                <path d="M100 100m-80 0a80 80 0 1 1 160 0a80 80 0 1 1-160 0" id="talk-ring" />
              </defs>
              <text>
                <textPath href="#talk-ring" lengthAdjust="spacing" textLength="496">
                  START A PROJECT • START A PROJECT •
                </textPath>
              </text>
            </svg>
            <span className="talk-cta-core">
              <ArrowUpRight />
            </span>
          </a>
        </div>
      </div>

      <div className="contact-layout">
        <div className="contact-copy" data-rise>
          <SectionLabel number="04">Contact / New business</SectionLabel>
          <h2>
            Got an idea
            <br />
            worth <span>building?</span>
          </h2>
          <p className="contact-lead">
            Tell me what you&apos;re building, where you need help, and what success looks like.
            Fill the brief, or just drop a line, whichever feels easier.
          </p>

          <div className="availability">
            <div className="availability-head">
              <div className="availability-status">
                <span className="availability-dot" />
                <span>Available for new projects</span>
              </div>
              <span className="availability-pill">2026 • OPEN</span>
            </div>
            <dl className="availability-stats">
              <div className="availability-item">
                <dt>01 / Response</dt>
                <dd>Within 48 hrs</dd>
              </div>
              <div className="availability-item">
                <dt>02 / Local time</dt>
                <dd>{time || "--:--"} IST</dd>
              </div>
              <div className="availability-item">
                <dt>03 / Location</dt>
                <dd>India • Remote</dd>
              </div>
            </dl>
          </div>

          <div className="contact-email">
            <span>Write directly</span>
            <div>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              <button
                aria-live="polite"
                className={copied ? "copy-button is-copied" : "copy-button"}
                onClick={copyEmail}
                type="button"
              >
                {copied ? (
                  <Icon size={14}>
                    <path d="m5 12 5 5 9-10" />
                  </Icon>
                ) : (
                  <Icon size={14}>
                    <rect height="13" rx="2" width="13" x="8" y="8" />
                    <path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3" />
                  </Icon>
                )}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
          </div>

          <ul className="contact-links">
            {socials.slice(0, 3).map((social, index) => (
              <li key={social.label}>
                <a href={social.href} rel="noreferrer" target="_blank">
                  <span className="contact-link-index">0{index + 1}</span>
                  <span className="contact-link-icon">
                    <Icon size={18}>{social.icon}</Icon>
                  </span>
                  <span className="contact-link-label">{social.label}</span>
                  <span className="contact-link-handle">@rajshekhar</span>
                  <span className="contact-link-arrow">
                    <ArrowUpRight />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form className="brief" id="enquiry" noValidate onSubmit={handleSubmit}>
          {status === "sent" ? (
            <div className="brief-success" role="status">
              <svg aria-hidden="true" className="success-check" viewBox="0 0 64 64">
                <circle cx="32" cy="32" r="29" />
                <path d="m20 33 8 8 16-18" />
              </svg>
              <span className="brief-kicker">Brief received</span>
              <h3>Thanks, {form.name.trim().split(" ")[0]}.</h3>
              <p>
                I&apos;ll review your note and reply within 48 hours. Want it in my inbox right now?
                Send the same brief from your email app.
              </p>
              <div className="brief-success-actions">
                <a className="brief-submit" href={mailtoHref}>
                  <span className="roll" data-text="Open in email app">
                    Open in email app
                  </span>
                  <i>
                    <ArrowUpRight />
                  </i>
                </a>
                <button className="text-button" onClick={resetForm} type="button">
                  Start a new brief
                </button>
              </div>
            </div>
          ) : (
            <>
              <header className="brief-head brief-anim">
                <div>
                  <span className="brief-kicker">
                    <i /> Project brief
                  </span>
                  <h3>
                    Tell me
                    <br />
                    <span>everything.</span>
                  </h3>
                </div>
                <div
                  aria-label={`${filledSteps} of 4 required steps complete`}
                  className="brief-meter"
                  role="img"
                >
                  <svg aria-hidden="true" viewBox="0 0 64 64">
                    <circle cx="32" cy="32" r="28" />
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      style={{ strokeDashoffset: 176 - (176 * filledSteps) / 4 }}
                    />
                  </svg>
                  <strong>
                    {filledSteps}
                    <small>/4</small>
                  </strong>
                </div>
              </header>

              <div className="brief-pair brief-anim">
                <div className={errors.name ? "brief-field has-error" : "brief-field"}>
                  <input
                    aria-describedby={errors.name ? "enquiry-name-error" : undefined}
                    aria-invalid={Boolean(errors.name)}
                    autoComplete="name"
                    data-field="name"
                    id="enquiry-name"
                    onChange={(event) => updateField("name", event.target.value)}
                    placeholder=" "
                    type="text"
                    value={form.name}
                  />
                  <label htmlFor="enquiry-name">
                    <b>01</b> Your name
                  </label>
                  {errors.name && (
                    <p className="field-error" id="enquiry-name-error">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div className={errors.email ? "brief-field has-error" : "brief-field"}>
                  <input
                    aria-describedby={errors.email ? "enquiry-email-error" : undefined}
                    aria-invalid={Boolean(errors.email)}
                    autoComplete="email"
                    data-field="email"
                    id="enquiry-email"
                    onChange={(event) => updateField("email", event.target.value)}
                    placeholder=" "
                    type="email"
                    value={form.email}
                  />
                  <label htmlFor="enquiry-email">
                    <b>02</b> Email address
                  </label>
                  {errors.email && (
                    <p className="field-error" id="enquiry-email-error">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <fieldset className={errors.services ? "brief-group has-error" : "brief-group"}>
                <legend className="brief-anim">
                  <b>03</b> What do you need? <em>Pick any</em>
                </legend>
                <div className="brief-tiles brief-anim">
                  {serviceOptions.map((option, index) => (
                    <button
                      aria-pressed={form.services.includes(option)}
                      className="brief-tile"
                      data-field={index === 0 ? "services" : undefined}
                      key={option}
                      onClick={() => toggleService(option)}
                      type="button"
                    >
                      <span className="brief-tile-icon">
                        <Icon size={20}>{serviceMeta[option]?.icon}</Icon>
                      </span>
                      <strong>{option}</strong>
                      <small>{serviceMeta[option]?.hint}</small>
                      <span aria-hidden="true" className="brief-tile-check">
                        <Icon size={12}>
                          <path d="m5 12 5 5 9-10" />
                        </Icon>
                      </span>
                    </button>
                  ))}
                </div>
                {errors.services && <p className="field-error">{errors.services}</p>}
              </fieldset>

              <div className="brief-pair brief-pair--options brief-anim">
                <fieldset className="brief-group">
                  <legend>
                    <b>04</b> Budget <em>Optional</em>
                  </legend>
                  <div className="brief-segments">
                    {budgetOptions.map((option) => (
                      <button
                        aria-pressed={form.budget === option}
                        key={option}
                        onClick={() => updateField("budget", form.budget === option ? "" : option)}
                        type="button"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </fieldset>
                <fieldset className="brief-group">
                  <legend>
                    <b>05</b> Timeline <em>Optional</em>
                  </legend>
                  <div className="brief-segments">
                    {timelineOptions.map((option) => (
                      <button
                        aria-pressed={form.timeline === option}
                        key={option}
                        onClick={() =>
                          updateField("timeline", form.timeline === option ? "" : option)
                        }
                        type="button"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </fieldset>
              </div>

              <div
                className={`brief-field brief-field--area brief-anim ${errors.message ? "has-error" : ""}`}
              >
                <textarea
                  aria-describedby={errors.message ? "enquiry-message-error" : undefined}
                  aria-invalid={Boolean(errors.message)}
                  data-field="message"
                  id="enquiry-message"
                  maxLength={600}
                  onChange={(event) => updateField("message", event.target.value)}
                  placeholder=" "
                  rows={4}
                  value={form.message}
                />
                <label htmlFor="enquiry-message">
                  <b>06</b> Tell me about the project
                </label>
                <div className="field-foot">
                  {errors.message ? (
                    <p className="field-error" id="enquiry-message-error">
                      {errors.message}
                    </p>
                  ) : (
                    <span className="brief-hint">Idea, goals, links — anything helps.</span>
                  )}
                  <span className="char-count">{form.message.length} / 600</span>
                </div>
              </div>

              <div className="brief-foot brief-anim">
                <button
                  className={status === "sending" ? "brief-submit is-sending" : "brief-submit"}
                  disabled={status === "sending"}
                  type="submit"
                >
                  <span className="roll" data-text={status === "sending" ? "Sending brief…" : "Send enquiry"}>
                    {status === "sending" ? "Sending brief…" : "Send enquiry"}
                  </span>
                  <i>{status === "sending" ? <span className="spinner" aria-hidden="true" /> : <ArrowUpRight />}</i>
                </button>
                <p>
                  <Icon size={14}>
                    <rect height="10" rx="2" width="14" x="5" y="11" />
                    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                  </Icon>
                  Reply within 48 hrs. Your details stay private.
                </p>
              </div>
            </>
          )}
        </form>
      </div>

      <Footer />
    </section>
  )
}

