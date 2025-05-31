import type React from "react"
import { cn } from "@/lib/utils"
import type { FeatureCard as FeatureCardType } from "../../types/case-study"

interface FeatureCardProps extends FeatureCardType {
  className?: string
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon: Icon, className }) => {
  return (
    <div
      className={cn(
        "group bg-white p-8 rounded-xl shadow-sm border border-stone-200 hover:shadow-md transition-all duration-300 hover:-translate-y-1",
        className,
      )}
    >
      <div className="flex items-center gap-3 mb-4">
        <div
          className={
            "w-10 h-10 bg-stone-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
          }
          aria-hidden="true"
        >
          <Icon className="w-5 h-5 text-white" />
        </div>
      </div>
      <h3 className="text-lg font-semibold text-stone-800 group-hover:text-blue-600 transition-colors duration-300 mb-3">{title}</h3>
      <p className="text-stone-600 leading-relaxed group-hover:text-stone-700 transition-colors duration-300">{description}</p>
    </div>
  )
}
