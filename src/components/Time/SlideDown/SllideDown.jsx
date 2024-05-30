import {SlideDown} from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'

export function MyDropdown(props) {
    return (
      <SlideDown className={'my-dropdown-slidedown'}>
        {props.open ? props.children : null}
      </SlideDown>
    )
  }