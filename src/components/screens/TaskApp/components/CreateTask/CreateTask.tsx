import Button from 'src/components/common/Button'
import TaskForm from './components/TaskForm'
import useCreateTask from './hooks/useCreateTask'

export default function CreateTask() {
  // el hook useCreateTask retorna un objeto con las propiedades showForm y handleClose
  const { showForm, handleClose, handleOpen } = useCreateTask()
  return (
    // space-y-4 es una clase de tailwind que agrega un espacio entre los elementos
    <section className="space-y-4">
      <Button fullwidth onClick={handleOpen}>
        Add a new Task
      </Button>
      {showForm && (
        <div className="bg-slate-700 p-4 rounded">
          <h2 className="font-bold">
            Add a task
          </h2>
          <TaskForm onClose={handleClose} />
        </div>

      )}
    </section>
  )
}
