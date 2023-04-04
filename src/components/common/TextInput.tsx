import React from 'react'
import InputLayout from './InputLayout'

interface Props {
  name: string
  type?: HTMLInputElement['type']
  value?: string
  placeholder?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
  label?: string
}

export default function TextInput({
  name,
  type = 'text',
  value,
  onChange,
  onBlur,
  placeholder,
  label
}: Props) {
  return (
    <InputLayout
      name={name}
      label={label}
    >
      <input
        type={type}
        id={name}
        name={name}
        className="block w-full rounded p-2 mt-1 bg-slate-800"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        />
    </InputLayout>
  )
}
