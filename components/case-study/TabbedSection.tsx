import React, { useState } from "react"

const tabs = [
  { label: "Groups" },
  { label: "Teams" },
  { label: "Locations" },
  { label: "Email Templates" },
  { label: "Branding" },
]

export default function TabbedSection() {
  const [active, setActive] = useState(0)
  return (
    <div className="mb-6">
      <div className="flex gap-2 mb-4">
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            onClick={() => setActive(i)}
            className={`px-3 py-1 rounded-full text-sm font-medium border transition-colors ${active === i ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-100'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {/* Removed tab content placeholder */}
    </div>
  )
} 