import Achivement from "./Achivement"

function ProfileActivityComponent() {
  return (
    <div className="w-[90%] mx-auto bg-white rounded-2xl shadow-2xl flex flex-col">
      <div className="w-[90%] mx-auto">
        <div className="text-2xl font-bold my-5">
          {"Achivements"}
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-16 pb-10">
          <Achivement achivementTitle={"Done 10 task in one day"} achivementDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam laoreet tellus ut tincidunt euismod"} />
          <Achivement achivementTitle={"Done 10 task in one day"} achivementDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam laoreet tellus ut tincidunt euismod"} />
          <Achivement achivementTitle={"Done 10 task in one day"} achivementDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam laoreet tellus ut tincidunt euismod"} />
          <Achivement achivementTitle={"Done 10 task in one day"} achivementDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam laoreet tellus ut tincidunt euismod"} />
        </div>
      </div>
    </div>)
}

export default ProfileActivityComponent