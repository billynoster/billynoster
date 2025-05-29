import type React from "react"
import {
  ArrowRight,
  QrCode,
  Smartphone,
  ShoppingCart,
  Users,
  CreditCard,
  CheckCircle,
  Gift,
  AlertTriangle,
  RotateCcw,
  UserPlus,
} from "lucide-react"

type FlowColor = "stone" | "blue" | "green" | "purple" | "orange" | "pink" | "red";

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
  color: FlowColor
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
    blue: "bg-blue-600",
    green: "bg-green-600",
    purple: "bg-purple-600",
    orange: "bg-orange-600",
    pink: "bg-pink-600",
    red: "bg-red-600",
  }

  return (
    <div className="flex flex-col items-center group">
      <div
        className={`${sizeClasses[size]} ${colorClasses[color]} rounded-2xl 
                      flex items-center justify-center mb-4 shadow-lg relative
                      group-hover:scale-105 group-hover:shadow-xl 
                      transition-all duration-200 ease-in-out
                      focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2`}
        tabIndex={0}
        role="button"
        aria-label={`${title} step`}
      >
        <Icon className={`${iconSizes[size]} text-white`} />
        {badge}
      </div>
      <h5 className="text-sm font-semibold text-slate-800 mb-1">{title}</h5>
      {subtitle && <p className="text-xs text-slate-600 text-center max-w-20">{subtitle}</p>}
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
        <div className="w-full border-t border-dashed border-slate-300"></div>
      </div>
      <div className="relative bg-white p-2 rounded-full shadow-sm">
        <ArrowRight className={`${arrowSizes[size]} text-slate-500`} />
      </div>
    </div>
  )
}

// Section Container Component
const FlowSection = ({
  title,
  subtitle,
  children,
  gradient,
  borderColor,
}: {
  title: string
  subtitle: string
  children: React.ReactNode
  gradient: string
  borderColor: string
}) => (
  <div
    className={`${gradient} p-8 rounded-2xl border ${borderColor} 
                  hover:shadow-lg transition-shadow duration-300`}
  >
    <div className="text-center mb-12">
      <h4 className="text-2xl font-bold text-slate-800 mb-2">{title}</h4>
      <p className="text-slate-600">{subtitle}</p>
    </div>
    {children}
  </div>
)

// Add a StepNumberBadge component
const StepNumberBadge = ({ number }: { number: number }) => (
  <div className="absolute -top-3 -left-3 w-7 h-7 bg-white border-2 border-blue-300 rounded-full flex items-center justify-center shadow text-blue-600 font-bold text-sm z-10">
    {number}
  </div>
)

