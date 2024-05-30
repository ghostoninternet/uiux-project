import PopUp from "./PopUp";
import TitleInput from "../Input/TitleInput";
import PopUpInput from "../Input/PopUpInput";
import DesscriptionTextarea from "../Input/DescriptionTextarea";
import FormSubmitButton from "../Button/FormSubmitButton";
import DatePicker from "../Input/DatePicker";
import Target from "../Svg/Target";
import { ToastSuccess } from "./ToastSuccess.";

function NewTaskPopUp(props) {
  const handleSubmit = (form) => {
    form.preventDefault()
    props.setPopUpToggle(false)
    ToastSuccess()
  }
  

  return (
    <PopUp title={'Create new task'} popUpToggle={props.popUpToggle} setPopUpToggle={props.setPopUpToggle}>
      <form className="space-y-5 px-7 py-3" onSubmit={(form) => handleSubmit(form)}>
        <TitleInput placeholder="Task Title or type ‘/’ for command"/>
        <PopUpInput label={'Evaluation'} id={'Evaluation'} placeholder={'Enter evaluate method'}/>
        <div className="flex">
          <PopUpInput label={'Target'} id={'Target'} placeholder={'Enter target'}/>
          <div className="flex">
              <label htmlFor={'Value'} className="font-bold text-xl block w-[5.5rem]">Value</label> 
              <input id='Value' type="number" defaultValue={1} className="placeholder:text-gray-400 text-center font-semibold bg-[#FFF8E8] py-1 px-2 w-14 placeholder:italic rounded-sm"/>
          </div>
        </div>
        <div>
          <div className="flex space-x-7 font-bold">
          <DatePicker />
          <div className="bg-[#FFF8E8] py-1 px-4 text-sm rounded-lg flex items-center">
              <Target /> <p className="mx-2">Weight</p>
              <input type="number"  defaultValue={1} className="w-10 p-1 bg-[#FFF8E8]"/>
          </div>
          </div>

        </div>
        <DesscriptionTextarea />
        <div className="w-full border-t-2 border-gray-200 flex justify-end py-2">
            <FormSubmitButton />
        </div>
       </form>
    </PopUp>
  )
}

export default NewTaskPopUp;
