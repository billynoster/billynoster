import type React from "react"
export interface CaseStudyMeta {
  title: string
  subtitle: string
  year: string
  author: string
  company: string
  domain: string
  category: string
}

export interface OverviewItem {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  iconColor: string
  iconBgColor: string
}

export interface FeatureCard {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}

export interface StatCard {
  value: string
  label: string
  sublabel: string
  color: "stone" | "green"
}

export interface Group {
  id: string
  name: string
  description?: string
  locationCount: number
  userCount: number
  status: "active" | "inactive"
  color: string
}

export interface TableColumn {
  id: string
  header: string
  accessorKey?: string
  cell?: (row: any) => React.ReactNode
}

export type TabItem = {
  id: string
  label: string
  isActive?: boolean
}

export interface ActionMenuItem {
  icon: React.ComponentType<{ className?: string }>
  label: string
  action?: () => void
}
