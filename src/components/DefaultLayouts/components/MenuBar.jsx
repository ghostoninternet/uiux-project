/* eslint-disable no-unused-vars */
/* eslint-disable react/display-name */
import { Link } from "react-router-dom"

const MenuBar = (props) => {
  const handleOnClick = (event) => {
    props.setCurrentActive(props.link.split('/')[1])
  }

  return (
    <Link to={props.link} className="w-full">
      <div onClick={handleOnClick} 
        className="wrapper flex px-7 py-4 w-full rounded-2xl gap-4"
        style={{
          backgroundColor: props.currentActive === props.link.split('/')[1].toLowerCase() ? 'black' : '#FFF8E8',
          color: props.currentActive === props.link.split('/')[1].toLowerCase() ? 'white' : undefined
        }}
      >
        <div className="svg-icon">
          {
            props.currentActive === props.link.split('/')[1].toLowerCase() ? props.darkSvgIcon : props.svgIcon
          }
        </div>
        {
          !props.smallSidebar && <div className="my-auto menu-title font-semibold text-lg">{props.menuTitle}</div>
        }
      </div>
    </Link>
  )
}

export default MenuBar