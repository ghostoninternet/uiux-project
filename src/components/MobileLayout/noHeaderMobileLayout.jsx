import {    ProfileAvatar} from "./components/Svg"
import { DarkDashboard, KPI } from "../Svg/MenuBarIcon"
import { CirclePlus } from "../Svg/Plus"
import ClipLoader from "react-spinners/ClipLoader";
import { Fragment, useEffect, useState } from "react"
import MobileTitle from "../../mobileComponents/MobileTitle";
import { MdDashboard } from "react-icons/md";
import { BsFillBarChartFill } from "react-icons/bs";
import { FaCalendarAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
function NoHeaderMobileLayout({children}) {
  const [loading, setLoading] = useState(false)
  const location = useLocation()
  const [currentActive, setCurrentActive] = useState('')
  useEffect(() => {
    setCurrentActive(location.pathname.split('/')[2])
  }, [location.pathname])

  // useEffect(() => {
  //   setLoading(true)
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 200)
  // },[])

  return (
    <div className="h-screen relative">
      <div className="bg-white relative h-[calc(100vh-5rem)]">
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
          <Link to={'/mobile'} className="flex justify-center items-center flex-col gap-2">
            {
              currentActive?
              <MdDashboard fontSize={'1.9rem'}/>:
              <MdDashboard fontSize={'1.9rem'} color="#FABB18"/>
            }
            
            <h1 className="text-xs font-semibold">Dashboard</h1>
          </Link>

          <Link to={'/mobile/kpi'} className="flex justify-center items-center flex-col gap-2">
            {currentActive === 'kpi'?
              <BsFillBarChartFill fontSize={'1.9rem'} color="#FABB18"/>:
              <BsFillBarChartFill fontSize={'1.9rem'}/>}
            <h1 className="text-xs font-semibold">KPI</h1>
          </Link>

          <div className="flex justify-center items-center flex-col gap-2">
            <CirclePlus />
          </div>

          <Link to={'/mobile/calendar'} className="flex justify-center items-center flex-col gap-2">
            {currentActive === 'calendar'?
              <FaCalendarAlt fontSize={'1.9rem'} color="#FABB18"/>:
              <FaCalendarAlt fontSize={'1.9rem'}/>}
            <h1 className="text-xs font-semibold">Calendar</h1>
          </Link>

          <Link to={'/mobile/user'} className="flex justify-center items-center flex-col gap-2">
            {currentActive === 'user'?
              <Fragment>
                <div className="flex rounded-[50%] shadow-[0_0_0.8rem_#FABB18]"><ProfileAvatar /></div>
                <h1 className="text-xs font-semibold relative top-[-0.2rem]">You</h1>
              </Fragment>:
              <Fragment>
                <ProfileAvatar />
                <h1 className="text-xs font-semibold relative top-[-0.2rem]">You</h1> 
              </Fragment>}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NoHeaderMobileLayout