import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"
import Lenis from "lenis"
import { bindMagnetic } from "../../pointer"

gsap.registerPlugin(ScrollTrigger, SplitText)

interface CaseStudyScrollOptions {
  root: HTMLElement
  onHeader?: (header: { hidden: boolean; scrolled: boolean }) => void
}

/** Smooth scrolling + every scroll scene of the case study page. Returns a cleanup. */
export function setupCaseStudyScroll({ root, onHeader }: CaseStudyScrollOptions) {
  const site = root.closest<HTMLElement>(".site") ?? root
  // Opening a case study directly (deep link / new tab) skips the home loader
  site.classList.add("is-loaded")

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  const lenis = reduced ? null : new Lenis({ lerp: 0.075, wheelMultiplier: 0.95, touchMultiplier: 1.2 })
  const raf = (time: number) => lenis?.raf(time * 1000)
  window.scrollTo({ top: 0, behavior: "instant" })

  ScrollTrigger.config({ ignoreMobileResize: true })

  if (lenis) {
    lenis.on("scroll", ScrollTrigger.update)
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(500, 33)
  }

  // The menu overlay pauses smooth scrolling while open
  const onLock = (event: Event) => {
    if ((event as CustomEvent<boolean>).detail) lenis?.stop()
    else lenis?.start()
  }
  window.addEventListener("scroll-lock", onLock)

  // In-page chapter anchors (#cs-…) glide through Lenis
  const onClick = (event: MouseEvent) => {
    const link = (event.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#cs-"]')
    if (!link) return
    const target = root.querySelector<HTMLElement>(link.getAttribute("href") || "")
    if (!target) return
    event.preventDefault()
    if (lenis) lenis.scrollTo(target, { duration: 1.5 })
    else target.scrollIntoView()
  }
  root.addEventListener("click", onClick)

  const splits: SplitText[] = []
  const q = gsap.utils.selector(root)

  const ctx = gsap.context(() => {
    // ---------- Header state, progress line & chapter rail ----------
    let lastScroll = 0
    let scrollAccumulator = 0
    let isHidden = false

    ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        site.style.setProperty("--scroll-progress", self.progress.toFixed(4))
        const currentScroll = self.scroll()
        const delta = currentScroll - lastScroll
        const heroHeight = window.innerHeight * 0.9

        if (currentScroll <= 30) {
          isHidden = false
          scrollAccumulator = 0
        } else if (currentScroll < heroHeight) {
          isHidden = false
          scrollAccumulator = 0
        } else {
          if (delta > 0) {
            scrollAccumulator = Math.max(0, scrollAccumulator + delta)
            if (scrollAccumulator > 35) {
              isHidden = true
            }
          } else if (delta < 0) {
            scrollAccumulator = Math.min(0, scrollAccumulator + delta)
            if (scrollAccumulator < -15) {
              isHidden = false
            }
          }
        }

        lastScroll = currentScroll

        onHeader?.({
          scrolled: currentScroll > 30,
          hidden: isHidden,
        })
      },
    })

    const rail = root.querySelector<HTMLElement>(".cs-rail")
    const railLinks = q(".cs-rail a")
    if (rail) {
      ScrollTrigger.create({
        trigger: q("#cs-brief")[0],
        endTrigger: q(".cs-next")[0],
        start: "top 60%",
        end: "top 40%",
        toggleClass: { targets: rail, className: "is-on" },
      })
    }
    q(".cs-rail a").forEach((link, index) => {
      const chapter = root.querySelector(link.getAttribute("href") || "")
      if (!chapter) return
      ScrollTrigger.create({
        trigger: chapter,
        start: "top 50%",
        end: "bottom 50%",
        onToggle: (self) => {
          if (self.isActive) railLinks.forEach((item, i) => item.classList.toggle("is-active", i === index))
        },
      })
    })

    if (reduced) return

    // ---------- Hero intro ----------
    const titleSplit = SplitText.create(q(".cs-title span"), { type: "chars", mask: "chars" })
    splits.push(titleSplit)
    gsap
      .timeline({ defaults: { ease: "expo.out" } })
      .from(titleSplit.chars, { yPercent: 115, duration: 1.2, stagger: 0.035 }, 0.1)
      .from(".cs-fade", { y: 26, opacity: 0, duration: 0.9, stagger: 0.08, clearProps: "transform,opacity" }, 0.3)
      .from(".cs-switch button", { y: 14, opacity: 0, duration: 0.6, stagger: 0.05, clearProps: "transform,opacity" }, 0.45)
      .fromTo(
        ".cs-cover",
        { clipPath: "inset(18% 10% 0% 10% round 28px)" },
        { clipPath: "inset(0% 0% 0% 0% round 28px)", duration: 1.5, ease: "expo.inOut" },
        0.25,
      )
      .from(".cs-cover-media img", { scale: 1.35, duration: 1.8 }, 0.25)
      .from(".cs-stamp", { scale: 0, rotate: -120, duration: 1, ease: "back.out(1.6)" }, 1.1)

    // Title halves drift apart as the hero leaves
    gsap
      .timeline({ scrollTrigger: { trigger: ".cs-hero", start: "top top", end: "bottom top", scrub: true } })
      .to(".cs-title-solid", { xPercent: -12, ease: "none" }, 0)
      .to(".cs-title-outline", { xPercent: 10, ease: "none" }, 0)

    // Cover image parallax inside its frame
    gsap.fromTo(
      ".cs-cover-media img",
      { yPercent: -8 },
      {
        yPercent: 8,
        ease: "none",
        scrollTrigger: { trigger: ".cs-cover", start: "top bottom", end: "bottom top", scrub: true },
      },
    )

    // ---------- Brief: words light up as you read ----------
    gsap.fromTo(
      ".cs-word",
      { opacity: 0.14 },
      {
        opacity: 1,
        stagger: 0.1,
        ease: "none",
        scrollTrigger: { trigger: ".cs-brief-text", start: "top 82%", end: "bottom 45%", scrub: true },
      },
    )
    gsap.from(".cs-fact", {
      y: 50,
      opacity: 0,
      stagger: 0.1,
      duration: 0.9,
      ease: "power3.out",
      clearProps: "transform,opacity",
      scrollTrigger: { trigger: ".cs-facts", start: "top 88%" },
    })

    // ---------- Band ----------
    gsap.fromTo(
      ".cs-band-track",
      { xPercent: 0 },
      {
        xPercent: -40,
        ease: "none",
        scrollTrigger: { trigger: ".cs-band", start: "top bottom", end: "bottom top", scrub: true },
      },
    )

    // ---------- Section labels & split headings ----------
    q(".section-label").forEach((label) => {
      gsap
        .timeline({ scrollTrigger: { trigger: label, start: "top 92%" } })
        .from(label.querySelector("span"), { scale: 0, rotate: -180, duration: 0.9, ease: "back.out(1.8)" })
        .from(label.querySelector("p"), { x: -16, opacity: 0, duration: 0.7, ease: "power3.out" }, 0.1)
        .from(label.querySelector("i"), { scaleX: 0, transformOrigin: "0 50%", duration: 1.3, ease: "expo.out" }, 0.15)
    })
    q("[data-cs-split]").forEach((title) => {
      const split = SplitText.create(title, { type: "words,chars", mask: "chars" })
      splits.push(split)
      gsap.from(split.chars, {
        yPercent: 115,
        rotate: 6,
        stagger: 0.025,
        ease: "power3.out",
        scrollTrigger: { trigger: title, start: "top 90%", end: "top 50%", scrub: 1 },
      })
    })
    q("[data-cs-rise], .cs-head-row > p").forEach((element) => {
      gsap.from(element, {
        y: 50,
        opacity: 0,
        ease: "power3.out",
        scrollTrigger: { trigger: element, start: "top 92%", end: "top 65%", scrub: 1 },
      })
    })

    // ---------- Experience: devices tilt up into place ----------
    gsap
      .timeline({ scrollTrigger: { trigger: ".cs-devices", start: "top 90%", end: "center 55%", scrub: 1 } })
      .fromTo(
        ".cs-browser",
        { rotateX: 24, y: 120, scale: 0.88, opacity: 0.3 },
        { rotateX: 0, y: 0, scale: 1, opacity: 1, ease: "power2.out" },
      )
      .fromTo(".cs-phone", { y: 200, rotate: 8, opacity: 0 }, { y: 0, rotate: 0, opacity: 1, ease: "power2.out" }, 0.15)
    gsap.to(".cs-phone", {
      yPercent: -14,
      ease: "none",
      scrollTrigger: { trigger: ".cs-devices", start: "center 55%", end: "bottom top", scrub: true },
    })

    // ---------- Visual direction ----------
    gsap.fromTo(
      ".cs-swatch",
      { clipPath: "inset(100% 0% 0% 0% round 22px)" },
      {
        clipPath: "inset(0% 0% 0% 0% round 22px)",
        stagger: 0.1,
        duration: 1.1,
        ease: "expo.out",
        clearProps: "clipPath",
        scrollTrigger: { trigger: ".cs-palette", start: "top 85%" },
      },
    )
    gsap.from(".cs-spec", {
      y: 60,
      opacity: 0,
      stagger: 0.12,
      duration: 0.9,
      ease: "power3.out",
      clearProps: "transform,opacity",
      scrollTrigger: { trigger: ".cs-specimen", start: "top 88%" },
    })
    gsap.fromTo(
      ".cs-glyph",
      { scale: 0.6, rotate: -8 },
      {
        scale: 1,
        rotate: 0,
        ease: "none",
        scrollTrigger: { trigger: ".cs-specimen", start: "top bottom", end: "center 55%", scrub: true },
      },
    )

    // ---------- Build: the flow line draws, code types itself ----------
    gsap.from(".cs-flow li", {
      y: 50,
      opacity: 0,
      stagger: 0.15,
      duration: 0.9,
      ease: "power3.out",
      clearProps: "transform,opacity",
      scrollTrigger: { trigger: ".cs-flow", start: "top 85%" },
    })
    gsap.from(".cs-features li", {
      x: -30,
      opacity: 0,
      stagger: 0.08,
      duration: 0.8,
      ease: "power3.out",
      clearProps: "transform,opacity",
      scrollTrigger: { trigger: ".cs-features", start: "top 88%" },
    })
    gsap
      .timeline({ scrollTrigger: { trigger: ".cs-code", start: "top 88%", end: "center 50%", scrub: 1 } })
      .from(".cs-code", { y: 80, rotate: 2, opacity: 0, ease: "power3.out" })
      .fromTo(
        ".cs-code-line",
        { clipPath: "inset(0 100% 0 0)" },
        { clipPath: "inset(0 0% 0 0)", stagger: 0.12, ease: "none" },
        0.2,
      )

    // ---------- Outcome ----------
    q(".cs-results [data-fill]").forEach((element) => {
      gsap.fromTo(
        element,
        { backgroundPositionX: "100%" },
        {
          backgroundPositionX: "0%",
          ease: "none",
          scrollTrigger: { trigger: element, start: "top 88%", end: "top 45%", scrub: true },
        },
      )
    })
    q(".cs-gallery figure").forEach((figure) => {
      gsap.fromTo(
        figure,
        { clipPath: "inset(12% 6% 12% 6% round 22px)" },
        {
          clipPath: "inset(0% 0% 0% 0% round 22px)",
          ease: "none",
          scrollTrigger: { trigger: figure, start: "top bottom", end: "top 45%", scrub: true },
        },
      )
      const image = figure.querySelector("img")
      if (image) {
        gsap.fromTo(
          image,
          { yPercent: -8, scale: 1.18 },
          {
            yPercent: 8,
            scale: 1.08,
            ease: "none",
            scrollTrigger: { trigger: figure, start: "top bottom", end: "bottom top", scrub: true },
          },
        )
      }
    })

    // ---------- Next project + footer ----------
    gsap.fromTo(
      ".cs-next-card",
      { scale: 0.88, borderRadius: 60 },
      {
        scale: 1,
        borderRadius: 28,
        ease: "none",
        scrollTrigger: { trigger: ".cs-next-card", start: "top bottom", end: "top 35%", scrub: true },
      },
    )
    gsap.from(".cs-cta > *", {
      y: 60,
      opacity: 0,
      stagger: 0.12,
      duration: 0.9,
      ease: "power3.out",
      clearProps: "transform,opacity",
      scrollTrigger: { trigger: ".cs-cta", start: "top 88%" },
    })
    gsap.fromTo(
      ".cs-next .footer-name",
      { yPercent: 60 },
      {
        yPercent: 0,
        ease: "none",
        scrollTrigger: { trigger: ".cs-next .site-footer", start: "top bottom", end: "bottom bottom", scrub: true },
      },
    )

    const mm = gsap.matchMedia()
    // The build flow line runs horizontally on desktop, vertically on mobile
    const flowLine = (axis: "scaleX" | "scaleY") =>
      gsap.fromTo(
        ".cs-flow-line i",
        { [axis]: 0 },
        {
          [axis]: 1,
          ease: "none",
          scrollTrigger: { trigger: ".cs-flow", start: "top 85%", end: "bottom 60%", scrub: 1 },
        },
      )

    mm.add("(min-width: 901px)", () => {
      flowLine("scaleX")
      // Challenge cards stack: each one sinks back as the next arrives
      const cards = q(".cs-stack-card")
      cards.forEach((card, index) => {
        const next = cards[index + 1]
        if (!next) return
        // Dim layer fades in as the card sinks; opacity is far cheaper to scrub than a filter
        let dim = card.querySelector<HTMLElement>(".card-dim")
        if (!dim) {
          dim = document.createElement("span")
          dim.className = "card-dim"
          dim.setAttribute("aria-hidden", "true")
          card.prepend(dim)
        }
        const trigger = { trigger: next, start: "top bottom", end: "top 18%", scrub: true }
        gsap.fromTo(card, { scale: 1 }, { scale: 0.9 + index * 0.025, ease: "none", scrollTrigger: trigger })
        gsap.fromTo(dim, { opacity: 0 }, { opacity: 0.4, ease: "none", scrollTrigger: { ...trigger } })
      })
    })
    mm.add("(max-width: 900px)", () => {
      flowLine("scaleY")
      gsap.utils.toArray<HTMLElement>(q(".cs-stack-card")).forEach((card) => {
        gsap.from(card, {
          y: 60,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          clearProps: "transform,opacity",
          scrollTrigger: { trigger: card, start: "top 88%" },
        })
      })
    })
  }, root)

  const unbindMagnetic = bindMagnetic(site)

  // Measure once layout, fonts and images settle
  const refresh = () => ScrollTrigger.refresh()
  ScrollTrigger.refresh()
  const settle = window.setTimeout(refresh, 400)
  document.fonts?.ready.then(refresh)
  const images = Array.from(root.querySelectorAll("img"))
  images.forEach((image) => {
    if (!image.complete) image.addEventListener("load", refresh, { once: true })
  })

  return () => {
    window.clearTimeout(settle)
    images.forEach((image) => image.removeEventListener("load", refresh))
    root.removeEventListener("click", onClick)
    window.removeEventListener("scroll-lock", onLock)
    unbindMagnetic()
    ctx.revert()
    splits.forEach((split) => split.revert())
    site.style.removeProperty("--scroll-progress")
    gsap.ticker.remove(raf)
    lenis?.destroy()
  }
}
