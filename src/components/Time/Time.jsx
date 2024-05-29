import { useState } from "react"

function Time( mobile ) {
    var today = new Date()
    var dd = String(today.getDate())
    var yyyy = today.getFullYear()
    let weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    let month = ["January","February","March","April","May","June","July","August","September","October","November","December"]

    let time  = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})

    const [ctime,setTime] = useState(time)
    const UpdateTime=()=>{
        time =  new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
        setTime(time)
    }
    setInterval(UpdateTime)

    let css = 'font-semibold'
    if (mobile) {
        css = 'font-medium'
        weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
        month = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"]
    }
    let day = weekday[today.getDay()]
    let mm = month[today.getMonth()]
        
    return ( 
        <p className={css}>{day}, {dd} {mm} {yyyy} | {ctime}</p>
    )
}

export default Time;