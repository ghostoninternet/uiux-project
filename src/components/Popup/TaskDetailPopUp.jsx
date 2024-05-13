import PopUp from "./PopUp";
import NumberPopUpInput from "../Input/NumberPopUpInput";
import DatePicker from "../Input/DatePicker";
function TaskDetailPopUp({event, popUpToggle, setPopUpToggle}) {
  return (
    <PopUp title={'KPI 1/ ' + event.title} popUpToggle={popUpToggle} setPopUpToggle={setPopUpToggle}>
            <form action="" className="flex px-7">
                <div className="w-3/5 h-ful space-y-3 py-5 pr-10 mr-20">
                    <h1 className="text-2xl font-extrabold">{event.title}</h1>
                    <NumberPopUpInput label={event.extendedProps.evaluatuon} value={event.extendedProps.Taskcompleted}/>
                    <NumberPopUpInput label={event.extendedProps.target} value={event.extendedProps.value}/>
                    <NumberPopUpInput label={'Weight'} value={event.extendedProps.weight}/>
                </div>
                <div className="border-l-2 border-gray-200 flex flex-col py-5">
                    <div className="pb-32 space-y-7 py-5 pl-7 pr-11">
                    <h1 className="font-medium text-3xl">Description</h1>
                    <p className="w-96">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <DatePicker />
                    </div>
                    <button className="ml-auto px-5 py-2 bg-[#FABB18] rounded-xl font-extrabold text-white items-end" type="submit">Save</button>
                </div>
            </form>
    </PopUp>
  )
}

export default TaskDetailPopUp