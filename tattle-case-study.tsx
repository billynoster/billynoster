"use client"
import { Separator } from "@/components/ui/separator"
import { CaseStudyProvider } from "./context/case-study-context"
import { HeroSection } from "./components/case-study/hero-section"
import { OverviewSection } from "./components/case-study/overview-section"
import { AlertBox } from "./components/ui/alert-box"
import { Section } from "./components/ui/section"
import { FeaturesSection } from "./components/case-study/features-section"
import { StatsSection } from "./components/case-study/stats-section"
import { Footer } from "./components/case-study/footer"
import { CollapsibleSidebar } from "./components/case-study/collapsible-sidebar"
import { AccountHeader } from "./components/case-study/account-header"
import { GroupsTable } from "./components/case-study/groups-table"
import { TabNavigation } from "./components/ui/tab-navigation"
import { Target, Users, Building2, UserCheck, Search } from "lucide-react"
import {
  LowFidelityCreateLocation,
  MediumFidelityCreateLocation,
  HighFidelityCreateLocation,
} from "./design-iterations"
import { DesignToolsShowcase } from "./components/design-tools/design-tools-showcase"
import { InteractiveDesignTools } from "./components/design-tools/interactive-tools"

// Constants
import { CASE_STUDY_DATA } from "./constants/case-study-data"