export function UserFlowDiagrams() {
  return (
    <div className="space-y-12">
      {/* Primary User Journey */}
      <FlowSection
        title="Primary User Journey"
        subtitle="From QR scan to order completion"
        gradient="bg-gradient-to-br from-slate-50 to-blue-50"
        borderColor="border-slate-200"
      >
        {/* Main Flow */}
        <div className="flex flex-col lg:flex-row items-center justify-center mb-12 gap-8 lg:gap-10 overflow-x-auto lg:overflow-visible">
          <div className="flex items-center gap-10 min-w-max">
            <div className="relative">
              <StepNumberBadge number={1} />
              <FlowStep icon={QrCode} title="Scan QR" subtitle="Quick access" color="blue" size="lg" />
            </div>
            <FlowArrow size="lg" />
            <div className="relative">
              <StepNumberBadge number={2} />
              <FlowStep icon={Smartphone} title="Browse Menu" subtitle="Select items" color="green" size="lg" />
            </div>
            <FlowArrow size="lg" />
            <div className="relative">
              <StepNumberBadge number={3} />
              <FlowStep icon={ShoppingCart} title="Review Cart" subtitle="Confirm order" color="purple" size="lg" />
            </div>
            <FlowArrow size="lg" />
            <div className="relative">
              <StepNumberBadge number={4} />
              <FlowStep
                icon={Users}
                title="Choose Payment Method"
                subtitle="Solo or Split"
                color="orange"
                size="lg"
                badge={
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md">
                    <span className="text-xs font-bold text-orange-500">?</span>
                  </div>
                }
              />
            </div>
          </div>
        </div>

        {/* Branching Visual - removed for clarity */}
        {/* (No extra lines or connectors) */}

        {/* Split Paths */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Solo Payment Path */}
          <div
            className="bg-white p-8 rounded-xl shadow-md border-2 border-blue-200 
                         hover:shadow-lg transition-shadow duration-200"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full">
                <CreditCard className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-semibold text-blue-800">Solo Payment</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-8">
              <FlowArrow size="md" />
              <FlowStep icon={CreditCard} title="Pay Now" color="blue" size="md" />
              <FlowArrow size="md" />
              <FlowStep icon={CheckCircle} title="Complete" color="green" size="md" />
            </div>
          </div>

          {/* Split Payment Path */}
          <div
            className="bg-white p-8 rounded-xl shadow-md border-2 border-purple-200
                         hover:shadow-lg transition-shadow duration-200"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full">
                <Users className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-semibold text-purple-800">Split Payment</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-8">
              <FlowArrow size="sm" />
              <FlowStep icon={UserPlus} title="Add Friends" color="purple" size="sm" />
              <FlowArrow size="sm" />
              <FlowStep icon={ShoppingCart} title="Assign Items" color="purple" size="sm" />
              <FlowArrow size="sm" />
              <FlowStep icon={CheckCircle} title="Complete" color="green" size="sm" />
            </div>
          </div>
        </div>
      </FlowSection>

      {/* Gift Ordering Flow */}
      <FlowSection
        title="Gift Ordering Flow"
        subtitle="Send food to friends"
        gradient="bg-gradient-to-br from-pink-50 to-rose-50"
        borderColor="border-pink-200"
      >
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 overflow-x-auto lg:overflow-visible">
          <div className="flex items-center gap-8 min-w-max">
            <FlowStep icon={QrCode} title="Scan" color="pink" size="lg" />

            <FlowArrow size="lg" />

            <FlowStep icon={ShoppingCart} title="Select" color="pink" size="lg" />

            <FlowArrow size="lg" />

            <FlowStep icon={Users} title="Choose Friend" color="pink" size="lg" />

            <FlowArrow size="lg" />

            <FlowStep icon={Gift} title="Send Gift" color="pink" size="lg" />
          </div>
        </div>
      </FlowSection>

      {/* Error Prevention */}
      <FlowSection
        title="Error Prevention"
        subtitle="Smart recovery flows"
        gradient="bg-gradient-to-br from-red-50 to-orange-50"
        borderColor="border-red-200"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-md text-center border border-slate-100 hover:shadow-lg transition-shadow duration-200">
            <div className="w-16 h-16 bg-red-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md hover:scale-105 transition-transform duration-200">
              <AlertTriangle className="w-8 h-8 text-white" />
            </div>
            <h5 className="text-sm font-semibold text-slate-800 mb-3">QR Issues</h5>
            <div className="flex items-center justify-center gap-3 text-xs">
              <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full font-medium">Problem</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full font-medium">Manual Entry</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center border border-slate-100 hover:shadow-lg transition-shadow duration-200">
            <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md hover:scale-105 transition-transform duration-200">
              <CreditCard className="w-8 h-8 text-white" />
            </div>
            <h5 className="text-sm font-semibold text-slate-800 mb-3">Payment Issues</h5>
            <div className="flex items-center justify-center gap-3 text-xs">
              <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full font-medium">Declined</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full font-medium">Try Again</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center border border-slate-100 hover:shadow-lg transition-shadow duration-200">
            <div className="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md hover:scale-105 transition-transform duration-200">
              <RotateCcw className="w-8 h-8 text-white" />
            </div>
            <h5 className="text-sm font-semibold text-slate-800 mb-3">Split Issues</h5>
            <div className="flex items-center justify-center gap-3 text-xs">
              <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full font-medium">Friend Busy</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full font-medium">Pay Solo</span>
            </div>
          </div>
        </div>
      </FlowSection>

      {/* Success Metrics */}
      <FlowSection
        title="Flow Performance"
        subtitle="Optimized user experience"
        gradient="bg-gradient-to-br from-green-50 to-emerald-50"
        borderColor="border-green-200"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center group">
            <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-105 group-hover:shadow-xl transition-all duration-200">
              <span className="text-xl font-bold text-white">3.2s</span>
            </div>
            <h5 className="text-sm font-semibold text-slate-800 mb-1">QR to Menu</h5>
            <p className="text-xs text-slate-600">Average time</p>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-105 group-hover:shadow-xl transition-all duration-200">
              <span className="text-xl font-bold text-white">85%</span>
            </div>
            <h5 className="text-sm font-semibold text-slate-800 mb-1">Success Rate</h5>
            <p className="text-xs text-slate-600">Completed orders</p>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-105 group-hover:shadow-xl transition-all duration-200">
              <span className="text-xl font-bold text-white">67%</span>
            </div>
            <h5 className="text-sm font-semibold text-slate-800 mb-1">Split Usage</h5>
            <p className="text-xs text-slate-600">Use split feature</p>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 bg-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-105 group-hover:shadow-xl transition-all duration-200">
              <span className="text-xl font-bold text-white">92%</span>
            </div>
            <h5 className="text-sm font-semibold text-slate-800 mb-1">Satisfaction</h5>
            <p className="text-xs text-slate-600">User rating</p>
          </div>
        </div>
      </FlowSection>
    </div>
  )
}
