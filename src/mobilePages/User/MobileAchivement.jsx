import Achivement from "../../pages/Profile/components/Achivement"

function ProfileAchivementComponent() {
  return (
    <div className="mx-auto rounded-2xl shadow-2xl flex flex-col">
      <div className="w-[90%] mx-auto">
        <div className="text-2xl font-bold my-5">
          {"Achivements"}
        </div>
        <div className="flex flex-col gap-10 pb-10 scrollbars-hidden overflow-auto max-h-[40rem] ">
          <Achivement achivementTitle={"Done 10 task in one day"} achivementDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam laoreet tellus ut tincidunt euismod"} />
          <Achivement achivementTitle={"Done 10 task in one day"} achivementDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam laoreet tellus ut tincidunt euismod"} />
          <Achivement achivementTitle={"Done 10 task in one day"} achivementDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam laoreet tellus ut tincidunt euismod"} />
          <Achivement achivementTitle={"Done 10 task in one day"} achivementDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam laoreet tellus ut tincidunt euismod"} />
        </div>
      </div>
    </div>
  )
}

export default ProfileAchivementComponent