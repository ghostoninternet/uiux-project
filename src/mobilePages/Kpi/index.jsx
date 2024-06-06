import { Link } from "react-router-dom"
import Time from "../../components/Time/Time"
import MobileKpi from "../../mobileComponents/Kpi"

function Kpi() {
    return (
      <div className="pt-4 h-[100%] relative">
        <div className="h-auto">
          <div className="flex justify-between items-center">
            <div>
              <div className="font-bold text-2xl">KPI List</div>
              <Time moblie={true}/>
            </div>
              <Link to={'/mobile/kpi/create'} className="text-lg bg-[#FABB18] px-4 py-2 font-semibold rounded-lg hover:cursor-pointer">New KPI</Link>
          </div>
        </div>
        <div className="absolute top-20 bottom-0 w-[100%] overflow-y-scroll scrollbars-hidden">
          <div className="pb-4">
            <div className="">
              <MobileKpi title={'Teaching quality'}/>
            </div>
            <div className="mt-4">
              <MobileKpi title={'Research'}/>
            </div>
            <div className="mt-4">
              <MobileKpi title={'Teaching quality 2'}/>
            </div>
            <div className="mt-4">
              <MobileKpi title={'Research 2'}/>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Kpi