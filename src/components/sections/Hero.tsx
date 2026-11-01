// import { CircleBadge } from "../common/CircleBadge"
import { ArrowDown, Icon } from "../common/Icon"
import { socials } from "../../data/portfolioData"
import profileImage from "@/assets/profile-image.png"

export function Hero() {
  return (
    <section className="hero" data-section id="home">
      <div className="hero-inner">
        <div className="hero-eyebrow hero-fade">
          <p>
            <i /> Portfolio — 2026
          </p>
          <span>Web developer from India</span>
        </div>
        {/* <div className="hero-fade">
          <CircleBadge id="hero-badge-path" />
        </div> */}
        <h1 className="hero-name">
          <span>RAJ</span>
          <span>SHEKHAR.</span>
        </h1>
        <svg className="hero-star" viewBox="0 0 200 200" aria-hidden="true">
          <path d="M118 0 120 78 200 66 128 104 168 196 98 122 0 150 80 98 18 58 96 76Z" />
        </svg>

        <div className="hero-portrait">
          <img alt="Raj Shekhar in a cream jacket" src={profileImage} />
        </div>

        {/* Mobile Vertical Floating Pill Dock (curved capsule with social links & scroll down) */}
        <aside aria-label="Quick links" className="hero-dock hero-fade">
          <ul className="hero-dock-socials">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  aria-label={social.label}
                  href={social.href}
                  rel="noreferrer"
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                >
                  <Icon size={16}>{social.icon}</Icon>
                </a>
              </li>
            ))}
          </ul>
          <span aria-hidden="true" className="hero-dock-divider" />
          <a
            aria-label="Scroll to manifesto"
            className="hero-dock-scroll"
            href="#manifesto"
          >
            <ArrowDown />
          </a>
        </aside>

        <div className="hero-role hero-fade">
          <h2>
            Full-stack <span className="hero-lime-tag">web developer</span>
          </h2>
          <p>React • Next.js • MERN stack</p>
          <a className="hero-resume-btn" href="#contact">
            Resume <ArrowDown />
          </a>
        </div>

        {/* Desktop Bottom Bar */}
        <div className="hero-bar hero-fade">
          <div className="hero-status">
            <p>
              <span /> Available for work
            </p>
            <span className="social-kicker">Follow</span>
            <ul className="social-list">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    aria-label={social.label}
                    className="social-link"
                    data-magnetic
                    href={social.href}
                    rel="noreferrer"
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                  >
                    <span className="social-icon">
                      <Icon size={16}>{social.icon}</Icon>
                    </span>
                    <span className="social-label">{social.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <a className="scroll-cue" href="#manifesto">
            Scroll down
            <span>
              <ArrowDown />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
