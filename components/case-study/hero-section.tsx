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
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-4">
              Tattle: <span className="text-blue-400">Account Setup Redesign</span>
            </h1>
            <div className="w-16 h-1 bg-blue-500 rounded-full opacity-70 mb-6" />
            <p className="text-2xl lg:text-3xl text-blue-100 italic max-w-2xl mb-8">
              {meta.subtitle}
            </p>
            <div className="flex flex-wrap gap-3 text-sm mb-8">
              <span className="inline-flex items-center bg-slate-800/70 text-slate-100 px-3 py-1 rounded-full font-medium">
                <span className="mr-1">{meta.year}</span>
              </span>
              <span className="inline-flex items-center bg-slate-800/70 text-slate-100 px-3 py-1 rounded-full font-medium">
                <span className="mr-1">{meta.author}</span>
              </span>
              <span className="inline-flex items-center bg-slate-800/70 text-slate-100 px-3 py-1 rounded-full font-medium">
                <span className="mr-1">{meta.domain}</span>
              </span>
            </div>
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
          </div>
          {/* Right column intentionally left empty for now */}
        </div>
      </div>
    </div>
  )
}
