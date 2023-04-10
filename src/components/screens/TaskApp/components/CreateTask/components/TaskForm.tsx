import type { PartialTask } from 'src/@types/Task'
import Button from 'src/components/common/Button'
import TextArea from 'src/components/common/TextArea'
import TextInput from 'src/components/common/TextInput'
import useTaskFrom from '../hooks/userTaskFrom'

interface Props {
  onClose: () => void
  onSubmit: (values: PartialTask) => void
}

export default function TaskForm({ onClose, onSubmit }: Props) {
  const {
    title,
    body,
    handleTitleChange,
    handleSubmit,
    handleBodyChange
  } = useTaskFrom({ onSubmit })
  return (
    // gap-2 es una clase de tailwind que agrega un espacio entre los elementos
    <form className="space-y-4" onSubmit={handleSubmit}>
      <TextInput
        name="title"
        label="Title"
        placeholder="Enter a title"
        value={title}
        onChange={handleTitleChange}
      />
      <TextArea
        name="body"
        label="TextArea"
        placeholder="Enter a body"
        value={body}
        onChange={handleBodyChange}
      />
      <div className="flex gap-2">
        <Button type="submit">
          Add Task
        </Button>
        <Button variant="text" onClick={onClose}>
          Cancel
        </Button>

      </div>
    </form>
  )
}
