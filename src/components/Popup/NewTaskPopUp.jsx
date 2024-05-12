import PopUp from "./PopUp";
import PopUpInput from "../Input/TitleInput";
import DesscriptionTextarea from "../Input/DescriptionTextarea";
/* eslint-disable react/display-name */
function  NewTaskPopUp(props) { 
  return (
    <PopUp title={'Create new task'} popUpToggle={props.popUpToggle} setPopUpToggle={props.setPopUpToggle}>
      <form>
        <PopUpInput />
        <h3 className="mt-2 font-bold mb-5">Evaluate</h3>
        <DesscriptionTextarea />
       </form>
    </PopUp>
  )
}

export default NewTaskPopUp;
