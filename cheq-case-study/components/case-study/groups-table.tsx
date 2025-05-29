"use client"

import type React from "react"
import { useMemo } from "react"
import { DataTable } from "../ui/data-table"
import type { TableColumn } from "../../types/case-study"
import { ActionDropdown } from "../ui/action-dropdown"
import { ChevronDown, Edit3, Settings, Trash2 } from "lucide-react"

export const GroupsTable: React.FC = () => {
  const columns: TableColumn[] = useMemo(
    () => [
      {
        id: "status",
        header: "STATUS",
        cell: () => (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border border-green-200 shadow-sm">
            Active
          </span>
        ),
      },
      {
        id: "location",
        header: "LOCATION",
        cell: () => <span className="text-sm text-stone-900 font-semibold">6</span>,
      },
      {
        id: "users",
        header: "USERS",
        cell: () => <span className="text-sm text-stone-900 font-semibold">10</span>,
      },
      {
        id: "storeUrl",
        header: "STORE URL",
        cell: () => (
          <a
            href="#"
            className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-2 font-medium hover:underline transition-all"
            aria-label="Visit mrg.pizza.tv"
          >
            mrg.pizza.tv
            <span className="w-3 h-3 text-stone-400">🔗</span>
          </a>
        ),
      },
      {
        id: "notes",
        header: "NOTES",
        cell: () => (
          <a
            href="#"
            className="text-blue-600 hover:text-blue-800 text-sm font-medium hover:underline transition-all"
            aria-label="View notes"
          >
            View Note
          </a>
        ),
      },
      {
        id: "action",
        header: "ACTION",
        cell: () => {
          const actionItems = [
            { icon: Edit3, label: "Edit group", action: () => console.log("Edit group") },
            { icon: Settings, label: "Manage", action: () => console.log("Manage") },
            { icon: Trash2, label: "Delete", action: () => console.log("Delete") },
          ]

          return (
            <ActionDropdown items={actionItems}>
              <button
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg text-xs font-semibold hover:from-blue-700 hover:to-blue-800 shadow-md hover:shadow-lg transform hover:scale-105 transition-all flex items-center gap-2"
                aria-haspopup="true"
              >
                Actions
                <ChevronDown className="w-3 h-3" />
              </button>
            </ActionDropdown>
          )
        },
      },
    ],
    [],
  )

  // Generate mock data
  const data = useMemo(() => Array.from({ length: 7 }).map((_, i) => ({ id: i })), [])

  return (
    <div className="p-6">
      <DataTable data={data} columns={columns} />

      {/* Enhanced Pagination */}
      <div className="flex justify-between items-center mt-8">
        <div className="text-sm text-stone-500 font-medium">1 of 10 of 800 Results</div>
        <div className="flex items-center gap-2" role="navigation" aria-label="Pagination">
          <button
            className="w-10 h-10 rounded-lg border border-stone-300 flex items-center justify-center text-sm hover:bg-stone-50 text-stone-400 transition-all"
            aria-label="Previous page"
          >
            &lt;
          </button>
          <button
            className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white flex items-center justify-center text-sm font-semibold shadow-md"
            aria-label="Page 1"
            aria-current="page"
          >
            1
          </button>
          {[2, 3, 4, 5].map((page) => (
            <button
              key={page}
              className="w-10 h-10 rounded-lg border border-stone-300 flex items-center justify-center text-sm hover:bg-stone-50 text-stone-600 transition-all hover:scale-105"
              aria-label={`Page ${page}`}
            >
              {page}
            </button>
          ))}
          <span className="text-stone-400 px-2" aria-hidden="true">
            ...
          </span>
          <button
            className="w-10 h-10 rounded-lg border border-stone-300 flex items-center justify-center text-sm hover:bg-stone-50 text-stone-600 transition-all hover:scale-105"
            aria-label="Page 10"
          >
            10
          </button>
          <button
            className="w-10 h-10 rounded-lg border border-stone-300 flex items-center justify-center text-sm hover:bg-stone-50 text-stone-600 transition-all"
            aria-label="Next page"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  )
}
