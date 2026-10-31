import gsap from "gsap"

const finePointer = () => window.matchMedia("(pointer: fine)").matches
const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches

/**
 * Custom cursor that follows the pointer across every view.
 * Mounted once by App so it keeps working on home and case study pages.
 */
export function setupCursor(root: HTMLElement) {
  const cursor = root.querySelector<HTMLElement>(".cursor")
  if (!cursor || !finePointer()) return () => {}

  const x = gsap.quickTo(cursor, "x", { duration: 0.35, ease: "power3" })
  const y = gsap.quickTo(cursor, "y", { duration: 0.35, ease: "power3" })
  const onMove = (event: PointerEvent) => {
    x(event.clientX)
    y(event.clientY)
  }
  const onOver = (event: PointerEvent) => {
    const target = event.target as HTMLElement
    const view = target.closest("[data-cursor]")
    cursor.classList.toggle("is-view", Boolean(view))
    cursor.classList.toggle(
      "is-link",
      !view && Boolean(target.closest("a, button, input, select, textarea")),
    )
  }
  const onLeave = () => cursor.classList.remove("is-ready")
  const onEnter = () => cursor.classList.add("is-ready")

  window.addEventListener("pointermove", onMove)
  window.addEventListener("pointerover", onOver)
  document.documentElement.addEventListener("pointerleave", onLeave)
  document.documentElement.addEventListener("pointerenter", onEnter)
  cursor.classList.add("is-ready")

  return () => {
    window.removeEventListener("pointermove", onMove)
    window.removeEventListener("pointerover", onOver)
    document.documentElement.removeEventListener("pointerleave", onLeave)
    document.documentElement.removeEventListener("pointerenter", onEnter)
    cursor.classList.remove("is-ready", "is-view", "is-link")
  }
}

/** Elastic "magnetic" pull for every [data-magnetic] element inside `scope`. */
export function bindMagnetic(scope: ParentNode) {
  if (!finePointer() || reducedMotion()) return () => {}
  const removers: Array<() => void> = []

  scope.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((element) => {
    const inner = element.querySelector<HTMLElement>(".social-icon, [data-magnetic-inner]")
    const strength = Number(element.dataset.magnetic || 0) || 0.35
    const mx = gsap.quickTo(element, "x", { duration: 0.5, ease: "elastic.out(1, 0.4)" })
    const my = gsap.quickTo(element, "y", { duration: 0.5, ease: "elastic.out(1, 0.4)" })
    const move = (event: PointerEvent) => {
      const box = element.getBoundingClientRect()
      const dx = event.clientX - (box.left + box.width / 2)
      const dy = event.clientY - (box.top + box.height / 2)
      mx(dx * strength)
      my(dy * (strength + 0.1))
      if (inner) gsap.to(inner, { x: dx * 0.12, y: dy * 0.12, duration: 0.3 })
    }
    const leave = () => {
      mx(0)
      my(0)
      if (inner) gsap.to(inner, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.4)" })
    }
    element.addEventListener("pointermove", move)
    element.addEventListener("pointerleave", leave)
    removers.push(() => {
      element.removeEventListener("pointermove", move)
      element.removeEventListener("pointerleave", leave)
      gsap.set(element, { clearProps: "transform" })
    })
  })

  return () => removers.forEach((remove) => remove())
}
