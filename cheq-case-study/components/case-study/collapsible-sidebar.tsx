"use client"

import type React from "react"
import { cn } from "@/lib/utils"
import { useCaseStudy } from "../../context/case-study-context"

interface CollapsibleSidebarProps {
  className?: string
}

export const CollapsibleSidebar: React.FC<CollapsibleSidebarProps> = ({ className }) => {
  const { activeTab, setActiveTab } = useCaseStudy()

  return (
    <div
      className={cn("w-16 bg-gradient-to-b from-white to-stone-50 border-r border-stone-200 shadow-inner", className)}
    >
      {/* Sidebar Header */}
      <div className="p-4 border-b border-stone-200 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="flex items-center justify-center">
          <div className="text-blue-600 font-bold text-lg tracking-tight">t</div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse ml-1"></div>
        </div>
      </div>

      {/* Navigation Icons Only */}
      <div className="p-2">
        <div className="space-y-3">
          {[
            { id: "dashboard", label: "Dashboard" },
            { id: "analytics", label: "Analytics" },
            { id: "groups", label: "Groups" },
            { id: "locations", label: "Locations" },
            { id: "users", label: "Users" },
            { id: "settings", label: "Settings" },
            { id: "help", label: "Help" },
            { id: "profile", label: "Profile" },
          ].map((item, i) => (
            <button
              key={i}
              className={cn(
                "w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-200",
                activeTab === item.id
                  ? "bg-gradient-to-br from-blue-500 to-blue-600 shadow-md transform scale-110"
                  : "bg-gradient-to-br from-stone-200 to-stone-300 hover:from-stone-300 hover:to-stone-400 hover:scale-105",
              )}
              onClick={() => setActiveTab(item.id)}
              aria-label={item.label}
              aria-pressed={activeTab === item.id}
            >
              <div
                className={cn(
                  "w-4 h-4 rounded-sm transition-all",
                  activeTab === item.id ? "bg-white shadow-sm" : "bg-stone-500",
                )}
              ></div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
