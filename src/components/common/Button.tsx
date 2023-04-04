import React from 'react'

interface Props {
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
}

export default function Button({ children, type = 'button' }: Props) {
  return (
    <button
      className="bg-teal-500 hover:bg-teal-400 trasition text-white py-2 px-4 rounded"
      type={type}
    >
      {children}
    </button>
  )
}
