import type React from "react"
import {
  ArrowRight,
  Users,
  Building2,
  Settings,
  UserPlus,
  CheckCircle,
  Monitor,
  Edit3,
  Trash2,
  Eye,
  Plus,
  MapPin,
} from "lucide-react"

// Reusable FlowStep Component
const FlowStep = ({
  icon: Icon,
  title,
  subtitle,
  color,
  size = "lg",
  badge = null,
}: {
  icon: any
  title: string
  subtitle?: string
  color: string
  size?: "sm" | "md" | "lg"
  badge?: React.ReactNode
}) => {
  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-16 h-16",
    lg: "w-20 h-20",
  }

  const iconSizes = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-10 h-10",
  }

  const colorClasses = {
    stone: "bg-stone-600",
    blue: "bg-stone-700",
    green: "bg-stone-600",
    purple: "bg-stone-700",
    orange: "bg-stone-600",
    pink: "bg-stone-700",
    red: "bg-red-600",
  }

  return (
    <div className="flex flex-col items-center group">
      <div
        className={`${sizeClasses[size]} ${colorClasses[color]} rounded-2xl 
                      flex items-center justify-center mb-4 shadow-sm relative
                      group-hover:scale-105 group-hover:shadow-md 
                      transition-all duration-200 ease-in-out
                      focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2`}
        tabIndex={0}
        role="button"
        aria-label={`${title} step`}
      >
        <Icon className={`${iconSizes[size]} text-white`} />
        {badge}
      </div>
      <h5 className="text-sm font-semibold text-stone-800 mb-1">{title}</h5>
      {subtitle && <p className="text-xs text-stone-600 text-center max-w-20">{subtitle}</p>}
    </div>
  )
}

// Enhanced Arrow Component
const FlowArrow = ({ size = "md" }: { size?: "sm" | "md" | "lg" }) => {
  const arrowSizes = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  }

  const containerHeights = {
    sm: "h-12",
    md: "h-16",
    lg: "h-20",
  }

  return (
    <div className={`relative flex items-center justify-center ${containerHeights[size]}`}>
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-dashed border-stone-300"></div>
      </div>
      <div className="relative bg-[#f5f2e8] p-2 rounded-full shadow-sm border border-stone-200">
        <ArrowRight className={`${arrowSizes[size]} text-stone-500`} />
      </div>
    </div>
  )
}

// Section Container Component
const FlowSection = ({
  title,
  subtitle,
  children,
  bgColor = "bg-white",
}: {
  title: string
  subtitle: string
  children: React.ReactNode
  bgColor?: string
}) => (
  <div
    className={`${bgColor} p-8 rounded-xl shadow-sm border border-stone-200 
                  hover:shadow-md transition-shadow duration-300`}
  >
    <div className="text-center mb-12">
      <h4 className="text-2xl font-bold text-stone-800 mb-2">{title}</h4>
      <p className="text-stone-600">{subtitle}</p>
    </div>
    {children}
  </div>
)

