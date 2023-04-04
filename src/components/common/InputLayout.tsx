import React from 'react'

interface Props {
  children: React.ReactNode
  name: string
  label?: string
}

export default function InputLayout({ children, name, label }: Props) {
  return (
    // Si viene un label recien mostrar
    <div>
      {label && (
      <label htmlFor={name} className="block mb-1 text-sm">
        {label}
      </label>
      )}
      {children}
    </div>
  )
}
