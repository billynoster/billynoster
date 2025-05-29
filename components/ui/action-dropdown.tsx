"use client"

import React, { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import type { ActionMenuItem } from "../../types/case-study"

interface ActionDropdownProps {
  items: ActionMenuItem[]
  className?: string
  children: React.ReactNode
}

export const ActionDropdown: React.FC<ActionDropdownProps> = ({ items, className, children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className={cn("relative", className)} ref={dropdownRef}>
      <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
        {children}
      </div>

      {isOpen && (
        <div
          className="absolute top-full left-0 mt-2 bg-white border border-stone-200 rounded-xl p-3 shadow-lg z-10 min-w-48"
          role="menu"
        >
          <div className="text-xs text-stone-600 space-y-1">
            {items.map((item, index) => (
              <button
                key={index}
                className="p-2 hover:bg-stone-50 hover:shadow-sm rounded-lg transition-all cursor-pointer w-full text-left flex items-center gap-2"
                onClick={() => {
                  if (item.action) item.action()
                  setIsOpen(false)
                }}
                role="menuitem"
              >
                {item.icon && React.createElement(item.icon, { className: "w-3 h-3" })}
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
