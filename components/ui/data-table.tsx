"use client"
import { cn } from "@/lib/utils"
import type { TableColumn } from "../../types/case-study"

interface DataTableProps<T> {
  data: T[]
  columns: TableColumn[]
  className?: string
  onRowAction?: (row: T, action: string) => void
}

export function DataTable<T>({ data, columns, className, onRowAction }: DataTableProps<T>) {
  return (
    <div className={cn("bg-white border border-stone-200 rounded-xl overflow-hidden shadow-lg", className)}>
      {/* Table Header */}
      <div className="bg-gradient-to-r from-stone-50 to-stone-100 border-b border-stone-200">
        <div
          className="grid gap-6 px-6 py-4 text-xs font-bold text-stone-600 uppercase tracking-wider"
          style={{ gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))` }}
        >
          {columns.map((column) => (
            <div key={column.id}>{column.header}</div>
          ))}
        </div>
      </div>

      {/* Table Rows */}
      <div className="divide-y divide-stone-100">
        {data.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="grid gap-6 px-6 py-4 items-center hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-200"
            style={{ gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))` }}
          >
            {columns.map((column) => (
              <div key={column.id}>
                {column.cell ? column.cell(row) : column.accessorKey ? (row as any)[column.accessorKey] : null}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
