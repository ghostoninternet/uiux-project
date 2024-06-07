import DatePicker from "../../components/Input/DatePicker";
import MobileTitle from "../../mobileComponents/MobileTitle";
import { FileIcon } from "../../mobileComponents/Svg";
import { FaTrash } from "react-icons/fa";
import { FaSave } from "react-icons/fa";

function MobileTaskDetail() {
  return (
    <div className="h-[calc(100vh-5rem)] relative">
      <div className="w-[100%] fixed top-0">
        <MobileTitle title={"Task Details"} />
      </div>
      <div className="px-6 absolute top-[4rem] h-[calc(100vh-10rem)] overflow-y-scroll scrollbars-hidden">
        <div className="mt-10 text-xl border-b border-[#D2D2D2] pb-2">
          Teaching quality / Quality of project
        </div>
        <div className="mt-4 flex justify-between items-center mx-2">
          <div className="font-bold text-2xl">Quality of project</div>
          <div className="flex items-center">
            <div className="mr-3">
              <FileIcon />
            </div>
            <div>
              <FaTrash fontSize={"1.65rem"} color="#C93400" />
            </div>
          </div>
        </div>
        <div className="px-1 mt-5">
          <div className="flex justify-between">
            <div className="bg-[#FFF8E8] w-[15rem] py-3 rounded-xl text-center font-medium">
              Number of groups completed
            </div>
            <div className="">
              <label htmlFor="">
                <input
                  type="text"
                  className="w-20 h-[100%] bg-[#D9D9D9] rounded-lg"
                />
              </label>
            </div>
          </div>
        </div>
        <div className="px-1 mt-5">
          <div className="flex justify-between">
            <div className="bg-[#FFF8E8] w-[15rem] py-3 rounded-xl text-center font-medium">
              Number of groups
            </div>
            <div className="">
              <label htmlFor="">
                <input
                  type="text"
                  className="w-20 h-[100%] bg-[#D9D9D9] rounded-lg"
                />
              </label>
            </div>
          </div>
        </div>
        <div className="px-1 mt-5">
          <div className="flex justify-between">
            <div className="bg-[#FFF8E8] w-[15rem] py-3 rounded-xl text-center font-medium">
              Weight
            </div>
            <div className="">
              <label htmlFor="">
                <input
                  type="text"
                  className="w-20 h-[100%] bg-[#D9D9D9] rounded-lg"
                />
              </label>
            </div>
          </div>
        </div>

        <div className="mt-10 w-auto h-[0.12rem] bg-[#D2D2D2]/[0.6]"></div>
        <div className="mx-2">
          <div className="mt-10 font-bold text-2xl">Description</div>
          <div className="mt-4 font-[450]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </div>

          <div className="flex mt-6">
            <div className="font-[450]">
              <DatePicker />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end mt-10 mb-8">
          <div className="bg-[#FABB18] flex items-center rounded-xl">
            <div className="text-[#ffffff] font-bold text-xl px-3 py-1">
              Save
            </div>
            <div className="pr-3">
              <FaSave fontSize={20} color="#ffffff" className="my-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileTaskDetail;
