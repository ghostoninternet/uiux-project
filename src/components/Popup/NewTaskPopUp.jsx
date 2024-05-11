import { forwardRef } from "react";
import PopUp from "./PopUp";

/* eslint-disable react/display-name */
const  NewTaskPopUp = forwardRef((props, ref) => { 
  return (
    <PopUp ref={ref}>
       hello world
    </PopUp>
  )
});

export default NewTaskPopUp;
