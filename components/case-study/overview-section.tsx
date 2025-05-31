import type React from "react"
import type { OverviewItem } from "../../types/case-study"
import { Section } from "../ui/section"

interface OverviewSectionProps {
  items: OverviewItem[]
}

export const OverviewSection: React.FC<OverviewSectionProps> = ({ items }) => {
  return (
    <Section id="overview" title="Project Overview">
      <div className="grid lg:grid-cols-3 gap-8">
        {items.map((item, index) => {
          const Icon = item.icon
          return (
            <div 
              key={index} 
              className="group bg-white p-8 rounded-xl shadow-sm border border-stone-200 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              role="article"
              aria-labelledby={`overview-title-${index}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div 
                  className={`w-10 h-10 ${item.iconBgColor} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  aria-hidden="true"
                >
                  <Icon className={`w-5 h-5 ${item.iconColor}`} />
                </div>
                <h3 
                  id={`overview-title-${index}`}
                  className="text-lg font-semibold text-stone-800 group-hover:text-blue-600 transition-colors duration-300"
                >
                  {item.title}
                </h3>
              </div>
              <p className="text-stone-600 leading-relaxed group-hover:text-stone-700 transition-colors duration-300">
                {item.description}
              </p>
              <div className="mt-4 pt-4 border-t border-stone-100">
                <div className="flex items-center gap-2 text-sm text-stone-500">
                  <span className="w-2 h-2 rounded-full bg-stone-300"></span>
                  <span>Key focus area</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
