// Low-Fidelity Mobile Wireframe
export function LowFidelityMobileWireframe() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h4 className="text-lg font-semibold text-slate-700 mb-2">Low-Fidelity Mobile Wireframes</h4>
        <p className="text-sm text-slate-600">Focus: Core user flow and layout structure</p>
      </div>

      <div className="flex justify-center gap-8 overflow-x-auto pb-4">
        {/* QR Scan Screen */}
        <div className="flex-shrink-0">
          <div className="w-64 h-96 border-2 border-dashed border-gray-400 bg-gray-50 rounded-2xl p-4 relative">
            <div className="text-center mb-4">
              <div className="w-8 h-3 bg-gray-300 mx-auto mb-2 rounded"></div>
              <div className="w-16 h-3 bg-gray-300 mx-auto rounded"></div>
            </div>

            {/* QR Scanner Area */}
            <div className="w-full h-32 border-2 border-gray-400 border-dashed rounded-lg mb-4 flex items-center justify-center">
              <div className="w-16 h-16 border-2 border-gray-400 rounded"></div>
            </div>

            {/* Instructions */}
            <div className="space-y-2 mb-6">
              <div className="w-full h-3 bg-gray-300 rounded"></div>
              <div className="w-3/4 h-3 bg-gray-300 rounded"></div>
            </div>

            {/* Manual Entry Button */}
            <div className="w-full h-10 border border-gray-400 rounded mb-4"></div>

            {/* Bottom Navigation */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex justify-between">
                <div className="w-8 h-8 bg-gray-300 rounded"></div>
                <div className="w-8 h-8 bg-gray-300 rounded"></div>
                <div className="w-8 h-8 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
          <p className="text-xs text-center mt-2 text-gray-600">QR Scan Screen</p>
        </div>

        {/* Menu Browse Screen */}
        <div className="flex-shrink-0">
          <div className="w-64 h-96 border-2 border-dashed border-gray-400 bg-gray-50 rounded-2xl p-4 relative">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <div className="w-6 h-6 bg-gray-300 rounded"></div>
              <div className="w-20 h-4 bg-gray-300 rounded"></div>
              <div className="w-6 h-6 bg-gray-300 rounded"></div>
            </div>

            {/* Restaurant Info */}
            <div className="mb-4">
              <div className="w-full h-6 bg-gray-300 rounded mb-2"></div>
              <div className="w-2/3 h-3 bg-gray-300 rounded"></div>
            </div>

            {/* Menu Items */}
            <div className="space-y-3 mb-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="flex gap-3">
                  <div className="w-12 h-12 bg-gray-300 rounded"></div>
                  <div className="flex-1">
                    <div className="w-full h-3 bg-gray-300 rounded mb-1"></div>
                    <div className="w-3/4 h-3 bg-gray-300 rounded mb-1"></div>
                    <div className="w-1/4 h-3 bg-gray-300 rounded"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Button */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="w-full h-12 bg-gray-300 rounded"></div>
            </div>
          </div>
          <p className="text-xs text-center mt-2 text-gray-600">Menu Browse</p>
        </div>

        {/* Cart/Checkout Screen */}
        <div className="flex-shrink-0">
          <div className="w-64 h-96 border-2 border-dashed border-gray-400 bg-gray-50 rounded-2xl p-4 relative">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <div className="w-6 h-6 bg-gray-300 rounded"></div>
              <div className="w-16 h-4 bg-gray-300 rounded"></div>
              <div className="w-6 h-6 bg-gray-300 rounded"></div>
            </div>

            {/* Cart Items */}
            <div className="space-y-3 mb-4">
              {[1, 2].map((item) => (
                <div key={item} className="border border-gray-400 rounded p-2">
                  <div className="flex justify-between mb-2">
                    <div className="w-2/3 h-3 bg-gray-300 rounded"></div>
                    <div className="w-8 h-3 bg-gray-300 rounded"></div>
                  </div>
                  <div className="flex justify-between">
                    <div className="w-1/3 h-3 bg-gray-300 rounded"></div>
                    <div className="flex gap-2">
                      <div className="w-6 h-6 border border-gray-400 rounded"></div>
                      <div className="w-6 h-6 border border-gray-400 rounded"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Split Bill Option */}
            <div className="border border-gray-400 rounded p-3 mb-4">
              <div className="w-1/2 h-3 bg-gray-300 rounded mb-2"></div>
              <div className="flex gap-2">
                <div className="w-4 h-4 border border-gray-400 rounded-full"></div>
                <div className="w-4 h-4 border border-gray-400 rounded-full"></div>
              </div>
            </div>

            {/* Checkout Button */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="w-full h-12 bg-gray-300 rounded"></div>
            </div>
          </div>
          <p className="text-xs text-center mt-2 text-gray-600">Cart & Checkout</p>
        </div>
      </div>

      {/* Design Notes */}
      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 max-w-4xl mx-auto">
        <h5 className="font-semibold text-blue-800 mb-2">Low-Fidelity Rationale</h5>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• Focused on core user flow: QR scan → Menu browse → Cart management</li>
          <li>• Used basic shapes to establish layout hierarchy and screen structure</li>
          <li>• Emphasized functional elements without visual styling distractions</li>
          <li>• Validated information architecture and user journey flow</li>
        </ul>
      </div>
    </div>
  )
}

// Medium-Fidelity Mobile Wireframe
export function MediumFidelityMobileWireframe() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h4 className="text-lg font-semibold text-slate-700 mb-2">Medium-Fidelity Mobile Wireframes</h4>
        <p className="text-sm text-slate-600">Focus: Visual styling and interactive elements</p>
      </div>

      <div className="flex justify-center gap-8 overflow-x-auto pb-4">
        {/* QR Scan Screen */}
        <div className="flex-shrink-0">
          <div className="w-64 h-96 bg-white border border-slate-300 rounded-2xl shadow-lg overflow-hidden">
            {/* Status Bar */}
            <div className="bg-slate-100 h-6 flex items-center justify-between px-4 text-xs">
              <span>9:41</span>
              <div className="flex gap-1">
                <div className="w-4 h-2 bg-slate-400 rounded-sm"></div>
                <div className="w-4 h-2 bg-slate-400 rounded-sm"></div>
                <div className="w-4 h-2 bg-slate-400 rounded-sm"></div>
              </div>
            </div>

            {/* Header */}
            <div className="p-4 bg-blue-600 text-white">
              <div className="flex items-center justify-between">
                <div className="w-6 h-6 bg-white/20 rounded"></div>
                <h3 className="font-semibold">CHEQ</h3>
                <div className="w-6 h-6 bg-white/20 rounded"></div>
              </div>
            </div>

            <div className="p-4">
              <div className="text-center mb-6">
                <h4 className="font-semibold text-slate-800 mb-2">Scan QR Code</h4>
                <p className="text-sm text-slate-600">Point your camera at the QR code</p>
              </div>

              {/* QR Scanner Area */}
              <div className="relative w-full h-32 bg-slate-100 border-2 border-blue-300 border-dashed rounded-lg mb-6 flex items-center justify-center">
                <div className="w-16 h-16 border-2 border-blue-500 rounded-lg flex items-center justify-center">
                  <div className="w-8 h-8 bg-blue-500 rounded"></div>
                </div>
                {/* Corner brackets */}
                <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-blue-500"></div>
                <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-blue-500"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-blue-500"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-blue-500"></div>
              </div>

              {/* Manual Entry Button */}
              <button className="w-full py-3 border border-blue-500 text-blue-600 rounded-lg font-medium mb-4">
                Enter Code Manually
              </button>

              {/* Help Text */}
              <p className="text-xs text-slate-500 text-center">Can't find a QR code? Ask your server for assistance</p>
            </div>
          </div>
          <p className="text-xs text-center mt-2 text-slate-600">QR Scan Screen</p>
        </div>

        {/* Menu Browse Screen */}
        <div className="flex-shrink-0">
          <div className="w-64 h-96 bg-white border border-slate-300 rounded-2xl shadow-lg overflow-hidden">
            {/* Status Bar */}
            <div className="bg-slate-100 h-6 flex items-center justify-between px-4 text-xs">
              <span>9:41</span>
              <div className="flex gap-1">
                <div className="w-4 h-2 bg-slate-400 rounded-sm"></div>
                <div className="w-4 h-2 bg-slate-400 rounded-sm"></div>
                <div className="w-4 h-2 bg-slate-400 rounded-sm"></div>
              </div>
            </div>

            {/* Header */}
            <div className="p-4 bg-white border-b border-slate-200">
              <div className="flex items-center justify-between">
                <div className="w-6 h-6 bg-slate-300 rounded"></div>
                <h3 className="font-semibold text-slate-800">Ben's Pizza</h3>
                <div className="w-6 h-6 bg-slate-300 rounded"></div>
              </div>
            </div>

            <div className="p-4">
              {/* Restaurant Info */}
              <div className="mb-4 text-center">
                <h4 className="font-semibold text-slate-800">Ben's Pizza</h4>
                <p className="text-sm text-slate-600">Table 12 • Order #1234</p>
              </div>

              {/* Menu Items */}
              <div className="space-y-3">
                {[
                  { name: "Margherita Pizza", price: "$18.99", desc: "Fresh mozzarella, basil" },
                  { name: "Caesar Salad", price: "$12.99", desc: "Romaine, parmesan, croutons" },
                  { name: "Garlic Bread", price: "$8.99", desc: "Homemade with herbs" },
                ].map((item, index) => (
                  <div key={index} className="flex gap-3 p-2 border border-slate-200 rounded-lg">
                    <div className="w-12 h-12 bg-orange-200 rounded-lg"></div>
                    <div className="flex-1">
                      <h5 className="font-medium text-slate-800 text-sm">{item.name}</h5>
                      <p className="text-xs text-slate-600">{item.desc}</p>
                      <p className="text-sm font-semibold text-green-600">{item.price}</p>
                    </div>
                    <button className="w-8 h-8 bg-blue-500 text-white rounded-full text-sm">+</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="text-xs text-center mt-2 text-slate-600">Menu Browse</p>
        </div>

        {/* Cart/Checkout Screen */}
        <div className="flex-shrink-0">
          <div className="w-64 h-96 bg-white border border-slate-300 rounded-2xl shadow-lg overflow-hidden">
            {/* Status Bar */}
            <div className="bg-slate-100 h-6 flex items-center justify-between px-4 text-xs">
              <span>9:41</span>
              <div className="flex gap-1">
                <div className="w-4 h-2 bg-slate-400 rounded-sm"></div>
                <div className="w-4 h-2 bg-slate-400 rounded-sm"></div>
                <div className="w-4 h-2 bg-slate-400 rounded-sm"></div>
              </div>
            </div>

            {/* Header */}
            <div className="p-4 bg-white border-b border-slate-200">
              <div className="flex items-center justify-between">
                <div className="w-6 h-6 bg-slate-300 rounded"></div>
                <h3 className="font-semibold text-slate-800">Your Order</h3>
                <div className="w-6 h-6 bg-slate-300 rounded"></div>
              </div>
            </div>

            <div className="p-4">
              {/* Cart Items */}
              <div className="space-y-3 mb-4">
                {[
                  { name: "Margherita Pizza", price: "$18.99", qty: 1 },
                  { name: "Caesar Salad", price: "$12.99", qty: 1 },
                ].map((item, index) => (
                  <div key={index} className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-medium text-slate-800 text-sm">{item.name}</h5>
                      <span className="text-sm font-semibold text-slate-800">{item.price}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-slate-600">Qty: {item.qty}</span>
                      <div className="flex gap-2">
                        <button className="w-6 h-6 bg-slate-300 rounded text-xs">-</button>
                        <button className="w-6 h-6 bg-slate-300 rounded text-xs">+</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Split Bill Option */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                <h5 className="font-medium text-slate-800 text-sm mb-2">Payment Options</h5>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="payment" className="text-blue-600" defaultChecked />
                    <span className="text-sm">Pay Solo</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="payment" className="text-blue-600" />
                    <span className="text-sm">Split Bill</span>
                  </label>
                </div>
              </div>

              {/* Total */}
              <div className="border-t border-slate-200 pt-3">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-slate-800">Total:</span>
                  <span className="font-bold text-lg text-slate-800">$31.98</span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-xs text-center mt-2 text-slate-600">Cart & Checkout</p>
        </div>
      </div>

      {/* Design Notes */}
      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400 max-w-4xl mx-auto">
        <h5 className="font-semibold text-green-800 mb-2">Medium-Fidelity Rationale</h5>
        <ul className="text-sm text-green-700 space-y-1">
          <li>• Added proper typography hierarchy and color scheme</li>
          <li>• Implemented realistic content and interactive form elements</li>
          <li>• Introduced visual feedback through buttons and status indicators</li>
          <li>• Applied consistent spacing and modern mobile UI patterns</li>
          <li>• Added realistic data to validate user experience flow</li>
        </ul>
      </div>
    </div>
  )
}
