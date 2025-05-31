import React, { useState } from "react"

const navItems = [
  { label: "Dashboard", icon: "🏠" },
  { label: "Lifecycle", icon: "🔄" },
  { label: "Analytics", icon: "📊" },
  { label: "Projects", icon: "📁" },
  { label: "Team", icon: "👥" },
  { label: "Data Library", icon: "📚" },
  { label: "Reports", icon: "📑" },
  { label: "Word Assistant", icon: "✍️" },
]

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(true)
  return (
    <aside className={`bg-white border-r border-stone-200 flex flex-col min-h-screen transition-all duration-200 ${collapsed ? 'w-20' : 'w-56'}`}>
      <div className="h-16 flex items-center justify-center border-b border-stone-200">
        <button
          className="w-10 h-10 flex items-center justify-center rounded hover:bg-stone-100 transition-colors"
          onClick={() => setCollapsed((c) => !c)}
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          <span className="text-2xl">{collapsed ? '☰' : '✕'}</span>
        </button>
      </div>
      <nav className="flex-1 px-2 py-6 space-y-2">
        {navItems.map((item) => (
          <a
            key={item.label}
            href="#"
            className="flex items-center gap-3 px-2 py-2 rounded-md text-stone-700 hover:bg-stone-100 transition-colors text-sm font-medium"
          >
            <span className="text-xl w-8 flex-shrink-0 flex items-center justify-center">{item.icon}</span>
            <span className={`transition-all duration-200 ${collapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100 w-auto ml-1'}`}>{item.label}</span>
          </a>
        ))}
      </nav>
      <div className={`px-2 py-4 mt-auto space-y-2 border-t border-stone-100 ${collapsed ? 'items-center' : ''}`}>
        <a href="#" className="flex items-center gap-2 text-stone-500 hover:text-stone-900 text-sm">
          <span className="text-xl w-8 flex-shrink-0 flex items-center justify-center">⚙️</span>
          <span className={`transition-all duration-200 ${collapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100 w-auto ml-1'}`}>Settings</span>
        </a>
        <a href="#" className="flex items-center gap-2 text-stone-500 hover:text-stone-900 text-sm">
          <span className="text-xl w-8 flex-shrink-0 flex items-center justify-center">❓</span>
          <span className={`transition-all duration-200 ${collapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100 w-auto ml-1'}`}>Get Help</span>
        </a>
      </div>
    </aside>
  )
} 