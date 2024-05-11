import bgImage from '../../assets/Untitled.png'
import Input from '../../components/Input'
import {Facebook, Apple, Google} from '../../components/Svg/SignLogo'
import SubmitButton from '../../components/SubmitButton/SubmitButton'
function SignUp() {
  return (
    <div className="relative h-screen">
            <img src={bgImage} alt="" className='w-full h-full object-cover absolute top-0 left-0'/>
            <div className='absolute top-[15%] left-[65%] h-[85%] w-[25%] bg-white flex flex-col text-center'>
                <h1 className='font-bold text-xl my-5'>Sign up</h1>
                <form method='post' className='space-y-5 p-5'>
                    <Input label={"Email"} type={"email"} id={'0'}/>
                    <Input label={"Username"} type={"text"} id={'1'}/>
                    <Input label={"Birthday"} type={"date"} id={'2'} />
                    <Input label={"Password"} type={"password"} id={'2'} />
                    <Input label={"Confrim password"} type={"password"} id={'2'} />
                    <div className='mt-2 align-middle text-xs text-justify w-full'>
                        <input id='checkbox' type="checkbox" className='w-4 h-4 mr-5'/>
                        <label htmlFor="checkbox" className=''>Yes; KPI master may use and share my email to enable personalized advertising with third parties (e.g. Google, Twitch) and to send me info about new releases, events, or other content. </label>
                    </div>
                    <h2>YOU CAN ALSO CREATE AN ACCOUNT WITH</h2>
                    <div className='flex justify-between'>
                        <div className=' bg-blue-500 w-20 py-1 rounded-md flex justify-center'>
                            <Facebook />
                        </div>
                        <div className=' bg-black w-20 py-1 rounded-md flex justify-center'>
                            <Apple />
                        </div>
                        <div className='border-black border-[1px] w-20 py-1 rounded-md flex justify-center'>
                            <Google />
                        </div>
                    </div>
                    <SubmitButton />
                </form>
            </div>
    </div>
  )
}

export default SignUp