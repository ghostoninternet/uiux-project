import { useState } from "react"

function Time() {
    var today = new Date()
    var dd = String(today.getDate())
    var yyyy = today.getFullYear()
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    let day = weekday[today.getDay()]
    let mm = month[today.getMonth()]

    let time  = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})

    const [ctime,setTime] = useState(time)
    const UpdateTime=()=>{
        time =  new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
        setTime(time)
    }
    setInterval(UpdateTime)
    return ( 
        <p className="font-semibold">{day}, {dd} {mm} {yyyy} | {ctime}</p>
    )
}

export default Time;