import { useNavigate } from "react-router-dom"
import bgImage from "../../../assets/beautiful-mountains-landscape.jpg"
import avatar from "../../../assets/HGA-Avatar.png"
import Input from "../../../components/Input"
import Cancel from "../../../components/Svg/Cancel"
import Save from "../../../components/Svg/Save"

function Edit() {
  const navigate = useNavigate()
  return (
    <div className="p-10 overflow-hidden">
        <div className="w-full bg-white min-h-44 shadow-lg rounded-xl h-auto">
            <div className="relative w-full">
                <img src={bgImage} alt="" className="rounded-t-xl w-full h-56 object-cover"/>
                <img className="absolute left-1/2 -translate-x-1/2 rounded-[50%] border-4 border-white w-60 h-60 object-cover top-1/3" src={avatar}/>
                <div className="absolute rounded-full w-20 h-20 bg-[#FABB18] top-44 right-20 pl-6 p-5">
                          <svg width="30" height="30" viewBox="0 -0.5 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                <g id="Dribbble-Light-Preview" transform="translate(-59.000000, -400.000000)" fill="#000000">
                                    <g id="icons" transform="translate(56.000000, 160.000000)">
                                        <path d="M3,260 L24,260 L24,258.010742 L3,258.010742 L3,260 Z M13.3341,254.032226 L9.3,254.032226 L9.3,249.950269 L19.63095,240 L24,244.115775 L13.3341,254.032226 Z" id="edit_fill-[#1480]">

                        </path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                </div>
            </div>

            <div className="mt-28 p-3 flex justify-center">
              <button className="bg-[#FABB18] rounded-full px-7 py-3 font-bold text-white flex text-lg w-64">
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
                Upload your photo
              </button>
            </div>

            <div className="flex p-10">

              <div className="flex flex-col font-bold space-y-16 w-1/5 ml-5 text-xl">
                  <h1 className="mt-3">Name <span className="text-red-700">*</span></h1>
                  <h1>Date of birth <span className="text-red-700">*</span></h1>
                  <h1>Phone number <span className="text-red-700">*</span></h1>
                  <h1>Email <span className="text-red-700">*</span></h1>
              </div>   

              <form className="flex flex-col font-bold text-2xl space-y-7 w-3/4" onSubmit={() => navigate('/profile')}>
                <div className="flex space-x-5">
                  <Input label={'Lastname'} type={'text'} id={'Lastname'} check={true} width="50%" defaultValue="Hoàng"/>
                  <Input label={'Firstname'} type={'text'} id={'Firstname'} check={true} width="50%" defaultValue="Gia Anh"/>
                </div>
                <Input label={'Date of birth'} type={'date'} id={'DOB'} check={true} width={'100%'} defaultValue="2003-08-28"/>
                <Input label={'Phone number'} type={'text'} id={'Phone'} check={true} width={'100%'} defaultValue="0389684754"/>
                <Input label={'Email'} type={'email'} id={'email'} check={true} width={'100%'} defaultValue="boycodon2k3@gmail.com"/>
                <div className="flex space-x-7 text-md ml-40">
                  <button className="px-5 py-2 bg-[#FABB18] rounded-full text-white flex">
                    <div className="mr-3 mt-1"><Save /></div>Save
                  </button>
                  <button className="px-5 py-2 rounded-full bg-gray-500 text-white flex">
                    <div className="mr-3 mt-1"><Cancel /></div>Cancel
                  </button>
                </div>
              </form>
            </div>



        </div>
    </div>
  )
}

export default Edit