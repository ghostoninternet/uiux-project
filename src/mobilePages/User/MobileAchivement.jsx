import { FaAngleDoubleRight } from "react-icons/fa"
import Achivement from "./Achivement"
function ProfileAchivementComponent( {hiew} ) {
  let css = "flex flex-col gap-10 overflow-hidden scrollbars-hidden overflow-auto max-h-[40rem]"
  let css1 = "mx-auto rounded-2xl shadow-2xl flex flex-col"
  if (hiew) {
    css = 'flex flex-col overflow-hidden max-h-[40rem] border-2 border-gray-300 rounded-2xl'
    css1 = "mx-auto rounded-2xl flex flex-col"
  }
  return (
    <div className={css1}>
      <div className="w-[90%] mx-auto">
        <div className="text-2xl font-bold my-5 ">
          {"Achivements"}
        </div>
        <div className={css}>
          <Achivement achivementTitle={"Wildfire"} achivementDescription={"Reach a 30 day streak"} completed={50}/>
          <Achivement achivementTitle={"Sage"} achivementDescription={"Completed 10 KPI in a month"} completed={70}/>
          <Achivement achivementTitle={"Done 10 task in a day"} achivementDescription={"consectetur adipiscing elit."} />
          {
            !hiew?
            <Achivement achivementTitle={"Champion"} achivementDescription={"consectetur adipiscing elit"} />:
            <Achivement achivementTitle={"Champion"} achivementDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} />
          }
          <div className="flex px-5 gap-3 py-2"> 
              <h2 className="font-semibold leading-loose text-lg">View all</h2>
              <FaAngleDoubleRight className="my-auto"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileAchivementComponent