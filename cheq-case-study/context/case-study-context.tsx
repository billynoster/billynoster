"use client"

import type React from "react"
import { createContext, useContext, useState, useMemo } from "react"
import type { Group } from "../types/case-study"

interface CaseStudyContextType {
  selectedGroup: Group | null
  setSelectedGroup: (group: Group) => void
  isMenuOpen: boolean
  setIsMenuOpen: (isOpen: boolean) => void
  activeTab: string
  setActiveTab: (tab: string) => void
}

const CaseStudyContext = createContext<CaseStudyContextType | undefined>(undefined)

export const CaseStudyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedGroup, setSelectedGroup] = useState<Group | null>({
    id: "1",
    name: "MRG PIZZA NV",
    locationCount: 6,
    userCount: 10,
    status: "active",
    color: "bg-green-500",
  })
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("groups")

  const value = useMemo(
    () => ({
      selectedGroup,
      setSelectedGroup,
      isMenuOpen,
      setIsMenuOpen,
      activeTab,
      setActiveTab,
    }),
    [selectedGroup, isMenuOpen, activeTab],
  )

  return <CaseStudyContext.Provider value={value}>{children}</CaseStudyContext.Provider>
}

export const useCaseStudy = (): CaseStudyContextType => {
  const context = useContext(CaseStudyContext)
  if (context === undefined) {
    throw new Error("useCaseStudy must be used within a CaseStudyProvider")
  }
  return context
}
