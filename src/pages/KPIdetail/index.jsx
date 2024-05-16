import { useSearchParams } from "react-router-dom";
import { KpiData } from "../../api/KpiApi";
import { Fragment, useLayoutEffect, useState } from "react";
import Time from "../../components/Time/Time";
import AddButton from "../../components/AddButton/AddButton";
import '../KPIdetail/index.css'
import DetailTask from "../../components/Task/DetailTask";
import EditKpiPopUp from "../../components/Popup/EditKpiPopUp";
import TaskDetailPopUp from "../../components/Popup/TaskDetailPopUp";
import NewTaskPopUp from "../../components/Popup/NewTaskPopUp";
import BackArrow from "../../components/Svg/BackArrow";
import { useNavigate } from "react-router-dom"

export default function KpiDetail() {
  const navigate = useNavigate()
  let [searchParams, setSearchParams] = useSearchParams()
  const [data, setData] = useState()
  useLayoutEffect(() => {
    let title = searchParams.get('title')
    for (let index = 0; index < KpiData.length; index++) {
      const element = KpiData[index];
      if (element.title == title) {
        setData(element)
        break
      }
    }
  }, [])

  const taskExample = {
    title: '',
      evaluatuon: '',
      target: '',
      value: null,
      Taskcompleted: null,
      weight: null,
  }

  const [taskDetail, setTaskDetail] = useState(taskExample)
  const [detailTaskToggle, setDetailTaskToggle] = useState(false)
  const [newTaskPopUpToggle, setNewTaskPopUpToggle] = useState(false)
  const [editToggle, setEditToggle] = useState(false)

  const handleOnClickTask = (event, task) => {
    setTaskDetail(task)
    setDetailTaskToggle(true)
  }



  return (
    !data ? <Fragment /> :
      <div className="mx-8 mt-5">
        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <button className="hover:bg-slate-200 hover:rounded-lg px-1" onClick={() => navigate('/kpi')}>
              <BackArrow />
            </button>
            <div>
              <h2 className="text-4xl mb-2">{data.title}</h2>
              <Time />
            </div>

          </div>
          <div>

            <AddButton tittle={'New Task'} onClick={() => setNewTaskPopUpToggle(true)} />
          </div>
        </div>


        <div className="flex mt-8">
          <div className="w-1/3 bg-white flex justify-between min-w-[400px] rounded-lg min-h-[140px] shadow-lg">
            <div className="big-semi-circle w-36 h-36 -rotate-90 relative top-8 left-8"
              style={{
                backgroundImage: `conic-gradient(
                      #FABB18 0deg, #FABB18 ${data.KPIcompleted * 180 / 100}deg,
                      #EFF2F4 ${data.KPIcompleted * 180 / 100}deg, #EFF2F4 180deg,
                      transparent 180deg
                  )`}}>
              <div className="small-semi-circle w-[7rem] h-[7rem]"
                style={{
                  backgroundImage: `conic-gradient(
                    white 0deg, white 180deg,
                    transparent 180deg
                )`}}></div>
              <p className="absolute rotate-90 right-[27%] font-medium text-xl">{data.KPIcompleted}%</p>
              <p className="absolute rotate-90 right-[44%] text-xs text-[#B6B6B6] mb-1">Tasks</p>
            </div>

            <div className="mr-8 flex items-center font-semibold">
              <div>
                <p>Total: {data.tasksList.length} tasks</p>
                <p className="my-2">Completed: {data.tasksCompleted} tasks</p>
                <p>To do: {data.tasksList.length - data.tasksCompleted} tasks</p>
              </div>
            </div>
          </div>


          <div className="w-2/3 ml-20 bg-white min-w-[600px] rounded-lg shadow-lg">
            <div className="pt-4 px-8">
              <div className="flex">
                <p className="font-bold text-2xl">Infomation</p>
                <div className="flex items-center ml-3 hover:bg-slate-200 p-1 rounded-md cursor-pointer" onClick={() => setEditToggle(true)}>
                  <svg width="20" height="19" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.477661 19.7924V25H5.81481L21.5559 9.64102L16.2187 4.43341L0.477661 19.7924ZM25.6833 5.6138C26.2383 5.07221 26.2383 4.19733 25.6833 3.65574L22.3529 0.406194C21.7978 -0.135398 20.9012 -0.135398 20.3461 0.406194L17.7416 2.94751L23.0787 8.15512L25.6833 5.6138Z" fill="black" />
                  </svg>
                </div>
              </div>

              <div className="flex justify-between mr-16 my-4">
                <div className="flex font-semibold">
                  <p>Start date:</p>
                  <p className="ml-2 text-[#FABB18]">{data.startDate}</p>
                </div>
                <div className="flex font-semibold">
                  <p>Due date:</p>
                  <p className="ml-2 text-[#FABB18]">{data.dueDate}</p>
                </div>
              </div>

              <div className="mb-4">
                <span className="font-semibold">Decripstion: “</span>
                <span><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</i></span>
                <span className="font-semibold">”</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg mt-8 shadow-lg">
          <div className="px-8 pt-6">
            <div className="flex text-[#9A9A9A] font-semibold text-lg">
              <div className="w-1/3 text-center"><span className="">Name</span></div>
              <div className="w-[20%] ml-[0.8rem] text-center"><span className="">Progess</span></div>
              <div className="w-1/6 ml-[1.4rem] text-center">Weight</div>
              <div className="w-1/6 ml-[0.7rem] text-center">Status</div>
            </div>

            <div className="px-10 mt-3 pb-3 scrollbars-hidden overflow-y-scroll max-h-[15rem]">
              {data.tasksList.map((task, i) => {
                return (
                  <div key={i} onClick={(e) => handleOnClickTask(e, task)}>
                    <DetailTask data={task} />
                  </div>
                )
              })}

              <div>
                <div className="w-[68.5rem] inline-block pt-2 cursor-pointer hover:bg-slate-100">
                  <div className="inline-flex items-center pr-8">
                    <div className="ml-8 p-2 rounded-[50%] inline-flex bg-[#FEF1D1]">
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="21" height="21" viewBox="0,0,256,256" fontStyle="fill:#000000;">
                        <g fill="#ffffff" fillRule="evenodd" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" fontStyle="mix-blend-mode: normal"><g transform="scale(10.66667,10.66667)"><path d="M11,2v9h-9v2h9v9h2v-9h9v-2h-9v-9z"></path></g></g>
                      </svg>
                    </div>
                    <span className="ml-4 text-base w-60 task-title italic text-[#A7A1A1]">Add new task</span>
                  </div>
                  <div className="mt-2" style={{ border: `0.01rem solid #DFDFDF` }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <EditKpiPopUp popUpToggle={editToggle} setPopUpToggle={setEditToggle} />
        <TaskDetailPopUp title={taskDetail.title} event={taskDetail} popUpToggle={detailTaskToggle} setPopUpToggle={setDetailTaskToggle} />
        <NewTaskPopUp popUpToggle={newTaskPopUpToggle} setPopUpToggle={setNewTaskPopUpToggle} />
      </div>
  )
}
