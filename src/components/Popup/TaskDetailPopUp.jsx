import PopUp from "./PopUp";
import NumberPopUpInput from "../Input/NumberPopUpInput";
import DatePicker from "../Input/DatePicker";
import Save from "../Svg/Save";
import { ToastSuccess } from "./ToastSuccess.";

function TaskDetailPopUp({title,event, popUpToggle, setPopUpToggle}) {

  const handleFormSubmission = (e) => {
    e.preventDefault()
    ToastSuccess()
    setPopUpToggle(false)
  }

  return (
    <PopUp title={title} popUpToggle={popUpToggle} setPopUpToggle={setPopUpToggle}>
            <form action="" onSubmit={handleFormSubmission} className="flex px-7">
                <div className="w-3/5 h-ful space-y-3 py-5 pr-10 mr-20">
                    <h1 className="text-2xl font-extrabold">{title}</h1>
                    <NumberPopUpInput label={event.evaluatuon} value={event.Taskcompleted}/>
                    <NumberPopUpInput label={event.target} value={event.value}/>
                    <NumberPopUpInput label={'Weight'} value={event.weight}/>
                </div>
                <div className="border-l-2 border-gray-200 flex flex-col py-5">
                    <div className="pb-20 space-y-7 py-5 pl-7 pr-11">
                    <h1 className="font-medium text-3xl">Description</h1>
                    <p className="w-96">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <DatePicker />
                    </div>
                    <button className="ml-auto bg-[#FABB18] rounded-xl px-5 py-2 flex text-white font-bold" type="submit">
                        Save 
                      <div className="ml-3 mt-1"><Save /></div>
                    </button>
                </div>
            </form>
    </PopUp>
  )
}

export default TaskDetailPopUp