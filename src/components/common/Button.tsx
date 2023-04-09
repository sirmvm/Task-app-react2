import clsx from 'clsx'
import React from 'react'

interface Props {
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  fullwidth?: boolean
  onClick?: () => void
}

export default function Button({
  children,
  type = 'button',
  fullwidth = false,
  onClick
}: Props) {
  return (
    <button
    // Si fullwidth es true, entonces se agrega la clase block y w-full
    // clsx es una librería que permite concatenar clases de tailwind
      className={clsx(
        'bg-primary-500 hover:bg-primary-400',
        'trasition text-white py-2 px-4 rounded',
        fullwidth && 'block w-full'
      )}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
