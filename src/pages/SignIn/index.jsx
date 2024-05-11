import { Link } from 'react-router-dom'
import bgImage from '../../assets/Untitled.png'
import Input from '../../components/Input'
import SubmitButton from '../../components/SubmitButton/SubmitButton'
import Logo from '../../components/Svg/Logo'
import {Facebook, Apple, Google} from '../../components/Svg/SignLogo'


function SignIn() {
  return (
    <>
      <div className="flex flex-row h-screen w-screen">
        <div className='w-1/4 flex justify-center align-middle min-w-[300px]'>
          <div className="h-full flex flex-col justify-center">
            <div className="mb-8 flex justify-center">
              <Logo />
            </div>
            <div className='flex justify-center mb-8 text-3xl font-bold'>Sign in</div>

            <div className='flex justify-center'>
              <form>
                <div className='mb-7'>
                  <Input label={"username"} type={"text"} id={'1'}/>
                </div>
                <div className='mb-7'>
                  <Input label={"password"} type={"password"} id={'2'} />
                </div>
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
                <div className='mt-4 align-middle'>
                  <label className='flex items-center select-none text-sm'>
                   <input type="checkbox" className='w-4 h-4 mr-3 mt-0.5 hover:cursor-pointer'/>
                   stay signed in
                  </label>
                  
                </div>
                <div className='flex justify-center mt-20'>
                  <SubmitButton />
                </div>
              </form>
            </div>
            <div className='mt-8'>
              <div className='flex justify-center'>
                <Link to={'/forgot-password'} className='text-sm select-none'>CAN&apos;T SIGN IN?</Link>
              </div>
              <div className='flex justify-center mt-1'>
                <Link to={'/sign-up'} className='text-sm select-none'>CREATE ACCOUNT</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-3/4 h-full bg-slate-600">
          <img className="h-full w-full object-cover" src={bgImage} />
        </div>
      </div>
    </>
    
  )
}

export default SignIn