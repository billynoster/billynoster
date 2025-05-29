import { Plus, User, Building, X } from "lucide-react"

// Low-Fidelity Create Location Form
export function LowFidelityCreateLocation() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h4 className="text-lg font-semibold text-stone-700 mb-2">Low-Fidelity Wireframe</h4>
        <p className="text-sm text-stone-600">Focus: Content structure and layout hierarchy</p>
      </div>

      {/* Wireframe Container */}
      <div className="border-2 border-dashed border-gray-400 bg-gray-50 p-8 rounded-lg max-w-4xl mx-auto">
        {/* Header Wireframe */}
        <div className="border border-gray-400 p-4 mb-6 bg-white">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 border border-gray-400 rounded"></div>
              <div>
                <div className="w-24 h-4 bg-gray-300 mb-1"></div>
                <div className="w-20 h-3 bg-gray-300"></div>
              </div>
            </div>
            <div className="w-4 h-4 bg-gray-300"></div>
          </div>
        </div>

        {/* Form Wireframe */}
        <div className="border border-gray-400 p-6 bg-white">
          {/* Title */}
          <div className="mb-6">
            <div className="w-40 h-6 bg-gray-300 mb-2"></div>
            <div className="w-64 h-3 bg-gray-300"></div>
          </div>

          {/* First Row - 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="space-y-2">
              <div className="w-24 h-3 bg-gray-300"></div>
              <div className="w-full h-8 border border-gray-400"></div>
            </div>
            <div className="space-y-2">
              <div className="w-16 h-3 bg-gray-300"></div>
              <div className="w-full h-8 border border-gray-400"></div>
            </div>
            <div className="space-y-2">
              <div className="w-28 h-3 bg-gray-300"></div>
              <div className="w-full h-8 border border-gray-400"></div>
            </div>
          </div>

          {/* Second Row - 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="space-y-2">
              <div className="w-20 h-3 bg-gray-300"></div>
              <div className="w-full h-8 border border-gray-400"></div>
            </div>
            <div className="space-y-2">
              <div className="w-24 h-3 bg-gray-300"></div>
              <div className="w-full h-8 border border-gray-400"></div>
            </div>
            <div className="space-y-2">
              <div className="w-32 h-3 bg-gray-300"></div>
              <div className="w-full h-8 border border-gray-400"></div>
            </div>
          </div>

          {/* Third Row - 2 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="space-y-2">
              <div className="w-16 h-3 bg-gray-300"></div>
              <div className="w-full h-8 border border-gray-400"></div>
            </div>
            <div className="space-y-2">
              <div className="w-28 h-3 bg-gray-300"></div>
              <div className="flex gap-4 pt-2">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border border-gray-400 rounded-full"></div>
                  <div className="w-8 h-3 bg-gray-300"></div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border border-gray-400 rounded-full"></div>
                  <div className="w-6 h-3 bg-gray-300"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3">
            <div className="w-16 h-8 border border-gray-400"></div>
            <div className="w-20 h-8 bg-gray-300"></div>
          </div>
        </div>
      </div>

      {/* Design Notes */}
      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 max-w-4xl mx-auto">
        <h5 className="font-semibold text-blue-800 mb-2">Low-Fidelity Rationale</h5>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• Focused on layout structure using basic shapes and boxes</li>
          <li>• Established responsive grid system (3-col → 2-col → buttons)</li>
          <li>• Used grayscale placeholders to emphasize content hierarchy</li>
          <li>• Minimal styling to concentrate on information architecture</li>
        </ul>
      </div>
    </div>
  )
}

