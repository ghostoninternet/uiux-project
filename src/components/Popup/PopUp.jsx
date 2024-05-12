import Cancel from "../Svg/Cancel";
/* eslint-disable react/display-name */

function PopUp( props) {
  return (
    <>
      <div className={"absolute top-0 right-0 bottom-0 left-0 z-20 bg-[rgba(0,0,0,0.5)] " + props.popUpToggle} onClick={() => props.setPopUpToggle('hidden')}></div>
      <div className={"absolute h-1/2 w-1/2 bg-white left-1/4 top-1/4 rounded-lg z-50 " + props.popUpToggle}>
        <div className="header border-b-2 border-gray-200 flex justify-between mb-5 px-2 pt-1">
          <h2 className="font-bold text-lg">{props.title}</h2>
          <button className="hover:bg-slate-200 rounded-lg p-1" onClick={() => props.setPopUpToggle('hidden')}><Cancel /></button>
        </div>
        <div className="p-3">
          {props.children}
        </div>
    </div>
  </>
  )
}
export default PopUp;