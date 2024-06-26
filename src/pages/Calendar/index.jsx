import { useState } from "react"
import BigCalendar from "../../components/Calendar/BigCalendar"
import ShortTask from "../../components/Task/ShortTask";
import NewTaskPopUp from "../../components/Popup/NewTaskPopUp";
import TaskDetailPopUp from "../../components/Popup/TaskDetailPopUp";
import BackArrow from "../../components/Svg/BackArrow";
import { useNavigate } from "react-router-dom"

function Calendar() {
  const navigate = useNavigate()

  const [clickedDate, setClickedDate] = useState( new Date().toDateString())
  const [events, setEvents] = useState([]);
  const [newTaskToggle, setNewTaskToggle] = useState(false);
  const [detailTaskToggle, setDetailTaskToggle] = useState(false);
  const taskExample = {
    title: '',
    extendedProps: {
      evaluatuon: '',
      target: '',
      value: null,
      Taskcompleted: null,
      weight: null,
    }
  }
  const [event, setEvent] = useState(taskExample);
  
  return (
    <div>
        <div className="flex p-5 gap-4">
            <button className="hover:bg-slate-200 hover:rounded-lg px-1" onClick={() => navigate('/')}>
              <BackArrow />
            </button>
            <h1 className="font-normal text-3xl">Calendar</h1>
            <img width="40" height="25" src="https://img.icons8.com/material/24/calendar--v1.png" alt="calendar--v1"/>
        </div>
        <div className="flex justify-between">
            <BigCalendar setClickedDate={setClickedDate} setEvents={setEvents} eventClick={() => setDetailTaskToggle(true)} getEventDetail={setEvent}/>
            <div className="w-3/12 mr-10 mt-2">
              <div className="w-full h-80 shadow-2xl p-5 bg-white rounded-2xl">
                  <div className="">
                      <div className="flex justify-between">
                        <h2 className="font-semibold">Date&apos;s task</h2>
                        <button className="bg-[#FABB18] rounded-lg px-3 py-1" onClick={() => setNewTaskToggle(true)}>New task</button>
                      </div>
                      <h3 className="mb-3 italic">{clickedDate}</h3>
                  </div>

                  {events.length?     
                      <ul className="space-y-2 overflow-y-auto h-48">
                          {events.map((event,index)=> <li key={index}><ShortTask title={event.title} onClick={() => setDetailTaskToggle(true)}/></li>)}
                      </ul>:<p className="justify-center flex h-4/5 items-center">There is no task today</p>
                  }
              </div>

              <div className="w-full h-72 shadow-2xl p-5 mt-6 bg-white rounded-2xl">
                      <div className="flex justify-between">
                        <h2 className="font-semibold">Note</h2>
                        <button className="bg-[#FABB18] rounded-lg px-3 py-1">New note</button>
                      </div>
              </div>
            </div>
        </div>
        <NewTaskPopUp popUpToggle={newTaskToggle} setPopUpToggle={setNewTaskToggle}/>
        <TaskDetailPopUp title={event.title} event={event.extendedProps} popUpToggle={detailTaskToggle} setPopUpToggle={setDetailTaskToggle}/>
    </div>
  )
}

export default Calendar 