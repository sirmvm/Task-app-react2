import { nanoid } from 'nanoid'
import { useState } from 'react'
import { PartialTask, Task } from 'src/@types/Task'

interface Props {
  onTaskAdd: (task: Task) => void
}

export default function useCreateTask({ onTaskAdd }: Props) {
  const [showForm, setShowForm] = useState(false)

  // Esta función se pasa como prop a Button
  // y se ejecuta cuando se hace click en el botón Add a new Task
  const handleOpen = () => {
    setShowForm(true)
  }
  // Esta función se pasa como prop a TaskForm
  // y se ejecuta cuando se hace click en el botón Cancel
  const handleClose = () => {
    setShowForm(false)
  }

  const handleTaskSubmit = ({ title, body }: PartialTask) => {
    const id = nanoid()
    const task: Task = { id, title, body }
    onTaskAdd(task)
  }
  return { showForm, handleOpen, handleClose, handleTaskSubmit }
}
