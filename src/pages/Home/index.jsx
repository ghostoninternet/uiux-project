import { useState } from "react";
import PercentCard from "../../components/HomePage/PercentCard"
import ShowMore from '../../components/Svg/ShowMore'
import Calendar from 'react-calendar';
import { useNavigate } from "react-router-dom";
import Task from "../../components/KPI/components/Task/Task";
import { tasksList1 } from "../../api/TaskApi";
import TaskDetailPopUp from "../../components/Popup/TaskDetailPopUp";
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

  return (
    <div className="p-10">
        <div className="flex space-x-7 mb-10">
          <PercentCard title={'Done'} value={30}/>
          <PercentCard title={'In progress'} value={40}/>
          <div className="p-7 w-1/3 bg-white min-h-36 shadow-lg rounded-xl">
            <div className="flex justify-between">
            <h1 className="mb-10 font-bold text-xl">Weekly Trends</h1>
            <div className="flex space-x-5 h-9">
                <div className="bg-slate-200 rounded-lg p-2 pb-0">
                  <ShowMore />
                </div>
                <div className="bg-slate-200 rounded-lg p-2">
                <svg width="25" height="25" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#000000" d="M768 256H353.6a32 32 0 1 1 0-64H800a32 32 0 0 1 32 32v448a32 32 0 0 1-64 0V256z"/><path fill="#000000" d="M777.344 201.344a32 32 0 0 1 45.312 45.312l-544 544a32 32 0 0 1-45.312-45.312l544-544z"/></svg>
                </div>
            </div>
            </div>
          </div>
        </div>

        <div className="flex space-x-8">
            <div className="p-7 w-1/2 bg-white min-h-36 shadow-lg rounded-xl">
                <Calendar defaultValue={date} onChange={onChange} next2AriaLabel={false} onClickDay={() => navigate('calendar')}/>
            </div>
            <div className="p-7 w-1/2 bg-white min-h-36 shadow-lg rounded-xl">
            <h1 className="mb-10 font-bold text-xl">Recent task</h1>
              {data.map((e,i) => <Task key={i} event={e} taskClick={setDetailTaskToggle} setTaskDetail={setTaskDetail}/>)}
            </div>
        </div>
        <TaskDetailPopUp title={taskDetail.title} event={taskDetail} popUpToggle={detailTaskToggle} setPopUpToggle={setDetailTaskToggle}/>
    </div>
  )
}

export default Home