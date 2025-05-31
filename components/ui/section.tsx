import type React from "react"
import { cn } from "@/lib/utils"

interface SectionProps {
  id?: string
  title: string
  className?: string
  children: React.ReactNode
}

export const Section: React.FC<SectionProps> = ({ id, title, className, children }) => {
  return (
    <section id={id} className={cn("mb-20", className)} aria-labelledby={`section-${id}`}>
      <h2 id={`section-${id}`} className="text-3xl font-bold mb-4 text-stone-800">
        {title}
      </h2>
      {children}
    </section>
  )
}
