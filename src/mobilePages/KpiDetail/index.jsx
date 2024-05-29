
import { Link } from "react-router-dom";
import { SimplePlus } from "../../components/Svg/Plus";
import StatusButton from "../../components/Task/components/StatusButton";
import MobileTitle from "../../mobileComponents/MobileTitle";
import { FileIcon, MobileYellowFolder } from "../../mobileComponents/Svg";
import StatusTask from "../../mobileComponents/Task/StatusTask";

function MobileKpiDetail() {
    return ( 
        <div>
            <MobileTitle title={'KPI Details'}/>
            <div className="px-6 mt-10">
                <div className="flex items-center justify-between mb-8">
                    <div className="font-bold text-2xl">Teaching Quality</div>
                    <div className="translate-y-1"><FileIcon /></div>
                </div>

                <div className="mt-6">
                    <div className="grid grid-cols-[60%_40%] w-[100%]">
                        <div className="text-[#9A9A9A] text-lg ml-[3.3rem] mb-4">Name</div>
                        <div className="text-[#9A9A9A] text-lg ml-[3rem] mb-4">Status</div>

                        <StatusTask name='Quantity' status='Late' first={true}/>
                        <StatusTask name='Student review 1' status='In progress'/>
                        <StatusTask name='Assignment 1' status='Done'/>
                        <StatusTask name='Assignment 2' status='Done'/>
                        <StatusTask name='Student review 2' status='Late'/>
                        <StatusTask name='Assignment 3' status='In progress'/>
                    </div>
                </div>

                <div className="mt-8">
                    <div className="flex justify-center select-none">
                        <Link to={'/mobile/kpi/task/create'} className="inline-flex bg-[#FABB18] rounded-xl px-4 py-1">
                            <div className="flex items-center pr-2 py-2">
                                <SimplePlus />
                            </div>
                            <p className="font-semibold leading-[32px]">Add Task</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileKpiDetail;