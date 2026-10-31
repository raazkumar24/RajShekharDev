import type { NavItem, Project, Service, SocialLink, ToolkitGroup } from "../types/portfolio"

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
    note: "Interfaces that feel fast and precise",
    tools: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
  },
  {
    number: "02",
    title: "Backend",
    note: "Reliable APIs and real-time flows",
    tools: ["Node.js", "Express", "MongoDB", "REST APIs", "Socket.io"],
  },
  {
    number: "03",
    title: "Design & Motion",
    note: "Systems, hierarchy, and movement",
    tools: ["Figma", "Design tokens", "GSAP", "Framer Motion", "Three.js"],
  },
  {
    number: "04",
    title: "Workflow",
    note: "Clean shipping from idea to production",
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
      "A modern digital experience for an authentic South Indian restaurant with menu discovery, ambience showcase, and headless WordPress.",
    tags: ["Next.js", "React", "WordPress", "SEO"],
    image:
      "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
    alt: "Authentic South Indian Cuisine feast on banana leaf",
  },
  {
    number: "02",
    title: "Pulse Commerce",
    category: "MERN e-commerce",
    year: "2025",
    description:
      "A full-stack storefront with real-time inventory, secure checkout, and a custom admin.",
    tags: ["MongoDB", "Express", "React"],
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    alt: "Laptop on a dark desk",
  },
  {
    number: "03",
    title: "Atlas Dashboard",
    category: "SaaS analytics",
    year: "2024",
    description:
      "A data-dense analytics product with modular widgets and a scalable design system.",
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
      "A tactile digital archive where scroll, type, and motion guide every discovery.",
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
      "Clear, expressive interfaces shaped around your story, your audience, and the moments that matter.",
    tags: ["Art direction", "UI / UX", "Prototyping"],
  },
  {
    number: "02",
    title: "Development",
    description:
      "Fast, responsive builds with thoughtful interactions and a clean technical foundation made to scale.",
    tags: ["React", "Next.js", "Motion"],
  },
  {
    number: "03",
    title: "Creative systems",
    description:
      "Flexible visual and component systems that keep every page consistent without making it predictable.",
    tags: ["Design systems", "CMS", "Accessibility"],
  },
]

export const socials: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/",
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
  ["turn", ""],
  ["bold", "accent"],
  ["ideas", "accent"],
  ["into", ""],
  ["websites", "outline"],
  ["that", ""],
  ["look", ""],
  ["suspiciously", "accent"],
  ["good", ""],
  ["and", ""],
  ["work", ""],
  ["even", ""],
  ["better.", "outline"],
]

export const bandOne = "CREATIVE CODE ✦ FULL-STACK ✦ MADE FOR IMPACT ✦ "
export const bandTwo = "REACT ✦ NEXT.JS ✦ MERN STACK ✦ MOTION ✦ DESIGN SYSTEMS ✦ "

export const serviceOptions = ["Web design", "Development", "Creative systems", "Something else"]
export const budgetOptions = ["< ₹50k", "₹50k – 1L", "₹1L – 3L", "₹3L+", "Not sure yet"]

