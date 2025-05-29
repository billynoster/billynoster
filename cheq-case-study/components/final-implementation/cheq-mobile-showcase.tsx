"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, Star, Clock, MapPin, Plus, Minus, Check, ShoppingCart, QrCode, ChevronRight } from "lucide-react"

export function CheqMobileShowcase() {
  const [activeStep, setActiveStep] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const steps = [
    { id: "discovery", title: "Enhanced Discovery", description: "Improved home screen with better visual hierarchy" },
    { id: "restaurant", title: "Restaurant Experience", description: "Streamlined menu browsing with clear pricing" },
    { id: "cart", title: "Smart Cart Management", description: "Intuitive cart with split bill functionality" },
    { id: "split", title: "Split Bill Feature", description: "Advanced bill splitting with multiple options" },
    { id: "checkout", title: "Streamlined Checkout", description: "Clean checkout with payment and delivery details" },
    { id: "qr", title: "QR Code Scanning", description: "Enhanced scanning with visual feedback" },
    { id: "tracking", title: "Order Tracking", description: "Real-time progress with clear status updates" },
  ]

  const nextStep = () => {
    if (activeStep < steps.length - 1) {
      setIsAnimating(true)
      setTimeout(() => {
        setActiveStep(activeStep + 1)
        setIsAnimating(false)
      }, 300)
    }
  }

  const prevStep = () => {
    if (activeStep > 0) {
      setIsAnimating(true)
      setTimeout(() => {
        setActiveStep(activeStep - 1)
        setIsAnimating(false)
      }, 300)
    }
  }

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl">
      <div className="max-w-6xl mx-auto">
        {/* Step Description */}
        <div className="text-center mt-8">
          <h4 className="text-lg font-semibold text-slate-800 mb-2">{steps[activeStep].title}</h4>
          <p className="text-slate-600">{steps[activeStep].description}</p>
        </div>

        {/* Key Improvements */}
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {getStepImprovements(activeStep).map((improvement, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <h5 className="font-semibold text-slate-800 text-sm">{improvement.title}</h5>
              </div>
              <p className="text-xs text-slate-600">{improvement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function getStepImprovements(step: number) {
  const improvements = [
    [
      { title: "Visual Hierarchy", description: "Clear location display and promotional content prioritization" },
      { title: "Quick Actions", description: "Prominent QR scanner and cart access in header" },
      { title: "Smart Filters", description: "Contextual delivery time and rating filters" },
    ],
    [
      { title: "Brand Integration", description: "Restaurant branding with high-quality imagery" },
      { title: "Clear Pricing", description: "Transparent pricing with delivery time estimates" },
      { title: "Easy Ordering", description: "One-tap add to cart with quantity controls" },
    ],
    [
      { title: "Smart Cart", description: "Visual quantity controls with real-time pricing" },
      { title: "Split Bill", description: "Prominent split bill option for group orders" },
      { title: "Price Transparency", description: "Clear breakdown of all fees and taxes" },
    ],
    [
      { title: "Flexible Splitting", description: "Multiple split options: equal, by item, or percentage" },
      { title: "User Management", description: "Easy addition and removal of people in the split" },
      { title: "Real-time Calculation", description: "Instant updates showing each person's share" },
    ],
    [
      { title: "Address Verification", description: "Clear delivery address display with edit options" },
      { title: "Payment Security", description: "Secure payment method display with easy changes" },
      { title: "Order Transparency", description: "Complete cost breakdown before final payment" },
    ],
    [
      { title: "Enhanced Scanning", description: "Visual feedback with corner brackets and animations" },
      { title: "Success States", description: "Clear confirmation when QR code is detected" },
      { title: "Error Prevention", description: "Guided scanning with helpful instructions" },
    ],
    [
      { title: "Real-time Updates", description: "Live progress tracking with estimated times" },
      { title: "Clear Communication", description: "Descriptive status messages for each step" },
      { title: "Order Details", description: "Complete order summary with item breakdown" },
    ],
  ]

  return improvements[step] || []
}
