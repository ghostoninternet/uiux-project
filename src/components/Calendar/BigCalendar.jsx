import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from "@fullcalendar/interaction"
import { useRef } from 'react';
export default function BigCalendar() {
    var events = [
        { title: 'Event Title', start: '2024-05-20' }, 
        { title: 'Meeting', start: '2024-05-22T10:00:00', end: '2024-05-22T11:00:00' } 
    ];
    
    const calendarRef =  useRef(null)

    const handleDateClick = () => {
      
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
