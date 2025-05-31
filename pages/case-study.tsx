import React from "react"
import CaseStudyLayout from "../components/case-study/CaseStudyLayout"
import StatsCards from "../components/case-study/StatsCards"
import VisitorsChart from "../components/case-study/VisitorsChart"
import TabbedSection from "../components/case-study/TabbedSection"
import DataTableSection from "../components/case-study/DataTableSection"

export default function CaseStudyPage() {
  return (
    <CaseStudyLayout>
      <div className="bg-white rounded-2xl shadow-lg border border-stone-200 p-8 max-w-6xl mx-auto">
        <StatsCards />
        <VisitorsChart />
        <TabbedSection />
        <DataTableSection />
      </div>
    </CaseStudyLayout>
  )
} 