"use client"

import { Calendar, Users, Target, Search, Lightbulb, Smartphone, CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { UserFlowDiagrams } from "./user-flow-diagrams"
import { LowFidelityMobileWireframe, MediumFidelityMobileWireframe } from "./components/wireframes/mobile-wireframes"
import { CheqMobileShowcase } from "./components/final-implementation/cheq-mobile-showcase"
import { FinalDesignShowcase } from "./components/final-implementation/final-design-showcase"
import { HorizontalTimeline } from "./components/case-study/horizontal-timeline"

export default function CheqCaseStudy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Hero Section */}
      <div className="relative text-white" style={{ minHeight: '400px' }}>
        <img
          src="/images/cheq-hero.jpg"
          alt="CHEQ Hero"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-800/70 z-10" />
        <div className="relative max-w-6xl mx-auto px-6 py-16 z-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-600 hover:bg-blue-700">Mobile App Design</Badge>
              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-4">
                CHEQ: <span className="text-blue-400">The Next Generation</span> of Mobile Ordering
              </h1>
              <div className="w-16 h-1 bg-blue-500 rounded-full opacity-70 mb-6" />
              <p className="text-2xl lg:text-3xl text-blue-100 italic max-w-2xl mb-8">
                We reimagined the CHEQ app to deliver instant, reliable ordering—empowering guests and partners with a modern, intuitive experience.
              </p>
              <div className="flex flex-wrap gap-3 text-sm">
                <span className="inline-flex items-center bg-slate-800/70 text-slate-100 px-3 py-1 rounded-full font-medium">
                  <Calendar className="w-4 h-4 mr-1" /> August 2023
                </span>
                <span className="inline-flex items-center bg-slate-800/70 text-slate-100 px-3 py-1 rounded-full font-medium">
                  <Users className="w-4 h-4 mr-1" /> Billy No, Product Designer
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Role & Timeline Section */}
        <section className="mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-8 text-slate-900">My Role</h2>
            <div className="space-y-6 mb-12">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-xl font-semibold mb-4 text-slate-800">Lead Product Designer</h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Led the end-to-end design process from research to implementation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Conducted user research and usability testing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Created wireframes, prototypes, and design system</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Collaborated with 5 engineers and product managers</span>
                  </li>
                </ul>
              </div>
            </div>
            <Separator className="my-10" />
            <div>
              <h2 className="text-3xl font-bold mb-8 text-slate-900">Project Timeline</h2>
              <HorizontalTimeline
                steps={[
                  {
                    number: 1,
                    title: "Research & Discovery",
                    description: "User interviews, competitive analysis, and problem definition",
                    duration: "Weeks 1-2",
                  },
                  {
                    number: 2,
                    title: "Design & Prototyping",
                    description: "Wireframing, user flows, and interactive prototypes",
                    duration: "Weeks 3-5",
                  },
                  {
                    number: 3,
                    title: "Testing & Iteration",
                    description: "Usability testing and design refinements",
                    duration: "Weeks 6-7",
                  },
                  {
                    number: 4,
                    title: "Implementation",
                    description: "Handoff to development and launch",
                    duration: "Weeks 8-10",
                  },
                ]}
              />
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-slate-900">Project Overview</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg bg-gray-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-600">
                  <Target className="w-5 h-5" />
                  Challenge
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">
                  Mobile app users frequently encounter interruptions, errors, and delays with their orders, causing
                  customer frustration and partner dissatisfaction.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gray-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-600">
                  <Lightbulb className="w-5 h-5" />
                  Solution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">
                  Developed CHEQ Quick QR Scan, improved Ordering Flow, and Split Bill features to give shoppers
                  complete control over their checkout experience.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gray-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-purple-600">
                  <Users className="w-5 h-5" />
                  Team
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">
                  Collaborated with a cross-functional team of 5 engineers and product managers as the lead designer.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-slate-900">The Problem</h2>
          <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-r-lg mb-8">
            <h3 className="text-xl font-semibold text-red-800 mb-4">Critical User Experience Issues</h3>
            <p className="text-red-700 text-lg leading-relaxed">
              Our mobile app users frequently encounter interruptions, errors, and delays with their orders, which can
              cause them to abandon their purchase or not bother altogether. This poses a significant problem for our
              partners and vendors who rely on a seamless customer experience.
            </p>
          </div>

          {/* Visual Evidence of UI Problems */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-slate-800">Current Experience Challenges</h3>
            <div className="bg-white p-8 rounded-xl shadow-lg border">
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-slate-700">Previous Mobile Interface</h4>
                <p className="text-slate-600 leading-relaxed mb-6">
                  The existing mobile app interface presented several usability challenges that hindered the user
                  experience and created friction in the ordering process. These screenshots illustrate the key pain
                  points identified through user research and partner feedback.
                </p>
              </div>

              <div className="relative">
                <img
                  src="/images/old-ui-screenshots.png"
                  alt="Screenshots of the old CHEQ mobile app interface showing venue discovery, menu browsing, and cart functionality with various usability issues"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>

              <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                  <h5 className="font-semibold text-red-800 mb-2">Venue Discovery Issues</h5>
                  <p className="text-red-700">
                    Cluttered interface with unclear navigation and overwhelming partner display
                  </p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                  <h5 className="font-semibold text-red-800 mb-2">Menu Complexity</h5>
                  <p className="text-red-700">
                    Dense menu layout with poor visual hierarchy and limited item information
                  </p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                  <h5 className="font-semibold text-red-800 mb-2">Checkout Friction</h5>
                  <p className="text-red-700">
                    Confusing cart interface with unclear pricing breakdown and limited customization
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-slate-800">Impact on Business</h4>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Decreased customer retention and engagement</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Reduced app usage and loyalty</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Partner dissatisfaction and potential contract terminations</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-slate-800">Technical Challenges</h4>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Complex ordering process with multiple failure points</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Numerous error states and edge cases during transactions</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Lack of clear visual guidance and instructions</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key Metrics & Success Criteria */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-slate-900">Key Metrics & Success Criteria</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg border">
              <h3 className="text-xl font-semibold mb-6 text-slate-800">Quantitative Metrics</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">85%</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-1">Order Completion Rate</h4>
                    <p className="text-sm text-slate-600">Target: Increase from current 65% to 85%</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold">40%</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-1">User Retention</h4>
                    <p className="text-sm text-slate-600">Target: 40% increase in 30-day retention</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold">90%</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-1">Partner Satisfaction</h4>
                    <p className="text-sm text-slate-600">Target: 90% positive partner feedback</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border">
              <h3 className="text-xl font-semibold mb-6 text-slate-800">Qualitative Success Criteria</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-1">User Experience</h4>
                    <p className="text-sm text-slate-600">Seamless ordering flow with minimal friction points</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-1">Brand Alignment</h4>
                    <p className="text-sm text-slate-600">Enhanced partner brand representation and consistency</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-1">Feature Adoption</h4>
                    <p className="text-sm text-slate-600">High adoption rate of new split bill functionality</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* User Research & Personas - Enhanced */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-slate-900">User Research & Personas</h2>
          
          {/* Research Methodology - Enhanced */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-slate-800">Research Methodology</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-0 shadow-lg bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-600">
                    <Users className="w-5 h-5" />
                    User Interviews
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-slate-600">
                    <li>• 15 one-on-one interviews</li>
                    <li>• Mix of casual and power users</li>
                    <li>• Focus on pain points and needs</li>
                    <li>• 45-minute sessions</li>
                    <li>• Recorded and transcribed</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-600">
                    <Search className="w-5 h-5" />
                    Usability Testing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-slate-600">
                    <li>• 10 moderated sessions</li>
                    <li>• Task-based scenarios</li>
                    <li>• Performance metrics</li>
                    <li>• Think-aloud protocol</li>
                    <li>• SUS score tracking</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-purple-600">
                    <Target className="w-5 h-5" />
                    Analytics Review
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-slate-600">
                    <li>• User behavior patterns</li>
                    <li>• Drop-off points</li>
                    <li>• Feature usage data</li>
                    <li>• Session recordings</li>
                    <li>• Heat map analysis</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Key Findings - Enhanced */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-slate-800">Key Research Findings</h3>
            <div className="bg-white p-8 rounded-xl shadow-lg border">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-slate-700">User Pain Points</h4>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>65% of users reported order errors or delays</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>78% struggled with split bill functionality</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>42% abandoned orders due to complex UI</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>55% reported difficulty with QR code scanning</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-slate-700">User Needs</h4>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Quick and reliable order placement</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Easy bill splitting with friends</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Clear order status and updates</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Intuitive QR code scanning experience</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* User Personas - Enhanced */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-slate-800">User Personas</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-0 shadow-lg bg-white">
                <CardHeader>
                  <CardTitle className="text-blue-800">Sarah, 28</CardTitle>
                  <p className="text-sm text-slate-600">Regular Restaurant Goer</p>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    "I want to quickly order and split bills with friends without any hassle."
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• Uses app 2-3 times per week</li>
                    <li>• Values speed and reliability</li>
                    <li>• Often splits bills with friends</li>
                    <li>• Prefers mobile ordering over waiting</li>
                    <li>• Tech-savvy but values simplicity</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white">
                <CardHeader>
                  <CardTitle className="text-green-800">Mike, 35</CardTitle>
                  <p className="text-sm text-slate-600">Business Professional</p>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    "I need a reliable way to order food during busy work days."
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• Uses app 4-5 times per week</li>
                    <li>• Values efficiency and accuracy</li>
                    <li>• Often orders for team meetings</li>
                    <li>• Needs quick reordering</li>
                    <li>• Requires expense tracking</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white">
                <CardHeader>
                  <CardTitle className="text-purple-800">Emma, 24</CardTitle>
                  <p className="text-sm text-slate-600">Social Butterfly</p>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    "I love trying new restaurants and sharing experiences with friends."
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• Uses app 1-2 times per week</li>
                    <li>• Values discovery and sharing</li>
                    <li>• Often explores new venues</li>
                    <li>• Enjoys social features</li>
                    <li>• Shares recommendations</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Goals & Objectives */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-slate-900">Goals & Objectives</h2>
          <div className="grid lg:grid-cols-3 gap-6">
            <Card className="border-2 border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-800">Users & Partners</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700">
                  Focus on visual representation of brands and an improved ordering and gifting checkout experience
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-800">Business</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-700">
                  Increase engagement and retention of shoppers while preserving partner relationships
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 bg-purple-50">
              <CardHeader>
                <CardTitle className="text-purple-800">Product</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-purple-700">
                  Maintain our current earnings structure while improving user experience
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Research & Insights */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-slate-900">Research & Insights</h2>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-slate-800">Research Methodology</h3>
            <div className="bg-gray-100 p-8 rounded-xl">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <Search className="w-5 h-5 text-blue-600" />
                    Research Approach
                  </h4>
                  <ul className="space-y-2 text-slate-600">
                    <li>• Utilized usertesting.com for survey experiments</li>
                    <li>• Conducted 10 comprehensive user studies</li>
                    <li>• Role-played as both vendors and shoppers</li>
                    <li>• Analyzed data for actionable insights</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-green-600" />
                    Timeline & Process
                  </h4>
                  <ul className="space-y-2 text-slate-600">
                    <li>• One month ideation and experimentation</li>
                    <li>• Bodystorming and brainstorming sessions</li>
                    <li>• Generated worst-case scenarios for problem-solving</li>
                    <li>• Reverse-engineered solutions from pain points</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="border-0 shadow-lg bg-gray-50">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Shoppers (Ages 21-61)
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-3 text-slate-800">Key Needs:</h4>
                <ul className="space-y-2 text-slate-600">
                  <li>• Convenient and speedy ordering process</li>
                  <li>• Precise menu details and information</li>
                  <li>• Easy bill splitting functionality</li>
                  <li>• Gift ordering capabilities</li>
                  <li>• Reliable QR code scanning</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gray-50">
              <CardHeader className="bg-gradient-to-r from-green-500 to-green-600 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Partners (Ages 32-55)
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-3 text-slate-800">Key Requirements:</h4>
                <ul className="space-y-2 text-slate-600">
                  <li>• Dependable app performance</li>
                  <li>• Accurate menu and location information</li>
                  <li>• Seamless checkout experience</li>
                  <li>• Brand integrity protection</li>
                  <li>• Venue event management</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-8 rounded-r-lg">
            <h3 className="text-xl font-semibold text-amber-800 mb-4">Key Survey Findings</h3>
            <p className="text-amber-700 leading-relaxed">
              Both vendors and shoppers expressed strong desire for better brand representation and improved user
              experience across the menu, cart, and ordering process. Critical needs included more locations, enhanced
              search results, improved QR scanning capabilities, and bill splitting for group orders.
            </p>
          </div>
        </section>

        {/* Design Process */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-slate-900">Design Process</h2>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-slate-800">Wireframing & Prototyping</h3>
            <p className="text-slate-600 leading-relaxed mb-8">
              After agreeing on the shopper's journey, I rapidly created wireframes and prototypes of the ordering
              process. The designs included our new split-check features and were sent to a group of hand-selected user
              testers for their feedback. These low-fidelity wireframes helped us validate core concepts before moving
              to high-fidelity designs.
            </p>

            {/* CSS-based Wireframes */}
            <div className="bg-white p-8 rounded-xl shadow-lg border mb-8">
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-slate-700">Initial Design Concepts</h4>
                <p className="text-slate-600 leading-relaxed mb-6">
                  These wireframes represent the core user flows we identified as critical to solving the ordering
                  experience problems. Each screen addresses specific pain points discovered during our research phase.
                </p>
              </div>

              {/* Low-Fidelity Wireframes */}
              <LowFidelityMobileWireframe />

              <div className="my-12">
                <Separator />
              </div>

              {/* Medium-Fidelity Wireframes */}
              <MediumFidelityMobileWireframe />
            </div>

            {/* User Flow Diagrams */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-6 text-slate-800">User Flow Mapping</h3>
              <p className="text-slate-600 leading-relaxed mb-8">
                We mapped key user flows to clarify each step, reduce confusion, and prevent errors. These diagrams made it easy to spot pain points and optimize the ordering experience.
              </p>
              <UserFlowDiagrams />
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4 text-slate-700">Design Process Highlights</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-slate-700">Rapid wireframe iteration based on user feedback</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-slate-700">User journey mapping and flow optimization</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-slate-700">Split-check feature conceptualization</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-slate-700">Hand-selected user testing validation</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 p-6 rounded-xl">
                <h4 className="font-semibold mb-3 text-slate-700">Key Design Decisions</h4>
                <ul className="space-y-3 text-slate-600 text-sm">
                  <li>• Prioritized visual clarity over feature density</li>
                  <li>• Implemented progressive disclosure for complex actions</li>
                  <li>• Designed for one-handed mobile usage patterns</li>
                  <li>• Created consistent interaction patterns across flows</li>
                  <li>• Emphasized error prevention over error handling</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-6 text-slate-800">Design Considerations</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-3 text-slate-700">Technical Challenges</h4>
                <p className="text-slate-600 leading-relaxed">
                  The ordering process was crucial but complex to fix due to technical difficulties. We had to consider
                  every possible error state and edge case that could arise during a transaction.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-slate-700">User Trust & Clarity</h4>
                <p className="text-slate-600 leading-relaxed">
                  To ensure shoppers' trust and prompt processing of orders, we provided clear visuals and concise
                  instructions to guide them through each step of the checkout process.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Design Tools */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-slate-900">Design Tools & Technology</h2>
          <p className="text-slate-600 leading-relaxed mb-12 text-lg">
            Throughout the CHEQ mobile app redesign project, I leveraged industry-leading design tools to ensure
            efficient collaboration, rapid prototyping, and seamless handoff to development teams.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg border hover:shadow-xl transition-shadow group">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-6 flex items-center justify-center bg-slate-50 rounded-xl group-hover:bg-slate-100 transition-colors">
                  <img src="/images/figma-logo.svg" alt="Figma logo" className="w-12 h-12" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">Figma</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Primary design tool for wireframing, prototyping, and creating high-fidelity mockups with real-time
                  collaboration
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl shadow-lg border hover:shadow-xl transition-shadow group">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-6 flex items-center justify-center bg-slate-50 rounded-xl group-hover:bg-slate-100 transition-colors">
                  <img src="/images/framer-logo.png" alt="Framer logo" className="w-10 h-10" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">Framer</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Advanced prototyping for interactive user flows and micro-interactions testing
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl shadow-lg border hover:shadow-xl transition-shadow group">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-6 flex items-center justify-center bg-slate-50 rounded-xl group-hover:bg-slate-100 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">UT</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">UserTesting.com</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  User research platform for conducting remote usability tests and gathering feedback
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl shadow-lg border hover:shadow-xl transition-shadow group">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-6 flex items-center justify-center bg-slate-50 rounded-xl group-hover:bg-slate-100 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">M</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">Miro</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Collaborative whiteboarding for user journey mapping, brainstorming, and workshop facilitation
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gray-100 p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-6 text-slate-800">Tool Integration & Workflow</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-3 text-slate-700">Design to Development</h4>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Figma's developer handoff features enabled seamless collaboration with the engineering team, providing
                  accurate specs, assets, and CSS properties for efficient implementation.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-slate-700">User Testing Integration</h4>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Framer prototypes were directly integrated with UserTesting.com for realistic user interaction
                  testing, providing valuable insights for design iterations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-slate-900">The Solution</h2>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gray-50">
              <CardHeader className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                <CardTitle>Quick QR Scan</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-slate-600 leading-relaxed">
                  Enhanced QR scanning capabilities for faster menu access and seamless ordering initiation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gray-50">
              <CardHeader className="bg-gradient-to-br from-green-500 to-green-600 text-white">
                <CardTitle>Improved Ordering Flow</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-slate-600 leading-relaxed">
                  Streamlined ordering process with clear visual guidance and error prevention mechanisms.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gray-50">
              <CardHeader className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
                <CardTitle>Split Bill Features</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-slate-600 leading-relaxed">
                  Advanced bill splitting functionality for group orders and gift purchasing capabilities.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Final Implementation Showcase */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-slate-800">Implementation</h3>
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg border">
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-slate-700">UI Design Showcase</h4>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Explore the polished UI screens from the CHEQ mobile app redesign. These visuals highlight improvements to the ordering flow, QR scanning, and bill splitting features, directly addressing the pain points identified during research.
                </p>
              </div>

              <FinalDesignShowcase />
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-8 rounded-r-lg">
            <h3 className="text-xl font-semibold text-green-800 mb-4">Partner Feedback Integration</h3>
            <p className="text-green-700 leading-relaxed">
              Partner feedback was instrumental in shaping the final solution. The redesign focused on real-world needs—improving engagement, retention, and usability while protecting partner brand integrity throughout the app experience.
            </p>
          </div>
        </section>

        {/* Results & Impact */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-slate-900">Expected Impact</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center border-0 shadow-lg bg-gray-50">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">User Experience</h3>
                <p className="text-sm text-slate-600">Enhanced ordering flow with reduced friction</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg bg-gray-50">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">Partner Satisfaction</h3>
                <p className="text-sm text-slate-600">Improved brand representation and reliability</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg bg-gray-50">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">App Engagement</h3>
                <p className="text-sm text-slate-600">Increased retention and usage metrics</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg bg-gray-50">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">Business Goals</h3>
                <p className="text-sm text-slate-600">Maintained earnings while improving experience</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Footer */}
        <footer className="text-center py-8">
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Billy No</h3>
            <p className="text-slate-600">Product Designer</p>
          </div>
          <div className="flex justify-center items-center gap-4 text-sm text-slate-500">
            <span>CHEQ Mobile App Case Study</span>
            <span>•</span>
            <span>August 2023</span>
            <span>•</span>
            <span>cheqplease.com</span>
          </div>
        </footer>
      </div>
    </div>
  )
}
