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
import Image from 'next/image'
import StatsCards from "./components/case-study/StatsCards"
import TabbedSection from "./components/case-study/TabbedSection"
import DataTableSection from "./components/case-study/DataTableSection"
import CaseStudyLayout from "./components/case-study/CaseStudyLayout"
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet"

// Constants
import { CASE_STUDY_DATA } from "./constants/case-study-data"

function LegacyActionsButton({ label, ...props }: { label: string; [key: string]: any }) {
  return (
    <button
      className="bg-[#44403C] text-white text-sm border border-stone-300 px-3 py-1 rounded hover:bg-[#292724] transition-colors"
      {...props}
    >
      {label}
    </button>
  );
}

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
          <div className="mb-12">
            <AlertBox title="Enterprise Account Setup Challenges" variant="red">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  Customers found the account setup process outdated and limiting, especially for brands with multiple locations. Enterprise clients reported it was inefficient for managing large organizations.
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="bg-red-50/50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-red-600 mb-1">45min</div>
                    <p className="text-red-700">Average time spent on group creation</p>
                  </div>
                  <div className="bg-red-50/50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-red-600 mb-1">68%</div>
                    <p className="text-red-700">Users reported workflow inefficiencies</p>
                  </div>
                  <div className="bg-red-50/50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-red-600 mb-1">3x</div>
                    <p className="text-red-700">Increase in support tickets</p>
                  </div>
                </div>
              </div>
            </AlertBox>
          </div>

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

                    <nav className="space-y-1" role="navigation" aria-label="Account setup navigation">
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
                          role="menuitem"
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
                        <button 
                          className="bg-[#44403C] text-white px-4 py-2 rounded text-sm hover:bg-[#292724] transition-colors"
                          aria-label="Create new group"
                        >
                          + New Group
                        </button>
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
                              <LegacyActionsButton label="Actions" aria-label={`Actions for Group ${i}`} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-red-800 mb-2">Limited Scalability</h5>
                  <p className="text-red-700">
                    Pagination-based interface not suitable for managing thousands of locations efficiently
                  </p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-red-800 mb-2">Basic Group Actions</h5>
                  <p className="text-red-700">
                    Simple "Actions" dropdown with limited management capabilities for complex hierarchies
                  </p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-red-800 mb-2">Mobile Limitations</h5>
                  <p className="text-red-700">
                    Table-based layout not optimized for mobile devices and touch interactions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Design Process */}
        <Section id="design-process" title="Design Process">
          <h3 className="text-lg font-medium text-stone-600 mt-1 mb-8">
            We refined the account setup interface through multiple design iterations, from wireframes to production-ready designs.
          </h3>
          <div className="mb-12">
            {/* Solution cards above the low-fidelity wireframe */}
            <FeaturesSection features={features} />
            {/* Design Timeline */}
            <div className="mb-12">
              <div className="space-y-12">
                <LowFidelityCreateLocation />
                <MediumFidelityCreateLocation />
                <HighFidelityCreateLocation />
              </div>
            </div>
          </div>
        </Section>

        {/* Improved Account Setup Interface */}
        <Section id="improved-interface" title="Improved Account Setup Interface">
          {/* Tab Navigation */}
          <div className="flex items-center gap-2 border-b border-stone-200 mb-4 overflow-x-auto">
            {['Groups', 'Teams', 'Locations', 'Email Templates', 'Branding', 'Default Links', 'Day Parts'].map(tab => (
              <button
                key={tab}
                className={`px-3 py-2 text-sm font-medium rounded-t border-b-2 transition-colors duration-200 whitespace-nowrap ${tab === 'Groups' ? 'border-stone-900 text-stone-900 bg-stone-100' : 'border-transparent text-stone-500 hover:text-stone-900 hover:bg-stone-100'}`}
                aria-current={tab === 'Groups' ? 'page' : undefined}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search and New Group */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
            <input
              type="text"
              placeholder="Search groups"
              className="w-full md:w-72 px-3 py-2 border border-stone-200 rounded-md bg-stone-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              aria-label="Search groups"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium shadow-sm hover:bg-blue-700 transition-colors">
              New Group
            </button>
          </div>

          {/* Data Table */}
          <div className="overflow-x-auto border border-stone-200 rounded-lg bg-white">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-stone-50 text-stone-700">
                  <th className="px-4 py-3 text-left font-semibold">Group</th>
                  <th className="px-4 py-3 text-left font-semibold">Status</th>
                  <th className="px-4 py-3 text-left font-semibold">Location</th>
                  <th className="px-4 py-3 text-left font-semibold">Users</th>
                  <th className="px-4 py-3 text-left font-semibold">Store URL</th>
                  <th className="px-4 py-3 text-left font-semibold">Notes</th>
                  <th className="px-4 py-3 text-left font-semibold">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-stone-100">
                {[1,2,3,4,5,6,7,8,9,10].map((i) => (
                  <tr key={i} className="hover:bg-stone-50 transition-colors">
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="inline-flex items-center gap-2">
                        <span className="bg-stone-200 text-stone-900 text-xs font-medium px-3 py-1 rounded-full">MRG PIZZA NV</span>
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="inline-block bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full">Active</span>
                    </td>
                    <td className="px-4 py-3">6</td>
                    <td className="px-4 py-3">10</td>
                    <td className="px-4 py-3">
                      <a href="#" className="text-blue-600 hover:underline flex items-center gap-1">mrg/pizza/iv <span className="w-3 h-3">🔗</span></a>
                    </td>
                    <td className="px-4 py-3">
                      <a href="#" className="text-blue-600 hover:underline">View Note</a>
                    </td>
                    <td className="px-4 py-3">
                      <button className="bg-stone-100 text-stone-700 px-3 py-1 rounded-md text-xs font-medium border border-stone-200 hover:bg-stone-200 transition-colors flex items-center gap-2">
                        Actions <span className="w-3 h-3">▼</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-4">
            <div className="text-sm text-stone-500">1 of 10 of 800 Results</div>
            <div className="flex items-center gap-1">
              <button className="w-8 h-8 rounded-md border border-stone-200 flex items-center justify-center text-sm hover:bg-stone-100 text-stone-400 transition-all" aria-label="Previous page">&lt;</button>
              {[1,2,3,4,5].map(page => (
                <button
                  key={page}
                  className={`w-8 h-8 rounded-md flex items-center justify-center text-sm font-medium transition-all ${page === 1 ? 'bg-stone-900 text-white shadow' : 'border border-stone-200 text-stone-700 hover:bg-stone-100'}`}
                  aria-label={`Page ${page}`}
                  aria-current={page === 1 ? 'page' : undefined}
                >
                  {page}
                </button>
              ))}
              <span className="text-stone-400 px-1">...</span>
              <button className="w-8 h-8 rounded-md border border-stone-200 flex items-center justify-center text-sm hover:bg-stone-100 text-stone-700 transition-all" aria-label="Next page">&gt;</button>
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

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
                <h3 className="text-xl font-semibold mb-6 text-stone-800">Primary Tools</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <img src="/images/figma-logo.svg" alt="Figma" className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-stone-800 mb-1">Figma</h4>
                      <p className="text-stone-600 text-sm">
                        Primary design tool for wireframing, prototyping, and creating high-fidelity mockups with real-time collaboration
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <img src="/images/framer-logo.png" alt="Framer" className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-stone-800 mb-1">Framer</h4>
                      <p className="text-stone-600 text-sm">
                        Advanced prototyping for interactive user flows and micro-interactions testing
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
                <h3 className="text-xl font-semibold mb-6 text-stone-800">Supporting Tools</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-green-600">UT</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-stone-800 mb-1">UserTesting.com</h4>
                      <p className="text-stone-600 text-sm">
                        User research platform for conducting remote usability tests and gathering feedback
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-yellow-600">M</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-stone-800 mb-1">Miro</h4>
                      <p className="text-stone-600 text-sm">
                        Collaborative whiteboarding for user journey mapping, brainstorming, and workshop facilitation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-stone-50 p-8 rounded-xl border border-stone-200">
              <h3 className="text-xl font-semibold mb-6 text-stone-800">Enterprise Design Considerations</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2 text-stone-700">Scalability</h4>
                  <p className="text-stone-600 text-sm">
                    Design systems built to handle 10,000+ locations with consistent component libraries and automated
                    design tokens.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2 text-stone-700">Collaboration</h4>
                  <p className="text-stone-600 text-sm">
                    Real-time collaboration tools enabled seamless communication between design, product, and engineering
                    teams.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2 text-stone-700">Accessibility</h4>
                  <p className="text-stone-600 text-sm">
                    WCAG 2.1 AA compliance ensured the interface works for all users, including those with disabilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Final Implementation Showcase */}
        <Section id="implementation" title="Redesigned Account Setup Experience">
          <p className="text-stone-600 leading-relaxed mb-8 text-lg">Monitor your organization's onboarding progress and key setup metrics in a streamlined, enterprise-ready interface.</p>
          <CaseStudyLayout>
            <div className="bg-white rounded-2xl shadow-lg border border-stone-200 p-8 max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <span className="inline-flex items-center bg-blue-50 text-blue-700 text-base font-semibold px-4 py-1 rounded-full shadow-sm">MRG PIZZA NV</span>
                <button className="bg-blue-600 text-white px-5 py-2 rounded-md text-sm font-medium shadow-sm hover:bg-blue-700 transition-colors">New Group</button>
              </div>
              <StatsCards />
              <TabbedSection />
              <DataTableSection />
            </div>
          </CaseStudyLayout>
        </Section>

        {/* Redesigned Sheet Panel */}
        <Section id="sheet-demo" title="Redesigned Sheet Panel">
          <p className="text-stone-600 leading-relaxed mb-8 text-lg">A modern, scalable panel for managing locations, groups, and members—designed for enterprise workflows.</p>
          <div className="max-w-5xl mx-auto w-full">
            <div className="bg-white rounded-2xl shadow-lg border border-stone-200 p-8">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-stone-900">Jonathan Stacks</h2>
                  <p className="text-stone-500 text-sm">District Manager</p>
                </div>
                <button className="text-stone-400 hover:text-stone-900 text-2xl" aria-label="Close">&times;</button>
              </div>
              {/* Tabs */}
              <div className="mb-6">
                <div className="flex border-b border-stone-200">
                  <button className="px-4 py-2 text-blue-600 border-b-2 border-blue-600 font-medium">Locations</button>
                  <button className="px-4 py-2 text-stone-500 hover:text-stone-900">Groups</button>
                  <button className="px-4 py-2 text-stone-500 hover:text-stone-900">Group Members</button>
                </div>
              </div>
              {/* Search and New Location */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div className="flex-1 flex items-center bg-stone-50 border border-stone-200 rounded px-3 py-2">
                  <svg className="w-5 h-5 text-stone-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                  <input type="text" placeholder="Search" className="w-full bg-transparent outline-none text-sm" />
                </div>
                <button className="bg-blue-600 text-white px-5 py-2 rounded-md text-sm font-medium shadow-sm hover:bg-blue-700 transition-colors">New Location</button>
              </div>
              {/* Create New Location Form */}
              <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-8">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-stone-800">Create New Location</h3>
                    <p className="text-stone-500 text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                  <button className="text-stone-400 hover:text-stone-900 text-xl" aria-label="Close">&times;</button>
                </div>
                <form className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <input type="text" placeholder="Select Parent Group" className="border border-stone-300 rounded px-3 py-2 text-sm" />
                  <input type="text" placeholder="Location URL" className="border border-stone-300 rounded px-3 py-2 text-sm" />
                  <input type="text" placeholder="Location Manager" className="border border-stone-300 rounded px-3 py-2 text-sm" />
                  <input type="text" placeholder="Display Label" className="border border-stone-300 rounded px-3 py-2 text-sm" />
                  <input type="text" placeholder="Location Address" className="border border-stone-300 rounded px-3 py-2 text-sm" />
                  <input type="email" placeholder="Customer Reply Email" className="border border-stone-300 rounded px-3 py-2 text-sm" />
                  <input type="text" placeholder="Store ID" className="border border-stone-300 rounded px-3 py-2 text-sm" />
                  <div className="flex items-center gap-4 col-span-2 md:col-span-1">
                    <span className="text-sm text-stone-700">Franchise location</span>
                    <label className="flex items-center gap-1 text-sm"><input type="radio" name="franchise" className="accent-blue-600" /> Yes</label>
                    <label className="flex items-center gap-1 text-sm"><input type="radio" name="franchise" className="accent-blue-600" /> No</label>
                  </div>
                </form>
                <div className="flex gap-2 justify-end">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 text-sm">Create</button>
                  <button className="bg-stone-200 text-stone-700 px-4 py-2 rounded shadow text-sm">Clear</button>
                </div>
              </div>
              {/* Locations Table */}
              <div className="overflow-x-auto border border-stone-200 rounded-lg bg-white">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="bg-stone-50 text-stone-700">
                      <th className="px-4 py-3 text-left font-semibold">Status</th>
                      <th className="px-4 py-3 text-left font-semibold">Locations</th>
                      <th className="px-4 py-3 text-left font-semibold">Store ID</th>
                      <th className="px-4 py-3 text-left font-semibold">Store URL</th>
                      <th className="px-4 py-3 text-left font-semibold">Address</th>
                      <th className="px-4 py-3 text-left font-semibold">City</th>
                      <th className="px-4 py-3 text-left font-semibold">State</th>
                      <th className="px-4 py-3 text-left font-semibold">Action</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-stone-100">
                    {[1,2,3,4,5,6].map((i) => (
                      <tr key={i} className="hover:bg-stone-50 transition-colors">
                        <td className="px-4 py-3"><span className="inline-block bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full">Active</span></td>
                        <td className="px-4 py-3">{i + 2}</td>
                        <td className="px-4 py-3">117</td>
                        <td className="px-4 py-3"><a href="#" className="text-blue-600 hover:underline flex items-center gap-1">blazepizza117 <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></a></td>
                        <td className="px-4 py-3">1234 NE Halsey St</td>
                        <td className="px-4 py-3">Miami</td>
                        <td className="px-4 py-3">FL</td>
                        <td className="px-4 py-3 text-right">
                          <button className="bg-stone-100 text-stone-700 px-3 py-1 rounded-md text-xs font-medium border border-stone-200 hover:bg-stone-200 transition-colors flex items-center gap-2">Actions <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Section>

        {/* Goals & Objectives */}
        <Section id="goals" title="Goals & Objectives">
          <div className="grid lg:grid-cols-3 gap-6">
            <div 
              className="group bg-white p-8 rounded-xl shadow-sm border border-stone-200 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              role="article"
              aria-labelledby="user-goals"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <UserCheck className="w-6 h-6 text-blue-600" />
              </div>
              <h3 id="user-goals" className="text-lg font-semibold text-stone-800 mb-3 group-hover:text-blue-600 transition-colors">User Goals</h3>
              <p className="text-stone-600 leading-relaxed mb-4">
                Create groups for regions, teams, and individual locations with intuitive management capabilities
              </p>
              <ul className="space-y-2 text-sm text-stone-500">
                <li className="flex items-center gap-2">
                  <span>Intuitive group creation</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>Efficient location management</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>Seamless team organization</span>
                </li>
              </ul>
            </div>

            <div 
              className="group bg-white p-8 rounded-xl shadow-sm border border-stone-200 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              role="article"
              aria-labelledby="business-goals"
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Building2 className="w-6 h-6 text-green-600" />
              </div>
              <h3 id="business-goals" className="text-lg font-semibold text-stone-800 mb-3 group-hover:text-green-600 transition-colors">Business Goals</h3>
              <p className="text-stone-600 leading-relaxed mb-4">
                Increase efficiency and ease of use to manage large numbers of locations and employees
              </p>
              <ul className="space-y-2 text-sm text-stone-500">
                <li className="flex items-center gap-2">
                  <span>Reduce setup time by 50%</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>Decrease support tickets</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>Improve user satisfaction</span>
                </li>
              </ul>
            </div>

            <div 
              className="group bg-white p-8 rounded-xl shadow-sm border border-stone-200 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              role="article"
              aria-labelledby="product-goals"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-6 h-6 text-purple-600" />
              </div>
              <h3 id="product-goals" className="text-lg font-semibold text-stone-800 mb-3 group-hover:text-purple-600 transition-colors">Product Goals</h3>
              <p className="text-stone-600 leading-relaxed mb-4">
                Maintain current customer base by demonstrating value in front-end progress and capabilities
              </p>
              <ul className="space-y-2 text-sm text-stone-500">
                <li className="flex items-center gap-2">
                  <span>Enhance enterprise features</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>Improve scalability</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>Strengthen market position</span>
                </li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Research & Insights */}
        <Section id="research" title="Insights">
          <div className="bg-stone-50 p-8 rounded-xl border border-stone-200 mb-8">
            <h3 className="text-2xl font-semibold mb-6 text-stone-800">Methodology</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-4 flex items-center gap-2 text-stone-700">
                  <Search className="w-5 h-5 text-stone-600" />
                  Approach
                </h4>
                <ul className="space-y-3 text-stone-600">
                  <li className="flex items-start gap-3">
                    <span className="font-medium">1:1 Interviews – Enterprise executive members</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-medium">Workshop Sessions – Regional directors and owners</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-medium">Feedback Collection – Local managers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-medium">Workflow Analysis – Current pain points</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 flex items-center gap-2 text-stone-700">
                  <Users className="w-5 h-5 text-stone-600" />
                  Key Stakeholders
                </h4>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h5 className="font-medium text-stone-800 mb-2">Enterprise Executives</h5>
                    <p className="text-sm text-stone-600">Strategic decision makers focused on scalability and efficiency</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h5 className="font-medium text-stone-800 mb-2">Regional Directors</h5>
                    <p className="text-sm text-stone-600">Operational leaders managing multiple locations</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h5 className="font-medium text-stone-800 mb-2">Location Managers</h5>
                    <p className="text-sm text-stone-600">Day-to-day users handling local operations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <TabNavigation 
            tabs={researchTabs} 
            activeTab={researchTabs[0].id} 
            onChange={() => {}} 
            className="mb-6" 
            aria-label="Research findings navigation"
          />

          <AlertBox title="Key Research Findings" variant="amber">
            <div className="space-y-6">
              <p className="leading-relaxed">
                Interviews with executives, directors, and managers revealed three core principles for effective feedback:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-amber-800 mb-2">1. Simplify the Process</h4>
                  <p className="text-amber-700 text-sm">
                    Creating groups and adding employees should be straightforward and user-friendly
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-amber-800 mb-2">2. Make it User-Friendly</h4>
                  <p className="text-amber-700 text-sm">Ensure the system is easy to use for all levels of managers</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-amber-800 mb-2">3. Prioritize Relationships</h4>
                  <p className="text-amber-700 text-sm">
                    Enable easy additions, removals, edits, and comments for seamless communication
                  </p>
                </div>
              </div>
            </div>
          </AlertBox>
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
