import type { ReactNode } from "react"

export type Theme = "red" | "concrete"

export interface NavItem {
  id: string
  label: string
}

export interface ToolkitGroup {
  number: string
  title: string
  note: string
  tools: string[]
}

export interface Project {
  number: string
  title: string
  category: string
  year: string
  description: string
  tags: string[]
  image: string
  alt: string
}

export interface Service {
  number: string
  title: string
  description: string
  tags: string[]
  deliverables: string[]
}

export interface ProcessStep {
  number: string
  title: string
  duration: string
  description: string
}

export interface NowItem {
  label: string
  value: string
}

export interface SocialLink {
  label: string
  href: string
  handle?: string
  icon: ReactNode
}

export interface EnquiryForm {
  name: string
  email: string
  services: string[]
  budget: string
  timeline: string
  message: string
}

export type FormStatus = "idle" | "sending" | "sent"

export interface ColorToken {
  name: string
  hex: string
  role?: string
  isLight?: boolean
}

export interface CaseStudyChallenge {
  number: string
  title: string
  description: string
}

export interface CaseStudyArchitectureStep {
  tag: string
  title: string
  desc: string
}

export interface CaseStudyData {
  number: string
  title: string
  titleSolid?: string
  titleStroke?: string
  tagline: string
  category: string
  year: string
  role: string
  timeline: string
  /** Only set when the project is actually public */
  liveUrl?: string
  githubUrl?: string
  summary: string
  badgeText?: string
  
  // Section 01: The Brief
  brief: {
    description: string
    client: string
    timeline: string
    services: string
    platform: string
  }

  // Section 02: Device Mockup Showcase
  experience: {
    tagline: string
    desktopImg: string
    mobileImg: string
    caption: string
    /** Labels rendered inside the browser / phone mockups */
    screen: {
      nav: string[]
      primary: string
      secondary: string
    }
  }

  // Section 03: The Challenge
  challenges: CaseStudyChallenge[]

  // Section 04: Visual Direction & Design Tokens
  visualDirection: {
    description: string
    colors: ColorToken[]
    typeface: {
      name: string
      weights: string
      role: string
    }
    sampleCard?: {
      title: string
      description: string
      image: string
      price?: string
    }
  }

  // Section 05: Building the Experience
  building: {
    title: string
    description: string
    steps: CaseStudyArchitectureStep[]
    codeFile: string
    codeSnippet: string
    features: {
      title: string
      desc: string
      icon: "device" | "cms" | "speed" | "seo"
    }[]
  }

  // Section 06: The Outcome
  outcome: {
    description: string
    highlights: {
      title: string
      desc: string
    }[]
    galleryImages: {
      url: string
      title: string
      caption: string
    }[]
  }

  // Legacy compatibility
  palette?: ColorToken[]
  typography?: {
    display: string
    body: string
    mono: string
  }
  features?: {
    title: string
    description: string
  }[]
  architecture?: {
    frontend: string[]
    backend: string[]
    deployment: string[]
  }
  gallery?: {
    url: string
    title: string
    caption: string
  }[]
  metrics?: {
    label: string
    value: string
  }[]
}

