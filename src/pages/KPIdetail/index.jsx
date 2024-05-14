import { useSearchParams } from "react-router-dom";
import { KpiData } from "../../api/KpiApi";
import { Fragment, useLayoutEffect, useState } from "react";
import Time from "../../components/Time/Time";
import AddButton from "../../components/AddButton/AddButton";
import '../KPIdetail/index.css'
import DetailTask from "../../components/Task/DetailTask";

export default function index() {
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
    extendedProps: {
      evaluatuon: '',
      target: '',
      value: null,
      Taskcompleted: null,
      weight: null,
    }
  }
  const [taskDetail, setTaskDetail] = useState(taskExample)
  const [detailTaskToggle, setDetailTaskToggle] = useState('hidden')

  return (
    !data ? <Fragment /> :
    <div className="mx-8 mt-4">
      <div className="flex justify-between items-center">
          <div>
              <h2 className="text-4xl mb-2">{data.title}</h2>
              <Time />
          </div>
          <div>
              <AddButton tittle={'New KPI'}/>
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
              <div className="flex items-center ml-3">
                <svg width="20" height="19" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.477661 19.7924V25H5.81481L21.5559 9.64102L16.2187 4.43341L0.477661 19.7924ZM25.6833 5.6138C26.2383 5.07221 26.2383 4.19733 25.6833 3.65574L22.3529 0.406194C21.7978 -0.135398 20.9012 -0.135398 20.3461 0.406194L17.7416 2.94751L23.0787 8.15512L25.6833 5.6138Z" fill="black"/>
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
      
      <div className="bg-white">
        <div className="px-8 pt-6">
          <div className="flex">
            <div className="w-1/3 text-center"><span className="">Name</span></div>
            <div className="w-[20%] text-center"><span className="">Progess</span></div>
            <div className="w-1/6 text-center">Weight</div>
            <div className="w-1/6 text-center">Status</div>
          </div>

          <div className="px-10">
            <div>
              <DetailTask data={data.tasksList[0]}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
