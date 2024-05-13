import RightArrow from "../Svg/RightArrow"


function FormSubmitButton() {
  return (
    <button className="bg-[#FABB18] py-1 px-2 font-bold text-white flex rounded-md hover:scale-110 hover:-translate-y-1 transition ml-auto">
    <p className="mr-2">Create</p>
    
    <RightArrow />
    </button>
  )
}

export default FormSubmitButton