export default function TattleCaseStudy() {
  const { meta, overview, features, results, researchTabs } = CASE_STUDY_DATA

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection meta={meta} />

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Overview Section */}
        <OverviewSection items={overview} />

        {/* Problem Statement */}
        <Section id="problem" title="The Problem">
          <AlertBox title="Enterprise Account Setup Challenges" variant="red">
            <p className="text-lg leading-relaxed">
              Our customers expressed concerns about the outdated and limiting account setup process, which has been
              particularly problematic for newly onboarded brands with multiple locations worldwide. Enterprise-level
              clients found it inefficient for their large organizations to manage after their trial period.
            </p>
          </AlertBox>

          {/* Current Experience */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-stone-800">Legacy Account Setup Interface</h3>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-stone-700">Original Groups Management Interface</h4>
                <p className="text-stone-600 leading-relaxed mb-6">
                  The existing account setup process, while visually clean, presented functional challenges for
                  enterprise clients managing hundreds to thousands of locations and employees across multiple regions.
                  The limitations were primarily in scalability and workflow efficiency.
                </p>
              </div>

              {/* Legacy Interface Visualization */}
              <div className="relative bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden">
                <div className="flex">
                  {/* Left Sidebar */}
                  <div className="w-48 bg-stone-100 border-r border-stone-200 min-h-[400px] p-4">
                    <h2 className="text-lg font-semibold text-stone-800 mb-4">Account Setup</h2>
                    <p className="text-sm text-stone-600 mb-6">
                      Invite your team, add your locations, create your groups.
                    </p>

                    <nav className="space-y-1">
                      {[
                        "Management Team",
                        "Locations",
                        "Groups",
                        "Email Templates",
                        "Branding",
                        "Default Links",
                        "Day Parts",
                      ].map((item, i) => (
                        <div
                          key={i}
                          className={`flex items-center gap-2 px-3 py-2 text-sm rounded ${
                            item === "Groups" ? "text-white bg-stone-700" : "text-stone-600 hover:bg-stone-200"
                          }`}
                        >
                          <span>{item}</span>
                        </div>
                      ))}
                    </nav>
                  </div>

                  {/* Main Content - Simplified */}
                  <div className="flex-1 p-4">
                    <div className="border-b border-stone-200 pb-4 mb-4">
                      <div className="flex justify-between items-start">
                        <h3 className="text-lg font-semibold text-stone-800">Manage Groups</h3>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm">+ New Group</button>
                      </div>
                    </div>

                    {/* Simplified Table */}
                    <div className="bg-white border border-stone-200 rounded overflow-hidden">
                      <div className="bg-stone-50 border-b border-stone-200 p-3 text-sm font-medium text-stone-700">
                        Table Header
                      </div>
                      <div className="divide-y divide-stone-200">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="p-3 hover:bg-stone-50">
                            <div className="flex justify-between">
                              <span className="text-sm text-stone-800">Group {i}</span>
                              <button className="text-blue-600 text-sm border border-stone-300 px-3 py-1 rounded">
                                Actions
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-300">
                  <h5 className="font-semibold text-red-800 mb-2">Limited Scalability</h5>
                  <p className="text-red-700">
                    Pagination-based interface not suitable for managing thousands of locations efficiently
                  </p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-300">
                  <h5 className="font-semibold text-red-800 mb-2">Basic Group Actions</h5>
                  <p className="text-red-700">
                    Simple "Actions" dropdown with limited management capabilities for complex hierarchies
                  </p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-300">
                  <h5 className="font-semibold text-red-800 mb-2">Mobile Limitations</h5>
                  <p className="text-red-700">
                    Table-based layout not optimized for mobile devices and touch interactions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Goals & Objectives */}
        <Section id="goals" title="Goals & Objectives">
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <UserCheck className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-stone-800 mb-3">User Goals</h3>
              <p className="text-stone-600 leading-relaxed">
                Create groups for regions, teams, and individual locations with intuitive management capabilities
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-stone-800 mb-3">Business Goals</h3>
              <p className="text-stone-600 leading-relaxed">
                Increase efficiency and ease of use to manage large numbers of locations and employees
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-stone-800 mb-3">Product Goals</h3>
              <p className="text-stone-600 leading-relaxed">
                Maintain current customer base by demonstrating value in front-end progress and capabilities
              </p>
            </div>
          </div>
        </Section>

        {/* Research & Insights */}
        <Section id="research" title="Research & Insights">
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-stone-800">Research Methodology</h3>
            <div className="bg-stone-50 p-8 rounded-xl border border-stone-200">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4 flex items-center gap-2 text-stone-700">
                    <Search className="w-5 h-5 text-stone-600" />
                    Research Approach
                  </h4>
                  <ul className="space-y-2 text-stone-600">
                    <li>• 1:1 interviews with enterprise executive members</li>
                    <li>• Sessions with regional directors and owners</li>
                    <li>• Feedback collection from local managers</li>
                    <li>• Analysis of current workflow pain points</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4 flex items-center gap-2 text-stone-700">
                    <Users className="w-5 h-5 text-stone-600" />
                    Key Stakeholders
                  </h4>
                  <ul className="space-y-2 text-stone-600">
                    <li>• Enterprise executive members</li>
                    <li>• Regional directors</li>
                    <li>• Location owners</li>
                    <li>• Local and regional managers</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <TabNavigation tabs={researchTabs} activeTab={researchTabs[0].id} onChange={() => {}} className="mb-6" />

          <AlertBox title="Key Research Findings" variant="amber">
            <p className="leading-relaxed mb-6">
              Based on 1:1 interviews with enterprise executives, regional directors, and owners, regional and local
              managers are the most effective sources of feedback. To maximize the value of their input, three core
              principles emerged:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-amber-800 mb-2">1. Simplify the Process</h4>
                <p className="text-amber-700 text-sm">
                  Creating groups and adding employees should be straightforward and user-friendly
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-amber-800 mb-2">2. Make it User-Friendly</h4>
                <p className="text-amber-700 text-sm">Ensure the system is easy to use for all levels of managers</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-amber-800 mb-2">3. Prioritize Relationships</h4>
                <p className="text-amber-700 text-sm">
                  Enable easy additions, removals, edits, and comments for seamless communication
                </p>
              </div>
            </div>
          </AlertBox>
        </Section>

        {/* Design Process */}
        <Section id="design-process" title="Design Process">
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-stone-800">Design Evolution</h3>
            <p className="text-stone-600 leading-relaxed mb-8">
              Following our research insights, we developed the account setup interface through multiple design
              iterations, progressively refining the user experience from basic wireframes to production-ready
              implementations.
            </p>

            {/* Low-Fidelity */}
            <div className="mb-16">
              <LowFidelityCreateLocation />
            </div>

            {/* Medium-Fidelity */}
            <div className="mb-16">
              <MediumFidelityCreateLocation />
            </div>

            {/* High-Fidelity */}
            <div className="mb-16">
              <HighFidelityCreateLocation />
            </div>
          </div>
        </Section>

        {/* Design Tools & Technology */}
        <Section id="design-tools" title="Design Tools & Technology">
          <div className="mb-12">
            <p className="text-stone-600 leading-relaxed mb-8 text-lg">
              Throughout the Tattle account setup redesign project, I leveraged industry-leading design tools to ensure
              efficient collaboration, rapid prototyping, and seamless handoff to development teams. The integration of
              these tools was crucial for managing the complexity of enterprise-level design requirements.
            </p>

            <DesignToolsShowcase />
          </div>

          <div className="mb-12">
            <InteractiveDesignTools />
          </div>

          <div className="bg-stone-50 p-8 rounded-xl border border-stone-200">
            <h3 className="text-xl font-semibold mb-6 text-stone-800">Enterprise Design Considerations</h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <h4 className="font-semibold mb-2 text-stone-700">Scalability</h4>
                <p className="text-stone-600">
                  Design systems built to handle 10,000+ locations with consistent component libraries and automated
                  design tokens.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-stone-700">Collaboration</h4>
                <p className="text-stone-600">
                  Real-time collaboration tools enabled seamless communication between design, product, and engineering
                  teams.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-stone-700">Accessibility</h4>
                <p className="text-stone-600">
                  WCAG 2.1 AA compliance ensured the interface works for all users, including those with disabilities.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Solution */}
        <FeaturesSection features={features} />

        {/* Final Implementation Showcase */}
        <Section id="implementation" title="Final Implementation">
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-stone-800">Redesigned Account Setup Experience</h3>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-stone-700">Improved Account Setup Interface</h4>
                <p className="text-stone-600 leading-relaxed mb-6">
                  The final implementation showcases the transformation from a functional but limited interface to a
                  streamlined, enterprise-ready solution that scales with organizational needs. The new drawer panel
                  interface provides better organization and mobile responsiveness.
                </p>
              </div>

              {/* Improved Account Setup Interface */}
              <div className="mb-8">
                <div className="bg-gradient-to-br from-white to-stone-50 border border-stone-200 rounded-2xl shadow-lg overflow-hidden backdrop-blur-sm">
                  <div className="flex">
                    <CaseStudyProvider>
                      {/* Enhanced Sidebar with Hierarchy */}
                      <CollapsibleSidebar />

                      {/* Main Content Area - Now takes full width */}
                      <div className="flex-1 bg-gradient-to-br from-white to-stone-50">
                        {/* Header */}
                        <AccountHeader />

                        {/* Groups Table */}
                        <GroupsTable />
                      </div>
                    </CaseStudyProvider>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 text-sm mb-6">
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <h5 className="font-semibold text-blue-800 mb-2">Drawer Panel Interface</h5>
                  <p className="text-blue-700">
                    Scalable side panel replaces table-based experience, optimized for mobile and large datasets
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                  <h5 className="font-semibold text-green-800 mb-2">Hierarchical Navigation</h5>
                  <p className="text-green-700">
                    Clear group structure in sidebar with visual hierarchy and easy navigation
                  </p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                  <h5 className="font-semibold text-purple-800 mb-2">Enhanced Workflow</h5>
                  <p className="text-purple-700">
                    Streamlined creation process with contextual actions and improved user feedback
                  </p>
                </div>
              </div>

              <div className="bg-stone-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-stone-700">Key Improvements Delivered</h4>
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  <ul className="space-y-2 text-stone-600">
                    <li>• Replaced pagination with hierarchical navigation and better data organization</li>
                    <li>• Implemented contextual actions with clear visual hierarchy</li>
                    <li>• Added real-time feedback with loading states and success notifications</li>
                  </ul>
                  <ul className="space-y-2 text-stone-600">
                    <li>• Created responsive drawer interface for mobile optimization</li>
                    <li>• Streamlined location creation with intuitive form design</li>
                    <li>• Enhanced group management with scalable enterprise features</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Results & Impact */}
        <Section id="results" title="Results & Impact">
          <AlertBox title="Enterprise Client Success" variant="green">
            <p className="leading-relaxed">
              Two of our biggest customers, with over 10,000 locations, have given positive feedback on the new Groups
              feature on the Tattle platform. It has made creating primary and subgroups while managing employees much
              more accessible. This redesign was completed due to high demand from enterprise-level clients who needed
              to manage large employee structures.
            </p>
          </AlertBox>

          <StatsSection title="" stats={results} />
        </Section>

        <Separator className="my-12 bg-stone-200" />

        {/* Footer */}
        <Footer
          author="Billy No"
          role="Senior Product Designer"
          project="Tattle Account Setup Case Study"
          year="2020"
          domain="gettattle.com"
        />
      </div>
    </div>
  )
}
