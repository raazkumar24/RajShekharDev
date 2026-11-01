
import type { CaseStudyData } from "../types/portfolio";

// Udupi images from public folder
import udupiDesktop from "/ProjectsImages/Udupi/desktop.png";
import udupiMobile from "/ProjectsImages/Udupi/mobile.png";

export const caseStudies: Record<string, CaseStudyData> = {
  // ==========================================
  // 01 — UDUPI VRINDAVAN (CLIENT PROJECT)
  // ==========================================

  "01": {
    number: "01",
    title: "Udupi Vrindavan",
    titleSolid: "UDUPI",
    titleStroke: "VRINDAVAN",
    tagline: "A RESTAURANT WEBSITE THAT FINALLY SHOWS THE FOOD",
    category: "Restaurant Website",
    year: "2025",
    role: "Design & Development",
    timeline: "2025",
    liveUrl: "https://udupivrindavan.com",
    githubUrl: "https://github.com/raazkumar24/udupi-vrindavan",

    summary:
      "A new website for Udupi Vrindavan, a pure vegetarian South Indian restaurant in Dubai. Built to showcase its food, menu, dining experience and make visiting easier.",

    badgeText: "UDUPI VRINDAVAN / PURE VEG / SOUTH INDIAN / ",

    brief: {
      description:
        "The old website did not present the food or restaurant experience effectively. The goal was to build a modern, mobile-friendly experience with an accessible menu, restaurant information, blog integration and technical SEO.",

      client: "Udupi Vrindavan",
      timeline: "2025",
      services:
        "UI/UX Design, Frontend Development, WordPress Integration, Technical SEO",
      platform: "React, WordPress REST API, Vercel",
    },

    experience: {
      tagline: "Menu first, everything else second",
      desktopImg: udupiDesktop,
      mobileImg: udupiMobile,
      caption: "The restaurant experience across desktop and mobile",

      screen: {
        nav: ["Menu", "About", "Gallery", "Contact"],
        primary: "View menu",
        secondary: "",
      },
    },

    challenges: [
      {
        number: "01",
        title: "The old site hid the food",
        description:
          "Food photography and menu information needed more attention. Visitors should be able to understand the restaurant before arriving.",
      },
      {
        number: "02",
        title: "A better mobile experience",
        description:
          "Customers often search for restaurants on their phones. Menu, opening hours and directions needed to be easy to access.",
      },
      {
        number: "03",
        title: "Content the team could manage",
        description:
          "The restaurant wanted to publish blog articles without depending on a developer for every update.",
      },
    ],

 
visualDirection: {
  description:
    "A premium visual identity inspired by Krishna temple aesthetics, traditional Indian craftsmanship and warm hospitality. Deep temple blue creates trust, antique gold adds richness, and warm cream surfaces keep the experience welcoming.",

  colors: [
    {
      name: "DEEP TEMPLE BLUE",
      hex: "#0F2F4A",
      role: "Primary Brand, Headings & Navigation",
    },
    {
      name: "MIDNIGHT OCEAN INK",
      hex: "#0A2236",
      role: "Dark Backgrounds & Footer",
    },
    {
      name: "SACRED ANTIQUE GOLD",
      hex: "#D4A65A",
      role: "Primary CTA & Highlights",
    },
    {
      name: "SOFT CHAMPAGNE GOLD",
      hex: "#EBCB8F",
      role: "Soft Accents & Dark Surface Typography",
      isLight: true,
    },
    {
      name: "EARTHY BRONZE",
      hex: "#8A672C",
      role: "Section Labels & Eyebrows",
    },
    {
      name: "WARM CREAM",
      hex: "#F7F3E9",
      role: "Primary Website Background",
      isLight: true,
    },
    {
      name: "SOFT IVORY",
      hex: "#FCFAF4",
      role: "Cards & Content Surfaces",
      isLight: true,
    },
    {
      name: "SANDSTONE",
      hex: "#EEE5D1",
      role: "Borders & Section Dividers",
      isLight: true,
    },
    {
      name: "WHATSAPP GREEN",
      hex: "#25D366",
      role: "WhatsApp Support & Contact",
      isLight: true,
    },
  ],

  typeface: {
    name: "PROJECT TYPOGRAPHY",
    weights: "REGULAR / MEDIUM / SEMIBOLD / BOLD",
    role: "Premium Restaurant Branding & Readability",
  },

  sampleCard: {
    title: "Restaurant Menu",
    description:
      "A refined menu presentation using warm ivory surfaces, deep blue typography and antique gold accents.",
    image:
      "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    price: "₹140",
  },
},


    building: {
      title: "How it is put together",
      description:
        "A React frontend connected to WordPress through its REST API. The website is deployed on Vercel with dedicated metadata and structured data for important pages.",

      steps: [
        {
          tag: "REACT",
          title: "Frontend",
          desc: "Responsive UI & Components",
        },
        {
          tag: "WORDPRESS",
          title: "Content API",
          desc: "Blog & Content Integration",
        },
        {
          tag: "VERCEL",
          title: "Deployment",
          desc: "Production Hosting",
        },
      ],

      codeFile: "BlogPost.tsx",

      codeSnippet: `const API_URL = "https://your-wordpress-site.com/wp-json/wp/v2"

export async function getPosts() {
  const response = await fetch(
    \`\${API_URL}/posts?_embed&per_page=10\`
  )

  if (!response.ok) {
    throw new Error("Unable to fetch blog posts")
  }

  return response.json()
}`,

      features: [
        {
          title: "Responsive Design",
          desc: "Optimized for phone, tablet and desktop",
          icon: "device",
        },
        {
          title: "WordPress Integration",
          desc: "Blog content managed through WordPress",
          icon: "cms",
        },
        {
          title: "Vercel Deployment",
          desc: "Production hosting and deployment",
          icon: "speed",
        },
        {
          title: "Technical SEO",
          desc: "Metadata, structured data and indexing",
          icon: "seo",
        },
      ],
    },

    outcome: {
      description:
        "A modern, mobile-friendly restaurant website with an integrated WordPress blog, clear restaurant information and a stronger digital presentation.",

      highlights: [
        {
          title: "RESPONSIVE EXPERIENCE",
          desc: "A consistent experience across devices",
        },
        {
          title: "A BLOG THEY MANAGE",
          desc: "New articles published through WordPress",
        },
        {
          title: "SEO FOUNDATION",
          desc: "Page metadata and structured data",
        },
      ],

      galleryImages: [
        {
          url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
          title: "Restaurant Experience",
          caption: "A welcoming dining experience.",
        },
        {
          url: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
          title: "Food & Menu Presentation",
          caption: "Food photography takes centre stage.",
        },
        {
          url: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
          title: "Digital Restaurant Identity",
          caption: "A consistent visual experience.",
        },
      ],
    },
  },

  // ==========================================
  // 02 — GENZ STORE (REAL PROJECT)
  // ==========================================

  "02": {
    number: "02",
    title: "Genz Store",
    titleSolid: "GENZ",
    titleStroke: "STORE",
    tagline: "STREETWEAR BUILT FOR THE NEXT GENERATION",
    category: "E-commerce Website",
    year: "2025",
    role: "Design & Development",
    timeline: "2025",
    liveUrl: "https://genz-store-seven.vercel.app/",

    summary:
      "A modern streetwear e-commerce experience focused on product discovery, clean presentation and a smooth shopping journey.",

    badgeText: "STREETWEAR / E-COMMERCE / SHOPPING / ",

    brief: {
      description:
        "An online fashion store designed to bring products, collections and shopping functionality together in a modern storefront. The experience focuses on product presentation, easy browsing and a responsive shopping journey.",

      client: "Personal Project",
      timeline: "2025",
      services:
        "UI Design, Frontend Development, E-commerce Development",
      platform: "React, JavaScript, Vercel",
    },

    experience: {
      tagline: "Discover your next favourite fit",

      desktopImg:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",

      mobileImg:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1000",

      caption: "Streetwear storefront across desktop and mobile",

      screen: {
        nav: ["Home", "Shop", "Collections", "Cart"],
        primary: "Shop collection",
        secondary: "Explore",
      },
    },

    challenges: [
      {
        number: "01",
        title: "Making products stand out",
        description:
          "The storefront needed strong product presentation without unnecessary visual distractions.",
      },
      {
        number: "02",
        title: "A smoother shopping journey",
        description:
          "Customers should be able to browse products, explore collections and add items to their cart easily.",
      },
      {
        number: "03",
        title: "Responsive shopping experience",
        description:
          "The shopping experience needed to remain clear and usable across desktop and smaller mobile screens.",
      },
    ],

    visualDirection: {
      description:
        "A bold streetwear-inspired visual direction using dark surfaces, sharp typography and a bright lime accent. The layout gives product imagery room to stand out.",

      colors: [
        {
          name: "VOID BLACK",
          hex: "#101010",
          role: "Primary Background",
        },
        {
          name: "OFF WHITE",
          hex: "#F5F5F0",
          role: "Typography & Contrast",
          isLight: true,
        },
        {
          name: "ELECTRIC LIME",
          hex: "#D0F030",
          role: "Accent & Highlights",
          isLight: true,
        },
        {
          name: "GRAPHITE",
          hex: "#292929",
          role: "Secondary Surface",
        },
      ],

      typeface: {
        name: "MODERN SANS SERIF",
        weights: "REGULAR / MEDIUM / BOLD",
        role: "Fashion & Product Typography",
      },

      sampleCard: {
        title: "Streetwear Collection",
        description:
          "A minimal product card with clear pricing and product imagery.",
        image:
          "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        price: "₹1,499",
      },
    },

    building: {
      title: "Building the shopping experience",
      description:
        "A component-based storefront with product presentation, shopping interactions and responsive layouts.",

      steps: [
        {
          tag: "REACT",
          title: "Frontend",
          desc: "Reusable UI Components",
        },
        {
          tag: "JAVASCRIPT",
          title: "Interactions",
          desc: "Shopping & Cart Logic",
        },
        {
          tag: "VERCEL",
          title: "Deployment",
          desc: "Production Hosting",
        },
      ],

      codeFile: "CartContext.tsx",

      codeSnippet: `function addToCart(product, cartItems) {
  const existingItem = cartItems.find(
    item => item.id === product.id
  )

  if (existingItem) {
    return cartItems.map(item =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  }

  return [...cartItems, {
    ...product,
    quantity: 1
  }]
}`,

      features: [
        {
          title: "Responsive Storefront",
          desc: "Layouts for different screen sizes",
          icon: "device",
        },
        {
          title: "Product Discovery",
          desc: "Organized product presentation",
          icon: "cms",
        },
        {
          title: "Shopping Cart",
          desc: "Add and manage shopping items",
          icon: "speed",
        },
        {
          title: "Modern UI",
          desc: "Bold typography and visual hierarchy",
          icon: "seo",
        },
      ],
    },

    outcome: {
      description:
        "A modern e-commerce storefront concept with a responsive layout and a shopping-focused user experience.",

      highlights: [
        {
          title: "PRODUCT EXPERIENCE",
          desc: "Clear product presentation",
        },
        {
          title: "SHOPPING WORKFLOW",
          desc: "An intuitive shopping journey",
        },
        {
          title: "RESPONSIVE DESIGN",
          desc: "A consistent experience across screens",
        },
      ],

      galleryImages: [
        {
          url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
          title: "Storefront Design",
          caption: "The overall shopping experience.",
        },
        {
          url: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
          title: "Fashion Collection",
          caption: "Fashion and product presentation.",
        },
        {
          url: "https://images.unsplash.com/photo-1483985988355-763728e1935b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
          title: "Shopping Experience",
          caption: "A modern fashion experience.",
        },
      ],
    },
  },

  // ==========================================
  // 03 — NOVA FINANCE (SAMPLE PROJECT)
  // ==========================================

  "03": {
    number: "03",
    title: "Nova Finance",
    titleSolid: "NOVA",
    titleStroke: "FINANCE",
    tagline: "FINANCIAL CLARITY WITHOUT THE CLUTTER",
    category: "Fintech Dashboard",
    year: "2026",
    role: "UI/UX & Frontend Development",
    timeline: "3 Weeks",

    summary:
      "A conceptual finance dashboard designed to make personal finance easier to understand through clear metrics, spending charts and budget tracking.",

    badgeText: "FINTECH / REACT / TYPESCRIPT / ",

    brief: {
      description:
        "A fictional fintech dashboard concept focused on simplifying personal finance. The interface brings spending insights, account summaries and budget information into one organized workspace.",

      client: "Personal Concept Project",
      timeline: "3 Weeks",
      services:
        "UI Design, Frontend Development, Data Visualization",
      platform: "React, TypeScript, Tailwind CSS",
    },

    experience: {
      tagline: "Your money, at a glance",

      desktopImg:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",

      mobileImg:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1000",

      caption: "Financial overview across devices",

      screen: {
        nav: ["Overview", "Transactions", "Budgets", "Settings"],
        primary: "View analytics",
        secondary: "Export report",
      },
    },

    challenges: [
      {
        number: "01",
        title: "Too much financial information",
        description:
          "Important financial metrics needed a clear visual hierarchy so users could understand their finances quickly.",
      },
      {
        number: "02",
        title: "Making data understandable",
        description:
          "Charts and spending categories needed to communicate information without overwhelming the interface.",
      },
      {
        number: "03",
        title: "A dashboard for every screen",
        description:
          "The interface needed to adapt to smaller screens while keeping important financial information accessible.",
      },
    ],

    visualDirection: {
      description:
        "A clean financial interface with deep navy typography, electric blue accents and subtle green indicators. Light surfaces keep the dashboard calm and readable.",

      colors: [
        {
          name: "MIDNIGHT NAVY",
          hex: "#172554",
          role: "Primary Brand",
        },
        {
          name: "CLOUD WHITE",
          hex: "#F8FAFC",
          role: "Background",
          isLight: true,
        },
        {
          name: "ELECTRIC BLUE",
          hex: "#2563EB",
          role: "Primary Accent",
        },
        {
          name: "MINT GREEN",
          hex: "#10B981",
          role: "Positive Indicators",
          isLight: true,
        },
      ],

      typeface: {
        name: "INTER",
        weights: "REGULAR / MEDIUM / SEMIBOLD",
        role: "Dashboard & Data Typography",
      },

      sampleCard: {
        title: "Monthly Overview",
        description:
          "A clear summary of income, expenses and savings.",
        image:
          "https://images.unsplash.com/photo-1554224155-6726b3ff858f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        price: "$4,250",
      },
    },

    building: {
      title: "Designed around financial data",
      description:
        "A modular React interface using typed data models and reusable components to present financial information.",

      steps: [
        {
          tag: "REACT",
          title: "Interface",
          desc: "Reusable Components",
        },
        {
          tag: "TYPESCRIPT",
          title: "Data Structure",
          desc: "Typed Data Models",
        },
        {
          tag: "TAILWIND",
          title: "Styling",
          desc: "Responsive Layout",
        },
      ],

      codeFile: "MetricCard.tsx",

      codeSnippet: `type Metric = {
  label: string
  value: number
  change: number
}

function MetricCard({ metric }: { metric: Metric }) {
  return (
    <article className="metric-card">
      <span>{metric.label}</span>
      <h2>{metric.value.toLocaleString()}</h2>
      <p>{metric.change}%</p>
    </article>
  )
}`,

      features: [
        {
          title: "Financial Overview",
          desc: "Important metrics in one place",
          icon: "device",
        },
        {
          title: "Data Visualization",
          desc: "Readable charts and insights",
          icon: "speed",
        },
        {
          title: "Reusable Components",
          desc: "A modular interface system",
          icon: "cms",
        },
        {
          title: "TypeScript",
          desc: "Structured and typed data",
          icon: "seo",
        },
      ],
    },

    outcome: {
      description:
        "A conceptual finance dashboard with a clear information hierarchy, reusable components and a responsive interface.",

      highlights: [
        {
          title: "CLEAR DATA PRESENTATION",
          desc: "Key numbers at a glance",
        },
        {
          title: "MODULAR INTERFACE",
          desc: "Reusable dashboard components",
        },
        {
          title: "RESPONSIVE LAYOUT",
          desc: "Designed for different screen sizes",
        },
      ],

      galleryImages: [
        {
          url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
          title: "Analytics Overview",
          caption: "Financial information in one view.",
        },
        {
          url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
          title: "Data Visualization",
          caption: "Charts and financial insights.",
        },
      ],
    },
  },

  // ==========================================
  // 04 — FORMA STUDIO (SAMPLE PROJECT)
  // ==========================================

  "04": {
    number: "04",
    title: "Forma Studio",
    titleSolid: "FORMA",
    titleStroke: "STUDIO",
    tagline: "SPACES DESIGNED TO MAKE A STATEMENT",
    category: "Architecture Portfolio",
    year: "2026",
    role: "Creative Development",
    timeline: "2 Weeks",

    summary:
      "An editorial-style architecture portfolio concept showcasing contemporary spaces through large photography, refined typography and immersive layouts.",

    badgeText: "ARCHITECTURE / GSAP / REACT / ",

    brief: {
      description:
        "A fictional architecture studio website designed around visual storytelling. The experience combines large project imagery, minimal typography and thoughtful motion to present architectural work.",

      client: "Personal Concept Project",
      timeline: "2 Weeks",
      services:
        "UI Design, Frontend Development, Motion Design",
      platform: "React, GSAP, Tailwind CSS",
    },

    experience: {
      tagline: "Architecture deserves its own space",

      desktopImg:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",

      mobileImg:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1000",

      caption: "Architectural portfolio across desktop and mobile",

      screen: {
        nav: ["Studio", "Projects", "Approach", "Contact"],
        primary: "Explore projects",
        secondary: "Our studio",
      },
    },

    challenges: [
      {
        number: "01",
        title: "Let the architecture speak",
        description:
          "Large images needed enough room to communicate the character and details of each architectural project.",
      },
      {
        number: "02",
        title: "Motion with a purpose",
        description:
          "Subtle transitions and scroll-based animations help guide visitors without distracting from the photography.",
      },
      {
        number: "03",
        title: "An editorial experience",
        description:
          "Typography, spacing and image composition needed to work together like a carefully designed architecture publication.",
      },
    ],

    visualDirection: {
      description:
        "Warm stone backgrounds, deep charcoal typography and muted terracotta accents create a refined architectural identity. Spacious layouts and strong photography define the experience.",

      colors: [
        {
          name: "RAW STONE",
          hex: "#E8E3DA",
          role: "Primary Background",
          isLight: true,
        },
        {
          name: "CHARCOAL",
          hex: "#252525",
          role: "Typography",
        },
        {
          name: "TERRACOTTA",
          hex: "#B66A4B",
          role: "Brand Accent",
        },
        {
          name: "PAPER WHITE",
          hex: "#FAF9F6",
          role: "Surface",
          isLight: true,
        },
      ],

      typeface: {
        name: "MANROPE & PLAYFAIR DISPLAY",
        weights: "REGULAR / MEDIUM / SEMIBOLD",
        role: "Editorial Typography",
      },

      sampleCard: {
        title: "Modern Architecture",
        description:
          "A visual-first presentation of contemporary spaces.",
        image:
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        price: "PROJECT 01",
      },
    },

    building: {
      title: "A visual experience built with motion",
      description:
        "React manages the interface, GSAP handles scroll-based animation and Tailwind CSS provides a responsive design system.",

      steps: [
        {
          tag: "REACT",
          title: "Interface",
          desc: "Component Architecture",
        },
        {
          tag: "GSAP",
          title: "Animation",
          desc: "Scroll-linked Motion",
        },
        {
          tag: "TAILWIND",
          title: "Styling",
          desc: "Responsive Design",
        },
      ],

      codeFile: "ScrollAnimation.tsx",

      codeSnippet: `import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

gsap.from(".project-image", {
  y: 80,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".project-section",
    start: "top 80%",
  },
})`,

      features: [
        {
          title: "Editorial Layout",
          desc: "Typography-led visual storytelling",
          icon: "device",
        },
        {
          title: "Scroll Animations",
          desc: "Motion powered by GSAP",
          icon: "speed",
        },
        {
          title: "Project Gallery",
          desc: "Large architectural imagery",
          icon: "cms",
        },
        {
          title: "Responsive Design",
          desc: "Optimized for every screen",
          icon: "seo",
        },
      ],
    },

    outcome: {
      description:
        "A conceptual architecture portfolio that combines editorial typography, immersive photography and scroll-based interactions into one visual experience.",

      highlights: [
        {
          title: "EDITORIAL EXPERIENCE",
          desc: "A refined, publication-inspired layout",
        },
        {
          title: "VISUAL STORYTELLING",
          desc: "Architecture presented through imagery",
        },
        {
          title: "MOTION & INTERACTION",
          desc: "Purposeful scroll-based animation",
        },
      ],

      galleryImages: [
        {
          url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
          title: "Architectural Living",
          caption: "Contemporary architectural spaces.",
        },
        {
          url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
          title: "Interior Details",
          caption: "Materials, light and composition.",
        },
      ],
    },
  },
};
