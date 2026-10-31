import { useState } from "react"
import type { FormEvent } from "react"
import type { EnquiryForm, FormStatus } from "../../types/portfolio"
import { budgetOptions, EMAIL, serviceOptions, socials } from "../../data/portfolioData"
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
  message: "",
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
    `Hi Raj,\n\n${form.message}\n\nBudget: ${form.budget || "Not sure yet"}\n\n— ${form.name} (${form.email})`,
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

        <form className="contact-form" data-rise id="enquiry" noValidate onSubmit={handleSubmit}>
          {status === "sent" ? (
            <div className="success-message" role="status">
              <svg aria-hidden="true" className="success-check" viewBox="0 0 64 64">
                <circle cx="32" cy="32" r="29" />
                <path d="m20 33 8 8 16-18" />
              </svg>
              <span>Brief received</span>
              <h3>Thanks, {form.name.trim().split(" ")[0]}.</h3>
              <p>
                I&apos;ll review your note and reply within 48 hours. Want it in my inbox right now?
                Send the same brief from your email app.
              </p>
              <div className="success-actions">
                <a className="form-button" href={mailtoHref}>
                  Open in email app <ArrowUpRight />
                </a>
                <button className="text-button" onClick={resetForm} type="button">
                  Start a new brief
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="form-heading">
                <p>Project brief</p>
                <span>{filledSteps} / 4 complete</span>
              </div>
              <div className="form-progress" aria-hidden="true">
                <i style={{ transform: `scaleX(${filledSteps / 4})` }} />
              </div>

              <div className={errors.name ? "field has-error" : "field"}>
                <label htmlFor="enquiry-name">01 / Your name</label>
                <input
                  aria-describedby={errors.name ? "enquiry-name-error" : undefined}
                  aria-invalid={Boolean(errors.name)}
                  autoComplete="name"
                  data-field="name"
                  id="enquiry-name"
                  onChange={(event) => updateField("name", event.target.value)}
                  placeholder="Type your name"
                  type="text"
                  value={form.name}
                />
                {errors.name && (
                  <p className="field-error" id="enquiry-name-error">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className={errors.email ? "field has-error" : "field"}>
                <label htmlFor="enquiry-email">02 / Email address</label>
                <input
                  aria-describedby={errors.email ? "enquiry-email-error" : undefined}
                  aria-invalid={Boolean(errors.email)}
                  autoComplete="email"
                  data-field="email"
                  id="enquiry-email"
                  onChange={(event) => updateField("email", event.target.value)}
                  placeholder="you@company.com"
                  type="email"
                  value={form.email}
                />
                {errors.email && (
                  <p className="field-error" id="enquiry-email-error">
                    {errors.email}
                  </p>
                )}
              </div>

              <fieldset className={errors.services ? "field has-error" : "field"}>
                <legend>03 / What do you need?</legend>
                <div className="chips">
                  {serviceOptions.map((option, index) => (
                    <button
                      aria-pressed={form.services.includes(option)}
                      className="chip"
                      data-field={index === 0 ? "services" : undefined}
                      key={option}
                      onClick={() => toggleService(option)}
                      type="button"
                    >
                      <i aria-hidden="true" />
                      {option}
                    </button>
                  ))}
                </div>
                {errors.services && <p className="field-error">{errors.services}</p>}
              </fieldset>

              <fieldset className="field">
                <legend>
                  04 / Budget <em>(optional)</em>
                </legend>
                <div className="chips">
                  {budgetOptions.map((option) => (
                    <button
                      aria-pressed={form.budget === option}
                      className="chip chip--plain"
                      key={option}
                      onClick={() => updateField("budget", form.budget === option ? "" : option)}
                      type="button"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </fieldset>

              <div className={errors.message ? "field has-error" : "field"}>
                <label htmlFor="enquiry-message">05 / Tell me about the project</label>
                <textarea
                  aria-describedby={errors.message ? "enquiry-message-error" : undefined}
                  aria-invalid={Boolean(errors.message)}
                  data-field="message"
                  id="enquiry-message"
                  maxLength={600}
                  onChange={(event) => updateField("message", event.target.value)}
                  placeholder="A little about your idea, timeline, and goals..."
                  rows={3}
                  value={form.message}
                />
                <div className="field-foot">
                  {errors.message ? (
                    <p className="field-error" id="enquiry-message-error">
                      {errors.message}
                    </p>
                  ) : (
                    <span />
                  )}
                  <span className="char-count">{form.message.length} / 600</span>
                </div>
              </div>

              <button
                className={status === "sending" ? "form-button is-sending" : "form-button"}
                disabled={status === "sending"}
                type="submit"
              >
                <span>{status === "sending" ? "Sending brief…" : "Send enquiry"}</span>
                {status === "sending" ? <i className="spinner" aria-hidden="true" /> : <ArrowUpRight />}
              </button>
            </>
          )}
        </form>
      </div>

      <Footer />
    </section>
  )
}

