import React from "react"

const stats = [
  {
    title: "Total Revenue",
    value: "$1,250.00",
    trend: "+12.5%",
    description: "Trending up this month",
  },
  {
    title: "New Customers",
    value: "1,234",
    trend: "-20%",
    description: "Down 20% this period",
  },
  {
    title: "Active Accounts",
    value: "45,678",
    trend: "+12.5%",
    description: "Strong user retention",
  },
  {
    title: "Growth Rate",
    value: "4.5%",
    trend: "+4.5%",
    description: "Steady performance increase",
  },
]

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat) => (
        <div key={stat.title} className="bg-white border border-stone-200 rounded-lg p-4 flex flex-col gap-1 shadow-sm">
          <div className="text-xs text-stone-500 font-medium mb-1">{stat.title}</div>
          <div className="text-2xl font-bold text-stone-900">{stat.value}</div>
          <div className="text-xs text-green-600 font-semibold">{stat.trend}</div>
          <div className="text-xs text-stone-500">{stat.description}</div>
        </div>
      ))}
    </div>
  )
} 