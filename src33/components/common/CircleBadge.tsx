interface CircleBadgeProps {
  id: string
}

export function CircleBadge({ id }: CircleBadgeProps) {
  return (
    <div className="circle-badge" aria-hidden="true">
      <svg viewBox="0 0 120 120">
        <defs>
          <path d="M60 60m-46 0a46 46 0 1 1 92 0a46 46 0 1 1-92 0" id={id} />
        </defs>
        <circle cx="60" cy="60" r="56" />
        <text>
          <textPath href={`#${id}`}>MADE FOR WEB • FOCUSED ON IMPACT •</textPath>
        </text>
      </svg>
      <span>✦</span>
    </div>
  )
}

