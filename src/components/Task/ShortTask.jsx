

export default function ShortTask ({title , onClick }) {
  return (
    <div className="flex w-full">
            <button className=" text-blue-800" onClick={() => onClick()}>{title}</button>
    </div>
  )
}
