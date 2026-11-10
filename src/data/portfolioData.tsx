import type {
  NavItem,
  NowItem,
  ProcessStep,
  Project,
  Service,
  SocialLink,
  ToolkitGroup,
} from "../types/portfolio"

export const EMAIL = "hello@rajshekhar.codes"

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
    tools: ["Figma", "GSAP", "Lenis", "Framer Motion"],
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
    screens: {
      desktop: "/ProjectsImages/Udupi/desktop.png",
      mobile: "/ProjectsImages/Udupi/mobile.png",
    },
    liveUrl: "https://udupivrindavan.com/",
    repoUrl: "https://github.com/raazkumar24/udupi-vrindavan",
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
    screens: {
      desktop: "/ProjectsImages/Genz/desktop.png",
      mobile: "/ProjectsImages/Genz/mobile.png",
    },
    liveUrl: "https://genz-store-seven.vercel.app/",
    repoUrl: "https://github.com/raazkumar24/Genz-Store",
  },
  {
    number: "03",
    title: "Aayam Strength Studio",
    category: "Gym website",
    year: "2026",
    description:
      "A demo site for a Bengaluru strength studio — earthy, editorial design, rupee pricing with a billing toggle, and a trial form that opens WhatsApp.",
    tags: ["React", "TypeScript", "Motion", "Lenis"],
    image: "/ProjectsImages/Aayam/desktop.png",
    alt: "Aayam Strength Studio website hero with the headline Strength, held with intention",
    screens: {
      desktop: "/ProjectsImages/Aayam/desktop.png",
      mobile: "/ProjectsImages/Aayam/mobile.png",
    },
    liveUrl: "https://gymsitedemo-ecru.vercel.app",
    repoUrl: "https://github.com/raazkumar24/GYM",
  },
  {
    number: "04",
    title: "ShopNest",
    category: "MERN e-commerce",
    year: "2025",
    description:
      "My first full-stack store — login, a cart saved to your account, a three-step checkout and an admin panel for products, orders and users.",
    tags: ["React", "Express", "MongoDB", "JWT"],
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    alt: "Person paying online with a card at a laptop",
    liveUrl: "https://my-shop-r71y.onrender.com/",
    repoUrl: "https://github.com/raazkumar24/ecommerce-project",
  },
]

export const services: Service[] = [
  {
    number: "01",
    title: "Websites",
    description:
      "For restaurants, shops and small studios. Your photos, your menu, pages that open fast on a phone, and a blog or CMS you can update yourself — like the Udupi Vrindavan site.",
    tags: ["Next.js", "WordPress", "SEO"],
    deliverables: ["Design in Figma first", "Next.js build", "WordPress or headless CMS", "Basic SEO setup"],
  },
  {
    number: "02",
    title: "Web apps",
    description:
      "Logins, carts, dashboards and admin panels. I handle the whole MERN stack — database, API and the screens people click.",
    tags: ["React", "Node.js", "MongoDB"],
    deliverables: ["React / Next.js front end", "Node & Express API", "MongoDB database", "Deployed and handed over"],
  },
  {
    number: "03",
    title: "Fixes & polish",
    description:
      "Already have a site that feels slow, breaks on phones or looks dated? I'll clean it up, speed it up and add motion only where it helps.",
    tags: ["Speed", "Mobile", "GSAP"],
    deliverables: ["Speed and Lighthouse fixes", "Mobile layout fixes", "Scroll animation with GSAP", "Accessibility basics"],
  },
]

export const process: ProcessStep[] = [
  {
    number: "01",
    title: "Talk",
    duration: "A short call",
    description: "You tell me what you want and who it’s for. I ask a lot of questions and tell you honestly if I’m the right fit.",
  },
  {
    number: "02",
    title: "Sketch",
    duration: "A few days",
    description: "I lay out the main pages in Figma. You click through, we change what feels off before any code is written.",
  },
  {
    number: "03",
    title: "Build",
    duration: "Depends on size",
    description: "I build in small pieces and send you a live link you can open on your phone whenever you like.",
  },
  {
    number: "04",
    title: "Hand over",
    duration: "After launch",
    description: "We go live, I fix whatever shows up in the first weeks, and you get the code and logins — it’s yours.",
  },
]

export const nowItems: NowItem[] = [
  { label: "Currently building", value: "Full-stack apps with Next.js & MERN" },
  { label: "Learning", value: "Three.js and WebGL" },
  { label: "Based in", value: "Chandigarh, India — happy to work remote" },
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

export const bandOne = "CHANDIGARH / FULL-STACK / BUILDING SINCE 2023 / OPEN TO WORK / "
export const bandTwo = "REACT / NEXT.JS / MERN / GSAP / FIGMA / "

export const serviceOptions = ["A website", "A web app", "Fixing a site", "Something else"]
export const budgetOptions = ["< ₹50k", "₹50k – 1L", "₹1L – 3L", "₹3L+", "Not sure yet"]
export const timelineOptions = ["ASAP", "1–3 months", "3+ months", "Flexible"]
