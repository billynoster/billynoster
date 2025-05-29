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

// Reusable FlowStep Component - Billy's Style
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

// Enhanced Arrow Component - Billy's Style
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

// Section Container Component - Billy's Style
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

export function UserFlowDiagrams() {
  return (
    <div className="space-y-12">
      {/* Primary User Journey */}
      <FlowSection title="Primary User Journey" subtitle="From QR scan to order completion" bgColor="bg-stone-50">
        {/* Main Flow */}
        <div className="flex flex-col lg:flex-row items-center justify-center mb-12 gap-6 lg:gap-8 overflow-x-auto lg:overflow-visible">
          <div className="flex items-center gap-8 min-w-max">
            <FlowStep icon={QrCode} title="Scan QR" subtitle="Quick access" color="stone" size="lg" />

            <FlowArrow size="lg" />

            <FlowStep icon={Smartphone} title="Browse Menu" subtitle="Select items" color="blue" size="lg" />

            <FlowArrow size="lg" />

            <FlowStep icon={ShoppingCart} title="Review Cart" subtitle="Confirm order" color="stone" size="lg" />

            <FlowArrow size="lg" />

            <FlowStep
              icon={Users}
              title="Split Bill?"
              subtitle="Choose payment"
              color="blue"
              size="lg"
              badge={
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm border border-stone-200">
                  <span className="text-xs font-bold text-stone-600">?</span>
                </div>
              }
            />
          </div>
        </div>

        {/* Split Paths */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Solo Payment Path */}
          <div
            className="bg-white p-8 rounded-xl shadow-sm border border-stone-200 
                         hover:shadow-md transition-shadow duration-200"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-stone-100 px-4 py-2 rounded-full">
                <CreditCard className="w-5 h-5 text-stone-600" />
                <span className="text-sm font-semibold text-stone-800">Solo Payment</span>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="flex items-center gap-6">
                <FlowStep icon={CreditCard} title="Pay Now" color="stone" size="md" />

                <FlowArrow size="md" />

                <FlowStep icon={CheckCircle} title="Complete" color="green" size="md" />
              </div>
            </div>
          </div>

          {/* Split Payment Path */}
          <div
            className="bg-white p-8 rounded-xl shadow-sm border border-stone-200
                         hover:shadow-md transition-shadow duration-200"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-stone-100 px-4 py-2 rounded-full">
                <Users className="w-5 h-5 text-stone-600" />
                <span className="text-sm font-semibold text-stone-800">Split Payment</span>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="flex items-center gap-4">
                <FlowStep icon={UserPlus} title="Add Friends" color="stone" size="sm" />

                <FlowArrow size="sm" />

                <FlowStep icon={ShoppingCart} title="Assign Items" color="blue" size="sm" />

                <FlowArrow size="sm" />

                <FlowStep icon={CheckCircle} title="Complete" color="green" size="sm" />
              </div>
            </div>
          </div>
        </div>
      </FlowSection>

      {/* Gift Ordering Flow */}
      <FlowSection title="Gift Ordering Flow" subtitle="Send food to friends" bgColor="bg-stone-50">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 overflow-x-auto lg:overflow-visible">
          <div className="flex items-center gap-8 min-w-max">
            <FlowStep icon={QrCode} title="Scan" color="stone" size="lg" />

            <FlowArrow size="lg" />

            <FlowStep icon={ShoppingCart} title="Select" color="blue" size="lg" />

            <FlowArrow size="lg" />

            <FlowStep icon={Users} title="Choose Friend" color="stone" size="lg" />

            <FlowArrow size="lg" />

            <FlowStep icon={Gift} title="Send Gift" color="blue" size="lg" />
          </div>
        </div>
      </FlowSection>

      {/* Error Prevention */}
      <FlowSection title="Error Prevention" subtitle="Smart recovery flows" bgColor="bg-red-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            {
              icon: AlertTriangle,
              title: "QR Issues",
              color: "red",
              problem: "Problem",
              solution: "Manual Entry",
            },
            {
              icon: CreditCard,
              title: "Payment Issues",
              color: "red",
              problem: "Declined",
              solution: "Try Again",
            },
            {
              icon: RotateCcw,
              title: "Split Issues",
              color: "red",
              problem: "Friend Busy",
              solution: "Pay Solo",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm text-center 
                                      border border-stone-200 hover:shadow-md 
                                      transition-shadow duration-200"
            >
              <div
                className={`w-16 h-16 bg-${item.color}-600 rounded-xl flex items-center justify-center 
                              mx-auto mb-4 shadow-sm hover:scale-105 transition-transform duration-200`}
              >
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h5 className="text-sm font-semibold text-stone-800 mb-3">{item.title}</h5>
              <div className="flex items-center justify-center gap-3 text-xs">
                <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full font-medium">{item.problem}</span>
                <ArrowRight className="w-4 h-4 text-stone-400" />
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full font-medium">{item.solution}</span>
              </div>
            </div>
          ))}
        </div>
      </FlowSection>

      {/* Success Metrics */}
      <FlowSection title="Flow Performance" subtitle="Optimized user experience" bgColor="bg-green-50">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { value: "3.2s", label: "QR to Menu", sublabel: "Average time", color: "stone" },
            { value: "85%", label: "Success Rate", sublabel: "Completed orders", color: "green" },
            { value: "67%", label: "Split Usage", sublabel: "Use split feature", color: "stone" },
            { value: "92%", label: "Satisfaction", sublabel: "User rating", color: "green" },
          ].map((metric, index) => (
            <div key={index} className="text-center group">
              <div
                className={`w-20 h-20 bg-${metric.color}-600 rounded-2xl flex items-center justify-center 
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
