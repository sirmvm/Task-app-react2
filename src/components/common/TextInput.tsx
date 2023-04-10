import React from 'react'
import { UseFormRegister, FieldValues, Path } from 'react-hook-form'
import InputLayout from './InputLayout'

// <T> es un generic type que permite que el componente sea reutilizable
interface Props<T extends FieldValues> {
  name: Path<T>
  type?: HTMLInputElement['type']
  placeholder?: string
  register: UseFormRegister<T>
  label?: string
}

export default function TextInput<T extends FieldValues>({
  name,
  type = 'text',
  placeholder,
  label,
  register
}: Props<T>) {
  return (
    <InputLayout
      name={name}
      label={label}
    >
      <input
        type={type}
        id={name}
        className="block w-full rounded p-2 mt-1 bg-slate-800 focus:ring-1 focus:ring-primary-600 focus:outline-none"
        placeholder={placeholder}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...register(name)}
      />
    </InputLayout>
  )
}
