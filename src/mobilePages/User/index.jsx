import OneLineInput from "../../mobileComponents/Input/OneLineInput";
import { PiCalendarDotsFill } from "react-icons/pi";


function User() {
    return ( 
        <div className="h-[100%] overflow-y-scroll scrollbars-hidden">
            <div className="bg-[url('/src/assets/beautiful-mountains-landscape.jpg')] w-[100%] h-40 bg-cover relative">
                <div className="w-[8.3rem] h-[8.3rem] rounded-[50%] absolute top-[48.5%] left-[50%] translate-x-[-50%] bg-white shadow-lg"></div>
                <div className="w-32 h-32 rounded-[50%] absolute top-[50%] left-[50%] translate-x-[-50%] bg-[url('/src/assets/jack5.png')] bg-cover"></div>
            </div>
            <div className="mt-16 flex justify-center">
                <div>@mailadomcuameomeo</div>
            </div>
            <div className="px-6">
                <div className="grid grid-cols-2 mt-8">
                    <div className="ml-2 font-medium mb-2 text-lg">First name</div>
                    <div className="ml-4 font-medium mb-2 text-lg">Last name</div>
                    <div className="mr-2"><OneLineInput value={"Ank"}/></div>
                    <div className="ml-2"><OneLineInput value={"Hoằng Ra"}/></div>
                </div>
                <div className="ml-2 font-medium text-lg mt-4 mb-2">Phone</div>
                <OneLineInput value={'0989999999'}/>

                <div className="ml-2 font-medium text-lg mt-4 mb-2">Email</div>
                <OneLineInput value={'boycodon2k3@gmail.com'}/>

                <div className="ml-2 font-medium text-lg mt-4 mb-2">Date of birth</div>
                <div className="flex justify-between items-center pb-4">
                    <div className="flex-1"><OneLineInput value={'30/04/1975'}/></div>
                    <div className="ml-4"><PiCalendarDotsFill fontSize={'2.5rem'}/></div>
                </div>
            </div>
        </div>
    )
}

export default User;