import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react"
import { flushSync } from "react-dom"
import gsap from "gsap"
import type { Project, Theme } from "./types/portfolio"
import { setupScroll } from "./scroll"
import { setupCursor } from "./pointer"
import { navItems, projects } from "./data/portfolioData"
import { Loader } from "./components/layout/Loader"
import { CustomCursor } from "./components/layout/CustomCursor"
import { Header } from "./components/layout/Header"
import { MobileMenu } from "./components/layout/MobileMenu"
import { PageCurtain } from "./components/layout/PageCurtain"
import { Hero } from "./components/sections/Hero"
import { Manifesto } from "./components/sections/Manifesto"
import { MarqueeBands } from "./components/sections/MarqueeBands"
import { About } from "./components/sections/About"
import { Works } from "./components/sections/Works"
import { Services } from "./components/sections/Services"
import { Contact } from "./components/sections/Contact"
import { CaseStudySection } from "./components/case-study/CaseStudySection"

type View = "home" | "case-study"
type HeaderState = { hidden: boolean; scrolled: boolean }

const homeSections = navItems.map((item) => item.id)

const projectFromHash = (hash: string) => {
  const number = hash.replace("#case-study-", "").replace("#case-study", "")
  return projects.find((item) => item.number === number) ?? projects[0]
}

export default function App() {
  const rootRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLElement>(null)
  const curtainRef = useRef<HTMLDivElement>(null)
  const initialHash = typeof window === "undefined" ? "" : window.location.hash
  // Deep links such as #work land on their section once pinned scenes are measured
  const pendingTarget = useRef<string | null>(
    homeSections.includes(initialHash.slice(1)) && initialHash !== "#home"
      ? initialHash.slice(1)
      : null,
  )
  const transitioning = useRef(false)
  const [theme, setTheme] = useState<Theme>("concrete")
  const [view, setView] = useState<View>(() =>
    initialHash.startsWith("#case-study") ? "case-study" : "home",
  )
  const [active, setActive] = useState("home")
  const [header, setHeader] = useState<HeaderState>({ hidden: false, scrolled: false })
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project>(() =>
    initialHash.startsWith("#case-study") ? projectFromHash(initialHash) : projects[0],
  )
  const [curtain, setCurtain] = useState({ kicker: "", title: "" })
  const [hovered, setHovered] = useState<string | null>(null)
  const [time, setTime] = useState("")
  const [pill, setPill] = useState({ x: 0, w: 0, visible: false })

  // Stable so scroll scenes are not torn down on every header update
  const updateHeader = useCallback((next: HeaderState) => {
    setHeader((current) =>
      current.hidden === next.hidden && current.scrolled === next.scrolled ? current : next,
    )
  }, [])

  /** Wipes a curtain over the page, swaps the view underneath, then reveals it. */
  const transition = useCallback((label: { kicker: string; title: string }, change: () => void) => {
    const element = curtainRef.current
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (!element || reduced) {
      change()
      return
    }
    if (transitioning.current) return
    transitioning.current = true
    flushSync(() => setCurtain(label))
    const text = element.querySelectorAll(".page-curtain-line > span")
    gsap
      .timeline({
        onComplete: () => {
          transitioning.current = false
        },
      })
      .set(element, { visibility: "visible", clipPath: "inset(100% 0% 0% 0%)" })
      .set(text, { yPercent: 110 })
      .to(element, { clipPath: "inset(0% 0% 0% 0%)", duration: 0.75, ease: "expo.inOut" })
      .to(text, { yPercent: 0, duration: 0.6, stagger: 0.06, ease: "expo.out" }, 0.45)
      .add(() => {
        flushSync(change)
      })
      .to(text, { yPercent: -110, duration: 0.45, stagger: 0.04, ease: "power3.in" }, "+=0.25")
      .to(element, { clipPath: "inset(0% 0% 100% 0%)", duration: 0.8, ease: "expo.inOut" }, "-=0.2")
      .set(element, { visibility: "hidden" })
  }, [])

  // Browser back / forward and hand-edited hashes
  useEffect(() => {
    const onHistory = () => {
      const hash = window.location.hash
      if (hash.startsWith("#case-study")) {
        setSelectedProject(projectFromHash(hash))
        setView("case-study")
        setHeader({ hidden: false, scrolled: false })
        return
      }
      setView((current) => {
        if (current === "case-study") {
          const id = hash.replace("#", "")
          pendingTarget.current = homeSections.includes(id) ? id : "work"
        }
        return "home"
      })
    }
    window.addEventListener("popstate", onHistory)
    window.addEventListener("hashchange", onHistory)
    return () => {
      window.removeEventListener("popstate", onHistory)
      window.removeEventListener("hashchange", onHistory)
    }
  }, [])

  // Return to the home view and land on a specific section
  const goHome = useCallback(
    (targetId: string) => {
      const label = navItems.find((item) => item.id === targetId)?.label ?? "Home"
      transition({ kicker: "Back to", title: label }, () => {
        pendingTarget.current = targetId
        setMenuOpen(false)
        setView("home")
        setHeader({ hidden: false, scrolled: false })
        window.history.pushState(null, "", `#${targetId}`)
      })
    },
    [transition],
  )

  // In case-study view, header / menu links travel back to the home sections
  useEffect(() => {
    if (view !== "case-study") return
    const onAnchorClick = (event: MouseEvent) => {
      const link = (event.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]')
      if (!link) return
      const targetId = (link.getAttribute("href") || "").slice(1)
      if (!homeSections.includes(targetId)) return
      event.preventDefault()
      goHome(targetId)
    }
    window.addEventListener("click", onAnchorClick, true)
    return () => window.removeEventListener("click", onAnchorClick, true)
  }, [view, goHome])

  const openCaseStudy = useCallback(
    (project: Project) => {
      transition({ kicker: `Case study ${project.number}`, title: project.title }, () => {
        setSelectedProject(project)
        setView("case-study")
        setHeader({ hidden: false, scrolled: false })
        window.history.pushState(null, "", `#case-study-${project.number}`)
        window.scrollTo({ top: 0, behavior: "instant" })
      })
    },
    [transition],
  )

  const backToWorks = useCallback(() => goHome("work"), [goHome])

  // Sliding pill follows the hovered link, otherwise the active section
  const currentActive = view === "case-study" ? "work" : active
  const pillTarget = hovered ?? currentActive
  useLayoutEffect(() => {
    const nav = navRef.current
    if (!nav) return
    const measure = () => {
      const link = nav.querySelector<HTMLElement>(`[data-id="${pillTarget}"]`)
      setPill(
        link
          ? { x: link.offsetLeft, w: link.offsetWidth, visible: true }
          : (p) => ({ ...p, visible: false }),
      )
    }
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(nav)
    return () => observer.disconnect()
  }, [pillTarget, view])

  // Local time for the menu
  useEffect(() => {
    const format = () =>
      setTime(
        new Intl.DateTimeFormat("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          timeZone: "Asia/Kolkata",
        }).format(new Date()),
      )
    format()
    const id = window.setInterval(format, 30000)
    return () => window.clearInterval(id)
  }, [])

  // Pause smooth scrolling while the menu is open
  useEffect(() => {
    window.dispatchEvent(new CustomEvent("scroll-lock", { detail: menuOpen }))
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setMenuOpen(false)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [menuOpen])

  // Custom cursor lives across both views
  useEffect(() => {
    const root = rootRef.current
    return root ? setupCursor(root) : undefined
  }, [])

  // Setup home page scroll scenes when in home view
  useEffect(() => {
    if (view !== "home") return
    const root = rootRef.current
    if (!root) return
    let cleanup: (() => void) | undefined
    let cancelled = false
    const initialTarget = pendingTarget.current
    pendingTarget.current = null
    if (initialTarget) window.scrollTo({ top: 0, behavior: "instant" })
    const fontsReady = Promise.race([
      document.fonts?.ready ?? Promise.resolve(),
      new Promise((resolve) => setTimeout(resolve, 2500)),
    ])
    fontsReady.then(() => {
      if (cancelled) return
      try {
        cleanup = setupScroll({
          root,
          initialTarget,
          onSection: setActive,
          onHeader: updateHeader,
        })
      } catch (error) {
        console.error("Scroll setup failed", error)
        root.classList.add("is-loaded")
      }
    })
    return () => {
      cancelled = true
      cleanup?.()
    }
  }, [view, updateHeader])

  return (
    <div className="site" data-theme={theme} ref={rootRef}>
      <Loader time={time} />
      <PageCurtain kicker={curtain.kicker} ref={curtainRef} title={curtain.title} />
      <CustomCursor />
      <Header
        active={currentActive}
        header={header}
        hovered={hovered}
        menuOpen={menuOpen}
        navRef={navRef}
        pill={pill}
        setHovered={setHovered}
        setMenuOpen={setMenuOpen}
        setTheme={setTheme}
        theme={theme}
      />
      <MobileMenu
        active={currentActive}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        setTheme={setTheme}
        theme={theme}
        time={time}
      />
      <main>
        {/* Each view gets a wrapper GSAP never moves: pinned sections are re-parented
            into pin-spacers, so React must only ever remove this stable container. */}
        {view === "home" ? (
          <div className="view view--home" key="home">
            <Hero />
            <Manifesto />
            <MarqueeBands />
            <About />
            <Works onSelectProject={openCaseStudy} />
            <Services />
            <Contact time={time} />
          </div>
        ) : (
          <div className="view view--case-study" key={`case-study-${selectedProject.number}`}>
            <CaseStudySection
            allProjects={projects}
            key={selectedProject.number}
            onBack={backToWorks}
            onHeader={updateHeader}
            onSelectProject={openCaseStudy}
            project={selectedProject}
            />
          </div>
        )}
      </main>
    </div>
  )
}
