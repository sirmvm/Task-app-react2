import clsx from 'clsx'
import React from 'react'

interface Props {
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  fullwidth?: boolean
  onClick?: () => void
  variant?: keyof typeof VARIANTS_STYLES
}

// Creamos un objeto con los estilos de los botones
// En este caso, solid y outline
const VARIANTS_STYLES = {
  solid: 'bg-primary-500 hover:bg-primary-400',
  outline: 'border border-primary-500 hover:bg-primary-400 hover:text-white',
  text: 'bg-primary-500 bg-opacity-10 hover:bg-primary-300 hover:text-white'
}

export default function Button({
  children,
  type = 'button',
  fullwidth = false,
  onClick,
  variant = 'solid'
}: Props) {
  return (
    <button
    // Si fullwidth es true, entonces se agrega la clase block y w-full
    // clsx es una librería que permite concatenar clases de tailwind
      className={clsx(
        // Si variant es solid, entonces se agrega la clase bg-primary-500 hover:bg-primary-400
        VARIANTS_STYLES[variant] || VARIANTS_STYLES.solid,
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
