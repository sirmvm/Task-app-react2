import { useState } from 'react'

export default function useCreateTask() {
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
  return { showForm, handleOpen, handleClose }
}
