import { MobileYellowFolder } from "../Svg";



function MobileTask({ title, completedPercent, time }) {

    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center flex-1">
                <div className="flex items-center">
                    <div className="bg-[#B4B1AA]/[0.1] inline-flex p-2 rounded-[50%]"><MobileYellowFolder /></div>
                    <div className="ml-2 w-32 overflow-hidden whitespace-nowrap text-ellipsis">{title}</div>
                </div>
                <div className="flex w-full ml-2 bg-[#DFDFDF] h-1 rounded-xl relative">
                    <div className={`absolute h-1 bg-[#FABB18] rounded-xl`} style={{width: `${completedPercent}%`}}></div>
                </div>
            </div>
            <div className="bg-[#FFF8E8] ml-2 p-2 py-1 rounded-xl w-16 text-center">{time}</div>
        </div>
    )
}

export default MobileTask;