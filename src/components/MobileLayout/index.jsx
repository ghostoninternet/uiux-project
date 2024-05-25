import { useState } from "react"
import { Calendar, Dashboard, Help, KpiList, LogOut, Logo, MenuIcon, Profile, ProfileAvatar, Setting } from "./components/Svg"
import { DarkDashboard } from "../Svg/MenuBarIcon"

function MobileLayout({children}) {

  const [openMenuBar, setOpenMenuBar] = useState(false)
  const onClickMenuIcon = () => {
    setOpenMenuBar(!openMenuBar)
  }

  return (
    <div className="bg-[#FFF8E8] h-screen relative overflow-hidden">
      <div className="h-[10vh] pt-6 px-8">
        <div className="w-[100%] flex justify-between items-center">
          <div className="flex justify-start items-center gap-2">
            <div onClick={onClickMenuIcon} className="absolute z-20">
              <MenuIcon />
            </div>
            {
              openMenuBar && (
                <div className="absolute w-[100%] h-screen top-0 left-0 bottom-0 z-10 flex">
                  <div className="w-[75%] bg-white h-screen">
                    <div className="mt-48 flex flex-col justify-center content-center px-5">
                      <div className="mb-9">
                        <Logo />
                      </div>
                      <div className="px-6">
                        <div className="text-2xl font-bold">
                          About KPI Master
                        </div>
                        <div className="text-[15px]">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                        </div>
                        <div className="mt-9 pl-1">
                           <div className="flex justify-start items-center gap-2 mb-3">
                              <div className="mt-[0.25rem]">
                                <Setting />
                              </div>
                              <div className="text-2xl">
                                Setting
                              </div>
                           </div>
                           <div className="flex justify-start items-center gap-2 mb-3">
                              <div className="mt-[0.25rem]">
                                <Help />
                              </div>
                              <div className="text-2xl">
                                Help
                              </div>
                           </div>
                           <div className="flex justify-start items-center gap-2 mb-3">
                              <div className="mt-[0.25rem]">
                                <LogOut />
                              </div>
                              <div className="text-2xl">
                                Log out
                              </div>
                           </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[30%] bg-slate-700 h-screen opacity-20">
                  </div>
                </div>
              )
            }
            <div className="text-3xl text-black font-bold ml-[3.5rem]">
              Dashboard
            </div>
          </div>
          <div className="">
            <ProfileAvatar />
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-white rounded-t-[40px] px-8 overflow-scroll">
        {children}
      </div>
      <div className="h-[9vh] w-[100%] absolute bg-[#FFF8E8] bottom-0 rounded-t-[20px]">
        <div className="w-[100%] flex justify-center">
          <div>
            <Dashboard />
          </div>
          <div>
            <KpiList />
          </div>
          <div>
            <Calendar />
          </div>
          <div>
            <Profile />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileLayout