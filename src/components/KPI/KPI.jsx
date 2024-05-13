import DownArrow from "../Svg/DownArrow";
import RightArrow from "../Svg/RightArrow";
import { SimplePlus } from "../Svg/Plus";
import '../KPI/index.css'
import Task from "./components/Task/Task";
import { useNavigate } from "react-router-dom";


function KPI({title, KPIcompleted, tasksList, taskCLick, setTaskDetail, setNewTask }) {
    let KPIcompletedDeg = KPIcompleted * 360 / 100
    // let splitStr = title.toLowerCase().split(' ');
    // for (var i = 0; i < splitStr.length; i++) {
    //     splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    // }
    // let noWhitespaceTitle = splitStr.join(' ').replace(/ /g,'')
    const navigate = useNavigate()
    const handleViewMoreClick = () => {
        navigate({
            pathname: 'view-detail',
            search: `?title=${title}`
        })
    }

    return ( 
        <div className="bg-white rounded-lg px-6 min-h-72 shadow-md">
            <div className="pt-3 flex justify-between">
                <div className="flex">
                    <div className="flex items-center mr-2 relative top-[-4px]">
                        <DownArrow />
                    </div>
                    <h1 className="font-bold text-xl">{title}</h1>
                </div>

                <div className="flex bg-[#FABB18] rounded-lg items-center py-1.5 hover:cursor-pointer select-none" onClick={()=> handleViewMoreClick()}>
                    <div className="text-center ml-3 text-[#ffffff]">View more</div>
                    <div className="px-2">
                        <RightArrow />
                    </div>
                </div>
            </div>

            <div>
                <div className="flex relative">
                    <p className="font-semibold mr-6">To do list</p>
                    <div className="flex bg-[#FABB18] rounded-xl px-2.5 select-none hover:cursor-pointer">
                        <div className="flex items-center pr-2 py-2">
                            <SimplePlus />
                        </div>
                        <p className="font-semibold leading-[32px]" onClick={() => setNewTask('')}>add task</p>
                    </div>

                    <div className="big-circle w-36 h-36" 
                        style={{
                            backgroundImage: `conic-gradient(
                                #FABB18 0deg, #FABB18 ${KPIcompletedDeg}deg,
                                #F5F5F5 ${KPIcompletedDeg}deg
                            )`}}>
                        <div className="small-circle w-[7rem] h-[7rem]"></div>
                        <p className="absolute top-[3rem] text-[#737373] text-sm font-medium">Completed</p>
                        <p className="absolute top-[4.2rem] text-[#0A0A0A] text-2xl font-bold">{KPIcompleted}%</p>
                        <p className="absolute top-[102%] text-[#0A0A0A] text-xs font-medium">
                            <span className="text-[#FABB18]">11</span>
                            <span> / 14 Tasks</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-2 overflow-y-scroll max-h-72 scrollbars-hidden">
                {tasksList.map((e, i) => {
                    return <Task key={i} event={e} taskClick={taskCLick} setTaskDetail={setTaskDetail}/>
                })}
            </div>
        </div>
    )
}

export default KPI;