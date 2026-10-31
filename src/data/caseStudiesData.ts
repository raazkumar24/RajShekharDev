
import type { CaseStudyData } from "../types/portfolio"

export const caseStudies: Record<string, CaseStudyData> = {
  "01": {
    number: "01",
    title: "Udupi Vrindavan",
    titleSolid: "UDUPI",
    titleStroke: "VRINDAVAN",
    tagline: "A DIGITAL EXPERIENCE FOR AUTHENTIC SOUTH INDIAN DINING",
    category: "Restaurant Website",
    year: "2025",
    role: "Design & Development",
    timeline: "2025",
    liveUrl: "https://udupi-vrindavan.vercel.app",
    githubUrl: "https://github.com/rajshekhar/udupi-vrindavan",
    summary:
      "A complete digital experience for Udupi Vrindavan, bringing its restaurant identity, South Indian cuisine and dining experience online through a modern, responsive website.",

    badgeText: "AUTHENTIC TASTE ✦ MODERN EXPERIENCE ✦ ",

    brief: {
      description:
        "Udupi Vrindavan needed a modern website that better represented its restaurant and made it easier for visitors to discover the menu, explore the dining experience and find essential restaurant information. The project focused on improving visual presentation, mobile usability, content structure and search visibility.",
      client: "Udupi Vrindavan",
      timeline: "2025",
      services:
        "UI/UX Design, Frontend Development, WordPress Integration, Technical SEO",
      platform: "React, WordPress REST API, Vercel",
    },

    experience: {
      tagline: "A FRESH DIGITAL TAKE ON TRADITION",
      desktopImg:
        "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
      mobileImg:
        "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1000",
      caption: "RESPONSIVE RESTAURANT EXPERIENCE",
      screen: {
        nav: ["Menu", "About", "Gallery", "Contact"],
        primary: "View menu",
        secondary: "Book a table",
      },
    },

    challenges: [
      {
        number: "01",
        title: "Outdated Digital Presence",
        description:
          "The existing website needed a more polished visual identity that could communicate the restaurant's food, atmosphere and hospitality.",
      },
      {
        number: "02",
        title: "Better Mobile Experience",
        description:
          "Menu discovery, restaurant information and navigation needed to feel intuitive across mobile, tablet and desktop screens.",
      },
      {
        number: "03",
        title: "Connected Content Management",
        description:
          "The website needed a practical content workflow with WordPress blog integration, allowing content to be managed independently of the frontend.",
      },
    ],

    visualDirection: {
      description:
        "A restaurant-focused visual experience balancing traditional South Indian identity with contemporary web design. The interface prioritizes food photography, warm surfaces, clear typography, thoughtful spacing and intuitive navigation.",

      colors: [
        {
          name: "DEEP BURGUNDY",
          hex: "#7A0F18",
          role: "Primary Brand Accent",
        },
        {
          name: "WARM IVORY",
          hex: "#F7F1EB",
          role: "Background & Typography",
          isLight: true,
        },
        {
          name: "LEAF GREEN",
          hex: "#44683A",
          role: "Natural Accent",
          isLight: true,
        },
        {
          name: "CHARCOAL",
          hex: "#1E1E1E",
          role: "Contrast & Content",
        },
      ],

      typeface: {
        name: "PROJECT TYPOGRAPHY",
        weights: "REGULAR / MEDIUM / SEMIBOLD / BOLD",
        role: "Brand Communication & Readability",
      },

      sampleCard: {
        title: "Restaurant Menu",
        description:
          "Food-focused presentation with clear information and pricing.",
        image:
          "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        price: "₹140",
      },
    },

    building: {
      title: "FROM DESIGN TO DEPLOYMENT",
      description:
        "A modern frontend connected to WordPress through its REST API, deployed on Vercel with a focus on responsive performance, content accessibility and technical SEO.",

      steps: [
        {
          tag: "REACT",
          title: "Frontend",
          desc: "Responsive UI & Components",
        },
        {
          tag: "WORDPRESS",
          title: "REST API",
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
          desc: "Adapted for mobile, tablet and desktop",
          icon: "device",
        },
        {
          title: "WordPress Integration",
          desc: "Blog content through REST API",
          icon: "cms",
        },
        {
          title: "Vercel Deployment",
          desc: "Production hosting and deployment",
          icon: "speed",
        },
        {
          title: "Technical SEO",
          desc: "Metadata, structured data and crawlability",
          icon: "seo",
        },
      ],
    },

    outcome: {
      description:
        "A redesigned restaurant website with an improved browsing experience, integrated blog architecture and a more structured technical SEO foundation.",

      highlights: [
        {
          title: "RESPONSIVE EXPERIENCE",
          desc: "Consistent layouts across devices",
        },
        {
          title: "CONNECTED CONTENT",
          desc: "WordPress-powered blog integration",
        },
        {
          title: "SEO FOUNDATION",
          desc: "Structured metadata and technical optimization",
        },
      ],

      galleryImages: [
        {
          url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
          title: "Restaurant Experience",
          caption:
            "A visual direction inspired by authentic dining and hospitality.",
        },
        {
          url: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
          title: "Food & Menu Presentation",
          caption:
            "Food photography and a clear menu browsing experience.",
        },
        {
          url: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
          title: "Digital Restaurant Identity",
          caption:
            "A cohesive digital presentation across the website.",
        },
      ],
    },
  },

  "02": {
    number: "02",
    title: "Pulse Commerce",
    titleSolid: "PULSE",
    titleStroke: "COMMERCE",
    tagline: "A MODERN E-COMMERCE EXPERIENCE",
    category: "MERN Stack Application",
    year: "2025",
    role: "Full-Stack Development",
    timeline: "2025",
    liveUrl: "https://pulse-commerce-demo.vercel.app",
    githubUrl: "https://github.com/rajshekhar/pulse-commerce",
    summary:
      "A modern e-commerce concept built around a clean shopping experience, intuitive product discovery and a streamlined cart and checkout workflow.",

    badgeText: "SMART SHOPPING ✦ SIMPLE CHECKOUT ✦ ",

    brief: {
      description:
        "Pulse Commerce explores how a modern online store can combine product discovery, responsive shopping interfaces and a structured backend architecture into one cohesive experience.",
      client: "Personal Concept Project",
      timeline: "2025",
      services:
        "UI Design, Frontend Development, Backend Development",
      platform: "MongoDB, Express.js, React, Node.js",
    },

    experience: {
      tagline: "SHOPPING MADE SIMPLE",
      desktopImg:
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
      mobileImg:
        "https://images.unsplash.com/photo-1556742049-0a67c5574f73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1000",
      caption: "E-COMMERCE EXPERIENCE — DESKTOP & MOBILE",
      screen: {
        nav: ["Shop", "New in", "Sale", "Cart"],
        primary: "Shop now",
        secondary: "View cart",
      },
    },

    challenges: [
      {
        number: "01",
        title: "Product Discovery",
        description:
          "Creating a simple and intuitive way for users to explore products, browse categories and find relevant items.",
      },
      {
        number: "02",
        title: "Shopping Experience",
        description:
          "Designing a convenient cart and checkout experience with clear product information and pricing.",
      },
      {
        number: "03",
        title: "Application Architecture",
        description:
          "Connecting frontend interfaces with backend APIs and maintaining structured product and order data.",
      },
    ],

    visualDirection: {
      description:
        "A bold contemporary e-commerce direction using dark surfaces, electric lime accents and clear product-focused layouts.",

      colors: [
        {
          name: "VOID SLATE",
          hex: "#0A0B10",
          role: "Primary Background",
        },
        {
          name: "ELECTRIC LIME",
          hex: "#D0F030",
          role: "Primary Accent",
          isLight: true,
        },
        {
          name: "PULSE GREEN",
          hex: "#00D26A",
          role: "Success & Active States",
          isLight: true,
        },
        {
          name: "SIGNAL CRIMSON",
          hex: "#E62832",
          role: "Alerts & Warnings",
        },
      ],

      typeface: {
        name: "ARCHIVO & JETBRAINS MONO",
        weights: "BOLD / SEMIBOLD / MEDIUM",
        role: "Product Presentation & Technical Details",
      },

      sampleCard: {
        title: "Product Card",
        description:
          "Clean product presentation with pricing and shopping actions.",
        image:
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        price: "$180",
      },
    },

    building: {
      title: "A MODULAR MERN ARCHITECTURE",
      description:
        "A full-stack application concept combining a React frontend, Node.js and Express APIs, and MongoDB for application data management.",

      steps: [
        {
          tag: "REACT",
          title: "Frontend",
          desc: "Components & State",
        },
        {
          tag: "NODE.JS",
          title: "Backend",
          desc: "Express REST APIs",
        },
        {
          tag: "MONGODB",
          title: "Database",
          desc: "Products & Orders",
        },
      ],

      codeFile: "checkout.ts",

      codeSnippet: `export async function createOrder(cartItems: CartItem[]) {
  const response = await fetch("/api/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ items: cartItems }),
  })

  if (!response.ok) {
    throw new Error("Unable to create order")
  }

  return response.json()
}`,

      features: [
        {
          title: "Responsive UI",
          desc: "Mobile-first shopping experience",
          icon: "device",
        },
        {
          title: "Product Management",
          desc: "Structured product catalog",
          icon: "cms",
        },
        {
          title: "Shopping Cart",
          desc: "Interactive cart experience",
          icon: "speed",
        },
        {
          title: "REST API",
          desc: "Connected backend services",
          icon: "seo",
        },
      ],
    },

    outcome: {
      description:
        "A full-stack e-commerce concept demonstrating product browsing, shopping interactions and a connected application architecture.",

      highlights: [
        {
          title: "PRODUCT EXPERIENCE",
          desc: "Organized catalog and product discovery",
        },
        {
          title: "SHOPPING WORKFLOW",
          desc: "Cart and checkout interactions",
        },
        {
          title: "FULL-STACK STRUCTURE",
          desc: "React frontend with Node.js backend",
        },
      ],

      galleryImages: [
        {
          url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
          title: "Storefront Interface",
          caption: "A contemporary digital shopping interface.",
        },
        {
          url: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
          title: "Shopping Workflow",
          caption: "A simplified and intuitive shopping journey.",
        },
      ],
    },
  },

  "03": {
    number: "03",
    title: "Atlas Dashboard",
    titleSolid: "ATLAS",
    titleStroke: "DASHBOARD",
    tagline: "A CLEANER WAY TO UNDERSTAND COMPLEX DATA",
    category: "SaaS Analytics",
    year: "2024",
    role: "Frontend Development",
    timeline: "2024",
    liveUrl: "https://atlas-analytics-demo.vercel.app",
    githubUrl: "https://github.com/rajshekhar/atlas-dashboard",
    summary:
      "An analytics dashboard concept designed to turn complex datasets into clear, organized and actionable visual information.",

    badgeText: "DATA IN FOCUS ✦ CLARITY IN EVERY DETAIL ✦ ",

    brief: {
      description:
        "Atlas Dashboard explores a modern analytics interface with customizable data views, visual reporting and a structured layout designed to make complex information easier to understand.",
      client: "Personal Concept Project",
      timeline: "2024",
      services:
        "UI Design, Frontend Development, Data Visualization",
      platform: "React, TypeScript, Tailwind CSS",
    },

    experience: {
      tagline: "SEE THE BIGGER PICTURE",
      desktopImg:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
      mobileImg:
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1000",
      caption: "ANALYTICS INTERFACE — DESKTOP & MOBILE",
      screen: {
        nav: ["Overview", "Reports", "Users", "Settings"],
        primary: "Open dashboard",
        secondary: "Export",
      },
    },

    challenges: [
      {
        number: "01",
        title: "Information Overload",
        description:
          "Presenting multiple data points without making the interface feel overwhelming or difficult to navigate.",
      },
      {
        number: "02",
        title: "Data Visualization",
        description:
          "Turning numerical information into understandable charts, summaries and visual indicators.",
      },
      {
        number: "03",
        title: "Dashboard Usability",
        description:
          "Building a flexible layout that keeps important information accessible and easy to scan.",
      },
    ],

    visualDirection: {
      description:
        "A dark, minimal analytics interface using graphite surfaces, crisp typography and bright data accents to create a focused workspace.",

      colors: [
        {
          name: "MIDNIGHT GRAPHITE",
          hex: "#0E1117",
          role: "Primary Background",
        },
        {
          name: "CYAN VECTOR",
          hex: "#00E5FF",
          role: "Data Visualization",
          isLight: true,
        },
        {
          name: "EMERALD ACTIVE",
          hex: "#00E676",
          role: "Positive Indicators",
          isLight: true,
        },
        {
          name: "CRIMSON THRESHOLD",
          hex: "#FF1744",
          role: "Alerts & Warnings",
        },
      ],

      typeface: {
        name: "PLUS JAKARTA SANS & JETBRAINS MONO",
        weights: "SEMIBOLD / MEDIUM / REGULAR",
        role: "Dashboard Typography & Data Labels",
      },
    },

    building: {
      title: "BUILDING THE ANALYTICS INTERFACE",
      description:
        "A component-driven dashboard architecture designed around reusable interface elements, organized data and clear visual hierarchy.",

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

      codeFile: "chart-engine.ts",

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
          title: "Responsive Dashboard",
          desc: "Flexible layouts for different screens",
          icon: "device",
        },
        {
          title: "Data Visualization",
          desc: "Clear charts and metric summaries",
          icon: "speed",
        },
        {
          title: "Reusable Components",
          desc: "Consistent component architecture",
          icon: "cms",
        },
        {
          title: "TypeScript",
          desc: "Structured and maintainable code",
          icon: "seo",
        },
      ],
    },

    outcome: {
      description:
        "An analytics dashboard concept demonstrating how thoughtful information architecture and data visualization can make complex information easier to explore.",

      highlights: [
        {
          title: "CLEAR DATA PRESENTATION",
          desc: "Structured metric cards and visual summaries",
        },
        {
          title: "MODULAR INTERFACE",
          desc: "Reusable dashboard components",
        },
        {
          title: "RESPONSIVE LAYOUT",
          desc: "Designed for multiple screen sizes",
        },
      ],

      galleryImages: [
        {
          url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
          title: "Analytics Overview",
          caption: "An organized view of important business metrics.",
        },
      ],
    },
  },

  "04": {
    number: "04",
    title: "Forma Archive",
    titleSolid: "FORMA",
    titleStroke: "ARCHIVE",
    tagline: "AN EXPERIMENT IN DIGITAL ART & INTERACTIVE SPACES",
    category: "3D Editorial Gallery",
    year: "2024",
    role: "Creative Development",
    timeline: "2024",
    liveUrl: "https://forma-archive-demo.vercel.app",
    githubUrl: "https://github.com/rajshekhar/forma-archive",
    summary:
      "An experimental digital gallery concept exploring the relationship between architecture, visual storytelling and immersive web interactions.",

    badgeText: "DIGITAL ARTIFACTS ✦ EXPERIMENTAL SPACES ✦ ",

    brief: {
      description:
        "Forma Archive explores the idea of a digital museum where visitors can discover architectural forms, industrial objects and visual artifacts through an editorial interface and immersive interactions.",
      client: "Personal Creative Project",
      timeline: "2024",
      services:
        "Creative Development, UI Design, Interactive Experiences",
      platform: "React, Three.js, WebGL, GSAP",
    },

    experience: {
      tagline: "EXPLORE FORM BEYOND THE FRAME",
      desktopImg:
        "https://images.unsplash.com/photo-1565626424178-c699f6601afd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
      mobileImg:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1000",
      caption: "EXPERIMENTAL DIGITAL GALLERY",
      screen: {
        nav: ["Archive", "Forms", "Objects", "Visit"],
        primary: "Enter archive",
        secondary: "Collections",
      },
    },

    challenges: [
      {
        number: "01",
        title: "Visual Storytelling",
        description:
          "Creating an editorial presentation that allows each artifact to feel distinct and visually important.",
      },
      {
        number: "02",
        title: "Interactive Experiences",
        description:
          "Exploring ways to make digital objects and gallery spaces feel more engaging through web interactions.",
      },
      {
        number: "03",
        title: "Performance & Accessibility",
        description:
          "Balancing immersive visual elements with responsive layouts and a comfortable browsing experience.",
      },
    ],

    visualDirection: {
      description:
        "A monochromatic editorial direction inspired by architectural archives, concrete textures, gallery spaces and experimental typography.",

      colors: [
        {
          name: "RAW CONCRETE",
          hex: "#1A1A1A",
          role: "Primary Background",
        },
        {
          name: "TITANIUM CHALK",
          hex: "#F0EFEB",
          role: "Typography & Contrast",
          isLight: true,
        },
        {
          name: "OXIDE RUST",
          hex: "#C84B31",
          role: "Editorial Accent",
        },
        {
          name: "MUSEUM DARK",
          hex: "#0E0E0E",
          role: "Gallery Surface",
        },
      ],

      typeface: {
        name: "ARCHIVO & JETBRAINS MONO",
        weights: "BOLD / MEDIUM / REGULAR",
        role: "Editorial Typography & Details",
      },
    },

    building: {
      title: "EXPLORING INTERACTIVE WEB EXPERIENCES",
      description:
        "An experimental frontend architecture combining modern component development, interactive visual elements and animation-driven storytelling.",

      steps: [
        {
          tag: "REACT",
          title: "Interface",
          desc: "Component Architecture",
        },
        {
          tag: "THREE.JS",
          title: "3D Experience",
          desc: "Interactive WebGL",
        },
        {
          tag: "GSAP",
          title: "Animation",
          desc: "Scroll-linked Motion",
        },
      ],

      codeFile: "sculpture-viewer.ts",

      codeSnippet: `import * as THREE from "three"

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  100
)

const renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true,
})

renderer.setSize(window.innerWidth, window.innerHeight)`,

      features: [
        {
          title: "Responsive Layout",
          desc: "Adaptive gallery experience",
          icon: "device",
        },
        {
          title: "Interactive 3D",
          desc: "Exploring Three.js and WebGL",
          icon: "speed",
        },
        {
          title: "Motion Design",
          desc: "Smooth GSAP animations",
          icon: "cms",
        },
        {
          title: "Editorial Layout",
          desc: "Typography-led visual storytelling",
          icon: "seo",
        },
      ],
    },

    outcome: {
      description:
        "An experimental digital gallery concept combining editorial design, interactive elements and creative frontend development.",

      highlights: [
        {
          title: "EDITORIAL EXPERIENCE",
          desc: "A distinctive visual presentation",
        },
        {
          title: "INTERACTIVE DESIGN",
          desc: "Exploration of immersive web interactions",
        },
        {
          title: "CREATIVE DEVELOPMENT",
          desc: "A combination of design and technology",
        },
      ],

      galleryImages: [
        {
          url: "https://images.unsplash.com/photo-1565626424178-c699f6601afd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
          title: "Architectural Forms",
          caption: "An exploration of digital space and sculptural design.",
        },
      ],
    },
  },
}
