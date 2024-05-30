import {    ProfileAvatar} from "./components/Svg"
import { DarkDashboard, KPI } from "../Svg/MenuBarIcon"
import { CirclePlus } from "../Svg/Plus"
import Search from "../Svg/Search"
import BellBlack from "../Svg/BellBlack"
import ClipLoader from "react-spinners/ClipLoader";
import { FaCog } from "react-icons/fa";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
function UserLayout({children}) {
  const [loading, setLoading] = useState(false)

  // useEffect(() => {
  //   setLoading(true)
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 200)
  // },[])

  return (
    <div className="h-screen relative">
      <div className="h-[4.5rem] py-6 px-5 fixed w-[100%] z-10">
        <div className="w-[100%] flex justify-between items-center">
          <div className="flex justify-start items-center gap-2">            
          </div>
          <div className="flex gap-7">
            <BellBlack size={30}/>
            <Search size="25"/>
            <Link to="/mobile/settings">
            <FaCog fontSize={25}/>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-white relative top-[4.5rem] h-[calc(100vh-10rem)]">
        {loading ?
          <div className="flex items-center justify-center h-full"> 
            <ClipLoader
            color={'#FABB18'}
            loading={loading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
         </div>
        : children}
      </div>
      <div className="h-[5rem] w-[100%] fixed bg-[#FFF8E8] bottom-0 rounded-t-[20px] py-3">
        <div className="w-[100%] flex justify-between px-5 items-center">
          <div className="flex justify-center items-center flex-col gap-2">
            <DarkDashboard />
            <h1 className="text-xs font-semibold">Dashboard</h1>
          </div>

          <div className="flex justify-center items-center flex-col gap-2">
            <KPI />
            <h1 className="text-xs font-semibold">KPI</h1>
          </div>

          <div className="flex justify-center items-center flex-col gap-2">
            <CirclePlus />
          </div>

          <div className="flex justify-center items-center flex-col gap-2">
            <img width="35" height="35" src="https://img.icons8.com/material/24/calendar--v1.png" alt="calendar--v1"/>
            <h1 className="text-xs font-semibold">Calendar</h1>
          </div>

          <div className="flex justify-center items-center flex-col gap-1">
            <div className="p-[0.4px] border-[1.5px] border-yellow-400 rounded-full">
                    <ProfileAvatar />
            </div>
            <h1 className="text-xs font-semibold">You</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserLayout