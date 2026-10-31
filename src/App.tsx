import { useEffect, useLayoutEffect, useRef, useState } from "react"
import type { Project, Theme } from "./types/portfolio"
import { setupScroll } from "./scroll"
import { projects } from "./data/portfolioData"
import { Loader } from "./components/layout/Loader"
import { CustomCursor } from "./components/layout/CustomCursor"
import { Header } from "./components/layout/Header"
import { MobileMenu } from "./components/layout/MobileMenu"
import { Hero } from "./components/sections/Hero"
import { Manifesto } from "./components/sections/Manifesto"
import { MarqueeBands } from "./components/sections/MarqueeBands"
import { About } from "./components/sections/About"
import { Works } from "./components/sections/Works"
import { Services } from "./components/sections/Services"
import { Contact } from "./components/sections/Contact"
import { CaseStudySection } from "./components/case-study/CaseStudySection"

export default function App() {
  const rootRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLElement>(null)
  const [theme, setTheme] = useState<Theme>("red")
  const [view, setView] = useState<"home" | "case-study">("home")
  const [active, setActive] = useState("home")
  const [header, setHeader] = useState({ hidden: false, scrolled: false })
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project>(projects[0])
  const [hovered, setHovered] = useState<string | null>(null)
  const [time, setTime] = useState("")
  const [pill, setPill] = useState({ x: 0, w: 0, visible: false })

  // Listen to URL hash to support opening Case Study directly as a new page / new tab
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash
      if (hash.startsWith("#case-study")) {
        const num = hash.replace("#case-study-", "").replace("#case-study", "")
        const found = projects.find((p) => p.number === num) || projects[0]
        setSelectedProject(found)
        setView("case-study")
        setHeader({ hidden: false, scrolled: false })
        window.scrollTo(0, 0)
      } else {
        setView("home")
      }
    }
    handleHash()
    window.addEventListener("hashchange", handleHash)
    window.addEventListener("popstate", handleHash)
    return () => {
      window.removeEventListener("hashchange", handleHash)
      window.removeEventListener("popstate", handleHash)
    }
  }, [])

  // In case-study view, intercept header links (home, about, work, services, contact)
  // to smoothly return to home view and scroll to that section
  useEffect(() => {
    if (view !== "case-study") return
    const onAnchorClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]')
      if (!a) return
      const href = a.getAttribute("href") || ""
      if (href.startsWith("#cs-")) return // Case study internal anchor
      const targetId = href.replace("#", "")
      if (["home", "about", "work", "services", "contact"].includes(targetId)) {
        e.preventDefault()
        setView("home")
        window.history.pushState(null, "", `#${targetId}`)
        window.setTimeout(() => {
          const el = document.getElementById(targetId)
          el?.scrollIntoView({ behavior: "smooth" })
        }, 60)
      }
    }
    window.addEventListener("click", onAnchorClick, true)
    return () => window.removeEventListener("click", onAnchorClick, true)
  }, [view])

  // Open Case Study as a new dedicated page view
  const handleOpenCaseStudy = (project: Project) => {
    setSelectedProject(project)
    setView("case-study")
    setHeader({ hidden: false, scrolled: false })
    window.history.pushState(null, "", `#case-study-${project.number}`)
    window.scrollTo({ top: 0, behavior: "instant" })
  }

  // Switch project inside Case Study
  const handleSelectCaseStudyProject = (project: Project) => {
    setSelectedProject(project)
    window.history.pushState(null, "", `#case-study-${project.number}`)
    window.scrollTo({ top: 0, behavior: "instant" })
  }

  // Return from Case Study to main home page at Works
  const handleBackToHome = () => {
    setView("home")
    window.history.pushState(null, "", "#work")
    window.setTimeout(() => {
      const el = document.getElementById("work")
      el?.scrollIntoView({ behavior: "smooth" })
    }, 60)
  }

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

  // Setup home page scroll scenes when in home view
  useEffect(() => {
    if (view !== "home") return
    const root = rootRef.current
    if (!root) return
    let cleanup: (() => void) | undefined
    let cancelled = false
    const fontsReady = Promise.race([
      document.fonts?.ready ?? Promise.resolve(),
      new Promise((resolve) => setTimeout(resolve, 1200)),
    ])
    fontsReady.then(() => {
      if (cancelled) return
      try {
        cleanup = setupScroll({
          root,
          onSection: setActive,
          onHeader: (next) =>
            setHeader((current) =>
              current.hidden === next.hidden && current.scrolled === next.scrolled
                ? current
                : next,
            ),
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
  }, [view])

  return (
    <div className="site" data-theme={theme} ref={rootRef}>
      <Loader />
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
        {view === "home" ? (
          <>
            <Hero />
            <Manifesto />
            <MarqueeBands />
            <About />
            <Works onSelectProject={handleOpenCaseStudy} />
            <Services />
            <Contact time={time} />
          </>
        ) : (
          <CaseStudySection
            allProjects={projects}
            onBack={handleBackToHome}
            onHeader={(next) =>
              setHeader((current) =>
                current.hidden === next.hidden && current.scrolled === next.scrolled
                  ? current
                  : next,
              )
            }
            onSelectProject={handleSelectCaseStudyProject}
            project={selectedProject}
          />
        )}
      </main>
    </div>
  )
}
