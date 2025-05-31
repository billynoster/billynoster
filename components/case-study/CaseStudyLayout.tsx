import React from "react"
// import Topbar from "./Topbar"

export default function CaseStudyLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      <main className="flex-1 p-8 overflow-x-auto">{children}</main>
    </div>
  )
} 