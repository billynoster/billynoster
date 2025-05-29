import { Palette, Layers, Users, Code } from "lucide-react"

interface DesignTool {
  name: string
  description: string
  logo: string
  category: "design" | "prototyping" | "research" | "collaboration"
  features: string[]
  url?: string
}

const designTools: DesignTool[] = [
  {
    name: "Figma",
    description:
      "Primary design tool for wireframing, prototyping, and creating high-fidelity mockups with real-time collaboration",
    logo: "/images/figma-logo.svg",
    category: "design",
    features: ["Component Systems", "Auto Layout", "Developer Handoff", "Real-time Collaboration"],
    url: "https://figma.com",
  },
  {
    name: "Framer",
    description: "Advanced prototyping for interactive user flows and micro-interactions testing",
    logo: "/images/framer-logo.png",
    category: "prototyping",
    features: ["Interactive Prototypes", "Micro-interactions", "Code Components", "User Testing Integration"],
    url: "https://framer.com",
  },
  {
    name: "UserTesting.com",
    description: "User research platform for conducting remote usability tests and gathering feedback",
    logo: "UT",
    category: "research",
    features: ["Remote Testing", "Video Insights", "Participant Recruitment", "Analytics Dashboard"],
    url: "https://usertesting.com",
  },
  {
    name: "Miro",
    description: "Collaborative whiteboarding for user journey mapping, brainstorming, and workshop facilitation",
    logo: "M",
    category: "collaboration",
    features: ["Journey Mapping", "Brainstorming", "Workshop Templates", "Real-time Collaboration"],
    url: "https://miro.com",
  },
]

const categoryColors = {
  design: "bg-blue-500",
  prototyping: "bg-purple-500",
  research: "bg-green-500",
  collaboration: "bg-orange-500",
}

const categoryIcons = {
  design: Palette,
  prototyping: Layers,
  research: Users,
  collaboration: Code,
}

export function DesignToolsShowcase() {
  return (
    <div className="space-y-12">
      {/* Tools Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {designTools.map((tool, index) => {
          const CategoryIcon = categoryIcons[tool.category]

          return (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-stone-200 hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center">
                {/* Logo */}
                <div className="w-16 h-16 mb-4 flex items-center justify-center bg-stone-50 rounded-xl group-hover:bg-stone-100 transition-colors">
                  {tool.logo.includes(".") ? (
                    <img src={tool.logo || "/placeholder.svg"} alt={`${tool.name} logo`} className="w-12 h-12" />
                  ) : (
                    <div
                      className={`w-12 h-12 ${categoryColors[tool.category]} rounded-lg flex items-center justify-center`}
                    >
                      <span className="text-white font-bold text-lg">{tool.logo}</span>
                    </div>
                  )}
                </div>

                {/* Tool Info */}
                <div className="flex items-center gap-2 mb-2">
                  <CategoryIcon className="w-4 h-4 text-stone-500" />
                  <h3 className="text-lg font-semibold text-stone-800">{tool.name}</h3>
                </div>

                <p className="text-sm text-stone-600 leading-relaxed mb-4">{tool.description}</p>

                {/* Features */}
                <div className="space-y-1 mb-4 w-full">
                  {tool.features.slice(0, 2).map((feature, idx) => (
                    <div key={idx} className="text-xs text-stone-500 bg-stone-50 px-2 py-1 rounded">
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Tool Integration Workflow */}
      <div className="bg-stone-50 p-8 rounded-xl border border-stone-200">
        <h3 className="text-xl font-semibold mb-6 text-stone-800">Tool Integration & Workflow</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold mb-3 text-stone-700 flex items-center gap-2">
              <Code className="w-5 h-5 text-blue-600" />
              Design to Development
            </h4>
            <p className="text-stone-600 leading-relaxed text-sm">
              Figma's developer handoff features enabled seamless collaboration with the engineering team, providing
              accurate specs, assets, and CSS properties for efficient implementation of the account setup interface.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-stone-700 flex items-center gap-2">
              <Users className="w-5 h-5 text-green-600" />
              User Testing Integration
            </h4>
            <p className="text-stone-600 leading-relaxed text-sm">
              Framer prototypes were directly integrated with UserTesting.com for realistic user interaction testing,
              providing valuable insights for design iterations and validation of the enterprise workflow.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
