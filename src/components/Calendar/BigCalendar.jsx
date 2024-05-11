import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from "@fullcalendar/interaction"
import { useRef } from 'react';
export default function BigCalendar({setClickedDate, setEvents}) {
    var events = [
        { title: 'Event Title', start: '2024-05-20', id: '1' }, 
        { title: 'Meeting', start: '2024-05-22T10:00:00', end: '2024-05-22T11:00:00' , id: '2'} 
    ];
    
    const calendarRef =  useRef(null)



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
    <div className='w-8/12 h-1/2'>
        <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin,interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "title prev,next", 
          end: "dayGridMonth,timeGridWeek,timeGridDay", 
        }}
        events={events}
        dateClick={handleDateClick}
        height={'90vh'}
        ref={calendarRef}
      />
    </div>
  )
}
