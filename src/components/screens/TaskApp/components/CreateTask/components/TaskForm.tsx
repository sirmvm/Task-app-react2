import Button from 'src/components/common/Button'
import TextArea from 'src/components/common/TextArea'
import TextInput from 'src/components/common/TextInput'

interface Props {
  onClose: () => void
}

export default function TaskForm({ onClose }: Props) {
  return (
    // gap-2 es una clase de tailwind que agrega un espacio entre los elementos
    <form className="space-y-4">
      <TextInput
        name="title"
        label="Title"
        placeholder="Enter a title"
      />
      <TextArea
        name="body"
        label="TextArea"
        placeholder="Enter a body"
      />
      <div className="flex gap-2">
        <Button type="submit">
          Add Task
        </Button>
        <Button onClick={onClose}>
          Cancel
        </Button>

      </div>
    </form>
  )
}
