import { useForm } from 'react-hook-form'
import type { PartialTask } from 'src/@types/Task'

interface Props {
  onSubmit: (task: PartialTask) => void
}

export default function useTaskFrom({ onSubmit }: Props) {
  const { register, handleSubmit } = useForm<PartialTask>({
    defaultValues: {
      title: '',
      body: ''
    }
  })

  const handleFormSubmit = handleSubmit(onSubmit)

  return { register, handleSubmit: handleFormSubmit }
}
