import TitleInput from "../Input/TitleInput"
import PopUp from "./PopUp"
import DesscriptionTextarea from "../Input/DescriptionTextarea"
import DatePicker from "../Input/DatePicker"
import Flag from "../Svg/Flag"
import ShowMore from "../Svg/ShowMore"
import FormSubmitButton from "../Button/FormSubmitButton"
import { ToastSuccess } from "./ToastSuccess."


const typeOptions = ['One time KPI','Ever day','Every week','Every month']




function NewKpiPopUp({popUpToggle, setPopUpToggle}) {
  const handleSubmit = (form) => {
    form.preventDefault()
    setPopUpToggle(false)
    ToastSuccess()
  }


  return (
    <PopUp title="Create new KPI" popUpToggle={popUpToggle} setPopUpToggle={setPopUpToggle}>
        <form action="" className="space-y-5 px-7 py-5" onSubmit={(form) => handleSubmit(form)}>
          <TitleInput placeholder="KPI name or type ‘/’ for command"/>
          <DesscriptionTextarea />
          <div className="flex space-x-10">
              <DatePicker />
              <select name="type" id="type" className="bg-[#FFF8E8] px-3 py-2 rounded-lg font-bold border-0">
              <option value="" disabled selected className="hidden"><Flag /> Type</option>
                {typeOptions.map((type,i) => <option key={i} value={type} className="font-bold">{type}</option>)}
              </select>
              <button className="bg-[#FFF8E8] rounded-xl p-2"><ShowMore /></button>
          </div>
          <div>
            <label htmlFor="tags" className="block font-bold text-xl mb-3">Tags</label>
            <input type="text" name="tags" className="w-full bg-[#FFF8E8] p-3 rounded-md font-semibold" placeholder="Enter tags name"/>
          </div>
          <div className="flex">
            <input type="file" name="import" id="" className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm 
            file:font-semibold file:bg-[#FFF8E8] file:text-[#FABB18] hover:file:bg-[#ffebbe] text-sm text-slate-500 "/>
            <FormSubmitButton />
          </div>
        </form>
    </PopUp>
  )
}

export default NewKpiPopUp