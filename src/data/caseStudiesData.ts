import type { CaseStudyData } from "../types/portfolio";

export const caseStudies: Record<string, CaseStudyData> = {
  // ============================================================
  // 01 — UDUPI VRINDAVAN | REAL CLIENT PROJECT
  // ============================================================
  "01": {
    number: "01",
    title: "Udupi Vrindavan",
    titleSolid: "UDUPI",
    titleStroke: "VRINDAVAN",
    tagline: "SACRED SATVIK DINING & TEMPLE HERITAGE, BROUGHT ONLINE",
    category: "Restaurant & Hospitality Platform",
    year: "2025",
    role: "UI/UX Design & Full-Stack Development",
    timeline: "2025",
    liveUrl: "https://udupivrindavan.com/",
    githubUrl: "https://github.com/raazkumar24/udupi-vrindavan",

    summary:
      "A digital platform for Udupi Vrindavan, a pure-vegetarian South Indian restaurant in Al Karama, Dubai. The experience combines a temple-inspired visual identity, restaurant storytelling, online ordering links, customer enquiries and a content publishing workflow.",

    badgeText: "UDUPI VRINDAVAN / PURE SATVIK / DUBAI / ",

    brief: {
      description:
        "The restaurant needed a distinctive online presence that reflected its coastal Karnataka food heritage while making essential information easy to find. The website brings together the restaurant story, heritage, menu, customer reviews, contact details, online ordering links and editorial content in a responsive experience.",
      client: "Udupi Vrindavan Restaurant, Al Karama, Dubai",
      timeline: "2025",
      services:
        "UI/UX Design, Frontend Development, Content Integration, CRM Lead Capture, Technical SEO",
      platform:
        "React 19, TypeScript, Vite, Tailwind CSS v4, Vercel, Google Apps Script",
    },

    experience: {
      tagline: "Authentic Satvik Heritage, Digitally Preserved",
      desktopImg: "/ProjectsImages/Udupi/desktop.png",
      mobileImg: "/ProjectsImages/Udupi/mobile.png",
      caption:
        "A responsive restaurant experience built around cultural storytelling, food photography and clear ordering actions.",
      screen: {
        nav: [
          "Home",
          "Visit Udupi",
          "About Us",
          "Heritage",
          "Our Commitment",
          "Blog",
          "Contact Us",
        ],
        primary: "Order Online",
        secondary: "Explore Menu",
      },
    },

    challenges: [
      {
        number: "01",
        title: "Creating a distinctive restaurant identity",
        description:
          "The website needed to communicate the restaurant's South Indian and Satvik heritage without relying on generic restaurant design conventions. Deep temple blue, antique gold and warm cream create a more recognisable visual language.",
      },
      {
        number: "02",
        title: "Navigation across long sections and dedicated pages",
        description:
          "The experience combines long-form homepage sections with dedicated pages such as the blog and Visit Udupi guide. Navigation needed to take visitors to the right section or route without awkward scroll positioning.",
      },
      {
        number: "03",
        title: "Making content and enquiries manageable",
        description:
          "The restaurant needed a practical way to receive customer enquiries and publish content without maintaining a separate custom application server. Google Apps Script and Google Sheets support the relevant content and lead-capture workflows.",
      },
    ],

    visualDirection: {
      description:
        "A sacred Satvik visual identity inspired by South Indian temple heritage. Deep temple blue anchors headings and navigation, antique gold highlights important actions, and warm cream surfaces create an organic paper-like canvas. Subtle textures, decorative dividers and editorial typography add cultural character.",

      colors: [
        {
          name: "DEEP TEMPLE BLUE",
          hex: "#0F2F4A",
          role: "Primary typography, headings and navigation",
        },
        {
          name: "MIDNIGHT OCEAN INK",
          hex: "#0A2236",
          role: "Deep backgrounds and footer surfaces",
        },
        {
          name: "SACRED ANTIQUE GOLD",
          hex: "#D4A65A",
          role: "Primary CTAs, active states and decorative accents",
        },
        {
          name: "SOFT CHAMPAGNE GOLD",
          hex: "#EBCB8F",
          role: "Soft accents and typography on dark surfaces",
          isLight: true,
        },
        {
          name: "EARTHY BRONZE",
          hex: "#8A672C",
          role: "Eyebrow labels and category markers",
        },
        {
          name: "WARM SATVIK CREAM",
          hex: "#F7F3E9",
          role: "Primary page background and paper texture base",
          isLight: true,
        },
        {
          name: "SOFT IVORY",
          hex: "#FCFAF4",
          role: "Elevated cards, forms and menu panels",
          isLight: true,
        },
        {
          name: "TEMPLE SANDSTONE",
          hex: "#EEE5D1",
          role: "Subtle borders and section dividers",
          isLight: true,
        },
        {
          name: "WHATSAPP GREEN",
          hex: "#25D366",
          role: "WhatsApp enquiry and customer support actions",
          isLight: true,
        },
        {
          name: "SHIMMER GOLD",
          hex: "#F5D49B",
          role: "Gold text shimmer animation highlight",
          isLight: true,
        },
      ],

      typeface: {
        name: "GARET / POPPINS / CORMORANT GARAMOND / CINZEL DECORATIVE",
        weights: "REGULAR / MEDIUM / SEMIBOLD / BOLD / ITALIC",
        role: "Editorial restaurant branding, readable body copy and cultural accents",
      },

      sampleCard: {
        title: "Special Masala Dosa",
        description:
          "A menu presentation with warm surfaces, clear dish information and food photography.",
        image: "/ProjectsImages/Udupi/special-masala-dosa.jpg",
        price: "AED 16",
      },
    },

    building: {
      title: "A responsive platform with content and lead workflows",
      description:
        "Built with React 19, TypeScript, Vite and Tailwind CSS v4. The project uses Vercel serverless functionality for request handling and metadata delivery, alongside Google Apps Script and Google Sheets integrations for content and enquiry workflows.",

      steps: [
        {
          tag: "REACT 19 + VITE",
          title: "Frontend",
          desc: "Responsive pages, reusable components and route navigation",
        },
        {
          tag: "VERCEL",
          title: "Serverless Layer",
          desc: "Request handling, crawler metadata and deployment",
        },
        {
          tag: "GOOGLE APPS SCRIPT",
          title: "Content & Enquiries",
          desc: "Google Sheets-backed content and lead workflows",
        },
      ],

      codeFile: "SignatureMenu.tsx",

      codeSnippet: `const onMouseMove = (e: React.MouseEvent) => {
  if (!isDragging.current || !scrollRef.current) return;

  e.preventDefault();

  const x = e.pageX - scrollRef.current.offsetLeft;
  const walk = (x - startX.current) * 1.4;

  scrollRef.current.scrollLeft = scrollLeft.current - walk;
};

// Prevent accidental navigation after a drag gesture.
onClick={(e) => {
  const moved = Math.abs(
    (scrollRef.current?.scrollLeft ?? 0) - scrollLeft.current
  );

  if (moved > 5) e.preventDefault();
}}`,

      features: [
        {
          title: "Draggable Signature Menu",
          desc: "A horizontal menu category track with mouse-drag and touch-swipe interaction.",
          icon: "device",
        },
        {
          title: "Customer Enquiry CRM",
          desc: "Validated enquiry form connected to a Google Apps Script workflow.",
          icon: "cms",
        },
        {
          title: "Content Publishing",
          desc: "Blog content workflow with API integration and caching.",
          icon: "speed",
        },
        {
          title: "Local SEO Structure",
          desc: "Restaurant metadata, structured data and location information.",
          icon: "seo",
        },
      ],
    },

    outcome: {
      description:
        "A live restaurant website that brings the brand story, menu discovery, customer enquiries, online ordering links and useful visitor information into one responsive digital experience.",

      highlights: [
        {
          title: "A DISTINCTIVE RESTAURANT IDENTITY",
          desc: "Temple-inspired colors, cultural details and editorial typography.",
        },
        {
          title: "CONNECTED CUSTOMER JOURNEY",
          desc: "Menu discovery, contact details, maps and ordering links in one place.",
        },
        {
          title: "CONTENT & SEO FOUNDATION",
          desc: "Content workflows, metadata and structured data for discoverability.",
        },
      ],

      galleryImages: [
        {
          url: "/ProjectsImages/Udupi/special-masala-dosa.jpg",
          title: "Special Masala Dosa",
          caption: "Crispy golden dosa served with authentic coconut chutney and sambar.",
        },
        {
          url: "/ProjectsImages/Udupi/Lunch.jpg",
          title: "Traditional South Indian Thali",
          caption: "A traditional meal presentation from the restaurant.",
        },
        {
          url: "/ProjectsImages/Udupi/ourheritage.jpeg",
          title: "Culinary Heritage",
          caption: "A visual introduction to the restaurant's cultural roots.",
        },
      ],
    },
  },

  // ============================================================
  // 02 — GENZ STORE | REAL PROJECT / FULL-STACK CONCEPT STORE
  // ============================================================
  "02": {
    number: "02",
    title: "Genz Store",
    titleSolid: "GENZ",
    titleStroke: "STORE",
    tagline: "BRUTALIST STREETWEAR WITH A PRODUCT-FIRST SHOPPING EXPERIENCE",
    category: "Full-Stack E-commerce",
    year: "2025",
    role: "UI/UX Design & Full-Stack Development",
    timeline: "2025",
    liveUrl: "https://genz-store-seven.vercel.app/",
    githubUrl: "https://github.com/raazkumar24/Genz-Store",

    summary:
      "A streetwear e-commerce platform with an architectural brutalist design system, interactive product cards, color and size variants, quick-add shopping, cart discounts and an admin catalog workflow.",

    badgeText: "GENZ STORE / STREETWEAR / REACT / NODE / MONGODB / ",

    brief: {
      description:
        "The goal was to build a streetwear storefront with a strong visual identity and more interactive product discovery than a standard catalog. The experience combines sharp rectangular layouts, lookbook imagery, garment specifications, color variants, size selection and cart management, supported by a separate API and admin tools.",
      client: "Personal Full-Stack Project",
      timeline: "2025",
      services:
        "Design System, UI/UX Design, Frontend Development, REST API Development, Database Integration",
      platform:
        "React 19, Vite, Tailwind CSS v4, Node.js, Express, MongoDB, Cloudinary, Vercel, Render",
    },

    experience: {
      tagline: "Raw Streetwear Architecture, Built for Product Discovery",
      desktopImg: "/ProjectsImages/Genz/desktop.png",
      mobileImg: "/ProjectsImages/Genz/mobile.png",
      caption:
        "A streetwear storefront featuring a bento-style hero, product imagery and quick-add size selection.",
      screen: {
        nav: ["Home", "New Arrivals", "Collections", "Sale", "Cart"],
        primary: "Explore Drops",
        secondary: "View Product",
      },
    },

    challenges: [
      {
        number: "01",
        title: "A strict geometric design language",
        description:
          "The visual direction required sharp, square-edged components throughout the storefront while preserving circular color swatches, status indicators and cart counters where circular shapes are functional.",
      },
      {
        number: "02",
        title: "Keeping product variants in sync",
        description:
          "Products can have different colors, sizes, stock levels and image sets. Selecting a variant needs to update the displayed imagery and available size choices without disrupting the product browsing experience.",
      },
      {
        number: "03",
        title: "Managing a changing product catalog",
        description:
          "The store needs product and collection management, multiple product images and editable hero content. The backend uses protected admin routes and a media upload pipeline connected to Cloudinary.",
      },
    ],

    visualDirection: {
      description:
        "An architectural streetwear aesthetic built on an off-white canvas and pitch-black typography. Cinnabar vermilion provides the main brand accent, while electric lime and digital lavender bring energy to collection tags and promotional details. The interface follows a strict zero-border-radius rule, with circular exceptions only for functional indicators.",

      colors: [
        {
          name: "ARCHITECTURAL CANVAS",
          hex: "#F4F4F0",
          role: "Main storefront and cart background",
          isLight: true,
        },
        {
          name: "PURE WHITE",
          hex: "#FFFFFF",
          role: "Product cards, panels and modal surfaces",
          isLight: true,
        },
        {
          name: "INDUSTRIAL CONCRETE",
          hex: "#EFEFEA",
          role: "Secondary surfaces and filter containers",
          isLight: true,
        },
        {
          name: "PITCH SOFT BLACK",
          hex: "#0D0D11",
          role: "Primary typography, buttons and dark elements",
        },
        {
          name: "DARK VAULT",
          hex: "#14151B",
          role: "Dark panels and admin surfaces",
        },
        {
          name: "CINNABAR FLAME",
          hex: "#E34234",
          role: "Primary brand accent, sale badges and CTAs",
        },
        {
          name: "DEEP VERMILION",
          hex: "#C93326",
          role: "Primary interactive hover state",
        },
        {
          name: "ELECTRIC ACID LIME",
          hex: "#D4FF3F",
          role: "Drop highlights and promotional accents",
          isLight: true,
        },
        {
          name: "DIGITAL LAVENDER",
          hex: "#CBB3EB",
          role: "Collection accents and promotional tags",
          isLight: true,
        },
        {
          name: "HYPER BLUE",
          hex: "#0044FF",
          role: "Secondary digital accent and focus states",
        },
        {
          name: "SOPHISTICATED SLATE",
          hex: "#6B6B76",
          role: "Secondary text and product specifications",
        },
        {
          name: "SUBTLE SLATE",
          hex: "#9898A4",
          role: "Tertiary text and disabled states",
        },
        {
          name: "STRUCTURAL BORDER",
          hex: "#E8E8E2",
          role: "Grid lines, card borders and dividers",
          isLight: true,
        },
        {
          name: "EMERALD SUCCESS",
          hex: "#10B981",
          role: "In-bag and success indicators",
          isLight: true,
        },
      ],

      typeface: {
        name: "SYNE / BEBAS NEUE / PLUS JAKARTA SANS / SPACE GROTESK",
        weights: "REGULAR / MEDIUM / SEMIBOLD / BOLD / EXTRA BOLD",
        role: "Editorial streetwear display, readable UI and technical product specifications",
      },

      sampleCard: {
        title: "Heavyweight Streetwear Tee",
        description:
          "A product card concept highlighting garment photography, fabric details and size availability.",
        image: "/ProjectsImages/Genz/heavyweight-tee.jpg",
        price: "₹1,499",
      },
    },

    building: {
      title: "A decoupled storefront and commerce backend",
      description:
        "The React and Vite storefront communicates with an Express API backed by MongoDB. Cloudinary handles product media, while the frontend and backend are deployed separately on Vercel and Render.",

      steps: [
        {
          tag: "REACT 19 + VITE",
          title: "Storefront",
          desc: "Product cards, variant selection and cart interactions",
        },
        {
          tag: "NODE + EXPRESS + MONGODB",
          title: "Commerce API",
          desc: "Product data, orders and protected admin operations",
        },
        {
          tag: "CLOUDINARY",
          title: "Media Pipeline",
          desc: "Product image uploads and optimized media delivery",
        },
      ],

      codeFile: "ProductCard.jsx",

      codeSnippet: `const activeVariant =
  product.variants?.find(
    (variant) => variant._id === selectedVariantId
  ) ||
  product.displayVariant ||
  product.variants?.find((variant) => variant.stock > 0) ||
  product.variants?.[0];

const primaryImage =
  activeVariant?.images?.[0] || product.image;

const secondaryImage =
  activeVariant?.images?.[1] || primaryImage;

const discountPercent = isSaleActive
  ? Math.round(
      ((displayPrice - salePrice) / displayPrice) * 100
    )
  : 0;`,

      features: [
        {
          title: "Dual Lookbook Product Cards",
          desc: "Product imagery switches to a second angle on hover.",
          icon: "device",
        },
        {
          title: "Quick-Add Size Selection",
          desc: "Select an available size directly from the product card.",
          icon: "speed",
        },
        {
          title: "Variant & Cart Management",
          desc: "Color, size, stock and cart state work together.",
          icon: "cms",
        },
        {
          title: "Admin Catalog Management",
          desc: "Protected tools for product, collection and hero content management.",
          icon: "seo",
        },
      ],
    },

    outcome: {
      description:
        "A full-stack streetwear storefront with a distinct visual system, interactive product discovery, variant-aware shopping and a separate backend for catalog management. Checkout initiation is present, but a live payment gateway is not connected.",

      highlights: [
        {
          title: "DISTINCTIVE BRUTALIST UI",
          desc: "Sharp rectangular components and a high-contrast streetwear palette.",
        },
        {
          title: "INTERACTIVE PRODUCT DISCOVERY",
          desc: "Lookbook image changes, variant swatches and quick-add size selection.",
        },
        {
          title: "FULL-STACK CATALOG SYSTEM",
          desc: "React storefront connected to an Express and MongoDB backend.",
        },
      ],

      galleryImages: [
        {
          url: "/ProjectsImages/Genz/desktop.png",
          title: "Streetwear Lookbook",
          caption: "Desktop storefront introducing the collection.",
        },
        {
          url: "/ProjectsImages/Genz/heavyweight-tee.jpg",
          title: "Heavyweight Boxy Tee",
          caption: "Product details with 240 GSM combed cotton specifications.",
        },
        {
          url: "/ProjectsImages/Genz/mobile.png",
          title: "Mobile Commerce Experience",
          caption: "Mobile interface for fast garment browsing.",
        },
      ],
    },
  },

  // ============================================================
  // 03 — NOVA FINANCE | SAMPLE / CONCEPT PROJECT
  // ============================================================
  "03": {
    number: "03",
    title: "Nova Finance",
    titleSolid: "NOVA",
    titleStroke: "FINANCE",
    tagline: "FINANCIAL CLARITY WITHOUT THE CLUTTER",
    category: "Fintech Dashboard",
    year: "2026",
    role: "UI/UX & Frontend Development",
    timeline: "Concept Project",

    summary:
      "A conceptual finance dashboard designed to make personal finance easier to understand through clear metrics, spending charts and budget tracking.",

    badgeText: "FINTECH / REACT / TYPESCRIPT / ",

    brief: {
      description:
        "A fictional fintech dashboard concept focused on simplifying personal finance. The interface brings spending insights, account summaries and budget information into one organized workspace.",
      client: "Personal Concept Project",
      timeline: "Concept Project",
      services: "UI Design, Frontend Development, Data Visualization",
      platform: "React, TypeScript, Tailwind CSS",
    },

    experience: {
      tagline: "Your money, at a glance",
      desktopImg:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
      mobileImg:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1000",
      caption: "Concept dashboard across desktop and mobile",
      screen: {
        nav: ["Overview", "Transactions", "Budgets", "Settings"],
        primary: "View Analytics",
        secondary: "Export Report",
      },
    },

    challenges: [
      {
        number: "01",
        title: "Too much financial information",
        description:
          "Important financial metrics need a clear visual hierarchy so users can understand their finances quickly.",
      },
      {
        number: "02",
        title: "Making data understandable",
        description:
          "Charts and spending categories should communicate useful information without overwhelming the interface.",
      },
      {
        number: "03",
        title: "Designing for smaller screens",
        description:
          "The dashboard layout needs to adapt to mobile screens while keeping important financial information accessible.",
      },
    ],

    visualDirection: {
      description:
        "A clean financial interface with deep navy typography, electric blue accents and subtle green indicators. Light surfaces keep the dashboard calm and readable.",

      colors: [
        {
          name: "MIDNIGHT NAVY",
          hex: "#172554",
          role: "Primary brand and headings",
        },
        {
          name: "CLOUD WHITE",
          hex: "#F8FAFC",
          role: "Main background",
          isLight: true,
        },
        {
          name: "ELECTRIC BLUE",
          hex: "#2563EB",
          role: "Primary accent and actions",
        },
        {
          name: "MINT GREEN",
          hex: "#10B981",
          role: "Positive indicators",
          isLight: true,
        },
      ],

      typeface: {
        name: "INTER",
        weights: "REGULAR / MEDIUM / SEMIBOLD",
        role: "Dashboard and data typography",
      },

      sampleCard: {
        title: "Monthly Overview",
        description:
          "A sample summary of income, expenses and savings.",
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
          desc: "Reusable components",
        },
        {
          tag: "TYPESCRIPT",
          title: "Data Structure",
          desc: "Typed data models",
        },
        {
          tag: "TAILWIND",
          title: "Styling",
          desc: "Responsive layout",
        },
      ],

      codeFile: "MetricCard.tsx",

      codeSnippet: `type Metric = {
  label: string;
  value: number;
  change: number;
};

function MetricCard({ metric }: { metric: Metric }) {
  return (
    <article className="metric-card">
      <span>{metric.label}</span>
      <h2>{metric.value.toLocaleString()}</h2>
      <p>{metric.change}%</p>
    </article>
  );
}`,

      features: [
        {
          title: "Financial Overview",
          desc: "Important metrics presented in one place.",
          icon: "device",
        },
        {
          title: "Data Visualization",
          desc: "Readable charts and financial insights.",
          icon: "speed",
        },
        {
          title: "Reusable Components",
          desc: "A modular interface system.",
          icon: "cms",
        },
        {
          title: "Typed Data",
          desc: "Structured TypeScript data models.",
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
          desc: "Key numbers at a glance.",
        },
        {
          title: "MODULAR INTERFACE",
          desc: "Reusable dashboard components.",
        },
        {
          title: "RESPONSIVE LAYOUT",
          desc: "Designed for different screen sizes.",
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

  // ============================================================
  // 04 — FORMA STUDIO | SAMPLE / CONCEPT PROJECT
  // ============================================================
  "04": {
    number: "04",
    title: "Forma Studio",
    titleSolid: "FORMA",
    titleStroke: "STUDIO",
    tagline: "SPACES DESIGNED TO MAKE A STATEMENT",
    category: "Architecture Portfolio",
    year: "2026",
    role: "Creative Development",
    timeline: "Concept Project",

    summary:
      "An editorial-style architecture portfolio concept showcasing contemporary spaces through large photography, refined typography and immersive layouts.",

    badgeText: "ARCHITECTURE / GSAP / REACT / ",

    brief: {
      description:
        "A fictional architecture studio website designed around visual storytelling. The experience combines large project imagery, minimal typography and thoughtful motion to present architectural work.",
      client: "Personal Concept Project",
      timeline: "Concept Project",
      services: "UI Design, Frontend Development, Motion Design",
      platform: "React, GSAP, Tailwind CSS",
    },

    experience: {
      tagline: "Architecture deserves its own space",
      desktopImg:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
      mobileImg:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1000",
      caption: "Concept architecture portfolio across desktop and mobile",
      screen: {
        nav: ["Studio", "Projects", "Approach", "Contact"],
        primary: "Explore Projects",
        secondary: "Our Studio",
      },
    },

    challenges: [
      {
        number: "01",
        title: "Let the architecture speak",
        description:
          "Large images need enough room to communicate the character and details of each architectural project.",
      },
      {
        number: "02",
        title: "Motion with a purpose",
        description:
          "Subtle transitions and scroll-based animations should guide visitors without distracting from the photography.",
      },
      {
        number: "03",
        title: "An editorial experience",
        description:
          "Typography, spacing and image composition need to work together like a carefully designed architecture publication.",
      },
    ],

    visualDirection: {
      description:
        "Warm stone backgrounds, deep charcoal typography and muted terracotta accents create a refined architectural identity. Spacious layouts and strong photography define the experience.",

      colors: [
        {
          name: "RAW STONE",
          hex: "#E8E3DA",
          role: "Primary background",
          isLight: true,
        },
        {
          name: "CHARCOAL",
          hex: "#252525",
          role: "Typography and contrast",
        },
        {
          name: "TERRACOTTA",
          hex: "#B66A4B",
          role: "Brand accent",
        },
        {
          name: "PAPER WHITE",
          hex: "#FAF9F6",
          role: "Cards and content surfaces",
          isLight: true,
        },
      ],

      typeface: {
        name: "MANROPE / PLAYFAIR DISPLAY",
        weights: "REGULAR / MEDIUM / SEMIBOLD",
        role: "Editorial and architectural typography",
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
          desc: "Component architecture",
        },
        {
          tag: "GSAP",
          title: "Animation",
          desc: "Scroll-linked motion",
        },
        {
          tag: "TAILWIND",
          title: "Styling",
          desc: "Responsive design",
        },
      ],

      codeFile: "ScrollAnimation.tsx",

      codeSnippet: `import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.from(".project-image", {
  y: 80,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".project-section",
    start: "top 80%",
  },
});`,

      features: [
        {
          title: "Editorial Layout",
          desc: "Typography-led visual storytelling.",
          icon: "device",
        },
        {
          title: "Scroll Animations",
          desc: "Motion powered by GSAP.",
          icon: "speed",
        },
        {
          title: "Project Gallery",
          desc: "Large architectural imagery.",
          icon: "cms",
        },
        {
          title: "Responsive Design",
          desc: "Layouts for different screen sizes.",
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
          desc: "A refined, publication-inspired layout.",
        },
        {
          title: "VISUAL STORYTELLING",
          desc: "Architecture presented through imagery.",
        },
        {
          title: "MOTION & INTERACTION",
          desc: "Purposeful scroll-based animation.",
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
