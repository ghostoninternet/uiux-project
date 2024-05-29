import {    ProfileAvatar} from "./components/Svg"
import { DarkDashboard, KPI } from "../Svg/MenuBarIcon"
import { CirclePlus } from "../Svg/Plus"
import Search from "../Svg/Search"
import BellBlack from "../Svg/BellBlack"
import ClipLoader from "react-spinners/ClipLoader";
import { useEffect, useState } from "react"
function MobileLayout({children}) {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  },[])

  return (
    <div className="bg-[#FFF8E8] h-screen relative overflow-hidden">
      <div className="h-auto py-6 px-3">
        <div className="w-[100%] flex justify-between items-center">
          <div className="flex justify-start items-center gap-2">            
            <div className="text-2xl text-black font-bold flex gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="none" viewBox="0 0 44 51">
              <path fill="#FABB18" d="M13.997 13.587C6.294 21.048 0 27.273 0 27.397c0 .123 5.348 5.385 11.873 11.734l11.874 11.513h5.02c4.787 0 5-.025 4.594-.445-.231-.222-5.598-5.435-11.912-11.537-6.313-6.127-11.468-11.191-11.448-11.29.038-.173.154-.296 15.58-15.242A7410.311 7410.311 0 0 0 37.744.32c.232-.247-.753-.296-4.73-.321h-5.02L13.997 13.587Z"/>
              <path fill="#FABB18" d="M39.632 3.3c-1.821 1.812-6.849 6.774-11.137 11.042-4.307 4.268-7.95 7.816-8.101 7.89-.152.075-.588-.148-.949-.52l-.664-.67-2.352 2.332c-1.29 1.265-2.353 2.407-2.372 2.506-.038.124 1.347 1.613 3.074 3.3l3.13 3.127 8.31-8.238 8.31-8.238.095 17.32.095 17.344 2.997.074 2.98.075V25.309c0-13.92-.02-25.309-.039-25.309-.038 0-1.556 1.489-3.377 3.3ZM6.15 14.47c0 2.475.06 4.521.121 4.521.183 0 5.15-4.355 5.15-4.521 0-.167-4.967-4.522-5.15-4.522-.06 0-.121 2.023-.121 4.522Zm0 25.824c0 2.77.08 4.974.16 4.923.478-.231 5.19-4.948 5.11-5.102-.16-.359-4.851-4.845-5.05-4.845-.16 0-.22 1.64-.22 5.024Z"/>
            </svg>
              <h1 className="text-[#FABB18]">KPI Master</h1>
            </div>
          </div>
          <div className="flex gap-9">
            <BellBlack size={30}/>
            <Search size="25"/>
          </div>
        </div>
      </div>
      <div className="h-5/6 bg-white px-8 overflow-scroll">
        {loading ?
          <div className="flex items-center justify-center h-full"> 
            <ClipLoader
            color={'#FABB18'}
            loading={loading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
            speedMultiplier={0.5}
          />
         </div>
        : children}
      </div>
      <div className="h-auto w-[100%] absolute bg-[#FFF8E8] bottom-0 rounded-t-[20px] py-3">
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

          <div className="flex justify-center items-center flex-col gap-2">
            <ProfileAvatar />
            <h1 className="text-xs font-semibold">You</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileLayout