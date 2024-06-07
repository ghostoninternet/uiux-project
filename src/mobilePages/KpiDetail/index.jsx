import { Link } from "react-router-dom";
import MobileTitle from "../../mobileComponents/MobileTitle";
import { FileIcon } from "../../mobileComponents/Svg";
import StatusTask from "../../mobileComponents/Task/StatusTask";
import { FaTrash, FaPlus } from "react-icons/fa";
function MobileKpiDetail() {
  return (
    <div className="h-[calc(100vh-5rem)] relative">
      <div className="w-[100%] fixed">
        <MobileTitle title={"KPI Details"} />
      </div>
      <div className="px-6 w-[100%] absolute top-[5rem] h-[calc(100vh-10rem)] overflow-y-scroll scrollbars-hidden">
        <div className="flex items-center justify-between mb-8 mt-6">
          <div className="font-bold text-2xl">Teaching Quality</div>
          <div className="flex items-center">
            <div className="mr-3">
              <FileIcon />
            </div>
            <div>
              <FaTrash fontSize={"1.65rem"} color="#C93400" />
            </div>
          </div>
        </div>

        <div className="mt-6">
          <div className="grid grid-cols-[60%_40%] w-[100%]">
            <div className="text-[#9A9A9A] text-lg ml-[3.3rem] mb-4">Name</div>
            <div className="text-[#9A9A9A] text-lg ml-[3rem] mb-4">Status</div>

            <StatusTask name="Quantity" status="Late" first={true} />
            <StatusTask name="Student review 1" status="In progress" />
            <StatusTask name="Assignment 1" status="Done" />
            <StatusTask name="Assignment 2" status="Done" />
            <StatusTask name="Student review 2" status="Late" />
            <StatusTask name="Assignment 3" status="In progress" />
          </div>
        </div>

        <div className="mt-10 mb-8">
          <div className="flex justify-center select-none">
            <Link
              to={"/mobile/kpi/task/create"}
              className="inline-flex bg-[#FABB18] rounded-xl px-5 py-2"
            >
              <div className="flex items-center pr-2 py-2">
                {/* <SimplePlus /> */}
                <FaPlus fontSize={20} />
              </div>
              <p className="font-semibold my-auto text-lg font-semibold">
                Add Criteria
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileKpiDetail;
