import { forwardRef } from "react"
/* eslint-disable react/display-name */
const PopUp =  forwardRef(( props, ref ) => {
  return (
    <div className="absolute top-0 right-0 bottom-0 left-0 bg-slate-300 z-50 hidden bg-[rgba(0,0,0,0.5)]" ref={e => ref.current = e}>
        <div className="relative h-1/2 w-1/2 bg-white left-1/4 top-1/4 rounded-lg">
            {props.children}
        </div>


    </div>
  )
});
export default PopUp;