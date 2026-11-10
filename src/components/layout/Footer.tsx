import { ArrowUp } from "../common/Icon"

interface FooterProps {
  /** Anchor used by the "Back to top" link */
  topHref?: string
}

export function Footer({ topHref = "#home" }: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="footer-row">
        <p className="footer-copy">
          © 2026 Raj Shekhar <span className="footer-sep">•</span> Crafted with Motion
        </p>
        <a
          aria-label="Scroll back to top"
          className="footer-top-btn"
          data-magnetic
          href={topHref}
        >
          <span>Back to top</span>
          <span className="footer-top-icon" aria-hidden="true">
            <ArrowUp />
          </span>
        </a>
      </div>
    </footer>
  )
}
