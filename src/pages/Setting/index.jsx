import { useState } from "react"
import Tab from "./components/Tab"

export default function Setting() {
  const [selectedTab, setSelectedTab] = useState('general')

  return (
    <div className="w-full p-10">
      <div className="w-full bg-white flex shadow-2xl rounded-2xl">
        <div className="w-[25%] min-w-[24rem] pt-12 px-10">
          <Tab selectedTab={selectedTab} setSelectedTab={setSelectedTab} tabTitle={"General"} />
          <Tab selectedTab={selectedTab} setSelectedTab={setSelectedTab} tabTitle={"Account"} />
          <Tab selectedTab={selectedTab} setSelectedTab={setSelectedTab} tabTitle={"Notification"} />
          <Tab selectedTab={selectedTab} setSelectedTab={setSelectedTab} tabTitle={"Language"} />
        </div>

        <div className="bg-gray-200 w-[0.25%]"></div>

        <div className="w-[74.75%] min-w-[48rem] pt-12 pl-10">
          <div className="text-4xl font-[625] mb-8">
            Select Theme
          </div>
          <div className="w-3/12 flex justify-around mb-8">
            <div className="cursor-pointer w-16 h-16 bg-white border-[2px] rounded-3xl"></div>
            <div className="cursor-pointer w-16 h-16 bg-black border-[2px] border-black rounded-3xl"></div>
            <div className="cursor-pointer w-16 h-16 bg-gray-400 border-[2px] border-gray-400 rounded-3xl"></div>
          </div>
          <div className="text-4xl font-[625] mb-8">
            Font Size
          </div>
          <div className="w-3/12 mb-20 pl-10">
            <span className="cursor-pointer text-[1.5rem] mr-14">Aa</span>
            <span className="cursor-pointer text-[2.5rem] mr-10">Aa</span>
            <span className="cursor-pointer text-[3.5rem]">Aa</span>
          </div>
          <div className="font-[625] text-xl mb-5">
            Are you sure you want to quit ?
          </div>
          <button className="mb-[9.1rem] w-[10rem] border-[6px] border-[#FABB18] rounded-2xl py-3 text-center font-semibold text-[#FABB18] text-xl">
            Log out
          </button>
        </div>
      </div>
    </div>
  )
}