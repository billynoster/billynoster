import { Calendar, Users, Target, Search, Lightbulb, Smartphone, CheckCircle } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { UserFlowDiagrams } from "./user-flow-diagrams-billy-style"

export default function CheqCaseStudyBillyStyle() {
  return (
    <div className="min-h-screen bg-[#f5f2e8]">
      {/* Header Navigation - Matching your site */}
      <header className="bg-[#f5f2e8] border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-xl font-semibold text-stone-800">Billy No</div>
            <div className="flex items-center gap-8">
              <a href="/" className="text-stone-600 hover:text-stone-800 transition-colors">
                About
              </a>
              <a href="/case-studies" className="text-stone-800 font-medium">
                Case Studies
              </a>
              <a href="/design-tools" className="text-stone-600 hover:text-stone-800 transition-colors">
                Design Tools
              </a>
              <button className="bg-stone-700 text-white px-4 py-2 rounded-lg hover:bg-stone-800 transition-colors">
                Book a Consultation
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section - Adapted to your style */}
      <div className="bg-stone-800 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-stone-700 px-4 py-2 rounded-full mb-6">
                <Smartphone className="w-4 h-4" />
                <span className="text-sm font-medium">Mobile App Design</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">CHEQ Mobile App Redesign</h1>
              <p className="text-xl text-stone-300 mb-8 leading-relaxed">
                Transforming the mobile ordering experience to eliminate interruptions and enhance customer satisfaction
                for restaurants, stadiums, and venues.
              </p>
              <div className="flex flex-wrap gap-6 text-sm text-stone-400">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>August 2023</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>Billy Nose, Product Designer</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-stone-700 rounded-2xl p-8 transform rotate-2 shadow-2xl">
                <Smartphone className="w-24 h-24 mx-auto text-white mb-4" />
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2">CHEQ</div>
                  <div className="text-sm opacity-80">Quick QR • Ordering • Split Bills</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Overview Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-stone-800">Project Overview</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-stone-800">Challenge</h3>
              </div>
              <p className="text-stone-600 leading-relaxed">
                Mobile app users frequently encounter interruptions, errors, and delays with their orders, causing
                customer frustration and partner dissatisfaction.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-stone-800">Solution</h3>
              </div>
              <p className="text-stone-600 leading-relaxed">
                Developed CHEQ Quick QR Scan, improved Ordering Flow, and Split Bill features to give shoppers complete
                control over their checkout experience.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-stone-100 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-stone-600" />
                </div>
                <h3 className="text-lg font-semibold text-stone-800">Team</h3>
              </div>
              <p className="text-stone-600 leading-relaxed">
                Collaborated with a cross-functional team of 5 engineers and product managers as the lead designer.
              </p>
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-stone-800">The Problem</h2>
          <div className="bg-red-50 border-l-4 border-red-400 p-8 rounded-r-xl mb-8">
            <h3 className="text-xl font-semibold text-red-800 mb-4">Critical User Experience Issues</h3>
            <p className="text-red-700 text-lg leading-relaxed">
              Our mobile app users frequently encounter interruptions, errors, and delays with their orders, which can
              cause them to abandon their purchase or not bother altogether. This poses a significant problem for our
              partners and vendors who rely on a seamless customer experience.
            </p>
          </div>

          {/* Visual Evidence */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-stone-800">Current Experience Challenges</h3>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-stone-700">Previous Mobile Interface</h4>
                <p className="text-stone-600 leading-relaxed mb-6">
                  The existing mobile app interface presented several usability challenges that hindered the user
                  experience and created friction in the ordering process.
                </p>
              </div>

              <div className="relative">
                <img
                  src="/images/old-ui-screenshots.png"
                  alt="Screenshots of the old CHEQ mobile app interface"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>

              <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-300">
                  <h5 className="font-semibold text-red-800 mb-2">Venue Discovery Issues</h5>
                  <p className="text-red-700">Cluttered interface with unclear navigation</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-300">
                  <h5 className="font-semibold text-red-800 mb-2">Menu Complexity</h5>
                  <p className="text-red-700">Dense layout with poor visual hierarchy</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-300">
                  <h5 className="font-semibold text-red-800 mb-2">Checkout Friction</h5>
                  <p className="text-red-700">Confusing cart interface and pricing</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Research & Insights */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-stone-800">Research & Insights</h2>

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
                    <li>• Utilized usertesting.com for survey experiments</li>
                    <li>• Conducted 10 comprehensive user studies</li>
                    <li>• Role-played as both vendors and shoppers</li>
                    <li>• Analyzed data for actionable insights</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4 flex items-center gap-2 text-stone-700">
                    <Calendar className="w-5 h-5 text-stone-600" />
                    Timeline & Process
                  </h4>
                  <ul className="space-y-2 text-stone-600">
                    <li>• One month ideation and experimentation</li>
                    <li>• Bodystorming and brainstorming sessions</li>
                    <li>• Generated worst-case scenarios</li>
                    <li>• Reverse-engineered solutions from pain points</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
              <div className="bg-stone-700 text-white p-4 rounded-t-xl -m-8 mb-6">
                <h4 className="flex items-center gap-2 font-semibold">
                  <Users className="w-5 h-5" />
                  Shoppers (Ages 21-61)
                </h4>
              </div>
              <div>
                <h5 className="font-semibold mb-3 text-stone-800">Key Needs:</h5>
                <ul className="space-y-2 text-stone-600">
                  <li>• Convenient and speedy ordering process</li>
                  <li>• Precise menu details and information</li>
                  <li>• Easy bill splitting functionality</li>
                  <li>• Gift ordering capabilities</li>
                  <li>• Reliable QR code scanning</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
              <div className="bg-stone-700 text-white p-4 rounded-t-xl -m-8 mb-6">
                <h4 className="flex items-center gap-2 font-semibold">
                  <Target className="w-5 h-5" />
                  Partners (Ages 32-55)
                </h4>
              </div>
              <div>
                <h5 className="font-semibold mb-3 text-stone-800">Key Requirements:</h5>
                <ul className="space-y-2 text-stone-600">
                  <li>• Dependable app performance</li>
                  <li>• Accurate menu and location information</li>
                  <li>• Seamless checkout experience</li>
                  <li>• Brand integrity protection</li>
                  <li>• Venue event management</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Design Process */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-stone-800">Design Process</h2>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-stone-800">Wireframing & Prototyping</h3>
            <p className="text-stone-600 leading-relaxed mb-8">
              After agreeing on the shopper's journey, I rapidly created wireframes and prototypes of the ordering
              process. The designs included our new split-check features and were sent to a group of hand-selected user
              testers for their feedback.
            </p>

            {/* Wireframes */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200 mb-8">
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-stone-700">Initial Design Concepts</h4>
                <p className="text-stone-600 leading-relaxed mb-6">
                  These wireframes represent the core user flows we identified as critical to solving the ordering
                  experience problems.
                </p>
              </div>

              <div className="relative">
                <img
                  src="/images/wireframes.png"
                  alt="Low-fidelity wireframes showing the menu discovery screen and bill splitting functionality"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
            </div>

            {/* User Flow Diagrams */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-6 text-stone-800">User Flow Mapping</h3>
              <p className="text-stone-600 leading-relaxed mb-8">
                To ensure a seamless user experience, we mapped out comprehensive user flows that account for different
                user paths, decision points, and potential error states.
              </p>
              <UserFlowDiagrams />
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-stone-800">The Solution</h2>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-stone-700 rounded-lg flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-stone-800 mb-3">Quick QR Scan</h3>
              <p className="text-stone-600 leading-relaxed">
                Enhanced QR scanning capabilities for faster menu access and seamless ordering initiation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-stone-700 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-stone-800 mb-3">Improved Ordering Flow</h3>
              <p className="text-stone-600 leading-relaxed">
                Streamlined ordering process with clear visual guidance and error prevention mechanisms.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-stone-700 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-stone-800 mb-3">Split Bill Features</h3>
              <p className="text-stone-600 leading-relaxed">
                Advanced bill splitting functionality for group orders and gift purchasing capabilities.
              </p>
            </div>
          </div>

          {/* Final Implementation */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-stone-800">Final Implementation</h3>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-stone-700">Redesigned User Experience</h4>
                <p className="text-stone-600 leading-relaxed mb-6">
                  The final implementation showcases the transformation from wireframes to polished, user-friendly
                  interfaces that address each core pain point.
                </p>
              </div>

              <div className="relative mb-6">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case_Study-dnNWKmivnUWM9UjziFuKnAlCUZRWLG.png"
                  alt="Final redesigned CHEQ mobile app interface"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>

              <div className="relative mb-6">
                <img
                  src="/images/final-implementation-2.png"
                  alt="Advanced checkout and bill splitting functionality"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Results & Impact */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-stone-800">Expected Impact</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, title: "User Experience", desc: "Enhanced ordering flow with reduced friction" },
              { icon: Target, title: "Partner Satisfaction", desc: "Improved brand representation and reliability" },
              { icon: Smartphone, title: "App Engagement", desc: "Increased retention and usage metrics" },
              { icon: CheckCircle, title: "Business Goals", desc: "Maintained earnings while improving experience" },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-stone-200 text-center">
                <div className="w-12 h-12 bg-stone-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-stone-600" />
                </div>
                <h3 className="font-semibold text-stone-800 mb-2">{item.title}</h3>
                <p className="text-sm text-stone-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <Separator className="my-12 bg-stone-200" />

        {/* Footer */}
        <footer className="text-center py-8">
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-stone-800 mb-2">Billy Nose</h3>
            <p className="text-stone-600">Product Designer</p>
          </div>
          <div className="flex justify-center items-center gap-4 text-sm text-stone-500">
            <span>CHEQ Mobile App Case Study</span>
            <span>•</span>
            <span>August 2023</span>
          </div>
        </footer>
      </div>
    </div>
  )
}
