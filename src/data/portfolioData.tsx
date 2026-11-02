import type {
  NavItem,
  NowItem,
  ProcessStep,
  Project,
  Service,
  SocialLink,
  ToolkitGroup,
} from "../types/portfolio"

export const EMAIL = "hello@rajshekhar.dev"

export const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "work", label: "Works" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
]

export const toolkit: ToolkitGroup[] = [
  {
    number: "01",
    title: "Frontend",
    note: "What you see and click",
    tools: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
  },
  {
    number: "02",
    title: "Backend",
    note: "APIs, data and logins",
    tools: ["Node.js", "Express", "MongoDB", "REST APIs", "Socket.io"],
  },
  {
    number: "03",
    title: "Design & Motion",
    note: "Layout, type and animation",
    tools: ["Figma", "Design tokens", "GSAP", "Framer Motion", "Three.js"],
  },
  {
    number: "04",
    title: "Workflow",
    note: "Getting code live",
    tools: ["Git & GitHub", "Vercel", "Postman", "Docker", "Jest"],
  },
]

export const projects: Project[] = [
  {
    number: "01",
    title: "Udupi Vrindavan",
    category: "Restaurant website",
    year: "2025",
    description:
      "Website for a pure-veg South Indian restaurant — menu, photos and a WordPress blog they run themselves.",
    tags: ["Next.js", "React", "WordPress", "SEO"],
    image: "/ProjectsImages/Udupi/desktop.png",
    alt: "Udupi Vrindavan restaurant website preview",
  },
  {
    number: "02",
    title: "Genz Store",
    category: "Streetwear e-commerce",
    year: "2025",
    description:
      "A raw brutalist streetwear store with product discovery, cart, size selection and full-stack commerce architecture.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    image: "/ProjectsImages/Genz/desktop.png",
    alt: "Genz Store streetwear e-commerce preview",
  },
  {
    number: "03",
    title: "Atlas Dashboard",
    category: "SaaS analytics",
    year: "2024",
    description:
      "A concept dashboard that turns a pile of numbers into cards and charts.",
    tags: ["TypeScript", "Charts", "Design system"],
    image:
      "https://images.unsplash.com/photo-1525373698358-041e3a460346?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    alt: "Laptop with a glowing screen",
  },
  {
    number: "04",
    title: "Forma Archive",
    category: "Interactive gallery",
    year: "2023",
    description:
      "A personal gallery experiment with scroll, big type and a bit of 3D.",
    tags: ["React", "Three.js", "Motion"],
    image:
      "https://images.unsplash.com/photo-1565626424178-c699f6601afd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    alt: "Grayscale concrete blocks",
  },
]

export const services: Service[] = [
  {
    number: "01",
    title: "Web design",
    description:
      "Pages designed around your content and the people using them — clear layouts, good type, nothing in the way.",
    tags: ["Art direction", "UI / UX", "Prototyping"],
    deliverables: ["UI design in Figma", "Responsive layouts", "Clickable prototypes", "Design handoff"],
  },
  {
    number: "02",
    title: "Development",
    description:
      "I turn the design into a fast, responsive site or app in React and Next.js, with a backend when you need one.",
    tags: ["React", "Next.js", "Motion"],
    deliverables: ["Production React / Next.js", "APIs & databases", "Scroll & motion design", "SEO & performance"],
  },
  {
    number: "03",
    title: "Creative systems",
    description:
      "Reusable components and a simple CMS, so your team can add pages without breaking the look.",
    tags: ["Design systems", "CMS", "Accessibility"],
    deliverables: ["Component libraries", "Design tokens", "Headless CMS setup", "Accessibility audits"],
  },
]

export const process: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    duration: "Week 1",
    description: "We talk about what you need, who it is for and what “done” looks like.",
  },
  {
    number: "02",
    title: "Design",
    duration: "Week 1–2",
    description: "I design the key pages in Figma and share a prototype you can click through.",
  },
  {
    number: "03",
    title: "Build",
    duration: "Week 2–6",
    description: "I build it in small steps and show you progress every week.",
  },
  {
    number: "04",
    title: "Launch",
    duration: "Ongoing",
    description: "We go live, I fix whatever comes up, and you get everything you need to run it.",
  },
]

export const nowItems: NowItem[] = [
  { label: "Currently building", value: "Full-stack apps with Next.js & MERN" },
  { label: "Learning", value: "Three.js and WebGL" },
  { label: "Based in", value: "India, working remotely" },
  { label: "Open to", value: "Freelance work & full-time roles" },
]

export const socials: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/raazkumar24",
    handle: "@raazkumar24",
    icon: (
      <path d="M9 19c-4 1.4-4-2-6-2.5M15 21v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.6 11.6 0 0 0-6.2 0C6.6 2.8 5.6 3.1 5.6 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.2 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: (
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: (
      <>
        <rect height="18" rx="5" width="18" x="3" y="3" />
        <circle cx="12" cy="12" r="4" />
        <path d="M17.5 6.5h.01" />
      </>
    ),
  },
  {
    label: "Email",
    href: `mailto:${EMAIL}`,
    icon: (
      <>
        <rect height="16" rx="2" width="20" x="2" y="4" />
        <path d="m22 7-10 6L2 7" />
      </>
    ),
  },
]

export const manifesto: [string, string][] = [
  ["I", ""],
  ["build", ""],
  ["websites", "accent"],
  ["and", ""],
  ["web", "accent"],
  ["apps", "accent"],
  ["that", ""],
  ["look", ""],
  ["sharp,", "outline"],
  ["load", ""],
  ["fast", ""],
  ["and", ""],
  ["just", ""],
  ["work.", "outline"],
]

export const bandOne = "WEB DESIGN / FULL-STACK / BASED IN INDIA / "
export const bandTwo = "REACT / NEXT.JS / MERN / GSAP / FIGMA / "

export const serviceOptions = ["Web design", "Development", "Creative systems", "Something else"]
export const budgetOptions = ["< ₹50k", "₹50k – 1L", "₹1L – 3L", "₹3L+", "Not sure yet"]
export const timelineOptions = ["ASAP", "1–3 months", "3+ months", "Flexible"]

