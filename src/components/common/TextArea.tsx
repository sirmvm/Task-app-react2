import React from 'react'
import InputLayout from './InputLayout'

interface Props {
  name: string
  value?: string
  placeholder?: string
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void
  label?: string
}

export default function TextArea({
  name,
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
      <textarea
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
