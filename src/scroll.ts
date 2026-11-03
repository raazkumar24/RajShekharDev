import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"
import Lenis from "lenis"
import { bindMagnetic } from "./pointer"

gsap.registerPlugin(ScrollTrigger, SplitText)

type Options = {
  root: HTMLElement
  onSection: (id: string) => void
  onHeader: (state: { hidden: boolean; scrolled: boolean }) => void
  /** Section id to jump to once every pinned scene has been measured */
  initialTarget?: string | null
}

/** Builds every scroll scene. Returns a cleanup function. */
export function setupScroll({ root, onSection, onHeader, initialTarget }: Options) {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  const lenis = reduced ? null : new Lenis({ lerp: 0.075, wheelMultiplier: 0.95, touchMultiplier: 1.2 })
  const raf = (time: number) => lenis?.raf(time * 1000)

  if (lenis) {
    lenis.on("scroll", ScrollTrigger.update)
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)
  }

  // The menu overlay pauses smooth scrolling while open
  const onLock = (event: Event) => {
    if ((event as CustomEvent<boolean>).detail) lenis?.stop()
    else lenis?.start()
  }
  window.addEventListener("scroll-lock", onLock)

  // Smooth anchor navigation through Lenis
  const onClick = (event: MouseEvent) => {
    const link = (event.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]')
    if (!link) return
    const href = link.getAttribute("href") || ""
    if (href.length < 2 || href.startsWith("#case-study")) return
    const target = document.querySelector(href)
    if (!target) return
    event.preventDefault()
    if (lenis) {
      lenis.start()
      // Quintic ease-out: a confident start that settles softly on the section
      lenis.scrollTo(target as HTMLElement, { duration: 1.8, easing: (t) => 1 - Math.pow(1 - t, 5) })
    }
    else target.scrollIntoView()
  }
  root.addEventListener("click", onClick)

  const splits: SplitText[] = []
  const cleanups: Array<() => void> = []
  const q = gsap.utils.selector(root)

  const ctx = gsap.context(() => {
    // Header + active section tracking
    ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        root.style.setProperty("--scroll-progress", self.progress.toFixed(4))
        onHeader({
          scrolled: self.scroll() > 40,
          hidden: self.direction === 1 && self.scroll() > window.innerHeight * 0.6,
        })
      },
    })
    q("[data-section]").forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 50%",
        end: "bottom 50%",
        onToggle: (self) =>
          self.isActive && onSection(section.id === "case-study" ? "work" : section.id),
      })
    })

    if (reduced) return

    // The portrait is centred with translateX(-50%). GSAP would bake that into pixels using
    // the width at this moment — 0 while the photo is still downloading on a first visit —
    // which leaves it stuck off to the right. Keep the offset relative instead.
    gsap.set(".hero-portrait", { xPercent: -50, x: 0 })

    // ---------- Loader → hero intro ----------
    // The full loader plays once per visit; returning from a case study gets a quick hero reveal.
    const heroLines = q(".hero-name span")
    const heroSplit = SplitText.create(heroLines, { type: "chars", mask: "chars" })
    splits.push(heroSplit)
    if (root.classList.contains("is-loaded")) {
      gsap
        .timeline({ defaults: { ease: "expo.out" } })
        .from(heroSplit.chars, { yPercent: 110, duration: 1.1, stagger: 0.03 }, 0.15)
        .from(".hero-portrait img", { yPercent: 10, opacity: 0, duration: 1.1 }, 0.2)
        .from(".hero-fade", { y: 20, opacity: 0, duration: 0.8, stagger: 0.06, clearProps: "transform,opacity" }, 0.35)
    } else {
      const loaderSplit = SplitText.create(q(".loader-name span"), { type: "chars", mask: "chars" })
      splits.push(loaderSplit)
      const counter = { value: 0 }
      const countEl = root.querySelector(".loader-count")
      gsap
        .timeline({ defaults: { ease: "expo.out" }, onComplete: () => root.classList.add("is-loaded") })
        .from(loaderSplit.chars, { yPercent: 110, duration: 0.9, stagger: 0.03 })
        .to(counter, {
          value: 100,
          duration: 1.2,
          ease: "power2.inOut",
          onUpdate: () => {
            if (countEl) countEl.textContent = String(Math.round(counter.value))
          },
        }, 0.1)
        .fromTo(".loader-bar i", { scaleX: 0 }, { scaleX: 1, duration: 1.2, ease: "power2.inOut" }, 0.1)
        .to(loaderSplit.chars, { yPercent: -110, duration: 0.6, stagger: 0.015, ease: "power3.in" }, 1.35)
        .to(".loader", { yPercent: -100, duration: 0.9, ease: "expo.inOut" }, 1.6)
        .set(".loader", { display: "none" })
        .from(heroSplit.chars, { yPercent: 110, rotate: 6, duration: 1.4, stagger: 0.035 }, 1.95)
        .from(".hero-portrait img", { yPercent: 12, scale: 1.06, opacity: 0, duration: 1.6, ease: "expo.out" }, 2.05)
        .from(".hero-fade", { y: 24, opacity: 0, duration: 0.9, stagger: 0.07, clearProps: "transform,opacity" }, 2.25)
    }

    // Hero responds to the pointer: the star drifts and the portrait leans in
    const hero = root.querySelector<HTMLElement>(".hero")
    if (hero && window.matchMedia("(pointer: fine)").matches) {
      // Hand the CSS transform to GSAP so pointer offsets layer on top of it
      gsap.set(".hero-star", { xPercent: -44, x: 0, rotation: -6 })
      const starX = gsap.quickTo(".hero-star", "x", { duration: 1.2, ease: "power3" })
      const starY = gsap.quickTo(".hero-star", "y", { duration: 1.2, ease: "power3" })
      const starR = gsap.quickTo(".hero-star", "rotation", { duration: 1.6, ease: "power3" })
      const faceX = gsap.quickTo(".hero-portrait img", "x", { duration: 1.4, ease: "power3" })
      const onHeroMove = (event: PointerEvent) => {
        const nx = event.clientX / window.innerWidth - 0.5
        const ny = event.clientY / window.innerHeight - 0.5
        starX(nx * -60)
        starY(ny * -40)
        starR(-6 + nx * 40)
        faceX(nx * 18)
      }
      hero.addEventListener("pointermove", onHeroMove)
      cleanups.push(() => hero.removeEventListener("pointermove", onHeroMove))
    }

    // Section labels: the number ring spins in and the rule draws across
    q(".section-label").forEach((label) => {
      gsap
        .timeline({ scrollTrigger: { trigger: label, start: "top 92%" } })
        .from(label.querySelector("span"), { scale: 0, rotate: -180, duration: 0.9, ease: "back.out(1.8)" })
        .from(label.querySelector("p"), { x: -16, opacity: 0, duration: 0.7, ease: "power3.out" }, 0.1)
        .from(label.querySelector("i"), { scaleX: 0, transformOrigin: "0 50%", duration: 1.3, ease: "expo.out" }, 0.15)
    })

    // ---------- Hero exit: pinned, shrinks into a card while the next scene slides over ----------
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
          pinSpacing: false,
        },
      })
      .fromTo(".hero-inner", { scale: 1, borderRadius: 0 }, { scale: 0.86, borderRadius: 36, ease: "none" }, 0)
      .fromTo(".hero-dim", { opacity: 0 }, { opacity: 0.5, ease: "none" }, 0)
      .to(".hero-name span:first-child", { xPercent: -28, ease: "none" }, 0)
      .to(".hero-name span:last-child", { xPercent: 16, ease: "none" }, 0)
      .fromTo(".hero-portrait", { yPercent: 0, scale: 1 }, { yPercent: 8, scale: 1.06, ease: "none" }, 0)

    // ---------- Manifesto: words light up ----------
    gsap.fromTo(
      ".manifesto-word",
      { opacity: 0.12 },
      {
        opacity: 1,
        stagger: 0.1,
        ease: "none",
        scrollTrigger: {
          trigger: ".manifesto",
          start: "top top",
          end: "+=160%",
          scrub: true,
          pin: true,
        },
      },
    )

    // ---------- Crossing marquees ----------
    gsap.fromTo(".band--one .band-track", { xPercent: 0 }, {
      xPercent: -45,
      ease: "none",
      scrollTrigger: { trigger: ".bands", start: "top bottom", end: "bottom top", scrub: true },
    })
    gsap.fromTo(".band--two .band-track", { xPercent: -45 }, {
      xPercent: 0,
      ease: "none",
      scrollTrigger: { trigger: ".bands", start: "top bottom", end: "bottom top", scrub: true },
    })

    // ---------- Big split headings rise char by char ----------
    q("[data-split]").forEach((title) => {
      // Split words first so a heading can only wrap between words, never mid-word
      const split = SplitText.create(title, { type: "words,chars", mask: "chars" })
      splits.push(split)
      gsap.from(split.chars, {
        yPercent: 115,
        rotate: 8,
        stagger: 0.04,
        ease: "power3.out",
        scrollTrigger: { trigger: title, start: "top 88%", end: "top 45%", scrub: 1 },
      })
    })

    // ---------- Journey ----------
    q(".connector").forEach((svg) => {
      const path = svg.querySelector<SVGPathElement>(".glow")
      const head = svg.querySelector<SVGElement>(".arrowhead")
      if (!path) return
      const length = path.getTotalLength()
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length })
      if (head) gsap.set(head, { opacity: 0 })
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: svg,
          start: "top 86%",
          end: "bottom 48%",
          scrub: 0.8,
        },
      })
      tl.to(path, { strokeDashoffset: 0, ease: "none", duration: 1 })
      if (head) {
        tl.to(head, { opacity: 1, ease: "power1.out", duration: 0.2 }, 0.8)
      }
    })
    q("[data-parallax]").forEach((element) => {
      const amount = Number(element.dataset.parallax || 80)
      gsap.fromTo(element, { y: amount }, {
        y: -amount,
        ease: "none",
        scrollTrigger: { trigger: element, start: "top bottom", end: "bottom top", scrub: true },
      })
    })
    // Ghost years drift against the scroll for depth
    q(".milestone-year").forEach((year) => {
      gsap.fromTo(
        year,
        { yPercent: 18 },
        {
          yPercent: -18,
          ease: "none",
          scrollTrigger: { trigger: year.parentElement, start: "top bottom", end: "bottom top", scrub: true },
        },
      )
    })
    q(".milestone-copy").forEach((copy) => {
      gsap.from(copy.children, {
        y: 60,
        opacity: 0,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: copy, start: "top 85%", end: "top 55%", scrub: 1 },
      })
    })

    // 2021 collage: pieces fly in and settle
    gsap
      .timeline({ scrollTrigger: { trigger: ".collage", start: "top 90%", end: "center 55%", scrub: 1 } })
      .from(".collage-back", { x: 120, rotate: 14, opacity: 0, ease: "power3.out" }, 0)
      .from(".collage-front", { x: -140, y: 60, rotate: -18, opacity: 0, ease: "power3.out" }, 0.1)
      .from(".collage-back .note", { y: -80, rotate: -28, opacity: 0, ease: "back.out(2)" }, 0.35)
      .from(".collage-front .tape", { scaleX: 0, transformOrigin: "0 50%", ease: "power2.out" }, 0.55)

    // 2023 code window types itself line by line
    gsap
      .timeline({ scrollTrigger: { trigger: ".code-stack", start: "top 85%", end: "center 50%", scrub: 1 } })
      .from(".window--back", { y: 60, rotate: -6, opacity: 0, ease: "power3.out" }, 0)
      .from(".window--front", { y: 90, rotate: 4, opacity: 0, ease: "power3.out" }, 0.1)
      .fromTo(
        ".code-lines p",
        { clipPath: "inset(0 100% 0 0)" },
        { clipPath: "inset(0 0% 0 0)", stagger: 0.18, ease: "none" },
        0.35,
      )

    // 2025 portrait wipes up out of the dark
    gsap
      .timeline({ scrollTrigger: { trigger: ".journey-portrait", start: "top 88%", end: "center 55%", scrub: 1 } })
      .fromTo(".portrait-frame", { clipPath: "inset(100% 0 0 0)" }, { clipPath: "inset(0% 0 0 0)", ease: "power2.out" })
      .fromTo(".portrait-frame img", { scale: 1.35 }, { scale: 1, ease: "power2.out" }, 0)
      .from(".journey-portrait figcaption", { y: 20, opacity: 0 }, 0.6)

    // Timeline rail: visible inside the journey, highlights the current chapter
    const rail = root.querySelector(".journey-rail")
    if (rail) {
      ScrollTrigger.create({
        trigger: ".milestone--one",
        endTrigger: ".milestone--three",
        start: "top 70%",
        end: "bottom 30%",
        toggleClass: { targets: rail, className: "is-on" },
      })
      const railLinks = gsap.utils.toArray<HTMLElement>(".journey-rail a")
      const milestones = q(".milestone")
      // Highlight whichever chapter is closest to the middle of the screen
      const syncRail = () => {
        const middle = window.innerHeight / 2
        let closest = 0
        let best = Infinity
        milestones.forEach((milestone, index) => {
          const box = milestone.getBoundingClientRect()
          const distance = Math.abs(box.top + box.height / 2 - middle)
          if (distance < best) {
            best = distance
            closest = index
          }
        })
        railLinks.forEach((link, index) => link.classList.toggle("is-active", index === closest))
      }
      syncRail()
      ScrollTrigger.create({
        trigger: ".milestone--one",
        endTrigger: ".milestone--three",
        start: "top bottom",
        end: "bottom top",
        onUpdate: syncRail,
        onToggle: syncRail,
      })
    }


    // WHO IS RAJ? scales in while the outline fills
    gsap
      .timeline({
        scrollTrigger: { trigger: ".who-scene", start: "top top", end: "+=130%", scrub: true, pin: true },
      })
      .fromTo(".who-title", { scale: 0.42, letterSpacing: "0.12em" }, { scale: 1, letterSpacing: "-0.035em", ease: "power2.out" })
      .fromTo(".who-title", { backgroundPositionX: "100%" }, { backgroundPositionX: "0%", ease: "none" }, 0.35)
      .from(".who-kicker", { opacity: 0, y: 30 }, 0.6)

    // Fill-on-scroll for outlined rows
    q("[data-fill]").forEach((element) => {
      gsap.fromTo(element, { backgroundPositionX: "100%" }, {
        backgroundPositionX: "0%",
        ease: "none",
        scrollTrigger: { trigger: element, start: "top 85%", end: "top 35%", scrub: true },
      })
    })

    // Generic fade-ups
    q("[data-rise]").forEach((element) => {
      gsap.from(element, {
        y: 70,
        opacity: 0,
        ease: "power3.out",
        scrollTrigger: { trigger: element, start: "top 90%", end: "top 60%", scrub: 1 },
      })
    })

    // ---------- Who is Raj: lead lights up word by word, stats count up ----------
    const lead = root.querySelector(".who-lead")
    if (lead) {
      const leadSplit = SplitText.create(lead, { type: "words" })
      splits.push(leadSplit)
      gsap.fromTo(
        leadSplit.words,
        { opacity: 0.18 },
        {
          opacity: 1,
          stagger: 0.1,
          ease: "none",
          scrollTrigger: { trigger: lead, start: "top 85%", end: "bottom 50%", scrub: true },
        },
      )
    }
    gsap.from(".who-copy > p, .who-copy dl > div", {
      y: 40,
      opacity: 0,
      stagger: 0.1,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: { trigger: ".who-copy", start: "top 85%" },
    })
    q("[data-count]").forEach((stat) => {
      const target = Number(stat.dataset.count || 0)
      const suffix = (stat.textContent || "").replace(/[0-9]/g, "")
      const counter = { value: 0 }
      stat.textContent = `0${suffix}`
      gsap.to(counter, {
        value: target,
        duration: 1.6,
        ease: "power3.out",
        onUpdate: () => {
          stat.textContent = `${Math.round(counter.value)}${suffix}`
        },
        scrollTrigger: { trigger: stat, start: "top 90%" },
      })
      cleanups.push(() => {
        stat.textContent = `${target}${suffix}`
      })
    })
    gsap.from(".now-strip li", {
      y: 30,
      opacity: 0,
      stagger: 0.08,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: { trigger: ".now-strip", start: "top 90%" },
    })

    // ---------- Services: card contents settle in ----------
    q(".stack-card").forEach((card) => {
      gsap.from(card.querySelectorAll(".stack-deliver li, .stack-cta"), {
        x: 24,
        opacity: 0,
        stagger: 0.06,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: card, start: "top 60%" },
      })
    })

    // ---------- Process: steps light up as the line reaches them ----------
    q(".process-step").forEach((step) => {
      ScrollTrigger.create({
        trigger: step,
        start: "top 70%",
        toggleClass: { targets: step, className: "is-on" },
      })
    })
    gsap.from(".process-step", {
      y: 60,
      opacity: 0,
      stagger: 0.12,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: { trigger: ".process-steps", start: "top 85%" },
    })

    // ---------- Contact letter: the page slides in, then each line ----------
    gsap.from(".letter", {
      y: 80,
      rotate: 4,
      duration: 1.2,
      ease: "power3.out",
      clearProps: "transform",
      scrollTrigger: { trigger: ".letter", start: "top 85%" },
    })
    gsap.from(".letter-anim", {
      y: 30,
      opacity: 0,
      stagger: 0.09,
      duration: 0.8,
      ease: "power3.out",
      clearProps: "transform,opacity",
      scrollTrigger: { trigger: ".letter", start: "top 75%" },
    })

    const mm = gsap.matchMedia()
    const processLine = (axis: "scaleX" | "scaleY") =>
      gsap.fromTo(
        ".process-line i",
        { [axis]: 0 },
        {
          [axis]: 1,
          ease: "none",
          scrollTrigger: { trigger: ".process-steps", start: "top 75%", end: "bottom 55%", scrub: 1 },
        },
      )

    mm.add("(min-width: 901px)", () => {
      processLine("scaleX")
      // ---------- Works: horizontal pinned gallery ----------
      const track = root.querySelector<HTMLElement>(".work-track")
      if (track) {
        const distance = () => track.scrollWidth - window.innerWidth
        const horizontal = gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: ".work",
            start: "top top",
            end: () => `+=${distance()}`,
            scrub: true,
            pin: true,
            invalidateOnRefresh: true,
          },
        })
        gsap.fromTo(".work-progress i", { scaleX: 0 }, {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".work",
            start: "top top",
            end: () => `+=${distance()}`,
            scrub: true,
            onUpdate: (self) => {
              const current = root.querySelector(".work-counter b")
              const total = q(".project-card").length
              if (current) current.textContent = String(Math.min(total, Math.floor(self.progress * total) + 1)).padStart(2, "0")
            },
          },
        })
        gsap.to(".work-ghost", {
          xPercent: -35,
          ease: "none",
          scrollTrigger: {
            trigger: ".work",
            start: "top top",
            end: () => `+=${distance()}`,
            scrub: true,
          },
        })
        // Cards rise and straighten as they slide into view
        const workCards = q(".project-card, .work-more")
        workCards.forEach((card, index) => {
          // The final card never travels far left, so let it settle earlier
          const isLast = index === workCards.length - 1
          gsap.fromTo(card, { scale: 0.86, rotate: 3, opacity: 0.4 }, {
            scale: 1,
            rotate: 0,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              containerAnimation: horizontal,
              start: "left right",
              end: isLast ? "left 92%" : "left 60%",
              scrub: true,
            },
          })
        })
        q(".project-card img").forEach((image) => {
          gsap.fromTo(image, { xPercent: -8 }, {
            xPercent: 8,
            ease: "none",
            scrollTrigger: {
              trigger: image.closest(".project-card"),
              containerAnimation: horizontal,
              start: "left right",
              end: "right left",
              scrub: true,
            },
          })
        })
      }

      // ---------- Services: stacked sticky cards shrink as the next arrives ----------
      const cards = q(".stack-card")
      cards.forEach((card, index) => {
        const next = cards[index + 1]
        if (!next) return
        const trigger = { trigger: next, start: "top bottom", end: "top 18%", scrub: true }
        gsap.fromTo(card, { scale: 1 }, { scale: 0.9 + index * 0.025, ease: "none", scrollTrigger: trigger })
        gsap.fromTo(card.querySelector(".card-dim"), { opacity: 0 }, { opacity: 0.45, ease: "none", scrollTrigger: { ...trigger } })
      })
    })

    mm.add("(max-width: 900px)", () => {
      processLine("scaleY")
      // ---------- Mobile Works Animation ----------
      // 1. Intro header stagger reveal
      gsap.from(".work-intro > *", {
        y: 35,
        opacity: 0,
        stagger: 0.09,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".work-intro",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      })

      // 2. Project cards: smooth scale lift, fade & image parallax depth
      const mobileCards = q(".project-card")
      mobileCards.forEach((card) => {
        // Card entry: scales and rises smoothly as you scroll into view
        gsap.fromTo(
          card,
          {
            y: 45,
            scale: 0.93,
            opacity: 0.4,
          },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 92%",
              end: "top 55%",
              scrub: 0.7,
            },
          },
        )

        // Internal image parallax movement (tactile depth on mobile)
        const img = card.querySelector<HTMLImageElement>(".project-media img")
        if (img) {
          gsap.fromTo(
            img,
            { yPercent: -7, scale: 1.12 },
            {
              yPercent: 7,
              scale: 1.04,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            },
          )
        }

        // Title and content reveal inside the card
        const bottom = card.querySelector(".project-bottom")
        if (bottom) {
          gsap.from(bottom, {
            y: 20,
            opacity: 0,
            duration: 0.55,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          })
        }
      })

      // 3. CTA "Let's build yours next" card animation
      const moreCard = root.querySelector<HTMLElement>("a.work-more")
      if (moreCard) {
        gsap.fromTo(
          moreCard,
          { y: 45, scale: 0.92, opacity: 0.4 },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: moreCard,
              start: "top 90%",
              end: "top 60%",
              scrub: 0.7,
            },
          },
        )

        const arrow = moreCard.querySelector("i")
        if (arrow) {
          gsap.fromTo(
            arrow,
            { rotate: -60, scale: 0.7 },
            {
              rotate: 0,
              scale: 1,
              duration: 0.7,
              ease: "back.out(2)",
              scrollTrigger: {
                trigger: moreCard,
                start: "top 75%",
                toggleActions: "play none none none",
              },
            },
          )
        }
      }
    })

    // ---------- Contact: LET'S TALK grows to fill the screen ----------
    gsap.fromTo(".talk-title", { scale: 0.35 }, {
      scale: 1,
      ease: "none",
      scrollTrigger: { trigger: ".talk", start: "top bottom", end: "top 15%", scrub: true },
    })
    gsap.fromTo(".talk-cta-wrap", { scale: 0, rotate: -120 }, {
      scale: 1,
      rotate: 0,
      ease: "none",
      scrollTrigger: { trigger: ".talk", start: "top 60%", end: "top 10%", scrub: true },
    })
    gsap.from(".contact-links li", {
      x: -40,
      autoAlpha: 0,
      stagger: 0.08,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: { trigger: ".contact-links", start: "top 88%" },
    })
    gsap.fromTo(".footer-name", { yPercent: 60 }, {
      yPercent: 0,
      ease: "none",
      scrollTrigger: { trigger: ".site-footer", start: "top bottom", end: "bottom bottom", scrub: true },
    })
  }, root)

  // Magnetic buttons (header CTA, social links, talk badge)
  const unbindMagnetic = bindMagnetic(root)

  // Triggers are created out of page order (pins inside matchMedia); sort so
  // positions below pinned scenes account for their pin spacing.
  ScrollTrigger.sort()
  ScrollTrigger.refresh()

  // Arriving from a case study: jump straight to the requested section
  if (initialTarget) {
    const target = document.getElementById(initialTarget)
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY
      if (lenis) lenis.scrollTo(top, { immediate: true, force: true })
      else window.scrollTo({ top, behavior: "instant" })
      ScrollTrigger.update()
    }
  }
  const onLoad = () => ScrollTrigger.refresh()
  window.addEventListener("load", onLoad)
  // Re-measure pinned scenes when the viewport width really changes (rotation, preview resize)
  let lastWidth = window.innerWidth
  const onResize = () => {
    if (Math.abs(window.innerWidth - lastWidth) < 2) return
    lastWidth = window.innerWidth
    window.scrollTo({ top: window.scrollY, left: 0, behavior: "instant" })
    ScrollTrigger.refresh()
  }
  window.addEventListener("resize", onResize)
  document.fonts?.ready.then(onLoad)
  root.querySelectorAll("img").forEach((image) => {
    if (!image.complete) image.addEventListener("load", onLoad, { once: true })
  })

  return () => {
    root.removeEventListener("click", onClick)
    window.removeEventListener("scroll-lock", onLock)
    unbindMagnetic()
    cleanups.forEach((cleanup) => cleanup())
    window.removeEventListener("load", onLoad)
    window.removeEventListener("resize", onResize)
    ctx.revert()
    root.style.removeProperty("--scroll-progress")
    splits.forEach((split) => split.revert())
    gsap.ticker.remove(raf)
    lenis?.destroy()
  }
}
