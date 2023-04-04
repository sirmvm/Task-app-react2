import TextInput from 'src/components/common/TextInput'
import TextArea from 'src/components/common/TextArea'
import Button from 'src/components/common/Button'

export default function CreateTask() {
  return (
    <section className="bg-slate-700 p-4 rounded">
      <h2 className="font-bold">
        Add a task
      </h2>
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
        <Button type="submit">
          Add Task
        </Button>
      </form>
    </section>
  )
}
