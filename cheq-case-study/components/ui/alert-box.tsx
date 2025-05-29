import type React from "react"
import { cn } from "@/lib/utils"

interface AlertBoxProps {
  title: string
  children: React.ReactNode
  variant: "red" | "amber" | "green" | "blue"
  className?: string
}

export const AlertBox: React.FC<AlertBoxProps> = ({ title, children, variant, className }) => {
  const variantStyles = {
    red: "bg-red-50 border-red-400 text-red-800",
    amber: "bg-amber-50 border-amber-500 text-amber-800",
    green: "bg-green-50 border-green-500 text-green-800",
    blue: "bg-blue-50 border-blue-400 text-blue-800",
  }

  const textStyles = {
    red: "text-red-700",
    amber: "text-amber-700",
    green: "text-green-700",
    blue: "text-blue-700",
  }

  return (
    <div className={cn(`border-l-4 p-8 rounded-r-xl mb-8 ${variantStyles[variant]}`, className)}>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className={textStyles[variant]}>{children}</div>
    </div>
  )
}
