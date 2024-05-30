import { useState } from "react";
import MobileTitle from "../../mobileComponents/MobileTitle";
import { animated, useSpring } from 'react-spring';
import Switch from "../../pages/Setting/components/Switch";
import { Google, Facebook, Apple } from "../../components/Svg/SignLogo";
import DownArrow from "../../components/Svg/DownArrow";
import { Link } from "react-router-dom";
function Settings() {
  const [activeSetting, setActiveSetting] = useState(null); // State for active setting

  const contentAnimations = {
    linkAccount: useSpring({
      height: activeSetting === "linkAccount" ? 220 : 0,
      config: { duration: 200 },
    }),
    notification: useSpring({
      height: activeSetting === "notification" ? 200 : 0,
      config: { duration: 200 },
    }),
    appearance: useSpring({
      height: activeSetting === "appearance" ? 200 : 0,
      config: { duration: 200 },
    }),
    language: useSpring({
      height: activeSetting === "language" ? 200 : 0,
      config: { duration: 200 },
    }),
  };

  const handleClick = (setting) => {
    if (setting === activeSetting) {
      setActiveSetting(null); // Close if already active
    } else {
      setActiveSetting(setting); // Open a different setting
    }
  };

  return (
    <div className="h-screen relative w-full">
      <div className="w-full fixed top-0"><MobileTitle title={'Settings'} /></div>
      <div className="px-3 absolute top-[5rem] h-[calc(100vh-7rem)] overflow-y-scroll scrollbars-hidden w-full flex flex-col justify-between">
        <div className="flex flex-col justify-center mt-5">
          <div className="text-xl py-2 px-2 font-medium border-b-2 border-gray-200 flex justify-between" onClick={() => handleClick("linkAccount")}>
            <p>Link Account</p>
            <div className="items-center py-2"><DownArrow /></div>
          </div>
          <animated.div style={contentAnimations.linkAccount} className="overflow-hidden px-5">
          <div className="flex gap-5 flex-col my-3">
            <button className="mt-2 border-2 border-[#FABB18] rounded-lg p-2  text-center font-semibold text-[#FABB18] hover:bg-[#FABB18] hover:text-white flex gap-3 w-2/3">
                <Google />Google account
            </button>
            <button className="mt-2 border-2 border-[#FABB18] rounded-lg p-2  text-center font-semibold text-[#FABB18] hover:bg-[#FABB18] hover:text-white flex gap-3 w-2/3">
                <Facebook color="#FABB18"/>Fackebook account
            </button>
            <button className="mt-2 border-2 border-[#FABB18] rounded-lg p-2  text-center font-semibold text-[#FABB18] hover:bg-[#FABB18] hover:text-white flex gap-3 w-2/3">
                <Apple color="#FABB18" />Apple account
            </button>
            </div>
            abcd
          </animated.div>

          <div className="text-xl py-2 px-2 font-medium border-b-2 border-gray-200 flex justify-between" onClick={() => handleClick("notification")}>
            <p>Notification</p>
            <div className="items-center py-2"><DownArrow /></div>
          </div>
          <animated.div style={contentAnimations.notification} className="overflow-hidden">
            <div className="my-5 flex flex-col gap-5">
                <Switch label={"All notifications"}/>
                <Switch label={"Remind notifications"}/>
                <Switch label={"Upcoming task"}/>
                <Switch label={"New update version"}/>
            </div>
          </animated.div>

          <div className="text-xl py-2 px-2 font-medium border-b-2 border-gray-200 flex justify-between" onClick={() => handleClick("appearance")}>
            <p>Appearance</p>
            <div className="items-center py-2"><DownArrow /></div>
          </div>
          <animated.div style={contentAnimations.appearance} className="overflow-hidden flex flex-col px-5">
            <div className="font-[625] mb-3 mt-3">
                Select Theme
                </div>
                <div className="flex mb-8 gap-5">
                    <div className="cursor-pointer w-8 h-8 bg-white border-[2px] rounded-full"></div>
                    <div className="cursor-pointer w-8 h-8 bg-black border-[2px] border-black rounded-full"></div>
                    <div className="cursor-pointer w-8 h-8 bg-gray-400 border-[2px] border-gray-400 rounded-full"></div>
                </div>
                <div className="font-[625] mb-3">
                Font Size
                </div>
                <div className="w-3/12 min-w-[16rem] mb-10 font-semibold">
                <span className="cursor-pointer text-xl mr-5">Aa</span>
                <span className="cursor-pointer text-2xl mr-5">Aa</span>
                <span className="cursor-pointer text-4xl">Aa</span>
            </div>
          </animated.div>

          <div className="text-xl py-2 px-2 font-medium border-b-2 border-gray-200 flex justify-between" onClick={() => handleClick("language")}>
            <p>Language</p>
            <div className="items-center py-2"><DownArrow /></div>
          </div>
          <animated.div style={contentAnimations.language} className="overflow-hidden px-6">
            <button className="mb-[9.1rem] px-3 border-2 border-[#FABB18] rounded-xl py-1 text-center font-semibold text-[#FABB18] uppercase flex bg-[#FFF8E8] mt-3">
                English
                <svg className="-mr-1 h-5 w-5 text-[#FABB18] mt-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
            </button>
          </animated.div>

        </div>
          <Link className="mt-auto border-2 border-yellow-500 text-center rounded-2xl py-1 font-bold text-lg text-yellow-500" to={'/mobile/sign-in'}>
            Log out
          </Link>
      </div>
    </div>
  );
}

export default Settings;
