import AchivementSvg from "../../../components/Svg/AchivementSvg"

function Achivement({ achivementTitle, achivementDescription}) {
  return (
    <div className="w-full bg-[#FFF8E8] rounded-2xl py-4">
      <div className="w-full flex justify-start">
        <div className="w-[20%] flex justify-center align-middle flex-col">
            <AchivementSvg />
            <h1 className="text-center text-sm font-bold">Level 1</h1>
        </div>
        <div className="w-[70%]">
          <div className="font-bold">
            {achivementTitle}
          </div>
          
          <div>
            {achivementDescription}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Achivement