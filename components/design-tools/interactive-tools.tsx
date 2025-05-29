"use client"

import { useState } from "react"
import { Palette, Type } from "lucide-react"

export function InteractiveDesignTools() {
  const [selectedFont, setSelectedFont] = useState("Inter")

  const colorPalette = [
    { name: "Primary Blue", value: "#3B82F6", usage: "Primary actions, links" },
    { name: "Success Green", value: "#10B981", usage: "Success states, confirmations" },
    { name: "Warning Orange", value: "#F59E0B", usage: "Warnings, attention" },
    { name: "Error Red", value: "#EF4444", usage: "Errors, destructive actions" },
    { name: "Neutral Gray", value: "#6B7280", usage: "Text, borders, backgrounds" },
    { name: "Stone", value: "#78716C", usage: "Secondary text, subtle elements" },
  ]

  const fontOptions = [
    { name: "Inter", category: "Sans-serif", usage: "UI Text, Body" },
    { name: "Roboto", category: "Sans-serif", usage: "Headers, Titles" },
    { name: "Source Code Pro", category: "Monospace", usage: "Code, Technical" },
    { name: "Playfair Display", category: "Serif", usage: "Headings, Emphasis" },
  ]

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-semibold text-stone-800 mb-2">Interactive Design Tools</h3>
        <p className="text-stone-600">Explore the design system and tools used in this project</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Color Palette Tool */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
          <div className="flex items-center gap-2 mb-4">
            <Palette className="w-5 h-5 text-blue-600" />
            <h4 className="text-lg font-semibold text-stone-800">Color Palette</h4>
          </div>

          <div className="space-y-3">
            {colorPalette.map((color, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-stone-50 cursor-pointer transition-colors"
              >
                <div
                  className="w-8 h-8 rounded-lg shadow-sm border border-stone-200"
                  style={{ backgroundColor: color.value }}
                ></div>
                <div className="flex-1">
                  <div className="font-medium text-stone-800 text-sm">{color.name}</div>
                  <div className="text-xs text-stone-500">{color.usage}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Typography Tool */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
          <div className="flex items-center gap-2 mb-4">
            <Type className="w-5 h-5 text-purple-600" />
            <h4 className="text-lg font-semibold text-stone-800">Typography System</h4>
          </div>

          <div className="space-y-3">
            {fontOptions.map((font, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg border cursor-pointer transition-all ${
                  selectedFont === font.name
                    ? "border-purple-300 bg-purple-50"
                    : "border-stone-200 hover:border-stone-300"
                }`}
                onClick={() => setSelectedFont(font.name)}
              >
                <div className="font-medium text-stone-800 text-sm" style={{ fontFamily: font.name }}>
                  {font.name}
                </div>
                <div className="text-xs text-stone-500">
                  {font.category} • {font.usage}
                </div>
                <div className="mt-2 text-lg" style={{ fontFamily: font.name }}>
                  The quick brown fox jumps
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 p-3 bg-stone-50 rounded-lg">
            <div className="text-sm font-medium text-stone-700 mb-2">Preview</div>
            <div style={{ fontFamily: selectedFont }}>
              <h5 className="text-xl font-bold text-stone-800 mb-1">Heading Example</h5>
              <p className="text-stone-600">This is how body text would appear using {selectedFont}.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
