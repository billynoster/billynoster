import type React from "react"
import { cn } from "@/lib/utils"

interface TimelineStep {
  number: number
  title: string
  description: string
  duration: string
  color?: string
}

interface HorizontalTimelineProps {
  steps: TimelineStep[]
  className?: string
}

export const HorizontalTimeline: React.FC<HorizontalTimelineProps> = ({ steps, className }) => {
  return (
    <div
      className={cn(
        "relative py-10 px-4 bg-white rounded-xl shadow-lg border border-slate-200",
        className
      )}
    >
      {/* Scrollable Timeline Steps */}
      <div className="relative overflow-x-auto">
        <div
          className="flex justify-between min-w-[600px] md:min-w-0 gap-8"
          style={{ minWidth: steps.length * 220 }}
        >
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center flex-1 min-w-[180px]">
              {/* Step Circle */}
              <div
                className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center mb-2 shadow transition-all duration-200 border-2 border-white hover:scale-105 hover:shadow-md focus:scale-105 focus:shadow-md cursor-pointer",
                  step.color || "bg-blue-500"
                )}
                tabIndex={0}
                aria-label={`Step ${step.number}: ${step.title}`}
              >
                <span className="text-white font-semibold text-lg">{step.number}</span>
              </div>
              {/* Step Content */}
              <div className="text-center mt-2">
                <h3 className="text-lg font-bold mb-2 text-slate-900">{step.title}</h3>
                <p className="text-slate-600 text-sm mb-1">{step.description}</p>
                <p className="text-slate-500 text-xs">{step.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 