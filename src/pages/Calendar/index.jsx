import { useState } from "react"
import BigCalendar from "../../components/Calendar/BigCalendar"

function Calendar() {
  
  const [clickedDate, setClickedDate] = useState( new Date().toDateString())
  const [events, setEvents] = useState([]);
  return (
    <div>
        <div className="flex p-5">
            <h1 className="font-normal mr-5 text-3xl">Calendar</h1>
            <img width="30" height="24" src="https://img.icons8.com/material/24/calendar--v1.png" alt="calendar--v1"/>
        </div>
        <div className="flex justify-between">
            <BigCalendar setClickedDate={setClickedDate} setEvents={setEvents}/>
            <div className="w-3/12 h-1/2 shadow-lg p-5 mr-7 bg-white rounded-lg">
                    <div className="flex justify-between">
                      <h2 className="font-semibold">Date&apos;s event</h2>
                      <button className="bg-[#FABB18] rounded-lg px-3 py-1">New task</button>
                    </div>
                    <h3>{clickedDate}</h3>
                    <ul>
                        {events.map((event,index)=> <li key={index}>{event._def.title}</li>)}
                    </ul>
            </div>
        </div>
    </div>
  )
}

export default Calendar 