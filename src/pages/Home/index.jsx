import { useEffect, useState } from "react";
import './index.css'
import PercentCard from "../../components/HomePage/PercentCard"
import ShowMore from '../../components/Svg/ShowMore'
import Calendar from 'react-calendar';
import { useNavigate } from "react-router-dom";
import YellowFolder from "../../components/Svg/YellowFolder"
import { tasksList1 } from "../../api/TaskApi";
import TaskDetailPopUp from "../../components/Popup/TaskDetailPopUp";
import BarChart from "../../components/Chart/BarChart";

function Home() {
  const navigate = useNavigate()

  const [date, onChange] = useState(new Date())
  const [detailTaskToggle, setDetailTaskToggle] = useState(false)
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
  const data = tasksList1.slice(0,6);
const [taskDetail, setTaskDetail] = useState(taskExample)
  

  const handleOnClick = (event) => {
    setTaskDetail(event)
    setDetailTaskToggle(true)
  }


  return (
    <div className="p-10">
        <div className="flex space-x-7 mb-10">
          <PercentCard title={'Done'} value={30}/>
          <PercentCard title={'In progress'} value={40}/>
          <div className="p-5 w-1/3 bg-white min-h-36 shadow-lg rounded-xl">
            <div className="flex justify-between h-9">
            <h1 className="mb-10 font-bold text-xl">Weekly Trends</h1>
            <div className="flex space-x-5 h-9">
              <div className="rounded-lg p-1 hover:bg-slate-200 cursor-pointer" onClick={() => navigate("/chart")}>
                    <svg width="25" height="25" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none">
                      <path stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.343 15.657L15.657 4.343m0 0v9.9m0-9.9h-9.9"/>
                    </svg>                
              </div>
                <div className="rounded-lg p-2 hover:bg-slate-200 cursor-pointer">
                  <ShowMore />
                </div>
            
            </div>
            </div>
            <div className="ml-3">
              <BarChart />
            </div>
          </div>
        </div>

        <div className="flex space-x-8">
            <div className="p-7 w-1/2 bg-white min-h-36 shadow-lg rounded-xl">
                <Calendar defaultValue={date} onChange={onChange} next2AriaLabel={false} onClickDay={() => navigate('/calendar')}/>
            </div>
            <div className="p-7 w-1/2 bg-white min-h-36 shadow-lg rounded-xl h-1/2">
              <div className="flex justify-between mb-10 px-3">
                <h1 className="font-bold text-xl leading-loose">Recent task</h1>
                <button className="bg-black px-4 py-2 rounded-lg text-white hover:bg-slate-50 hover:text-black font-medium">View all</button>
              </div>
              <div className="h-full px-2">
                {data.map((e,i) => 
                        <div className="inline-block py-2 cursor-pointer hover:bg-slate-100 w-full border-2 border-[#F1F1F1] rounded-xl mb-2 overflow-hidden" onClick={() => handleOnClick(e)} key={i}>
                          <div className="inline-flex items-center pr-8 w-full">
                              <div className="inline-flex p-2 bg-[#F8F8F7] rounded-[50%] ml-8">
                                  <YellowFolder />
                              </div>
                              <span className="ml-4 w-40 task-title">{e.title}</span>
                              <div className="ml-7 w-20 text-center py-1 bg-[#FABB18] rounded-lg text-md font-semibold">{e.weight}</div>
                              <div className="flex ml-7 w-[25%] rounded bg-slate-300">
                                  <div className="rounded bg-[#FABB18] h-[3px]" style={{ width: `${e.Taskcompleted}%`}}></div>
                              </div>
                              <p className="text-xs ml-2 font-medium italic">{e.Taskcompleted}%</p>
                          </div>
                    </div>
                )}
              </div>
            </div>
        </div>
        <TaskDetailPopUp title={taskDetail.title} event={taskDetail} popUpToggle={detailTaskToggle} setPopUpToggle={setDetailTaskToggle}/>
    </div>
  )
}

export default Home