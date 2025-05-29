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
        "bg-white p-8 rounded-xl shadow-sm border border-stone-200 hover:shadow-md transition-shadow",
        className,
      )}
    >
      <div className="w-12 h-12 bg-stone-700 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-lg font-semibold text-stone-800 mb-3">{title}</h3>
      <p className="text-stone-600 leading-relaxed">{description}</p>
    </div>
  )
}
