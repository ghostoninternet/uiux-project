import Input from "../../components/Input";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FaUser, FaHistory, FaTrophy } from "react-icons/fa";
import "./index.css"
import MobileAcitivity from "./MobileAcitivity";
import MobileAchivement from "./MobileAchivement";
function User() {
    return (
        <Tabs>
        <TabList>
          <Tab><FaUser fontSize={25}/></Tab>
          <Tab><FaHistory fontSize={25}/></Tab>
          <Tab><FaTrophy fontSize={25}/></Tab>
        </TabList>
    
        <TabPanel>
        <div className="h-[100%] overflow-y-scroll scrollbars-hidden">
            <div className="bg-[url('/src/assets/beautiful-mountains-landscape.jpg')] w-[100%] h-40 bg-cover relative">
                <div className="w-[8.3rem] h-[8.3rem] rounded-[50%] absolute top-[48.5%] left-[50%] translate-x-[-50%] bg-white shadow-lg"></div>
                <div className="w-32 h-32 rounded-[50%] absolute top-[50%] left-[50%] translate-x-[-50%] bg-[url('/src/assets/jack5.png')] bg-cover"></div>
            </div>
            <div className="mt-16 flex justify-center">
                <button className="bg-[#FABB18] rounded-full px-4 py-1 font-bold text-white flex">
                    <svg fill="#FFFFFF" height="25" width="25" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 487 487" xmlSpace="preserve" className="mr-3">
                    <g>
                        <g>
                        <path d="M308.1,277.95c0,35.7-28.9,64.6-64.6,64.6s-64.6-28.9-64.6-64.6s28.9-64.6,64.6-64.6S308.1,242.25,308.1,277.95z
                            M440.3,116.05c25.8,0,46.7,20.9,46.7,46.7v122.4v103.8c0,27.5-22.3,49.8-49.8,49.8H49.8c-27.5,0-49.8-22.3-49.8-49.8v-103.9
                            v-122.3l0,0c0-25.8,20.9-46.7,46.7-46.7h93.4l4.4-18.6c6.7-28.8,32.4-49.2,62-49.2h74.1c29.6,0,55.3,20.4,62,49.2l4.3,18.6H440.3z
                            M97.4,183.45c0-12.9-10.5-23.4-23.4-23.4c-13,0-23.5,10.5-23.5,23.4s10.5,23.4,23.4,23.4C86.9,206.95,97.4,196.45,97.4,183.45z
                            M358.7,277.95c0-63.6-51.6-115.2-115.2-115.2s-115.2,51.6-115.2,115.2s51.6,115.2,115.2,115.2S358.7,341.55,358.7,277.95z"/>
                        </g>
                    </g>
                    </svg>
                    Change avatar
                </button>
            </div>
            <div className="px-6 flex flex-col gap-10">
                <div className="grid grid-cols-2 mt-8">
                    <div className="mr-2">
                        <Input label={'Lastname'} type={'text'} id={'Lastname'} check={true} width={'100%'} defaultValue="Hoàng"/>
                   </div>
                    <div className="ml-2">
                        <Input label={'Firstname'} type={'text'} id={'Firstname'} check={true} width={'100%'} defaultValue="Gia Anh"/>
                    </div>
                </div>
                <Input label={'Phone number'} type={'text'} id={'Phone'} check={true} width={'100%'} defaultValue="0389684754"/>

                <Input label={'Email'} type={'email'} id={'email'} check={true} width={'100%'} defaultValue="boycodon2k3@gmail.com"/>

                <div className="flex justify-between items-center pb-4">
                    <div className="flex-1"><Input label={'Date of birth'} type={'date'} id={'DOB'} check={true} width={'100%'} defaultValue="2003-08-28"/></div>
                </div>
            </div>
        </div>
        </TabPanel>
        <TabPanel>
          <MobileAcitivity />
        </TabPanel>
        <TabPanel>
          <MobileAchivement />
        </TabPanel>
      </Tabs>
    )
}

export default User;