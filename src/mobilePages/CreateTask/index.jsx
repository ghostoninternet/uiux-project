import CustomWidthInput from "../../mobileComponents/Input/CustomWidthInput";
import OneLineInput from "../../mobileComponents/Input/OneLineInput";
import MobileTitle from "../../mobileComponents/MobileTitle";
import { FaRegCalendarAlt } from "react-icons/fa";
import { PiTargetBold } from "react-icons/pi";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";


function CreateTask() {
    return ( 
        <div>
            <MobileTitle title={'Create New Task'}/>
            <div className="px-6 mt-10">
                <OneLineInput title={'Task Title or type ‘/’ for command'} />
                <div className="font-bold text-xl mt-10 mb-4">How to evaluate</div>
                <OneLineInput title={'How to evaluate'} />
                <div className="font-bold text-xl mt-10 mb-4">Targets</div>
                <div className="mb-6">
                    <OneLineInput title={'Targets'} />
                </div>
                <CustomWidthInput title={'Add description'} width={'9rem'}/>
                <div className="flex justify-between mt-6">
                    <div className="mt-4 px-4 py-2 rounded-xl inline-flex items-center bg-[#FFF8E8]">
                        <div className="mr-2"><FaRegCalendarAlt fontSize={'2rem'}/></div>
                        <div className="text-lg">Due date</div>
                    </div>
                    <div className="flex mt-4 items-center">
                        <div className="px-4 py-2 rounded-xl inline-flex items-center bg-[#FFF8E8]">
                            <div className="mr-2"><PiTargetBold fontSize={'2rem'}/></div>
                            <div className="text-lg">Weight</div>
                        </div>
                        <div className="bg-[#000000] h-[100%] flex items-center rounded-xl ml-6"><PiDotsThreeOutlineVerticalFill fontSize={'1.3rem'} color="#ffffff"/></div>
                    </div>
                </div>

                <div className="flex justify-center mt-8">
                    <div className="bg-[#FABB18] text-xl py-2 px-4 rounded-xl font-semibold">Create Task</div>
                </div>
            </div>
        </div>
    )
}

export default CreateTask;