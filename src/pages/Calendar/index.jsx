import { useState } from "react"
import BigCalendar from "../../components/Calendar/BigCalendar"
import ShortTask from "../../components/Task/ShortTask";
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
            <div className="w-3/12">
              <div className="w-full h-80 shadow-lg p-5">
                  <div className="">
                      <div className="flex justify-between">
                        <h2 className="font-semibold">Date&apos;s task</h2>
                        <button className="bg-[#FABB18] rounded-lg px-3 py-1">New task</button>
                      </div>
                      <h3 className="mb-3 italic">{clickedDate}</h3>
                  </div>

                  {events.length?     
                      <ul className="space-y-2 overflow-y-auto h-48">
                          {events.map((event,index)=> <li key={index}><ShortTask title={event._def.title}/></li>)}
                      </ul>:<p className="justify-center flex h-4/5 items-center">There is no task today</p>
                  }
              </div>

              <div className="w-full h-80 shadow-lg p-5 mt-6">
                      <div className="flex justify-between">
                        <h2 className="font-semibold">Note</h2>
                        <button className="bg-[#FABB18] rounded-lg px-3 py-1">New note</button>
                      </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Calendar 