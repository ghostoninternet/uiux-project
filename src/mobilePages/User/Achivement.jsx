import AchivementSvg from "../../components/Svg/AchivementSvg"


function Achivement({ achivementTitle, achivementDescription, completed = 100}) {
  return (
    <div className="w-full py-4 border-b-2 border-gray-300">
      <div className="w-full flex justify-between  px-5">
        <div className="w-[20%] flex justify-center align-middle flex-col">
            <AchivementSvg />
            <h1 className="text-center text-sm font-bold">Level 1</h1>
        </div>
        <div className="w-[75%] flex flex-col justify-between">
          <div className="font-bold text-lg flex justify-between">
            <h1>{achivementTitle}</h1>
            <h1 className="text-sm text-gray-500">{completed}%</h1>
          </div>

          <div className="flex w-full rounded bg-slate-300 h-2 my-auto">
            <div className="rounded bg-[#FABB18] h-2" style={{ width: `${completed}%`}}></div>
        </div>

          <div className="text-gray-500 text-sm">
            {achivementDescription}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Achivement