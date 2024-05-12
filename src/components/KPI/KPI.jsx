import DownArrow from "../Svg/DownArrow";
import RightArrow from "../Svg/RightArrow";
import { SimplePlus } from "../Svg/Plus";

function KPI({title}) {
    return ( 
        <div className="bg-white rounded-lg px-6">
            <div className="pt-3 flex justify-between">
                <div className="flex">
                    <div className="flex items-center mr-2 relative top-[-4px]">
                        <DownArrow />
                    </div>
                    <h1 className="font-bold text-xl">{title}</h1>
                </div>

                <div className="flex bg-[#FABB18] rounded-lg items-center py-1.5 hover:cursor-pointer select-none" >
                    <div className="text-center ml-3 text-[#ffffff]">View more</div>
                    <div className="px-2">
                        <RightArrow />
                    </div>
                </div>
            </div>

            <div className="">
                <div className="flex relative">
                    <p className="font-semibold mr-6">To do list</p>
                    <div className="flex bg-[#FABB18] rounded-xl px-2.5 select-none hover:cursor-pointer">
                        <div className="flex items-center pr-2 py-2">
                            <SimplePlus />
                        </div>
                        <p className="font-semibold leading-[32px]">add task</p>
                    </div>

                    <div className="flex justify-center items-center absolute right-0 top-10 w-20 h-20 bg-black rounded-[50%]">
                        <div className="w-16 h-16 bg-white rounded-[50%]">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KPI;