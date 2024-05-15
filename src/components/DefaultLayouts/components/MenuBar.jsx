/* eslint-disable react/display-name */
import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"

const MenuBar = (props) => {
  const ref = useRef()

  useEffect(() => {
    if (props.currentActive === props.menuTitle.toLowerCase()) {
      ref.current.classList.remove('bg-[#FFF8E8]')
      ref.current.classList.add('bg-black', 'text-white')
    } else {
      ref.current.classList.remove('bg-black', 'text-white')
      ref.current.classList.add('bg-[#FFF8E8]')
    }
  }, [props.currentActive, props.menuTitle])

  const handleOnClick = (event) => {
    const clickedButton = event
    let target = clickedButton.target
    if (target.classList.contains('menu-title')) {
      target = target.parentNode
    }
    const targetTitle = target.children[1].textContent.toString()
    props.setCurrentActive(targetTitle)
  }

  return (
    <Link to={props.link} className="w-full">
      <div ref={ref} onClick={handleOnClick} className="wrapper flex px-9 py-5 w-full rounded-3xl bg-[#FFF8E8] gap-4">
        <div className="svg-icon">
          {
            props.currentActive === props.menuTitle ? props.darkSvgIcon : props.svgIcon
          }
        </div>
        <div className="my-auto menu-title">
          {props.menuTitle}
        </div>
      </div>
    </Link>
  )
}

export default MenuBar