export function TattleUserFlowDiagrams() {
  return (
    <div className="space-y-12">
      {/* Primary Group Creation Flow */}
      <FlowSection title="Group Creation Flow" subtitle="From setup to management" bgColor="bg-stone-50">
        <div className="flex flex-col lg:flex-row items-center justify-center mb-12 gap-6 lg:gap-8 overflow-x-auto lg:overflow-visible">
          <div className="flex items-center gap-8 min-w-max">
            <FlowStep icon={Monitor} title="Access Setup" subtitle="Account dashboard" color="stone" size="lg" />

            <FlowArrow size="lg" />

            <FlowStep icon={Plus} title="Create Group" subtitle="New group form" color="blue" size="lg" />

            <FlowArrow size="lg" />

            <FlowStep icon={MapPin} title="Assign Locations" subtitle="Select locations" color="stone" size="lg" />

            <FlowArrow size="lg" />

            <FlowStep icon={UserPlus} title="Add Users" subtitle="Assign employees" color="blue" size="lg" />

            <FlowArrow size="lg" />

            <FlowStep icon={CheckCircle} title="Complete" subtitle="Group active" color="green" size="lg" />
          </div>
        </div>
      </FlowSection>

      {/* Management Actions Flow */}
      <FlowSection title="Group Management Actions" subtitle="Edit, view, and organize groups" bgColor="bg-stone-50">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* View Group */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200 hover:shadow-md transition-shadow duration-200">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-stone-100 px-4 py-2 rounded-full">
                <Eye className="w-5 h-5 text-stone-600" />
                <span className="text-sm font-semibold text-stone-800">View Details</span>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex flex-col items-center gap-4">
                <FlowStep icon={Eye} title="View Group" color="stone" size="md" />
                <FlowArrow size="sm" />
                <FlowStep icon={Monitor} title="Drawer Panel" color="blue" size="sm" />
              </div>
            </div>
          </div>

          {/* Edit Group */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200 hover:shadow-md transition-shadow duration-200">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-stone-100 px-4 py-2 rounded-full">
                <Edit3 className="w-5 h-5 text-stone-600" />
                <span className="text-sm font-semibold text-stone-800">Edit Group</span>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex flex-col items-center gap-4">
                <FlowStep icon={Edit3} title="Edit" color="stone" size="md" />
                <FlowArrow size="sm" />
                <FlowStep icon={Settings} title="Modify" color="blue" size="sm" />
              </div>
            </div>
          </div>

          {/* Delete Group */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200 hover:shadow-md transition-shadow duration-200">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-stone-100 px-4 py-2 rounded-full">
                <Trash2 className="w-5 h-5 text-stone-600" />
                <span className="text-sm font-semibold text-stone-800">Remove Group</span>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex flex-col items-center gap-4">
                <FlowStep icon={Trash2} title="Delete" color="red" size="md" />
                <FlowArrow size="sm" />
                <FlowStep icon={CheckCircle} title="Confirm" color="green" size="sm" />
              </div>
            </div>
          </div>
        </div>
      </FlowSection>

      {/* Enterprise Hierarchy Flow */}
      <FlowSection
        title="Enterprise Hierarchy Management"
        subtitle="Multi-level organization structure"
        bgColor="bg-stone-50"
      >
        <div className="flex flex-col items-center justify-center gap-8">
          {/* Global Level */}
          <div className="w-full max-w-4xl">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full">
                <Building2 className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-semibold text-blue-800">Global Level</span>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <FlowStep icon={Building2} title="Global HQ" subtitle="10,000+ locations" color="blue" size="lg" />
            </div>
          </div>

          <FlowArrow size="lg" />

          {/* Regional Level */}
          <div className="w-full max-w-4xl">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 bg-stone-100 px-4 py-2 rounded-full">
                <MapPin className="w-5 h-5 text-stone-600" />
                <span className="text-sm font-semibold text-stone-800">Regional Level</span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-8">
              <FlowStep icon={MapPin} title="Region A" subtitle="2,500 locations" color="stone" size="md" />
              <FlowStep icon={MapPin} title="Region B" subtitle="3,200 locations" color="stone" size="md" />
              <FlowStep icon={MapPin} title="Region C" subtitle="4,300 locations" color="stone" size="md" />
            </div>
          </div>

          <FlowArrow size="lg" />

          {/* Local Level */}
          <div className="w-full max-w-4xl">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">
                <Users className="w-5 h-5 text-green-600" />
                <span className="text-sm font-semibold text-green-800">Local Level</span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <FlowStep icon={Users} title="Store 1" subtitle="15 employees" color="green" size="sm" />
              <FlowStep icon={Users} title="Store 2" subtitle="22 employees" color="green" size="sm" />
              <FlowStep icon={Users} title="Store 3" subtitle="18 employees" color="green" size="sm" />
              <FlowStep icon={Users} title="Store 4" subtitle="25 employees" color="green" size="sm" />
            </div>
          </div>
        </div>
      </FlowSection>

      {/* Success Metrics */}
      <FlowSection title="Implementation Success" subtitle="Measurable improvements" bgColor="bg-green-50">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { value: "10K+", label: "Locations", sublabel: "Successfully managed", color: "stone" },
            { value: "85%", label: "Time Saved", sublabel: "In group creation", color: "green" },
            { value: "2", label: "Major Clients", sublabel: "Positive feedback", color: "stone" },
            { value: "100%", label: "Mobile Ready", sublabel: "Responsive design", color: "green" },
          ].map((metric, index) => (
            <div key={index} className="text-center group">
              <div
                className={`w-20 h-20 ${metric.color === "green" ? "bg-green-600" : "bg-stone-600"} rounded-2xl flex items-center justify-center 
                              mx-auto mb-4 shadow-sm group-hover:scale-105 group-hover:shadow-md
                              transition-all duration-200`}
              >
                <span className="text-xl font-bold text-white">{metric.value}</span>
              </div>
              <h5 className="text-sm font-semibold text-stone-800 mb-1">{metric.label}</h5>
              <p className="text-xs text-stone-600">{metric.sublabel}</p>
            </div>
          ))}
        </div>
      </FlowSection>
    </div>
  )
}
