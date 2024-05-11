/* eslint-disable react/display-name */
import { forwardRef } from "react"

const MenuBar = forwardRef(( props, ref ) => {
  return (
    <button ref={ref} className="w-full">
      <div className="flex px-9 py-4 w-full rounded-3xl bg-yellow-100 gap-4">
        <div>
          {props.sgvIcon}
        </div>
        <div className="my-auto">
          {props.menuTitle}
        </div>
      </div>
    </button>
  )
})

export default MenuBar