import RightArrow from "../Svg/RightArrow"


function FormSubmitButton() {
  return (
    <button className="bg-[#FABB18] py-1 px-2 font-bold text-white flex rounded-md hover:text-[#FABB18] hover:bg-[#FFF8E8]">
    <p className="mr-2">Create task</p>
    
    <RightArrow />
    </button>
  )
}

export default FormSubmitButton