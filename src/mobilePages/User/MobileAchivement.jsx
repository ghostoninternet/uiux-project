import Achivement from "../../pages/Profile/components/Achivement"

function ProfileAchivementComponent( {hiew} ) {
  let css = "flex flex-col gap-10 pb-10 scrollbars-hidden overflow-auto max-h-[40rem] "
  let css1 = "mx-auto rounded-2xl shadow-2xl flex flex-col"
  if (hiew) {
    css = 'flex flex-col gap-10 pb-10 max-h-[40rem]'
    css1 = "mx-auto rounded-2xl flex flex-col"
  }
  return (
    <div className={css1}>
      <div className="w-[90%] mx-auto">
        <div className="text-2xl font-bold my-5">
          {"Achivements"}
        </div>
        <div className={css}>
          <Achivement achivementTitle={"Done 10 task in one day"} achivementDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam laoreet tellus ut tincidunt euismod"} />
          <Achivement achivementTitle={"Done 10 task in one day"} achivementDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam laoreet tellus ut tincidunt euismod"} />
          <Achivement achivementTitle={"Done 10 task in one day"} achivementDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam laoreet tellus ut tincidunt euismod"} />
          {
            !hiew?
            <Achivement achivementTitle={"Done 10 task in one day"} achivementDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam laoreet tellus ut tincidunt euismod"} />:
            <div className="pb-4"><Achivement achivementTitle={"Done 10 task in one day"} achivementDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam laoreet tellus ut tincidunt euismod"} /></div>
          }
        </div>
      </div>
    </div>
  )
}

export default ProfileAchivementComponent