import Time from "../../components/Time/Time"

function Kpi() {
    return (
      <div className="mt-4">
        <div className="flex justify-between items-center">
            <div className="font-bold text-2xl">KPI List</div>
            <div className="text-lg bg-[#FABB18] py-[0.6rem] px-[1.4rem] rounded-[1.2rem] hover:cursor-pointer">New KPI</div>
        </div>
        <div className="mt-[0.4rem]">
            <Time moblie={true}/>
        </div>
      </div>
    )
}

export default Kpi