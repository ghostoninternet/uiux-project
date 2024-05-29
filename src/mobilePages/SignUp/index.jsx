import { Link } from "react-router-dom";
import Logo from "../../components/Svg/Logo";
import OneLineInput from "../../mobileComponents/Input/OneLineInput";

function MobileSignUp() {
    return ( 
        <div className="w-[100%] h-[100vh] min-h-[800px] flex align-middle justify-center">
            <div className="h-full w-full flex flex-col justify-center">
                <div className="flex items-center justify-center"><Logo /></div>
                <div className="text-center font-bold text-4xl">Sign Up</div>
                <div className="px-8 mt-8">
                    <div className="mt-4">
                        <div className="font-[450] ml-1 text-lg mb-1">Username</div>
                        <OneLineInput value={''}/>
                    </div>
                    <div className="mt-4">
                        <div className="font-[450] ml-1 text-lg mb-1">Password</div>
                        <OneLineInput value={''}/>
                    </div>
                    <div className="mt-4">
                        <div className="font-[450] ml-1 text-lg mb-1">Confirm your password </div>
                        <OneLineInput value={''}/>
                    </div>
                    <div className="mt-4">
                        <div className="font-[450] ml-1 text-lg mb-1">Email</div>
                        <OneLineInput value={''}/>
                    </div>
                    <div className="mt-4">
                        <div className="font-[450] ml-1 text-lg mb-1">Phone number</div>
                        <OneLineInput value={''}/>
                    </div>
                </div>

                <div className="mt-8 flex justify-center items-center">
                    <div className="bg-[#FABB18] text-center font-semibold text-xl px-4 py-2 rounded-xl">Create</div>
                </div>

                <div className="mt-2 flex justify-center items-center font-semibold pb-4">
                    <div className="mr-3">Already have an account?</div>
                    <Link to={'/mobile/sign-in'} className="text-[#92a41e]">Sign in</Link>
                </div>
            </div>
        </div>
    )
}

export default MobileSignUp;