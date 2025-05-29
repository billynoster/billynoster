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
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 ${item.iconBgColor} rounded-lg flex items-center justify-center`}>
                  <Icon className={`w-5 h-5 ${item.iconColor}`} />
                </div>
                <h3 className="text-lg font-semibold text-stone-800">{item.title}</h3>
              </div>
              <p className="text-stone-600 leading-relaxed">{item.description}</p>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
