interface Props {
  title:string
  body:string

}

export default function TaskkItem({ title, body }:Props) {
  return (
    <li className=" rounded w-full bg-slate-700 px-6 py-4">
      <h2 className="font-bold">
        {title}
      </h2>
      <p className="text-sm">
        {body}
      </p>
    </li>
  )
}
