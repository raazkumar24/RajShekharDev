import type { RefObject } from "react"
import type { Theme } from "../../types/portfolio"
import { navItems } from "../../data/portfolioData"
import { ArrowUpRight } from "../common/Icon"

interface HeaderProps {
  theme: Theme
  setTheme: (theme: Theme) => void
  active: string
  header: { hidden: boolean; scrolled: boolean }
  menuOpen: boolean
  setMenuOpen: (open: boolean | ((prev: boolean) => boolean)) => void
  pill: { x: number; w: number; visible: boolean }
  hovered: string | null
  setHovered: (id: string | null) => void
  navRef: RefObject<HTMLElement | null>
}

export function Header({
  theme,
  setTheme,
  active,
  header,
  menuOpen,
  setMenuOpen,
  pill,
  hovered,
  setHovered,
  navRef,
}: HeaderProps) {
  return (
    <header
      className={`site-header ${header.scrolled ? "is-scrolled" : ""} ${
        header.hidden && !menuOpen ? "is-hidden" : ""
      } ${menuOpen ? "is-menu" : ""}`}
    >
      <a className="logo" href="#home" onClick={() => setMenuOpen(false)}>
        <span className="logo-mark">RS</span>
        <span className="logo-text">
          <span data-text="PORTFOLIO">PORTFOLIO</span>
        </span>
        <span className="logo-dot" />
      </a>

      <nav
        className="main-nav"
        aria-label="Primary navigation"
        onMouseLeave={() => setHovered(null)}
        ref={navRef}
      >
        <span
          aria-hidden="true"
          className={`nav-pill ${pill.visible ? "is-visible" : ""} ${
            hovered && hovered !== active ? "is-hover" : ""
          }`}
          style={{ transform: `translateX(${pill.x}px)`, width: pill.w }}
        />
        {navItems.slice(0, 4).map((item, index) => (
          <a
            aria-current={active === item.id ? "page" : undefined}
            className={active === item.id ? "is-active" : ""}
            data-id={item.id}
            href={`#${item.id}`}
            key={item.id}
            onFocus={() => setHovered(item.id)}
            onBlur={() => setHovered(null)}
            onMouseEnter={() => setHovered(item.id)}
          >
            <sup>0{index + 1}</sup>
            <span className="roll" data-text={item.label}>
              {item.label}
            </span>
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <div className="theme-switch" aria-label="Color theme">
          {(["concrete", "red"] as Theme[]).map((option) => (
            <button
              aria-pressed={theme === option}
              data-option={option}
              className={theme === option ? "is-active" : ""}
              key={option}
              onClick={() => setTheme(option)}
              type="button"
            >
              <span />
              {option === "concrete" ? "Concrete 01" : "Red 02"}
            </button>
          ))}
        </div>
        <a className={`header-cta ${active === "contact" ? "is-active" : ""}`} data-magnetic href="#contact">
          <span className="roll" data-text="Let's talk">
            Let&apos;s talk
          </span>
          <i>
            <ArrowUpRight />
          </i>
        </a>
        <button
          aria-controls="site-menu"
          aria-expanded={menuOpen}
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          <span className="menu-word">{menuOpen ? "Close" : "Menu"}</span>
          <span className="menu-lines" aria-hidden="true">
            <i />
            <i />
          </span>
        </button>
      </div>

      <span className="header-progress" aria-hidden="true">
        <i />
      </span>
    </header>
  )
}

