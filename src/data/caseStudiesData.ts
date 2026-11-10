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
  // 03 — AAYAM STRENGTH STUDIO | DEMO GYM WEBSITE
  // ============================================================
  "03": {
    number: "03",
    title: "Aayam Strength Studio",
    titleSolid: "AAYAM",
    titleStroke: "STUDIO",
    tagline: "A GYM SITE THAT SOUNDS LIKE A COACH, NOT A SUPPLEMENT AD",
    category: "Gym Website",
    year: "2026",
    role: "Design & Frontend Development",
    timeline: "2026",
    liveUrl: "https://gymsitedemo-ecru.vercel.app",
    githubUrl: "https://github.com/raazkumar24/GYM",

    summary:
      "A one-page site for a strength studio in Indiranagar, Bengaluru. Programs, recovery rooms, coaches, an FAQ and a pricing table in rupees — and a free-trial form that opens WhatsApp with the message already written.",

    badgeText: "AAYAM / STRENGTH STUDIO / BENGALURU / ",

    brief: {
      description:
        "Most gym sites I looked at were neon, shouty and full of stock six-packs. I wanted the opposite: earthy colours, big condensed type and calm motion, with the practical stuff a member actually asks — what does it cost, when is it open, how do I try it. This is a demo I built to show studio owners, so the address, stats and reviews on it are sample content.",
      client: "Demo site for gyms and studios",
      timeline: "2026",
      services: "Design, Frontend Development, Motion, Copywriting",
      platform: "React 19, TypeScript, Vite, Tailwind CSS v4, Motion, Lenis, Vercel",
    },

    experience: {
      tagline: "Strength, held with intention",
      desktopImg: "/ProjectsImages/Aayam/desktop.png",
      mobileImg: "/ProjectsImages/Aayam/mobile.png",
      caption:
        "The hero opens out of a rounded frame and the photo drifts slower than the text as you scroll.",
      screen: {
        nav: ["About", "Programs", "Pricing", "Coaches", "FAQ"],
        primary: "Free Trial",
        secondary: "Book a free session",
      },
    },

    challenges: [
      {
        number: "01",
        title: "Not looking like every other gym",
        description:
          "Dark, neon and aggressive is the default. I went with bone and clay colours, a grain overlay and an italic serif next to heavy condensed caps, so it feels closer to a magazine than a flyer.",
      },
      {
        number: "02",
        title: "Pricing people can read in a second",
        description:
          "Four plans, three billing periods. A toggle switches between monthly, quarterly (−10%) and annual (−25%) and every price recalculates in Indian number format and still ends in 99.",
      },
      {
        number: "03",
        title: "Getting the enquiry somewhere useful",
        description:
          "Small studios answer on WhatsApp, not email. Picking a plan fills the trial form, and submitting opens WhatsApp with name, phone, plan and preferred time already typed out.",
      },
    ],

    visualDirection: {
      description:
        "Ink and paper with a burnt clay accent. Archivo condensed for the big headings, Instrument Serif italics for the one word that matters, and Geist Mono for small labels like opening hours.",

      colors: [
        {
          name: "INK",
          hex: "#151513",
          role: "Hero, text and dark cards",
        },
        {
          name: "PAPER",
          hex: "#F5F2EC",
          role: "Page background",
          isLight: true,
        },
        {
          name: "CLAY",
          hex: "#B8502C",
          role: "Accent, buttons and discounts",
        },
        {
          name: "BONE",
          hex: "#ECE8E0",
          role: "Toggles and quiet surfaces",
          isLight: true,
        },
      ],

      typeface: {
        name: "ARCHIVO / INSTRUMENT SERIF",
        weights: "CONDENSED 600 / ITALIC 400 / GEIST MONO",
        role: "Display caps, serif accents and mono labels",
      },

      sampleCard: {
        title: "Transit",
        description:
          "4 personal sessions a month, sauna and cold plunge daily, priority class booking.",
        image:
          "https://images.unsplash.com/photo-1734668485281-c1d03fee6023?auto=format&fit=crop&q=80&w=400",
        price: "₹4,999",
      },
    },

    building: {
      title: "One data file, small components",
      description:
        "Everything the owner would change — plans, programs, hours, WhatsApp number — sits in one data.ts file. Motion handles the reveals and scroll parallax, Lenis smooths the scroll, and both switch off when the visitor has reduced motion turned on.",

      steps: [
        {
          tag: "REACT 19",
          title: "Sections",
          desc: "Hero, programs, pricing, trial",
        },
        {
          tag: "MOTION",
          title: "Animation",
          desc: "Scroll-linked parallax",
        },
        {
          tag: "TAILWIND V4",
          title: "Styling",
          desc: "Theme tokens in CSS",
        },
      ],

      codeFile: "Pricing.tsx",

      codeSnippet: `const inr = (n: number) =>
  new Intl.NumberFormat("en-IN").format(n)

const [billing, setBilling] = useState<Billing>("monthly")
const opt = billingOptions.find((b) => b.id === billing)!

// quarterly −10%, annual −25%, price still ends in 99
const monthly = opt.off
  ? Math.round((p.price * (1 - opt.off)) / 100) * 100 - 1
  : p.price`,

      features: [
        {
          title: "WhatsApp Trial Form",
          desc: "Opens a pre-written message with the chosen plan.",
          icon: "device",
        },
        {
          title: "Billing Toggle",
          desc: "Monthly, quarterly or annual, priced in rupees.",
          icon: "cms",
        },
        {
          title: "Scroll Motion",
          desc: "Parallax hero and line-by-line reveals.",
          icon: "speed",
        },
        {
          title: "Reduced Motion",
          desc: "Lenis and animations step aside when asked.",
          icon: "seo",
        },
      ],
    },

    outcome: {
      description:
        "A gym site I can hand to a studio owner and swap their details into in an afternoon: one data file, live on Vercel, and an enquiry flow that lands in the app they already use.",

      highlights: [
        {
          title: "OWN VISUAL VOICE",
          desc: "Earthy, editorial, not neon.",
        },
        {
          title: "PRICING IN ₹",
          desc: "Three billing periods, one toggle.",
        },
        {
          title: "WHATSAPP FIRST",
          desc: "Enquiries go where owners reply.",
        },
      ],

      galleryImages: [
        {
          url: "/ProjectsImages/Aayam/desktop.png",
          title: "Hero",
          caption: "The first screen, with the oversized AAYAM wordmark below.",
        },
        {
          url: "/ProjectsImages/Aayam/pricing.png",
          title: "Pricing",
          caption: "Four plans with the monthly / quarterly / annual toggle.",
        },
      ],
    },
  },

  // ============================================================
  // 04 — SHOPNEST | FIRST FULL MERN STORE
  // ============================================================
  "04": {
    number: "04",
    title: "ShopNest",
    titleSolid: "SHOP",
    titleStroke: "NEST",
    tagline: "THE FIRST STORE I BUILT END TO END — LOGIN TO PLACED ORDER",
    category: "MERN E-commerce",
    year: "2025",
    role: "Full-Stack Development",
    timeline: "2025",
    liveUrl: "https://my-shop-r71y.onrender.com/",
    githubUrl: "https://github.com/raazkumar24/ecommerce-project",

    summary:
      "An online store on the MERN stack: accounts, a cart saved to your profile, a shipping → payment → place-order checkout, product reviews, and an admin side for products, orders and users. Product photos upload straight to Cloudinary.",

    badgeText: "SHOPNEST / MERN / JWT / CLOUDINARY / ",

    brief: {
      description:
        "Before Genz Store, I wanted to prove to myself I could build a whole shop without a template — the database, the API and every screen in between. ShopNest is where I learned JWT auth, protected and admin-only routes, Mongoose models with reviews inside products, and image uploads through Multer and Cloudinary.",
      client: "Personal Full-Stack Project",
      timeline: "2025",
      services: "Frontend, REST API, Database Design, Auth, Image Uploads",
      platform:
        "React 19, Vite, Tailwind CSS v4, Node.js, Express, MongoDB (Mongoose), JWT, Cloudinary, Render",
    },

    experience: {
      tagline: "Browse, add to cart, check out",
      desktopImg:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
      mobileImg:
        "https://images.unsplash.com/photo-1713947506242-8fcae733d158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1000",
      caption:
        "A React client and a separate Express API, live on Render.",
      screen: {
        nav: ["Home", "Products", "Categories", "Cart", "Admin"],
        primary: "Add to Cart",
        secondary: "View Cart",
      },
    },

    challenges: [
      {
        number: "01",
        title: "Keeping the cart with the user",
        description:
          "A cart in localStorage disappears on another device. The cart lives in MongoDB against the user and is fetched with their token, while shipping address and payment method stay in localStorage between checkout steps.",
      },
      {
        number: "02",
        title: "Who is allowed to do what",
        description:
          "Shoppers, logged-in customers and admins all see different things. An Express middleware checks the Bearer token on every protected route, and a second one blocks anything admin-only.",
      },
      {
        number: "03",
        title: "Products that admins can actually manage",
        description:
          "Admins add and edit products with several images, stock count, brand and category. Images go through Multer to Cloudinary, so the database only stores URLs.",
      },
    ],

    visualDirection: {
      description:
        "Soft and warm instead of the usual blue shop: dusty rose buttons, a deep cocoa for headings and a blush circle behind the featured product. Roboto keeps prices and forms easy to read.",

      colors: [
        {
          name: "DUSTY ROSE",
          hex: "#D98A7E",
          role: "Buttons, prices and links",
        },
        {
          name: "COCOA",
          hex: "#5C3A2E",
          role: "Headings and product names",
        },
        {
          name: "BLUSH",
          hex: "#FADCD9",
          role: "Hero shape and soft panels",
          isLight: true,
        },
        {
          name: "SAND",
          hex: "#D4A28E",
          role: "Gradient end on CTAs",
          isLight: true,
        },
      ],

      typeface: {
        name: "ROBOTO",
        weights: "REGULAR / MEDIUM / BOLD",
        role: "Everything — headings, prices and forms",
      },

      sampleCard: {
        title: "Featured product",
        description:
          "Name, price, a quantity stepper and Add to Cart, right in the hero.",
        image:
          "https://images.unsplash.com/photo-1483985988355-763728e1935b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        price: "ADD TO CART",
      },
    },

    building: {
      title: "A React client and an Express API",
      description:
        "The client and server are separate folders. React context holds auth, cart and notifications; the API is split into product, user and order routes with controllers and Mongoose models behind them.",

      steps: [
        {
          tag: "REACT",
          title: "Client",
          desc: "Pages, context, checkout",
        },
        {
          tag: "EXPRESS",
          title: "API",
          desc: "Routes, JWT middleware",
        },
        {
          tag: "MONGODB",
          title: "Data",
          desc: "Users, products, orders",
        },
      ],

      codeFile: "authMiddleware.js",

      codeSnippet: `const protect = async (req, res, next) => {
  const header = req.headers.authorization
  if (!header?.startsWith("Bearer")) {
    return res.status(401).json({ message: "Not authorized, no token" })
  }
  try {
    const token = header.split(" ")[1]
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = await User.findById(decoded.id).select("-password")
    next()
  } catch {
    res.status(401).json({ message: "Not authorized, token failed" })
  }
}`,

      features: [
        {
          title: "Checkout Steps",
          desc: "Shipping, payment, then place order.",
          icon: "device",
        },
        {
          title: "Admin Panel",
          desc: "Products, orders and users in one place.",
          icon: "cms",
        },
        {
          title: "Reviews & Ratings",
          desc: "Stored inside each product document.",
          icon: "speed",
        },
        {
          title: "Cloudinary Uploads",
          desc: "Multiple images per product via Multer.",
          icon: "seo",
        },
      ],
    },

    outcome: {
      description:
        "ShopNest is rough in places, but it's the project where full-stack stopped being a word on my CV: a real login, a real database and an order that actually gets saved.",

      highlights: [
        {
          title: "FULL MERN FLOW",
          desc: "Database to checkout, no template.",
        },
        {
          title: "ROLE-BASED ACCESS",
          desc: "Customer and admin routes.",
        },
        {
          title: "CLOUD IMAGES",
          desc: "Uploads straight to Cloudinary.",
        },
      ],

      galleryImages: [
        {
          url: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
          title: "Checkout",
          caption: "Shipping, payment method and order summary.",
        },
        {
          url: "https://images.unsplash.com/photo-1713947506242-8fcae733d158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
          title: "On mobile",
          caption: "The same flow on a phone.",
        },
      ],
    },
  },
};
