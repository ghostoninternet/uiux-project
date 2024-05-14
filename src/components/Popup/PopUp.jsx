import Cancel from "../Svg/Cancel";
import { Transition, TransitionChild } from '@headlessui/react'
function PopUp( props) {
  return (
    <>
      <Transition
        show={props.popUpToggle}
      >

      <TransitionChild
         enter="transition-opacity ease-linear duration-300"
         enterFrom="opacity-0"
         enterTo="opacity-100"
         leave="transition-opacity ease-linear duration-300"
         leaveFrom="opacity-100"
         leaveTo="opacity-0"
      >
        <div className={"absolute top-0 right-0 bottom-0 left-0 z-20 bg-[rgba(0,0,0,0.3)] " + props.popUpToggle} onClick={() => props.setPopUpToggle(false)}></div>
      
      </TransitionChild>

        <div className="flex overflow-y-auto">
          <TransitionChild
            enter="transition ease-in-out duration-1000 transform"
            enterFrom="-translate-y-full"
            enterTo="translate-y-0"
            leave="transition ease-in-out duration-100 transform"
            leaveFrom="translate-y-0"
            leaveTo="-translate-y-full"
          >
              <div className={"absolute transition-opacity h-auto min-h-[50%] min-w-[50%] w-auto bg-white left-1/2 translate-x-[-50%] top-[20%] rounded-lg z-50 shadow-2xl "}>
                  <div className="header border-b-2 border-gray-200 flex justify-between pb-2 px-3 pt-2">
                    <h2 className="font-bold text-xl">{props.title}</h2>
                    <button className="hover:bg-slate-200 rounded-lg p-1" onClick={() => props.setPopUpToggle(false)}><Cancel /></button>
                  </div>
                  <div className="">
                    {props.children}
                  </div>
              </div>
          </TransitionChild>
        </div>
    </Transition>
  </>
  )
}
export default PopUp;