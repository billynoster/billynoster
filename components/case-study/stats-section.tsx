import type React from "react"
import { Section } from "../ui/section"
import { StatCard } from "../ui/stat-card"
import type { StatCard as StatCardType } from "../../types/case-study"

interface StatsSectionProps {
  title: string
  stats: StatCardType[]
}

export const StatsSection: React.FC<StatsSectionProps> = ({ title, stats }) => {
  return (
    <Section id="results" title={title}>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
    </Section>
  )
}
