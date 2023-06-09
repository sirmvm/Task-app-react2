import Button from 'src/components/common/Button'

interface Props {
  title:string
  body:string
  id:string
  onRemove : (id:string) => void

}

export default function TaskkItem({ id, title, body, onRemove }:Props) {
  const handleRemove = () => {
    onRemove(id)
  }
  return (
    <li className=" rounded w-full bg-slate-700 px-6 py-4">
      <p className="text-sx opacity-50">
        ID: {id}
      </p>
      <h2 className="font-bold">
        {title}
      </h2>
      <p className="text-sm">
        {body}
      </p>
      <Button variant="text" onClick={handleRemove}>
        Remove
      </Button>
    </li>
  )
}
