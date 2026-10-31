import type { Ref } from "react"

interface PageCurtainProps {
  kicker: string
  title: string
  ref?: Ref<HTMLDivElement>
}

/** Full-screen wipe shown while the app swaps between home and case study views. */
export function PageCurtain({ kicker, title, ref }: PageCurtainProps) {
  return (
    <div aria-hidden="true" className="page-curtain" ref={ref}>
      <p className="page-curtain-line page-curtain-kicker">
        <span>
          <i /> {kicker}
        </span>
      </p>
      <p className="page-curtain-line page-curtain-title">
        <span>{title}</span>
      </p>
      <p className="page-curtain-line page-curtain-foot">
        <span>Raj Shekhar — Portfolio</span>
      </p>
    </div>
  )
}
