import type React from "react"
import { Section } from "../ui/section"
import { FeatureCard } from "../ui/feature-card"
import type { FeatureCard as FeatureCardType } from "../../types/case-study"

interface FeaturesSectionProps {
  features: FeatureCardType[]
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ features }) => {
  return (
    <Section id="solution" title="The Solution">
      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </Section>
  )
}
