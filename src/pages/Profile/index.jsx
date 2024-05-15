/* eslint-disable no-unused-vars */
import bgImage from "../../assets/Wallpaper-1.png"
import avatar from "../../assets/HGA-Avatar.png"
import { ProfileAchivement, ProfileActivity, ProfileGeneral } from "../../components/Svg/ProfileSelection"
import ProfileGeneralComponent from "./components/ProfileGeneralComponent"
import ProfileActivityComponent from "./components/ProfileActivityComponent"
import { useState } from "react"
import ProfileAchivementComponent from "./components/ProfileAchivementComponent"
import { useNavigate } from "react-router-dom";
function Profile() {
  const navigate = useNavigate();
  const [selectTab, setSelectTab] = useState('general')

  return (
    <div className="w-full flex flex-col gap-12">
      <div className="w-[90%] flex justify-between mx-auto mt-8 shadow-2xl">
        <div className="w-full">
          <div className="w-full relative">
            <img className="h-[180px] rounded-tr-2xl rounded-tl-2xl object-cover" src={bgImage} width={"100%"}/>
            <div className="absolute border-4 border-yellow-400 p-3 rounded-2xl bg-slate-500 font-bold bg-opacity-50 text-yellow-400 z-1 top-[10%] right-[2%] hover:bg-yellow-400 hover:text-white">
              <button onClick={() => navigate('edit')}>Edit Profile</button>
            </div>
          </div>
          <div className="w-full bg-white p-3 rounded-bl-2xl rounded-br-2xl relative">
            <div className="w-[45%] absolute flex gap-3 top-[-85px] left-[5%]">
              <img className="rounded-[50%] border-4 border-white min-w-[120] w-40 h-40 object-cover" src={avatar}/>
              <div className="flex flex-col justify-end mb-4 font-bold text-[1.5rem]">Hoàng Gia Anh</div>
            </div>
            <div className="w-full flex justify-end">
              <div className="w-[45%] flex justify-around align-middle">
                <div onClick={(event) => setSelectTab('general')} className="cursor-pointer" style={{ borderBottomWidth: selectTab === 'general' ? '4px' : undefined, borderBottomColor: selectTab === 'general' ? '#FABB18' : undefined }}>
                  <ProfileGeneral />
                </div>
                <div onClick={(event) => setSelectTab('activity')} className="cursor-pointer" style={{ borderBottomWidth: selectTab === 'activity' ? '4px' : undefined, borderBottomColor: selectTab === 'activity' ? '#FABB18' : undefined }}>
                  <ProfileActivity />
                </div>
                <div onClick={(event) => setSelectTab('achivement')} className="cursor-pointer" style={{ borderBottomWidth: selectTab === 'achivement' ? '4px' : undefined, borderBottomColor: selectTab === 'achivement' ? '#FABB18' : undefined }}>
                  <ProfileAchivement />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {
        selectTab === 'general' 
        ? <ProfileGeneralComponent /> 
        : selectTab === 'activity' 
        ? <ProfileActivityComponent /> 
        : <ProfileAchivementComponent />
      }
    </div>
  )
}

export default Profile