import bgImage from '../../assets/SignUp/SignUpWallpaper.png'
import Input from '../../components/Input'
import {Facebook, Apple, Google} from '../../components/Svg/SignLogo'
import SubmitButton from '../../components/SubmitButton/SubmitButton'
import Logo from '../../components/Svg/Logo'
import { Link } from 'react-router-dom'
function SignUp() {
  return (
    <div className="relative h-screen">
        <div className="ml-10 relative z-10 top-8">
            <Logo/>
        </div>
        <img src={bgImage} alt="" className='w-full h-full object-cover absolute top-0 left-0 rotate-0'/>
        <div className='absolute top-[0%] left-[65%] h-[100%] w-[25%] bg-white flex justify-center min-w-[380px]'>
            <div className='w-[80%] overflow-hidden'>
                <div className='flex justify-center mb-8 text-3xl font-bold mt-4'>Sign up</div>
                <div className='flex justify-center'>
                    <form>
                        <div className='mb-3'>
                            <Input label={"email"} type={"text"} id={'0'}/>
                        </div>
                        <div className='mb-3'>
                            <Input label={"username"} type={"text"} id={'1'}/>
                        </div>
                        <div className='mb-3'>
                            <Input label={"birthday"} type={"date"} id={'2'}/>
                        </div>
                        <div className='mb-3'>
                            <Input label={"password"} type={"password"} id={'3'}/>
                        </div>
                        <div className='mb-3'>
                            <Input label={"confirm password"} type={"password"} id={'4'}/>
                        </div>
                        
                
                        <div className='mt-4 align-middle'>
                            <label className='select-none text-sm'>
                            <input type="checkbox" className='w-4 h-4 mr-3 hover:cursor-pointer relative top-1'/>
                                Yes; KPI master may use and share my email to enable personalized advertising with third parties (e.g. Google, Twitch) and to send me info about new releases, events, or other content. 
                            </label>
                        </div>

                        <div className='font-bold text-xs flex justify-center mt-5 mb-2'>YOU CAN ALSO CREATE AN ACCOUNT WITH</div>

                        <div className='flex justify-between'>
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

                        <div className='flex justify-center mt-12'>
                            <SubmitButton />
                        </div>

                        <Link to={'/sign-in'} className='font-bold text-xs flex justify-center mt-4'>ALREADY HAVE AN ACCOUNT?</Link>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp