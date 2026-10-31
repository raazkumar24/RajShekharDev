interface FooterProps {
  /** Anchor used by the "Back to top" link */
  topHref?: string
}

export function Footer({ topHref = "#home" }: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="footer-row">
        <p>© 2026 Raj Shekhar</p>
        <a href={topHref}>Back to top ↑</a>
      </div>
      <div className="footer-name-wrap" aria-hidden="true">
        <p className="footer-name">RAJ SHEKHAR</p>
      </div>
    </footer>
  )
}
