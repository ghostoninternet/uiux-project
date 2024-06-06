import CustomWidthInput from "../../mobileComponents/Input/CustomWidthInput";
import OneLineInput from "../../mobileComponents/Input/OneLineInput";
import MobileTitle from "../../mobileComponents/MobileTitle";
import { FaRegCalendarAlt, FaPlusCircle } from "react-icons/fa";
import { MdOutlineFlag } from "react-icons/md";
import { ExcelLogo, WordLogo } from "../../mobileComponents/Svg";


function MobileCreateKpi() {
    return ( 
        <div className="h-[100vh] relative">
            <div className="w-[100%] fixed top-0"><MobileTitle title={'Create new KPI'}/></div>
            <div className="w-[100%] px-6 absolute top-[5rem] h-[calc(100vh-5rem)] overflow-y-scroll scrollbars-hidden">
                <div className="">
                    <div className="mt-8">
                        <div className="font-bold text-xl mt-8 mb-4">Task title</div>
                        <OneLineInput title={"KPI Title or type ‘/’ for command"}/>
                    </div>
                    <div className="mt-4">
                    <div className="font-bold text-xl mt-8 mb-4">Task description</div>
                        <CustomWidthInput title={'Add description'} width={'6rem'}/>
                    </div>
                </div>

                <div className="flex justify-between mt-8 ">
                    <div className="bg-[#FFF8E8] inline-flex items-center rounded-lg px-5 py-2">
                        <FaRegCalendarAlt fontSize={25} color="black"/>
                        <div className="text-[#000] ml-3 font-semibold">Start date - Due date</div>
                    </div>
                    <div className="bg-[#FFF8E8] inline-flex items-center rounded-lg px-5 py-2">
                        <MdOutlineFlag color="black" fontSize={'2rem'}/>
                        <div className="text-[#000] ml-3 font-semibold">Type</div>
                    </div>
                </div>

                <div className="flex justify-between mt-8 items-center">
                    <div className="flex-auto h-[0.15rem] bg-[#D2D2D2] rounded-lg"></div>
                    <div className="w-24 text-center font-semibold">Or upload</div>
                    <div className="flex-auto h-[0.15rem] bg-[#D2D2D2] rounded-lg"></div>
                </div>

                <div className="flex w-[100%] justify-center mt-8">
                    <div className="mr-4"><WordLogo /></div>
                    <div className="ml-4"><ExcelLogo /></div>
                </div>

                <div className="flex w-[100%] justify-center mt-8 mb-8">
                    <div className="inline-flex justify-center font-semibold text-xl bg-[#FABB18] px-4 py-2 rounded-xl gap-2">
                        <FaPlusCircle className="my-auto" fontSize={20}/>
                        Create new KPI
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileCreateKpi;