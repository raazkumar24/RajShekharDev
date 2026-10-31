import type { ReactNode } from "react"

interface SectionLabelProps {
  number: string
  children: ReactNode
}

export function SectionLabel({ number, children }: SectionLabelProps) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <p>{children}</p>
      <i />
    </div>
  )
}

