import { useEffect, useState } from "react"
import { ArrowUp } from "../common/Icon"

interface ScrollToTopProps {
  topHref?: string
}

export function ScrollToTop({ topHref = "#home" }: ScrollToTopProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY || document.documentElement.scrollTop
      setVisible(currentScroll > 420)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = document.querySelector<HTMLElement>(topHref)
    if (!target) {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <a
      aria-label="Scroll back to top"
      className={`floating-top-btn ${visible ? "floating-top-btn--visible" : ""}`}
      data-magnetic
      href={topHref}
      onClick={handleClick}
      title="Scroll to top"
    >
      <span className="floating-top-icon" aria-hidden="true">
        <ArrowUp />
      </span>
    </a>
  )
}
