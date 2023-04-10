import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import type { PartialTask } from 'src/@types/Task'
import { yupResolver } from '@hookform/resolvers/yup'

interface Props {
  onSubmit: (task: PartialTask) => void
}

const schema = yup.object({
  title: yup.string()
    .required('Title is required')
    .min(3, 'Title is too short')
    .max(20, 'Title is too long'),
  body: yup.string()
    .required('Body is required')
    .min(3, 'Body is too short')
    .max(100, 'Body is too long')
})

export default function useTaskFrom({ onSubmit }: Props) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<PartialTask>({
    defaultValues: {
      title: '',
      body: ''
    },
    resolver: yupResolver(schema)
  })

  const handleFormSubmit = handleSubmit(data => {
    onSubmit(data)
    reset()
  })

  return { register, errors, handleSubmit: handleFormSubmit }
}
