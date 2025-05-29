import { Users, MapPin, Mail, Palette, Calendar, Settings } from "lucide-react"

export function LegacyTattleInterface() {
  return (
    <div className="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden">
      <div className="flex">
        {/* Left Sidebar */}
        <div className="w-48 bg-stone-100 border-r border-stone-200 min-h-[600px]">
          <div className="p-4">
            <h2 className="text-lg font-semibold text-stone-800 mb-4">Account Setup</h2>
            <p className="text-sm text-stone-600 mb-6">Invite your team, add your locations, create your groups.</p>

            <nav className="space-y-1">
              <div className="flex items-center gap-2 px-3 py-2 text-sm text-stone-600 hover:bg-stone-200 rounded">
                <Users className="w-4 h-4" />
                <span>Management Team</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 text-sm text-stone-600 hover:bg-stone-200 rounded">
                <MapPin className="w-4 h-4" />
                <span>Locations</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 text-sm text-white bg-stone-700 rounded">
                <Users className="w-4 h-4" />
                <span>Groups</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 text-sm text-stone-600 hover:bg-stone-200 rounded">
                <Mail className="w-4 h-4" />
                <span>Email Templates</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 text-sm text-stone-600 hover:bg-stone-200 rounded">
                <Palette className="w-4 h-4" />
                <span>Branding</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 text-sm text-stone-600 hover:bg-stone-200 rounded">
                <Settings className="w-4 h-4" />
                <span>Default Links</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 text-sm text-stone-600 hover:bg-stone-200 rounded">
                <Calendar className="w-4 h-4" />
                <span>Day Parts</span>
              </div>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Header Section */}
          <div className="p-6 border-b border-stone-200">
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-5 h-5 text-stone-600" />
                  <h3 className="text-lg font-semibold text-stone-800">Manage Groups</h3>
                  <div className="w-4 h-4 rounded-full bg-stone-300 flex items-center justify-center">
                    <span className="text-xs text-stone-600">?</span>
                  </div>
                </div>
                <p className="text-sm text-stone-600">
                  Manage your groups of stores and users with access to each group.
                </p>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 flex items-center gap-2">
                <span>+</span>
                New Group
              </button>
            </div>

            <div className="flex justify-end">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Name, Description"
                  className="pl-3 pr-10 py-2 border border-stone-300 rounded text-sm w-64"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-stone-600 text-white px-3 py-1 rounded text-xs">
                  Search
                </button>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="p-6">
            <div className="bg-white border border-stone-200 rounded overflow-hidden">
              {/* Table Header */}
              <div className="bg-stone-50 border-b border-stone-200">
                <div className="grid grid-cols-5 gap-4 px-4 py-3 text-sm font-medium text-stone-700">
                  <div>Group Name</div>
                  <div>Description</div>
                  <div>Assigned Locations</div>
                  <div>Assigned Users</div>
                  <div>ACTIONS</div>
                </div>
              </div>

              {/* Table Rows */}
              <div className="divide-y divide-stone-200">
                {[
                  {
                    name: "Ampal Pizza, MD",
                    color: "bg-red-500",
                    locations: "2 Locations Selected",
                    users: "6 Users Selected",
                  },
                  {
                    name: "Ampal Pizza, NJ",
                    color: "bg-teal-500",
                    locations: "8 Locations Selected",
                    users: "5 Users Selected",
                  },
                  {
                    name: "Ampal Pizza, PA",
                    color: "bg-red-500",
                    locations: "2 Locations Selected",
                    users: "5 Users Selected",
                  },
                  {
                    name: "AP Franchise Group, LLC",
                    color: "bg-stone-500",
                    locations: "2 Locations Selected",
                    users: "4 Users Selected",
                  },
                  {
                    name: "AZEkta, Inc",
                    color: "bg-red-500",
                    locations: "5 Locations Selected",
                    users: "5 Users Selected",
                  },
                  {
                    name: "Betty Prieto",
                    color: "bg-purple-500",
                    locations: "46 Locations Selected",
                    users: "No Users Selected",
                    description: "FRMDS - West",
                  },
                  {
                    name: "BGR Hospitality, LLC",
                    color: "bg-stone-500",
                    locations: "7 Locations Selected",
                    users: "9 Users Selected",
                  },
                  {
                    name: "Big Husky",
                    color: "bg-teal-500",
                    locations: "1 Locations Selected",
                    users: "2 Users Selected",
                  },
                  {
                    name: "Blaze Company - Jeff",
                    color: "bg-teal-500",
                    locations: "7 Locations Selected",
                    users: "1 Users Selected",
                  },
                  {
                    name: "Blaze Company Restaurants",
                    color: "bg-stone-500",
                    locations: "12 Locations Selected",
                    users: "1 Users Selected",
                    description: "Company Restaurants",
                  },
                ].map((group, index) => (
                  <div key={index} className="grid grid-cols-5 gap-4 px-4 py-3 items-center hover:bg-stone-50">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${group.color}`}></div>
                      <span className="text-sm text-stone-800">{group.name}</span>
                    </div>
                    <div className="text-sm text-stone-600">{group.description || ""}</div>
                    <div className="text-sm text-stone-600">{group.locations}</div>
                    <div className="text-sm text-stone-600">{group.users}</div>
                    <div>
                      <button className="text-blue-600 hover:text-blue-800 text-sm border border-stone-300 px-3 py-1 rounded">
                        Actions
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center mt-6 gap-2">
              <button className="px-3 py-1 text-sm text-stone-600 hover:text-stone-800">Previous</button>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((page) => (
                <button
                  key={page}
                  className={`w-8 h-8 text-sm rounded ${
                    page === 1 ? "bg-blue-600 text-white" : "text-stone-600 hover:bg-stone-100"
                  }`}
                >
                  {page}
                </button>
              ))}
              <button className="px-3 py-1 text-sm text-stone-600 hover:text-stone-800">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
