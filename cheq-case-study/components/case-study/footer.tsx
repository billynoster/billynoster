import type React from "react"

interface FooterProps {
  author: string
  role: string
  project: string
  year: string
  domain: string
}

export const Footer: React.FC<FooterProps> = ({ author, role, project, year, domain }) => {
  return (
    <footer className="text-center py-8">
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-stone-800 mb-2">{author}</h3>
        <p className="text-stone-600">{role}</p>
      </div>
      <div className="flex justify-center items-center gap-4 text-sm text-stone-500">
        <span>{project}</span>
        <span aria-hidden="true">•</span>
        <span>{year}</span>
        <span aria-hidden="true">•</span>
        <span>{domain}</span>
      </div>
    </footer>
  )
}
