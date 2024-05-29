import { Link } from "react-router-dom";
import OneLineInput from "../../mobileComponents/Input/OneLineInput";
import Logo from "../../components/Svg/Logo";
import { Apple, Facebook, Google } from "../../components/Svg/SignLogo";

function MobileSignIn() {
    return ( 
        <div className="w-[100%] h-[100vh] flex align-middle justify-center">
            <div className="h-full w-full flex flex-col justify-center">
                <div className="flex items-center justify-center"><Logo /></div>
                <div className="px-8 mt-4">
                    <div className="mt-4">
                        <div className="font-[450] ml-1 text-lg mb-1">Username</div>
                        <OneLineInput value={''}/>
                    </div>
                    <div className="mt-4">
                        <div className="font-[450] ml-1 text-lg mb-1">Password</div>
                        <OneLineInput value={''}/>
                    </div>
                    
                    <div className="flex justify-end mt-2">Forgot password?</div>
                    
                </div>

                

                <div className="mt-8 flex justify-center items-center">
                    <Link to={'/mobile'} className="bg-[#FABB18] text-center font-semibold text-xl px-4 py-2 rounded-xl">Sign In</Link>
                </div>

                <div className="px-8 mt-10 flex justify-between items-center">
                    <div className="flex-auto h-[0.15rem] bg-[#D2D2D2] rounded-lg"></div>
                    <div className="w-32 text-center">Or sign in with</div>
                    <div className="flex-auto h-[0.15rem] bg-[#D2D2D2] rounded-lg"></div>
                </div>

                <div className='flex justify-between px-8 mt-4'>
                  <div className=' bg-blue-500 w-20 py-1 rounded-md flex justify-center hover:cursor-pointer'>
                    <Facebook />
                  </div>
                  <div className=' bg-black w-20 py-1 rounded-md flex justify-center hover:cursor-pointer'>
                    <Apple />
                  </div>
                  <div className='border-black border-[1px] w-20 py-1 rounded-md flex justify-center hover:cursor-pointer'>
                    <Google />
                  </div>
                </div>

                <div className="mt-8 flex justify-center items-center font-semibold pb-4">
                    <div className="mr-3">Don’t have an account?</div>
                    <Link to={'/mobile/sign-up'} className="text-[#92a41e]">Sign up</Link>
                </div>
            </div>
        </div>
    )
}

export default MobileSignIn;