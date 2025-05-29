import type React from "react"
import { Monitor } from "lucide-react"
import type { CaseStudyMeta } from "../../types/case-study"

interface HeroSectionProps {
  meta: CaseStudyMeta
}

export const HeroSection: React.FC<HeroSectionProps> = ({ meta }) => {
  return (
    <div className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-400/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-400/10 to-transparent rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 rounded-full mb-6 shadow-lg">
              <Monitor className="w-4 h-4" />
              <span className="text-sm font-medium">{meta.category}</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              {meta.title}
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">{meta.subtitle}</p>
            <div className="flex flex-wrap gap-6 text-sm text-blue-200">
              <div className="flex items-center gap-2">
                <span>{meta.year}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>{meta.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>{meta.domain}</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-700 rounded-2xl p-8 transform rotate-2 shadow-2xl border border-white/10">
              <Monitor className="w-24 h-24 mx-auto text-white mb-4 drop-shadow-lg" />
              <div className="text-center">
                <div className="text-2xl font-bold mb-2 text-white drop-shadow-md">TATTLE</div>
                <div className="text-sm opacity-90 text-blue-100">Account Setup • Groups • Locations</div>
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-60 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
