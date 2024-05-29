import { Link } from "react-router-dom";
import DownArrow from "../../components/Svg/DownArrow";
import { MobileRightArrow } from "../Svg";
import MobileTask from "../Task";

function Kpi({ title }) {
    return ( 
        <div className="shadow-[0_3px_10px_0px_rgba(0,0,0,0.1)] rounded-xl px-4 pt-4 pb-2">
            <div className="flex pb-2 justify-between">
                <div className="flex">
                    <div className="flex items-center translate-y-[-5%] ml-4"><DownArrow /></div>
                    <div className="ml-4 font-bold text-xl">{title}</div>
                </div>
                <Link to={'view-detail'}><MobileRightArrow /></Link>
            </div>

            <div className="">
                <MobileTask title={'Quality of project'} completedPercent={60} time={'1.3'}/>
            </div>
            <div className="mt-1">
                <MobileTask title={'Student review'} completedPercent={40} time={'1'}/>
            </div>
            <div className="mt-1">
                <MobileTask title={'Assignment 1'} completedPercent={80} time={'1.8'}/>
            </div>
        </div>
    )
}

export default Kpi;