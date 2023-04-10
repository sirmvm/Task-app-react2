import type { Task } from 'src/@types/Task'
import Button from 'src/components/common/Button'
import TaskForm from './components/TaskForm'
import useCreateTask from './hooks/useCreateTask'

interface Props {
  onTaskAdd: (task: Task) => void
}

export default function CreateTask({ onTaskAdd }: Props) {
  // el hook useCreateTask retorna un objeto con las propiedades showForm y handleClose
  const { showForm, handleClose, handleOpen, handleTaskSubmit } = useCreateTask({ onTaskAdd })
  return (
    // space-y-4 es una clase de tailwind que agrega un espacio entre los elementos
    <section className="space-y-4">
      {showForm ? (
        <div className="bg-slate-700 p-4 rounded">
          <h2 className="font-bold">
            Add a task
          </h2>
          <TaskForm onClose={handleClose} onSubmit={handleTaskSubmit} />
        </div>
      ) : (
        <Button fullwidth onClick={handleOpen}>
          Add a new Task
        </Button>
      )}
    </section>
  )
}
