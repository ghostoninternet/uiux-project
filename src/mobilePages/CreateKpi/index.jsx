import CustomWidthInput from "../../mobileComponents/Input/CustomWidthInput";
import OneLineInput from "../../mobileComponents/Input/OneLineInput";
import MobileTitle from "../../mobileComponents/MobileTitle";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineFlag } from "react-icons/md";
import { ExcelLogo, WordLogo } from "../../mobileComponents/Svg";


function MobileCreateKpi() {
    return ( 
        <div className="h-[calc(100vh-5rem)] relative">
            <div className="w-[100%] fixed top-0"><MobileTitle title={'Create new KPI'}/></div>
            <div className="w-[100%] px-6 absolute top-[5rem] h-[calc(100vh-10rem)] overflow-y-scroll scrollbars-hidden">
                <div className="">
                    <div className="w-[100%] h-[0.15rem] bg-[#D2D2D2] mt-12"></div>
                    <div className="mt-8">
                        <OneLineInput title={"KPI Title or type ‘/’ for command"}/>
                    </div>
                    <div className="mt-4">
                        <CustomWidthInput title={'Add description'} width={'6rem'}/>
                    </div>
                </div>

                <div className="flex justify-between mt-8">
                    <div className="bg-[#000000] inline-flex items-center rounded-lg px-3 py-1">
                        <FaRegCalendarAlt fontSize={'2rem'} color="white"/>
                        <div className="text-[#ffffff] ml-3 font-semibold">Start date - Due date</div>
                    </div>
                    <div className="bg-[#000000] inline-flex items-center rounded-lg px-3 py-1">
                        <MdOutlineFlag color="white" fontSize={'2rem'}/>
                        <div className="text-[#ffffff] ml-3 font-semibold">Type</div>
                    </div>
                </div>

                <div className="flex justify-between mt-8 items-center">
                    <div className="flex-auto h-[0.15rem] bg-[#D2D2D2]"></div>
                    <div className="w-24 text-center">Or upload</div>
                    <div className="flex-auto h-[0.15rem] bg-[#D2D2D2]"></div>
                </div>

                <div className="flex w-[100%] justify-center mt-8">
                    <div className="mr-4"><WordLogo /></div>
                    <div className="ml-4"><ExcelLogo /></div>
                </div>

                <div className="flex w-[100%] justify-center mt-8 mb-8">
                    <div className="inline-flex justify-center font-semibold text-xl bg-[#FABB18] px-4 py-2 rounded-xl">Create new KPI</div>
                </div>
            </div>
        </div>
    )
}

export default MobileCreateKpi;