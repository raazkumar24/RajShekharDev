
import type { CaseStudyData } from "../types/portfolio"

export const caseStudies: Record<string, CaseStudyData> = {
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
    liveUrl: "https://udupi-vrindavan.vercel.app",
    githubUrl: "https://github.com/raazkumar24/udupi-vrindavan",
    summary:
      "A new website for Udupi Vrindavan, a pure-veg South Indian restaurant — so people can browse the menu, get a feel for the place and find the address without calling.",

    badgeText: "UDUPI VRINDAVAN / PURE VEG / SOUTH INDIAN / ",

    brief: {
      description:
        "The old site didn't show the food or the space well and was hard to use on a phone. The restaurant wanted something that looked as good as the food, worked on mobile, had a blog they could update themselves, and showed up properly on Google.",
      client: "Udupi Vrindavan",
      timeline: "2025",
      services:
        "UI/UX Design, Frontend Development, WordPress Integration, Technical SEO",
      platform: "React, WordPress REST API, Vercel",
    },

    experience: {
      tagline: "Menu first, everything else second",
      desktopImg:
        "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
      mobileImg:
        "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1000",
      caption: "Desktop and phone — same menu, same feel",
      screen: {
        nav: ["Menu", "About", "Gallery", "Contact"],
        primary: "View menu",
        secondary: "Book a table",
      },
    },

    challenges: [
      {
        number: "01",
        title: "The old site hid the food",
        description:
          "Photos were small, the menu was hard to find, and nothing said what the place actually felt like.",
      },
      {
        number: "02",
        title: "It had to work on a phone",
        description:
          "People look a restaurant up on the way there, so the menu, timings and directions had to work one-handed.",
      },
      {
        number: "03",
        title: "They wanted to post on their own",
        description:
          "The team wanted to publish blog posts without calling a developer, so the content lives in WordPress.",
      },
    ],

    visualDirection: {
      description:
        "Warm ivory backgrounds, the burgundy from their signboard, and big food photos doing most of the talking. The type stays plain so the menu is easy to read.",

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
          "Dish photo, name and price — nothing else fighting for attention.",
        image:
          "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        price: "₹140",
      },
    },

    building: {
      title: "How it is put together",
      description:
        "A React front end that pulls blog posts from WordPress over its REST API, hosted on Vercel. Each page gets its own title, meta tags and structured data.",

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
          desc: "Checked on phone, tablet and desktop",
          icon: "device",
        },
        {
          title: "WordPress Integration",
          desc: "Posts come straight from WordPress",
          icon: "cms",
        },
        {
          title: "Vercel Deployment",
          desc: "Every push goes live on Vercel",
          icon: "speed",
        },
        {
          title: "Technical SEO",
          desc: "Titles, meta tags and schema",
          icon: "seo",
        },
      ],
    },

    outcome: {
      description:
        "A faster, mobile-friendly site with a WordPress blog the team can update on their own, and the technical SEO basics in place.",

      highlights: [
        {
          title: "RESPONSIVE EXPERIENCE",
          desc: "Works the same on every screen",
        },
        {
          title: "A BLOG THEY RUN",
          desc: "New posts go live from WordPress",
        },
        {
          title: "SEO FOUNDATION",
          desc: "Proper titles, meta tags and schema",
        },
      ],

      galleryImages: [
        {
          url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
          title: "Restaurant Experience",
          caption:
            "The dining room, front and centre.",
        },
        {
          url: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
          title: "Food & Menu Presentation",
          caption:
            "Big photos, short descriptions, clear prices.",
        },
        {
          url: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
          title: "Digital Restaurant Identity",
          caption:
            "The same look carried through every page.",
        },
      ],
    },
  },

  "02": {
    number: "02",
    title: "Pulse Commerce",
    titleSolid: "PULSE",
    titleStroke: "COMMERCE",
    tagline: "AN ONLINE STORE I BUILT TO LEARN HOW ONE WORKS",
    category: "MERN Stack Application",
    year: "2025",
    role: "Full-Stack Development",
    timeline: "2025",
    summary:
      "A concept online store I built end to end — product listing, filters, cart and checkout, with a Node and MongoDB backend behind it.",

    badgeText: "MONGODB / EXPRESS / REACT / NODE / ",

    brief: {
      description:
        "I wanted to understand how a real store fits together, so I built one: browsing and filtering products on the front, and an Express API with products and orders stored in MongoDB on the back.",
      client: "Personal Concept Project",
      timeline: "2025",
      services:
        "UI Design, Frontend Development, Backend Development",
      platform: "MongoDB, Express.js, React, Node.js",
    },

    experience: {
      tagline: "Browse, add to cart, check out",
      desktopImg:
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
      mobileImg:
        "https://images.unsplash.com/photo-1556742049-0a67c5574f73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1000",
      caption: "Storefront on desktop and phone",
      screen: {
        nav: ["Shop", "New in", "Sale", "Cart"],
        primary: "Shop now",
        secondary: "View cart",
      },
    },

    challenges: [
      {
        number: "01",
        title: "Finding the right product",
        description:
          "Categories and filters had to narrow things down quickly, without a full page reload every time.",
      },
      {
        number: "02",
        title: "A cart that does not get lost",
        description:
          "The cart had to survive a refresh and keep prices and quantities in sync with the server.",
      },
      {
        number: "03",
        title: "Front end meets back end",
        description:
          "Products and orders live in MongoDB behind an Express API, and the React app talks to it with plain fetch calls.",
      },
    ],

    visualDirection: {
      description:
        "A dark background, one loud lime colour for buttons, and plenty of room around each product.",

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
          "Photo, name, price and an add-to-cart button.",
        image:
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        price: "$180",
      },
    },

    building: {
      title: "The MERN stack, end to end",
      description:
        "React on the front, an Express API on Node in the middle, and MongoDB for products and orders.",

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
          desc: "Designed for phones first",
          icon: "device",
        },
        {
          title: "Product Management",
          desc: "Products with categories and stock",
          icon: "cms",
        },
        {
          title: "Shopping Cart",
          desc: "Add, remove, change quantity",
          icon: "speed",
        },
        {
          title: "REST API",
          desc: "Express routes for products and orders",
          icon: "seo",
        },
      ],
    },

    outcome: {
      description:
        "A working MERN store where you can browse, add to cart and place an order — and a much better understanding of how the pieces talk to each other.",

      highlights: [
        {
          title: "PRODUCT EXPERIENCE",
          desc: "A catalogue you can filter",
        },
        {
          title: "SHOPPING WORKFLOW",
          desc: "From cart to order in a few taps",
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
          caption: "The storefront.",
        },
        {
          url: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
          title: "Shopping Workflow",
          caption: "From product page to checkout.",
        },
      ],
    },
  },

  "03": {
    number: "03",
    title: "Atlas Dashboard",
    titleSolid: "ATLAS",
    titleStroke: "DASHBOARD",
    tagline: "A DASHBOARD YOU CAN READ IN FIVE SECONDS",
    category: "SaaS Analytics",
    year: "2024",
    role: "Frontend Development",
    timeline: "2024",
    summary:
      "A concept analytics dashboard that takes a pile of numbers and lays them out as cards and charts you can scan in a few seconds.",

    badgeText: "REACT / TYPESCRIPT / CHARTS / ",

    brief: {
      description:
        "Dashboards get cluttered fast. The goal here was to show a lot of data without it feeling overwhelming — clear metric cards, simple charts and a layout that still works on smaller screens.",
      client: "Personal Concept Project",
      timeline: "2024",
      services:
        "UI Design, Frontend Development, Data Visualization",
      platform: "React, TypeScript, Tailwind CSS",
    },

    experience: {
      tagline: "Numbers first, decoration last",
      desktopImg:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
      mobileImg:
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1000",
      caption: "Dashboard on desktop and phone",
      screen: {
        nav: ["Overview", "Reports", "Users", "Settings"],
        primary: "Open dashboard",
        secondary: "Export",
      },
    },

    challenges: [
      {
        number: "01",
        title: "Too many numbers",
        description:
          "Every metric wants to be on top. I had to decide what shows first and what can wait one click.",
      },
      {
        number: "02",
        title: "Charts that say one thing",
        description:
          "Each chart answers one question, with labels you can read without hovering.",
      },
      {
        number: "03",
        title: "Still usable on a laptop",
        description:
          "Cards reflow from four columns down to one, so nothing gets squashed on smaller screens.",
      },
    ],

    visualDirection: {
      description:
        "A dark graphite background so the cyan and green data colours stand out, with red saved for things that need attention.",

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
      title: "Small parts, reused everywhere",
      description:
        "Each card, chart and table is its own React component with typed props, styled with Tailwind.",

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
          desc: "Reflows from four columns to one",
          icon: "device",
        },
        {
          title: "Data Visualization",
          desc: "One question per chart",
          icon: "speed",
        },
        {
          title: "Reusable Components",
          desc: "Same card, many metrics",
          icon: "cms",
        },
        {
          title: "TypeScript",
          desc: "Typed data, fewer surprises",
          icon: "seo",
        },
      ],
    },

    outcome: {
      description:
        "A tidy, component-based dashboard built in React and TypeScript, with reusable metric cards and a layout that adapts to the screen.",

      highlights: [
        {
          title: "CLEAR DATA PRESENTATION",
          desc: "Key numbers up top",
        },
        {
          title: "MODULAR INTERFACE",
          desc: "Reusable dashboard components",
        },
        {
          title: "RESPONSIVE LAYOUT",
          desc: "Works down to phone width",
        },
      ],

      galleryImages: [
        {
          url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
          title: "Analytics Overview",
          caption: "The overview screen.",
        },
      ],
    },
  },

  "04": {
    number: "04",
    title: "Forma Archive",
    titleSolid: "FORMA",
    titleStroke: "ARCHIVE",
    tagline: "A GALLERY EXPERIMENT IN SCROLL, TYPE AND 3D",
    category: "3D Editorial Gallery",
    year: "2024",
    role: "Creative Development",
    timeline: "2024",
    summary:
      "A personal experiment: a digital gallery of architectural forms and objects, where scrolling and motion do most of the storytelling.",

    badgeText: "THREE.JS / GSAP / REACT / ",

    brief: {
      description:
        "I wanted to see how far scroll, type and a bit of 3D could go in presenting objects like a museum would. Forma Archive is where I tried that out with React, Three.js and GSAP.",
      client: "Personal Creative Project",
      timeline: "2024",
      services:
        "Creative Development, UI Design, Interactive Experiences",
      platform: "React, Three.js, WebGL, GSAP",
    },

    experience: {
      tagline: "Scroll is the tour guide",
      desktopImg:
        "https://images.unsplash.com/photo-1565626424178-c699f6601afd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
      mobileImg:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1000",
      caption: "Gallery on desktop and phone",
      screen: {
        nav: ["Archive", "Forms", "Objects", "Visit"],
        primary: "Enter archive",
        secondary: "Collections",
      },
    },

    challenges: [
      {
        number: "01",
        title: "One object at a time",
        description:
          "Each piece gets the whole screen, with just enough text to know what you are looking at.",
      },
      {
        number: "02",
        title: "Motion with a reason",
        description:
          "Animation only where it helps you look — revealing, zooming, turning an object round.",
      },
      {
        number: "03",
        title: "Keep it smooth",
        description:
          "3D and big images are heavy, so they load only when needed and motion calms down for people who ask for less.",
      },
    ],

    visualDirection: {
      description:
        "Mostly black, white and concrete grey, with one rust colour for labels. Big type and lots of space, like an empty gallery.",

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
      title: "React, Three.js and GSAP",
      description:
        "React handles the pages, Three.js renders the 3D pieces, and GSAP ties the motion to the scroll.",

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
          desc: "Works on phone and desktop",
          icon: "device",
        },
        {
          title: "Interactive 3D",
          desc: "Objects you can turn around",
          icon: "speed",
        },
        {
          title: "Motion Design",
          desc: "Motion tied to scroll",
          icon: "cms",
        },
        {
          title: "Editorial Layout",
          desc: "Big type, lots of space",
          icon: "seo",
        },
      ],
    },

    outcome: {
      description:
        "An editorial-style gallery that mixes layout, motion and a little WebGL — mostly a playground for ideas I now use in client work.",

      highlights: [
        {
          title: "EDITORIAL EXPERIENCE",
          desc: "Feels like a printed catalogue",
        },
        {
          title: "INTERACTIVE DESIGN",
          desc: "Scroll, zoom and rotate",
        },
        {
          title: "CREATIVE DEVELOPMENT",
          desc: "A playground for client work",
        },
      ],

      galleryImages: [
        {
          url: "https://images.unsplash.com/photo-1565626424178-c699f6601afd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
          title: "Architectural Forms",
          caption: "Architectural forms, one per screen.",
        },
      ],
    },
  },
}
