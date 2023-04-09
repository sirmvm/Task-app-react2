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
        // max-h-[340px] min-h-[100px] => permite que el textarea crezca hasta 340px y no más
        className="block w-full rounded p-2 mt-1 bg-slate-800 focus:ring-1 focus:ring-primary-600 focus:outline-none max-h-[340px] min-h-[100px]"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
      />
    </InputLayout>
  )
}
