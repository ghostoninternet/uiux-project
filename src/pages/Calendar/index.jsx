import BigCalendar from "../../components/Calendar/BigCalendar"

function Calendar() {
  return (
    <div>
        <div className="flex p-5">
            <h1 className="font-normal mr-5 text-3xl">Calendar</h1>
            <img width="30" height="24" src="https://img.icons8.com/material/24/calendar--v1.png" alt="calendar--v1"/>
        </div>
        <div className="flex justify-between">
            <BigCalendar />
            <div className="w-3/12 h-1/2 shadow-lg">
                    <h2>Date&apos;s event</h2>
            </div>
        </div>
    </div>
  )
}

export default Calendar