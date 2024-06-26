import Calendar from "react-calendar"
import { tasksList1 } from "../../api/TaskApi";
import YellowFolder from "../../components/Svg/YellowFolder"
import { MobileRightArrow } from "../../mobileComponents/Svg";
import { Link } from "react-router-dom";
function CalendarPage() {
    return (
      <div className="py-5 px-2 flex flex-col gap-10 pb-30 h-[calc(100vh-10rem)] relative overflow-y-scroll scrollbars-hidden">
       <div>
        <h1 className='font-bold text-2xl'>Calendar</h1>
        <div className="px-3 py-5 bg-white drop-shadow-lg rounded-lg">
            <Calendar className={'mobile-calendar'}/>
        </div>
       </div>
       <div>
            <h1 className='font-bold text-2xl mb-3'>Today task</h1>
            {tasksList1.slice(0,2).map((e,i) => 
                         <Link to={'/mobile/kpi/task/detail'} className="py-3 cursor-pointer w-full border-2 border-gray-300 rounded-xl mb-3 overflow-hidden flex justify-between shadow-sm"  key={i}>
                         <div className="inline-flex justify-between w-1/5">
                           <div className="inline-flex p-3 bg-[#F8F8F7] rounded-[50%] ml-4 w-full my-auto">
                               <YellowFolder size={40}/>
                           </div>
                         </div>

                         <div className='flex flex-col w-3/4 pr-5 pl-3 gap-2'>

                         <div className='flex justify-between'>
                           <span className="w-40 task-title leading-loose font-medium">{e.title}</span>  
                           <MobileRightArrow />
                         </div>
                         <div className='flex gap-5 text-sm'>
                         <p className='leading-loose'>Weight</p>
                         <div className="w-10 text-center bg-[#FABB18] rounded-lg text-md font-semibold p-1">{e.weight}</div>
                         </div>

                         <div className='flex justify-between'>
                           <div className="flex w-4/5 rounded bg-slate-300 h-1.5 my-auto">
                               <div className="rounded bg-[#FABB18] h-1.5" style={{ width: `${e.Taskcompleted}%`}}></div>
                           </div>
                           <p className="text-xs ml-2 font-medium italic">{e.Taskcompleted}%</p>
           
                         </div>

                       </div>
                 </Link>
                  )}
       </div>
      </div>
    )
  }
  
  export default CalendarPage