import ShowMore from "../Svg/ShowMore"


function PercentCard({ title, value }) {
  const KPIcompletedDeg = value * 360 / 100
  const KPIcompleted = value
  
  return (
    <div className="p-7 w-1/3 bg-white min-h-36 shadow-lg rounded-xl flex flex-col justify-between relative">
      <div className="big-circle w-36 h-36 top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]" 
          style={{
              backgroundImage: `conic-gradient(
                  #FABB18 0deg, #FABB18 ${KPIcompletedDeg}deg,
                  #F5F5F5 ${KPIcompletedDeg}deg
              )`}}>
          <div className="small-circle w-[7rem] h-[7rem]"></div>
          <p className="absolute top-[3rem] text-[#737373] text-sm font-medium">Completed</p>
          <p className="absolute top-[4.2rem] text-[#0A0A0A] text-2xl font-bold">{KPIcompleted}%</p>
      </div>
      <div className="flex justify-between">
      <h1 className="font-bold text-xl">{title}</h1>
      <ShowMore />
      </div>
      <div className="flex justify-between">
        <div className="p-2 bg-[#FABB18] rounded-lg">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 3V21M12 3L9 6M12 3L15 6M12 21L15 18M12 21L9 18M3 12H21M3 12L6 15M3 12L6 9M21 12L18 9M21 12L18 15" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default PercentCard