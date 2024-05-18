import DatePicker from "../Input/DatePicker"
import DesscriptionTextarea from "../Input/DescriptionTextarea"
import Cancel from "../Svg/Cancel"
import Save from "../Svg/Save"
import PopUp from "./PopUp"
import { ToastSuccess } from "./ToastSuccess."

function EditKpiPopUp({ popUpToggle, setPopUpToggle}) {
    const typeOptions = ['One time KPI','Ever day','Every week','Every month']

    const handleSubmit = (form) => {
        form.preventDefault()
        setPopUpToggle(false)
        ToastSuccess()
      }

  return (
    <PopUp title="Edit KPI" popUpToggle={popUpToggle} setPopUpToggle={setPopUpToggle}>
            <form className="mt-10 font-bold" onSubmit={(form) => handleSubmit(form)}>
                <div className="mb-10 space-y-6 mx-10">
                    <div className="flex w-full space-x-6">
                        <label htmlFor="" className="block w-28">Name</label>
                        <input type="text" className="p-2 bg-slate-100"/>
                    </div>
                    <div className="flex w-full space-x-6">
                        <h2 className="w-28">Due date</h2>
                        <DatePicker />
                    </div>
                    <div className="flex w-full space-x-6">
                        <h2 className="w-28">Due date</h2>
                        <DatePicker />
                    </div>
                    
                    <div className="flex w-full space-x-6">
                        <h2 className="w-28">Type</h2>
                        <select name="type" id="type" className="bg-[#FFF8E8] px-3 py-2 rounded-lg font-bold border-0">
                            <option value="" disabled selected className="hidden">Type</option>
                                {typeOptions.map((type,i) => <option key={i} value={type} className="font-bold">{type}</option>)}
                        </select>
                    </div>

                    <div className="w-full space-y-3">
                        <h2 className="w-28">Description</h2>
                        <DesscriptionTextarea />
                    </div>
                </div>

                <div className=" bg-slate-300 w-full rounded-b-lg space-x-4 flex p-3">
                        <button className="border-2 px-4 py-2 border-[#FABB18] text-[#FABB18] bg-[#FFF8E8] rounded-lg flex ml-auto">
                            Cancel
                            <div className="ml-2"><Cancel /></div>
                        </button>
                        <button className="bg-[#FABB18] rounded-lg px-5 py-2 flex text-white font-bold" type="submit">
                            Save 
                            <div className="ml-3 mt-1"><Save /></div>
                        </button>
                </div>
            </form>
    </PopUp>
  )
}

export default EditKpiPopUp