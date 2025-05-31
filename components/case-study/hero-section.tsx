import type React from "react"
import { Monitor, ArrowRight, Clock, Users, Building2 } from "lucide-react"
import type { CaseStudyMeta } from "../../types/case-study"

interface HeroSectionProps {
  meta: CaseStudyMeta
}

export const HeroSection: React.FC<HeroSectionProps> = ({ meta }) => {
  return (
    <div className="relative text-white overflow-hidden" style={{ minHeight: '600px' }}>
      {/* Background decoration */}
      <img 
        src="/images/hero.jpg" 
        alt="Tattle Account Setup Redesign background" 
        className="absolute inset-0 w-full h-full object-cover z-0" 
        style={{ minHeight: '600px' }}
      />
      <div className="absolute inset-0 bg-black/60 z-0" /> {/* Optional: overlay for readability */}

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
            
            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-blue-300" />
                  <span className="text-sm text-blue-200">Time Saved</span>
                </div>
                <div className="text-2xl font-bold text-white">85%</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-4 h-4 text-blue-300" />
                  <span className="text-sm text-blue-200">Locations</span>
                </div>
                <div className="text-2xl font-bold text-white">10K+</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Building2 className="w-4 h-4 text-blue-300" />
                  <span className="text-sm text-blue-200">Clients</span>
                </div>
                <div className="text-2xl font-bold text-white">2</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-blue-200 mt-8">
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
          {/* Right column intentionally left empty for now */}
        </div>
      </div>
    </div>
  )
}
