import { Link } from "react-router-dom"

export default function ShortTask ({title}  ) {
  return (
    <div className="flex w-full">
            <Link className=" text-blue-800" to={'#'}>{title}</Link>
    </div>
  )
}
