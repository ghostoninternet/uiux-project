import {    ProfileAvatar} from "./components/Svg"
import { DarkDashboard, KPI } from "../Svg/MenuBarIcon"
import { CirclePlus } from "../Svg/Plus"
import ClipLoader from "react-spinners/ClipLoader";
import { useEffect, useState } from "react"
import MobileTitle from "../../mobileComponents/MobileTitle";
function NoHeaderMobileLayout({children}) {
  const [loading, setLoading] = useState(false)

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
      
    </div>
  )
}

export default NoHeaderMobileLayout