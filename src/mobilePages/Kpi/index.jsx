import Time from "../../components/Time/Time"
import MobileKpi from "../../mobileComponents/Kpi"

function Kpi() {
    return (
      <div className="pt-4 h-[100%] relative">
        <div className="h-auto">
          <div className="flex justify-between items-center">
              <div className="font-bold text-2xl">KPI List</div>
              <div className="text-lg bg-[#FABB18] py-[0.6rem] px-[1.4rem] rounded-[1.2rem] hover:cursor-pointer">New KPI</div>
          </div>
          <div className="mt-[0.4rem]">
              <Time moblie={true}/>
          </div>
        </div>
        <div className="absolute top-28 bottom-0 w-[100%] overflow-y-scroll scrollbars-hidden">
          <div className="pb-4">
            <div className="">
              <MobileKpi title={'Teaching quality'}/>
            </div>
            <div className="mt-4">
              <MobileKpi title={'Teaching quality'}/>
            </div>
            <div className="mt-4">
              <MobileKpi title={'Teaching quality'}/>
            </div>
            <div className="mt-4">
              <MobileKpi title={'Teaching quality'}/>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Kpi