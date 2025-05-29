"use client"

import type React from "react"
import { TabNavigation } from "../ui/tab-navigation"
// No imports needed for icons since ActionDropdown is removed
import { useCaseStudy } from "../../context/case-study-context"

export const AccountHeader: React.FC = () => {
  const { activeTab, setActiveTab } = useCaseStudy()

  const tabs = [
    { id: "groups", label: "Groups" },
    { id: "teams", label: "Teams" },
    { id: "locations", label: "Locations" },
    { id: "email-templates", label: "Email Templates" },
    { id: "branding", label: "Branding" },
    { id: "default-links", label: "Default Links" },
    { id: "day-parts", label: "Day Parts" },
  ]

  return (
    <div className="p-6 border-b border-stone-200 bg-gradient-to-r from-white to-stone-50">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-2xl font-bold text-stone-800 mb-2">Account Setup</h3>
          <p className="text-sm text-stone-500">Manage your account settings and preferences</p>
        </div>
        <div className="flex items-center gap-4 bg-white rounded-xl p-3 shadow-sm border border-stone-200">
          <span className="text-sm font-medium text-stone-700">Steven Haze</span>
          <span className="text-xs text-stone-500">shaze@blazepizza.com</span>
          <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold shadow-md">
            SH
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mb-6">
        <TabNavigation tabs={tabs} activeTab={activeTab} onChange={setActiveTab} className="flex-1" />
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-6">
          <h4 className="text-xl font-bold text-stone-800">All Groups</h4>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="pl-12 pr-4 py-3 border border-stone-300 rounded-xl text-sm w-72 bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              aria-label="Search groups"
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <span className="w-5 h-5 text-stone-400">🔍</span>
            </div>
          </div>
          <button
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:from-blue-700 hover:to-blue-800 shadow-md hover:shadow-lg transform hover:scale-105 transition-all"
            aria-label="Create new group"
          >
            New Group
          </button>
        </div>
      </div>
    </div>
  )
}
