import { useState } from "react"
import Tab from "./components/Tab"
import Apperance from "./components/Apperance"
import Account from "./components/Account"
import Notification from "./components/Notification"
import Lang from "./components/Lang"
export default function Setting() {
  const [selectedTab, setSelectedTab] = useState("Appearance")

  return (
    <div className="w-full p-8">
      <div className="w-full bg-white flex shadow-2xl rounded-2xl h-[42rem]">
        <div className="w-1/5 min-w-[24rem] pt-12 px-10 border-gray-200 border-r-2 py-5">
          <h1 className="text-lg text-gray-500 mb-5 ml-2 font-semibold">Settings</h1>
          <Tab selectedTab={selectedTab} setSelectedTab={setSelectedTab} tabTitle={"Appearance"} />
          <Tab selectedTab={selectedTab} setSelectedTab={setSelectedTab} tabTitle={"Account setting"} />
          <Tab selectedTab={selectedTab} setSelectedTab={setSelectedTab} tabTitle={"Notification"} />
          <Tab selectedTab={selectedTab} setSelectedTab={setSelectedTab} tabTitle={"Language"} />
        </div>
        <div className="w-4/5 min-w-[48rem] mb-5  overflow-y-scroll">
        <h1 className="mb-5 font-bold text-4xl pt-6 pl-6">{selectedTab}</h1>
          <div className="pt-2 pl-10">
            {selectedTab == "Appearance"  && <Apperance />}
            {selectedTab == "Account setting"  && <Account />}
            {selectedTab == "Notification"  && <Notification />}
            {selectedTab == "Language"  && <Lang />}
          </div>
        </div>
      </div>
    </div>
  )
}