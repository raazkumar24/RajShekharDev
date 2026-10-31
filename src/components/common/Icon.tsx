import type { ReactNode } from "react"

export interface IconProps {
  children: ReactNode
  size?: number
  className?: string
}

export function Icon({ children, size = 16, className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
      width={size}
    >
      {children}
    </svg>
  )
}

export const ArrowDown = () => (
  <Icon>
    <path d="M12 5v14M6 13l6 6 6-6" />
  </Icon>
)

export const ArrowUpRight = () => (
  <Icon>
    <path d="M7 17 17 7M8 7h9v9" />
  </Icon>
)

