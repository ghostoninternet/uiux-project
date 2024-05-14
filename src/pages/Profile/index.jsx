/* eslint-disable no-unused-vars */

import bgImage from "../../assets/Wallpaper-1.png"
import avatar from "../../assets/HGA-Avatar.png"
import { ProfileAchivement, ProfileActivity, ProfileGeneral } from "../../components/Svg/ProfileSelection"
import ProfileGeneralComponent from "./components/ProfileGeneralComponent"
import ProfileActivityComponent from "./components/ProfileActivityComponent"
import { useState } from "react"

function Profile() {
  const [selectTab, setSelectTab] = useState('general')

  const selectedTabStyle = {
    borderBottomWidth: '4px',
    borderBottomColor: 'black'
  }

  return (
    <div className="w-full flex flex-col gap-10">
      <div className="w-[90%] flex justify-between mx-auto mt-8">
        <div className="w-full">
          <div className="w-full relative">
            <img className="h-[180px] rounded-tr-2xl rounded-tl-2xl" src={bgImage} width={"100%"}/>
            <div className="absolute border-4 border-yellow-400 p-3 rounded-2xl bg-slate-500 bg-opacity-50 text-yellow-400 z-1 top-[10%] right-[2%]">
              <button>Edit Profile</button>
            </div>
          </div>
          <div className="w-full bg-white p-3 rounded-bl-2xl rounded-br-2xl relative">
            <div className="w-[45%] absolute flex gap-5 top-[-85px] left-[5%]">
              <img className="rounded-[50%] min-w-[120]" src={avatar} width={"120px"}/>
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
        : null
      }
    </div>
  )
}

export default Profile