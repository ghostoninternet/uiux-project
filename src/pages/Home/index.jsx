import { useState } from "react";
import './index.css'
import PercentCard from "../../components/HomePage/PercentCard"
import ShowMore from '../../components/Svg/ShowMore'
import Calendar from 'react-calendar';
import { useNavigate } from "react-router-dom";
import YellowFolder from "../../components/Svg/YellowFolder"
import { tasksList1 } from "../../api/TaskApi";
import TaskDetailPopUp from "../../components/Popup/TaskDetailPopUp";
import LineChart from "../../components/Chart/LineChart";

function Home() {
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
  const data = tasksList1.slice(1,7);
const [taskDetail, setTaskDetail] = useState(taskExample)
  const navigate = useNavigate();

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
                <div className="bg-slate-200 rounded-lg p-2">
                  <ShowMore />
                </div>
                <div className="bg-slate-200 rounded-lg p-2">
                <svg width="25" height="25" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#000000" d="M768 256H353.6a32 32 0 1 1 0-64H800a32 32 0 0 1 32 32v448a32 32 0 0 1-64 0V256z"/><path fill="#000000" d="M777.344 201.344a32 32 0 0 1 45.312 45.312l-544 544a32 32 0 0 1-45.312-45.312l544-544z"/></svg>
                </div>
            </div>
            </div>
            <div className="px-5">
              <LineChart />
            </div>
          </div>
        </div>

        <div className="flex space-x-8">
            <div className="p-7 w-1/2 bg-white min-h-36 shadow-lg rounded-xl">
                <Calendar defaultValue={date} onChange={onChange} next2AriaLabel={false} onClickDay={() => navigate('calendar')}/>
            </div>
            <div className="p-7 w-1/2 bg-white min-h-36 shadow-lg rounded-xl h-1/2">
              <h1 className="mb-10 font-bold text-xl">Recent task</h1>
              <div className="h-full px-2">
                {data.map((e,i) => 
                        <div className="inline-block pt-2 cursor-pointer hover:bg-slate-100 w-full" onClick={() => handleOnClick(e)} key={i}>
                          <div className="inline-flex items-center pr-8">
                              <div className="inline-flex p-2 bg-[#F8F8F7] rounded-[50%] ml-8">
                                  <YellowFolder />
                              </div>
                              <span className="ml-4 text-xl w-60 task-title">{e.title}</span>
                              <div className="ml-10 w-20 text-center py-1 bg-[#FABB18] rounded-lg text-md">{e.weight}</div>
                              <div className="flex ml-10 w-28 rounded bg-slate-300">
                                  <div className="rounded" style={{border: `0.1rem solid #FABB18`, width: `${e.Taskcompleted*7/100}rem`}}></div>
                              </div>
              
                          </div>
                          <div className="mt-2" style={{border: `0.01rem solid #DFDFDF`}}></div>
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