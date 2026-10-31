import type { Theme } from "../../types/portfolio"
import { EMAIL, navItems, socials } from "../../data/portfolioData"

interface MobileMenuProps {
  menuOpen: boolean
  setMenuOpen: (open: boolean) => void
  active: string
  time: string
  theme: Theme
  setTheme: (theme: Theme) => void
}

export function MobileMenu({
  menuOpen,
  setMenuOpen,
  active,
  time,
  theme,
  setTheme,
}: MobileMenuProps) {
  return (
    <div
      aria-hidden={!menuOpen}
      className={`site-menu ${menuOpen ? "is-open" : ""}`}
      id="site-menu"
    >
      <nav aria-label="Menu" className="menu-links">
        {navItems.map((item, index) => (
          <a
            className={active === item.id ? "is-active" : ""}
            href={`#${item.id}`}
            key={item.id}
            onClick={() => setMenuOpen(false)}
            style={{ transitionDelay: menuOpen ? `${120 + index * 60}ms` : "0ms" }}
            tabIndex={menuOpen ? 0 : -1}
          >
            <sup>0{index + 1}</sup>
            {item.label}
          </a>
        ))}
      </nav>
      <div className="menu-foot">
        <div>
          <span>Say hello</span>
          <a href={`mailto:${EMAIL}`} tabIndex={menuOpen ? 0 : -1}>
            {EMAIL}
          </a>
        </div>
        <div>
          <span>Socials</span>
          <p>
            {socials.slice(0, 3).map((social) => (
              <a
                href={social.href}
                key={social.label}
                rel="noreferrer"
                tabIndex={menuOpen ? 0 : -1}
                target="_blank"
              >
                {social.label} ↗
              </a>
            ))}
          </p>
        </div>
        <div>
          <span>Local time</span>
          <p>India — {time || "--:--"} IST</p>
        </div>
        <div className="theme-switch menu-theme" aria-label="Color theme">
          {(["red", "concrete"] as Theme[]).map((option) => (
            <button
              aria-pressed={theme === option}
              className={theme === option ? "is-active" : ""}
              key={option}
              onClick={() => setTheme(option)}
              tabIndex={menuOpen ? 0 : -1}
              type="button"
            >
              <span />
              {option === "red" ? "Red 01" : "Concrete 02"}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

