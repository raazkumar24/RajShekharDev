import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"
import Lenis from "lenis"

gsap.registerPlugin(ScrollTrigger, SplitText)

interface CaseStudyScrollOptions {
  root: HTMLElement
  onChapterChange?: (chapter: string) => void
  onHeader?: (header: { hidden: boolean; scrolled: boolean }) => void
}

export function setupCaseStudyScroll({
  root,
  onChapterChange,
  onHeader,
}: CaseStudyScrollOptions) {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  const lenis = reduced ? null : new Lenis({ lerp: 0.08, wheelMultiplier: 0.9 })
  const raf = (time: number) => lenis?.raf(time * 1000)

  if (lenis) {
    lenis.scrollTo(0, { immediate: true })
    lenis.on("scroll", ScrollTrigger.update)
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)
  }

  const splits: SplitText[] = []

  // Anchor click handling within case study (e.g. #cs-brief, #cs-outcome)
  const onClick = (event: MouseEvent) => {
    const link = (event.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#cs-"]')
    if (!link) return
    const target = root.querySelector<HTMLElement>(link.getAttribute("href") || "")
    if (!target) return
    event.preventDefault()
    if (lenis) {
      lenis.scrollTo(target, { duration: 1.4, offset: -40 })
    } else {
      target.scrollIntoView({ behavior: "smooth" })
    }
  }
  root.addEventListener("click", onClick)

  const ctx = gsap.context(() => {
    // -------------------------------------------------------------
    // HEADER TRACKING & SCROLL PROGRESS
    // -------------------------------------------------------------
    ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        onHeader?.({
          scrolled: self.scroll() > 40,
          hidden: self.direction === 1 && self.scroll() > window.innerHeight * 0.4,
        })
        document.documentElement.style.setProperty("--scroll-progress", String(self.progress))
      },
    })
    // -------------------------------------------------------------
    // 1. HERO ENTRANCE & 3D PARALLAX ANIMATION
    // -------------------------------------------------------------
    const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } })

    // Eyebrow and tech pills fade up
    heroTl.from(".cs-hero-card .cs-eyebrow", {
      y: 20,
      opacity: 0,
      duration: 0.7,
      delay: 0.2,
    })

    // Giant solid title & stroked title chars entrance
    try {
      const titleLines = root.querySelectorAll(".cs-giant-title span")
      if (titleLines.length) {
        const titleSplit = SplitText.create(titleLines, { type: "chars", mask: "chars" })
        splits.push(titleSplit)
        heroTl.from(
          titleSplit.chars,
          {
            yPercent: 110,
            duration: 1.1,
            stagger: 0.025,
            ease: "power4.out",
          },
          "-=0.5",
        )
      }
    } catch {
      heroTl.from(
        ".cs-giant-title",
        { y: 40, opacity: 0, duration: 1, ease: "power4.out" },
        "-=0.5",
      )
    }

    heroTl.from(
      [".cs-hero-card .cs-tagline", ".cs-hero-card .cs-hero-summary"],
      { y: 25, opacity: 0, duration: 0.8, stagger: 0.1 },
      "-=0.6",
    )

    heroTl.from(
      ".cs-hero-card .cs-tech-pill",
      {
        y: 18,
        opacity: 0,
        scale: 0.85,
        stagger: 0.06,
        duration: 0.6,
        ease: "back.out(1.5)",
      },
      "-=0.5",
    )

    // 3D Perspective Browser Card entrance
    heroTl.from(
      ".cs-perspective-browser",
      {
        y: 60,
        opacity: 0,
        rotateY: -16,
        rotateX: 12,
        scale: 0.9,
        duration: 1.2,
        ease: "power3.out",
      },
      "-=0.8",
    )

    heroTl.from(
      [".cs-meta-stack", ".cs-curved-arrow", ".cs-stamp-badge"],
      {
        scale: 0.7,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "back.out(1.6)",
      },
      "-=0.6",
    )

    // Continuous scroll scrub: Circular Stamp Badge rotates with scroll
    gsap.to(".cs-stamp-badge svg", {
      rotate: 360,
      ease: "none",
      scrollTrigger: {
        trigger: root,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    })

    // Scroll Scrub: 3D Browser tilts dynamically as user scrolls down
    gsap.to(".cs-perspective-browser", {
      rotateY: 4,
      rotateX: -4,
      yPercent: 16,
      ease: "none",
      scrollTrigger: {
        trigger: ".cs-hero-card",
        start: "top 20%",
        end: "bottom top",
        scrub: 1.2,
      },
    })

    // Floating specs card counter-parallax
    gsap.to(".cs-meta-stack", {
      yPercent: -28,
      ease: "none",
      scrollTrigger: {
        trigger: ".cs-hero-card",
        start: "top 20%",
        end: "bottom top",
        scrub: 1.5,
      },
    })

    // -------------------------------------------------------------
    // 2. CHAPTER 01: THE BRIEF CARDS REVEAL
    // -------------------------------------------------------------
    gsap.from(".cs-brief-card .cs-section-header", {
      y: 40,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".cs-brief-card",
        start: "top 82%",
      },
    })

    gsap.from(".cs-brief-card .cs-meta-card", {
      y: 50,
      opacity: 0,
      scale: 0.94,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".cs-brief-card .cs-meta-grid",
        start: "top 85%",
      },
    })

    // -------------------------------------------------------------
    // 3. CHAPTER 02: DUAL HARDWARE STAGE (LAPTOP + PHONE + FOLIAGE)
    // -------------------------------------------------------------
    gsap.from(".cs-experience-card .cs-exp-header", {
      y: 35,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".cs-experience-card",
        start: "top 80%",
      },
    })

    // Pedestal and laptop rise
    gsap.from(".cs-laptop-mockup", {
      y: 70,
      opacity: 0,
      scale: 0.92,
      duration: 1.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".cs-devices-stage",
        start: "top 80%",
      },
    })

    // Overlapping phone floats in with a staggered parallax
    gsap.fromTo(
      ".cs-phone-mockup",
      { y: 90, opacity: 0, scale: 0.88 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".cs-devices-stage",
          start: "top 78%",
        },
      },
    )

    // Foreground botanical leaves depth-of-field floating parallax
    gsap.to(".cs-ambient-foliage", {
      yPercent: -22,
      rotate: -3,
      ease: "none",
      scrollTrigger: {
        trigger: ".cs-devices-stage",
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      },
    })

    // Mobile phone overlaps and drifts forward with spatial parallax
    gsap.to(".cs-phone-mockup", {
      yPercent: -14,
      ease: "none",
      scrollTrigger: {
        trigger: ".cs-devices-stage",
        start: "top bottom",
        end: "bottom top",
        scrub: 1.2,
      },
    })

    // -------------------------------------------------------------
    // 4. CHAPTER 03: THE CHALLENGE CARDS
    // -------------------------------------------------------------
    gsap.from(".cs-challenge-card-group .cs-section-header", {
      y: 35,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".cs-challenge-card-group",
        start: "top 82%",
      },
    })

    gsap.from(".cs-challenge-card", {
      y: 60,
      opacity: 0,
      rotateX: 12,
      stagger: 0.14,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".cs-challenge-grid",
        start: "top 85%",
      },
    })

    // -------------------------------------------------------------
    // 5. CHAPTER 04: DESIGN DIRECTION & COLOR DISCS
    // -------------------------------------------------------------
    gsap.from(".cs-visual-card .cs-section-header", {
      y: 35,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".cs-visual-card",
        start: "top 82%",
      },
    })

    // Color discs pop in with elastic bounce
    gsap.from(".cs-color-disc-btn", {
      scale: 0.3,
      opacity: 0,
      y: 30,
      stagger: 0.08,
      duration: 0.8,
      ease: "back.out(2)",
      scrollTrigger: {
        trigger: ".cs-colors-row",
        start: "top 86%",
      },
    })

    gsap.from(".cs-design-specs-grid .cs-spec-box", {
      y: 40,
      opacity: 0,
      stagger: 0.12,
      duration: 0.85,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".cs-design-specs-grid",
        start: "top 85%",
      },
    })

    // -------------------------------------------------------------
    // 6. CHAPTER 05: BUILDING THE EXPERIENCE & CODE EDITOR
    // -------------------------------------------------------------
    gsap.from(".cs-building-card .cs-section-header", {
      y: 35,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".cs-building-card",
        start: "top 82%",
      },
    })

    gsap.from(".cs-flow-steps .cs-flow-step", {
      x: -25,
      opacity: 0,
      stagger: 0.14,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".cs-flow-steps",
        start: "top 85%",
      },
    })

    gsap.from(".cs-flow-features .cs-feature-item", {
      y: 20,
      opacity: 0,
      stagger: 0.08,
      duration: 0.7,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".cs-flow-features",
        start: "top 86%",
      },
    })

    gsap.from(".cs-code-editor", {
      y: 50,
      opacity: 0,
      scale: 0.96,
      duration: 0.95,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".cs-code-editor",
        start: "top 82%",
      },
    })

    // -------------------------------------------------------------
    // 7. CHAPTER 06: THE OUTCOME & PANORAMIC PARALLAX
    // -------------------------------------------------------------
    gsap.from(".cs-outcome-card-group .cs-section-header", {
      y: 35,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".cs-outcome-card-group",
        start: "top 82%",
      },
    })

    gsap.from(".cs-outcome-card", {
      y: 35,
      opacity: 0,
      stagger: 0.1,
      duration: 0.75,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".cs-outcome-badges",
        start: "top 85%",
      },
    })

    // Panoramic cards horizontal scrub parallax
    const panoramicCards = gsap.utils.toArray<HTMLElement>(".cs-panoramic-showcase .cs-showcase-card")
    if (panoramicCards.length) {
      gsap.from(panoramicCards, {
        y: 60,
        opacity: 0,
        stagger: 0.12,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".cs-panoramic-showcase",
          start: "top 84%",
        },
      })

      // Horizontal parallax drift on images inside the cards
      gsap.utils.toArray<HTMLElement>(".cs-showcase-card img").forEach((img) => {
        gsap.to(img, {
          scale: 1.12,
          yPercent: -10,
          ease: "none",
          scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        })
      })
    }

    // -------------------------------------------------------------
    // 8. CHAPTER 07: FOOTER CTA
    // -------------------------------------------------------------
    gsap.from(".cs-footer-cta", {
      y: 45,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".cs-footer-cta",
        start: "top 85%",
      },
    })

    // Circular arrow button rotation scrub
    gsap.to(".cs-cta-arrow-circle svg", {
      rotate: 90,
      ease: "none",
      scrollTrigger: {
        trigger: ".cs-footer-cta",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    })

    // -------------------------------------------------------------
    // 9. VERTICAL CHAPTER RAIL SYNCHRONIZATION
    // -------------------------------------------------------------
    const csRail = root.querySelector<HTMLElement>(".case-study-rail")
    if (csRail) {
      ScrollTrigger.create({
        trigger: root,
        start: "top 40%",
        end: "bottom 30%",
        toggleClass: { targets: csRail, className: "is-on" },
      })

      const csRailLinks = gsap.utils.toArray<HTMLElement>(".case-study-rail a")
      const panels = gsap.utils.toArray<HTMLElement>(".cs-card-panel")

      const syncRail = () => {
        const middle = window.innerHeight / 2
        let closest = 0
        let best = Infinity
        panels.forEach((panel, index) => {
          const box = panel.getBoundingClientRect()
          const dist = Math.abs(box.top + box.height / 2 - middle)
          if (dist < best) {
            best = dist
            closest = index
          }
        })
        csRailLinks.forEach((link, index) => {
          link.classList.toggle("is-active", index === closest)
        })
        if (panels[closest] && onChapterChange) {
          onChapterChange(panels[closest].id)
        }
      }

      syncRail()
      ScrollTrigger.create({
        trigger: root,
        start: "top bottom",
        end: "bottom top",
        onUpdate: syncRail,
        onToggle: syncRail,
      })
    }
  }, root)

  // Ensure ScrollTrigger and Lenis compute layout after layout settles
  const refresh = () => {
    ScrollTrigger.refresh()
    lenis?.resize()
  }
  requestAnimationFrame(refresh)
  const t1 = window.setTimeout(refresh, 250)
  const t2 = window.setTimeout(refresh, 800)
  root.querySelectorAll("img").forEach((img) => {
    if (!img.complete) {
      img.addEventListener("load", refresh, { once: true })
    }
  })

  return () => {
    window.clearTimeout(t1)
    window.clearTimeout(t2)
    root.removeEventListener("click", onClick)
    if (lenis) {
      gsap.ticker.remove(raf)
      lenis.destroy()
    }
    splits.forEach((s) => s.revert())
    ctx.revert()
  }
}