// Medium-Fidelity Create Location Form
export function MediumFidelityCreateLocation() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h4 className="text-lg font-semibold text-stone-700 mb-2">Medium-Fidelity Prototype</h4>
        <p className="text-sm text-stone-600">Focus: Visual styling and interactive elements</p>
      </div>

      {/* Prototype Container */}
      <div className="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-stone-50 border-b border-stone-200 p-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <User className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-stone-800">Jonathan Stacks</h3>
                <p className="text-xs text-stone-500">District Manager</p>
              </div>
            </div>
            <X className="w-5 h-5 text-stone-400 cursor-pointer hover:text-stone-600" />
          </div>
        </div>

        {/* Form Content */}
        <div className="p-6">
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-stone-800 mb-2">Create New Location</h4>
            <p className="text-sm text-stone-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          {/* Form Fields - First Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-stone-700">Select Parent Group</label>
              <div className="relative">
                <select className="w-full pl-3 pr-12 py-2 border border-stone-300 rounded-lg bg-white text-stone-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>MRG PIZZA, NV</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">M</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-stone-700">Store URL</label>
              <input
                type="text"
                value="grouplink.tv"
                className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-blue-600"
                readOnly
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-stone-700">Location Manager</label>
              <input
                type="text"
                value="Christine Applegate"
                className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                readOnly
              />
            </div>
          </div>

          {/* Form Fields - Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-stone-700">Display Label</label>
              <input
                type="text"
                value="Lorem Ipsum"
                className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                readOnly
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-stone-700">Location Address</label>
              <input
                type="text"
                value="217 & Thomas Ave"
                className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                readOnly
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-stone-700">Customer Reply Email</label>
              <input
                type="email"
                value="support@blazepizza.com"
                className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-blue-600"
                readOnly
              />
            </div>
          </div>

          {/* Form Fields - Third Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-stone-700">Store ID</label>
              <input
                type="text"
                value="117"
                className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                readOnly
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-stone-700">Franchise location</label>
              <div className="flex gap-4 pt-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="franchise" className="text-blue-600 focus:ring-blue-500" defaultChecked />
                  <span className="text-sm text-stone-700">Yes</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="franchise" className="text-blue-600 focus:ring-blue-500" />
                  <span className="text-sm text-stone-700">No</span>
                </label>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3 pt-4">
            <button className="px-4 py-2 text-stone-600 border border-stone-300 rounded-lg hover:bg-stone-50 transition-colors">
              Clear
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Create
            </button>
          </div>
        </div>
      </div>

      {/* Design Notes */}
      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400 max-w-4xl mx-auto">
        <h5 className="font-semibold text-green-800 mb-2">Medium-Fidelity Rationale</h5>
        <ul className="text-sm text-green-700 space-y-1">
          <li>• Added proper typography hierarchy and color scheme</li>
          <li>• Implemented interactive form elements with focus states</li>
          <li>• Introduced visual feedback through hover and focus effects</li>
          <li>• Added icons and visual indicators for better usability</li>
          <li>• Applied consistent spacing and border radius for modern feel</li>
        </ul>
      </div>
    </div>
  )
}

// High-Fidelity Create Location Form
export function HighFidelityCreateLocation() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h4 className="text-lg font-semibold text-stone-700 mb-2">High-Fidelity Implementation</h4>
        <p className="text-sm text-stone-600">Focus: Production-ready design with enhanced interactions</p>
      </div>

      {/* Final Implementation */}
      <div className="bg-white border border-stone-200 rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto">
        {/* Enhanced Header */}
        <div className="bg-gradient-to-r from-stone-50 to-stone-100 border-b border-stone-200 p-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-sm">
                <User className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-stone-800">Jonathan Stacks</h3>
                <p className="text-xs text-stone-500 flex items-center gap-1">
                  <Building className="w-3 h-3" />
                  District Manager
                </p>
              </div>
            </div>
            <button className="w-8 h-8 rounded-lg hover:bg-stone-200 flex items-center justify-center transition-colors">
              <X className="w-5 h-5 text-stone-400" />
            </button>
          </div>
        </div>

        {/* Enhanced Form Content */}
        <div className="p-6">
          <div className="mb-6">
            <h4 className="text-xl font-semibold text-stone-800 mb-2">Create New Location</h4>
            <p className="text-sm text-stone-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          {/* Enhanced Form Fields - First Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-stone-700">Select Parent Group</label>
              <div className="relative">
                <select className="w-full pl-4 pr-16 py-3 border border-stone-300 rounded-xl bg-white text-stone-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-all">
                  <option>MRG PIZZA, NV</option>
                </select>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center shadow-sm">
                    <span className="text-white text-xs font-bold">M</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-stone-700">Store URL</label>
              <input
                type="text"
                value="grouplink.tv"
                className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-blue-600 shadow-sm transition-all"
                readOnly
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-stone-700">Location Manager</label>
              <input
                type="text"
                value="Christine Applegate"
                className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-all"
                readOnly
              />
            </div>
          </div>

          {/* Enhanced Action Buttons */}
          <div className="flex justify-end gap-3 pt-6">
            <button className="px-6 py-3 text-stone-600 border border-stone-300 rounded-xl hover:bg-stone-50 hover:scale-105 transition-all duration-200 shadow-sm">
              Clear
            </button>
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 hover:scale-105 transition-all duration-200 flex items-center gap-2 shadow-md">
              <Plus className="w-4 h-4" />
              Create
            </button>
          </div>
        </div>
      </div>

      {/* Design Notes */}
      <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400 max-w-4xl mx-auto">
        <h5 className="font-semibold text-purple-800 mb-2">High-Fidelity Rationale</h5>
        <ul className="text-sm text-purple-700 space-y-1">
          <li>• Enhanced visual polish with gradients and shadows</li>
          <li>• Added scale transforms and smooth transitions</li>
          <li>• Implemented enhanced spacing and typography</li>
          <li>• Added production-ready interaction states</li>
          <li>• Refined accessibility and visual hierarchy</li>
        </ul>
      </div>
    </div>
  )
}
