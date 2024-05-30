import { useState } from "react"
import { FaAngleDown, FaAngleUp } from "react-icons/fa"
function HelpDropDown({title, children}) {

  const [down, setDown] = useState(false)

    const handleClick = () => {
        setDown(!down)
    }

  return (
    <div className="border-b-2 border-gray-300 py-7 px-10 cursor-pointer" onClick={() => handleClick()}>
        <div className="flex justify-between">
            <h1 className={`text-lg ${down ? 'font-bold' : 'font-medium'}`}>{title}</h1>
            {down ? <FaAngleUp fontSize={30}/> : <FaAngleDown fontSize={30}/>}
        </div>
        {down && children}
    </div>
  )
}

export default HelpDropDown