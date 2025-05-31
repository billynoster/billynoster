import React from "react"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Ellipsis, Pencil, Plus, Settings, Trash2, ChevronRight, PlusCircle } from "lucide-react"

const data = [
  {
    name: "South Florida Group",
    status: "In Process",
    location: "Miami, FL",
    users: 5,
    storeUrl: "blazepizza117",
    notes: "View Note",
  },
  {
    name: "Orlando Metro",
    status: "Done",
    location: "Orlando, FL",
    users: 8,
    storeUrl: "blazepizza118",
    notes: "View Note",
  },
  {
    name: "Tampa Bay Collective",
    status: "Done",
    location: "Tampa, FL",
    users: 3,
    storeUrl: "blazepizza119",
    notes: "View Note",
  },
  {
    name: "Jacksonville District",
    status: "Done",
    location: "Jacksonville, FL",
    users: 7,
    storeUrl: "blazepizza120",
    notes: "View Note",
  },
  {
    name: "Miami Beach Locations",
    status: "In Process",
    location: "Miami, FL",
    users: 2,
    storeUrl: "blazepizza121",
    notes: "View Note",
  },
  {
    name: "Orlando Suburbs",
    status: "In Process",
    location: "Orlando, FL",
    users: 4,
    storeUrl: "blazepizza122",
    notes: "View Note",
  },
  {
    name: "Tampa Downtown",
    status: "In Process",
    location: "Tampa, FL",
    users: 6,
    storeUrl: "blazepizza123",
    notes: "View Note",
  },
  {
    name: "Jacksonville North",
    status: "Done",
    location: "Jacksonville, FL",
    users: 1,
    storeUrl: "blazepizza124",
    notes: "View Note",
  },
  {
    name: "Miami Central",
    status: "In Process",
    location: "Miami, FL",
    users: 2,
    storeUrl: "blazepizza125",
    notes: "View Note",
  },
  {
    name: "Orlando East",
    status: "Done",
    location: "Orlando, FL",
    users: 3,
    storeUrl: "blazepizza126",
    notes: "View Note",
  },
]

export default function DataTableSection() {
  return (
    <div className="bg-white border border-stone-200 rounded-lg overflow-x-auto">
      <table className="min-w-full text-sm">
        <thead>
          <tr className="bg-stone-50 text-stone-700">
            <th className="px-4 py-3 text-left font-semibold">Name</th>
            <th className="px-4 py-3 text-left font-semibold">Status</th>
            <th className="px-4 py-3 text-left font-semibold">Location</th>
            <th className="px-4 py-3 text-left font-semibold">Users</th>
            <th className="px-4 py-3 text-left font-semibold">Store URL</th>
            <th className="px-4 py-3 text-left font-semibold">Notes</th>
            <th className="px-4 py-3 text-left font-semibold">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-stone-100">
          {data.map((row, i) => (
            <tr key={i} className="hover:bg-stone-50 transition-colors">
              <td className="px-4 py-3 whitespace-nowrap">{row.name}</td>
              <td className="px-4 py-3">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${row.status === 'Done' ? 'bg-green-100 text-green-700' : 'bg-stone-200 text-stone-700'}`}>{row.status}</span>
              </td>
              <td className="px-4 py-3">{row.location}</td>
              <td className="px-4 py-3">{row.users}</td>
              <td className="px-4 py-3"><a href="#" className="text-blue-600 hover:underline flex items-center gap-1">{row.storeUrl} <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></a></td>
              <td className="px-4 py-3"><a href="#" className="text-blue-600 hover:underline">{row.notes}</a></td>
              <td className="px-4 py-3 text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="text-stone-400 hover:text-stone-900 p-1 rounded transition-colors">⋮</button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <PlusCircle className="w-4 h-4 text-blue-500 mr-2" />
                      <span className="text-blue-600 font-medium">Expand group</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Pencil className="w-4 h-4 text-stone-500 mr-2" />
                      Edit group
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Plus className="w-4 h-4 text-stone-500 mr-2" />
                      Add a new group
                      <ChevronRight className="w-4 h-4 ml-auto text-stone-400" />
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="w-4 h-4 text-stone-500 mr-2" />
                      Manage
                      <ChevronRight className="w-4 h-4 ml-auto text-stone-400" />
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Trash2 className="w-4 h-4 text-stone-500 mr-2" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center justify-between px-4 py-3 border-t border-stone-100 bg-stone-50 text-xs text-stone-500">
        <div>0 of 68 row(s) selected.</div>
        <div className="flex items-center gap-2">
          <span>Rows per page</span>
          <select className="border border-stone-200 rounded px-2 py-1 bg-white">
            <option>10</option>
            <option>20</option>
            <option>50</option>
          </select>
          <span>Page 1 of 7</span>
          <button className="w-6 h-6 flex items-center justify-center rounded hover:bg-stone-200">&lt;</button>
          <button className="w-6 h-6 flex items-center justify-center rounded hover:bg-stone-200">&gt;</button>
        </div>
      </div>
    </div>
  )
} 