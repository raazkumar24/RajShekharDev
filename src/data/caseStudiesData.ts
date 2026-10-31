import type { CaseStudyData } from "../types/portfolio"

export const caseStudies: Record<string, CaseStudyData> = {
  "01": {
    number: "01",
    title: "Udupi Vrindavan",
    titleSolid: "UDUPI",
    titleStroke: "VRINDAVAN",
    tagline: "A DIGITAL EXPERIENCE FOR A SOUTH INDIAN RESTAURANT",
    category: "Restaurant Website",
    year: "2025",
    role: "Design & Development",
    timeline: "2025",
    liveUrl: "https://udupi-vrindavan.vercel.app",
    githubUrl: "https://github.com/rajshekhar/udupi-vrindavan",
    summary:
      "A modern, fast and inviting website that brings the authentic taste of Udupi to the digital world. Designed to showcase their menu, ambience and story with a seamless user experience.",
    badgeText: "GOOD FOOD ✦ GOOD MOOD ✦ ",
    brief: {
      description:
        "Udupi Vrindavan wanted to redesign their existing website to create a more modern, appealing and easy to navigate experience. The goal was to make menu discovery simple, highlight their unique South Indian offerings, and connect a headless WordPress blog with a fast, modern frontend.",
      client: "Udupi Vrindavan",
      timeline: "2025",
      services: "Design, Development, CMS Integration, SEO",
      platform: "Next.js, WordPress (Vercel Hosting)",
    },
    experience: {
      tagline: "SAME TASTE A BETTER EXPERIENCE",
      desktopImg:
        "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
      mobileImg:
        "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1000",
      caption: "WEBSITE PREVIEW — DESKTOP & MOBILE",
    },
    challenges: [
      {
        number: "01",
        title: "Outdated Design",
        description:
          "The existing website felt old and didn't reflect the quality and ambience of the restaurant.",
      },
      {
        number: "02",
        title: "Better Menu Experience",
        description:
          "Menu items were not easy to explore, especially on mobile devices.",
      },
      {
        number: "03",
        title: "Blog Integration",
        description:
          "Needed to connect their WordPress blog with a modern frontend while maintaining good SEO and performance.",
      },
    ],
    visualDirection: {
      description:
        "A warm, authentic and modern visual direction inspired by South Indian culture — earthy tones, natural food photography, clean typography and a focus on readability and taste appeal.",
      colors: [
        { name: "DEEP BURGUNDY", hex: "#7A0F18", role: "Primary Brand Canvas" },
        { name: "IVORY", hex: "#F7F1EB", role: "Paper Warmth & Typography", isLight: true },
        { name: "LEAF GREEN", hex: "#44683A", role: "Fresh Vegetarian Accent", isLight: true },
        { name: "CHARCOAL", hex: "#1E1E1E", role: "Contrast Surface & Grids" },
      ],
      typeface: {
        name: "INTER",
        weights: "BOLD / SEMIBOLD / REGULAR",
        role: "Primary Brand Sans",
      },
      sampleCard: {
        title: "Menu Item",
        description: "Clean cards with food images and clear pricing.",
        image:
          "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        price: "₹140",
      },
    },
    building: {
      title: "FROM IDEA TO REALITY",
      description:
        "A modern tech stack with a headless WordPress backend, giving the client easy content management while delivering a fast, modern frontend.",
      steps: [
        {
          tag: "NEXT.JS",
          title: "Frontend",
          desc: "React + Tailwind",
        },
        {
          tag: "WORDPRESS",
          title: "REST API",
          desc: "Blog & Content",
        },
        {
          tag: "RESTAURANT CONTENT",
          title: "Menu, Blog Posts",
          desc: "Images, Updates",
        },
      ],
      codeFile: "page.tsx",
      codeSnippet: `import Image from 'next/image'

export default function Menu() {
  return (
    <section className="relative">
      <h1>Authentic South Indian Cuisine</h1>
      <p>Traditional flavours. Modern experience.</p>
    </section>
  )
}`,
      features: [
        {
          title: "Responsive UI",
          desc: "Works perfectly on all devices",
          icon: "device",
        },
        {
          title: "CMS Integration",
          desc: "Headless WordPress setup",
          icon: "cms",
        },
        {
          title: "Performance",
          desc: "Optimized for speed",
          icon: "speed",
        },
        {
          title: "Technical SEO",
          desc: "Clean structure & meta data",
          icon: "seo",
        },
      ],
    },
    outcome: {
      description:
        "A modern, engaging and easy to manage website that truly represents Udupi Vrindavan's brand and helps them connect with more customers online.",
      highlights: [
        {
          title: "RESPONSIVE PAGES",
          desc: "Across all devices",
        },
        {
          title: "CONTENT WORKFLOW",
          desc: "Easier blog & menu updates",
        },
        {
          title: "SEARCH-READY STRUCTURE",
          desc: "Optimized for better visibility",
        },
      ],
      galleryImages: [
        {
          url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
          title: "A Pure Vegetarian Dining Experience",
          caption: "Warm ambiance showcasing traditional hospitality and architectural decor.",
        },
        {
          url: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
          title: "Artisanal Crispy Ghee Roast Dosa",
          caption: "High definition food photography optimized for instant appetite engagement.",
        },
        {
          url: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
          title: "Grand South Indian Banana Leaf Feast",
          caption: "Comprehensive menu photography with transparent dietary & nutritional cues.",
        },
      ],
    },
  },

  "02": {
    number: "02",
    title: "Pulse Commerce",
    titleSolid: "PULSE",
    titleStroke: "COMMERCE",
    tagline: "HIGH-THROUGHPUT FULL-STACK E-COMMERCE ENGINE",
    category: "MERN Stack Application",
    year: "2025",
    role: "Full-Stack Software Engineer",
    timeline: "2025",
    liveUrl: "https://pulse-commerce-demo.vercel.app",
    githubUrl: "https://github.com/rajshekhar/pulse-commerce",
    summary:
      "Pulse Commerce is a modern direct-to-consumer storefront and inventory management engine. Built with the MERN stack, it features optimistic cart mutations, instantaneous search indexing, JWT security, and a real-time analytics portal.",
    badgeText: "INSTANT CHECKOUT ✦ ZERO FRICTION ✦ ",
    brief: {
      description:
        "The client required an ultra-fast modern store capable of handling viral product flash drops without checkout latency, cart inventory race conditions, or uncoordinated catalog state.",
      client: "Pulse Commerce Group",
      timeline: "2025",
      services: "Full-Stack Development, Architecture, Payment Gateways",
      platform: "React 19, Node.js, MongoDB Atlas, Redis (Render & Vercel)",
    },
    experience: {
      tagline: "OPTIMISTIC MUTATIONS & INSTANT CHECKOUT",
      desktopImg:
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
      mobileImg:
        "https://images.unsplash.com/photo-1556742049-0a67c5574f73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1000",
      caption: "HIGH-CONCURRENCY STOREFRONT — DESKTOP & MOBILE",
    },
    challenges: [
      {
        number: "01",
        title: "Inventory Race Conditions",
        description:
          "High concurrent checkout attempts during flash drops caused over-selling and stock sync inconsistencies in legacy MySQL.",
      },
      {
        number: "02",
        title: "Cart Mutation Latency",
        description:
          "Standard round-trip server verification made cart addition sluggish and decreased impulsive conversion rates.",
      },
      {
        number: "03",
        title: "Real-time Telemetry",
        description:
          "The operations team needed immediate visibility into active baskets, checkouts, and fulfillment statuses.",
      },
    ],
    visualDirection: {
      description:
        "A stealth, high-contrast brutalist design language engineered for instant product scannability and laser focus on call-to-actions.",
      colors: [
        { name: "VOID SLATE", hex: "#0A0B10", role: "Primary Canvas Background" },
        { name: "ELECTRIC LIME", hex: "#D0F030", role: "Primary Action & Buy Pill", isLight: true },
        { name: "PULSE GREEN", hex: "#00D26A", role: "Live Stock Indicator", isLight: true },
        { name: "SIGNAL CRIMSON", hex: "#E62832", role: "Low Stock Alert" },
      ],
      typeface: {
        name: "ARCHIVO & JETBRAINS MONO",
        weights: "900 BLACK / 500 MONO",
        role: "Financial & SKU Precision",
      },
      sampleCard: {
        title: "Product Card",
        description: "Zero-latency optimistic cart mutation with instant drawer preview.",
        image:
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        price: "$180",
      },
    },
    building: {
      title: "REACTIVE MERN ARCHITECTURE",
      description:
        "Engineered with Node.js and Express backend clustered with Redis caching, MongoDB Atlas document sharding, and optimistic client state.",
      steps: [
        {
          tag: "REACT 19",
          title: "Client State",
          desc: "Zustand & Tailwind",
        },
        {
          tag: "NODE & REDIS",
          title: "Micro-Backend",
          desc: "Express & PubSub",
        },
        {
          tag: "MONGODB ATLAS",
          title: "Encrypted DB",
          desc: "Distributed Shards",
        },
      ],
      codeFile: "checkout.ts",
      codeSnippet: `export async function lockStock(sku: string, qty: number) {
  const locked = await redis.decrby(\`stock:\${sku}\`, qty)
  if (locked < 0) throw new Error("Item out of stock")
  return { success: true, reservationExpires: Date.now() + 600000 }
}`,
      features: [
        {
          title: "Responsive UI",
          desc: "Mobile-first one-thumb checkout",
          icon: "device",
        },
        {
          title: "Redis Stock Locking",
          desc: "Zero double-selling guarantee",
          icon: "speed",
        },
        {
          title: "WebSockets Sync",
          desc: "Real-time stock ticker updates",
          icon: "cms",
        },
        {
          title: "Stripe Webhooks",
          desc: "Idempotent payment capture",
          icon: "seo",
        },
      ],
    },
    outcome: {
      description:
        "Delivered a blisteringly fast retail platform that clocked a 99/100 Lighthouse performance score and 0 checkout drop-offs under test loads.",
      highlights: [
        {
          title: "SUB-SECOND CHECKOUT",
          desc: "Average transaction completed in 3.4s",
        },
        {
          title: "ZERO STOCK DRIFT",
          desc: "100% inventory accuracy during peak drop sales",
        },
        {
          title: "OPTIMISTIC MUTATIONS",
          desc: "Immediate 0ms UI feedback on all user interactions",
        },
      ],
      galleryImages: [
        {
          url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
          title: "Instant SKU Search & Filter Drawer",
          caption: "Full-text indexing with instantaneous filter response.",
        },
        {
          url: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
          title: "Telemetry Admin Dashboard",
          caption: "Live order stream and fulfillment dispatch panel.",
        },
      ],
    },
  },

  "03": {
    number: "03",
    title: "Atlas Dashboard",
    titleSolid: "ATLAS",
    titleStroke: "DASHBOARD",
    tagline: "HIGH-DENSITY DATA VISUALIZATION & TELEMETRY SUITE",
    category: "SaaS Analytics",
    year: "2024",
    role: "Lead Frontend Engineer",
    timeline: "2024",
    liveUrl: "https://atlas-analytics-demo.vercel.app",
    githubUrl: "https://github.com/rajshekhar/atlas-dashboard",
    summary:
      "A high-density analytics suite designed for fintech and cloud infrastructure telemetry. Combines customizable widgets, virtualized charts, and keyboard shortcuts for power analysts.",
    badgeText: "DEEP TELEMETRY ✦ 60 FPS CHARTS ✦ ",
    brief: {
      description:
        "Modern enterprise analysts spend hours wrestling with slow dashboards. The Atlas project aimed to compress massive streaming metrics into a lightning-fast UI.",
      client: "Atlas Infrastructure Inc.",
      timeline: "2024",
      services: "Frontend Engineering, Canvas Optimization, Design System",
      platform: "React 19, TypeScript, Canvas API, Tailwind CSS v4",
    },
    experience: {
      tagline: "HIGH-FREQUENCY STREAMING METRICS",
      desktopImg:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
      mobileImg:
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1000",
      caption: "TELEMETRY SUITE — DESKTOP & MOBILE",
    },
    challenges: [
      {
        number: "01",
        title: "DOM Node Bloat",
        description:
          "Rendering 20,000+ data nodes simultaneously with standard SVG caused severe garbage collection hiccups.",
      },
      {
        number: "02",
        title: "Real-time Telemetry Jitter",
        description:
          "High-rate WebSocket packets flooded the main thread and choked layout calculations.",
      },
      {
        number: "03",
        title: "Complex Filter States",
        description:
          "Multi-dimensional boolean queries required an intuitive yet compact keyboard-accessible interface.",
      },
    ],
    visualDirection: {
      description:
        "Dark mode canvas engineered for zero optical fatigue during 8+ hour monitoring sessions with tactical cyan and emerald data vectors.",
      colors: [
        { name: "MIDNIGHT GRAPHITE", hex: "#0E1117", role: "Primary Canvas" },
        { name: "CYAN VECTOR", hex: "#00E5FF", role: "Real-time Metric Stream", isLight: true },
        { name: "EMERALD ACTIVE", hex: "#00E676", role: "Cluster Health Positive", isLight: true },
        { name: "CRIMSON THRESHOLD", hex: "#FF1744", role: "Incident Alert State" },
      ],
      typeface: {
        name: "PLUS JAKARTA SANS & JETBRAINS MONO",
        weights: "600 SEMIBOLD / 500 TABULAR",
        role: "High Density Tabular Precision",
      },
    },
    building: {
      title: "VIRTUALIZED CANVAS PIPELINE",
      description:
        "Replaced heavy DOM SVG trees with hardware-accelerated HTML5 Canvas renderers and Web Workers offloading streaming calculations.",
      steps: [
        {
          tag: "HTML5 CANVAS",
          title: "Hardware GPU",
          desc: "60fps Render Loop",
        },
        {
          tag: "WEB WORKER",
          title: "Off-thread Math",
          desc: "Packet Aggregation",
        },
        {
          tag: "ZUSTAND",
          title: "Transient State",
          desc: "Zero-render Updates",
        },
      ],
      codeFile: "chart-engine.ts",
      codeSnippet: `export function renderStream(ctx: CanvasRenderingContext2D, points: Float32Array) {
  ctx.beginPath()
  for (let i = 0; i < points.length; i += 2) {
    ctx.lineTo(points[i], points[i + 1])
  }
  ctx.stroke()
}`,
      features: [
        {
          title: "Responsive UI",
          desc: "Adaptive responsive widget grid",
          icon: "device",
        },
        {
          title: "Canvas Charts",
          desc: "Hardware-accelerated 60fps graph",
          icon: "speed",
        },
        {
          title: "Off-thread Workers",
          desc: "Background mathematical computation",
          icon: "cms",
        },
        {
          title: "Keyboard Shortcuts",
          desc: "Vim-style navigation commands",
          icon: "seo",
        },
      ],
    },
    outcome: {
      description:
        "Shipped a resilient monitoring suite adopted by cloud engineering teams managing thousands of microservices.",
      highlights: [
        {
          title: "20,000+ CONCURRENT POINTS",
          desc: "Rock-solid 60 FPS animation loop",
        },
        {
          title: "-75% CPU UTILIZATION",
          desc: "Offloaded pipeline eliminated browser memory leaks",
        },
        {
          title: "INSTANT LATENCY DISCOVERY",
          desc: "Reduced Mean Time To Detection (MTTD) by 62%",
        },
      ],
      galleryImages: [
        {
          url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
          title: "Cluster Topology Overview",
          caption: "Interactive visual map of global edge nodes.",
        },
      ],
    },
  },

  "04": {
    number: "04",
    title: "Forma Archive",
    titleSolid: "FORMA",
    titleStroke: "ARCHIVE",
    tagline: "BRUTALIST DIGITAL ARTIFACT ARCHIVE & 3D GALLERY",
    category: "3D Editorial Gallery",
    year: "2024",
    role: "Creative Developer & 3D Artist",
    timeline: "2024",
    liveUrl: "https://forma-archive-demo.vercel.app",
    githubUrl: "https://github.com/rajshekhar/forma-archive",
    summary:
      "A brutalist digital museum preserving rare industrial design artifacts. Built with Three.js, WebGL shaders, and smooth kinetic inertia.",
    badgeText: "TACTILE WEBGL ✦ BRUTALIST FORM ✦ ",
    brief: {
      description:
        "Forma Archive explores the boundary between architectural sculpture and web experiences, allowing visitors to inspect 3D museum sculptures.",
      client: "Forma Foundation",
      timeline: "2024",
      services: "WebGL Development, 3D Asset Optimization, Kinetic Sound",
      platform: "React 19, Three.js, GLSL, WebGL (Vercel)",
    },
    experience: {
      tagline: "TACTILE 3D SCULPTURAL INSPECTION",
      desktopImg:
        "https://images.unsplash.com/photo-1565626424178-c699f6601afd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
      mobileImg:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1000",
      caption: "3D ARTIFACT EXHIBIT — DESKTOP & MOBILE",
    },
    challenges: [
      {
        number: "01",
        title: "Heavy 3D Geometry",
        description:
          "High-polygon CAD models took up over 45MB, requiring dramatic compression without losing surface bevels.",
      },
      {
        number: "02",
        title: "Mobile GPU Overheating",
        description:
          "Complex normal maps and shadow cascades throttled mobile frame rates to under 25 FPS.",
      },
      {
        number: "03",
        title: "Kinetic Scroll Sync",
        description:
          "Synchronizing 3D camera orbits with vertical text scroll needed exact mathematical easing.",
      },
    ],
    visualDirection: {
      description:
        "Monochrome architectural concrete with raw paper texture and high-contrast brutalist outlines.",
      colors: [
        { name: "RAW CONCRETE", hex: "#1A1A1A", role: "Primary Background" },
        { name: "TITANIUM CHALK", hex: "#F0EFEB", role: "Typography Contrast", isLight: true },
        { name: "OXIDE RUST", hex: "#C84B31", role: "Curator Accent" },
        { name: "MUSEUM DARK", hex: "#0E0E0E", role: "Pedestal Surface" },
      ],
      typeface: {
        name: "ARCHIVO & JETBRAINS MONO",
        weights: "900 BLACK CONDENSED",
        role: "Architectural Letterforms",
      },
    },
    building: {
      title: "DRACO-COMPRESSED THREE.JS ENGINE",
      description:
        "Compressed all 3D mesh files with Google Draco down to 800KB, streaming them dynamically with custom GLSL lighting shaders.",
      steps: [
        {
          tag: "THREE.JS",
          title: "WebGL Scene",
          desc: "GLSL Shader Pipeline",
        },
        {
          tag: "DRACO",
          title: "Mesh Stream",
          desc: "95% Asset Compression",
        },
        {
          tag: "GSAP TIKR",
          title: "Inertia Physics",
          desc: "Scroll-linked Rotations",
        },
      ],
      codeFile: "sculpture-viewer.ts",
      codeSnippet: `const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderPath('/draco/')
gltfLoader.setDRACOLoader(dracoLoader)
gltfLoader.load(modelUrl, (gltf) => scene.add(gltf.scene))`,
      features: [
        {
          title: "Responsive UI",
          desc: "Adaptive responsive canvas viewport",
          icon: "device",
        },
        {
          title: "Draco Compression",
          desc: "95% mesh payload reduction",
          icon: "speed",
        },
        {
          title: "Custom GLSL",
          desc: "Realistic tactile micro-cement shaders",
          icon: "cms",
        },
        {
          title: "Sound Design",
          desc: "Spatial audio cues on artifact rotation",
          icon: "seo",
        },
      ],
    },
    outcome: {
      description:
        "Awarded Site of the Day on Awwwards and lauded for its tactile fluid performance across both desktop and handheld devices.",
      highlights: [
        {
          title: "AWWWARDS NOMINEE",
          desc: "Site of the Day Winner",
        },
        {
          title: "SUB-1MB INITIAL BUNDLE",
          desc: "Streamlined progressive 3D asset delivery",
        },
        {
          title: "60 FPS ON MOBILE",
          desc: "Optimized WebGL pipeline with dynamic resolution",
        },
      ],
      galleryImages: [
        {
          url: "https://images.unsplash.com/photo-1565626424178-c699f6601afd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
          title: "Kinetic Sculpture Inspection",
          caption: "Real-time shadow casting and ambient light bouncing.",
        },
      ],
    },
  },
}
