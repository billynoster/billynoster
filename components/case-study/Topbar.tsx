import React from "react"

export default function Topbar() {
  return (
    <header className="h-16 flex items-center justify-between border-b border-stone-200 bg-white px-8">
      <div className="font-medium text-stone-700 text-lg">Documents</div>
      <button className="bg-stone-900 text-white px-4 py-2 rounded-md text-sm font-medium shadow-sm hover:bg-stone-700 transition-colors">Quick Create</button>
    </header>
  )
} 