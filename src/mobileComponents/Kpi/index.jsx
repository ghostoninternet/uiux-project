import { Link } from "react-router-dom";
import MobileTask from "../Task";
import { useState } from "react";
import { FaAngleDown, FaAngleUp , FaArrowRight } from "react-icons/fa";

function Kpi({ title }) {
    const [expand,setExpand] = useState(true)
    return ( 
        <div className="shadow-[0_3px_10px_0px_rgba(0,0,0,0.1)] rounded-xl px-4 pt-4 pb-2 border-[1px] border-gray-200">
            <div className="flex pb-2 justify-between">
                <div className="flex" onClick={() => setExpand(!expand)}>
                    <div className="flex items-center translate-y-[-5%]">{expand?<FaAngleDown /> : <FaAngleUp />}</div>
                    <div className="ml-4 font-bold text-xl">{title}</div>
                </div>
                <Link to={'view-detail'}><FaArrowRight  className="mt-1" fontSize={18}/></Link>
            </div>

            {expand && <div className="flex flex-col gap-2">
                <div className="">
                    <MobileTask title={'Quality of project'} completedPercent={60} time={'1.3'}/>
                </div>
                <div className="mt-1">
                    <MobileTask title={'Student review'} completedPercent={40} time={'1'}/>
                </div>
                <div className="mt-1">
                    <MobileTask title={'Assignment 1'} completedPercent={80} time={'1.8'}/>
                </div>
            </div> }
        </div>
    )
}

export default Kpi;