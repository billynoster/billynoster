import type React from "react"
import { cn } from "@/lib/utils"
import type { StatCard as StatCardType } from "../../types/case-study"

interface StatCardProps extends StatCardType {
  className?: string
}

export const StatCard: React.FC<StatCardProps> = ({ value, label, sublabel, color, className }) => {
  return (
    <div className={cn("text-center group", className)}>
      <div
        className={cn(
          "w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:scale-105 group-hover:shadow-md transition-all duration-200",
          color === "green" ? "bg-green-600" : "bg-stone-600",
        )}
      >
        <span className="text-xl font-bold text-white">{value}</span>
      </div>
      <h5 className="text-sm font-semibold text-stone-800 mb-1">{label}</h5>
      <p className="text-xs text-stone-600">{sublabel}</p>
    </div>
  )
}
