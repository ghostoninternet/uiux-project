import { useState } from "react"
import { KpiData } from "../../api/KpiApi"
import BarChart from "../../components/Chart/BarChart"
import LineChart from "../../components/Chart/LineChart"
function Chart() {
    const [bar, setBar] = useState(true)
    const [line, setLine] = useState(false)

    const handleBarClick = () => {
        setBar(true)
        setLine(false)
    }

    const handleLineClick = () => {
        setBar(false)
        setLine(true)
    }


  return (
    <div className="p-10 flex gap-10 flex-col">
         <div className="p-5 bg-white shadow-lg rounded-2xl flex space-x-6">
           <h1 className="font-bold text-lg">Select Graph</h1>
            <button className="border-2 border-yellow-400 rounded-lg px-5 font-semibold" onClick={handleBarClick}>All kpi&apos;s process</button>
            <button className="border-2 border-yellow-400 rounded-lg px-5 font-semibold" onClick={handleLineClick}>KPi detail increase process by time</button>
        </div>
        <div className="p-5 bg-white min-h-36 shadow-lg rounded-xl w-4/5 mx-auto">
            <h1 className="font-bold text-2xl mb-5">All Kpi&apos;s process</h1>
            {bar && <BarChart />}
            {line && <LineChart label={true}/>}
        </div>
    </div>
  )
}

export default Chart