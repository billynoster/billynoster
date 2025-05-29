import { Target, Lightbulb, Users, Building2, Monitor, Settings } from "lucide-react"
import type { CaseStudyMeta, OverviewItem, FeatureCard, StatCard, TabItem } from "../types/case-study"

// Case Study Meta Information
const meta: CaseStudyMeta = {
  title: "Tattle Account Setup Redesign",
  subtitle:
    "Transforming the enterprise account setup experience to streamline group management and location organization for large-scale restaurant chains and franchises.",
  year: "2020",
  author: "Billy No, Senior Product Designer",
  company: "Tattle",
  domain: "gettattle.com",
  category: "Web App Design",
}

// Overview Items
const overview: OverviewItem[] = [
  {
    title: "Challenge",
    description:
      "Enterprise clients expressed concerns about performance, user experience, and limited functionality in the account setup process, particularly for large organizations with multiple locations worldwide.",
    icon: Target,
    iconColor: "text-red-600",
    iconBgColor: "bg-red-100",
  },
  {
    title: "Solution",
    description:
      "Redesigned the Groups feature with a scalable drawer panel interface, streamlined group creation, and enhanced management capabilities for enterprise-level clients.",
    icon: Lightbulb,
    iconColor: "text-green-600",
    iconBgColor: "bg-green-100",
  },
  {
    title: "Team",
    description:
      "Collaborated with the CTO, 2 engineers, and 1 product manager as the lead designer to deliver innovative enterprise features.",
    icon: Users,
    iconColor: "text-stone-600",
    iconBgColor: "bg-stone-100",
  },
]

// Features
const features: FeatureCard[] = [
  {
    title: "Streamlined Group Creation",
    description: "Simplified the group creation process with intuitive controls and reduced steps for faster setup.",
    icon: Settings,
  },
  {
    title: "Scalable Drawer Interface",
    description: "Replaced modal experience with a responsive drawer panel optimized for mobile and large datasets.",
    icon: Monitor,
  },
  {
    title: "Enterprise Management",
    description: "Advanced tools for managing hierarchical structures across thousands of locations and employees.",
    icon: Building2,
  },
]

// Results
const results: StatCard[] = [
  {
    value: "10K+",
    label: "Locations",
    sublabel: "Successfully managed",
    color: "stone",
  },
  {
    value: "85%",
    label: "Time Saved",
    sublabel: "In group creation",
    color: "green",
  },
  {
    value: "2",
    label: "Major Clients",
    sublabel: "Positive feedback",
    color: "stone",
  },
  {
    value: "100%",
    label: "Mobile Ready",
    sublabel: "Responsive design",
    color: "green",
  },
]

// Research Tabs
const researchTabs: TabItem[] = [
  { id: "interviews", label: "Interviews", isActive: true },
  { id: "surveys", label: "Surveys" },
  { id: "usability", label: "Usability Tests" },
  { id: "analytics", label: "Analytics" },
]

export const CASE_STUDY_CONSTANTS = {
  TABLE_ROWS: 7,
  PAGINATION_SIZE: 10,
  ANIMATION_DURATION: 200,
  BREAKPOINTS: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
} as const

export const CASE_STUDY_DATA = {
  meta,
  overview,
  features,
  results,
  researchTabs,
}
