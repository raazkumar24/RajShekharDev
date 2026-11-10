import { useState } from "react"
import type { FormEvent } from "react"
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


const today = new Intl.DateTimeFormat("en-IN", {
  day: "numeric",
  month: "short",
  year: "numeric",
}).format(new Date())

export function Contact({ time }: ContactProps) {
  const [form, setForm] = useState<EnquiryForm>(emptyForm)
  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryForm, string>>>({})
  const [status, setStatus] = useState<FormStatus>("idle")
  const [serverError, setServerError] = useState<string | null>(null)
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

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const next: Partial<Record<keyof EnquiryForm, string>> = {}
    if (!form.name.trim()) next.name = "I'd love to know your name."
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = "That email doesn't look right."
    }
    if (form.services.length === 0) next.services = "Tap at least one of the options above."
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
    setServerError(null)

    try {
      const accessKey =
        import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "2410c80d-9bea-48cd-9ce9-5b678f1cced4"

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: form.name.trim(),
          email: form.email.trim(),
          services: form.services.join(", "),
          budget: form.budget || "Not specified",
          timeline: form.timeline || "Not specified",
          message: form.message.trim(),
          subject: `New Project Enquiry from ${form.name.trim()}`,
          from_name: form.name.trim(),
        }),
      })

      const data = await response.json()
      if (response.ok && data.success) {
        setStatus("sent")
      } else {
        setStatus("error")
        setServerError(data.message || "Something went wrong. Please try again or reach out directly.")
      }
    } catch {
      setStatus("error")
      setServerError("Network error. Please check your connection or send via direct email.")
    }
  }

  const resetForm = () => {
    setForm(emptyForm)
    setErrors({})
    setStatus("idle")
    setServerError(null)
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
          <SectionLabel number="05">Say hello</SectionLabel>
          <h2>
            Got an idea
            <br />
            worth <span>building?</span>
          </h2>
          <p className="contact-lead">
            Tell me a little about your project and I&apos;ll get back to you within two days.
            Prefer plain email? That works too.
          </p>

          <div className="availability">
            <div className="availability-head">
              <div className="availability-status">
                <span className="availability-dot" />
                <span>Available for new projects</span>
              </div>
              <span className="availability-pill">IST • UTC+5:30</span>
            </div>
            <dl className="availability-stats">
              <div className="availability-item">
                <dt>Replies</dt>
                <dd>Within 48 hrs</dd>
              </div>
              <div className="availability-item">
                <dt>My time</dt>
                <dd>{time || "--:--"} IST</dd>
              </div>
              <div className="availability-item">
                <dt>Based in</dt>
                <dd>Chandigarh, India</dd>
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
                  <span className="contact-link-handle">{social.handle ?? "Profile"}</span>
                  <span className="contact-link-arrow">
                    <ArrowUpRight />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form className="letter" id="enquiry" noValidate onSubmit={handleSubmit}>
          <div aria-hidden="true" className="letter-stamp">
            <span>RS</span>
            <small>Reply in 48h</small>
          </div>

          {status === "sent" ? (
            <div className="letter-sent" role="status">
              <p className="letter-meta">
                <span>Status</span> Delivered — {today}
              </p>
              <h3>
                Got it,
                <br />
                <span>{form.name.trim().split(" ")[0]}.</span>
              </h3>
              <p>
                I&apos;ll read it properly and reply within two days. Want a copy in your own inbox?
                Send the same note from your email app.
              </p>
              <div className="letter-actions">
                <a className="letter-send" href={mailtoHref}>
                  <span className="roll" data-text="Open in email app">
                    Open in email app
                  </span>
                  <i>
                    <ArrowUpRight />
                  </i>
                </a>
                <button className="text-button" onClick={resetForm} type="button">
                  Write another
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="letter-meta letter-anim">
                <p>
                  <span>To</span> Raj Shekhar
                </p>
                <p>
                  <span>Date</span> {today}
                </p>
                <p>
                  <span>Re</span> A new project
                </p>
              </div>

              <p className="letter-line letter-anim">
                Hi Raj, I&apos;m{" "}
                <span className={errors.name ? "blank has-error" : "blank"}>
                  <label className="sr-only" htmlFor="enquiry-name">
                    Your name
                  </label>
                  <input
                    aria-describedby={errors.name ? "enquiry-name-error" : undefined}
                    aria-invalid={Boolean(errors.name)}
                    autoComplete="name"
                    data-field="name"
                    id="enquiry-name"
                    onChange={(event) => updateField("name", event.target.value)}
                    placeholder="your name"
                    size={Math.max(9, form.name.length + 1)}
                    type="text"
                    value={form.name}
                  />
                </span>{" "}
                and you can reach me at{" "}
                <span className={errors.email ? "blank has-error" : "blank"}>
                  <label className="sr-only" htmlFor="enquiry-email">
                    Your email
                  </label>
                  <input
                    aria-describedby={errors.email ? "enquiry-email-error" : undefined}
                    aria-invalid={Boolean(errors.email)}
                    autoComplete="email"
                    data-field="email"
                    id="enquiry-email"
                    onChange={(event) => updateField("email", event.target.value)}
                    placeholder="you@email.com"
                    size={Math.max(13, form.email.length + 1)}
                    type="email"
                    value={form.email}
                  />
                </span>
                .
              </p>
              {(errors.name || errors.email) && (
                <p className="letter-error" id={errors.name ? "enquiry-name-error" : "enquiry-email-error"}>
                  {errors.name || errors.email}
                </p>
              )}

              <fieldset className="letter-line letter-anim">
                <legend className="sr-only">What do you need?</legend>
                I&apos;d like help with{" "}
                {serviceOptions.map((option, index) => (
                  <span key={option}>
                    <button
                      aria-pressed={form.services.includes(option)}
                      className="pick"
                      data-field={index === 0 ? "services" : undefined}
                      onClick={() => toggleService(option)}
                      type="button"
                    >
                      {option.toLowerCase()}
                    </button>
                    {index < serviceOptions.length - 2 ? ", " : index === serviceOptions.length - 2 ? " or " : ""}
                  </span>
                ))}
                .
              </fieldset>
              {errors.services && <p className="letter-error">{errors.services}</p>}

              <fieldset className="letter-line letter-anim">
                <legend className="sr-only">Budget and timeline (optional)</legend>
                My budget is roughly{" "}
                {budgetOptions.map((option) => (
                  <button
                    aria-pressed={form.budget === option}
                    className="pick pick--small"
                    key={option}
                    onClick={() => updateField("budget", form.budget === option ? "" : option)}
                    type="button"
                  >
                    {option}
                  </button>
                ))}{" "}
                and I&apos;d like to start{" "}
                {timelineOptions.map((option) => (
                  <button
                    aria-pressed={form.timeline === option}
                    className="pick pick--small"
                    key={option}
                    onClick={() => updateField("timeline", form.timeline === option ? "" : option)}
                    type="button"
                  >
                    {option === "ASAP" ? option : option.toLowerCase()}
                  </button>
                ))}
                .
              </fieldset>

              <div className={errors.message ? "letter-note has-error letter-anim" : "letter-note letter-anim"}>
                <label htmlFor="enquiry-message">Here&apos;s the idea:</label>
                <textarea
                  aria-describedby={errors.message ? "enquiry-message-error" : undefined}
                  aria-invalid={Boolean(errors.message)}
                  data-field="message"
                  id="enquiry-message"
                  maxLength={600}
                  onChange={(event) => updateField("message", event.target.value)}
                  placeholder="What are you making, who is it for, any links or deadlines…"
                  rows={5}
                  value={form.message}
                />
                <div className="letter-note-foot">
                  {errors.message ? (
                    <p className="letter-error" id="enquiry-message-error">
                      {errors.message}
                    </p>
                  ) : (
                    <span />
                  )}
                  <span className="char-count">{form.message.length} / 600</span>
                </div>
              </div>

              <div className="letter-foot letter-anim">
                <p className="letter-sign">
                  Thanks,
                  <br />
                  <span>{form.name.trim() || "you"}</span>
                </p>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "8px" }}>
                  <button
                    className={status === "sending" ? "letter-send is-sending" : "letter-send"}
                    disabled={status === "sending"}
                    type="submit"
                  >
                    <span className="roll" data-text={status === "sending" ? "Sending…" : "Send it to Raj"}>
                      {status === "sending" ? "Sending…" : "Send it to Raj"}
                    </span>
                    <i>{status === "sending" ? <span className="spinner" aria-hidden="true" /> : <ArrowUpRight />}</i>
                  </button>
                  {serverError && (
                    <p className="letter-error" role="alert" style={{ margin: 0, textAlign: "right" }}>
                      {serverError}
                    </p>
                  )}
                </div>
              </div>
            </>
          )}
        </form>
      </div>

      <Footer />
    </section>
  )
}

