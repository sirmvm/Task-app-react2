import React from 'react'
import { FieldError, FieldValues, Path, UseFormRegister } from 'react-hook-form'
import InputLayout from './InputLayout'

interface Props<T extends FieldValues> {
  name: Path<T>
  placeholder?: string
  label?: string
  register: UseFormRegister<T>
  error?: FieldError
}

export default function TextArea<T extends FieldValues>({
  name,
  placeholder,
  label,
  register,
  error
}: Props<T>) {
  return (
    <InputLayout
      name={name}
      label={label}
      errorMessage={error?.message}
    >
      <textarea
        id={name}
        // max-h-[340px] min-h-[100px] => permite que el textarea crezca hasta 340px y no más
        className="block w-full rounded p-2 mt-1 bg-slate-800 focus:ring-1 focus:ring-primary-600 focus:outline-none max-h-[340px] min-h-[100px]"
        placeholder={placeholder}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...register(name)}
      />
    </InputLayout>
  )
}
