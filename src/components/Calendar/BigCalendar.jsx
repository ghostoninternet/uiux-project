import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from "@fullcalendar/interaction"
import { useRef } from 'react';
import { tasksList1, tasksList2 } from '../../api/TaskApi';

export default function BigCalendar({setClickedDate, setEvents, eventClick ,getEventDetail}) {

    const calendarRef =  useRef(null)
    const handleEventClick = (info) => {
      eventClick()
      getEventDetail(info.event._def)
    }


    const handleDateClick = (info) => {
      var date = new Date(info.dateStr)
      setClickedDate(date.toDateString())
      var events = calendarRef.current.getApi().getEvents()
      console.log(events)
      var result = []
      for(let index in events) {
          var start = events[index]._instance.range.start.getDate()
          var end = events[index]._instance.range.end.getDate()
          if(start <= date.getDate() && date.getDate() <= end) {
              console.log(start <= date.getDate() && date.getDate() <= end)
              result.push(events[index])
          }
      }
      setEvents(result);
    }

  return (
    <div className='w-8/12 h-1/2 pl-5 pt-2'>
        <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin,interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "title prev,next", 
          end: "dayGridMonth,timeGridWeek,timeGridDay", 
        }}
        events={[...tasksList1,...tasksList2]}
        dateClick={handleDateClick}
        height={'75vh'}
        ref={calendarRef}
        eventClick={(event) => handleEventClick(event)}
      />
    </div>
  )
}
