import ShowMore from "../Svg/ShowMore"


function PercentCard({ title, value }) {
  return (
    <div className="p-7 w-1/3 bg-white min-h-36 shadow-lg rounded-xl flex flex-col justify-between">
      <div className="flex justify-between">
      <h1 className="font-bold text-xl">{title}</h1>
      <ShowMore />
      </div>
      <div className="flex justify-between">
        <h1 className="font-semibold text-2xl">{value}%</h1>
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